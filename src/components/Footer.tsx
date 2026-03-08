import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-6 px-4 sm:px-6 lg:px-8 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Logo e Descrição */}
          <div className="md:col-span-1">
             <img 
              src="/logo-ret.png" 
              alt="RET Engenharia" 
              className="h-12 w-auto mb-6 brightness-0 invert" 
            />
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Consultoria especializada em engenharia e projetos com excelência, segurança e compromisso técnico.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Serviços Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Serviços</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Projetos Estruturais</li>
              <li>NR-12 e Segurança</li>
              <li>Laudos e Perícias</li>
              <li>Sistemas de Exaustão</li>
            </ul>
          </div>

          {/* Coluna 3: Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Institucional</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre a RET</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Galeria de Obras</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato Real */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 text-blue-500" />
                <span>Av. Dr. Cássio Paschoal Padovani, 3235<br />Piracicaba - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>(19) 3433-2211</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Final e Crédito solicitado */}
        <div className="border-t border-slate-800 pt-8 flex flex-col items-center gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium">
            Paulo Souza © {currentYear} – Todos os direitos reservados
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500 uppercase">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Termos</a>
          </div>
        </div>
      </div>

      {/* Botão flutuante do WhatsApp */}
      <a 
        href="https://wa.me/551934332211" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25d366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <MessageCircle size={28} className="text-white fill-current" />
      </a>
    </footer>
  );
}
