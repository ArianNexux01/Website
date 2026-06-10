import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Process from './components/sections/Process';
import WhyUs from './components/sections/WhyUs';
import CTA from './components/sections/CTA';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
