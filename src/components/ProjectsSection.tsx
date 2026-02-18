import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "Automated Marksheet Data Entry System",
    description: "A smart automation tool that digitizes handwritten and printed marksheets, extracting student data with high accuracy.",
    longDesc: "This system uses computer vision techniques to detect and extract text from scanned marksheets. It processes multiple formats, handles noise and distortions, and outputs structured data into Excel/database. Achieved 95%+ accuracy on test datasets.",
    tech: ["Python", "OpenCV", "Pandas", "Excel Automation"],
    category: "Data",
  },
  {
    title: "Iris Classification ANN Model",
    description: "An Artificial Neural Network model trained on the classic Iris dataset, achieving high classification accuracy.",
    longDesc: "Built a multi-layer perceptron with TensorFlow/Keras. Implemented data preprocessing, feature scaling, model training with cross-validation, and hyperparameter tuning. Achieved 97% accuracy on test set with visualized decision boundaries.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "NumPy"],
    category: "AI",
  },
  {
    title: "Market Basket Analysis System",
    description: "A data mining solution using association rule learning to uncover purchase patterns for business optimization.",
    longDesc: "Implemented the Apriori algorithm to discover frequent itemsets and strong association rules from transactional data. Visualized results with interactive charts. Provided actionable business insights for retail optimization.",
    tech: ["Python", "Apriori Algorithm", "Pandas", "Matplotlib"],
    category: "Data",
  },
];

const filters = ["All", "AI", "Web", "Data"];
const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="flex justify-center gap-2 mb-14"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease }}
                className="glass-card p-6 flex flex-col hover-lift group cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full h-36 rounded-lg bg-secondary mb-5 flex items-center justify-center overflow-hidden">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="font-display text-lg font-bold text-primary/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-base font-semibold mb-2 tracking-tight leading-snug">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Github className="w-3 h-3" /> GitHub
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
                    <ExternalLink className="w-3 h-3" /> Live Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="glass-card p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <h3 className="font-display text-xl font-bold mb-4 tracking-tight pr-8">{selectedProject.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.8] mb-6">{selectedProject.longDesc}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-2">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href="#" className="px-5 py-2.5 rounded-full glass text-xs font-medium flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
