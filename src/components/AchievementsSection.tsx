import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, GitBranch } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Hackathon Finalist", desc: "Top 10 in university-level hackathon" },
  { icon: Award, title: "Academic Excellence", desc: "Consistent top performer in CS courses" },
  { icon: Star, title: "Open Source Contributor", desc: "Contributed to ML and data science projects" },
  { icon: GitBranch, title: "10+ Projects", desc: "Built diverse portfolio across AI and web" },
];

const certifications = [
  "Machine Learning — Coursera",
  "Python for Data Science — edX",
  "Deep Learning Specialization — Coursera",
  "React Development — Udemy",
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <p className="section-label">Recognition</p>
          <h2 className="section-title">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease }}
              className="glass-card p-6 text-center hover-lift group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                <a.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xs mb-1 tracking-tight">{a.title}</h3>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="max-w-xl mx-auto"
        >
          <h3 className="font-display text-lg font-semibold text-center mb-8 tracking-tight">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease }}
                className="glass-card p-4 flex items-center gap-3 hover-lift"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-xs font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
