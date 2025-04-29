import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Leemos el tema desde localStorage al cargar
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Aplicamos la clase al HTML
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Guardamos el tema en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md transition hover:scale-110'
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
