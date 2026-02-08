const menuItems = [
  {
    category: "Laudos Técnicos",
    items: [
      { name: "NR-12: Segurança em Máquinas", href: "/nr-12.html" },
      { name: "PMOC: Ar Condicionado", href: "/pmoc.html" },
      { name: "Rede GLP: Instalações de Gás", href: "/rede-glp.html" },
      { name: "Laudo Cautelar", href: "/laudo-cautelar.html" },
      { name: "Andaimes: Segurança", href: "/andaimes.html" },
      { name: "NR-13: Vasos e Caldeiras", href: "/nr-13.html" },
      { name: "Máquinas Pesadas", href: "/maquinas-pesadas.html" },
      { name: "Perícia Judicial/Extrajudicial", href: "/pericia.html" },
      { name: "Playground e Brinquedos", href: "/playground.html" },
      { name: "Veicular: Reclassificação", href: "/veicular.html" },
      { name: "Sistemas de Exaustão", href: "/exaustao.html" },
      { name: "NR-11: Movimentação de Carga", href: "/nr-11.html" }
    ]
  },
  {
    category: "Projetos",
    items: [
      { name: "Climatização (HVAC)", href: "/climatizacao.html" },
      { name: "Linha de Vida", href: "/linha-de-vida.html" },
      { name: "Projetos Mecânicos", href: "/projetos-mecanicos.html" },
      { name: "PPCI", href: "/ppci.html" }
    ]
  },
  {
    category: "Consultoria e Treinamentos",
    items: [
      { name: "Viabilidade Técnica", href: "/viabilidade.html" },
      { name: "Treinamentos NR-12", href: "/treinamentos-nr12.html" }
    ]
  }
];

export function Sidebar() {
  return (
    <aside className="w-[320px] h-screen bg-[#f8faff] p-8 overflow-y-auto border-r border-[#eef2f6] shadow-sm font-sans">
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
                  href={item.href} 
                  className="text-[#475569] text-[16px] leading-relaxed block py-2 px-3 rounded-lg transition-all duration-200 hover:bg-white hover:text-[#2563eb] hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-[#eef2f6]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
