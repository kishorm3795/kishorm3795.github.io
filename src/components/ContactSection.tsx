import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:kishorm3795@gmail.com", display: "kishorm3795@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/pavan-kishor-m", display: "pavan-kishor-m" },
  { icon: Github, label: "GitHub", href: "https://github.com/kishorm3795", display: "kishorm3795" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:kishorm3795@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Summer Internships 2025
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6 mx-auto" />
          <p className="text-white/60 max-w-md mx-auto text-base">
            Have an exciting project, internship opportunity, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-black/40 border border-white/10"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-xs font-medium text-white/60 tracking-wide uppercase">Your Name</label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Pavan Kishor"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs font-medium text-white/60 tracking-wide uppercase">Email Address</label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-500/60 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-medium text-white/60 tracking-wide uppercase">Message</label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Hi Pavan, I'd love to chat about..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-500/60 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              id="contact-submit"
              className="mt-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 active:scale-95 transition-all"
            >
              {sent ? (
                <><CheckCircle2 size={16} /> Sent! Check Your Email App</>
              ) : (
                <><Send size={15} /> Send Message</>
              )}
            </button>
          </motion.form>

          {/* Social Links Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-white/50 text-sm mb-2">Or reach me directly via:</p>
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-white/10 hover:border-cyan-500/40 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors shrink-0">
                  <s.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5">{s.label}</p>
                  <p className="text-sm font-medium text-white/90 group-hover:text-primary transition-colors">
                    {s.display}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
