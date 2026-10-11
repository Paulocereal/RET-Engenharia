interface Block {
  title: string;
  text: string;
}

const blocks: Block[] = [
  {
    title: 'Engenharia Estrutural Metálica',
    text: 'Desenvolvimento de soluções estruturais de alto desempenho para galpões, coberturas e estruturas especiais.',
  },
  {
    title: 'Galpões',
    text: 'Projetos elétricos integrados para garantir eficiência energética, segurança operacional e manutenção simplificada.',
  },
  {
    title: 'Telhados (Coberturas)',
    text: 'Desenvolvimento de protocolos de segurança e sistemas de proteção para trabalhos em altura e ambientes industriais.',
  },
  {
    title: 'Análise Mecânica (Elementos Finitos)',
    text: 'Modelagem e simulação avançada para otimização de estruturas, redução de esforços e aumento da vida útil dos sistemas.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-800 border border-white/15">
          <img
            src="/inspecao.jpg"
            alt="Engenharia estrutural metálica"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-8 lg:p-10 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white drop-shadow-lg">
            Expertise Técnica
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>

          <div className="mt-8 space-y-6">
            {blocks.map((block, index) => (
              <div key={index}>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {block.text}
                  </p>
                </div>
                {index < blocks.length - 1 && (
                  <hr className="border-white/10 mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
