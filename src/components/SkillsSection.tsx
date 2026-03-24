import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C", "SQL", "C#"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "FastAPI", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "AI / ML",
    skills: ["Transformers (HuggingFace)", "LLM APIs", "RAG Pipelines", "Vector Search", "Deep Learning"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Design",
    skills: ["UI/UX Design", "Social Media Design", "Visual Branding"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-heading font-semibold text-sm text-primary mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
