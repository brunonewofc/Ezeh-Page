import React from 'react';

interface ShieldGuaranteeBadgeProps {
  className?: string;
}

export default function ShieldGuaranteeBadge({ className = 'w-24 h-28' }: ShieldGuaranteeBadgeProps) {
  return (
    <svg
      viewBox="0 0 140 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Garantía de 7 Días"
    >
      <defs>
        {/* Sombra exterior 3D con halo rojo neón */}
        <filter id="shield3DShadow" x="-25%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#dc2626" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.85" />
        </filter>

        {/* Sombra de relieve de texto */}
        <filter id="shieldTextRelief" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.9" />
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ef4444" floodOpacity="0.4" />
        </filter>

        {/* Gradiente exterior del bisel 3D */}
        <linearGradient id="shieldBevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="20%" stopColor="#ef4444" />
          <stop offset="60%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#450a0a" />
        </linearGradient>

        {/* Gradiente del marco metálico interior */}
        <linearGradient id="shieldRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffa3a3" />
          <stop offset="25%" stopColor="#dc2626" />
          <stop offset="70%" stopColor="#7f1d1d" />
          <stop offset="100%" stopColor="#250505" />
        </linearGradient>

        {/* Fondo del cuerpo del escudo con volumen esférico */}
        <radialGradient id="shieldBodyGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="35%" stopColor="#dc2626" />
          <stop offset="70%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#2a0404" />
        </radialGradient>

        {/* Gradiente metálico del número 7 */}
        <linearGradient id="numSevenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>

        {/* Reflejo superior 3D (Gloss / cristal) */}
        <linearGradient id="shieldGlossGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Capa 1: Borde exterior 3D con relieve */}
      <path
        d="M70 12 C96 12 118 18 124 25 C124 78 108 122 70 148 C32 122 16 78 16 25 C22 18 44 12 70 12 Z"
        fill="url(#shieldBevelGrad)"
        filter="url(#shield3DShadow)"
      />

      {/* Capa 2: Bisel intermedio metálico */}
      <path
        d="M70 16 C93 16 113 21 118 28 C118 75 104 116 70 141 C36 116 22 75 22 28 C27 21 47 16 70 16 Z"
        fill="url(#shieldRimGrad)"
      />

      {/* Capa 3: Cuerpo central del escudo rojo con volumen 3D */}
      <path
        d="M70 20 C91 20 109 25 113 31 C113 72 100 110 70 134 C40 110 27 72 27 31 C31 25 49 20 70 20 Z"
        fill="url(#shieldBodyGrad)"
      />

      {/* Capa 4: Filete interior fino de resalte */}
      <path
        d="M70 22 C89 22 106 26 110 32 C110 70 98 106 70 129 C42 106 30 70 30 32 C34 26 51 22 70 22 Z"
        stroke="#fca5a5"
        strokeWidth="1"
        strokeOpacity="0.5"
        fill="none"
      />

      {/* Capa 5: Brillo gloss 3D en la parte superior del escudo */}
      <path
        d="M70 21 C90 21 108 25 112 31 C112 60 95 78 70 78 C45 78 28 60 28 31 C32 25 50 21 70 21 Z"
        fill="url(#shieldGlossGrad)"
      />

      {/* Número 7 en el medio (grande, centrado y en 3D) */}
      <text
        x="70"
        y="87"
        textAnchor="middle"
        fontSize="56"
        fontWeight="900"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fill="url(#numSevenGrad)"
        filter="url(#shieldTextRelief)"
        letterSpacing="-1"
      >
        7
      </text>

      {/* Palabra DÍAS justo abajo del 7 */}
      <text
        x="70"
        y="113"
        textAnchor="middle"
        fontSize="16"
        fontWeight="900"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fill="#ffffff"
        filter="url(#shieldTextRelief)"
        letterSpacing="2.5"
      >
        DÍAS
      </text>
    </svg>
  );
}
