export default function Approach() {
  return (
    <section id="approach" className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

        {/* 🖼️ IMAGEM — formas.jpg */}
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-800 border border-white/15">
          <img
            src="/formas.jpg"
            alt="Formas de Alumínio em obra"
            className="w-full h-full object-cover min-h-[320px] lg:min-h-[520px]"
          />
        </div>

        {/* 🪟 CARD VIDRO — mesmo estilo da Expertise */}
        <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-8 lg:p-12 shadow-2xl flex flex-col justify-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-lg">
            Formas de Alumínio
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full shadow-lg shadow-blue-600/40"></div>

          <div className="mt-8 space-y-6">
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              Aplicamos metodologias avançadas de gestão e engenharia para
              garantir precisão em cada etapa do projeto.
            </p>

            <hr className="border-white/10" />

            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              Comprometemo-nos com o cumprimento célere de cronogramas,
              mantendo a qualidade técnica e a segurança como prioridades.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
