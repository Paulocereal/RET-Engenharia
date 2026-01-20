import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Edifício Comercial Skyline',
    category: 'Estrutural',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Projeto estrutural completo para edifício comercial de 15 andares',
  },
  {
    title: 'Residencial Park View',
    category: 'Arquitetônico',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Desenvolvimento arquitetônico de condomínio residencial de alto padrão',
  },
  {
    title: 'Galpão Industrial TechPark',
    category: 'Industrial',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Projeto completo de galpão industrial com 5.000m²',
  },
  {
    title: 'Shopping Boulevard Center',
    category: 'Comercial',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Consultoria técnica e acompanhamento de obra de shopping center',
  },
  {
    title: 'Hotel Resort Paradise',
    category: 'Hoteleiro',
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Projeto arquitetônico e estrutural de resort com 200 suítes',
  },
  {
    title: 'Ponte Metropolitana',
    category: 'Infraestrutura',
    image: 'https://images.pexels.com/photos/327509/pexels-photo-327509.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Projeto estrutural de ponte estaiada com 450m de extensão',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Projetos que Inspiram
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e comprometimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors">
                  Ver detalhes
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
