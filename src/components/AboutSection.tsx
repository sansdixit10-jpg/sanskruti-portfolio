import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

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
            Passionate about building{" "}
            <span className="text-gradient">smart solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-1 aspect-square max-w-sm mx-auto md:mx-0 flex items-center justify-center"
          >
            <div className="w-full h-full rounded-[calc(var(--radius)-4px)] bg-secondary flex items-center justify-center">
              <User className="w-24 h-24 text-muted-foreground/40" />
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
              I believe in continuous learning, writing clean code, and creating technology that truly makes a difference. Let's build something remarkable together.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Focus", value: "AI & ML" },
                { label: "Stack", value: "Python · React" },
                { label: "Passion", value: "Problem Solving" },
                { label: "Goal", value: "Smart Solutions" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-display font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
