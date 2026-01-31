import React from 'react';

const menuItems = [
  {
    category: "Laudos Técnicos",
    items: [
      "NR-12: Segurança em Máquinas",
      "PMOC: Ar Condicionado",
      "Rede GLP: Instalações de Gás",
      "Laudo Cautelar",
      "Andaimes: Segurança",
      "NR-13: Vasos e Caldeiras",
      "Máquinas Pesadas",
      "Perícia Judicial/Extrajudicial",
      "Playground e Brinquedos",
      "Veicular: Reclassificação",
      "Sistemas de Exaustão",
      "NR-11: Movimentação de Carga"
    ]
  },
  {
    category: "Projetos",
    items: ["Climatização (HVAC)", "Linha de Vida", "Projetos Mecânicos", "PPCI"]
  },
  {
    category: "Consultoria e Treinamentos",
    items: ["Viabilidade Técnica", "Treinamentos NR-12"]
  }
];

export function Sidebar() {
  return (
    <aside className="w-[320px] h-screen bg-[#f8faff] p-8 overflow-y-auto border-r border-[#eef2f6] shadow-sm font-sans">
      {/* Container do Logotipo/Nome com estilo do Icon Container */}
      <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#2563eb] rounded-[10px] mb-6 shadow-md">
        <span className="text-white font-bold text-xl">RE</span>
      </div>
      
      <h2 className="text-[#0f172a] text-[22px] font-bold mb-8 border-b border-[#eef2f6] pb-4">
        RET Engenharia
      </h2>
      
      {menuItems.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-[#0f172a] text-xs font-bold uppercase tracking-widest mb-4 opacity-70">
            {section.category}
          </h3>
          <ul className="space-y-3">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <a 
                  href="#" 
                  className="text-[#475569] text-[16px] leading-relaxed block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-white hover:text-[#2563eb] hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-[#eef2f6]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}