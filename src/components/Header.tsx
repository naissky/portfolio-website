import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, LogoIcon } from '../assets/Icons';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Efecto para cargar el tema cuando el componente se monta
  useEffect(() => {
    // Verificar si estamos en el navegador para evitar errores de SSR
    if (typeof window !== 'undefined') {
      // Recuperar el tema guardado
      const savedTheme = localStorage.getItem('theme');
      
      // Si el tema guardado es 'dark', aplicar tema oscuro
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDarkTheme(true);
      }
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    // Calcular el nuevo estado del tema
    const newTheme = !isDarkTheme;
    
    // Alternar la clase 'dark' en el elemento raíz del documento
    document.documentElement.classList.toggle('dark');
    
    // Guardar el nuevo tema en localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Actualizar el estado del tema
    setIsDarkTheme(newTheme);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-screen-xl mt-2 ml-4 mr-4 px-10 lg:mx-auto md:mt-5 py-4 bg-black flex rounded-full justify-between items-center">
        <div className="text-2xl font-bold text-zinc-900 dark:text-white">
          <a href="/">
            <LogoIcon />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden z-50 relative" onClick={toggleMenu} aria-label="Toggle Menu">
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          ></div>
        </button>

        {/* Navigation Links */}
        <nav
          className={`
          fixed top-0 right-0 h-screen w-screen bg-black
          transform transition-transform duration-300 ease-in-out
          md:static md:w-auto md:h-auto md:bg-transparent md:translate-x-0
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-6
          shadow-lg md:shadow-none
        `}
        >
          <a
            href="#about"
            className="text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/proyects"
            className="text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <div className="flex space-x-4">
            <button 
              onClick={toggleTheme} 
              className='hover:scale-150 transition duration-300'
              aria-label={`Cambiar a tema ${isDarkTheme ? 'claro' : 'oscuro'}`}
            >
              {isDarkTheme ? '☀️' : '🌙'}
            </button>
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300"
            >
              <LinkedinIcon />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};