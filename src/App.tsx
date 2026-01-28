import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Certificates from "./sections/Certificates";

export default function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
