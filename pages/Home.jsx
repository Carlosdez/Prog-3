import React, { useState } from 'react';
import GameCard from '../components/GameCard';

export default function Home() {
  const [proximosPartidos] = useState([
    { equipoA: 'Metros de Santiago', equipoB: 'Titanes del Licey', fecha: '10/11/2025' },
    { equipoA: 'Cañeros del Este', equipoB: 'Leones de Santo Domingo', fecha: '11/11/2025' },
    { equipoA: 'Titanes', equipoB:'Indios', fecha: '15/11/2025' }
  ]);

  return (
    <div className="bg-[#0b0d17] text-white overflow-hidden w-full min-h-screen">
      
      {/* Sección principal tipo "Hero banner" */}
      <section 
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"        
        style={{ backgroundImage: "url('/imagen/liga.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-6xl font-extrabold text-[#FFD700] drop-shadow-lg uppercase tracking-widest">
            LNB Fan App
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            ¡Donde la pasión por el baloncesto dominicano nunca se detiene!
          </p>
        </div>
      </section>

      {/* Sección de próximos partidos */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-[#FFD700] mb-6 border-b border-gray-700 pb-2">
          Próximos Partidos
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {proximosPartidos.map((game, i) => (
            <GameCard key={i} game={game} />
          ))}
        </div>
      </section>
    </div>
  );

  
}

