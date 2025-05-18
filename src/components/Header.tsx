
import React from 'react';
import { Button } from "@/components/ui/button";

// Updated NAV_LINKS, "Contact" moved to a dedicated button
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
      <div className="container flex h-16 max-w-screen-2xl items-center"> {/* Increased height slightly */}
        <a href="#home" className="mr-auto flex items-center space-x-2"> {/* Changed mr-6 to mr-auto to push links and button to the right */}
          <span className="font-bold text-xl text-brand-primary hover:text-brand-primary/80 transition-colors">Utsava Patel</span> {/* Increased font size */}
        </a>
        
        <nav className="hidden md:flex items-center justify-center flex-1"> {/* Centered navigation links */}
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-muted transition-colors hover:text-brand-primary px-3 lg:px-4 py-2 relative group" 
            >
              {link.label}
              <span className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-brand-primary group-hover:w-2/3 transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center"> {/* Changed to ml-auto */}
          <Button variant="default" size="sm" asChild className="bg-brand-accentYellow hover:bg-brand-accentYellow/90 text-neutral-text">
            <a href="#contact">Get in Touch</a>
          </Button>
          {/* Mobile menu button can be added here later if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
