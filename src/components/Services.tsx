
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone } from "lucide-react";

const SERVICES_DATA = [
  {
    title: "Web Application Development",
    icon: <Code className="h-8 w-8 text-brand-primary" />,
    description: "Building robust, scalable, and secure web applications tailored to your needs. From front-end UI/UX to back-end APIs and database integration.",
    includes: ["Custom Feature Development", "API Development & Integration", "Responsive UI/UX Design", "Database Design & Management", "Performance Optimization"],
  },
  {
    title: "Mobile App Development (Android)",
    icon: <Smartphone className="h-8 w-8 text-brand-primary" />,
    description: "Creating native Android applications with a focus on performance, user experience, and seamless integration with backend services.",
    includes: ["Native Android Development (Java/Kotlin)", "UI/UX Design for Mobile", "API Integration", "Google Play Store Deployment", "App Maintenance & Support"],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-neutral-text">Services I Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="mt-4 text-xl text-neutral-text">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-neutral-muted mb-4 text-center">{service.description}</p>
                <h4 className="font-semibold text-neutral-text mb-2">Includes:</h4>
                <ul className="list-disc list-inside text-neutral-muted space-y-1 text-sm">
                  {service.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
