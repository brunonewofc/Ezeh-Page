import React, { useState } from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../config/constants';

interface Lesson {
  title: string;
}

interface Module {
  id: number;
  number: string;
  title: string;
  summary: string;
  lessons: Lesson[];
}

const MODULES: Module[] = [
  {
    id: 1,
    number: '01',
    title: 'Clases del Curso',
    summary: 'Aprende paso a paso desde la búsqueda del nicho hasta la creación de miniaturas y guiones de alto impacto.',
    lessons: [
      { title: 'Clase 2 - Cómo Buscar Nichos' },
      { title: 'Clase 3 - Cómo Analizar los Nichos' },
      { title: 'Clase 4 - Entiende los Tipos de Contenido y Formatos' },
      { title: 'Clase 5 - Aprende a Crear Buenos Títulos' },
      { title: 'Clase 6 - Aprende a Crear Guiones' },
      { title: 'Clase 7 - Aprende a Crear Miniaturas' },
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Monetizando un Canal',
    summary: 'Te muestro en mi pantalla un canal real monetizado por dentro para probarte que este método funciona de verdad.',
    lessons: [
      { title: 'Moneticé un Canal Para Probarte que Funciona' },
    ],
  },
];

interface CurriculumAccordionProps {
  onOpenCheckout?: () => void;
}

export default function CurriculumAccordion({ onOpenCheckout }: CurriculumAccordionProps) {
  const [openModuleId, setOpenModuleId] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="temario" className="py-8 sm:py-12 bg-[#1c1c1c] border-t border-[#2e2e2e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-2">
            Todo lo que te enseño paso a paso en mi pantalla
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Más de 12 horas de contenido 100% práctico, paso a paso, sin relleno ni teoría. Directo a la pantalla para que implementes desde el día uno.
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-3 mb-6">
          {MODULES.map((mod) => {
            const isOpen = openModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className="border border-neutral-800 rounded-2xl bg-[#222222]/80 overflow-hidden transition-all duration-200"
              >
                {/* Header button */}
                <button
                  type="button"
                  onClick={() => toggleModule(mod.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-neutral-800/40 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-red-500 bg-red-950/60 border border-red-900/60 px-2.5 py-1 rounded-lg shrink-0 mt-0.5 sm:mt-0">
                      MÓDULO {mod.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        {mod.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 ml-3">
                    <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400 font-mono">
                      <span>{mod.lessons.length} {mod.lessons.length === 1 ? 'clase' : 'clases'}</span>
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
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-neutral-800/80 bg-black/40">
                    <div className="space-y-2.5">
                      {mod.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 text-xs sm:text-sm"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <PlayCircle className="w-4 h-4 text-red-500 shrink-0" />
                            <span className="text-neutral-200 font-medium">{lesson.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desafío de 3 meses en texto rojo */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-red-950/30 border border-red-800/60 text-center max-w-2xl mx-auto shadow-[0_0_20px_rgba(220,38,38,0.15)]">
          <p className="text-sm sm:text-base font-extrabold text-red-500 leading-snug tracking-tight mb-1.5">
            "Te desafío monetizar un canal en hasta 3 meses, si no monetizas un canal en hasta 3 meses aplicando todo lo que enseño en el curso, te devuelvo el doble de lo que pagaste"
          </p>
          <p className="text-xs sm:text-sm font-semibold text-neutral-200">
            Me responsabilizo contigo: Mister Ezeh
          </p>
        </div>

        {/* Action Callout */}
        <div className="text-center">
          <a
            href={HOTMART_CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-3 py-4 px-8 text-base sm:text-lg font-extrabold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5 text-center"
          >
            <span>QUIERO ACCEDER POR SOLO $34,97 USD</span>
          </a>
          <div className="text-xs text-neutral-400 mt-2 font-mono">
            Pago único de $34,97 USD · Acceso por 6 meses · Sin mensualidades
          </div>
        </div>

      </div>
    </section>
  );
}
