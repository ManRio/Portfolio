import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importamos los iconos

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='flex items-center'>
      <label
        htmlFor='theme-toggle'
        className='flex items-center cursor-pointer'
      >
        <div className='relative'>
          <input
            id='theme-toggle'
            type='checkbox'
            className='sr-only'
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <div className='block bg-gray-600 w-14 h-8 rounded-full'></div>
          <div
            className={`dot absolute top-1 left-1 bg-white w-6 h-6 rounded-full flex items-center justify-center transition ${
              theme === 'dark' ? 'translate-x-6' : ''
            }`}
          >
            {theme === 'light' ? (
              <FaMoon className='text-gray-800 text-xs' />
            ) : (
              <FaSun className='text-yellow-400 text-xs' />
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

export default ThemeToggle;
