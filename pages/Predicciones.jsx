// src/pages/Predicciones.jsx
import React, { useState } from "react";
import NewsCard from "../components/Predicciones/NewsCard";
import RumorCard from "../components/Predicciones/RumorCard";
import PollCard from "../components/Predicciones/PollCard";
import VideoHighlight from "../components/Predicciones/VideoHighlight";
import { motion } from "framer-motion";

export default function Predicciones() {
  const [predicciones, setPredicciones] = useState([
    {
      equipoA: "Titanes del Licey",
      equipoB: "Metros de Santiago",
      votosA: 45,
      votosB: 55,
    },
    {
      equipoA: "Leones de Santo Domingo",
      equipoB: "Cañeros del Este",
      votosA: 62,
      votosB: 38,
    },
  ]);

  // Función para votar
  const votar = (index, equipo) => {
    const nuevos = [...predicciones];
    if (equipo === "A") nuevos[index].votosA++;
    else nuevos[index].votosB++;
    setPredicciones(nuevos);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-yellow-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
         Predicciones y Fan Zone
      </motion.h1>

      {/* Sección de encuestas */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
          ¿Quién ganará hoy?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {predicciones.map((p, i) => (
            <PollCard key={i} data={p} onVote={(team) => votar(i, team)} />
          ))}
        </div>
      </section>

      {/* Noticias */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
          Noticias destacadas
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <NewsCard
            title="Metros dominan la conferencia norte"
            desc="Con un inicio fuerte, los Metros buscan mantener el liderato rumbo a los playoffs."
            img="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
          />
          <NewsCard
            title="Se confirma fecha para el All-Star LNB"
            desc="El evento contará con nuevas competencias y presencia internacional."
            img='/imagen/logo2.png'
          />
          <NewsCard
            title="LNB lanza app oficial para fanáticos"
            desc="Con estadísticas, noticias y votaciones en tiempo real."
            img='/imagen/fanaticos.webp'
          />
        </div>
      </section>

      {/* Rumores */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
          Rumores calientes 🔥
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <RumorCard
            title="Un refuerzo extranjero llega a los Leones"
            text="Fuentes cercanas confirman que un escolta norteamericano se unirá al equipo esta semana."
          />
          <RumorCard
            title="Cañeros buscan fichar un nuevo centro"
            text="La directiva está en conversaciones con un jugador de gran experiencia en ligas europeas."
          />
        </div>
      </section>

      {/* Videos */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
          Clips y momentos destacados 🎥
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <VideoHighlight
            title="Las mejores jugadas de la jornada"
            url="https://www.youtube.com/embed/-MVJt7SXckU"
          />
          <VideoHighlight
            title="Entrevista exclusiva con el MVP Jassel Perez"
            url="https://www.youtube.com/embed/67MX7wlVAGE"

          />
        </div>
      </section>
    </div>
  );
}
