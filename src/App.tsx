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
      <aside className="fixed inset-y-0 left-0 w-64 bg-[#0f172a] text-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold tracking-tighter text-blue-400">RET ENGENHARIA</h1>
        </div>
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveService(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeService === item.id ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 ml-64 min-h-screen">
        {activeService === 'home' ? (
          <div className="animate-in fade-in duration-700">
            <section className="relative w-full py-16 px-8 flex flex-col items-center justify-center bg-white border-b border-slate-100">
              <img 
                src="./logo-ret.png" 
                alt="RET Engenharia" 
                className="max-w-xl w-full h-auto drop-shadow-2xl mb-8"
                onError={(e) => {
                  e.currentTarget.src = "https://raw.githubusercontent.com/PauloCereal/RET-Engenharia/main/public/logo-ret.png";
                }}
              />
              <div className="text-center">
                <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">RET Engenharia</h2>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
              </div>
            </section>
            <section className="p-8">
              <Services onNavigate={setActiveService} />
            </section>
          </div>
        ) : (
          <ContentArea activeId={activeService} />
        )}
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;
