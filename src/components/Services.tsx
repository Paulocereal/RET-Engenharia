  import { Building2, ClipboardCheck, Hammer, LineChart, Shield, Users, Wind, Flame, HardHat, Gauge, Recycle, PlayCircle, Car, Fan, Truck, FileText } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Projetos Estruturais',
    description: 'Desenvolvimento completo de projetos estruturais para edificações residenciais, comerciais e industriais.',
    href: '/modelo-servico.html'
  },
  {
    icon: Shield,
    title: 'NR-12: Segurança em Máquinas',
    description: 'Laudos de conformidade técnica e análise de risco detalhada para segurança operacional.',
    href: '/nr-12.html'
  },
  {
    icon: Wind,
    title: 'PMOC: Ar Condicionado',
    description: 'Plano de Manutenção, Operação e Controle para garantir a qualidade do ar e eficiência.',
    href: '/pmoc.html'
  },
  {
    icon: Flame,
    title: 'Rede GLP: Instalações de Gás',
    description: 'Testes de estanqueidade e inspeção técnica em redes de gás prediais e industriais.',
    href: '/rede-glp.html'
  },
  {
    icon: ClipboardCheck,
    title: 'Laudo Cautelar',
    description: 'Perícia preventiva em imóveis vizinhos para garantir segurança jurídica em obras.',
    href: '/laudo-cautelar.html'
  },
  {
    icon: HardHat,
    title: 'Andaimes: Segurança',
    description: 'Inspeção e laudo de montagem de andaimes conforme NR-18 e NR-35.',
    href: '/andaimes.html'
  },
  {
    icon: Gauge,
    title: 'NR-13: Vasos e Caldeiras',
    description: 'Inspeção de segurança em vasos de pressão, caldeiras e tubulações.',
    href: '/nr-13.html'
  },
  {
    icon: Hammer,
    title: 'Máquinas Pesadas',
    description: 'Laudos de inspeção para escavadeiras, retroescavadeiras e máquinas de grande porte.',
    href: '/maquinas-pesadas.html'
  },
  {
    icon: FileText,
    title: 'Perícia Judicial/Extrajudicial',
    description: 'Assistência técnica pericial e elaboração de laudos para processos judiciais.',
    href: '/pericia.html'
  },
  {
    icon: PlayCircle,
    title: 'Playground e Brinquedos',
    description: 'Inspeção técnica de segurança em parques infantis conforme normas ABNT.',
    href: '/playground.html'
  },
  {
    icon: Car,
    title: 'Veicular: Reclassificação',
    description: 'Laudos para alteração de características e reclassificação de monta veicular.',
    href: '/veicular.html'
  },
  {
    icon: Fan,
    title: 'Sistemas de Exaustão',
    description: 'Projeto e inspeção de sistemas de exaustão mecânica para cozinhas e indústrias.',
    href: '/exaustao.html'
  },
  {
    icon: Truck,
    title: 'NR-11: Movimentação de Carga',
    description: 'Inspeção em empilhadeiras, pontes rolantes e elevadores de carga.',
    href: '/nr-11.html'
  },
  {
    icon: Recycle,
    title: 'Climatização (HVAC)',
    description: 'Projetos completos de sistemas de ventilação e ar condicionado central.',
    href: '/climatizacao.html'
  },
  {
    icon: LineChart,
    title: 'Linha de Vida',
    description: 'Projeto e instalação de sistemas de proteção contra quedas em altura.',
    href: '/linha-de-vida.html'
  },
  {
    icon: Users,
    title: 'PPCI',
    description: 'Plano de Prevenção e Proteção Contra Incêndio e pânico.',
    href: '/ppci.html'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Soluções Completas em Engenharia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para atender todas as suas necessidades em projetos e laudos técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a 
                href={service.href} 
                key={index} 
                className="block no-underline group h-full"
              >
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 h-full flex flex-col uppercase-none">
                  <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
