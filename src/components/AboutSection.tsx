import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Lightbulb, Target, Rocket } from "lucide-react";

const highlights = [
  { icon: Lightbulb, title: "Experience", desc: "Hands-on projects in AI, ML & web development" },
  { icon: Target, title: "Passion", desc: "Driven by curiosity and love for problem-solving" },
  { icon: Rocket, title: "Vision", desc: "Building tech that creates real-world impact" },
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title mb-14">
            Passionate about building{" "}
            <span className="text-gradient">smart solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="glass-card p-1 aspect-square max-w-xs mx-auto md:mx-0 flex items-center justify-center"
          >
            <div className="w-full h-full rounded-[calc(var(--radius)-4px)] bg-secondary flex items-center justify-center overflow-hidden">
              <User className="w-20 h-20 text-muted-foreground/30" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-[1.8] text-[0.94rem]">
              Hi, I'm <span className="text-foreground font-medium">Sanskruti Dixit</span> — an AI & Software Developer with a deep passion for turning complex problems into clean, intelligent solutions.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-[0.94rem]">
              I specialize in <span className="text-foreground font-medium">Machine Learning</span>, <span className="text-foreground font-medium">Web Development</span>, and <span className="text-foreground font-medium">Data-Driven Automation</span>. From building predictive models to crafting seamless user experiences, I love every aspect of the development cycle.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-[0.94rem]">
              I believe in continuous learning, writing clean code, and creating technology that truly makes a difference.
            </p>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-20">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease }}
              className="glass-card p-7 text-center hover-lift group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-400">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 tracking-tight">{h.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
