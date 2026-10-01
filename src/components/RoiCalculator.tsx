import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Sparkles, Check, ArrowRight } from 'lucide-react';

interface NicheOption {
  id: string;
  name: string;
  cpm: number; // USD per 1000 views
  description: string;
}

const NICHES: NicheOption[] = [
  {
    id: 'finance',
    name: 'Finanzas e Inversiones',
    cpm: 18.5,
    description: 'Nicho con mayor presupuesto de anunciantes globales.',
  },
  {
    id: 'ai',
    name: 'Inteligencia Artificial y Software',
    cpm: 12.8,
    description: 'Altísima demanda y herramientas con afiliados recurrentes.',
  },
  {
    id: 'business',
    name: 'Emprendimiento y Negocios',
    cpm: 13.5,
    description: 'Audiencia con alto poder adquisitivo y tickets elevados.',
  },
  {
    id: 'health',
    name: 'Salud, Bienestar y Biohacking',
    cpm: 7.4,
    description: 'Volumen masivo de reproducciones y alta fidelidad.',
  },
  {
    id: 'mystery',
    name: 'Curiosidades, Tops e Historia',
    cpm: 4.8,
    description: 'Fácil viralización mundial con guiones de suspense.',
  },
];

interface RoiCalculatorProps {
  onOpenCheckout: () => void;
}

