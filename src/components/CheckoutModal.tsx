import React, { useState } from 'react';
import {
  X,
  Lock,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  Zap,
  ArrowRight,
  ExternalLink,
  Download,
  AlertCircle,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentTab = 'card' | 'paypal' | 'crypto' | 'local';

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [paymentTab, setPaymentTab] = useState<PaymentTab>('card');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('España');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Por favor ingresa un correo electrónico válido para enviarte el acceso.');
      return;
    }

    if (paymentTab === 'card') {
      if (cardNumber.replace(/\s/g, '').length < 15) {
        setErrorMsg('Por favor ingresa un número de tarjeta válido (16 dígitos).');
        return;
      }
      if (!cardExpiry.includes('/')) {
        setErrorMsg('Formato de fecha inválido (MM/AA).');
        return;
      }
      if (cardCvc.length < 3) {
        setErrorMsg('Por favor ingresa el código CVC (3 o 4 dígitos).');
        return;
      }
    }

    setIsProcessing(true);
    setProcessStep('Conectando con la pasarela bancaria segura...');

    setTimeout(() => {
      setProcessStep('Verificando pago de $34,97 USD y encriptando token...');
    }, 900);

    setTimeout(() => {
      setProcessStep('Creando tu cuenta de alumno y generando credenciales...');
    }, 1900);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setIsProcessing(false);
    setFullName('');
    setEmail('');
    setCardNumber('');
    setCardExpiry('');
    setCardCvc('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#1c1c1c] border border-[#383838] rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Cerrar ventana de pago"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          /* Confirmation Screen */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/60 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold mb-1">
              ¡PAGO CONFIRMADO CON ÉXITO!
            </div>

            <h3 className="text-2xl font-extrabold text-white font-display mb-2">
              ¡Bienvenido a TubeCash Mastery!
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6">
              Hemos enviado los datos de acceso para ingresar a la plataforma y descargar tus bonos al correo:
              <br />
              <strong className="text-white font-mono">{email}</strong>
            </p>

            {/* Simulated Access Details Box */}
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-left space-y-2.5 mb-6 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span className="text-neutral-400">Referencia de compra:</span>
                <span className="font-mono text-neutral-200">#YT-8849-OK</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span className="text-neutral-400">Monto abonado:</span>
                <span className="font-mono text-emerald-400 font-bold">$34,97 USD</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span className="text-neutral-400">Estado del acceso:</span>
                <span className="text-emerald-400 font-semibold">Activado de Por Vida</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Código de alumno:</span>
                <span className="font-mono bg-black px-2 py-0.5 rounded border border-neutral-700 text-red-400 font-bold">
                  TUBECASH-VIP-2026
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => alert(`Acceso activado para ${email}. Abriendo aula virtual...`)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-white bg-red-600 hover:bg-red-500 rounded-xl transition-colors cursor-pointer shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              >
                <span>Entrar al Aula Virtual Ahora</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Cerrar esta ventana
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div>
            {/* Header */}
            <div className="mb-6 pr-6">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-500 uppercase tracking-wider mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>PAGO 100% SEGURO SSL 256-BIT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                Inscripción TubeCash Mastery
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Acceso vitalicio a los 7 módulos + 3 bonos exclusivos.
              </p>
            </div>

            {/* Order Summary Pill */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 mb-5">
              <div>
                <div className="text-xs font-bold text-white">Master Monetización YouTube</div>
                <div className="text-[11px] text-neutral-400">Pago único de por vida · 30 días de garantía</div>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-400 line-through mr-1.5">$497</span>
                <span className="text-lg font-black text-red-500 font-mono">$34,97</span>
                <span className="text-xs text-neutral-400 font-mono ml-0.5">USD</span>
              </div>
            </div>

            {/* Payment Method Selector Tabs */}
            <div className="grid grid-cols-4 gap-1.5 p-1 bg-neutral-900 rounded-xl mb-5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setPaymentTab('card')}
                className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer truncate ${
                  paymentTab === 'card'
                    ? 'bg-neutral-800 text-white font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Tarjeta
              </button>
              <button
                type="button"
                onClick={() => setPaymentTab('paypal')}
                className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer truncate ${
                  paymentTab === 'paypal'
                    ? 'bg-neutral-800 text-white font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                PayPal
              </button>
              <button
                type="button"
                onClick={() => setPaymentTab('crypto')}
                className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer truncate ${
                  paymentTab === 'crypto'
                    ? 'bg-neutral-800 text-white font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Cripto
              </button>
              <button
                type="button"
                onClick={() => setPaymentTab('local')}
                className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer truncate ${
                  paymentTab === 'local'
                    ? 'bg-neutral-800 text-white font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Local / Pix
              </button>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-950/60 border border-red-800/80 flex items-center gap-2 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Martín Ruiz"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Correo Electrónico (Acceso)
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu-correo@ejemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                  País de Facturación
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                >
                  <option value="España">España</option>
                  <option value="México">México</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Chile">Chile</option>
                  <option value="Perú">Perú</option>
                  <option value="Estados Unidos">Estados Unidos</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Otro">Otro país</option>
                </select>
              </div>

              {/* Tab specific fields */}
              {paymentTab === 'card' && (
                <div className="space-y-3 pt-1">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      Número de Tarjeta
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => {
                          // Format 4 groups of 4 digits
                          const val = e.target.value.replace(/\D/g, '').slice(0, 16);
                          const formatted = val.replace(/(\d{4})(?=\d)/g, '$1 ');
                          setCardNumber(formatted);
                        }}
                        placeholder="4000 1234 5678 9010"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white font-mono placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <CreditCard className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                        Expiración (MM/AA)
                      </label>
                      <input
                        type="text"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => {
                          let val = e.target.value.replace(/[^\d]/g, '');
                          if (val.length >= 2) {
                            val = val.slice(0, 2) + '/' + val.slice(2, 4);
                          }
                          setCardExpiry(val);
                        }}
                        placeholder="12/28"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white font-mono placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                        CVC / CVV
                      </label>
                      <input
                        type="password"
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ''))}
                        placeholder="123"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white font-mono placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentTab === 'paypal' && (
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-neutral-300 space-y-2">
                  <div className="font-semibold text-blue-400">Pago instantáneo con PayPal</div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Al pulsar continuar, podrás autorizar tu pago seguro de $34,97 USD con tu saldo de PayPal o tarjeta asociada con protección al comprador.
                  </p>
                </div>
              )}

              {paymentTab === 'crypto' && (
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 space-y-2">
                  <div className="font-semibold text-amber-400">USDT (TRC20 / ERC20) / BTC / ETH</div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Paga $34.97 USD exactos en stablecoins o criptomonedas sin comisiones bancarias internacionales.
                  </p>
                </div>
              )}

              {paymentTab === 'local' && (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-neutral-300 space-y-2">
                  <div className="font-semibold text-emerald-400">Métodos en Moneda Local</div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Soporte para Pix (Brasil), OXXO (México), PSE (Colombia), Efecty y transferencia bancaria local al cambio oficial de $34,97 USD.
                  </p>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full mt-3 py-4 px-6 text-sm font-extrabold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 disabled:opacity-70 rounded-xl transition-all cursor-pointer shadow-[0_0_25px_rgba(220,38,38,0.5)] flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{processStep}</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>COMPLETAR PAGO SEGURO ($34,97 USD)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Guarantees footnote */}
              <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-neutral-400 text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Garantía 30 Días
                </span>
                <span>·</span>
                <span>Entrega Inmediata</span>
                <span>·</span>
                <span>Sin Cobros Ocultos</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
