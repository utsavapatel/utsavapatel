
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import emailjs from 'emailjs-com';
import { toast } from "sonner";

const SERVICE_ID = "service_yxd28e4";
const TEMPLATE_ID = "template_39tonwi";
const PUBLIC_KEY = "w5R9R9Z25iYPzK2o9";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then((result) => {
        console.log("EmailJS Success:", result.text);
        toast.success("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      }, (error) => {
        console.error("EmailJS Error:", error.text);
        toast.error("Failed to send message. Please try again or contact me directly via email.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-foreground">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center"><Phone className="mr-3 h-5 w-5 text-primary" /> +1-514-891-1601</p>
              <p className="flex items-center"><Mail className="mr-3 h-5 w-5 text-primary" /> utsavapatel1@gmail.com</p>
              <a href="https://linkedin.com/in/utsavapatel" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <Linkedin className="mr-3 h-5 w-5 text-primary" /> LinkedIn Profile
              </a>
              <a href="https://github.com/utsavapatel" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <Github className="mr-3 h-5 w-5 text-primary" /> GitHub Profile
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Feel free to reach out for collaborations, freelance opportunities, or just to say hi! I'm always excited to discuss new projects and ideas.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="mt-1 bg-card text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                placeholder="Your Name" 
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="mt-1 bg-card text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                placeholder="your.email@example.com" 
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-foreground"
                placeholder="Tell me about your project or inquiry..."
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
