import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Code2, ExternalLink, X } from "lucide-react";

interface Cert {
  title: string;
  img: string;
}

const oracleCerts: Cert[] = [
  { title: "OCI 2025 — Generative AI Professional", img: "/certificates/Oracle cloud Generative AI.jpeg" },
  { title: "Oracle AI Vector Search Certified Professional", img: "/certificates/Oracle AI Vector.jpeg" },
  { title: "OCI 2025 — AI Foundations Associate", img: "/certificates/Oracle cloud AI.jpeg" },
];

const hackerRankCerts: Cert[] = [
  { title: "Python (Basic)", img: "/certificates/Python.png" },
  { title: "SQL (Basic)", img: "/certificates/SQL Basic.png" },
  { title: "C (Basic)", img: "/certificates/C Basic.png" },
  { title: "Problem Solving (Basic)", img: "/certificates/Problem Solving.png" },
];

interface SelectedCert {
  img: string;
  title: string;
}

const AchievementsSection = () => {
  const [selectedCert, setSelectedCert] = useState<SelectedCert | null>(null);

  const openCert = (cert: Cert) => {
    setSelectedCert({ img: cert.img, title: cert.title });
  };

const renderCertGrid = (certs: Cert[], icon: React.ReactNode, sectionTitle: string, subtitle: string, dateLabel: string) => (
    <div className="p-5 rounded-xl bg-black/40 border border-white/10 hover:border-cyan-400/30 transition-all">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {icon}
        <h3 className="font-sans font-semibold text-xl text-white">{sectionTitle}</h3>
      </div>
      <p className="text-base text-cyan-400 font-medium mb-3">{subtitle}</p>
      <p className="text-sm text-white/80 mb-4">{dateLabel}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((cert, j) => (
          <div key={j} className="flex flex-col gap-2 p-3 border border-white/10 rounded-lg hover:border-cyan-400/50 transition-all bg-black/20 hover:bg-black/30">
            <span className="text-sm text-white/90">
              <span className="text-cyan-400 mr-2">•</span>
              {cert.title}
            </span>
              <button 
                onClick={() => openCert(cert)}
                className="flex items-center gap-2 text-sm text-cyan-400 hover:text-white transition-colors group self-start font-medium"
              >
              <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              View Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section id="achievements" className="section-padding bg-card/40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-2">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mb-10" />
          </motion.div>

          <div className="space-y-6">
            {/* Oracle Timeline Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 border-l-2 border-white/10 hover:border-cyan-400/50 transition-colors"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-md" />
{renderCertGrid(oracleCerts, <Award size={20} className="text-cyan-400" /> as JSX.Element, "Oracle Academy Certifications", "Oracle Academy", "2025 · Professional Certifications")}
            </motion.div>

            {/* HackerRank Timeline Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative pl-8 border-l-2 border-white/10 hover:border-cyan-400/50 transition-colors"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-md" />
{renderCertGrid(hackerRankCerts, <Code2 size={20} className="text-cyan-400" /> as JSX.Element, "HackerRank Certifications", "HackerRank", "Basic Skills")}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
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
              className="relative max-w-4xl w-full bg-black/80 border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white flex-1">{selectedCert.title}</h3>
                  <button 
                    onClick={() => window.open(selectedCert.img, '_blank', 'noopener,noreferrer')}
                    className="flex items-center gap-1 px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 hover:text-white text-sm rounded-lg transition-all font-medium"
                    title="Open in new tab or download"
                  >
                    <ExternalLink size={16} />
                    Open
                  </button>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors ml-1"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6 max-h-[70vh] overflow-auto">
                <img 
                  src={selectedCert.img} 
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg border border-white/10 mx-auto cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => window.open(selectedCert.img, '_blank')}
                  onError={(e) => console.error('Certificate image failed to load:', selectedCert.img, e)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AchievementsSection;
