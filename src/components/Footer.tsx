
import { Github, Instagram, Linkedin, Mail, Twitter, X } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">Syed Ahmed Ali | Data Analyst</h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <a 
              href="https://github.com/ahhmeddd-11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/syed-ahmed-ali-96300a1ba/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/aahmeddd49" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://www.instagram.com/ahhmeddd.11/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="mailto:syedahmed4957@gmail.com" 
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="w-full h-px bg-border mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full text-muted-foreground">
            <p>© {currentYear} Syed Ahmed Ali. All Rights Reserved.</p>
            
            <nav className="flex gap-6 mt-4 md:mt-0">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
