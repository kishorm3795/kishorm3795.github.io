import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-28">
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
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
            Full-Stack Developer &{" "}
            <span className="text-gradient font-semibold">AI/ML Enthusiast</span>
          </p>
          <p className="text-muted-foreground mb-10 max-w-md leading-relaxed">
            B.Tech CSE (AI/ML) student at PES University building intelligent applications 
            with modern web technologies and machine learning pipelines.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
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

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
