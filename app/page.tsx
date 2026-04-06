import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DNA from "@/components/DNA";
import Projects from "@/components/Projects";
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
        <DNA />
        <Projects />
        <Philosophy />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
