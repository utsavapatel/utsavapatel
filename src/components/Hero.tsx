
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-brand-secondary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="md:flex md:items-center md:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              <span className="block">Hello, I'm</span>
              <span className="block text-brand-accentYellow">Utsava Patel</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              Full Stack Developer | Web & Mobile Solutions | Scalable. Secure. Elegant.
            </p>
            <p className="text-lg text-primary-foreground/80">
              Experienced Full Stack Developer specializing in building robust and innovative applications.
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-brand-accentYellow hover:bg-brand-accentYellow/90 text-neutral-text" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
              <Button variant="outline" size="lg" className="border-brand-accentYellow text-brand-accentYellow hover:bg-brand-accentYellow/10 hover:text-neutral-text" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-primary-foreground/10 flex items-center justify-center border-4 border-brand-accentYellow/50">
              <span className="text-xl text-primary-foreground/70">Professional Photo</span>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center animate-bounce">
          <a href="#about">
            <ArrowDown className="h-8 w-8 mx-auto text-brand-accentYellow hover:text-brand-accentYellow/80" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

