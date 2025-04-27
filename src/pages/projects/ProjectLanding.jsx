import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import LandingMobile from '/assets/LandingMobile.png';
import LandingPC from '/assets/LandingPC.png';

function ProjectLanding() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <section className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-300 px-6 transition-colors duration-500'>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='w-full max-w-6xl flex flex-col gap-10 py-16'
      >
        <h1 className='text-4xl md:text-5xl font-bold text-center mb-8'>
          Proyecto: Landing Page Responsive
        </h1>

        {/* Imágenes */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='flex justify-center'>
            <img
              src={LandingPC}
              alt='Vista PC'
              className='rounded-lg shadow-lg max-h-[500px] w-auto'
            />
          </div>
          <div className='flex justify-center'>
            <img
              src={LandingMobile}
              alt='Vista Móvil'
              className='rounded-lg shadow-lg max-h-[500px] w-auto'
            />
          </div>
        </div>

        {/* Descripción */}
        <div className='flex flex-col gap-6'>
          <p className='text-lg leading-relaxed text-center'>
            Proyecto de desarrollo de una landing page completamente responsive.
            Creado para fortalecer habilidades de diseño moderno usando{' '}
            <strong>HTML5</strong>,<strong> CSS3</strong> y{' '}
            <strong>JavaScript</strong>, aplicando maquetación avanzada con{' '}
            <strong>Flexbox</strong> y <strong>CSS Grid</strong>.
          </p>

          <ul className='list-disc list-inside space-y-2 text-center'>
            <li>Secciones principales: Hero, Servicios, Contacto</li>
            <li>Diseño Mobile First</li>
            <li>Optimización de carga</li>
            <li>Maquetación profesional usando Flexbox y Grid</li>
          </ul>
        </div>

        {/* Stack Tecnológico */}
        <div className='mt-10 flex flex-col items-center gap-8'>
          <h2 className='text-2xl font-bold'>Tecnologías Utilizadas</h2>
          <div className='grid grid-cols-3 gap-6'>
            <StackIcon icon={<FaHtml5 size={40} />} label='HTML5' />
            <StackIcon icon={<FaCss3Alt size={40} />} label='CSS3' />
            <StackIcon icon={<FaJsSquare size={40} />} label='JavaScript' />
          </div>
        </div>

        {/* Botones */}
        <div className='flex flex-col md:flex-row gap-4 justify-center mt-10'>
          <a
            href='https://github.com/ManRio/landingPageResponsive'
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

export default ProjectLanding;
