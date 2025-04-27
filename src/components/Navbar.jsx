import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-500 ${
        show ? 'top-0' : '-top-24'
      } bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg`}
    >
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='text-2xl md:text-3xl font-extrabold text-white dark:text-gray-200'>
          Mi Portfolio
        </div>

        {/* Menu desktop */}
        <div className='hidden md:flex space-x-10 text-white dark:text-gray-300 text-lg font-semibold'>
          <a
            href='#home'
            className='hover:text-cyan-300 dark:hover:text-cyan-400 transition'
          >
            Inicio
          </a>
          <a
            href='#about'
            className='hover:text-cyan-300 dark:hover:text-cyan-400 transition'
          >
            Sobre mí
          </a>
          <a
            href='#projects'
            className='hover:text-cyan-300 dark:hover:text-cyan-400 transition'
          >
            Proyectos
          </a>
          <a
            href='#contact'
            className='hover:text-cyan-300 dark:hover:text-cyan-400 transition'
          >
            Contacto
          </a>
          <ThemeToggle />
        </div>

        {/* Botón Hamburguesa mobile */}
        <div className='flex md:hidden items-center'>
          <button
            onClick={toggleMenu}
            className='text-white dark:text-gray-300 text-2xl focus:outline-none'
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6 space-y-6'>
          <a
            href='#home'
            onClick={closeMenu}
            className='text-white dark:text-gray-300 text-xl font-semibold hover:text-cyan-300 dark:hover:text-cyan-400'
          >
            Inicio
          </a>
          <a
            href='#about'
            onClick={closeMenu}
            className='text-white dark:text-gray-300 text-xl font-semibold hover:text-cyan-300 dark:hover:text-cyan-400'
          >
            Sobre mí
          </a>
          <a
            href='#projects'
            onClick={closeMenu}
            className='text-white dark:text-gray-300 text-xl font-semibold hover:text-cyan-300 dark:hover:text-cyan-400'
          >
            Proyectos
          </a>
          <a
            href='#contact'
            onClick={closeMenu}
            className='text-white dark:text-gray-300 text-xl font-semibold hover:text-cyan-300 dark:hover:text-cyan-400'
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
