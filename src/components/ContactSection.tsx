import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:kishorm3795@gmail.com", display: "kishorm3795@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/pavan-kishor-m", display: "pavan-kishor-m" },
  { icon: Github, label: "GitHub", href: "https://github.com/kishorm3795", display: "kishorm3795" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/40">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-6 mx-auto" />
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            I'm currently looking for summer internship opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
            >
              <s.icon size={18} className="text-primary shrink-0" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {s.display}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
