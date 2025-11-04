import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import './styles/App.css';

function App() {
  const [scores, setScores] = useState({ taino: 0, caribe: 0, empates: 0 });
  const [gameHistory, setGameHistory] = useState([]);

  useEffect(() => {
    const savedScores = localStorage.getItem('tresEnRayaScores');
    const savedHistory = localStorage.getItem('tresEnRayaHistory');
    if (savedScores) setScores(JSON.parse(savedScores));
    if (savedHistory) setGameHistory(JSON.parse(savedHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem('tresEnRayaScores', JSON.stringify(scores));
    localStorage.setItem('tresEnRayaHistory', JSON.stringify(gameHistory));
  }, [scores, gameHistory]);

  const updateScores = (winner) => {
    setScores(prev => {
      const updated = { ...prev };
      if (winner === 'X') updated.taino++;
      else if (winner === 'O') updated.caribe++;
      else updated.empates++;
      return updated;
    });
  };

  const addGameToHistory = (winner, moves) => {
    const newGame = {
      id: Date.now(),
      date: new Date().toLocaleString('es-DO'),
      winner: winner === 'X' ? 'Taino' : winner === 'O' ? 'Caribe' : 'Empate',
      moves
    };
    setGameHistory(prev => [newGame, ...prev].slice(0, 10));
  };

  const clearHistory = () => {
    if (window.confirm('¿Estás seguro de que quieres limpiar todo el historial?')) {
      setScores({ taino: 0, caribe: 0, empates: 0 });
      setGameHistory([]);
      localStorage.removeItem('tresEnRayaScores');
      localStorage.removeItem('tresEnRayaHistory');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🏝️ Tres en Raya Quisqueyano</h1>
        <p className="subtitle">Taino (X) vs Caribe (O)</p>
      </header>
      <ScoreBoard scores={scores} onClearHistory={clearHistory} />
      <Board onGameEnd={updateScores} onAddToHistory={addGameToHistory} />
      <div className="game-history">
        <h3>📊 Historial Reciente</h3>
        {gameHistory.length === 0 ? (
          <p className="no-history">No hay partidas jugadas todavía</p>
        ) : (
          <ul>
            {gameHistory.map(game => (
              <li key={game.id} className={`history-item ${game.winner.toLowerCase()}`}>
                <span className="history-date">{game.date}</span>
                <span className="history-winner">Ganador: {game.winner}</span>
                <span className="history-moves">Movimientos: {game.moves}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer className="app-footer">
        <p>¡Con el sabor auténtico de Quisqueya! 🇩🇴</p>
      </footer>
    </div>
  );
}
export default App;