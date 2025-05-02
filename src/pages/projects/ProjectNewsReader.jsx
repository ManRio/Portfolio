import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiReact } from 'react-icons/si';

import Landing from '/assets/newsreaderlandingpage.png';
import Feed from '/assets/NewsReaderFeed.png';
import Interests from '/assets/NewsReaderInterests.png';
import Profile from '/assets/NewsReaderProfile.png';

function ProjectNewsReader() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <section className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-300 px-6 transition-colors duration-500'>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='w-full max-w-6xl flex flex-col gap-10 py-16'
      >
        <h1 className='text-4xl md:text-5xl font-bold text-center mb-8'>
          Proyecto: NewsReader 📰
        </h1>

        {/* Galería de imágenes */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <img src={Landing} alt='Landing' className='rounded-lg shadow-lg' />
          <img src={Feed} alt='Feed' className='rounded-lg shadow-lg' />
          <img
            src={Interests}
            alt='Interests'
            className='rounded-lg shadow-lg'
          />
          <img src={Profile} alt='Profile' className='rounded-lg shadow-lg' />
        </div>

        {/* Descripción */}
        <div className='flex flex-col gap-6 text-center'>
          <p className='text-lg leading-relaxed'>
            NewsReader es una aplicación web para lectura de noticias
            personalizadas mediante inteligencia artificial. Permite al usuario
            elegir intereses, guardar artículos, visualizar su historial y
            modificar su perfil de forma segura.
          </p>

          <ul className='list-disc list-inside space-y-2'>
            <li>Inicio de sesión seguro y edición de perfil</li>
            <li>Selección de intereses con persistencia de datos</li>
            <li>Feed personalizado según tus gustos</li>
            <li>Modo oscuro y diseño 100% responsive</li>
          </ul>
        </div>

        {/* Stack Tecnológico */}
        <div className='mt-10 flex flex-col items-center gap-8'>
          <h2 className='text-2xl font-bold'>Tecnologías Utilizadas</h2>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
            <StackIcon icon={<SiMongodb size={40} />} label='MongoDB' />
            <StackIcon icon={<SiNextdotjs size={40} />} label='Next.js' />
            <StackIcon icon={<SiReact size={40} />} label='React' />
            <StackIcon icon={<SiTailwindcss size={40} />} label='TailwindCSS' />
          </div>
        </div>

        {/* Botones */}
        <div className='flex flex-col md:flex-row gap-4 justify-center mt-10'>
          <a
            href='https://github.com/ManRio/newsreader'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-bold rounded transition'
          >
            Ver Código
          </a>
          <button
            onClick={handleBack}
            className='px-6 py-3 bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-bold rounded transition'
          >
            ⬅️ Volver al Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function StackIcon({ icon, label }) {
  return (
    <div className='flex flex-col items-center'>
      <div>{icon}</div>
      <span className='text-sm mt-2'>{label}</span>
    </div>
  );
}

export default ProjectNewsReader;
