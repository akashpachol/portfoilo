"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Zap, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { Icon: Github,   label: "GitHub",   href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Twitter,  label: "Twitter",  href: "#" },
];

function MagneticIcon({ Icon, label, href }: { Icon: React.ElementType; label: string; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.4);
    y.set((e.clientY - r.top - r.height / 2) * 0.4);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.1 }}
      className="w-11 h-11 rounded-2xl flex items-center justify-center text-white/40 hover:text-white transition-colors"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        x: sx, y: sy,
      }}
      data-cursor={label}
    >
      <Icon className="w-4 h-4" />
    </motion.a>
  );
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "f72041b4-5b01-41eb-a33c-2dedc743c313");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) { setIsSuccess(true); (e.target as HTMLFormElement).reset(); }
      else setError("Something went wrong. Please try again.");
    } catch { setError("Failed to send. Check your connection."); }
    finally { setIsSubmitting(false); }
  };

  const inputClass = (name: string) =>
    `w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-300 placeholder:text-white/20 ${
      focused === name
        ? "border-blue-500/40 bg-white/8"
        : "border-white/8 bg-white/4"
    }`;

  return (
    <footer id="contact" className="relative py-16 md:py-20 overflow-hidden">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(79,142,255,0.07) 0%, transparent 70%)" }}
        />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="text-white/25 font-mono text-sm tracking-widest">05</span>
              <div className="w-10 h-[1px] bg-white/10" />
              <span className="text-white/25 font-mono text-xs tracking-[0.3em] uppercase">Contact</span>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[1.05]"
              >
                Let&apos;s create<br />
                <span className="italic font-light grad-purple-cyan">something.</span>
              </motion.h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full w-fit"
                style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.18)", backdropFilter: "blur(12px)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-400/60 tracking-widest uppercase">Available for freelance</span>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                {[
                  { Icon: Mail,   label: "Email",    value: "akashpachol2001@gmail.com" },
                  { Icon: MapPin, label: "Location", value: "India" },
                  { Icon: Zap,    label: "Response", value: "Within 24 hours" },
                ].map(({ Icon, label, value }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(79,142,255,0.1)", border: "1px solid rgba(79,142,255,0.15)" }}
                    >
                      <Icon className="w-4 h-4 text-blue-400/70" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/25 font-mono uppercase tracking-widest">{label}</div>
                      <div className="text-sm text-white/55 mt-0.5">{value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-2">
                {socials.map((s) => (
                  <MagneticIcon key={s.label} {...s} />
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="relative rounded-[20px] md:rounded-[24px] p-6 md:p-10 flex flex-col gap-5 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Top glow line */}
                <div className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(79,142,255,0.4), rgba(168,85,247,0.4), transparent)" }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { id: "name",  type: "text",  label: "Name",  placeholder: "John Doe" },
                    { id: "email", type: "email", label: "Email", placeholder: "john@example.com" },
                  ].map((f) => (
                    <div key={f.id} className="flex flex-col gap-2">
                      <label htmlFor={f.id} className="text-[10px] text-white/25 font-mono uppercase tracking-[0.25em]">{f.label}</label>
                      <input
                        type={f.type} id={f.id} name={f.id} required
                        placeholder={f.placeholder}
                        onFocus={() => setFocused(f.id)}
                        onBlur={() => setFocused(null)}
                        className={inputClass(f.id)}
                        style={{ border: "1px solid", borderColor: focused === f.id ? "rgba(79,142,255,0.35)" : "rgba(255,255,255,0.07)", background: focused === f.id ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)" }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] text-white/25 font-mono uppercase tracking-[0.25em]">Subject</label>
                  <input
                    type="text" id="subject" name="subject"
                    placeholder="Project inquiry"
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("subject")}
                    style={{ border: "1px solid", borderColor: focused === "subject" ? "rgba(79,142,255,0.35)" : "rgba(255,255,255,0.07)", background: focused === "subject" ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] text-white/25 font-mono uppercase tracking-[0.25em]">Message</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="Tell me about your project..."
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("message")} resize-none`}
                    style={{ border: "1px solid", borderColor: focused === "message" ? "rgba(79,142,255,0.35)" : "rgba(255,255,255,0.07)", background: focused === "message" ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)" }}
                  />
                </div>

                {error && <p className="text-red-400 text-sm font-mono">{error}</p>}

                <div className="flex justify-end pt-1">
                  {isSuccess ? (
                    <div className="flex items-center gap-3 px-7 py-3.5 rounded-2xl font-medium text-green-400"
                      style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
                    >
                      Message Sent <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative flex items-center gap-3 px-8 py-3.5 rounded-2xl text-white font-medium overflow-hidden disabled:opacity-50 transition-opacity"
                      style={{
                        background: "linear-gradient(135deg, rgba(79,142,255,0.2), rgba(168,85,247,0.2))",
                        border: "1px solid rgba(79,142,255,0.25)",
                        backdropFilter: "blur(12px)",
                      }}
                      data-cursor="Send"
                    >
                      <motion.span
                        initial={{ x: "-100%", skewX: "-15deg" }}
                        whileHover={{ x: "300%" }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none"
                      />
                      <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                      {!isSubmitting && (
                        <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                    </motion.button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Footer bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
            <span className="text-white/20 text-sm font-mono">© {new Date().getFullYear()} Akash P. All rights reserved.</span>
            <span className="text-white/12 text-xs font-mono uppercase tracking-widest">Next.js · Framer Motion · Tailwind</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
