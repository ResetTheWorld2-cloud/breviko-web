import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import DNA from "@/components/DNA";
import Philosophy from "@/components/Philosophy";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Projects />
        <DNA />
        <Philosophy />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
