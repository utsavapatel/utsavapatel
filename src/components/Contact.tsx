
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component like Input
import { Phone, Mail, Linkedin, Github } from "lucide-react";

// You might need to create Textarea.tsx if it doesn't exist in ui
// For now, I'll assume it's similar to Input. If not, we can use a standard <textarea>.

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., EmailJS or backend API)
    // For now, just log to console
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    alert("Message sent (simulated)!");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-neutral-DEFAULT">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-neutral-text">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-text">Contact Information</h3>
            <div className="space-y-3 text-neutral-muted">
              <p className="flex items-center"><Phone className="mr-2 h-5 w-5 text-brand-primary" /> +1-514-891-1601</p>
              <p className="flex items-center"><Mail className="mr-2 h-5 w-5 text-brand-primary" /> utsavapatel1@gmail.com</p>
              <a href="https://linkedin.com/in/utsavapatel" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-brand-primary">
                <Linkedin className="mr-2 h-5 w-5 text-brand-primary" /> LinkedIn Profile
              </a>
               {/* Assuming GitHub link is desired, can be removed if not */}
              <a href="https://github.com/utsavapatel" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-brand-primary">
                <Github className="mr-2 h-5 w-5 text-brand-primary" /> GitHub Profile
              </a>
            </div>
            <p className="mt-6 text-sm text-neutral-muted">
              Feel free to reach out for collaborations, freelance opportunities, or just to say hi!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-neutral-text">Name</Label>
              <Input type="text" id="name" name="name" required className="mt-1 bg-background text-neutral-text placeholder:text-neutral-muted" placeholder="Your Name" />
            </div>
            <div>
              <Label htmlFor="email" className="text-neutral-text">Email</Label>
              <Input type="email" id="email" name="email" required className="mt-1 bg-background text-neutral-text placeholder:text-neutral-muted" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="message" className="text-neutral-text">Message</Label>
              {/* Using a standard textarea if ui/textarea.tsx doesn't exist or isn't compatible */}
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-neutral-text"
                placeholder="Your message..."
              />
            </div>
            <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-primary-foreground">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
