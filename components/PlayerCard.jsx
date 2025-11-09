import React from 'react';

export default function PlayerCard({ player }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition mb-4">
      <h3 className="font-bold">{player.nombre}</h3>
      <p>Equipo: {player.equipo}</p>
      <p>Puntos: {player.puntos}</p>
    </div>
  )
}