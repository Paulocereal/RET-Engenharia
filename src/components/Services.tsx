interface ServicesProps {
  onNavigate: (id: string) => void;
}

interface ServiceItem {
  img: string;
  alt: string;
  title: string;
  text: string;
  target: string;
}

const services: ServiceItem[] = [
  {
    img: '/IM 1.jpg', // trocar por /servico-1.jpg quando subir
    alt: 'Projeto de Modulação de Formas de Alumínio',
    title: 'Projeto de Modulação de Formas de Alumínio',
    text: 'Projetos de alta precisão para estruturas e formas de alumínio, garantindo desempenho, segurança e racionalização de materiais.',
    target: 'modulacao',
  },
  {
    img: '/IM 2.jpg', // trocar por /servico-2.jpg
    alt: 'Sistemas de Segurança e Linha de Vida',
    title: 'Sistemas de Segurança e Linha de Vida',
    text: 'Sistemas elétricos de alta performance, focados na segurança, continuidade operacional e conformidade com normas técnicas.',
    target: 'seguranca',
  },
  {
    img: '/IM 3.jpg', // trocar por /servico-3.jpg
    alt: 'Projeto de Estrutura Metálica',
    title: 'Projeto de Estrutura Metálica',
    text: 'Soluções de proteção contra incêndio e evacuação, integradas ao projeto estrutural para máxima segurança.',
    target: 'mecanicos',
  },
  {
    img: '/inspecao.jpg', // trocar por /servico-4.jpg
    alt: 'Projetos Mecânicos',
    title: 'Projetos Mecânicos',
    text: 'Análise de estruturas e sistemas mecânicos para garantir eficiência, durabilidade e redução de falhas.',
    target: 'eletrica-hidraulica',
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-800 text-center">
        Nossos Serviços
      </h2>
      <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <article
            key={index}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
          >
            <div className="h-48 overflow-hidden bg-slate-100">
              <img
                src={service.img}
                alt={service.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-base font-bold text-slate-800 leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1">
                {service.text}
              </p>
              <button
                onClick={() => onNavigate(service.target)}
                className="mt-6 self-start px-5 py-2.5 rounded-full border-2 border-blue-600 text-blue-600 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors"
              >
                Saber Mais
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
