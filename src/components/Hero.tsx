
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent -z-10" />
      
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Syed Ahmed Ali
            </h1>
            <h2 className="text-2xl md:text-3xl text-black font-medium">
              Data Analyst
            </h2>
          </div>
          
          <p className="text-lg text-black max-w-md">
          I leverage data to uncover trends, identify opportunities, and solve real-world problems through insights and visualization.
          </p>
          
          <div className="flex gap-4">
            <Button onClick={scrollToProjects}>View My Work</Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <a 
              href="https://github.com/ahhmeddd-11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/syed-ahmed-ali-96300a1ba/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:syedahmed4957@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="https://res.cloudinary.com/dwqybearh/image/upload/v1744631467/potlvuwscab73bpidqer.jpg"
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <Button variant="ghost" size="icon" onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}>
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
