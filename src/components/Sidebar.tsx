import React from 'react';

// Definimos o que a Sidebar espera receber
interface SidebarProps {
  onNavigate: (id: string) => void;
}

const menuItems = [
  {
    category: "Laudos Técnicos",
    items: [
      { name: "NR-12: Segurança em Máquinas", id: "nr-12" },
      { name: "PMOC: Ar Condicionado", id: "pmoc" },
      { name: "Rede GLP: Instalações de Gás", id: "rede-glp" },
      { name: "Laudo Cautelar", id: "laudo-cautelar" },
      { name: "Andaimes: Segurança", id: "andaimes" },
      { name: "NR-13: Vasos e Caldeiras", id: "nr-13" },
      { name: "Máquinas Pesadas", id: "maquinas-pesadas" },
      { name: "Perícia Judicial/Extrajudicial", id: "pericia" },
      { name: "Playground e Brinquedos", id: "playground" },
      { name: "Veicular: Reclassificação", id: "veicular" },
      { name: "Sistemas de Exaustão", id: "exaustao" },
      { name: "NR-11: Movimentação de Carga", id: "nr-11" }
    ]
  },
  {
    category: "Projetos",
    items: [
      { name: "Climatização (HVAC)", id: "climatizacao" },
      { name: "Linha de Vida", id: "linha-de-vida" },
      { name: "Projetos Mecânicos", id: "projetos-mecanicos" },
      { name: "PPCI", id: "ppci" }
    ]
  },
  {
    category: "Consultoria e Treinamentos",
    items: [
      { name: "Viabilidade Técnica", id: "viabilidade" },
      { name: "Treinamentos NR-12", id: "treinamentos-nr12" }
    ]
  }
];

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="w-[320px] h-screen bg-[#f8faff] p-8 overflow-y-auto border-r border-[#eef2f6] shadow-sm font-sans flex-shrink-0">
      {/* Clique no Logo volta para a Home */}
      <div 
        onClick={() => onNavigate('home')}
        className="cursor-pointer group"
      >
        <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#2563eb] rounded-[10px] mb-6 shadow-md group-hover:bg-blue-700 transition-colors">
          <span className="text-white font-bold text-xl">RE</span>
        </div>
        <h2 className="text-[#0f172a] text-[22px] font-bold mb-8 border-b border-[#eef2f6] pb-4">
          RET Engenharia
        </h2>
      </div>
      
      {menuItems.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-[#0f172a] text-xs font-bold uppercase tracking-widest mb-4 opacity-70">
            {section.category}
          </h3>
          <ul className="space-y-3">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className="w-full text-left text-[#475569] text-[16px] leading-relaxed block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-white hover:text-[#2563eb] hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-[#eef2f6]"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
