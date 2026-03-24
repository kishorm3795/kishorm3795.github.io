import { motion } from "framer-motion";
import { ExternalLink, Github, Clock, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Nano-PESU",
    description:
      "University-centric AI learning agent using RAG pipeline. Handles asset upload → vectorization → vector DB storage with LLM-powered contextual query resolution. Maps AI-generated answers to relevant lecture slides and textbook sections via clickable hyperlinks.",
    tech: ["Python", "Transformers", "FastAPI", "React.js", "Vector DB"],
    status: "In Progress",
    github: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "G-M8",
    description:
      "Real-time collaboration platform for teachers and students: team management, live chat, and project tracking.",
    tech: ["React.js", "JavaScript", "MongoDB"],
    status: "Completed",
    github: "#",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Guide-AI",
    description:
      "AI tool recommender that suggests the best AI tool for user workflows — research, editing, coding, voice, and more.",
    tech: ["React.js", "JavaScript", "MongoDB"],
    status: "Completed",
    github: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "CodeBuddy",
    description:
      "AI-powered coding assistant with collaborative real-time code editing and curated learning resources.",
    tech: ["React.js", "JavaScript", "MongoDB"],
    status: "In Progress",
    github: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
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
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col p-5 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden"
            >
              {/* Top ambient glow on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-700" />
              
              {/* GIF Image Container */}
              <div className="relative w-full h-56 md:h-64 mb-6 rounded-xl overflow-hidden border border-white/5 bg-black/50 group-hover:border-white/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Status Badge inside image */}
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-white/80 border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors duration-300 group-hover:glow-text"
                >
                  <Github size={16} />
                  {project.title === "Nano-PESU" ? "Reference Project" : "View Repository"}
                  <ExternalLink size={14} className="ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
