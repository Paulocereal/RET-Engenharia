interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[720px] flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">
        {/* TÍTULO — maior e em IBM Plex Sans */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-white drop-shadow-2xl max-w-5xl leading-[0.95]">
          Engenharia de Alto Desempenho
        </h1>

        <div className="w-28 h-2 bg-blue-600 mt-8 rounded-full shadow-lg shadow-blue-600/40"></div>

        {/* PARÁGRAFO — maior */}
        <p className="mt-8 max-w-3xl text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed font-light">
          Soluções técnicas de precisão para estruturas metálicas, sistemas
          elétricos e projetos mecânicos, garantindo segurança, eficiência e
          cumprimento de prazos.
        </p>

        {/* BOTÕES — maiores */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={() => onNavigate('contato')}
            className="px-10 py-4 rounded-full bg-blue-600 text-white text-sm md:text-base font-heading font-semibold uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-900/50"
          >
            Solicitar Orçamento
          </button>

          <button
            onClick={() => onNavigate('galeria')}
            className="px-10 py-4 rounded-full border-2 border-white text-white text-sm md:text-base font-heading font-semibold uppercase tracking-widest hover:bg-white hover:text-slate-900 hover:scale-105 transition-all"
          >
            Nossos Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
