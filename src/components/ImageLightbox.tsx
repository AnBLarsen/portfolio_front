import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaMinus, FaPlus, FaTimes, FaUndo } from 'react-icons/fa';

type Props = {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
};

const MIN = 0.25; // allow zooming out below the fit-to-screen size
const FIT = 1;
const MAX = 4;
const STEP = 1.25;

type Point = { x: number; y: number };

/**
 * Full-screen image viewer.
 * Zoom: mouse wheel / trackpad pinch (toward the cursor), two-finger pinch on touch,
 * double-click or double-tap, the +/- buttons, or the + / - / 0 keys.
 * Pan: drag when zoomed in. Close: Esc, the X button, or clicking the dark backdrop.
 */
export default function ImageLightbox({ src, alt, caption, onClose }: Props) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pointers = useRef(new Map<number, Point>());
  const pinchStart = useRef<{ dist: number; scale: number; mid: Point; offset: Point } | null>(null);
  const dragStart = useRef<{ p: Point; offset: Point } | null>(null);
  const moved = useRef(false);
  const lastTap = useRef(0);

  // Keep latest values for listeners registered once.
  const state = useRef({ scale, offset });
  state.current = { scale, offset };

  // Zoom to `next`, keeping the point `at` (relative to the stage centre) fixed on screen.
  const zoomTo = useCallback((next: number, at: Point = { x: 0, y: 0 }) => {
    const { scale: s, offset: o } = state.current;
    let clamped = Math.min(MAX, Math.max(MIN, next));
    if (Math.abs(clamped - FIT) < 0.02) clamped = FIT; // snap to 100% so stepping in/out lands on it
    if (clamped <= FIT) {
      // At or below fit size the image is centred; nothing to pan.
      setScale(clamped);
      setOffset({ x: 0, y: 0 });
      return;
    }
    const k = clamped / s;
    setScale(clamped);
    setOffset({ x: at.x - (at.x - o.x) * k, y: at.y - (at.y - o.y) * k });
  }, []);

  const fromCenter = (clientX: number, clientY: number): Point => {
    const r = stageRef.current!.getBoundingClientRect();
    return { x: clientX - (r.left + r.width / 2), y: clientY - (r.top + r.height / 2) };
  };

  // Lock page scroll, focus the close button, restore focus on close.
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, []);

  // Keyboard shortcuts.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === '+' || e.key === '=') zoomTo(state.current.scale * STEP);
      else if (e.key === '-' || e.key === '_') zoomTo(state.current.scale / STEP);
      else if (e.key === '0') zoomTo(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, zoomTo]);

  // Wheel zoom needs a non-passive listener so the page doesn't scroll.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0025));
      zoomTo(state.current.scale * factor, fromCenter(e.clientX, e.clientY));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [zoomTo]);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved.current = false;
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinchStart.current = {
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        scale: state.current.scale,
        mid: fromCenter((a.x + b.x) / 2, (a.y + b.y) / 2),
        offset: state.current.offset,
      };
      dragStart.current = null;
    } else if (pointers.current.size === 1) {
      dragStart.current = { p: { x: e.clientX, y: e.clientY }, offset: state.current.offset };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && pinchStart.current) {
      moved.current = true;
      const [a, b] = [...pointers.current.values()];
      const ps = pinchStart.current;
      const next = Math.min(MAX, Math.max(MIN, ps.scale * (Math.hypot(a.x - b.x, a.y - b.y) / ps.dist)));
      const k = next / ps.scale;
      setScale(next);
      setOffset(
        next <= FIT
          ? { x: 0, y: 0 }
          : { x: ps.mid.x - (ps.mid.x - ps.offset.x) * k, y: ps.mid.y - (ps.mid.y - ps.offset.y) * k },
      );
    } else if (dragStart.current && state.current.scale > 1) {
      const dx = e.clientX - dragStart.current.p.x;
      const dy = e.clientY - dragStart.current.p.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) moved.current = true;
      setOffset({ x: dragStart.current.offset.x + dx, y: dragStart.current.offset.y + dy });
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinchStart.current = null;
    if (pointers.current.size === 1) {
      const [p] = [...pointers.current.values()];
      dragStart.current = { p, offset: state.current.offset };
    } else {
      dragStart.current = null;
    }

    // Double-tap / double-click to toggle zoom.
    if (!moved.current && e.target instanceof HTMLImageElement) {
      const now = Date.now();
      if (now - lastTap.current < 300) {
        zoomTo(state.current.scale !== FIT ? FIT : 2.5, fromCenter(e.clientX, e.clientY));
        lastTap.current = 0;
      } else {
        lastTap.current = now;
      }
    }
  };

  const zoomed = scale > FIT;
  const atFit = scale === FIT;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink text-cream"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.2em] text-cream/60">{Math.round(scale * 100)}%</p>
        <div className="flex items-center gap-2">
          <ToolButton label="Zoom out" onClick={() => zoomTo(scale / STEP)} disabled={scale <= MIN}>
            <FaMinus />
          </ToolButton>
          <ToolButton label="Zoom in" onClick={() => zoomTo(scale * STEP)} disabled={scale >= MAX}>
            <FaPlus />
          </ToolButton>
          <ToolButton label="Fit to screen" onClick={() => zoomTo(FIT)} disabled={atFit}>
            <FaUndo />
          </ToolButton>
          <ToolButton label="Close" onClick={onClose} buttonRef={closeRef}>
            <FaTimes />
          </ToolButton>
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative flex-1 overflow-hidden flex items-center justify-center select-none"
        style={{ touchAction: 'none', cursor: zoomed ? (dragStart.current ? 'grabbing' : 'grab') : 'zoom-in' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClick={(e) => {
          // Clicking the dark area (not the image) closes when not zoomed in.
          if (e.target === e.currentTarget && !zoomed && !moved.current) onClose();
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-h-full max-w-full object-contain px-4"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transition: pointers.current.size ? 'none' : 'transform 120ms ease-out',
          }}
        />
      </div>

      <div className="px-6 py-3 text-center text-sm text-cream/80 min-h-10">
        {caption}
        <span className="block mt-1 text-xs text-cream/50">
          Scroll or pinch to zoom · drag to move · double-click to zoom · Esc to close
        </span>
      </div>
    </div>,
    document.body,
  );
}

function ToolButton({
  label,
  onClick,
  disabled,
  children,
  buttonRef,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  buttonRef?: React.Ref<HTMLButtonElement>;
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className="h-10 w-10 grid place-items-center rounded-full bg-cream/10 hover:bg-cream/20 disabled:opacity-30 disabled:hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream transition"
    >
      {children}
    </button>
  );
}
