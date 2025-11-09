import React from 'react'
import { motion } from 'framer-motion'

export default function GameResultCard({ game }) {
  const { equipoA, equipoB, marcador, fecha, estado } = game

  // color de estado
  const estadoColor = estado === 'En Vivo' ? 'text-red-500' : 'text-gray-400'

  return (
    <motion.div
      whileHover={{ scale:1.02 }}
      className="bg-white text-[#0b0d17] rounded-2xl shadow-lg p-5 flex flex-col sm:flex-row items-center justify-between"
    >
      <div className="flex-1">
        <h3 className="text-2xl font-bold">{equipoA} vs {equipoB}</h3>
        <p className="text-xl mt-2">Marcador: <span className="font-semibold">{marcador}</span></p>
        <p className="text-sm mt-1 text-gray-500">{fecha}</p>
      </div>
      <div className="text-right mt-4 sm:mt-0">
        <span className={`uppercase font-semibold ${estadoColor}`}>{estado}</span>
      </div>
    </motion.div>
  )
}
