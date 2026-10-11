import { Facebook, Instagram, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f172a]/95 backdrop-blur-md border-t border-white/10 text-white pt-14 pb-8 px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* TOPO — logo/nome + redes */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo RET à esquerda */}
          <img
            src="/logo-ret.png"
            alt="RET Engenharia"
            className="h-12 w-auto brightness-0 invert"
          />

          {/* Redes sociais à direita */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </div>
        </div>

        {/* BLOCO CENTRAL — contato rápido (opcional, mantém a identidade RET) */}
        <div className="grid md:grid-cols-3 gap-8 py-10 border-b border-white/10">
          <div>
            <h4 className="text-sm font-heading font-bold mb-4 text-blue-400 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 text-blue-500 mt-0.5" />
                <span>
                  Av. Dr. Cássio Paschoal Padovani, 3235
                  <br />
                  Piracicaba - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" />
                <span>(19) 3433-2211</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold mb-4 text-blue-400 uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Projetos Estruturais</li>
              <li>NR-12 e Segurança</li>
              <li>Laudos e Perícias</li>
              <li>Sistemas de Exaustão</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold mb-4 text-blue-400 uppercase tracking-wider">
              Institucional
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Sobre a RET
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Galeria de Obras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* RODAPÉ FINAL — copyright + crédito */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-slate-500 tracking-wider uppercase">
            © {currentYear}{' '}
            <a
              href="https://linkops.dev.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 font-semibold transition-colors"
            >
              LINKOPS
            </a>{' '}
            // ENGENHARIA DE PROCESSOS.
          </p>

          <div className="flex gap-6 text-xs text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
