import React, { useState } from 'react';
import { ChevronDown, PlayCircle, Clock, Gift, Check, Sparkles, BookOpen } from 'lucide-react';

interface Lesson {
  title: string;
  duration: string;
  isKey?: boolean;
}

interface Module {
  id: number;
  number: string;
  title: string;
  summary: string;
  lessonCount: number;
  totalTime: string;
  lessons: Lesson[];
}

const MODULES: Module[] = [
  {
    id: 1,
    number: '01',
    title: 'Fundamentos y Selección de Nichos de Alto CPM',
    summary: 'Aprende a identificar nichos en YouTube que pagan de $12 a $25 USD por cada 1,000 reproducciones antes de grabar el primer segundo.',
    lessonCount: 6,
    totalTime: '1h 45m',
    lessons: [
      { title: 'Cómo funciona la economía de YouTube y el RPM real en 2026', duration: '18 min', isKey: true },
      { title: 'Matriz de nichos millonarios: Finanzas, IA, Curiosidades y Salud', duration: '22 min' },
      { title: 'Herramientas de espionaje de competencia y demanda reprimida', duration: '16 min' },
      { title: 'Configuración técnica y blindaje fiscal de tu canal para cobrar en USD', duration: '14 min' },
      { title: 'La regla de oro para validar un nicho en menos de 48 horas', duration: '20 min', isKey: true },
      { title: 'Hoja de ruta y checklist de inicio rápido', duration: '15 min' },
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Canales Automatizados ("Faceless") Sin Mostrar la Cara',
    summary: 'La arquitectura para crear canales rentables desde las sombras sin cámaras, micrófonos costosos ni exponerte públicamente.',
    lessonCount: 7,
    totalTime: '2h 10m',
    lessons: [
      { title: 'Anatomía de un canal automatizado rentable paso a paso', duration: '20 min', isKey: true },
      { title: 'Voces sintéticas de ultra-realismo: ElevenLabs y alternativas gratuitas', duration: '25 min' },
      { title: 'Bancos de video libre de derechos (B-roll) y técnicas de edición hipnótica', duration: '22 min' },
      { title: 'Estructura legal de Fair Use para evitar reclamos de Copyright', duration: '18 min', isKey: true },
      { title: 'Edición rápida en CapCut y Premiere con presets listos para arrastrar', duration: '24 min' },
      { title: 'Diseño sonoro y música que dispara la dopamina en el espectador', duration: '12 min' },
      { title: 'Caso de estudio: Canal de curiosidades de 0 a 100K subs en 90 días', duration: '9 min' },
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Guiones Virales con IA: Retención Superior al 60%',
    summary: 'El secreto número uno del algoritmo: retención de audiencia. Cómo estructurar ganchos que impidan que el usuario abandone el video.',
    lessonCount: 6,
    totalTime: '1h 55m',
    lessons: [
      { title: 'La fórmula de los 30 primeros segundos (Hook, Promesa y Curiosidad abierta)', duration: '26 min', isKey: true },
      { title: 'Ingeniería de prompts para redactar guiones de 8 a 15 minutos en segundos', duration: '24 min' },
      { title: 'Ritmo narrativo y bucles abiertos (Open Loops) para retener hasta el final', duration: '19 min', isKey: true },
      { title: 'Cómo convertir artículos aburridos en historias cinematográficas', duration: '17 min' },
      { title: 'Revisión y pulido humano para esquivar detección de contenido repetitivo', duration: '15 min' },
      { title: 'Plantilla universal de guion para cualquier temática', duration: '14 min' },
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Miniaturas Psicológicas y Títulos que Explotan el CTR (>12%)',
    summary: 'Si la gente no hace clic, tu video muere. Domina el diseño de miniaturas de alta conversión usando herramientas simples y Canva/Photoshop.',
    lessonCount: 5,
    totalTime: '1h 35m',
    lessons: [
      { title: 'Psicología visual del clic: contraste, jerarquía y tensión visual', duration: '21 min', isKey: true },
      { title: 'Fórmulas de títulos que provocan curiosidad extrema sin ser clickbait engañoso', duration: '22 min' },
      { title: 'Generación de personajes y fondos hiperrealistas con Midjourney', duration: '19 min' },
      { title: 'A/B Testing en YouTube: Cómo probar miniaturas automáticamente', duration: '18 min', isKey: true },
      { title: 'Biblioteca de 20 miniaturas desglosadas elemento por elemento', duration: '15 min' },
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Hackeando el Algoritmo: De 0 a la Página Principal (Browse Features)',
    summary: 'Cómo forzar a YouTube a recomendar tus videos a millones de personas que no te conocen.',
    lessonCount: 6,
    totalTime: '1h 50m',
    lessons: [
      { title: 'El viaje del algoritmo: Impresiones, CTR inicial y Velocidad de visualización', duration: '23 min', isKey: true },
      { title: 'Cómo salir del "bucle de 0 vistas" en tus primeros 5 videos', duration: '19 min', isKey: true },
      { title: 'La estrategia de apalancamiento en tendencias y noticias evergreen', duration: '21 min' },
      { title: 'Horarios óptimos de publicación y frecuencia recomendada según nicho', duration: '14 min' },
      { title: 'YouTube Shorts como acelerador: Estrategia híbrida shorts + largos', duration: '18 min' },
      { title: 'Métricas críticas de YouTube Studio que debes monitorear cada semana', duration: '15 min' },
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Monetización Avanzada: 7 Fuentes de Ingresos en Dólares',
    summary: 'Aprende a ganar 5 veces más que con los anuncios tradicionales de AdSense mediante embudos de monetización.',
    lessonCount: 6,
    totalTime: '2h 00m',
    lessons: [
      { title: 'Requisitos de monetización acelerada: 1,000 subs y 4,000 horas en tiempo récord', duration: '24 min', isKey: true },
      { title: 'Programas de afiliados de alto ticket (Software SaaS, servicios financieros)', duration: '25 min' },
      { title: 'Cómo negociar patrocinios de $500 a $3,000 USD por video con marcas', duration: '22 min', isKey: true },
      { title: 'Venta de activos digitales y plantillas pasivas en la descripción', duration: '18 min' },
      { title: 'Monetización internacional: cobros en cuentas en USD desde cualquier país', duration: '16 min' },
      { title: 'Estrategia de membresías y comunidad premium para ingresos recurrentes', duration: '15 min' },
    ],
  },
  {
    id: 7,
    number: '07',
    title: 'Escalamiento, Delegación y Creación de un Imperio de Canales',
    summary: 'Sistematiza el proceso para contratar guionistas y editores económicos y operar múltiples canales simultáneamente.',
    lessonCount: 5,
    totalTime: '1h 30m',
    lessons: [
      { title: 'Creación de SOPs (Procedimientos estándar) para delegar todo el proceso', duration: '20 min' },
      { title: 'Dónde contratar guionistas y editores de calidad por $10 a $25 USD por video', duration: '22 min', isKey: true },
      { title: 'Gestión ágil con Trello y Notion para publicar 3 a 5 videos semanales', duration: '16 min' },
      { title: 'Diversificación de riesgos: Cómo proteger tu red de canales', duration: '18 min' },
      { title: 'Plan de acción a 90 días para alcanzar la meta de $3,000 USD mensuales', duration: '14 min', isKey: true },
    ],
  },
];

const BONUSES = [
  {
    tag: 'Bono #1',
    title: 'Bóveda de 50 Plantillas de Guiones Virales',
    value: '$97 USD',
    description: 'Plantillas listas para copiar y pegar con estructuras comprobadas de narración de misterio, finanzas, tutoriales y documentales de alta retención.',
  },
  {
    tag: 'Bono #2',
    title: 'Prompt Vault Pro para ChatGPT, Claude y Midjourney',
    value: '$67 USD',
    description: 'Nuestra colección privada de comandos optimizados para generar guiones magnéticos, ideas de títulos irresistibles e imágenes hiperrealistas para miniaturas.',
  },
  {
    tag: 'Bono #3',
    title: 'Acceso VIP a la Comunidad Privada en Discord',
    value: '$176 USD',
    description: 'Comparte dudas, revisa tus miniaturas antes de publicar, interactúa con otros creadores monetizados y asiste a sesiones mensuales de preguntas y respuestas en vivo.',
  },
];

interface CurriculumAccordionProps {
  onOpenCheckout: () => void;
}

export default function CurriculumAccordion({ onOpenCheckout }: CurriculumAccordionProps) {
  const [openModuleId, setOpenModuleId] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="temario" className="py-20 sm:py-28 bg-[#1c1c1c] border-t border-[#2e2e2e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Plan de Estudios Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Todo lo que Aprenderás en los 7 Módulos Prácticos
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Más de 12 horas de contenido 100% práctico, paso a paso, sin relleno ni teoría obsoleta. 
            Directo a la pantalla para que implementes desde el día uno.
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-3.5 mb-14">
          {MODULES.map((mod) => {
            const isOpen = openModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className="border border-neutral-800/90 rounded-2xl bg-neutral-950/70 overflow-hidden transition-all duration-200"
              >
                {/* Header button */}
                <button
                  type="button"
                  onClick={() => toggleModule(mod.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-neutral-900/50 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-red-500 bg-red-950/50 border border-red-900/50 px-2.5 py-1 rounded-lg shrink-0 mt-0.5 sm:mt-0">
                      MOD {mod.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-1 sm:line-clamp-none">
                        {mod.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 ml-3">
                    <div className="hidden sm:flex items-center gap-3 text-xs text-neutral-400 font-mono">
                      <span>{mod.lessonCount} lecciones</span>
                      <span aria-hidden="true">·</span>
                      <span>{mod.totalTime}</span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-300 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-red-600/20 text-red-400' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Lessons List */}
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-neutral-900/80 bg-neutral-950/90">
                    <div className="space-y-2.5">
                      {mod.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900/40 border border-neutral-800/60 text-xs sm:text-sm"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-3">
                            <PlayCircle className="w-4 h-4 text-red-500 shrink-0" />
                            <span className="text-neutral-200 truncate">{lesson.title}</span>
                            {lesson.isKey && (
                              <span className="hidden sm:inline-block text-[10px] font-semibold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-1.5 py-0.2 rounded shrink-0">
                                Clave
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-neutral-400 text-xs shrink-0 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-neutral-400" />
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3 Elite Bonuses Stack */}
        <div className="bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
            <Gift className="w-4 h-4" />
            <span>Incluidos Gratis al Inscribirte Hoy</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-3">
            3 Bonos Exclusivos de Alta Velocidad{' '}
            <span className="text-red-500">(Valor Total: $340 USD)</span>
          </h3>

          <p className="text-sm text-neutral-400 mb-8 max-w-2xl leading-relaxed">
            Hemos preparado estos recursos listos para usar para que no empieces desde cero y ahorres semanas de trabajo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BONUSES.map((bonus, i) => (
              <div
                key={i}
                className="bg-black/80 border border-neutral-800/90 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-500 font-mono uppercase tracking-wider">
                      {bonus.tag}
                    </span>
                    <span className="text-xs text-neutral-400 line-through">
                      {bonus.value}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {bonus.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>GRATIS con tu inscripción</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="text-center">
          <a
            href="https://pay.hotmart.com/T107839716O?off=cr25yvo9"
            className="inline-flex items-center gap-3 py-4 px-8 text-base font-extrabold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5 text-center"
          >
            <span>ACCEDER A LOS 7 MÓDULOS Y 3 BONOS POR $34,97 USD</span>
          </a>
          <div className="text-xs text-neutral-400 mt-2 font-mono">
            Pago único de $34,97 USD · Acceso vitalicio · Sin mensualidades
          </div>
        </div>

      </div>
    </section>
  );
}
