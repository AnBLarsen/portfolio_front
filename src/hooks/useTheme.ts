import { useEffect, useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDark = media.matches;
    const dark = stored === 'dark' || (!stored && prefersDark);

    setIsDark(dark);
    updateHtmlClass(dark);

    const listener = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme')) return;
      setIsDark(e.matches);
      updateHtmlClass(e.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    updateHtmlClass(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return { isDark, toggleTheme };
}

function updateHtmlClass(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark);
}
