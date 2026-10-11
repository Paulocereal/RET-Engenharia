import { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const slides = [
  { url: '/IM 1.jpg', alt: 'Excelência em Engenharia' },
  { url: '/IM 2.jpg', alt: 'Projetos de Alta Precisão' },
  { url: '/IM 3.jpg', alt: 'Inovação e Tecnologia' },
];

export default function Hero({ onNavigate }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[560px] lg:h-[640px] overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-slate-900/70"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-lg max-w-4xl leading-none">
          Engenharia de Alto Desempenho
        </h1>

        <div className="w-24 h-1.5 bg-blue-600 mt-6 rounded-full"></div>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-200 leading-relaxed">
          Soluções técnicas de precisão para estruturas metálicas, sistemas
          elétricos e projetos mecânicos, garantindo segurança, eficiência e
          cumprimento de prazos.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contato')}
            className="px-8 py-3.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/30"
          >
            Solicitar Orçamento
          </button>

          <button
            onClick={() => onNavigate('galeria')}
            className="px-8 py-3.5 rounded-full border-2 border-white text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors"
          >
            Nossos Projetos
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-3 rounded-full transition-all ${
              i === current ? 'bg-blue-600 w-8' : 'bg-white/50 w-3'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
