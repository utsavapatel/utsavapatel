
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-neutral-DEFAULT">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Placeholder for professional photo */}
          <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full bg-neutral-muted flex items-center justify-center mb-8">
            <span className="text-neutral-text">Photo</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-neutral-text">
            Utsava Patel
          </h1>
          <p className="text-xl md:text-2xl font-medium text-brand-primary">
            Full Stack Developer | Web & Mobile Solutions | Scalable. Secure. Elegant.
          </p>
          <p className="text-neutral-muted md:text-lg">
            Experienced Full Stack Developer specializing in building robust and innovative applications.
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-primary-foreground" asChild>
              <a href="#portfolio">View Portfolio</a>
            </Button>
            <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        <div className="mt-16 animate-bounce">
          <a href="#about">
            <ArrowDown className="h-8 w-8 mx-auto text-neutral-muted hover:text-brand-primary" />
          </a>
        </div>
      </div>
      {/* Placeholder for background animation or subtle interactive elements */}
    </section>
  );
};

export default Hero;
