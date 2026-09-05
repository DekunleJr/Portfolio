import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Trulaju from './components/Trulaju';
import Skills from './components/Skills';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Trulaju />
        <Skills />
        <Capabilities />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
