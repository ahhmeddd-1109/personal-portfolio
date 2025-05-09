
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a dedicated Computer Science student with hands-on experience in web development, system administration, and software projects. I love exploring emerging tech and building smart, user-friendly applications.
            </p>
            
            <p className="text-lg">
              Beyond coding, I have a strong background in mentoring and training. I've worked as a part-time trainer, sharing knowledge in IT tools and programming, and enjoy helping others grow alongside me.
            </p>
            
            <p className="text-lg">
            I aim to combine technical skills with creativity to build impactful solutions. With a strong focus on details and user needs, I strive to make each project meaningful and future-ready.
            </p>
            
            <div className="pt-4">
              <Button asChild>
                <a href="https://drive.google.com/file/d/1OUX5VK9qu8Kz7gDFQyiYziAZGGTf4WgG/view?usp=sharing" download target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">1+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
