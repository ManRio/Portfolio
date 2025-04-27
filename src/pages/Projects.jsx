import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'StockIt',
    description:
      'Gestión de inventarios moderna para almacenes y tiendas, construido como proyecto didáctico.',
    image: '/assets/LogoStockIt.png',
    demoLink: '/projects/stockit',
    codeLink: 'https://github.com/ManRio/StockIt',
    external: false,
  },
  {
    id: 2,
    title: 'Landing Page Responsive',
    description:
      'Landing page completamente responsive construida para prácticas de maquetación moderna.',
    image: '/assets/landing.jpg',
    demoLink: '/projects/landingpageresponsive',
    codeLink: 'https://github.com/ManRio/landingPageResponsive',
    external: false,
  },
  {
    id: 3,
    title: 'Jamar',
    description:
      'Aplicación de gestión empresarial desarrollada como proyecto final, con Deploy online.',
    image: '/assets/jamar.jpg',
    demoLink: 'http://jamarmedia.es/inicio',
    codeLink: 'https://github.com/ManRio/jamar',
    external: true,
  },
];

function Projects() {
  return (
    <section
      id='projects'
      className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-16 px-6 transition-colors duration-500'
    >
      <motion.div
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='w-full max-w-7xl flex flex-col items-center gap-12'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-center'>
          Proyectos
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className='bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 flex flex-col'
            >
              <img
                src={project.image}
                alt={project.title}
                className='h-48 w-full object-cover'
                loading='lazy'
              />
              <div className='p-6 flex flex-col flex-1'>
                <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-300 flex-1'>{project.description}</p>
                <div className='mt-4 flex flex-wrap gap-4 justify-center'>
                  <a
                    href={project.demoLink}
                    target={project.external ? '_blank' : '_self'}
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-cyan-400 hover:bg-cyan-500 text-white rounded transition text-sm font-semibold'
                  >
                    Ver Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded transition text-sm font-semibold'
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
