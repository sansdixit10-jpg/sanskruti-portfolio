import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, Star, Users, Code2 } from "lucide-react";

const stats = [
  { icon: Code2, label: "Repositories", value: "15+" },
  { icon: Star, label: "Stars Earned", value: "50+" },
  { icon: GitBranch, label: "Contributions", value: "200+" },
  { icon: Users, label: "Followers", value: "30+" },
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const GitHubStatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <p className="section-label">Open Source</p>
          <h2 className="section-title">
            GitHub <span className="text-gradient">Stats</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease }}
              className="glass-card p-6 text-center hover-lift group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors duration-300">
                <s.icon className="w-4 h-4 text-primary" />
              </div>
              <p className="font-display text-xl font-bold text-gradient mb-1">{s.value}</p>
              <p className="text-[10px] text-muted-foreground tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubStatsSection;
