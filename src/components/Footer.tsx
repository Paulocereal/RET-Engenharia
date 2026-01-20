import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              RET<span className="text-blue-400"> - Engenharia e Projeto</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Consultoria especializada em engenharia e projetos com excelência e compromisso.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Projetos Estruturais</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Projetos Arquitetônicos</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Acompanhamento de Obras</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Laudos Técnicos</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Consultoria Técnica</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projetos</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Av. Principal, 1000<br />São Paulo - SP</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>contato@engenhariapro.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} RET - Engenharia e Projeto. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
