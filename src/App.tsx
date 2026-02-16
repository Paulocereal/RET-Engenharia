import React, { useState } from 'react';
import { 
  Home, Building2, ShieldCheck, Wind, Flame, 
  ClipboardCheck, Construction, Gauge, Hammer, 
  Microscope, PlayCircle, Car, Fan, Truck, 
  Snowflake, Anchor, FireExtinguisher
} from 'lucide-react';
import Services from './components/Services';
import ContentArea from './components/ContentArea';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [activeService, setActiveService] = useState('home');

  const menuItems = [
    { id: 'home', label: 'INÍCIO', icon: Home },
    { id: 'estruturas', label: 'ESTRUTURAS', icon: Building2 },
    { id: 'nr-12', label: 'NR-12', icon: ShieldCheck },
    { id: 'pmoc', label: 'PMOC', icon: Wind },
    { id: 'gas-glp', label: 'GÁS GLP', icon: Flame },
    { id: 'cautelar', label: 'CAUTELAR', icon: ClipboardCheck },
    { id: 'andaimes', label: 'ANDAIMES', icon: Construction },
    { id: 'nr-13', label: 'NR-13', icon: Gauge },
    { id: 'pesados', label: 'PESADOS', icon: Hammer },
    { id: 'pericia', label: 'PERÍCIA', icon: Microscope },
    { id: 'kids', label: 'KIDS', icon: PlayCircle },
    { id: 'veicular', label: 'VEICULAR', icon: Car },
    { id: 'exaustao', label: 'EXAUSTÃO', icon: Fan },
    { id: 'nr-11', label: 'NR-11', icon: Truck },
    { id: 'hvac', label: 'HVAC', icon: Snowflake },
    { id: 'l-vida', label: 'L. VIDA', icon: Anchor },
    { id: 'ppci', label: 'PPCI', icon: FireExtinguisher },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar Lateral */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-[#0f172a] text-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold tracking-tighter">RET ENGENHARIA</h1>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Menu Técnico</p>
        </div>
        
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveService(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeService === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={20} className={activeService === item.id ? 'text-white' : 'group-hover:text-blue-400'} />
              <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 ml-64 min-h-screen">
        {activeService === 'home' ? (
          <div className="animate-in fade-in duration-700">
            {/* Hero Section com Imagem de Inspeção */}
            <section className="relative w-full py-16 px-8 flex flex-col items-center justify-center bg-white border-b border-slate-100">
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl mb-10">
                  <img 
                    src="inspecao.jpg" 
                    alt="Inspeção RET Engenharia" 
                    className="w-full h-auto object-cover animate-in zoom-in duration-1000"
                    onError={(e) => {
                      e.currentTarget.src = "https://raw.githubusercontent.com/PauloCereal/RET-Engenharia/main/public/inspecao.jpg";
                    }}
                  />
                </div>
                
                <div className="text-center">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
                    RET <span className="text-blue-600">Engenharia</span>
                  </h2>
                  <p className="mt-4 text-slate-500 max-w-2xl text-lg mx-auto">
                    Especialistas em laudos técnicos, inspeções de segurança e soluções de engenharia de alta precisão.
                  </p>
                  <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-8 rounded-full shadow-lg shadow-blue-500/40"></div>
                </div>
              </div>
            </section>

            {/* Seção de Cards de Serviços */}
            <section className="p-8 md:p-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Nossas Especialidades</span>
                  <h3 className="text-3xl font-black text-slate-900 mt-2">Soluções Completas</h3>
                </div>
                <Services onNavigate={setActiveService} />
              </div>
            </section>
          </div>
        ) : (
          <div className="p-8">
            <ContentArea activeId={activeService} />
          </div>
        )}
      </main>

      <WhatsAppButton />
    </div>
  );
}

export default App;
