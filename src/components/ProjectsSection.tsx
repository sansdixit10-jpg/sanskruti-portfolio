import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "Automated Marksheet Data Entry System",
    description: "A smart automation tool that digitizes handwritten and printed marksheets, extracting student data and populating databases with high accuracy — eliminating manual entry errors.",
    longDesc: "This system uses computer vision techniques to detect and extract text from scanned marksheets. It processes multiple formats, handles noise and distortions, and outputs structured data into Excel/database. Achieved 95%+ accuracy on test datasets.",
    tech: ["Python", "OpenCV", "Pandas", "Excel Automation"],
    category: "Data",
  },
  {
    title: "Iris Classification ANN Model",
    description: "An Artificial Neural Network model trained on the classic Iris dataset, achieving high classification accuracy with clean architecture.",
    longDesc: "Built a multi-layer perceptron with TensorFlow/Keras. Implemented data preprocessing, feature scaling, model training with cross-validation, and hyperparameter tuning. Achieved 97% accuracy on test set with visualized decision boundaries.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "NumPy"],
    category: "AI",
  },
  {
    title: "Market Basket Analysis System",
    description: "A data mining solution using association rule learning to uncover purchase patterns, helping businesses optimize product placement and cross-selling.",
    longDesc: "Implemented the Apriori algorithm to discover frequent itemsets and strong association rules from transactional data. Visualized results with interactive charts. Provided actionable business insights for retail optimization.",
    tech: ["Python", "Apriori Algorithm", "Pandas", "Matplotlib"],
    category: "Data",
  },
];

const filters = ["All", "AI", "Web", "Data"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card p-6 flex flex-col hover-lift group cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                  style={{ background: "hsla(var(--primary), 0.1)" }}>
                  <span className="text-sm font-medium text-primary">Click for details</span>
                </div>

                <div className="w-full h-40 rounded-lg bg-secondary mb-6 flex items-center justify-center overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="font-display text-xl font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
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
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="font-display text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{selectedProject.longDesc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="#" className="px-6 py-2.5 rounded-full glass text-sm font-medium flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> Live Demo
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
