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
    img: '/image4.jpg',   // ✅ .jpg
    alt: 'Projeto de Modulação de Formas de Alumínio',
    title: 'Projeto de Modulação de Formas de Alumínio',
    text: 'Projetos de alta precisão para estruturas e formas de alumínio, garantindo desempenho, segurança e racionalização de materiais.',
    target: 'modulacao',
  },
  {
    img: '/image3.jpg',   // ✅ .jpg
    alt: 'Sistemas de Segurança e Linha de Vida',
    title: 'Sistemas de Segurança e Linha de Vida',
    text: 'Sistemas elétricos de alta performance, focados na segurança, continuidade operacional e conformidade com normas técnicas.',
    target: 'seguranca',
  },
  {
    img: '/image2.jpg',   // ✅ .jpg
    alt: 'Projeto de Estrutura Metálica',
    title: 'Projeto de Estrutura Metálica',
    text: 'Soluções de proteção contra incêndio e evacuação, integradas ao projeto estrutural para máxima segurança.',
    target: 'mecanicos',
  },
  {
    img: '/image1.jpg',   // ✅ .jpg
    alt: 'Projetos Mecânicos',
    title: 'Projetos Mecânicos',
    text: 'Análise de estruturas e sistemas mecânicos para garantir eficiência, durabilidade e redução de falhas.',
    target: 'eletrica-hidraulica',
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white text-center drop-shadow-lg">
        Nossos Serviços
      </h2>
      <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-600/40"></div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <article
            key={index}
            className="group flex flex-col bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 hover:border-blue-400/60 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="h-48 overflow-hidden bg-slate-800">
              <img
                src={service.img}
                alt={service.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-base font-heading font-semibold text-white leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-1">
                {service.text}
              </p>
              <button
                onClick={() => onNavigate(service.target)}
                className="mt-6 self-start px-5 py-2.5 rounded-full border-2 border-blue-500 text-blue-300 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
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
