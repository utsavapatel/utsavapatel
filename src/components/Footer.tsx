
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-8 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://linkedin.com/in/utsavapatel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-muted hover:text-brand-primary">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/utsavapatel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-muted hover:text-brand-primary">
            <Github className="h-6 w-6" />
          </a>
          <a href="mailto:utsavapatel1@gmail.com" aria-label="Email" className="text-neutral-muted hover:text-brand-primary">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm text-neutral-muted">
          &copy; {currentYear} Utsava Patel. All rights reserved.
        </p>
        <p className="text-xs text-neutral-muted mt-1">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
