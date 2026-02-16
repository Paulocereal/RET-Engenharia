import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';

function App() {
  // Estado para saber qual serviço mostrar. 'home' é o padrão.
  const [activeService, setActiveService] = useState('home');

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Passamos a função setActiveService para a Sidebar */}
      <Sidebar onNavigate={setActiveService} />
      
      <main className="flex-1 overflow-y-auto">
        {activeService === 'home' ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-10">
             <h1 className="text-5xl font-bold text-slate-900 mb-4">RET Engenharia</h1>
             <p className="text-xl text-slate-500 max-w-lg">
               Selecione uma categoria ao lado para explorar nossas soluções em Engenharia Mecânica e Segurança do Trabalho.
             </p>
          </div>
        ) : (
          <ContentArea activeId={activeService} />
        )}
      </main>
    </div>
  );
}

export default App;
