import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <a href="#" className="font-bold text-lg text-white flex items-center gap-[3px] tracking-wide">
            Kish<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 block" />
          </a>
          <p className="text-xs text-muted-foreground">
            © MIT {year} — Designed &amp; Developed by Pavan Kishor M
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:kishorm3795@gmail.com"
            aria-label="Email"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/kishorm3795"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/pavan-kishor-m"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-xs text-white/50 hover:text-primary transition-colors group"
          aria-label="Back to top"
        >
          Back to top
          <span className="w-7 h-7 rounded-lg border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
