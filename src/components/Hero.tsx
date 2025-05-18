
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-36 bg-background text-foreground"> {/* Changed gradient to bg-background, text to foreground */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="md:flex md:items-center md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="md:w-1/2 lg:w-3/5 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
              <span className="block">Hello, I'm</span>
              <span className="block text-primary mt-1 md:mt-2">Utsava Patel</span> {/* Name uses primary color */}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground/90">Full Stack Developer | Web & Mobile Solutions.</p> {/* text-foreground */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0"> {/* text-muted-foreground */}
              Experienced Full Stack Developer specializing in building robust and innovative applications.
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300" asChild> {/* Button uses primary colors */}
                <a href="#portfolio">View Portfolio</a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-300" asChild> {/* Outline button uses primary colors */}
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 lg:w-2/5 mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div> {/* Gradient uses primary and a similar pink shade */}
              <img
                src="https://i.postimg.cc/jqZkwJHq/Utsava-Patel.jpg"
                alt="Utsava Patel"
                className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background/50 shadow-xl transform group-hover:scale-105 transition-transform duration-300" /* Border uses background for contrast */
              />
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-24 text-center">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="h-10 w-10 mx-auto text-primary hover:text-primary/80 animate-bounce" /> {/* Arrow uses primary color */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
