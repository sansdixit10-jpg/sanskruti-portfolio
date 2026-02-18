import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "AI/ML Intern",
    org: "Tech Company",
    period: "2025 - Present",
    desc: "Working on machine learning models for automation and data processing pipelines.",
  },
  {
    type: "work",
    title: "Web Development Project",
    org: "Freelance",
    period: "2024 - 2025",
    desc: "Built responsive web applications using React and modern frontend technologies.",
  },
  {
    type: "edu",
    title: "B.Tech in Computer Science",
    org: "University",
    period: "2022 - 2026",
    desc: "Specializing in Artificial Intelligence and Machine Learning with strong academic performance.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Journey</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-6 z-10 shadow-[var(--glow-primary)]" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:w-1/2" : "md:pl-12 md:w-1/2 md:ml-auto"}`}>
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-2 mb-2">
                    {exp.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                    <span className="text-xs text-primary font-medium">{exp.period}</span>
                  </div>
                  <h3 className="font-display font-semibold mb-1">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{exp.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
