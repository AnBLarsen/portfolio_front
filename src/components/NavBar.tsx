import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Work', 'Contact'];

export default function Navbar() {


  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

 

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileOpen && sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileOpen]);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const navLinkClass =
    'text-sm font-bold uppercase tracking-[0.15em] text-plum hover:text-violet transition-colors';

  return (
    <nav className="sticky top-0 flex items-center md:justify-evenly justify-between px-6 py-4 z-50 bg-cream/95 backdrop-blur border-b border-plum/10">
      <Link to={{ pathname: '/', hash: '' }} className="text-2xl font-semibold italic text-plum font-bodoni dark:border-orchid border-plum text-center p-2 pr-3">
        AL
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link key={item} to={{ pathname: '/', hash: `#${item.toLowerCase()}` }}
            className={navLinkClass}>
            {item}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden text-plum"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Rendered into <body>: the nav's backdrop-blur would otherwise trap this
          fixed overlay inside the nav bar and push the header around. */}
      {mobileOpen &&
        createPortal(
          <div className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm md:hidden">
            <div
              ref={sidebarRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute top-0 right-0 h-full w-64 bg-cream shadow-xl flex flex-col gap-6 px-6 py-6"
            >
              <div className="flex justify-end items-center">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-plum"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item}
                  to={{ pathname: '/', hash: `#${item.toLowerCase()}` }}
                  onClick={() => setMobileOpen(false)}
                  className={navLinkClass}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </nav>
  );
}
