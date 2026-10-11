interface SpecialItem {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const BASE = 'https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets';

const specials: SpecialItem[] = [
  {
    img: `${BASE}/Building%20construction/3D/building_construction_3d.png`,
    alt: 'Andaimes',
    title: 'Laudo e ART para Andaimes',
    text: 'Segurança, conformidade com as normas vigentes e documentação técnica completa para estruturas provisórias.',
  },
  {
    img: `${BASE}/Water%20wave/3D/water_wave_3d.png`,
    alt: 'Drenagem',
    title: 'Projeto de Drenagem Pluvial',
    text: 'Simulações e análises avançadas para conduzir e escoar águas da chuva com eficiência e segurança.',
  },
  {
    img: `${BASE}/Fire%20extinguisher/3D/fire_extinguisher_3d.png`,
    alt: 'Incêndio',
    title: 'Projeto de Combate a Incêndio',
    text: 'Proteção integral e análise de risco para ambientes industriais e comerciais, em conformidade com normas técnicas.',
  },
  {
    img: `${BASE}/Gear/3D/gear_3d.png`,
    alt: 'Drenagem',
    title: 'Projeto de Drenagem Pluvial',
    text: 'Soluções completas para conduzir e escoar águas pluviais, evitando alagamentos e danos estruturais.',
  },
  {
    img: `${BASE}/High%20voltage/3D/high_voltage_3d.png`,
    alt: 'Elétrico',
    title: 'Projeto Elétrico e Hidrossanitário',
    text: 'Soluções elétricas e hidrossanitárias integradas, garantindo conforto, segurança e eficiência operacional.',
  },
  {
    img: `${BASE}/Brick/3D/brick_3d.png`,
    alt: 'Concreto Armado',
    title: 'Engenharia Estrutural (Concreto Armado)',
    text: 'Execução técnica de obras civis com rigor e precisão, garantindo durabilidade e segurança estrutural.',
  },
];

export default function SpecialServices() {
  return (
    <section id="special-services" className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white text-center drop-shadow-lg">
        Serviços Especializados
      </h2>
      <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-600/40"></div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specials.map((item, index) => (
          <article
            key={index}
            className="group bg-white/5 backdrop-blur-md rounded-2xl border border-white/15 hover:border-blue-400/60 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 p-8 flex flex-col"
          >
            <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-heading font-semibold text-white leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-1">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
