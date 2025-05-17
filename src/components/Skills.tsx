
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Database, Settings, ShieldCheck } from "lucide-react"; // Example icons

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Code className="h-6 w-6 text-brand-primary" />,
    skills: ["React.js", "Vue.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Settings className="h-6 w-6 text-brand-primary" />,
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "J2EE", "REST APIs"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-brand-primary" />,
    skills: ["SQL (PostgreSQL, MySQL)", "MongoDB", "NoSQL Concepts"],
  },
  {
    title: "Tools & DevOps",
    icon: <Smartphone className="h-6 w-6 text-brand-primary" />, // Placeholder, consider more specific devops icon
    skills: ["Docker", "CI/CD (GitHub Actions)", "AWS (EC2, S3)", "GCP", "Git & GitHub"],
  },
  {
    title: "Security",
    icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
    skills: ["JWT", "OAuth2", "bcrypt", "Web Security Principles"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-neutral-DEFAULT">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-neutral-text">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                {category.icon}
                <CardTitle className="text-xl text-neutral-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-neutral-muted hover:text-brand-primary transition-colors">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
