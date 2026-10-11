import { useState } from 'react';

import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Expertise from './components/Expertise';
import SpecialServices from './components/SpecialServices';
import ContentArea from './components/ContentArea';
import Footer from './components/Footer';

// Seções que existem DENTRO da home (rolam suavemente)
const HOME_SECTIONS = ['services', 'approach', 'expertise', 'special-services'];

interface NavItem {
  id: string;
  label: string;
  target: string; // id da seção OU chave do ContentArea
}

const topNavItems: NavItem[] = [
  { id: 'home',          label: 'HOME',         target: 'home' },
  { id: 'quem-somos',    label: 'QUEM SOMOS',   target: 'services' },
  { id: 'produtos',      label: 'PRODUTOS',     target: 'services' },
  { id: 'galeria',       label: 'GALERIA',      target: 'galeria' },
  { id: 'blog',          label: 'BLOG',         target: 'blog' },
  { id: 'faq',           label: 'FAQ',          target: 'faq' },
  { id: 'contato',       label: 'CONTATO',      target: 'contato' },
];

function App() {
  const [activeService, setActiveService] = useState('home');

  const handleNav = (item: NavItem) => {
    // 1) HOME → volta ao topo
    if (item.id === 'home') {
      setActiveService('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 2) Seção da home → rola até ela
    if (HOME_SECTIONS.includes(item.target)) {
      setActiveService('home');
      // pequeno delay para garantir que a home renderizou
      setTimeout(() => {
        document
          .getElementById(item.target)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return;
    }

    // 3) Página separada → abre ContentArea
    setActiveService(item.id);
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
            <div
              className="flex items-center cursor-pointer z-10"
              onClick={() => handleNav(topNavItems[0])}
            >
              <img src="/logo-ret.png" alt="RET Engenharia" className="h-12 w-auto" />
            </div>

            <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-8">
              {topNavItems.map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => handleNav(nav)}
                  className={`text-xs font-black tracking-widest transition-all hover:text-blue-600 py-2 border-b-2 ${
                    activeService === nav.id
                      ? 'text-blue-600 border-blue-600'
                      : 'text-slate-600 border-transparent'
                  }`}
                >
                  {nav.label}
                </button>
              ))}
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
