import { Sidebar } from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* O Sidebar fixo na esquerda */}
      <Sidebar />

      {/* O restante do conteúdo à direita */}
      <div className="flex-1 overflow-x-hidden">
        <Header />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;