// src/components/FanZone/RumorCard.jsx
import React from "react";
import { motion } from "framer-motion";

const RumorCard = ({ title, text }) => {
  return (
    <motion.div
      className="bg-blue-800 rounded-xl p-5 border border-yellow-400/30 hover:bg-blue-700 transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-lg font-semibold text-yellow-300 mb-2">{title}</h3>
      <p className="text-gray-200 text-sm">{text}</p>
    </motion.div>
  );
};

export default RumorCard;
