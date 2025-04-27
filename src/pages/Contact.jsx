import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ikm8xwv', // <-- Tu service ID
        'template_b28eecc', // <-- Tu template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'tuemail@gmail.com',
        },
        '1XvwGihJB405QGopt' // <-- Tu public key
      )
      .then(
        (result) => {
          console.log('Mensaje enviado:', result.text);
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error al enviar:', error.text);
        }
      );
  };

  return (
    <section
      id='contact'
      className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-300 px-6 transition-colors duration-500'
    >
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className='w-full max-w-7xl py-16 flex flex-col gap-10'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-10'>
          Contacto
        </h2>

        {/* Sección dividida en 2 columnas (mobile primero) */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
          {/* Redes Sociales */}
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-semibold mb-8 text-center'>
              Puedes contactarme en mis redes:
            </h3>
            <div className='flex flex-col gap-6 items-center'>
              <a
                href='https://github.com/ManRio'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 px-6 py-3 rounded-full transition text-lg font-medium w-full justify-center'
              >
                <FaGithub size={24} /> GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/riosreinamanuel/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition text-lg font-medium w-full justify-center'
              >
                <FaLinkedin size={24} /> LinkedIn
              </a>
              <a
                href='mailto:manureina87@gmail.com'
                className='flex items-center gap-3 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full transition text-lg font-medium w-full justify-center'
              >
                <FaEnvelope size={24} /> Email
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-semibold mb-8 text-center'>
              ...O si prefieres, déjame tus datos:
            </h3>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col space-y-4 w-full'
            >
              <input
                type='text'
                name='name'
                placeholder='Tu Nombre'
                value={formData.name}
                onChange={handleChange}
                required
                className='p-3 rounded bg-white/20 dark:bg-white/10 text-white placeholder-gray-300 w-full'
              />
              <input
                type='email'
                name='email'
                placeholder='Tu Email'
                value={formData.email}
                onChange={handleChange}
                required
                className='p-3 rounded bg-white/20 dark:bg-white/10 text-white placeholder-gray-300 w-full'
              />
              <textarea
                name='message'
                placeholder='Tu Mensaje'
                rows='5'
                value={formData.message}
                onChange={handleChange}
                required
                className='p-3 rounded bg-white/20 dark:bg-white/10 text-white placeholder-gray-300 w-full'
              ></textarea>
              <button className='bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-3 rounded transition w-full'>
                Enviar
              </button>
              {success && (
                <p className='text-green-300 text-center mt-4'>
                  ¡Mensaje enviado con éxito!
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
