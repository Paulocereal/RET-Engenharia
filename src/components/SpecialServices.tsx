interface SpecialItem {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const specials: SpecialItem[] = [
  {
    img: '/IM 1.jpg',
    alt: 'Laudo e ART para Andaimes',
    title: 'Laudo e ART para Andaimes',
    text: 'Segurança, conformidade com as normas vigentes e documentação técnica completa para estruturas provisórias.',
  },
  {
    img: '/IM 2.jpg',
    alt: 'Projeto de Drenagem Pluvial',
    title: 'Projeto de Drenagem Pluvial',
    text: 'Simulações e análises avançadas para conduzir e escoar águas da chuva com eficiência e segurança.',
  },
  {
    img: '/IM 3.jpg',
    alt: 'Projeto de Drenagem Pluvial',
    title: 'Projeto de Drenagem Pluvial',
    text: 'Soluções completas para conduzir e escoar águas pluviais, evitando alagamentos e danos estruturais.',
  },
  {
    img: '/inspecao.jpg',
    alt: 'Projeto Elétrico e Hidrossanitário',
    title: 'Projeto Elétrico e Hidrossanitário',
    text: 'Soluções elétricas e hidrossanitárias integradas, garantindo conforto, segurança e eficiência operacional.',
  },
  {
    img: '/inspecao1.jpg',
    alt: 'Projeto de Combate a Incêndio',
    title: 'Projeto de Combate a Incêndio',
    text: 'Proteção integral e análise de risco para ambientes industriais e comerciais, em conformidade com normas técnicas.',
  },
  {
    img: '/IM 1.jpg',
    alt: 'Engenharia Estrutural (Concreto Armado)',
    title: 'Engenharia Estrutural (Concreto Armado)',
    text: 'Execução técnica de obras civis com rigor e precisão, garantindo durabilidade e segurança estrutural.',
  },
];

export default function SpecialServices() {
  return (
    <section id="special-services" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white text-center drop-shadow-lg">
          Serviços Especializados
        </h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((item, index) => (
            <article
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 hover:border-blue-400/60 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden bg-slate-800">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
