import { Award, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipe de engenharia"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Comprometidos com a excelência
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com mais de 15 anos de experiência no mercado, somos uma consultoria especializada em engenharia e projetos,
              oferecendo soluções inovadoras e de alta qualidade para nossos clientes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa equipe multidisciplinar é composta por profissionais altamente qualificados e comprometidos em
              transformar suas ideias em realidade, sempre com foco em qualidade, segurança e eficiência.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Qualidade Certificada</h3>
                  <p className="text-gray-600">Processos certificados e conformidade com normas técnicas nacionais e internacionais.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Foco no Cliente</h3>
                  <p className="text-gray-600">Atendimento personalizado e soluções customizadas para cada projeto.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Inovação Constante</h3>
                  <p className="text-gray-600">Investimento contínuo em tecnologia e capacitação profissional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
