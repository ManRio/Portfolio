import { motion } from 'framer-motion';

function Home() {
  return (
    <section
      id='home'
      className='min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-300 px-4 md:px-6 transition-colors duration-500'
    >
      <motion.div
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='flex flex-col md:flex-row items-center gap-6 md:gap-12'
      >
        <div className='text-center md:text-left'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight'>
            ¡Hola, soy Manuel Ríos!
          </h1>
          <p className='text-lg sm:text-2xl md:text-3xl font-light'>
            Desarrollador Web & Entusiasta de la Innovación Tecnológica.
          </p>
        </div>
        <div className='relative'>
          <img
            src='/assets/foto2.png'
            alt='Manuel Ríos'
            className='h-48 w-48 sm:h-64 sm:w-64 object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-300'
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
