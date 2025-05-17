
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Link as LinkIcon } from 'lucide-react'; // Assuming these icons exist

const PROJECTS_DATA = [
  {
    title: "Admin Panel for Mobile Hub",
    description: "A comprehensive admin panel to manage mobile store operations.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/placeholder.svg", // Replace with actual image path
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Canon Camera E-Commerce",
    description: "WooCommerce based e-commerce site for Canon cameras.",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  // Add other projects here...
  {
    title: "SmartTag Speed Monitoring App",
    description: "An app for real-time speed monitoring using smart tags.",
    technologies: ["Android (Java)", "Firebase"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="w-full py-16 md:py-24 bg-neutral-DEFAULT">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 text-neutral-text">My Portfolio</h2>
        <p className="text-center text-neutral-muted mb-12">A selection of projects I've worked on.</p>
        {/* Placeholder for filter/sort functionality */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <Card key={project.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <img src={project.imageUrl} alt={project.title} className="rounded-t-lg aspect-video object-cover" />
                <CardTitle className="mt-4 text-xl text-neutral-text">{project.title}</CardTitle>
                <CardDescription className="text-neutral-muted">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm font-semibold text-neutral-text mb-1">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="space-x-2">
                {project.githubUrl !== "#" && (
                  <Button variant="outline" size="sm" asChild className="border-neutral-muted text-neutral-muted hover:border-brand-primary hover:text-brand-primary">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.liveUrl !== "#" && (
                  <Button variant="outline" size="sm" asChild className="border-neutral-muted text-neutral-muted hover:border-brand-primary hover:text-brand-primary">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
