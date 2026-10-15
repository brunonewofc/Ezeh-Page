import React from 'react';
import { ShieldCheck, Zap, ArrowRight, Lock, Clock, Check } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../config/constants';

interface OfferPricingProps {
  onOpenCheckout?: () => void;
}

export default function OfferPricing({ onOpenCheckout }: OfferPricingProps) {
  return (
    <section id="oferta" className="py-8 sm:py-12 bg-[#1c1c1c] border-t border-[#2e2e2e] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner de urgencia simple con icono de reloj */}
        <div className="bg-red-950/40 border border-red-800/60 rounded-xl p-3 mb-5 flex items-center justify-center gap-2.5 text-center">
          <Clock className="w-4 h-4 text-red-500 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-neutral-200">
            Esta oferta puede subir de precio a cualquier momento.
          </span>
        </div>

        {/* Tarjeta de Oferta */}
        <div className="bg-[#242424] border-2 border-red-600/60 rounded-2xl p-5 sm:p-7 shadow-[0_0_40px_rgba(220,38,38,0.2)] text-center relative overflow-hidden">
          
          <div className="mb-4 pb-4 border-b border-neutral-800">
            <h2 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight mb-1">
              Empieza hoy mismo tu canal de YouTube
            </h2>
            <p className="text-neutral-400 text-xs">
              Te doy acceso directo para que veas mi pantalla y apliques exactamente lo que funciona.
            </p>
          </div>

          {/* Lista clara de lo que incluye */}
          <div className="space-y-2.5 mb-5 text-left max-w-lg mx-auto">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-900">
              <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                Módulo 1: Clases del Curso (Nichos, títulos, guiones y miniaturas)
              </span>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-900">
              <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                Módulo 2: Monetizando un Canal
              </span>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-900">
              <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                Acceso completo a todas las clases por 6 meses
              </span>
            </div>
          </div>

          {/* Precio */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center mb-5">
            <div className="text-[11px] uppercase tracking-widest text-emerald-400 font-bold mb-1">
              PRECIO HOY:
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
                $34,97
              </span>
              <span className="text-lg font-bold text-red-500 font-mono">USD</span>
            </div>
            <div className="text-[11px] text-neutral-400 mt-0.5 font-mono">
              Un único pago · Sin cuotas ocultas · Acceso por 6 meses
            </div>
          </div>

          {/* Botón de Checkout Hotmart */}
          <a
            href={HOTMART_CHECKOUT_URL}
            className="w-full group inline-flex items-center justify-center gap-3 py-3.5 sm:py-4 px-6 text-base sm:text-lg font-extrabold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all cursor-pointer transform hover:-translate-y-0.5 text-center"
          >
            <Lock className="w-4 h-4 text-white/80" />
            <span>ACCEDER AHORA POR SOLO $34,97 USD</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Garantías y sellos */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Garantía de Devolución de 7 Días
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Activación Instantánea
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Lock className="w-3.5 h-3.5 text-neutral-400" />
              Pago Seguro
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
