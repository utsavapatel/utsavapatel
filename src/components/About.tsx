
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import EducationItem from './EducationItem';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-12 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Hello! I'm Utsava Patel, a passionate Full Stack Developer based in Ontario, Canada. With over 2+ years of dedicated experience, I specialize in crafting scalable, high-performance web and mobile applications. My journey in the tech world has been fueled by an insatiable curiosity for innovative problem-solving and an unwavering commitment to building high-quality, user-centric solutions. I thrive on transforming complex ideas into elegant and functional digital experiences, always eager to explore new technologies and methodologies to stay at the forefront of development. My focus is on continuous learning and applying cutting-edge techniques to deliver impactful results.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Key Strengths</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Clean, maintainable, and efficient code.</li>
              <li>Expert problem-solving and analytical skills.</li>
              <li>Developing secure and scalable systems.</li>
              <li>Collaborative team player with strong communication.</li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105" size="lg">
              {/* Corrected href path for the resume */}
              <a href="/Utsava_Patel_Resume.pdf" download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </a>
            </Button>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
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
