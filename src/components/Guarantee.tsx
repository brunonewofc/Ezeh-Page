import React from 'react';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface GuaranteeProps {
  onOpenCheckout: () => void;
}

export default function Guarantee({ onOpenCheckout }: GuaranteeProps) {
  return (
    <section id="garantia" className="py-20 sm:py-24 bg-[#1c1c1c] border-t border-[#2e2e2e] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-[#242424] border border-[#383838] p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Ambient red highlight */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Guarantee Seal / Icon */}
            <div className="shrink-0 flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-red-600 to-neutral-900 border-2 border-red-500/80 p-1 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                <div className="w-full h-full rounded-full bg-[#181818] flex flex-col items-center justify-center p-2 text-center border border-red-900/60">
                  <ShieldCheck className="w-7 h-7 text-red-500 mb-0.5" />
                  <span className="text-[11px] font-black font-display text-white tracking-wider uppercase leading-none">
                    30 DÍAS
                  </span>
                  <span className="text-[9px] text-neutral-400 uppercase tracking-tight">
                    GARANTÍA 100%
                  </span>
                </div>
              </div>
              <span className="mt-2 text-[11px] font-mono text-neutral-400 font-medium">
                Sin Riesgo Alguno
              </span>
            </div>

            {/* Guarantee Copy */}
            <div className="space-y-4 text-center md:text-left">
              <div className="text-xs font-bold text-red-500 uppercase tracking-widest">
                TU COMPRA ESTÁ 100% PROTEGIDA
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight leading-tight">
                Garantía Incondicional de Satisfacción de 30 Días
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Estamos tan seguros del poder transformador de este programa que asumimos todo el riesgo por ti. 
                Entra al curso hoy, mira los 7 módulos completos, descarga las 50 plantillas de guiones y aplica las estrategias.
              </p>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Si en los próximos 30 días sientes que el curso no supera tus expectativas o que no aprendiste 
                las claves para construir canales rentables, solo escríbenos un email y te devolveremos el 
                <strong className="text-white"> 100% de tus $34,97 USD</strong> de inmediato. 
                Sin cuestionamientos, sin demoras y sin letra chica.
              </p>

              <div className="pt-2">
                <a
                  href="https://pay.hotmart.com/T107839716O?off=cr25yvo9"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 px-5 py-2.5 rounded-xl transition-colors cursor-pointer text-center"
                >
                  <span>Probar el Método Sin Riesgo por $34,97 USD</span>
                  <ArrowRight className="w-4 h-4 text-red-500" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
