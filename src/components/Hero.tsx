import React from 'react';

interface HeroProps {
  onOpenCheckout?: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  return (
    <section className="relative pt-8 sm:pt-12 pb-6 sm:pb-8 overflow-hidden bg-[#1c1c1c]">
      {/* Background radial gradient highlights matching #1c1c1c */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.15)_0%,rgba(28,28,28,0.8)_60%,#1c1c1c_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Sales Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl font-display leading-[1.14] mb-4">
          Gana de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-400">
            $500 a $2,000 USD
          </span>{' '}
          Mensuales Creando Videos para YouTube Sin Mostrar Tu Rostro, Utilizando Solo Herramientas de IA
        </h1>
      </div>
    </section>
  );
}
