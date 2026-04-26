import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CursorGlow from "./components/CursorGlow";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
<>
     <Navbar />
    <main>
      <CursorGlow />
     
      <div className="w-11/12 mx-auto">

       <Hero />
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>

      </div>
      <Footer></Footer>
     
    </main>
</>
  );
}