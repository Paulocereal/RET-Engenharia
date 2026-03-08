import React, { useState } from 'react';
import { 
  Home, Layers, ShieldAlert, Building2, 
  Zap, Settings, MessageCircle, Menu, ChevronLeft
} from 'lucide-react';

import Services from './components/Services';
import ContentArea from './components/ContentArea';

function App() {
  const [activeService, setActiveService] = useState('home');
  // Estado para controlar se a sidebar está aberta ou fechada (inicia fechada)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'INÍCIO', icon: Home },
    { id: 'modulacao', label: 'Projetos de Modulação de Formas', icon: Layers },
    { id: 'seguranca', label: 'Projeto de Sistemas de Segurança', icon: ShieldAlert },
    { id: 'estruturais', label: 'Projetos Estruturais de Concreto Armado', icon: Building2 },
    { id: 'eletrica-hidraulica', label: 'Projetos de Instalações Elétricas e Hidráulicas', icon: Zap },
    { id: 'mecanicos', label: 'Projetos Mecânicos em Geral (Estruturas Metálicas)', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar Lateral Retrátil */}
      <aside 
        className={`fixed inset-y-0 left-0 bg-[#0f172a] text-white shadow-2xl z-50 transition-all duration-300 ease-in-out overflow-hidden ${
          isSidebarOpen ? 'w-80' : 'w-20'
        }`}
      >
        {/* Cabeçalho da Sidebar com Botão de Abrir/Fechar */}
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          {isSidebarOpen && (
            <h1 className="text-lg font-bold tracking-tighter text-blue-400 uppercase animate-in fade-in duration-500">
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

        {/* Navegação */}
        <nav className="p-3 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveService(item.id);
                // Opcional: fechar a sidebar ao clicar em um item no celular
                // if (window.innerWidth < 768) setIsSidebarOpen(false);
              }}
              title={!isSidebarOpen ? item.label : ""}
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

      {/* Conteúdo Principal - A margem ml se ajusta conforme a sidebar */}
      <main 
        className={`flex-1 min-h-screen transition-all duration-300 ${
          isSidebarOpen ? 'ml-80' : 'ml-20'
        }`}
      >
        {activeService === 'home' ? (
          <div className="animate-in fade-in duration-700">
            <section className="relative w-full py-16 px-8 flex flex-col items-center justify-center bg-white border-b border-slate-100">
              <img 
                src="./logo-ret.png" 
                alt="RET Engenharia" 
                className="max-w-4xl w-full h-auto drop-shadow-2xl mb-8 transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://raw.githubusercontent.com/PauloCereal/RET-Engenharia/main/public/logo-ret.png";
                }}
              />
              <div className="text-center">
                <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Engenharia e Projetos</h2>
                <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
              </div>
            </section>
            
            <section className="p-8">
              <Services onNavigate={setActiveService} />
            </section>
          </div>
        ) : (
          <div className="p-8">
            <ContentArea activeId={activeService} />
          </div>
        )}
      </main>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
