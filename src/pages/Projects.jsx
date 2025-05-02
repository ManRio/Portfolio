import { motion } from 'framer-motion';
import Slider from 'react-slick';

const projects = [
  {
    id: 1,
    title: 'StockIt',
    description: 'Gestión de inventarios moderna para almacenes y tiendas.',
    image: '/assets/LogoStockIt.png',
    demoLink: '/projects/stockit',
    codeLink: 'https://github.com/ManRio/StockIt',
    external: false,
  },
  {
    id: 2,
    title: 'Landing Page Responsive',
    description:
      'Landing page responsive construida para prácticas de maquetación moderna.',
    image: '/assets/landing.jpg',
    demoLink: '/projects/landingpageresponsive',
    codeLink: 'https://github.com/ManRio/landingPageResponsive',
    external: false,
  },
  {
    id: 3,
    title: 'Jamar',
    description: 'Aplicación de gestión empresarial con Deploy online.',
    image: '/assets/jamar.jpg',
    demoLink: 'http://jamarmedia.es/inicio',
    codeLink: 'https://github.com/ManRio/jamar',
    external: true,
  },
  {
    id: 4,
    title: 'NewsReader',
    description:
      'Lector de noticias personalizadas por IA con perfil y favoritos.',
    image: '/assets/NewsReaderFeed.png',
    demoLink: '/projects/ProjectNewsReader',
    codeLink: 'https://github.com/ManRio/newsreader',
    external: false,
  },
];

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: false },
      },
    ],
  };

  return (
    <section
      id='projects'
      className='min-h-screen bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-300 py-16 px-4 flex flex-col justify-center items-center'
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

        <div className='w-full flex justify-center'>
          <div className='w-full max-w-[1200px] px-4'>
            <Slider {...settings}>
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-lg shadow-xl p-8 md:p-12 flex flex-col gap-6 items-center md:flex-row min-h-[450px]'
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full md:w-1/2 max-h-[300px] object-cover rounded'
                    />
                    <div className='flex flex-col gap-4 md:w-1/2 text-center md:text-left'>
                      <h3 className='text-3xl font-bold'>{project.title}</h3>
                      <p className='text-gray-300'>{project.description}</p>
                      <div className='flex gap-4 justify-center md:justify-start mt-2 flex-wrap'>
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
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
