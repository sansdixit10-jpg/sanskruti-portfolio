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

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Recognition</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 text-center hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-[var(--glow-primary)] transition-all">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{a.title}</h3>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-center mb-8">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="glass-card p-4 flex items-center gap-3 hover-lift"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
