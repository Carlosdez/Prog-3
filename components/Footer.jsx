import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0d17] text-gray-400 text-center py-6 mt-16 border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} LNB Fan App. Todos los derechos reservados.
      </p>
      <p className="text-xs mt-1">Desarrollado con pasión por el baloncesto dominicano.</p>
    </footer>
  );
}
