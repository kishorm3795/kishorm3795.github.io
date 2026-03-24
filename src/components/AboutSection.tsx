import { motion } from "framer-motion";

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
            frontend development, AI/ML pipelines, and UI/UX design. I've built 7+ projects
            using Python, React.js, FastAPI, and MongoDB. I'm Oracle-certified in Generative AI
            and Vector Search, and I'm seeking a summer internship in software development,
            AI/ML, or product design.
          </p>


        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
