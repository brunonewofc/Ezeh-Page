import React, { useState, useEffect } from 'react';
import { ArrowRight, Lock, Zap } from 'lucide-react';

interface StickyCtaBarProps {
  onOpenCheckout: () => void;
}

export default function StickyCtaBar({ onOpenCheckout }: StickyCtaBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 500px past the hero
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra de compra rápida"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#1c1c1c]/95 backdrop-blur-md border-t border-[#333333] py-2.5 px-4 sm:px-6 transition-all duration-300"
      style={{ maxHeight: '64px' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Product title & price */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden sm:flex w-8 h-8 rounded-lg bg-red-600/20 text-red-500 items-center justify-center font-black text-xs shrink-0">
            ▶
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-bold text-white truncate">
              Master Monetización YouTube
            </div>
            <div className="text-[11px] text-neutral-400 hidden sm:block truncate">
              7 Módulos + 3 Bonos · Acceso Inmediato
            </div>
          </div>
        </div>

        {/* Right: Price & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <span className="text-[11px] text-neutral-400 line-through mr-1 hidden xs:inline">
              $497
            </span>
            <span className="font-mono text-sm sm:text-base font-black text-white">
              $34,97 <span className="text-xs text-red-500">USD</span>
            </span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="group inline-flex items-center gap-1.5 py-2 px-3.5 sm:px-4 text-xs font-extrabold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Inscribirme Ahora</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </aside>
  );
}
