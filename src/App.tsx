<div className="relative z-10 flex flex-col items-center p-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
  <img 
    src="./inspecao.jpg" 
    alt="RET Engenharia" 
    className="max-w-xl md:max-w-2xl w-full h-auto drop-shadow-2xl"
    onError={(e) => {
      // Se falhar com ./ tenta sem o ponto, se falhar de novo usa o caminho absoluto do GitHub
      const target = e.currentTarget;
      if (target.src.includes('./')) {
        target.src = 'logo-ret.png';
      } else {
        target.src = 'https://raw.githubusercontent.com/PauloCereal/RET-Engenharia/main/public/logo-ret.png';
      }
    }}
  />
  
  <div className="mt-4 text-center">
    <h2 className="text-2xl md:text-4xl font-bold text-slate-800 tracking-tight">
      RET <span className="text-blue-600">Engenharia</span>
    </h2>
    <p className="text-slate-500 mt-2 font-medium uppercase tracking-[0.3em] text-sm md:text-base">
      Inovação e Segurança em Projetos
    </p>
    <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-lg shadow-blue-500/30"></div>
  </div>
</div>
