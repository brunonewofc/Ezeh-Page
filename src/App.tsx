import React from 'react';
import Hero from './components/Hero';
import CurriculumAccordion from './components/CurriculumAccordion';
import OfferPricing from './components/OfferPricing';
import Guarantee from './components/Guarantee';
import FaqAccordion from './components/FaqAccordion';
import { HOTMART_CHECKOUT_URL } from './config/constants';

export default function App() {
  const handleOpenCheckout = () => {
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Flujo de ventas principal */}
      <main className="flex-1 pb-10">
        {/* 1. Hero con titular de alto impacto */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* 2. Clases prácticas (Módulo 1 y 2) */}
        <CurriculumAccordion onOpenCheckout={handleOpenCheckout} />

        {/* 3. Oferta oficial ($34,97 USD) y acceso por 6 meses */}
        <OfferPricing onOpenCheckout={handleOpenCheckout} />

        {/* 4. Garantía total de 7 días */}
        <Guarantee onOpenCheckout={handleOpenCheckout} />

        {/* 5. Preguntas Frecuentes */}
        <FaqAccordion onOpenCheckout={handleOpenCheckout} />
      </main>
    </div>
  );
}
