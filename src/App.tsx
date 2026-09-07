import { PROFILE } from "@/data/portfolio";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationCerts from "@/components/EducationCerts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero profile={PROFILE} />
      <About profile={PROFILE} />
      <Skills profile={PROFILE} />
      <Experience profile={PROFILE} />
      <Projects profile={PROFILE} />
      <EducationCerts profile={PROFILE} />
      <Contact profile={PROFILE} />
      <Footer name={PROFILE.name} />
    </main>
  );
}
