import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Lock, Clock, Sparkles } from 'lucide-react';

interface OfferPricingProps {
  onOpenCheckout: () => void;
}

export default function OfferPricing({ onOpenCheckout }: OfferPricingProps) {
  // Countdown timer for subtle conversion urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 3, minutes: 30, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const STACK_ITEMS = [
    {
      title: 'Master Completo de Monetización en YouTube (7 Módulos en Video HD)',
      description: 'Desde la selección de nichos de alto RPM hasta la automatización con IA y escala masiva.',
      value: '$297 USD',
    },
    {
      title: 'Bono #1: Bóveda de 50 Plantillas de Guiones Virales',
      description: 'Estructuras listas para copiar y pegar probadas para superar el 60% de retención.',
      value: '$97 USD',
    },
    {
      title: 'Bono #2: Prompt Vault Pro (ChatGPT, Claude & Midjourney)',
      description: 'Comandos exactos para generar títulos, miniaturas e historias cinematográficas.',
      value: '$67 USD',
    },
    {
      title: 'Bono #3: Acceso a la Comunidad Privada VIP en Discord',
      description: 'Networking con otros creadores monetizados y feedback directo de tus canales.',
      value: '$176 USD',
    },
    {
      title: 'Actualizaciones de por vida al Algoritmo 2026',
      description: 'Cualquier nuevo cambio de YouTube se agrega sin costo adicional para ti.',
      value: '$99 USD',
    },
  ];

  return (
    <section id="oferta" className="py-20 sm:py-28 bg-[#1c1c1c] border-t border-[#2e2e2e] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Countdown Urgency Banner */}
        <div className="bg-red-950/40 border border-red-800/60 rounded-2xl p-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-red-400">
                OFERTA ESPECIAL CON 93% DE DESCUENTO
              </div>
              <div className="text-xs text-neutral-300">
                El precio promocional aumentará cuando el contador llegue a cero.
              </div>
            </div>
          </div>

          {/* Time digits */}
          <div className="flex items-center gap-1.5 font-mono text-white text-sm font-bold bg-[#141414] px-3 py-1.5 rounded-xl border border-neutral-800">
            <span className="bg-[#1c1c1c] px-2 py-0.5 rounded text-red-400">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span>:</span>
            <span className="bg-[#1c1c1c] px-2 py-0.5 rounded text-red-400">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span>:</span>
            <span className="bg-[#1c1c1c] px-2 py-0.5 rounded text-red-400">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        {/* The Mega Offer Card */}
        <div className="bg-[#242424] border-2 border-red-600/60 rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(220,38,38,0.2)] relative overflow-hidden">
          
          {/* Top badge */}
          <div className="text-center mb-8 pb-8 border-b border-neutral-800">
            <span className="inline-block text-xs font-mono font-bold text-red-500 uppercase tracking-widest bg-red-950/60 border border-red-800/80 px-3 py-1 rounded-full mb-3">
              PAQUETE COMPLETO ALL-IN-ONE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mb-2">
              Todo lo que Recibes Hoy al Inscribirte
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Acceso inmediato a la plataforma educativa con usuario y contraseña enviados directamente a tu correo.
            </p>
          </div>

          {/* Stack list */}
          <div className="space-y-4 mb-8">
            {STACK_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-900"
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono text-neutral-400 line-through shrink-0">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Value comparison */}
          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-center mb-8">
            <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
              Valor Total Real de Todo el Contenido:
            </div>
            <div className="text-xl font-mono text-neutral-400 line-through mb-3">
              $736 USD
            </div>

            <div className="h-px w-24 bg-neutral-800 mx-auto mb-3" />

            <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">
              PRECIO HOY (OFERTA ESPECIAL):
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl sm:text-6xl font-black text-white font-display tracking-tight">
                $34,97
              </span>
              <span className="text-xl font-bold text-red-500 font-mono">USD</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-mono">
              Un único pago · Sin cuotas ocultas · Acceso ilimitado de por vida
            </div>
          </div>

          {/* Big Conversion Button */}
          <button
            onClick={onOpenCheckout}
            className="w-full group inline-flex items-center justify-center gap-3 py-4 sm:py-5 px-6 text-base sm:text-xl font-extrabold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-[0_0_35px_rgba(220,38,38,0.6)] transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <Lock className="w-5 h-5 text-white/80" />
            <span>ACCEDER AHORA POR SOLO $34,97 USD</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Payment guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Garantía de Devolución de 30 Días
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Zap className="w-4 h-4 text-amber-400" />
              Activación Instantánea
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Lock className="w-4 h-4 text-neutral-400" />
              Pago Encriptado SSL 256-bit
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
