import React, { useState } from 'react';

export default function Footer() {
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);

  const openDisclaimer = () => {
    setModalContent({
      title: 'Descargo de Responsabilidad de Ingresos',
      text: 'Los resultados mencionados en esta página corresponden a casos de estudio reales de creadores y alumnos dedicados. No garantizamos que obtendrás resultados idénticos o inmediatos. Tus resultados dependerán exclusivamente de tu disciplina, ética de trabajo, selección de nicho y aplicación rigurosa de las estrategias enseñadas. Este programa provee educación práctica y herramientas, no esquemas de enriquecimiento fácil.',
    });
  };

  const openPrivacy = () => {
    setModalContent({
      title: 'Política de Privacidad',
      text: 'Respetamos tu privacidad. Tus datos personales y de correo electrónico serán utilizados exclusivamente para la entrega de tus credenciales de acceso a la plataforma, materiales del curso y comunicaciones educativas directamente relacionadas con el programa. Nunca compartiremos ni venderemos tu información a terceros.',
    });
  };

  const openTerms = () => {
    setModalContent({
      title: 'Términos y Condiciones',
      text: 'Al adquirir este programa obtienes una licencia personal e intransferible para acceder a los contenidos del curso de por vida. Queda prohibida la reproducción, reventa o distribución no autorizada de las lecciones, guiones y materiales protegidos por derechos de autor. Cuentas con 30 días de garantía de satisfacción total.',
    });
  };

  return (
    <footer className="bg-[#141414] border-t border-[#2e2e2e] py-12 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top footer row: brand & quick links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-neutral-900 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white font-black text-[10px]">
              ▶
            </span>
            <span className="text-base font-extrabold tracking-tight font-display text-white">
              TUBECASH<span className="text-red-500">.PRO</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400">
            <button
              onClick={openDisclaimer}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Descargo de Ganancias
            </button>
            <button
              onClick={openPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacidad
            </button>
            <button
              onClick={openTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Términos del Servicio
            </button>
          </div>
        </div>

        {/* Legal & Platform Disclaimer */}
        <div className="space-y-3 text-[11px] leading-relaxed text-neutral-400 max-w-4xl mx-auto text-center">
          <p>
            <strong>Aviso de Marca Comercial:</strong> Este sitio web no está afiliado, asociado, autorizado, respaldado ni de ninguna manera conectado oficialmente con YouTube™, Google LLC, o cualquiera de sus subsidiarias o afiliados. El nombre YouTube, así como los nombres, marcas, emblemas e imágenes relacionados son marcas registradas de sus respectivos propietarios.
          </p>
          <p>
            © {new Date().getFullYear()} TubeCash Pro Masterclass. Todos los derechos reservados. Oferta especial única de $34,97 USD.
          </p>
        </div>

      </div>

      {/* Legal Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setModalContent(null)}
        >
          <div
            className="w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-base font-bold text-white mb-3">
              {modalContent.title}
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed mb-5">
              {modalContent.text}
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="w-full py-2 px-4 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-700 transition-colors cursor-pointer"
            >
              Entendido y Cerrar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
