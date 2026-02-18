import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Sanskruti delivered an exceptional ML model that exceeded our expectations. Her attention to detail and technical expertise are remarkable.",
    name: "Prof. Sharma",
    role: "Faculty Advisor",
  },
  {
    text: "A brilliant developer who combines strong technical skills with creative problem-solving. Highly recommended for any AI/ML project.",
    name: "Team Lead",
    role: "Hackathon Mentor",
  },
  {
    text: "Her portfolio projects demonstrate real-world applicability and deep understanding of data science principles.",
    name: "Industry Expert",
    role: "Guest Lecturer",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card p-6 hover-lift"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
