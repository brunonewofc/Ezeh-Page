import React from 'react';
import HeroLogoVideo from './HeroLogoVideo';
import { ArrowRight, ShieldCheck, Zap, Star, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  return (
    <section className="relative pt-3 sm:pt-5 pb-20 sm:pb-28 overflow-hidden bg-[#1c1c1c]">
      {/* Background radial gradient highlights matching #1c1c1c */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.15)_0%,rgba(28,28,28,0.8)_60%,#1c1c1c_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Seamlessly Integrated Video Logo: Placed right up top in compact logo size */}
        <div className="w-full flex justify-center mb-2 bg-[#1c1c1c]">
          <HeroLogoVideo />
        </div>

        {/* Main Sales Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl font-display leading-[1.14] mb-8 mt-2">
          Gana de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-400">
            $500 a $2,000 USD
          </span>{' '}
          Mensuales Creando Videos para YouTube Sin Mostrar Tu Rostro, Utilizando Solo Herramientas de IA
        </h1>

        {/* ESPACIO PARA VSL (Video Sales Letter) */}
        <div className="w-full max-w-3xl mb-10">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border-2 border-[#383838] shadow-[0_0_40px_rgba(220,38,38,0.15)]">
            {/* Contenedor limpio para incrustar iframe o video de VSL (YouTube, Vimeo, Wistia, etc.) */}
            <div className="w-full h-full flex items-center justify-center bg-[#141414]">
              {/* Espacio preparado para tu reproductor de video */}
            </div>
          </div>
        </div>

        {/* Offer Callout Box & Primary Conversion Anchor */}
        <div className="w-full max-w-xl bg-[#242424]/90 border border-[#383838] rounded-2xl p-6 sm:p-7 shadow-[0_0_50px_rgba(220,38,38,0.12)] mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-widest text-neutral-400 line-through">
              Precio Regular: $497 USD
            </span>
            <span className="text-xs font-bold text-red-500 bg-red-950/60 border border-red-800/60 px-2 py-0.5 rounded">
              93% OFF HOY
            </span>
          </div>

          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-neutral-300 text-sm font-medium">Pago único de solo:</span>
            <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
              $34,97
            </span>
            <span className="text-lg font-bold text-red-500 font-mono">USD</span>
          </div>

          <a
            href="https://pay.hotmart.com/T107839716O?off=cr25yvo9"
            className="w-full group inline-flex items-center justify-center gap-3 py-4 px-6 text-base sm:text-lg font-extrabold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 text-center"
          >
            <span>QUIERO EMPEZAR POR SOLO $34,97 USD</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Micro trust markers */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Garantía total de 30 días
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Zap className="w-4 h-4 text-amber-400" />
              Acceso instantáneo de por vida
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Star className="w-4 h-4 text-red-400 fill-red-400" />
              4.9/5 valoración de alumnos
            </span>
          </div>
        </div>

        {/* High-Fidelity Master Visual Showcase: Mockup + Analytics */}
        <div className="w-full max-w-5xl relative mt-2">
          <div className="relative rounded-2xl overflow-hidden border border-[#383838] bg-[#141414] shadow-2xl">
            <div className="relative aspect-[16/9] w-full bg-[#1c1c1c]">
              <img
                src="/images/yt_mastery_mockup_1790803034899.jpg"
                alt="Pack completo del Master de Monetización de YouTube"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-[#1c1c1c]/30 pointer-events-none" />
              
              {/* Overlay card with real verified metric */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md bg-[#181818]/90 backdrop-blur-md border border-[#383838] rounded-xl p-4 text-left">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                  <span className="font-semibold text-neutral-300">ESTUDIO DE CANAL AUTOMATIZADO</span>
                  <span className="text-emerald-400 font-mono font-bold">+184% este mes</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono">
                  $4,820.45 <span className="text-xs font-normal text-neutral-400 font-sans">USD generados</span>
                </div>
                <p className="text-xs text-neutral-300 mt-1 leading-snug">
                  Monetizado en 32 días usando guiones generados con IA y miniaturas de alto impacto sin mostrar la cara.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Key Quick Pillars Bar */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-left">
          <div className="bg-[#242424]/80 border border-[#383838] rounded-xl p-5 hover:border-neutral-600 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 font-bold mb-3">
              01
            </div>
            <h2 className="text-base font-bold text-white mb-1">Canales 100% Automatizados</h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Crea contenido viral usando voces neuronales de alta fidelidad y material libre de derechos sin grabar tu rostro ni tu voz.
            </p>
          </div>

          <div className="bg-[#242424]/80 border border-[#383838] rounded-xl p-5 hover:border-neutral-600 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 font-bold mb-3">
              02
            </div>
            <h2 className="text-base font-bold text-white mb-1">Nichos de Alto CPM en Dólares</h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Descubre nichos estratégicos que pagan de $10 a $25 USD por cada mil reproducciones en lugar de los $0.80 de canales convencionales.
            </p>
          </div>

          <div className="bg-[#242424]/80 border border-[#383838] rounded-xl p-5 hover:border-neutral-600 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 font-bold mb-3">
              03
            </div>
            <h2 className="text-base font-bold text-white mb-1">Multiplica tus Ganancias x5</h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              No dependas únicamente de AdSense: activa marketing de afiliados de alto ticket, patrocinios y activos digitales pasivos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
