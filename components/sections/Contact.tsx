"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { H2 } from "@/components/ui/Typography";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: Replace this with your actual Web3Forms access key
    // You can get one for free at https://web3forms.com/
    formData.append("access_key", "f72041b4-5b01-41eb-a33c-2dedc743c313");
    
    // Send email to your specified address (configured via Web3Forms dashboard)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-background py-16 md:py-20 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col gap-12 md:gap-16">
          
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
            {/* Left: Headline & Pitch */}
            <div className="flex flex-col gap-8 md:w-1/2">
               <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Available for freelance</span>
                </div>
                
                <H2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1.1]">
                  Let's create<br />
                  <span className="italic text-zinc-500 font-light">something.</span>
                </H2>
              </motion.div>
            </div>

            {/* Right: Minimalist Form Items */}
            <div className="flex flex-col gap-8 md:w-1/2 pt-4">
              <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-8 w-full max-w-lg"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-2 border-b border-zinc-800 pb-4 group">
                  <label htmlFor="name" className="text-xs text-zinc-500 font-mono group-focus-within:text-foreground transition-colors uppercase tracking-widest">01 / WHAT'S YOUR NAME?</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe *" className="w-full bg-transparent text-xl md:text-2xl text-foreground placeholder:text-zinc-700 outline-none" />
                </div>
                
                <div className="flex flex-col gap-2 border-b border-zinc-800 pb-4 group">
                  <label htmlFor="email" className="text-xs text-zinc-500 font-mono group-focus-within:text-foreground transition-colors uppercase tracking-widest">02 / WHAT'S YOUR EMAIL?</label>
                  <input type="email" id="email" name="email" required placeholder="john@doe.com *" className="w-full bg-transparent text-xl md:text-2xl text-foreground placeholder:text-zinc-700 outline-none" />
                </div>

                <div className="flex flex-col gap-2 border-b border-zinc-800 pb-4 group">
                  <label htmlFor="message" className="text-xs text-zinc-500 font-mono group-focus-within:text-foreground transition-colors uppercase tracking-widest">03 / YOUR MESSAGE</label>
                  <textarea id="message" name="message" required placeholder="Tell me about your project... *" rows={3} className="w-full bg-transparent text-xl md:text-2xl text-foreground placeholder:text-zinc-700 outline-none resize-none" />
                </div>

                {error && <p className="text-red-500 text-sm font-mono">{error}</p>}
                
                <div className="pt-4 flex justify-end">
                  {isSuccess ? (
                    <div className="flex items-center gap-3 px-8 py-4 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full font-medium w-full md:w-auto justify-center">
                      Message Sent <CheckCircle2 className="w-5 h-5" />
                    </div>
                  ) : (
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group flex items-center gap-3 px-8 py-4 bg-white text-black disabled:bg-zinc-600 disabled:text-zinc-400 rounded-full font-medium hover:bg-zinc-200 transition-colors w-full md:w-auto justify-center"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                  )}
                </div>
              </motion.form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-900 gap-6">
            <span className="text-zinc-500 text-sm font-light">
              © {new Date().getFullYear()} Akash P. All rights reserved.
            </span>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-zinc-500 hover:text-foreground transition-colors uppercase tracking-widest font-mono">LinkedIn</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-foreground transition-colors uppercase tracking-widest font-mono">GitHub</a>
              <a href="mailto:hello@akash.dev" className="text-sm text-zinc-500 hover:text-foreground transition-colors uppercase tracking-widest font-mono">Email</a>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
