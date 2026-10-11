import {
  HardHat,
  Droplets,
  Flame,
  Cog,
  Zap,
  Building2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SpecialItem {
  Icon: LucideIcon;
  title: string;
  text: string;
  gradient: string; // classe Tailwind para o fundo do ícone
}

const specials: SpecialItem[] = [
  {
    Icon: HardHat,
    title: 'Laudo e ART para Andaimes',
    text: 'Segurança, conformidade com as normas vigentes e documentação técnica completa para estruturas provisórias.',
    gradient: 'from-amber-400 to-orange-600',
  },
  {
    Icon: Droplets,
    title: 'Projeto de Drenagem Pluvial',
    text: 'Simulações e análises avançadas para conduzir e escoar águas da chuva com eficiência e segurança.',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    Icon: Flame,
    title: 'Projeto de Combate a Incêndio',
    text: 'Proteção integral e análise de risco para ambientes industriais e comerciais, em conformidade com normas técnicas.',
    gradient: 'from-red-400 to-rose-600',
  },
  {
    Icon: Cog,
    title: 'Projeto de Drenagem Pluvial',
    text: 'Soluções completas para conduzir e escoar águas pluviais, evitando alagamentos e danos estruturais.',
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    Icon: Zap,
    title: 'Projeto Elétrico e Hidrossanitário',
    text: 'Soluções elétricas e hidrossanitárias integradas, garantindo conforto, segurança e eficiência operacional.',
    gradient: 'from-yellow-400 to-amber-600',
  },
  {
    Icon: Building2,
    title: 'Engenharia Estrutural (Concreto Armado)',
    text: 'Execução técnica de obras civis com rigor e precisão, garantindo durabilidade e segurança estrutural.',
    gradient: 'from-emerald-400 to-teal-600',
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
        {specials.map((item, index) => {
          const Icon = item.Icon;
          return (
            <article
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl border border-white/15 hover:border-blue-400/60 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 p-8 flex flex-col"
            >
              {/* 🎨 ÍCONE 3D-like */}
              <div className="relative mb-6">
                {/* halo/glow atrás do ícone */}
                <div
                  className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} blur-xl opacity-60 group-hover:opacity-90 transition-opacity`}
                ></div>

                {/* container do ícone */}
                <div
                  className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}
                  style={{
                    boxShadow:
                      '0 10px 25px -5px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.35), inset 0 -3px 6px rgba(0,0,0,0.25)',
                  }}
                >
                  <Icon
                    className="text-white drop-shadow-lg"
                    size={40}
                    strokeWidth={2}
                  />
                </div>
              </div>

              <h3 className="text-lg font-heading font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-1">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
