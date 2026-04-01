import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const stats = [
  { value: 7, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "", label: "Oracle Certifications" },
  { value: 4, suffix: "+", label: "HackerRank Badges" },
  { value: 2, suffix: "", label: "Campus Roles" },
];

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(Math.round((target * current) / steps));
      if (current >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

const StatCard = ({ value, suffix, label, delay, triggerCount }: { value: number; suffix: string; label: string; delay: number; triggerCount: boolean }) => {
  const count = useCountUp(value, 1200, triggerCount);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center p-4 rounded-xl bg-black/30 border border-white/10 hover:border-cyan-500/40 transition-all text-center"
    >
      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        {count}{suffix}
      </span>
      <span className="text-xs text-white/60 mt-1 tracking-wide">{label}</span>
    </motion.div>
  );
};

const AboutSection = () => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
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

          <p className="text-white/80 leading-relaxed mb-5 max-w-2xl text-lg">
            I'm a B.Tech CSE (AI/ML) student at PES University with hands-on experience in
            frontend development, AI/ML pipelines, and UI/UX design. I've built 7+ projects
            using Python, React.js, FastAPI, and MongoDB. I'm Oracle-certified in Generative AI
            and Vector Search, and I'm seeking a summer internship in software development,
            AI/ML, or product design.
          </p>
          <p className="text-white/60 leading-relaxed mb-10 max-w-2xl text-base">
            Outside of coding, I'm passionate about visual design and contribute to my university's
            CodeChef chapter and Shunya club as a designer & competitive programmer. I believe the
            best software is both powerful <em>and</em> beautiful.
          </p>

          {/* Animated stat counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} delay={i * 0.1} triggerCount={triggered} />
            ))}
          </div>

          <a
            href="https://linkedin.com/in/pavan-kishor-m"
            target="_blank"
            rel="noopener noreferrer"
            id="about-download-resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-medium text-sm hover:bg-primary/10 transition-colors"
          >
            <Download size={15} />
            View Resume / LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
