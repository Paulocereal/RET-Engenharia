import React from 'react';
import { 
  Home, Building2, Shield, Wind, Flame, ClipboardCheck, 
  HardHat, Gauge, Hammer, FileText, PlayCircle, Car, 
  Fan, Truck, Recycle, LineChart, Users 
} from 'lucide-react';

interface SidebarProps {
  onNavigate: (id: string) => void;
}

// Lista completa com os 16 serviços + Início
const menuItems = [
  { id: 'home', name: 'Início', icon: Home },
  { id: 'projetos-estruturais', name: 'Estruturas', icon: Building2 },
  { id: 'nr-12', name: 'NR-12', icon: Shield },
  { id: 'pmoc', name: 'PMOC', icon: Wind },
  { id: 'rede-glp', name: 'Gás GLP', icon: Flame },
  { id: 'laudo-cautelar', name: 'Cautelar', icon: ClipboardCheck },
  { id: 'andaimes', name: 'Andaimes', icon: HardHat },
  { id: 'nr-13', name: 'NR-13', icon: Gauge },
  { id: 'maquinas-pesadas', name: 'Pesados', icon: Hammer },
  { id: 'pericia', name: 'Perícia', icon: FileText },
  { id: 'playground', name: 'Kids', icon: PlayCircle },
  { id: 'veicular', name: 'Veicular', icon: Car },
  { id: 'exaustao', name: 'Exaustão', icon: Fan },
  { id: 'nr-11', name: 'NR-11', icon: Truck },
  { id: 'climatizacao', name: 'HVAC', icon: Recycle },
  { id: 'linha-de-vida', name: 'L. Vida', icon: LineChart },
  { id: 'ppci', name: 'PPCI', icon: Users },
];

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="w-72 h-screen bg-slate-900 text-white p-4 flex-shrink-0 border-r border-slate-800 flex flex-col">
      <div className="mb-6 px-2">
        <h2 className="text-xl font-bold text-blue-400 tracking-tight">RET ENGENHARIA</h2>
        <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mt-1">Menu Técnico</p>
      </div>

      {/* Área com Scroll caso a tela do usuário seja pequena */}
      <nav className="grid grid-cols-2 gap-2 overflow-y-auto pr-2 custom-scrollbar">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center aspect-square p-2 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 group"
            >
              <Icon className="mb-1 text-blue-400 group-hover:text-white transition-colors" size={20} />
              <span className="text-[9px] font-bold uppercase text-center group-hover:text-white leading-tight">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 text-[9px] text-slate-600 text-center">
        v2.0 • 2026
      </div>
    </aside>
  );
}
