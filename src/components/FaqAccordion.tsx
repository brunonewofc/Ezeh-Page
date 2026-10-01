import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿Realmente puedo ganar dinero sin mostrar mi rostro o usar mi voz?',
    answer:
      'Absolutamente sí. Más del 70% de nuestros alumnos más rentables operan canales automatizados (faceless). En el curso te enseñamos a redactar guiones hipnóticos con Inteligencia Artificial, utilizar voces neuronales ultra realistas de última generación (que no suenan a robot) y editar con clips libres de derechos de autor. Nadie sabrá quién está detrás de tu canal.',
  },
  {
    question: '¿El precio de $34,97 USD es un pago único o hay mensualidades?',
    answer:
      'Es un PAGO ÚNICO de $34,97 USD. No hay suscripciones, mensualidades ocultas ni cargos sorpresa. Al pagar hoy obtienes acceso para toda la vida a los 7 módulos, los 3 bonos de regalo y a todas las actualizaciones que hagamos durante el año 2026.',
  },
  {
    question: '¿Necesito comprar cámaras caras, micrófonos o software de pago?',
    answer:
      'Para nada. Puedes crear y editar tus videos utilizando una computadora básica e incluso un teléfono inteligente. En el curso te mostramos herramientas 100% gratuitas o de bajísimo costo para generar imágenes, voces y editar sin gastar fortunas en equipo profesional.',
  },
  {
    question: '¿Funciona si vivo en Latinoamérica o España? ¿Cómo cobro en dólares?',
    answer:
      'Funciona perfectamente desde cualquier país del mundo. YouTube paga directamente a tu cuenta bancaria local o mediante plataformas como Payoneer, PayPal o transferencia directa en dólares. En el Módulo 1 te enseñamos cómo configurar tu cuenta de AdSense y tu perfil fiscal para recibir tus pagos sin retenciones innecesarias.',
  },
  {
    question: '¿Cuánto tiempo necesito dedicarle a la semana?',
    answer:
      'Con el sistema de automatización y las plantillas que te entregamos, crear un video completo te tomará entre 2 y 3 horas semanales. Con dedicarle de 5 a 7 horas a la semana es suficiente para publicar de 2 a 3 videos y mantener una tracción constante con el algoritmo.',
  },
  {
    question: '¿Cómo y cuándo recibo el acceso al curso tras el pago?',
    answer:
      'Inmediatamente. Tan pronto se procesa tu pago de $34,97 USD recibes un correo electrónico con tus datos de acceso (usuario y contraseña) a nuestra plataforma privada de miembros, donde podrás empezar a ver las lecciones desde cualquier dispositivo (PC, tablet o smartphone).',
  },
  {
    question: '¿Qué garantía tengo si el curso no me convence?',
    answer:
      'Cuentas con nuestra Garantía de Satisfacción Total de 30 días. Si entras, aplicas el método y sientes que no fue la mejor inversión de $34,97 USD que hiciste este año, nos mandas un correo y te reintegramos el 100% de tu dinero sin hacer preguntas.',
  },
];

interface FaqAccordionProps {
  onOpenCheckout: () => void;
}

export default function FaqAccordion({ onOpenCheckout }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#1c1c1c] border-t border-[#2e2e2e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Respuestas Rápidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Todo lo que necesitas saber antes de asegurar tu cupo promocional con el 93% de descuento.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-neutral-800/80 rounded-2xl bg-black/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-neutral-900/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-red-600/20 text-red-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-900/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center">
          <p className="text-sm text-neutral-300 mb-3 font-medium">
            ¿Listo para construir tu primer canal automatizado y monetizar en dólares?
          </p>
          <a
            href="https://pay.hotmart.com/T107839716O?off=cr25yvo9"
            className="inline-flex items-center gap-2 py-3 px-6 text-sm font-bold text-white bg-red-600 hover:bg-red-500 rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(220,38,38,0.4)] text-center"
          >
            <span>Asegurar Mi Acceso por $34,97 USD</span>
          </a>
        </div>

      </div>
    </section>
  );
}
