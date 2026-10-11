import { useState } from 'react';
import {
  Home, Layers, ShieldAlert, Building2,
  Zap, Settings, Menu, ChevronLeft
} from 'lucide-react';

import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Expertise from './components/Expertise';
import SpecialServices from './components/SpecialServices';
import ContentArea from './components/ContentArea';
import Footer from './components/Footer';

function App() {
  const [activeService, setActiveService] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'INÍCIO', icon: Home },
    { id: 'modulacao', label: 'Projetos de Modulação de Formas', icon: Layers },
    { id: 'seguranca', label: 'Projeto de Sistemas de Segurança', icon: ShieldAlert },
    { id: 'estruturais', label: 'Projetos Estruturais de Concreto Armado', icon: Building2 },
    { id: 'eletrica-hidraulica', label: 'Projetos de Instalações Elétricas e Hidráulicas', icon: Zap },
    { id: 'mecanicos', label: 'Projetos Mecânicos em Geral (Estruturas Metálicas)', icon: Settings },
  ];

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
    <div className="flex min-h-screen bg-slate-50 font-sans flex-col">
      <div className="flex flex-1">
        {/* 1. SIDEBAR LATERAL RETRÁTIL */}
        <aside
          className={`fixed inset-y-0 left-0 bg-[#0f172a] text-white shadow-2xl z-[60] transition-all duration-300 ease-in-out overflow-hidden ${
            isSidebarOpen ? 'w-80' : 'w-20'
          }`}
        >
          <div className="p-4 border-b border-slate-700 flex items-center justify-between">
            {isSidebarOpen && (
              <h1 className="text-lg font-bold tracking-tighter text-blue-400 uppercase">
                RET ENGENHARIA
              </h1>
            )}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg text-blue-400 mx-auto transition-colors"
            >
              {isSidebarOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className="p-3 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveService(item.id)}
                title={!isSidebarOpen ? item.label : ''}
                className={`w-full flex items-center rounded-xl transition-all duration-200 text-left ${
                  isSidebarOpen ? 'px-4 py-4 space-x-3' : 'justify-center py-4'
                } ${
                  activeService === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon size={22} className="flex-shrink-0" />
                {isSidebarOpen && (
                  <span className="text-sm font-medium leading-tight animate-in slide-in-from-left-2 duration-300">
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* 2. ÁREA DE CONTEÚDO PRINCIPAL */}
        <main
          className={`flex-1 min-h-screen transition-all duration-300 ${
            isSidebarOpen ? 'ml-80' : 'ml-20'
          }`}
        >
          {/* HEADER SUPERIOR */}
          <header className="sticky top-0 w-full bg-white border-b border-slate-100 z-50 px-8 h-20 shadow-sm">
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
              {/* HERO */}
              <Hero onNavigate={setActiveService} />

              {/* NOSSOS SERVIÇOS */}
              <Services onNavigate={setActiveService} />

              {/* FORMAS DE ALUMÍNIO */}
              <Approach />

              {/* EXPERTISE TÉCNICA */}
              <Expertise />

              {/* SERVIÇOS ESPECIALIZADOS */}
              <SpecialServices />
            </div>
          ) : (
            <div className="p-8">
              <ContentArea activeId={activeService} />
            </div>
          )}

          {/* 3. RODAPÉ */}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
