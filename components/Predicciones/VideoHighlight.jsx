// src/components/FanZone/VideoHighlight.jsx
import React from "react";
import { motion } from "framer-motion";

const VideoHighlight = ({ title, url }) => {
  return (
    <motion.div
      className="bg-white/10 rounded-xl overflow-hidden shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <iframe
        width="100%"
        height="250"
        src={url}
        title={title}
        frameBorder="0"
        allowFullScreen
        className="rounded-t-xl"
      ></iframe>
      <div className="p-3">
        <h3 className="text-yellow-300 text-lg font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
};

export default VideoHighlight;
