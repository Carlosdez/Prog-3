import React from 'react';
import { motion } from 'framer-motion';

export default function Jugadores() {
  const jugadores = [
    { nombre: 'Juan Miguel Suero', equipo: 'Indios', puntos: 25.8, rebotes: 7.0, asistencias: 5, img: '/imagen/juan miguel.jpg' },
    { nombre: 'Richard Bautista', equipo: 'Titanes ', puntos: 15.2, rebotes: 5.5, asistencias: 7.5, img: '/imagen/Richard-Bautista.webp' },
    { nombre: 'Juan Guerrero', equipo: 'Metros', puntos: 19.3, rebotes: 8.3, asistencias: 2.5, img: '/imagen/juan-guerrero.jpeg' },
    { nombre: 'Jonathan Araujo', equipo: 'Titanes ', puntos: 10.9, rebotes: 8.3, asistencias: 0.9, img: '/imagen/Jonathan Araujo.jpeg' },
    { nombre: 'Jassel Perez', equipo: 'Titanes ', puntos: 21.4, rebotes: 4.9, asistencias: 3.9, img: '/imagen/Jassel-Perez.webp' },
    { nombre: 'Omar Silverio', equipo: 'Metros', puntos: 12.9, rebotes: 2.4, asistencias: 3.3, img: '/imagen/Omar Silverio.jpeg' },


    // ...
  ];

  return (
    <div className="min-h-screen bg-[#0b0d17] text-white px-6 py-10">
      <h2 className="text-4xl font-bold text-[#FFD700] mb-8 text-center">Jugadores Destacados</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {jugadores.map((j, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-[#0b0d17] rounded-2xl shadow-lg overflow-hidden"
          >
            <img src={j.img} alt={j.nombre} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{j.nombre}</h3>
              <p className="text-gray-600 mb-2">{j.equipo}</p>
              <div className="flex justify-around text-sm font-semibold">
                <span>PTS: {j.puntos}</span>
                <span>REB: {j.rebotes}</span>
                <span>AST: {j.asistencias}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
