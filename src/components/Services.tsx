import React from 'react';
import { Building2, ClipboardCheck, Hammer, LineChart, Shield, Users, Wind, Flame, HardHat, Gauge, Recycle, PlayCircle, Car, Fan, Truck, FileText } from 'lucide-react';

// 1. Adicionamos a interface para receber a função de navegar
interface ServicesProps {
  onNavigate: (id: string) => void;
}

const services = [
  { icon: Shield, title: 'NR-12: Segurança em Máquinas', description: 'Laudos de conformidade técnica e análise de risco detalhada.', id: 'nr-12' },
  { icon: Wind, title: 'PMOC: Ar Condicionado', description: 'Plano de Manutenção, Operação e Controle para qualidade do ar.', id: 'pmoc' },
  { icon: Flame, title: 'Rede GLP: Instalações de Gás', description: 'Testes de estanqueidade e inspeção técnica em redes de gás.', id: 'rede-glp' },
  { icon: Gauge, title: 'NR-13: Vasos e Caldeiras', description: 'Inspeção de segurança em vasos de pressão e caldeiras.', id: 'nr-13' },
  // ... adicione os outros IDs seguindo o mesmo padrão dos arquivos .html antigos (sem o .html)
  { icon: HardHat, title: 'Andaimes: Segurança', description: 'Inspeção e laudo de montagem conforme NR-18.', id: 'andaimes' },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">Soluções Completas em Engenharia</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              /* 2. Trocamos a tag <a> por uma <button> */
              <button 
                key={index}
                onClick={() => onNavigate(service.id)}
                className="block text-left group h-full focus:outline-none"
              >
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 h-full flex flex-col">
                  <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
