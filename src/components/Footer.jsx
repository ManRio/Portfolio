import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-6 text-center transition-colors duration-500'
    >
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-6'>
        <div className='mb-4 md:mb-0'>
          <p>&copy; 2025 Manuel Ríos</p>
          <p className='text-sm text-gray-400 dark:text-gray-400'>
            Desarrollado con amor y dedicación.
          </p>
        </div>
        <div className='flex space-x-6 text-gray-400 dark:text-gray-300'>
          <a
            href='https://github.com/ManRio'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-cyan-400 transition'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/riosreinamanuel'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-cyan-400 transition'
          >
            LinkedIn
          </a>
          <a
            href='mailto:manureina87@gmail.com'
            className='hover:text-cyan-400 transition'
          >
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
