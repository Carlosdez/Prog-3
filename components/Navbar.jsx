import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario hace scroll más de 10 píxeles, activamos el fondo
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled ? 'bg-[#0b0d17] shadow-md' : 'bg-transparent shadow-none'}
        text-white py-4 px-6 flex justify-between items-center`}
    >
      {/* Logo con imagen */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/imagen/logo2.png"
          alt="Logo"
          style={{ height: '8vh', width: '10vh' }}
        />
      </Link>

      {/* Enlaces de navegación */}
      <div className="flex space-x-6 font-medium">
        <Link to="/" className="hover:text-[#FFD700] transition-colors">Inicio</Link>
        <Link to="/resultados" className="hover:text-[#FFD700] transition-colors">Resultados</Link>
        <Link to="/posiciones" className="hover:text-[#FFD700] transition-colors">Posiciones</Link>
        <Link to="/jugadores" className="hover:text-[#FFD700] transition-colors">Jugadores</Link>
        <Link to="/predicciones" className="hover:text-[#FFD700] transition-colors">Fan Zone</Link>
      </div>
    </nav>
  );
}

