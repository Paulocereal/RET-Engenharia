{activeService === 'home' ? (
  <>
    {/* Hero Section - RET Engenharia */}
    <div className="relative w-full min-h-[65vh] flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* Sutil detalhe de grade ao fundo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      {/* Container da Logo com animação suave */}
      <div className="relative z-10 flex flex-col items-center p-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <img 
          src="logo-ret.png"  /* Nome exato conforme seu print do GitHub */
          alt="RET Engenharia" 
          className="max-w-xl md:max-w-2xl w-full h-auto drop-shadow-2xl"
          /* Caso o caminho falhe, esse código tenta um caminho alternativo automaticamente */
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.indexOf('./logo-ret.png') === -1) {
              target.src = './inspecao.jpg';
            }
          }}
        />
        
        {/* Texto de Apoio */}
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
    </div>
    
    {/* Transição para a área de serviços */}
    <div className="h-10 bg-gradient-to-b from-white to-slate-50"></div>
    
    <div className="bg-slate-50 pb-20">
      <Services onNavigate={setActiveService} />
    </div>
  </>
) : (
  <ContentArea activeId={activeService} />
)}
