import React, { useState } from 'react';
import Hero from './components/Hero';
import RoiCalculator from './components/RoiCalculator';
import CurriculumAccordion from './components/CurriculumAccordion';
import ProofAndCaseStudies from './components/ProofAndCaseStudies';
import Authority from './components/Authority';
import OfferPricing from './components/OfferPricing';
import Guarantee from './components/Guarantee';
import FaqAccordion from './components/FaqAccordion';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import StickyCtaBar from './components/StickyCtaBar';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Main Sales Flow */}
      <main className="flex-1">
        {/* 1. Hero with integrated Video Logo, value proposition, and $34.97 USD offer anchor */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* 2. Interactive YouTube Monetization Calculator */}
        <RoiCalculator onOpenCheckout={handleOpenCheckout} />

        {/* 3. Social Proof, Metrics, and Real Student Case Studies */}
        <ProofAndCaseStudies onOpenCheckout={handleOpenCheckout} />

        {/* 4. Complete Curriculum Breakdown (7 Modules + 3 Elite Bonuses) */}
        <CurriculumAccordion onOpenCheckout={handleOpenCheckout} />

        {/* 5. Authority & Instructor Story (Andrés Navarro) */}
        <Authority />

        {/* 6. Official Offer Stack ($34.97 USD), Value Comparison & Countdown */}
        <OfferPricing onOpenCheckout={handleOpenCheckout} />

        {/* 7. 30-Day Risk-Free Money Back Guarantee */}
        <Guarantee onOpenCheckout={handleOpenCheckout} />

        {/* 8. Frequently Asked Questions */}
        <FaqAccordion onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Simulated Checkout Drawer/Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />

      {/* Floating Conversion Bar for Desktop & Mobile (<15% mobile viewport height) */}
      <StickyCtaBar onOpenCheckout={handleOpenCheckout} />
    </div>
  );
}
