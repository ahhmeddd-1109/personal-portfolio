
import { Card, CardContent } from "@/components/ui/card";
import { Database, Globe,  BarChart3, Cloud, Filter } from "lucide-react";

const skillCategories = [
  {
    title: "Data Analysis & Visualization",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    skills: ["Microsoft Excel", "Tableau", "Power BI", "Pandas"]
  },
  {
    title: "Database Management",
    icon: <Database className="h-10 w-10 text-primary" />,
    skills: ["MySQL", "SQL", "Microsoft Azure", "Mongo DB"]
  },
  {
    title: "Data Manipulation & Processing",
    icon: <Filter className="h-10 w-10 text-primary" />,
    skills: ["Python", "NumPy", "Pandas", "Jupyter"]
  },
  {
    title: "Cloud & Deployment",
    icon: <Cloud className="h-10 w-10 text-primary" />,
    skills: ["AWS S3", "AWS RDS", "AWS Lambda", "AWS Quicksight"]
  },
  {
    title: "Languages",
    icon: <Globe className="h-10 w-10 text-primary" />,
    skills: ["SQL", "Python", "Java", "Git", "HTML/CSS", "Javascript"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">I’ve worked with a variety of tools and technologies in the data analytics domain, from data wrangling and visualization to cloud platforms. Here’s an overview of my technical skills:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-secondary p-6">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
