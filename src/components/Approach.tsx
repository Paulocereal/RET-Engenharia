export default function Approach() {
  return (
    <section id="approach" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-800 text-center">
          Formas de Alumínio
        </h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">
          <div className="min-h-[320px] lg:min-h-[420px] bg-slate-100">
            <img
              src="/inspecao1.jpg"
              alt="Formas de Alumínio em obra"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative flex items-center bg-slate-900">
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              src="/video1.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-[#0f172a]/70"></div>

            <div className="relative z-10 p-10 lg:p-14 space-y-6">
              <p className="text-slate-200 leading-relaxed">
                Aplicamos metodologias avançadas de gestão e engenharia para
                garantir precisão em cada etapa do projeto.
              </p>
              <p className="text-slate-200 leading-relaxed">
                Comprometemo-nos com o cumprimento célere de cronogramas,
                mantendo a qualidade técnica e a segurança como prioridades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