export default function RoiCalculator({ onOpenCheckout }: RoiCalculatorProps) {
  const [views, setViews] = useState<number>(250000);
  const [selectedNiche, setSelectedNiche] = useState<NicheOption>(NICHES[0]);
  const [includeAffiliates, setIncludeAffiliates] = useState<boolean>(true);
  const [includeSponsors, setIncludeSponsors] = useState<boolean>(false);

  // Calculations
  // YouTube standard revenue share: ~55% to creator
  const baseAdSense = (views / 1000) * selectedNiche.cpm * 0.55;
  const affiliateRevenue = includeAffiliates ? baseAdSense * 0.65 : 0;
  const sponsorRevenue = includeSponsors ? Math.max(250, (views / 1000) * 2.2) : 0;

  const totalMonthlyUSD = baseAdSense + affiliateRevenue + sponsorRevenue;
  const totalAnnualUSD = totalMonthlyUSD * 12;

  // Days to recoup course fee ($34.97 USD)
  const dailyIncome = totalMonthlyUSD / 30;
  const daysToRecoup = Math.max(0.5, (34.97 / (dailyIncome || 1)));

  return (
    <section id="calculadora" className="py-20 sm:py-24 bg-[#1c1c1c] border-t border-[#2e2e2e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Simulador Interactivo de Rentabilidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Calcula Cuánto Puedes Ganar con un Canal Estratégico
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            No todas las vistas valen lo mismo. Un canal en un nicho de alto CPM con 50,000 vistas 
            puede generar mucho más dinero que un canal genérico de 1 millón de vistas.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            
            {/* Step 1: Niche selector */}
            <div className="mb-7">
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-3">
                1. Selecciona el Nicho de tu Canal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {NICHES.map((niche) => {
                  const isSelected = selectedNiche.id === niche.id;
                  return (
                    <button
                      key={niche.id}
                      type="button"
                      onClick={() => setSelectedNiche(niche)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-800 border-red-600/80 shadow-[0_0_15px_rgba(220,38,38,0.25)] text-white'
                          : 'bg-neutral-950/60 border-neutral-800/80 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold truncate">{niche.name}</span>
                        <span className="text-[11px] font-mono font-semibold text-red-400 shrink-0">
                          CPM ~${niche.cpm}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-tight">
                        {niche.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Views Slider */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-neutral-300">
                  2. Vistas Mensuales Proyectadas
                </label>
                <span className="font-mono text-base font-bold text-red-400 bg-neutral-950 px-3 py-1 rounded-lg border border-neutral-800">
                  {views.toLocaleString('es-ES')} vistas/mes
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="2000000"
                step="20000"
                value={views}
                onChange={(e) => setViews(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-2 font-mono">
                <span>20K (Iniciando)</span>
                <span>250K (Canal Estable)</span>
                <span>1M+ (Escalado)</span>
                <span>2M</span>
              </div>
            </div>

            {/* Step 3: Additional monetization streams */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-3">
                3. Fuentes de Monetización Activas
              </label>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/60 border border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded bg-red-600/20 text-red-500 flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Google AdSense Oficial</div>
                      <div className="text-[11px] text-neutral-400">Pago directo por anuncios vistos en tus videos</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Activo</span>
                </div>

                <button
                  type="button"
                  onClick={() => setIncludeAffiliates(!includeAffiliates)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                    includeAffiliates
                      ? 'bg-neutral-800/80 border-red-600/40 text-white'
                      : 'bg-neutral-950/40 border-neutral-800/60 text-neutral-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
                        includeAffiliates ? 'bg-red-600 text-white' : 'border border-neutral-700 text-transparent'
                      }`}
                    >
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Marketing de Afiliados de Alto Ticket</div>
                      <div className="text-[11px] text-neutral-400">Recomendar software o cursos en la descripción (+65% ingresos)</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">{includeAffiliates ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeSponsors(!includeSponsors)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                    includeSponsors
                      ? 'bg-neutral-800/80 border-red-600/40 text-white'
                      : 'bg-neutral-950/40 border-neutral-800/60 text-neutral-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
                        includeSponsors ? 'bg-red-600 text-white' : 'border border-neutral-700 text-transparent'
                      }`}
                    >
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Integraciones y Patrocinios de Marcas</div>
                      <div className="text-[11px] text-neutral-400">Marcas que pagan por menciones de 45 segundos</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">{includeSponsors ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-800">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  Potencial Estimado
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Calculado en USD
                </span>
              </div>

              <div className="mb-6">
                <div className="text-neutral-400 text-xs mb-1">Ingresos Mensuales Estimados:</div>
                <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-red-500 font-mono">$</span>
                  <span className="font-mono">
                    {Math.round(totalMonthlyUSD).toLocaleString('es-ES')}
                  </span>
                  <span className="text-sm font-sans text-neutral-400 font-normal">USD / mes</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800">
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">Proyección Anual</div>
                  <div className="text-lg font-bold text-white font-mono">
                    ${Math.round(totalAnnualUSD).toLocaleString('es-ES')}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">Recuperas tus $34,97</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">
                    {daysToRecoup < 1 ? '¡En 1 día!' : `En ${daysToRecoup.toFixed(1)} días`}
                  </div>
                </div>
              </div>

              {/* Sub-breakdown */}
              <div className="space-y-2 text-xs text-neutral-400 mb-6">
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span>Google AdSense (estimado):</span>
                  <span className="font-mono text-neutral-200">${Math.round(baseAdSense).toLocaleString('es-ES')} USD</span>
                </div>
                {includeAffiliates && (
                  <div className="flex justify-between py-1 border-b border-neutral-800/60">
                    <span>Comisiones por Afiliados:</span>
                    <span className="font-mono text-emerald-400">+${Math.round(affiliateRevenue).toLocaleString('es-ES')} USD</span>
                  </div>
                )}
                {includeSponsors && (
                  <div className="flex justify-between py-1 border-b border-neutral-800/60">
                    <span>Patrocinios directos:</span>
                    <span className="font-mono text-amber-400">+${Math.round(sponsorRevenue).toLocaleString('es-ES')} USD</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="p-3 bg-red-950/40 border border-red-900/60 rounded-xl mb-4 text-xs text-neutral-300 leading-relaxed">
                <span className="font-semibold text-red-400">💡 Nota del método:</span> En el curso aprenderás a conseguir tus primeras 100,000 reproducciones 
                utilizando la técnica de apalancamiento algorítmico y títulos de curiosidad irresistible.
              </div>

              <button
                onClick={onOpenCheckout}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-bold text-white bg-red-600 hover:bg-red-500 rounded-xl transition-all duration-150 cursor-pointer shadow-[0_0_20px_rgba(220,38,38,0.35)]"
              >
                <span>Aprender el Método por $34,97 USD</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
