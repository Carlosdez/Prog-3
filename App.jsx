import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resultados from './pages/Resultados'
import Posiciones from './pages/Posiciones'
import Jugadores from './pages/Jugadores'
import PerfilJugador from './pages/PerfilJugador'
import Predicciones from './pages/Predicciones'
import LiveGame from './pages/LiveGame'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-100 text-gray-900">
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenedor principal con animación de transición entre páginas */}
      <main className="flex-1 p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/resultados" element={<Resultados />} />
              <Route path="/posiciones" element={<Posiciones />} />
              <Route path="/jugadores" element={<Jugadores />} />
              <Route path="/jugadores/:id" element={<PerfilJugador />} />
              <Route path="/predicciones" element={<Predicciones />} />
              <Route path="/partido/:id" element={<LiveGame />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  )
}

