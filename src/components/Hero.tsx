interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative w-full min-h-[560px] lg:min-h-[640px] flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-lg max-w-4xl leading-none">
          Engenharia de Alto Desempenho
        </h1>

        <div className="w-24 h-1.5 bg-blue-600 mt-6 rounded-full"></div>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-200 leading-relaxed">
          Soluções técnicas de precisão para estruturas metálicas, sistemas
          elétricos e projetos mecânicos, garantindo segurança, eficiência e
          cumprimento de prazos.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contato')}
            className="px-8 py-3.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/30"
          >
            Solicitar Orçamento
          </button>

          <button
            onClick={() => onNavigate('galeria')}
            className="px-8 py-3.5 rounded-full border-2 border-white text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors"
          >
            Nossos Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
