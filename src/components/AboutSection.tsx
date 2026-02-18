import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Lightbulb, Target, Rocket } from "lucide-react";

const highlights = [
  { icon: Lightbulb, title: "Experience", desc: "Hands-on projects in AI, ML & web development" },
  { icon: Target, title: "Passion", desc: "Driven by curiosity and love for problem-solving" },
  { icon: Rocket, title: "Vision", desc: "Building tech that creates real-world impact" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Passionate about building <span className="text-gradient">smart solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-1 aspect-square max-w-sm mx-auto md:mx-0 flex items-center justify-center group"
          >
            <div className="w-full h-full rounded-[calc(var(--radius)-4px)] bg-secondary flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "var(--gradient-primary)", opacity: 0.1 }} />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <User className="w-24 h-24 text-muted-foreground/40" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              Hi, I'm <span className="text-foreground font-semibold">Sanskruti Dixit</span> — an AI & Software Developer with a deep passion for turning complex problems into clean, intelligent solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in <span className="text-foreground">Machine Learning</span>, <span className="text-foreground">Web Development</span>, and <span className="text-foreground">Data-Driven Automation</span>. From building predictive models to crafting seamless user experiences, I love every aspect of the development cycle.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning, writing clean code, and creating technology that truly makes a difference.
            </p>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              className="glass-card p-6 text-center hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
