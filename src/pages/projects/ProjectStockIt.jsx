import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Imágenes
import landingStockit from '../../assets/landingStockit.png';
import loginStockit from '../../assets/LoginStockit.png';
import dashboardStockit from '../../assets/DashboardStockit.png';
import otherStockit from '../../assets/otherStockit.png';

// Iconos Tecnologías
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiJsonwebtokens,
} from 'react-icons/si';

function ProjectStockIt() {
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
        className='w-full max-w-7xl flex flex-col gap-10 py-16'
      >
        <h1 className='text-4xl md:text-5xl font-bold text-center mb-8'>
          Proyecto: StockIt
        </h1>

        <p className='text-lg leading-relaxed text-center'>
          <b>StockIt</b> es una solución SaaS desarrollada para la gestión
          eficiente de inventarios, productos, ventas y usuarios. Diseñado para
          pymes que buscan un control visual y sencillo de su stock en tiempo
          real.
        </p>

        {/* Galería de Imágenes */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
          {[landingStockit, loginStockit, dashboardStockit, otherStockit].map(
            (img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`StockIt Screenshot ${idx + 1}`}
                className='rounded-lg shadow-lg hover:scale-105 transition duration-300'
              />
            )
          )}
        </div>

        {/* Características */}
        <div className='mt-10 text-center'>
          <h2 className='text-2xl font-bold mb-4'>
            Características Principales
          </h2>
          <ul className='list-disc list-inside space-y-2'>
            <li>Autenticación segura de usuarios (Login personalizado).</li>
            <li>Dashboard administrativo dinámico con KPIs y reportes.</li>
            <li>Gestión de productos, usuarios y reportes mensuales.</li>
            <li>Filtros avanzados y tablas interactivas.</li>
            <li>Diseño 100% Responsive para dispositivos móviles.</li>
          </ul>
        </div>

        {/* Tecnologías */}
        <div className='mt-10'>
          <h2 className='text-2xl font-bold text-center mb-8'>
            Tecnologías Utilizadas
          </h2>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center'>
            <StackIcon
              icon={<SiSpringboot className='text-5xl' />}
              label='Spring Boot'
            />
            <StackIcon icon={<FaJava className='text-5xl' />} label='Java' />
            <StackIcon icon={<FaHtml5 className='text-5xl' />} label='HTML5' />
            <StackIcon icon={<FaCss3Alt className='text-5xl' />} label='CSS3' />
            <StackIcon icon={<FaReact className='text-5xl' />} label='React' />
            <StackIcon
              icon={<SiTailwindcss className='text-5xl' />}
              label='Tailwind'
            />
            <StackIcon
              icon={<FaJsSquare className='text-5xl' />}
              label='JavaScript'
            />
            <StackIcon icon={<SiMysql className='text-5xl' />} label='MySQL' />
            <StackIcon
              icon={<SiJsonwebtokens className='text-5xl' />}
              label='JWT'
            />
          </div>
        </div>

        {/* Botones */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-12'>
          <a
            href='https://github.com/ManRio/StockIt'
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

export default ProjectStockIt;
