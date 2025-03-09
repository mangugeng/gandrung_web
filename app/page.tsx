import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Stats />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
} 