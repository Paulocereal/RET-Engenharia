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
    <aside className="w-64 h-screen bg-slate-900 text-white p-5 overflow-y-auto border-r border-slate-700">
      <h2 className="text-xl font-bold mb-8 border-b border-slate-700 pb-2">RET Engenharia</h2>
      
      {menuItems.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            {section.category}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors block py-1">
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