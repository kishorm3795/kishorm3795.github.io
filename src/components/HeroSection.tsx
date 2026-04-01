import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Frontend Developer",
  "AI/ML Enthusiast",
  "UI/UX Designer",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-28 relative">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Pavan Kishor M
          </h1>

          {/* Animated rotating role */}
          <div className="h-10 mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl text-white/90"
              >
                <span className="text-gradient font-semibold">{roles[roleIndex]}</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-white/70 mb-10 max-w-md leading-relaxed text-base md:text-lg">
            B.Tech CSE (AI/ML) student at PES University building intelligent
            applications with modern web technologies and machine learning pipelines.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              id="hero-view-projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="https://linkedin.com/in/pavan-kishor-m"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-download-resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-medium text-sm hover:bg-primary/10 transition-colors"
            >
              <Download size={15} />
              Resume
            </a>
            <a
              href="#contact"
              id="hero-contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
              <img
                src={profilePhoto}
                alt="Pavan Kishor M"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 inset-0 rounded-full bg-primary/10 blur-3xl animate-float" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-primary transition-colors cursor-pointer flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
