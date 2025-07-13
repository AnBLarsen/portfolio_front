import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-800 dark:text-gray-100 transition-colors cursor-pointer hover:text-purple-dark dark:hover:text-purple-light"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
