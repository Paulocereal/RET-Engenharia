{activeService === 'home' ? (
  <>
    {/* Hero Section Otimizada */}
    <div className="relative w-full min-h-[65vh] flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* Sutil detalhe de grade corrigido */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      {/* Container da Logo */}
      <div className="relative z-10 flex flex-col items-center p-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <img 
          src="logo-ret.png"  /* Removi a / e ajustei para .png conforme seu download */
          alt="RET Engenharia" 
          className="max-w-xl md:max-w-2xl w-full h-auto drop-shadow-2xl"
          onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x200?text=Erro+no+Caminho+da+Imagem"; }}
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
    </div>
    
    <div className="h-10 bg-gradient-to-b from-white to-slate-50"></div>
    
    <div className="bg-slate-50">
      <Services onNavigate={setActiveService} />
    </div>
  </>
) : (
  <ContentArea activeId={activeService} />
)}
