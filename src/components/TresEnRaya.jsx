import React, { useState, useEffect, useRef } from 'react';
import clickSfx from '../assets/sounds/click.wav';
import winSfx from '../assets/sounds/win.wav';
import tieSfx from '../assets/sounds/tie.wav';

export default function TresEnRaya() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [esJugadorQuisqueya, setEsJugadorQuisqueya] = useState(true);
  const [ganador, setGanador] = useState(null);
  const [empate, setEmpate] = useState(false);
  const [puntajes, setPuntajes] = useState({ quisqueya: 0, taino: 0, empates: 0 });
  const clickRef = useRef(null);
  const winRef = useRef(null);
  const tieRef = useRef(null);

  useEffect(() => {
    const p = localStorage.getItem('puntajes-tres-en-raya');
    if (p) setPuntajes(JSON.parse(p));
  }, []);

  useEffect(() => {
    localStorage.setItem('puntajes-tres-en-raya', JSON.stringify(puntajes));
  }, [puntajes]);

  const combinacionesGanadoras = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  useEffect(() => {
    const verificar = () => {
      for (let c of combinacionesGanadoras) {
        const [a,b,cidx] = c;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[cidx]) {
          return tablero[a];
        }
      }
      return null;
    };
    const res = verificar();
    if (res) {
      setGanador(res);
      setPuntajes(prev => ({...prev, [res === 'Q' ? 'quisqueya' : 'taino']: prev[res === 'Q' ? 'quisqueya' : 'taino'] + 1 }));
      if (winRef.current) { winRef.current.currentTime = 0; winRef.current.play(); }
    } else if (tablero.every(Boolean) && !ganador) {
      setEmpate(true);
      setPuntajes(prev => ({...prev, empates: prev.empates + 1 }));
      if (tieRef.current) { tieRef.current.currentTime = 0; tieRef.current.play(); }
    }
  }, [tablero]);

  const manejarClick = (i) => {
    if (tablero[i] || ganador || empate) return;
    const nuevo = [...tablero];
    nuevo[i] = esJugadorQuisqueya ? 'Q' : 'T';
    setTablero(nuevo);
    setEsJugadorQuisqueya(!esJugadorQuisqueya);
    if (clickRef.current) { clickRef.current.currentTime = 0; clickRef.current.play(); }
  };

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null));
    setEsJugadorQuisqueya(true);
    setGanador(null);
    setEmpate(false);
  };

  const reiniciarPuntajes = () => {
    setPuntajes({ quisqueya:0, taino:0, empates:0 });
    localStorage.removeItem('puntajes-tres-en-raya');
  };

  const obtenerClase = (v) => {
    if (v === 'Q') return 'bg-blue-600 text-white transform scale-105';
    if (v === 'T') return 'bg-red-600 text-white transform scale-105';
    return 'bg-white hover:shadow-xl';
  };

  const mensajeFinal = () => {
    if (ganador === 'Q') return '¡Quisqueya la Bella ganó! 🎉';
    if (ganador === 'T') return '¡Taíno conquistó el tablero! 🏆';
    if (empate) return '¡Empate! Los guerreros quedaron tablas ⚔️';
    return null;
  };

  return (
    <div className="max-w-3xl w-full bg-white rounded-3xl p-8 shadow-2xl">
      <audio ref={clickRef} src={clickSfx} />
      <audio ref={winRef} src={winSfx} />
      <audio ref={tieRef} src={tieSfx} />

      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-gray-800 to-red-600">
          Tres en Raya Dominicano
        </h1>
        <p className="text-gray-600">🇩🇴 Quisqueya vs Taíno 🇩🇴</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-lg border-2 border-blue-600 bg-blue-50 text-center">
          <p className="text-sm font-semibold text-blue-800">Quisqueya</p>
          <p className="text-3xl font-bold text-blue-600">{puntajes.quisqueya}</p>
        </div>
        <div className="p-4 rounded-lg border-2 border-gray-300 bg-gray-50 text-center">
          <p className="text-sm font-semibold text-gray-800">Empates</p>
          <p className="text-3xl font-bold text-gray-600">{puntajes.empates}</p>
        </div>
        <div className="p-4 rounded-lg border-2 border-red-600 bg-red-50 text-center">
          <p className="text-sm font-semibold text-red-800">Taíno</p>
          <p className="text-3xl font-bold text-red-600">{puntajes.taino}</p>
        </div>
      </div>

      {!ganador && !empate && (
        <div className="text-center mb-4">
          <p className="font-semibold">Turno de: <span className={esJugadorQuisqueya ? 'text-blue-600' : 'text-red-600'}>{esJugadorQuisqueya ? 'Quisqueya (Q)' : 'Taíno (T)'}</span></p>
        </div>
      )}

      {(ganador || empate) && (
        <div className="text-center mb-4 animate-pulse">
          <p className="text-2xl font-bold text-green-600">{mensajeFinal()}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 mb-4 max-w-md mx-auto">
        {tablero.map((v,i) => (
          <button
            key={i}
            onClick={() => manejarClick(i)}
            disabled={v !== null || ganador || empate}
            className={`h-24 rounded-xl font-bold text-4xl transition-all duration-200 border-4 border-gray-300 shadow-lg ${obtenerClase(v)} ${!v && !ganador && !empate ? 'hover:-translate-y-1' : 'cursor-default'}`}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        <button onClick={reiniciarJuego} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow">🔄 Nueva Partida</button>
        <button onClick={reiniciarPuntajes} className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl shadow">🗑️ Limpiar Puntajes</button>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>Hecho con ❤️ en República Dominicana</p>
      </div>
    </div>
  );
}
