
import React from 'react';
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#certifications", label: "Certifications" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <a href="#home" className="mr-auto flex items-center space-x-2">
          <span className="font-bold text-xl text-foreground hover:text-primary transition-colors">Utsava Patel</span> {/* Use foreground, hover primary */}
        </a>
        
        <nav className="hidden md:flex items-center justify-center flex-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-3 lg:px-4 py-2 relative group"  // Use muted-foreground, hover primary
            >
              {link.label}
              <span className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-2/3 transition-all duration-300"></span> {/* Underline uses primary */}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center">
          <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground"> {/* Button uses primary colors */}
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
