import React from 'react';

interface ContentAreaProps {
  activeId: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeId }) => {
  const servicesData: Record<string, any> = {
    'estruturas': {
      title: "Projetos Estruturais",
      description: "Cálculo e detalhamento de estruturas em concreto armado, aço e alvenaria estrutural, garantindo a estabilidade e segurança da sua edificação.",
      items: ["Projetos Residenciais e Comerciais", "Reforço Estrutural", "Dimensionamento de Fundações", "ART de Projeto"]
    },
    'nr-12': {
      title: "NR-12: Segurança em Máquinas",
      description: "Laudos de conformidade e análise de risco para máquinas e equipamentos, visando a proteção dos trabalhadores e o atendimento às normas do Ministério do Trabalho.",
      items: ["Inventário de Máquinas", "Análise de Risco (HRN)", "Laudo de Validação Técnica", "Plano de Adequação"]
    },
    'pmoc': {
      title: "PMOC: Ar Condicionado",
      description: "Plano de Manutenção, Operação e Controle conforme a Lei 13.589/18, garantindo a qualidade do ar e a eficiência dos sistemas de climatização.",
      items: ["Responsabilidade Técnica por Engenheiro", "Cronograma de Manutenção", "Laudo de Qualidade do Ar", "Redução de Custos Energéticos"]
    },
    'gas-glp': {
      title: "Rede GLP: Instalações de Gás",
      description: "Projetos e inspeções em centrais e redes de distribuição de Gás Liquefeito de Petróleo, assegurando a estanqueidade do sistema.",
      items: ["Teste de Estanqueidade com Laudo", "Projeto de Central de Gás", "Manutenção Preventiva", "ART de Instalação"]
    },
    'cautelar': {
      title: "Laudo Cautelar de Vizinhança",
      description: "Registro detalhado do estado de conservação de imóveis vizinhos antes do início de obras, prevenindo litígios e garantindo segurança jurídica.",
      items: ["Vistoria Fotográfica", "Mapeamento de Patologias", "Relatório Técnico Consolidado", "Segurança em Obras"]
    },
    'andaimes': {
      title: "Andaimes: Segurança",
      description: "Inspeção e emissão de laudo técnico para montagem e utilização de andaimes, em total conformidade com a NR-18 e NR-35.",
      items: ["Verificação de Estabilidade", "Cálculo de Carga", "Treinamento de Uso", "Laudo de Montagem"]
    },
    'nr-13': {
      title: "NR-13: Vasos e Caldeiras",
      description: "Inspeção periódica de segurança em vasos de pressão, caldeiras e tubulações para prevenir acidentes graves.",
      items: ["Exame Ultrassônico", "Teste Hidrostático", "Abertura de Prontuário", "Relatório de Inspeção"]
    },
    'pesados': {
      title: "Máquinas Pesadas",
      description: "Inspeção técnica e laudos de integridade para máquinas de grande porte, como escavadeiras, guindastes e retroescavadeiras.",
      items: ["Checklist de Segurança", "Verificação Hidráulica", "Laudo de Estabilidade", "Plano de Manutenção"]
    },
    'pericia': {
      title: "Perícia Judicial e Extrajudicial",
      description: "Atuação como perito ou assistente técnico em processos que envolvam engenharia mecânica e patologias construtivas.",
      items: ["Laudos Periciais", "Quesitos Técnicos", "Assistência em Processos", "Avaliação de Danos"]
    },
    'kids': {
      title: "Playground e Brinquedos",
      description: "Inspeção de segurança em parques infantis de condomínios e escolas, seguindo as normas da ABNT para evitar acidentes com crianças.",
      items: ["Inspeção de Integridade", "Avaliação de Amortecimento", "Relatório de Conformidade", "Certificação de Segurança"]
    },
    'veicular': {
      title: "Veicular: Reclassificação",
      description: "Laudos técnicos para reclassificação de monta veicular e alteração de características em veículos pesados e especiais.",
      items: ["Laudo de Recuperabilidade", "Alteração de Combustível/Cor", "Inclusão de Eixos", "Regularização no DETRAN"]
    },
    'exaustao': {
      title: "Sistemas de Exaustão",
      description: "Projeto e inspeção de sistemas de exaustão para cozinhas industriais e ambientes fabris, eliminando odores e calor excessivo.",
      items: ["Cálculo de Vazão", "Dimensionamento de Dutos", "Controle de Poluentes", "ART de Projeto"]
    },
    'nr-11': {
      title: "NR-11: Movimentação de Carga",
      description: "Inspeção em equipamentos de levantamento e transporte, como empilhadeiras, pontes rolantes e elevadores.",
      items: ["Teste de Carga", "Certificação de Cabos de Aço", "Checklist de Operação", "Laudo de Segurança"]
    },
    'hvac': {
      title: "Climatização (HVAC)",
      description: "Soluções completas para climatização de grandes áreas, com foco em conforto térmico e eficiência operacional.",
      items: ["Projetos de Ar Central", "Ventilação Forçada", "Eficiência Térmica", "Cálculo de Carga Térmica"]
    },
    'l-vida': {
      title: "Linha de Vida",
      description: "Projeto e instalação de pontos de ancoragem e linhas de vida para trabalho em altura, conforme NR-35.",
      items: ["Projeto de Ancoragem", "Teste de Tração", "Dimensionamento de Materiais", "ART de Instalação"]
    },
    'ppci': {
      title: "PPCI",
      description: "Plano de Prevenção e Proteção Contra Incêndio, essencial para obtenção de alvarás e licenciamento junto ao Corpo de Bombeiros.",
      items: ["Cálculo de Extintores", "Sinalização de Emergência", "Hidrantes e Iluminação", "Aprovação Técnica"]
    }
  };

  const content = servicesData[activeId];

  if (!content) return null;

  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in duration-500">
      <button 
        onClick={() => window.location.reload()} 
        className="text-blue-600 font-semibold mb-4 hover:underline"
      >
        ← Voltar ao Início
      </button>
      <h1 className="text-4xl font-bold text-slate-900 mb-6 border-b-4 border-blue-600 inline-block pb-2">
        {content.title}
      </h1>
      <p className="text-lg text-slate-600 leading-relaxed mb-8">{content.description}</p>
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-10">
        <h3 className="text-xl font-bold text-blue-600 mb-4">Serviços Inclusos:</h3>
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
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform inline-block">
          Solicitar Orçamento no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContentArea;
