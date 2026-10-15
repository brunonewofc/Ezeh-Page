import React from 'react';
import ShieldGuaranteeBadge from './ShieldGuaranteeBadge';

interface GuaranteeProps {
  onOpenCheckout?: () => void;
}

export default function Guarantee({ onOpenCheckout }: GuaranteeProps) {
  return (
    <section id="garantia" className="py-8 sm:py-12 bg-[#1c1c1c] border-t border-[#2e2e2e] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-2xl bg-[#242424] border border-[#383838] p-6 sm:p-8 overflow-hidden shadow-2xl text-center flex flex-col items-center">
          {/* Luz ambiental roja suave centrada */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Sello de Garantía con Escudo Rojo 3D arriba y centrado */}
          <div className="mb-4 flex justify-center">
            <ShieldGuaranteeBadge className="w-24 h-28 sm:w-28 sm:h-32 transition-transform hover:scale-105 duration-200" />
          </div>

          {/* Texto completamente centrado */}
          <div className="space-y-2.5 max-w-2xl mx-auto text-center">
            <div className="text-[11px] font-bold text-red-500 uppercase tracking-widest">
              TU COMPRA ESTÁ 100% SEGURA
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight leading-tight">
              Garantía total de devolución de 7 días
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Si en los primeros 7 días sientes que el curso no es para ti o no supera lo que esperabas, solo me pides el reembolso y te devuelvo el <strong className="text-white">100% de tus $34,97 USD</strong> de inmediato. Sin preguntas raras, sin trabas y sin letra chica.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
