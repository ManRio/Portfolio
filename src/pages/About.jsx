import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaTools,
  FaCodeBranch,
  FaServer,
  FaBug,
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiExpress } from 'react-icons/si';

function About() {
  return (
    <section
      id='about'
      className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-300 px-6 py-16 transition-colors duration-500'
    >
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='w-full max-w-7xl flex flex-col gap-12'
      >
        {/* Texto */}
        <div className='text-center md:text-left'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>Sobre mí</h2>
          <p className='text-base md:text-lg leading-relaxed'>
            La <b>tecnología y la innovación</b> han sido pilares en mi
            crecimiento profesional. A través de la formación continua y la
            práctica autodidacta, he desarrollado competencias en tecnologías
            web como <strong>HTML5, CSS3, Java, SQL y JavaScript</strong>,
            enriqueciendo mi enfoque para resolver problemas de forma eficiente.
            Me apasiona <b>aprender</b> y aplicar
            <b> nuevas herramientas</b> para impulsar soluciones creativas,
            siempre <b>colaborando en equipo</b> y mirando hacia el{' '}
            <b>futuro</b> del sector.
          </p>
        </div>

        {/* Stack tecnológico */}
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center'>
          <IconWithLabel icon={<FaHtml5 />} label='HTML5' />
          <IconWithLabel icon={<FaCss3Alt />} label='CSS3' />
          <IconWithLabel icon={<FaJs />} label='JavaScript' />
          <IconWithLabel icon={<FaReact />} label='React' />
          <IconWithLabel icon={<FaAngular />} label='Angular' />
          <IconWithLabel icon={<FaJava />} label='Java' />
          <IconWithLabel icon={<FaLaptopCode />} label='C#' />
          <IconWithLabel icon={<FaDatabase />} label='SQL' />
          <IconWithLabel icon={<SiMysql />} label='MySQL' />
          <IconWithLabel icon={<SiMongodb />} label='MongoDB' />
          <IconWithLabel icon={<FaNodeJs />} label='Node.js' />
          <IconWithLabel icon={<SiExpress />} label='Express' />
          <IconWithLabel icon={<FaTools />} label='VS Code' />
          <IconWithLabel icon={<FaServer />} label='XAMPP' />
          <IconWithLabel icon={<FaBug />} label='Postman' />
          <IconWithLabel icon={<FaCodeBranch />} label='Git' />
          <IconWithLabel icon={<FaGithub />} label='GitHub' />
        </div>
      </motion.div>
    </section>
  );
}

function IconWithLabel({ icon, label }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-4xl md:text-5xl mb-2'>{icon}</div>
      <span className='text-sm md:text-base'>{label}</span>
    </div>
  );
}

export default About;
