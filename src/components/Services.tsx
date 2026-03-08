import React from 'react';
import { Layers, ShieldAlert, Building2, Zap, Settings } from 'lucide-react';

interface ServicesProps {
  onNavigate: (id: string) => void;
}

const services = [
  { 
    icon: Layers, 
    title: 'Projetos de Modulação de Formas', 
    description: 'Otimização e detalhamento de sistemas de fôrmas para construção civil.', 
    id: 'modulacao' 
  },
  { 
    icon: ShieldAlert, 
    title: 'Projeto de Sistemas de Segurança', 
    description: 'Laudos de conformidade, análise de risco e proteção industrial.', 
    id: 'seguranca' 
  },
  { 
    icon: Building2, 
    title: 'Projetos Estruturais de Concreto Armado', 
    description: 'Cálculo e dimensionamento de estruturas com foco em estabilidade e segurança.', 
    id: 'estruturais' 
  },
  { 
    icon: Zap, 
    title: 'Projetos de Instalações Elétricas e Hidráulicas', 
    description: 'Projetos integrados de infraestrutura para residências e indústrias.', 
    id: 'eletrica-hidraulica' 
  },
  { 
    icon: Settings, 
    title: 'Projetos Mecânicos em Geral (Estruturas Metálicas)', 
    description: 'Desenvolvimento e inspeção de estruturas metálicas e sistemas mecânicos.', 
    id: 'mecanicos' 
  },
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
                  <div className="mt-auto pt-6 text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                    SAIBA MAIS →
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
