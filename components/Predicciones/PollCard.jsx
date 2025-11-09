// src/components/Predicciones/PollCard.jsx
import React from "react";

export default function PollCard({ data, onVote }) {
  const total = data.votosA + data.votosB;
  const porcA = ((data.votosA / total) * 100).toFixed(1);
  const porcB = ((data.votosB / total) * 100).toFixed(1);

  return (
    <div className="bg-white/10 rounded-xl p-5 text-center border border-yellow-400/30">
      <h3 className="text-yellow-300 font-semibold mb-3">
        {data.equipoA} 🆚 {data.equipoB}
      </h3>
      <div className="flex justify-around mb-4">
        <button
          onClick={() => onVote("A")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg"
        >
          Votar {data.equipoA}
        </button>
        <button
          onClick={() => onVote("B")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg"
        >
          Votar {data.equipoB}
        </button>
      </div>
      <p>
        🏀 {data.equipoA}: {porcA}% — {data.equipoB}: {porcB}%
      </p>
    </div>
  );
}
