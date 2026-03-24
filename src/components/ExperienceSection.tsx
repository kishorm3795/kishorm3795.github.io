import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Competitive Programmer & Designer",
    org: "CodeChef PESUECC",
    period: "Aug 2025 – Present",
    type: "PES University · On-Campus",
    bullets: [
      "Curate and solve competitive programming problems; design event creatives and branding for contests and workshops.",
      "Collaborate with a cross-functional team to grow the chapter's technical and visual presence on campus.",
    ],
  },
  {
    role: "Designer",
    org: "Shunya",
    period: "Oct 2025 – Present",
    type: "PES University · On-Campus",
    bullets: [
      "Produce social media content and visual design assets; developed consistent design systems for brand identity.",
      "Contributed to event marketing campaigns, increasing audience engagement across digital platforms.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Briefcase size={14} className="text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">{exp.role}</h3>
                </div>
                <p className="text-sm text-primary font-medium">{exp.org}</p>
                <p className="text-xs text-muted-foreground mb-3">
                  {exp.period} · {exp.type}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
