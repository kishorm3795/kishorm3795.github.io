import { motion } from "framer-motion";
import { ExternalLink, Github, Clock, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Nano-PESU",
    description:
      "AI-powered university learning dashboard built for PES University students. Features a RAG-powered chat interface that answers academic queries and links directly to lecture slides and textbook sections—making studying smarter and faster.",
    tech: ["React.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "TypeScript"],
    status: "In Progress",
    image: "/projects/nano-pesu.png",
  },
  {
    title: "G-M8",
    description:
      "Real-time team collaboration platform with a dynamic kanban board, live user presence indicators, and an integrated team chat. Designed for project teams who need seamless coordination in one unified workspace.",
    tech: ["React.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    status: "Completed",
    github: "https://github.com/kishorm3795/G-M8",
    image: "/projects/gm8.png",
  },
  {
    title: "Guide-AI",
    description:
      "Smart AI tool recommender that matches users to the best AI solutions for their workflow — from research and coding to voice, writing, and image generation. Cuts through AI tool overload with personalized suggestions from 50+ tools.",
    tech: ["React.js", "JavaScript", "MongoDB"],
    status: "Completed",
    github: "https://github.com/kishorm3795/Guide-AI",
    image: "/projects/guide-ai.png",
  },
  {
    title: "CodeBuddy",
    description:
      "AI-powered coding assistant with a split-screen interface — real-time collaborative code editing on the left, an AI chat panel with context-aware hints and fix suggestions on the right. Paired with curated learning resources for skill-building.",
    tech: ["React.js", "JavaScript", "MongoDB"],
    status: "In Progress",
    github: "https://github.com/kishorm3795/codebuddy",
    image: "/projects/codebuddy.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-16 text-center"
        >
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 px-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col p-5 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] relative overflow-hidden"
            >
              {/* Top ambient glow on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-700" />
              
              {/* Project Image */}
              <div className="relative w-full h-56 md:h-64 mb-6 rounded-xl overflow-hidden border border-white/5 bg-black/50 group-hover:border-white/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10 pointer-events-none" />
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  {project.status === "In Progress" ? (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-black/60 backdrop-blur-md text-cyan-400 border border-cyan-400/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                      <Clock size={12} className="animate-pulse" /> In Progress
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-400/30 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                      <CheckCircle2 size={12} /> Completed
                    </span>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-sans font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3 tracking-wide">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-white/80 border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github size={16} />
                      GitHub
                      <ExternalLink size={13} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
