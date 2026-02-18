import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, Star, Users, Code2 } from "lucide-react";

const stats = [
  { icon: Code2, label: "Repositories", value: "15+" },
  { icon: Star, label: "Stars Earned", value: "50+" },
  { icon: GitBranch, label: "Contributions", value: "200+" },
  { icon: Users, label: "Followers", value: "30+" },
];

const GitHubStatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Open Source</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            GitHub <span className="text-gradient">Stats</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 text-center hover-lift group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display text-2xl font-bold text-gradient mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubStatsSection;
