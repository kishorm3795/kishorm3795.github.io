import { motion } from "framer-motion";
import { GraduationCap, Code, Award, Gamepad2 } from "lucide-react";

const highlights = [
  { icon: GraduationCap, text: "B.Tech CSE (AI/ML) at PES University (Expected Dec 2028)" },
  { icon: Code, text: "Experience in full-stack development and AI/ML pipelines" },
  { icon: Award, text: "Certified in Generative AI and Vector Search by Oracle" },
  { icon: Gamepad2, text: "Active competitive programmer and designer" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-8" />

          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl text-lg">
            I'm a B.Tech CSE (AI/ML) student at PES University with hands-on experience in
            full-stack development, AI/ML pipelines, and UI/UX design. I've built 7+ projects
            using Python, React.js, FastAPI, and MongoDB. I'm Oracle-certified in Generative AI
            and Vector Search, and I'm seeking a summer internship in software development,
            AI/ML, or product design.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <item.icon size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-secondary-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
