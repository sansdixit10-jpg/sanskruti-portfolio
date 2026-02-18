import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socials = [
    { icon: Mail, label: "Email", value: "sanskruti@example.com", href: "mailto:sanskruti@example.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sanskruti", href: "#" },
    { icon: Github, label: "GitHub", value: "github.com/sanskruti", href: "#" },
  ];

  return (
    <section id="contact" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="space-y-5"
          >
            <p className="text-sm text-muted-foreground leading-[1.8]">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
            </p>

            <div className="space-y-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card p-4 flex items-center gap-4 hover-lift block group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground tracking-wide">{item.label}</p>
                    <p className="text-xs font-medium mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="glass-card p-6 space-y-4 relative overflow-hidden"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease }}
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
                style={{ background: "var(--glass-bg)" }}
              >
                <CheckCircle className="w-10 h-10 text-primary mb-3" />
                <p className="font-display font-semibold text-sm">Message Sent!</p>
                <p className="text-xs text-muted-foreground mt-1">I'll get back to you soon.</p>
              </motion.div>
            )}

            {[
              { label: "Name", type: "text", key: "name" as const, placeholder: "Your name" },
              { label: "Email", type: "email", key: "email" as const, placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-[10px] text-muted-foreground mb-1.5 block tracking-wide uppercase">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/30 transition-all duration-300"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label className="text-[10px] text-muted-foreground mb-1.5 block tracking-wide uppercase">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/30 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
            >
              Send Message <Send className="w-3.5 h-3.5" />
            </button>
          </motion.form>
        </div>
      </div>

      <div className="border-t border-border/50 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-muted-foreground/60 tracking-wide">
            © 2026 Sanskruti Dixit. Built with passion and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
