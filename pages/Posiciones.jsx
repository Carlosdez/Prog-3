import React from 'react';

export default function Posiciones() {
  const equipos = [
    { pos: 1, nombre: 'Metros', pj: 24, pg: 15, pp: 9, pct: 0.8, racha: 'W3' },
    { pos: 2, nombre: 'Titanes', pj: 24, pg: 14, pp: 10, pct: 0.7, racha: 'L1' },
    { pos: 3, nombre: 'Leones', pj: 24, pg: 13, pp: 11, pct: 0.7, racha: 'W1' },
    { pos: 4, nombre: 'Indios', pj: 24, pg: 13, pp: 11, pct: 0.7, racha: 'L1' },

    // ...
  ];

  return (
    <div className="min-h-screen bg-[#0b0d17] text-white px-6 py-10">
      <h2 className="text-4xl font-bold text-[#FFD700] mb-8 text-center">Tabla de Posiciones</h2>
      
      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="w-full text-center border-collapse">
          <thead className="bg-[#FFD700] text-[#0b0d17] font-bold">
            <tr>
              <th className="py-3 px-2">#</th>
              <th className="py-3 px-2 text-left pl-4">Equipo</th>
              <th className="py-3 px-2">PJ</th>
              <th className="py-3 px-2">PG</th>
              <th className="py-3 px-2">PP</th>
              <th className="py-3 px-2">% Victoria</th>
              <th className="py-3 px-2">Racha</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((e) => (
              <tr key={e.pos} className="border-b border-gray-700 hover:bg-gray-800 transition">
                <td className="py-3">{e.pos}</td>
                <td className="py-3 text-left pl-4">{e.nombre}</td>
                <td>{e.pj}</td>
                <td>{e.pg}</td>
                <td>{e.pp}</td>
                <td>{(e.pct * 100).toFixed(1)}%</td>
                <td>{e.racha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
