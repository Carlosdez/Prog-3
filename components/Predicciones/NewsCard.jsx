// src/components/FanZone/NewsCard.jsx
import React from "react";
import { motion } from "framer-motion";

const NewsCard = ({ title, desc, img }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/40 transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img src={img} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-yellow-300">{title}</h3>
        <p className="text-sm mt-2 text-gray-200">{desc}</p>
      </div>
    </motion.div>
  );
};

export default NewsCard;
