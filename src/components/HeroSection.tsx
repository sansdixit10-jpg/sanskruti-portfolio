import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import profile from "../assets/pf.jpg";

const subtitles = [
  "AI & Software Developer",
  "Machine Learning Engineer",
  "Full-Stack Builder",
  "Data Science Enthusiast",
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

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
            setTimeout(() => setDeleting(true), 2000);
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
      deleting ? 35 : 70
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
      <div className="floating-orb w-[600px] h-[600px] bg-primary/20 top-[-15%] left-[-15%]" />
      <div className="floating-orb w-[500px] h-[500px] bg-accent/15 bottom-[-15%] right-[-15%]" style={{ animationDelay: "4s" }} />
      <div className="floating-orb w-[250px] h-[250px] bg-primary/10 top-[45%] right-[15%]" style={{ animationDelay: "7s" }} />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground/70 mb-8"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 tracking-tight"
        >
          Sanskruti{" "}
          <span className="text-gradient">Dixit</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-5 h-7 font-light"
        >
          <span>{currentText}</span>
          <span className="inline-block w-px h-5 bg-primary/60 ml-0.5 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease }}
          className="text-sm text-muted-foreground/60 max-w-md mx-auto mb-12 leading-relaxed"
        >
          Crafting intelligent systems and elegant digital experiences through AI, data, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full glass text-sm font-medium text-foreground hover-lift"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="px-7 py-3 rounded-full glass text-sm font-medium text-foreground hover-lift flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.08, duration: 0.5, ease }}
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-105 transition-all duration-300"
              aria-label={s.label}
            >
              <s.icon className="w-3.5 h-3.5 text-muted-foreground" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
