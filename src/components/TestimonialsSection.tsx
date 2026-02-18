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

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const TestimonialsSection = () => {
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
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease }}
              className="glass-card p-7 hover-lift"
            >
              <Quote className="w-6 h-6 text-primary/20 mb-5" />
              <p className="text-xs text-muted-foreground leading-[1.8] mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-xs tracking-tight">{t.name}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
