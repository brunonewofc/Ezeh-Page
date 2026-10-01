import React from 'react';
import { Award, CheckCircle, Shield, Youtube, Users, Target } from 'lucide-react';

export default function Authority() {
  return (
    <section id="metodo" className="py-20 sm:py-28 bg-[#1c1c1c] border-t border-[#2e2e2e] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Portrait Image Column (5 cols) */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-square shadow-2xl">
              <img
                src="/src/assets/images/instructor_portrait_1790803056377.jpg"
                alt="Andrés Navarro - Creador y Especialista en Monetización de YouTube"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-neutral-800 p-3 rounded-xl">
                <div className="text-xs font-bold text-white">Andrés Navarro</div>
                <div className="text-[11px] text-neutral-400">Estrategia Algorítmica & Canales Automatizados</div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white p-3 rounded-xl shadow-lg border border-red-500 flex items-center gap-2">
              <Youtube className="w-5 h-5" />
              <div className="text-[11px] font-bold leading-tight">
                <div>+1.2M USD</div>
                <div className="font-normal opacity-90 text-[10px]">Generados en YouTube</div>
              </div>
            </div>
          </div>

          {/* Bio & Story Column (7 cols) */}
          <div className="md:col-span-7 space-y-5">
            <div className="text-xs font-bold text-red-500 uppercase tracking-widest">
              CONOCE A TU MENTOR
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight leading-tight">
              "Durante 2 años grabé videos mostrando mi cara y no gané ni $50 dólares... Hasta que entendí la verdadera máquina de YouTube."
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <p>
                Hola, soy Andrés. Como el 95% de las personas, comencé en YouTube pensando que necesitaba una cámara Sony de $2,000 USD, 
                un micrófono de estudio y carisma frente al lente. El resultado: agotamiento, frustración y menos de 100 visitas por video.
              </p>
              <p>
                Todo cambió cuando descubrí el modelo de <strong className="text-white">canales automatizados ("Faceless Channels")</strong> y 
                la matemática del RPM. Me di cuenta de que a YouTube no le importa quién eres: 
                le importa la retención, la curiosidad del título y satisfacer el deseo del espectador.
              </p>
              <p>
                Hoy opero una red de 5 canales automatizados en nichos de alto valor que facturan en dólares mientras duermo. 
                He condensado exactamente los pasos sin rodeos técnicos en este Master intensivo para que no pierdas meses cometiendo mis mismos errores.
              </p>
            </div>

            {/* 3 Proof bullets */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>2 Placas de Plata de YouTube</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>+1,840 Alumnos formados</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Actualizado a cambios 2026</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Soporte directo en comunidad</span>
              </div>
            </div>

            {/* Why only $34.97 USD question callout */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400">
              <strong className="text-white block mb-1">¿Por qué este programa cuesta solo $34,97 USD y no $500?</strong>
              La mayoría de academias cobran $500 o $1,000 USD por cursos llenos de relleno teórico inalcanzables para muchos en Latinoamérica y España. 
              Mi objetivo es crear la comunidad más grande de creadores monetizados y rentables en habla hispana, 
              haciendo accesible el método al mejor precio posible.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
