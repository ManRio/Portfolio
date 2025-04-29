import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className='ml-2 p-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md transition hover:scale-110'
      aria-label='Toggle Dark Mode'
    >
      {theme === 'light' ? (
        <FaMoon className='text-gray-800' />
      ) : (
        <FaSun className='text-yellow-300' />
      )}
    </button>
  );
}

export default ThemeToggle;
