import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GameResultCard from '../components/GameCard'

export default function Resultados() {
  // datos simulados
  const [resultados] = useState([
    { equipoA:'Metros de Santiago', equipoB:'Titanes del Licey', marcador:'85-78', fecha:'08/11/2025', estado:'Finalizado' },
    { equipoA:'Cañeros del Este', equipoB:'Leones de Santo Domingo', marcador:'92-90', fecha:'07/11/2025', estado:'Finalizado' },
    { equipoA:'Titanes', equipoB:'Caleros', marcador:'-', fecha:'10/11/2025', estado:'En Vivo' },

    // … más
  ])

  return (
    <div className="min-h-screen bg-[#0b0d17] text-white px-4 py-10">
      <h2 className="text-4xl font-extrabold text-[#FFD700] mb-6">Resultados de la Jornada</h2>

      {/* Filtros simples */}
      <div className="flex gap-4 mb-8">
        {['Todos','Hoy','En Vivo','Finalizados'].map((tab,i) => (
          <button key={i} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
            {tab}
          </button>
        ))}
      </div>

      {/* Lista de resultados */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:0.5 }}
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {resultados.map((game, i) => (
          <GameResultCard key={i} game={game} />
        ))}
      </motion.div>
    </div>
  )
}
