
import React from 'react';
import { Button } from "@/components/ui/button"; // Using shadcn button
import { Sun, Moon } from "lucide-react"; // For dark/light mode toggle later

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  // { href: "#services", label: "Services" }, // Removed
  { href: "#portfolio", label: "Portfolio" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC = () => {
  // const [isDarkMode, setIsDarkMode] = React.useState(false); // For later implementation
  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="#home" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg text-brand-primary">Utsava Patel</span>
        </a>
        <nav className="flex flex-1 items-center space-x-4 lg:space-x-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-muted transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center">
          {/* Dark mode toggle placeholder */}
          {/* <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle theme">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
