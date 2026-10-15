import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../config/constants';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿Realmente puedo ganar dinero sin mostrar mi cara ni usar mi voz?',
    answer:
      'Sí, totalmente. Te enseño a crear guiones hipnóticos con Inteligencia Artificial, utilizar voces realistas con IA que no suenan a robot y editar con videos libres de derechos de autor. Nadie tiene por qué saber quién está detrás del canal.',
  },
  {
    question: '¿El precio de $34,97 USD es un pago único o hay mensualidades?',
    answer:
      'Es un pago único de $34,97 USD. No hay mensualidades ni cargos sorpresa. Al pagar hoy tienes acceso completo durante 6 meses al Módulo 1 y Módulo 2 para ver las clases las veces que quieras a tu propio ritmo.',
  },
  {
    question: '¿Necesito comprar cámaras caras, micrófonos o programas de pago?',
    answer:
      'Para nada. Puedes crear y editar tus videos utilizando una computadora básica. En las clases te muestro herramientas gratuitas o muy económicas para generar imágenes, voces y editar sin gastar dinero en equipos profesionales.',
  },
  {
    question: '¿Funciona si vivo en Latinoamérica o España? ¿Cómo cobro en dólares?',
    answer:
      'Funciona desde cualquier país del mundo. YouTube te paga directamente a tu cuenta bancaria local o mediante transferencia en dólares sin complicaciones.',
  },
  {
    question: '¿Cuánto tiempo necesito dedicarle a la semana?',
    answer:
      'Con dedicarle unas 5 a 7 horas a la semana te alcanza para publicar 2 a 3 videos y empezar a mover tu canal con el algoritmo.',
  },
  {
    question: '¿Cómo y cuándo recibo el acceso a las clases?',
    answer:
      'De inmediato. En cuanto se procesa tu pago de $34,97 USD recibes un correo con tu usuario y contraseña para entrar directo a la plataforma y ver las clases desde tu computadora.',
  },
  {
    question: '¿Qué garantía tengo si el curso no me convence?',
    answer:
      'Tienes una garantía total de 7 días. Si entras, miras las clases y sientes que el curso no es para ti, me mandas un mensaje y te devuelvo el 100% de tu dinero de inmediato sin dar vueltas ni hacer preguntas.',
  },
];

interface FaqAccordionProps {
  onOpenCheckout?: () => void;
}

export default function FaqAccordion({ onOpenCheckout }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-8 sm:py-12 bg-[#1c1c1c] border-t border-[#2e2e2e]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Si te queda alguna duda antes de entrar, aquí te respondo las más comunes de forma simple y directa.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5 mb-6">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-neutral-800 rounded-xl bg-black/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left cursor-pointer hover:bg-neutral-900/40 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-white pr-3">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-red-600/20 text-red-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-neutral-300 leading-relaxed border-t border-neutral-900/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center max-w-xl mx-auto flex flex-col items-center">
          <p className="text-xs sm:text-sm text-neutral-300 mb-3 font-medium">
            ¿Listo para empezar tu canal y monetizar en dólares?
          </p>
          <a
            href={HOTMART_CHECKOUT_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-500 rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(220,38,38,0.4)] text-center"
          >
            <span>Asegurar mi acceso por $34,97 USD</span>
          </a>

          {/* Botón de WhatsApp para consultas */}
          <a
            href="https://wa.link/7numan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 py-3 px-5 text-xs sm:text-sm font-extrabold text-white bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all cursor-pointer transform hover:-translate-y-0.5 text-center"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.821 2.791.821 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.807-5.768-5.807zm3.391 8.248c-.146.415-.852.797-1.187.848-.328.05-.758.077-2.373-.591-1.932-.8-3.167-2.775-3.262-2.903-.099-.127-.779-1.037-.779-1.974 0-.937.48-1.399.664-1.59.182-.191.398-.239.531-.239.13 0 .261.002.374.007.121.005.284-.046.444.339.164.398.562 1.371.611 1.47.05.1.082.217.016.35-.066.13-.1.21-.198.325-.099.116-.209.26-.299.35-.099.098-.202.204-.087.401.116.198.514.848 1.101 1.371.756.674 1.393.882 1.59.98.198.099.314.083.43-.05.116-.133.498-.58.63-.78.133-.198.265-.165.446-.098.182.066 1.157.546 1.355.646.199.099.332.148.381.231.05.082.05.479-.096.894z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.957-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.637 0-3.174-.469-4.48-1.282l-.322-.199-2.937.828.841-2.86-.217-.341C3.967 15.006 3.438 13.565 3.438 12c0-4.721 3.841-8.563 8.562-8.563 4.722 0 8.563 3.842 8.563 8.563 0 4.721-3.841 8.063-8.563 8.063z"/>
            </svg>
            <span>TENGO DUDAS, CONSULTAR POR WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
}
