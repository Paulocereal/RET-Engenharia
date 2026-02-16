import React from 'react';
import { 
  Home, Shield, Wind, Flame, Gauge, HardHat, 
  Building2, ClipboardCheck, Hammer, FileText 
} from 'lucide-react';

interface SidebarProps {
  onNavigate: (id: string) => void;
}

const menuItems = [
  { id: 'home', name: 'Início', icon: Home },
  { id: 'nr-12', name: 'NR-12', icon: Shield },
  { id: 'pmoc', name: 'PMOC', icon: Wind },
  { id: 'rede-glp', name: 'Gás GLP', icon: Flame },
  { id: 'nr-13', name: 'NR-13', icon: Gauge },
  { id: 'andaimes', name: 'Andaimes', icon: HardHat },
];

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-4 flex-shrink-0 border-r border-slate-800">
      <div className="mb-8 px-2">
        <h2 className="text-xl font-bold text-blue-400 tracking-tight">RET ENGENHARIA</h2>
        <p className="text-xs text-slate-500 uppercase font-semibold">Menu de Navegação</p>
      </div>

      {/* Grid de Cards Quadrados na Lateral */}
      <nav className="grid grid-cols-2 gap-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center aspect-square p-2 rounded-xl bg-slate-800 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 group"
            >
              <Icon className="mb-2 text-slate-400 group-hover:text-white transition-colors" size={24} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-center group-hover:text-white">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Rodapé da Sidebar */}
      <div className="absolute bottom-6 left-6 text-[10px] text-slate-600">
        © 2026 RET Engenharia
      </div>
    </aside>
  );
}
