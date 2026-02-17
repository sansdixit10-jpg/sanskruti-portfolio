import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Automated Marksheet Data Entry System",
    description:
      "A smart automation tool that digitizes handwritten and printed marksheets, extracting student data and populating databases with high accuracy — eliminating manual entry errors.",
    tech: ["Python", "OpenCV", "Pandas", "Excel Automation"],
  },
  {
    title: "Iris Classification ANN Model",
    description:
      "An Artificial Neural Network model trained on the classic Iris dataset, achieving high classification accuracy. Demonstrates core deep learning principles with clean architecture.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "NumPy"],
  },
  {
    title: "Market Basket Analysis System",
    description:
      "A data mining solution using association rule learning to uncover purchase patterns, helping businesses optimize product placement and cross-selling strategies.",
    tech: ["Python", "Apriori Algorithm", "Pandas", "Matplotlib"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card p-6 flex flex-col hover-lift group"
            >
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
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline self-start">
                View Project <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
