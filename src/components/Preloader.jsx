import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 segundos de simulación
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className='fixed inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 flex flex-col justify-center items-center z-50'>
      {/* Animación del logo */}
      <motion.img
        src='/assets/logo.png'
        alt='Logo Manuel Ríos'
        className='h-28 w-28 mb-6'
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1], rotate: [0, 360] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <motion.h1
        className='text-white text-2xl font-mono animate-pulse'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Cargando Manuel Ríos...
      </motion.h1>
    </div>
  );
}

export default Preloader;
