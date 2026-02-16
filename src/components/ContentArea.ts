import React from 'react';

interface ContentAreaProps {
  activeId: string;
}

export const ContentArea: React.FC<ContentAreaProps> = ({ activeId }) => {
  // Objeto que guarda todos os seus textos técnicos (Recuperei a NR-12 aqui!)
  const servicesData: Record<string, any> = {
    'nr-12': {
      title: "NR-12: Segurança em Máquinas",
      description: "A Norma Regulamentadora 12 define referências técnicas, princípios fundamentais e medidas de proteção para garantir a saúde e a integridade física dos trabalhadores que interagem com máquinas e equipamentos.",
      image: "/inspecao.jpg",
      items: [
        "Inventário Completo de máquinas",
        "Análise de Risco (HRN)",
        "Laudo de Validação com ART",
        "Plano de Adequação técnica"
      ]
    },
    'pmoc': {
      title: "PMOC: Ar Condicionado",
      description: "Plano de Manutenção, Operação e Controle exigido pela Lei 13.589/18 para garantir a qualidade do ar em ambientes climatizados.",
      image: "/pmoc.jpg", // Lembre-se de subir esta foto depois
      items: [
        "Responsabilidade Técnica (ART)",
        "Cronograma de manutenção preventiva",
        "Redução de consumo de energia",
        "Conformidade com a ANVISA"
      ]
    }
    // Você poderá adicionar "rede-glp", "nr-13", etc., aqui embaixo!
  };

  const content = servicesData[activeId];

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-slate-400">
        <p className="text-xl">Selecione um serviço no menu lateral para visualizar os detalhes.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold text-slate-900 mb-6 border-b-4 border-blue-600 inline-block pb-2">
        {content.title}
      </h1>
      
      <p className="text-lg text-slate-600 leading-relaxed mb-8">
        {content.description}
      </p>

      <div className="mb-10 text-center">
        <img 
          src={content.image} 
          alt={content.title} 
          className="rounded-2xl shadow-2xl mx-auto max-h-[450px] border border-slate-200"
        />
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm mb-10">
        <h3 className="text-xl font-bold text-blue-600 mb-4">Nossa Solução Especializada:</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.items.map((item: string, index: number) => (
            <li key={index} className="flex items-center text-slate-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          className="inline-block bg-[#25d366] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
        >
          Falar com Engenheiro no WhatsApp
        </a>
      </div>
    </div>
  );
};
