
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", handleReveal);
    handleReveal(); // Initial check for visible elements
    
    return () => {
      window.removeEventListener("scroll", handleReveal);
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <div className="reveal">
        <About />
      </div>
      
      <div className="reveal">
        <Skills />
      </div>
      
      <div className="reveal">
        <Projects />
      </div>
      
      <div className="reveal">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
