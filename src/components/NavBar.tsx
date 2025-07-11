import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

export default function Navbar() {

  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

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

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-bold transition-colors ${
      isActive
        ? 'text-purple-light'
        : 'text-gray-800 hover:text-purple-dark dark:text-gray-100 dark:hover:text-purple-light'
    }`;

  return (
    <nav className="flex items-center md:justify-evenly justify-between px-6 py-4  relative z-50">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-light to-purple-dark text-transparent bg-clip-text font-pacifico dark:border-purple-300 border-purple-dark text-center p-2 pr-3">
        AL
      </h2>

      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <NavLink key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className={navLinkClass}>
            {item}
          </NavLink>
        ))}
        <button
          onClick={() => setDark((prev) => !prev)}
          aria-label="Toggle dark mode"
          className="transition-colors text-gray-700 hover:text-[#ba55d3] dark:text-gray-200 cursor-pointer"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden text-gray-700 dark:text-gray-100"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
          <div
            ref={sidebarRef}
            className="absolute top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl flex flex-col gap-6 px-6 py-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#ba55d3]">Menu</h2>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-gray-700 dark:text-gray-200"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className={navLinkClass}
              >
                {item}
              </NavLink>
            ))}

            <button
              onClick={() => {
                setDark((prev) => !prev);
                setMobileOpen(false);
              }}
              className="flex items-center gap-2 text-sm font-medium mt-4 text-gray-700 dark:text-gray-100"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
              {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
