
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Link as LinkIcon } from "lucide-react"; // Award for badge icon

const CERTIFICATIONS_DATA = [
  { name: "Microsoft Azure AI Essentials", issuer: "Microsoft", date: "Mar 2025", icon: <Award className="h-5 w-5 text-brand-primary" />, url: "#" },
  { name: "HackerRank Java & Software Engineer", issuer: "HackerRank", date: "Mar 2025", icon: <Award className="h-5 w-5 text-brand-primary" />, url: "#" },
  { name: "MongoDB Basics", issuer: "MongoDB University", date: "Oct 2022", icon: <Award className="h-5 w-5 text-brand-primary" />, url: "#" },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-neutral-text">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <Card key={cert.name} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-x-2 pb-2">
                <div className="flex items-center space-x-3">
                  {cert.icon}
                  <CardTitle className="text-md font-semibold text-neutral-text">{cert.name}</CardTitle>
                </div>
                {cert.url !== "#" && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-neutral-muted hover:text-brand-primary">
                    <LinkIcon className="h-4 w-4" />
                  </a>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-muted">Issuer: {cert.issuer}</p>
                <p className="text-sm text-neutral-muted">Date: {cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
