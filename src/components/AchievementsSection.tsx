import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Award, Code2, ExternalLink } from "lucide-react";

interface SubItem {
  title: string;
  img?: string;
}

interface AchievementCategory {
  organization: string;
  date?: string;
  description?: string;
  icon: any;
  items: SubItem[];
}

interface SelectedCert {
  img: string;
  title: string;
  organization: string;
}

const achievementGroups: AchievementCategory[] = [
  {
    organization: "Oracle Academy",
    date: "2025",
    description: "Industry-recognized certifications demonstrating expertise in Oracle Cloud Infrastructure, AI Vector Search, and Generative AI technologies.",
    icon: Award,
    items: [
      { title: "OCI 2025 — Generative AI Professional", img: "/certificates/Oracle cloud Generative AI.jpeg" },
      { title: "Oracle AI Vector Search Certified Professional", img: "/certificates/Oracle AI Vector.jpeg" },
      { title: "OCI 2025 — AI Foundations Associate", img: "/certificates/Oracle cloud AI.jpeg" },
    ]
  },
  {
    organization: "HackerRank",
    description: "Verified proficiency in programming languages and problem-solving through intensive algorithmic assessments.",
    icon: Code2,
    items: [
      { title: "Python (Basic)", img: "/certificates/Python.png" },
      { title: "SQL (Basic)", img: "/certificates/SQL Basic.png" },
      { title: "C (Basic)", img: "/certificates/C Basic.png" },
      { title: "Problem Solving (Basic)", img: "/certificates/Problem Solving.png" },
    ]
  },
  {
    organization: "Extracurricular & Sports",
    description: "Active involvement in competitive programming and sports, demonstrating a balance of technical problem-solving and physical teamwork.",
    icon: Trophy,
    items: [
      { title: "Competitive Programming — Active contest participant, CodeChef PESUECC" },
      { title: "Sports — Basketball & Badminton" },
    ]
  }
];

const AchievementsSection = () => {
  const [selectedCert, setSelectedCert] = useState<SelectedCert | null>(null);

  const openCert = (item: SubItem, group: AchievementCategory) => {
    if (item.img) {
      setSelectedCert({ img: item.img, title: item.title, organization: group.organization });
    }
  };

  return (
    <section id="achievements" className="section-padding py-24 border-t border-white/5 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-16 text-center"
        >
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-16">
          {achievementGroups.map((group, i) => (
            <motion.div
              key={group.organization}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="relative pl-8 md:pl-10 border-l-[2px] border-cyan-400 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[7px] top-0 bg-background py-1">
                 <group.icon size={12} className="text-cyan-400" />
              </div>

              {/* Group Header */}
              <div className="flex flex-col mb-4 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <group.icon size={22} className="text-cyan-400" />
                  <h3 className="font-mono font-bold text-xl md:text-2xl text-white/90">
                    {group.organization}
                  </h3>
                </div>

                {group.date && (
                  <div className="font-mono text-sm mb-2">
                    <span className="text-cyan-400">Date:</span> <span className="text-white/60">{group.date}</span>
                  </div>
                )}
              </div>

              {/* Description Body */}
              <div className="pb-2">
                <div className="h-px bg-white/10 max-w-2xl mb-5" />
                <p className="font-mono text-white/60 text-sm leading-relaxed max-w-2xl mb-6">
                  {group.description}
                </p>

                {/* List of Certificates / Items in Group */}
                <ul className="space-y-5 font-mono text-sm">
                  {group.items.map((item) => (
                    <li key={item.title} className="flex flex-col gap-2">
                      <div className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-[2px]">›</span>
                        <span className="text-white/80">{item.title}</span>
                      </div>
                      
                      {item.img && (
                        <div className="pl-6">
                          <button 
                            onClick={() => openCert(item, group)}
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                          >
                            <ExternalLink size={14} className="text-cyan-400 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                            [View Certificate]
                          </button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox for viewing certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full bg-background border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)]"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/50 backdrop-blur-md">
                <div>
                  <h3 className="text-xl font-mono font-bold text-white/90">{selectedCert.title}</h3>
                  <span className="text-sm font-mono text-cyan-400">{selectedCert.organization}</span>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-4 md:p-8 flex justify-center max-h-[80vh] overflow-y-auto">
                {selectedCert.img && (
                  <img 
                    src={selectedCert.img} 
                    alt={selectedCert.title} 
                    className="max-w-full h-auto max-h-[70vh] rounded-md shadow-2xl object-contain border border-white/5"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;
