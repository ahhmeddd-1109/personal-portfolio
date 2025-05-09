
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Diabetes Prediction",
    description: "A machine learning-based web application that predicts the likelihood of diabetes using user input and a trained model. Built with Streamlit and scikit-learn.",
    image: "https://res.cloudinary.com/dwqybearh/image/upload/v1744699110/zmjrke3nhtmthtjkvpqn.jpg",
    tags: ["Python", "Machine Learning", "Streamlit", "scikit-learn"],
    category: "ML",
    demoLink: "https://diabetes-prediction-main.streamlit.app/",
    githubLink: "https://github.com/ahhmeddd-11/Diabetes-Prediction"
  },
  {
    id: 2,
    title: "Virtual Mouse",
    description: "AI-powered virtual mouse that converts hand movements into cursor actions using computer vision, eliminating need for physical hardware through Python and MediaPipe implementation.",
    image: "https://res.cloudinary.com/dwqybearh/image/upload/v1745953364/Screenshot_2025-04-30_003005_kmyzrv.png",
    tags: ["Python", "DIP", "Streamlit", "AI", "OpenCV"],
    category: "Gesture-Driven",
    githubLink: "https://github.com/ahhmeddd-11/gesture-driven-mouse-control"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is unique and solves 
            specific problems using different technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
