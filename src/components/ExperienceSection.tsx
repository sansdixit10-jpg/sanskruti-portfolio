import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "AI/ML Intern",
    org: "Tech Company",
    period: "2025 – Present",
    desc: "Working on machine learning models for automation and data processing pipelines.",
  },
  {
    type: "work",
    title: "Web Development Project",
    org: "Freelance",
    period: "2024 – 2025",
    desc: "Built responsive web applications using React and modern frontend technologies.",
  },
  {
    type: "edu",
    title: "B.Tech in Computer Science",
    org: "University",
    period: "2022 – 2026",
    desc: "Specializing in Artificial Intelligence and Machine Learning with strong academic performance.",
  },
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <p className="section-label">Journey</p>
          <h2 className="section-title">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease }}
              className={`relative flex items-start mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 w-2.5 h-2.5 rounded-full bg-primary -translate-x-[5px] mt-7 z-10" />

              <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:w-1/2" : "md:pl-12 md:w-1/2 md:ml-auto"}`}>
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-2 mb-2">
                    {exp.type === "work" ? (
                      <Briefcase className="w-3.5 h-3.5 text-primary/70" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5 text-primary/70" />
                    )}
                    <span className="text-[10px] text-primary/70 font-medium tracking-wide">{exp.period}</span>
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1 tracking-tight">{exp.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{exp.org}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{exp.desc}</p>
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
