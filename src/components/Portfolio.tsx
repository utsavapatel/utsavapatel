
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Link as LinkIcon } from 'lucide-react';

const NEW_PROJECTS_DATA = [
  {
    title: "Drive Test Booking System",
    description: "A web application for booking G2/G driving tests, managing appointments, and viewing results with role-based authentication for users and admins. Features a Node.js/Express RESTful API and MongoDB for data storage.",
    technologies: ["Express.js", "REST APIs", "MongoDB", "Node.js"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Mobile Hub - Ecommerce Application",
    description: "An Android e-commerce app for mobile devices. Users can browse categories, products, search, and place orders via online payment or COD, with order tracking.",
    technologies: ["Java", "JavaScript", "XML", "Android Development"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Pop Balloon Game – Interactive Android Gaming Application",
    description: "An engaging Android game where players pop balloons while avoiding bombs. Features include a scoring system, limited lives, animations, sound effects, and XML-based UI.",
    technologies: ["XML", "Android Development", "Kotlin"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "SmartTag – Road Speed Compliance & Monitoring App",
    description: "An Android app promoting safer driving by providing real-time insights into speed limits, regulatory guidelines, and the economic impact of road safety compliance.",
    technologies: ["Java", "XML", "Android Development"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-Shopper’s Hub – E-Commerce Management System",
    description: "An e-commerce management system for administrators to manage stock, users, and orders, ensuring smooth online business operations via a dynamic web interface.",
    technologies: ["Servlets", "JavaScript", "CSS", "NetBeans", "HTML", "JSP"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Admin Panel – Web-Based Management System",
    description: "A dynamic admin panel for the Mobile Hub e-commerce app, managing product categories, orders, and customer feedback. Features a responsive PHP, HTML, CSS, JavaScript interface.",
    technologies: ["PHP", "JavaScript", "CSS", "HTML", "Relational Databases"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Canon Camera & Lenses – E-Commerce Website",
    description: "A WooCommerce-based e-commerce site on WordPress for selling Canon cameras and lenses, featuring product purchasing, order tracking, and Stripe payment gateway integration.",
    technologies: ["WooCommerce", "Stripe payment Gateway", "Relational Databases", "WordPress"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="w-full py-16 md:py-24 bg-neutral-DEFAULT">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 text-neutral-text">My Projects</h2>
        <p className="text-center text-neutral-muted mb-12">Here's a selection of projects I've worked on, showcasing my skills and experience.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap for better spacing */}
          {NEW_PROJECTS_DATA.map((project) => (
            <Card key={project.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border border-border">
              <CardHeader className="p-0"> {/* Removed padding to make image flush */}
                <img src={project.imageUrl} alt={project.title} className="rounded-t-lg aspect-video object-cover w-full" />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <CardTitle className="text-xl font-semibold text-neutral-text mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm text-neutral-muted mb-4 flex-grow">{project.description}</CardDescription>
                <div>
                  <p className="text-xs font-semibold text-neutral-text mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 border-t border-border/50 space-x-2">
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
