import React from 'react';
import { useParams } from 'react-router-dom'
export default function PerfilJugador() {
  const { id } = useParams()
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Perfil Jugador #{id}</h2>
      <p>Estadísticas y gráfico de rendimiento del jugador.</p>
    </div>
  )
}