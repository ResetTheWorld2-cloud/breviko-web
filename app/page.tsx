import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Projects from "@/components/Projects";
import DNA from "@/components/DNA";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Story />
        <Projects />
        <DNA />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
