import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Projects = () => {
  const techStack = [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "EmailJS",
    "Responsive Design",
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Featured Project
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Portfolio Website
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            A polished personal portfolio built to present my skills,
            background, and contact workflow in a clean, responsive experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          whileHover={{ y: -8 }}
          className="group"
        >
          <div className="h-full bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600/80 transition-all duration-300">
            <div className="p-8 lg:p-10">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Huzaifa Bashir Portfolio
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  This portfolio is designed as a focused professional profile:
                  a mature hero section, skill overview, development timeline,
                  and working contact form powered by EmailJS. It is responsive,
                  animated with restraint, and structured for future project
                  additions when they are ready.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <ExternalLink size={18} />
                  <span>View Portfolio</span>
                </Link>
                <Link
                  to="contact-form"
                  smooth={true}
                  duration={500}
                  offset={-90}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-700/50 hover:bg-slate-600 text-slate-200 font-semibold rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-slate-500/50 cursor-pointer"
                >
                  <Mail size={18} />
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
