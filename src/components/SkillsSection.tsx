import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Brain, Code2, Database, Zap, BarChart3, Cpu, FileSpreadsheet, Globe, Server,
} from "lucide-react";

const categories = [
  {
    name: "Programming",
    skills: [
      { name: "Python", icon: Code2, level: 90 },
      { name: "JavaScript", icon: Zap, level: 80 },
    ],
  },
  {
    name: "AI & ML",
    skills: [
      { name: "Machine Learning", icon: Brain, level: 85 },
      { name: "TensorFlow", icon: BarChart3, level: 75 },
      { name: "Data Analysis", icon: Database, level: 80 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: Globe, level: 80 },
      { name: "Tailwind CSS", icon: Zap, level: 85 },
    ],
  },
  {
    name: "Backend & Tools",
    skills: [
      { name: "FastAPI", icon: Server, level: 75 },
      { name: "Pandas", icon: Cpu, level: 85 },
      { name: "Excel Automation", icon: FileSpreadsheet, level: 80 },
    ],
  },
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const AnimatedCounter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [inView, target]);
  return <span>{count}%</span>;
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("Programming");

  const active = categories.find((c) => c.name === activeCategory)!;

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.name
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <div className="max-w-xl mx-auto space-y-5">
          {active.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease }}
              className="glass-card p-5 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <skill.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="font-display font-medium text-sm tracking-tight">{skill.name}</span>
                </div>
                <span className="text-xs font-medium text-primary/80 tabular-nums">
                  <AnimatedCounter target={skill.level} inView={inView} />
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
