import { useState } from 'react';

import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Expertise from './components/Expertise';
import SpecialServices from './components/SpecialServices';
import ContentArea from './components/ContentArea';
import Footer from './components/Footer';

function App() {
  const [activeService, setActiveService] = useState('home');

  const topNavItems = [
    { id: 'home', label: 'HOME' },
    { id: 'quem-somos', label: 'QUEM SOMOS' },
    { id: 'produtos', label: 'PRODUTOS' },
    { id: 'galeria', label: 'GALERIA' },
    { id: 'blog', label: 'BLOG' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'CONTATO' },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans">
      {/* 🖼️ Imagem de fundo FIXA (não rola com a página) */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/fundo_site.png")' }}
        aria-hidden="true"
      />

      {/* 🌒 Overlay em GRADIENTE fixo — forte em cima, escuro embaixo */}
      <div
        className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950/95"
        aria-hidden="true"
      />

      {/* Conteúdo rolável */}
      <main className="relative flex-1 min-h-screen w-full">
        {/* HEADER */}
        <header className="sticky top-0 w-full bg-white/95 backdrop-blur border-b border-slate-100 z-50 px-8 h-20 shadow-sm">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between relative">
            <div
              className="flex items-center cursor-pointer z-10"
              onClick={() => setActiveService('home')}
            >
              <img src="/logo-ret.png" alt="RET Engenharia" className="h-12 w-auto" />
            </div>

            <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-8">
              {topNavItems.map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => setActiveService(nav.id)}
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
