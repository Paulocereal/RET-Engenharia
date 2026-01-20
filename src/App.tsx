import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
// 1. Importação do novo componente de WhatsApp
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* 2. O botão flutuante inserido antes do fechamento da div principal */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
