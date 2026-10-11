import { useState } from 'react';

import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Expertise from './components/Expertise';
import SpecialServices from './components/SpecialServices';
import ContentArea from './components/ContentArea';
import Footer from './components/Footer';

// 🔗 Número do WhatsApp (sem "+" e sem espaços)
const WHATSAPP_NUMBER = '553193056056;
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de fazer um orçamento com a RET-Engenharia.'
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

interface NavItem {
  id: string;
  label: string;
  target?: string;  // id da seção da home
  link?: string;    // URL externa (abre em nova aba)
}

const topNavItems: NavItem[] = [
  { id: 'services',        label: 'NOSSO SERVIÇOS',         target: 'services' },
  { id: 'approach',        label: 'FORMAS DE ALUMÍNIO',     target: 'approach' },
  { id: 'expertise',       label: 'EXPERTISE TÉCNICA',      target: 'expertise' },
  { id: 'special-services', label: 'SERVIÇOS ESPECIALIZADOS', target: 'special-services' },
  { id: 'whatsapp',        label: 'WHATSAPP',               link: WHATSAPP_LINK },
];

function App() {
  const [activeService, setActiveService] = useState('home');

  const handleNav = (item: NavItem) => {
    // WhatsApp / links externos → nova aba
    if (item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
      return;
    }

    // Seções da home → rola suavemente
    if (item.target) {
      setActiveService('home');
      setTimeout(() => {
        document
          .getElementById(item.target!)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  };

  const handleHome = () => {
    setActiveService('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen font-sans">
      {/* 🖼️ Imagem de fundo FIXA */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/fundo.jpg")' }}
        aria-hidden="true"
      />

      {/* 🌒 Overlay em gradiente */}
      <div
        className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950/95"
        aria-hidden="true"
      />

      <main className="relative flex-1 min-h-screen w-full">
        {/* HEADER */}
        <header className="sticky top-0 w-full bg-white/95 backdrop-blur border-b border-slate-100 z-50 px-8 h-20 shadow-sm">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between relative">
            {/* Logo → volta ao topo */}
            <div
              className="flex items-center cursor-pointer z-10"
              onClick={handleHome}
            >
              <img src="/logo-ret.png" alt="RET Engenharia" className="h-12 w-auto" />
            </div>

            {/* Menu centralizado */}
            <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-8">
              {topNavItems.map((nav) => {
                const isWhats = nav.id === 'whatsapp';
                return (
                  <button
                    key={nav.id}
                    onClick={() => handleNav(nav)}
                    className={`text-xs font-black tracking-widest transition-all py-2 border-b-2 ${
                      isWhats
                        ? 'text-green-600 border-transparent hover:text-green-500 hover:border-green-500'
                        : activeService === nav.id
                        ? 'text-blue-600 border-blue-600'
                        : 'text-slate-600 border-transparent hover:text-blue-600'
                    }`}
                  >
                    {nav.label}
                  </button>
                );
              })}
            </nav>

            <div className="hidden lg:block w-[150px]"></div>
          </div>
        </header>

        {activeService === 'home' ? (
          <div className="animate-in fade-in duration-700">
            <Hero onNavigate={setActiveService} />
            <Services onNavigate={setActiveService} />
            <Approach />
            <Expertise />
            <SpecialServices />
          </div>
        ) : (
          <div className="p-8">
            <ContentArea activeId={activeService} />
          </div>
        )}

        <Footer />
      </main>
    </div>
  );
}

export default App;
