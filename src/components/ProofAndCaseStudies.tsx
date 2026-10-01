import React, { useState } from 'react';
import { Award, CheckCircle2, TrendingUp, Users, Eye, Play, DollarSign } from 'lucide-react';

interface CaseStudy {
  name: string;
  age: number;
  country: string;
  niche: string;
  channelType: string;
  result: string;
  metric: string;
  quote: string;
  timeframe: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    name: 'Carlos Mendoza',
    age: 32,
    country: 'Colombia',
    niche: 'Finanzas Personales e Inversiones',
    channelType: 'Canal Automatizado (Sin rostro)',
    result: '$3,840 USD en su cuarto mes',
    metric: '+320,000 suscriptores',
    quote:
      'Trabajaba 10 horas diarias en una oficina. Apliqué el Módulo 2 y 3 sobre guiones hipnóticos con IA y en menos de 90 días alcancé la monetización. Hoy genero más con YouTube que con mi antiguo sueldo.',
    timeframe: 'De 0 a $3.8K/mes en 120 días',
  },
  {
    name: 'Lucía Valenzuela',
    age: 28,
    country: 'España',
    niche: 'Resúmenes de Libros y Psicología',
    channelType: 'Voz Sintética + Animación Minimalista',
    result: '$2,620 USD / mes recurrente',
    metric: '185,000 suscriptores',
    quote:
      'Nunca quise salir en cámara por timidez extrema. Este curso me demostró que con una buena historia y las miniaturas correctas la gente se queda viendo. El retorno de los $34,97 USD fue casi instantáneo.',
    timeframe: 'Monetizado en 26 días',
  },
  {
    name: 'Marcos Aguirre',
    age: 36,
    country: 'México',
    niche: 'Misterios y Curiosidades Históricas',
    channelType: 'Documental Faceless',
    result: '$4,490 USD / mes',
    metric: '4.8M reproducciones mensuales',
    quote:
      'El secreto está en el CTR y en el gancho de los primeros 30 segundos. Con las plantillas de guiones del Bono #1 logré que el algoritmo empezara a recomendar 3 de mis videos en Browse Features.',
    timeframe: 'Escalado a 4 canales activos',
  },
];

interface ProofAndCaseStudiesProps {
  onOpenCheckout: () => void;
}

export default function ProofAndCaseStudies({ onOpenCheckout }: ProofAndCaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  return (
    <section id="casos" className="py-20 sm:py-28 bg-[#1c1c1c] border-t border-[#2e2e2e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            <span>Evidencia Real y Verificable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Resultados Tangibles de Personas que Empezaron Desde Cero
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Sin miles de dólares en equipo, sin conocimientos técnicos previos y sin necesidad de mostrar su rostro. 
            Casos documentados y auditados de nuestra comunidad.
          </p>
        </div>

        {/* Big Dashboard Showcase with Real YouTube Studio Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-black shadow-2xl">
              <img
                src="/src/assets/images/yt_analytics_proof_1790803024952.jpg"
                alt="Panel de ingresos y métricas de YouTube Studio"
                className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-1.5 font-mono text-emerald-400 font-bold bg-neutral-950/80 px-2.5 py-1 rounded-md border border-neutral-800">
                  <TrendingUp className="w-3.5 h-3.5" /> Ingresos Estimados: $4,820.45 USD
                </span>
                <span className="font-mono text-neutral-400 bg-neutral-950/80 px-2 py-1 rounded-md border border-neutral-800">
                  RPM: $14.20 USD
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-xs font-mono font-bold text-red-500 mb-1">MÉTRICAS CLAVE EN 2026</div>
              <h3 className="text-xl font-bold text-white mb-2">Por qué este método no falla</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                A diferencia de los creadores tradicionales que suben videos al azar esperando un milagro, 
                nuestro sistema se basa en 3 pilares matemáticos del algoritmo:
              </p>
              
              <ul className="mt-4 space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Tasa de Clics (CTR) superior al 11%:</strong> Miniaturas con alto contraste psicológico que capturan la atención en milisegundos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Retención promedio &gt; 60%:</strong> Guiones estructurados con bucles narrativos que retienen al usuario hasta el final.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Monetización diversificada:</strong> $1 ganado en AdSense se traduce en $3 adicionales mediante afiliados y patrocinios.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-black border border-neutral-800/80 flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400">Inversión única requerida:</div>
                <div className="text-xl font-bold font-mono text-white">$34,97 USD</div>
              </div>
              <button
                onClick={onOpenCheckout}
                className="px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors cursor-pointer"
              >
                Inscribirme Hoy
              </button>
            </div>
          </div>
        </div>

        {/* 3 Student Stories Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 pb-3 border-b border-neutral-800/80">
                  <span className="font-semibold text-neutral-300">{study.name} ({study.country})</span>
                  <span className="font-mono text-red-400">{study.timeframe}</span>
                </div>

                <div className="mb-4">
                  <div className="text-xl font-extrabold text-white font-mono mb-1">
                    {study.result}
                  </div>
                  <div className="text-xs text-emerald-400 font-medium">
                    {study.metric} · {study.channelType}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed italic mb-4">
                  "{study.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Nicho: {study.niche}</span>
                <span className="text-emerald-400 font-bold">Verificado ✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
