import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Code2,
  Database,
  Zap,
  BarChart3,
  Cpu,
  FileSpreadsheet,
} from "lucide-react";

const skills = [
  { name: "Python", icon: Code2, description: "Core language for AI/ML" },
  { name: "Machine Learning", icon: Brain, description: "Predictive models & NLP" },
  { name: "React", icon: Zap, description: "Modern web interfaces" },
  { name: "FastAPI", icon: Cpu, description: "High-performance APIs" },
  { name: "Pandas", icon: Database, description: "Data analysis & wrangling" },
  { name: "TensorFlow", icon: BarChart3, description: "Deep learning frameworks" },
  { name: "Excel Automation", icon: FileSpreadsheet, description: "VBA & Python automation" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 text-center hover-lift cursor-default group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
