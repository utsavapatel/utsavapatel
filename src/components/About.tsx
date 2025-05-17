
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const EducationItem: React.FC<{ degree: string; institution: string; years: string }> = ({ degree, institution, years }) => (
  <div className="mb-4">
    <h4 className="font-semibold text-neutral-text">{degree}</h4>
    <p className="text-neutral-muted">{institution}</p>
    <p className="text-sm text-neutral-muted">{years}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-neutral-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-neutral-text">My Journey</h3>
            <p className="text-neutral-muted mb-4">
              Hello! I'm Utsava Patel, a passionate Full Stack Developer based in Ontario, Canada. With over 3 years of experience,
              I specialize in crafting scalable web and mobile applications. My journey in tech has been driven by a curiosity for
              problem-solving and a commitment to building high-quality, user-centric solutions.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-neutral-text">Key Strengths</h3>
            <ul className="list-disc list-inside text-neutral-muted space-y-2 mb-6">
              <li>Clean, maintainable, and efficient code.</li>
              <li>Expert problem-solving and analytical skills.</li>
              <li>Developing secure and scalable systems.</li>
              <li>Collaborative team player with strong communication.</li>
            </ul>
            <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10">
              <Download className="mr-2 h-4 w-4" /> Download Resume (PDF)
            </Button>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-neutral-text">Education</h3>
            <EducationItem degree="PG Certificate in Web Development" institution="Conestoga College" years="2024–2025" />
            <EducationItem degree="Master of Computer Applications (MCA)" institution="Charotar University of Science and Technology" years="2022–2024" />
            <EducationItem degree="Bachelor of Computer Applications (BCA)" institution="Dharmsinh Desai University" years="2018–2021" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
