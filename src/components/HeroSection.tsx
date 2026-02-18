import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const subtitles = [
  "AI & Software Developer",
  "Machine Learning Engineer",
  "Full-Stack Builder",
  "Data Science Enthusiast",
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = subtitles[subtitleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setCurrentText(target.slice(0, charIndex + 1));
          if (charIndex + 1 === target.length) {
            setTimeout(() => setDeleting(true), 1500);
          } else {
            setCharIndex(charIndex + 1);
          }
        } else {
          setCurrentText(target.slice(0, charIndex));
          if (charIndex === 0) {
            setDeleting(false);
            setSubtitleIndex((subtitleIndex + 1) % subtitles.length);
          } else {
            setCharIndex(charIndex - 1);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, subtitleIndex]);

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sanskruti@example.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient-bg overflow-hidden">
      <div className="floating-orb w-[500px] h-[500px] bg-primary/30 top-[-10%] left-[-10%]" />
      <div className="floating-orb w-[400px] h-[400px] bg-accent/20 bottom-[-10%] right-[-10%]" style={{ animationDelay: "3s" }} />
      <div className="floating-orb w-[200px] h-[200px] bg-primary/20 top-[40%] right-[20%]" style={{ animationDelay: "5s" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
        >
          Sanskruti <span className="text-gradient">Dixit</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 h-8"
        >
          <span>{currentText}</span>
          <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-sm md:text-base text-muted-foreground/70 max-w-xl mx-auto mb-10"
        >
          Crafting intelligent systems and elegant digital experiences through the power of AI, data, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full glass font-medium text-foreground hover-lift"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="px-8 py-3.5 rounded-full glass font-medium text-foreground hover-lift flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 hover:shadow-[var(--glow-primary)] transition-all"
              aria-label={s.label}
            >
              <s.icon className="w-4 h-4 text-muted-foreground" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
