import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import Services from './components/Services'; // Importe os seus cards

function App() {
  const [activeService, setActiveService] = useState('home');

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar onNavigate={setActiveService} />
      
      <main className="flex-1 overflow-y-auto">
        {activeService === 'home' ? (
          <>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-10 bg-white">
               <h1 className="text-5xl font-bold text-slate-900 mb-4">RET Engenharia</h1>
               <p className="text-xl text-slate-500 max-w-lg">
                 Selecione uma categoria ao lado ou explore nossos serviços abaixo.
               </p>
            </div>
            
            {/* Cards de Serviços - Passando a função de navegar aqui também! */}
            <Services onNavigate={setActiveService} />
          </>
        ) : (
          <ContentArea activeId={activeService} />
        )}
      </main>
    </div>
  );
}

export default App;
