import { Building2, ClipboardCheck, Hammer, LineChart, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Projetos Estruturais',
    description: 'Desenvolvimento completo de projetos estruturais para edificações residenciais, comerciais e industriais.',
  },
  {
    icon: ClipboardCheck,
    title: 'Projetos Arquitetônicos',
    description: 'Soluções arquitetônicas criativas e funcionais que atendem às suas necessidades e expectativas.',
  },
  {
    icon: Hammer,
    title: 'Acompanhamento de Obras',
    description: 'Gestão e fiscalização técnica de obras para garantir qualidade e cumprimento de prazos.',
  },
  {
    icon: Shield,
    title: 'Laudos Técnicos',
    description: 'Elaboração de laudos técnicos, perícias e avaliações estruturais com rigor e precisão.',
  },
  {
    icon: LineChart,
    title: 'Consultoria Técnica',
    description: 'Assessoria especializada em todas as fases do seu projeto, da concepção à execução.',
  },
  {
    icon: Users,
    title: 'Gestão de Projetos',
    description: 'Coordenação e gerenciamento de equipes multidisciplinares para projetos complexos.',
  },
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
            Oferecemos uma gama completa de serviços para atender todas as suas necessidades em projetos de engenharia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
