import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },

];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Floating animation for the navbar
  const floatingAnimation = {
    y: [0, -4, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none font-sans"
    >
      <motion.nav
        animate={floatingAnimation}
        className="pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.3)] w-full max-w-3xl"
      >
        {/* Logo */}
        <a href="#" className="font-bold text-xl text-white flex items-center gap-[2px] tracking-wide relative group">
          Kish
          <motion.span 
             initial={{ opacity: 0.8 }}
             whileHover={{ scale: 1.5, opacity: 1, boxShadow: "0px 0px 12px rgba(34,211,238,1)" }}
             className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 block"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                whileHover={{ scale: 1.05, textShadow: "0px 0px 12px rgba(255,255,255,0.7)" }}
                className="text-base font-medium text-white/70 hover:text-white transition-colors duration-300 block tracking-wide"
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Let's Connect Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-5 py-2 text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all tracking-wide"
        >
          Let's Connect
        </motion.a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 16, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full left-4 right-4 md:hidden bg-black/70 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <ul className="flex flex-col py-4 px-6 gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base font-medium text-white/70 hover:text-white hover:text-shadow-sm transition-all block py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10 mt-2">
                <a
                  href="#contact"
                  className="inline-block px-5 py-3 w-full text-center text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Let's Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
