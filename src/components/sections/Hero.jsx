import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-scroll";
import useTypewriter from "../../hooks/useTypewriter";

const Hero = () => {
  const roles = [
    "Full-Stack MERN Developer",
    "React Frontend Engineer",
    "Node.js Backend Developer",
  ];
  const typedText = useTypewriter(roles);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-700/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl opacity-10" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div>
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Huzaifa Bashir
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="min-h-10 sm:min-h-12 text-2xl sm:text-3xl text-slate-300 font-medium leading-tight flex items-center">
              {typedText}
              <span className="ml-1 text-slate-500 animate-pulse">|</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed"
          >
            I build reliable web applications with React, Node.js, Express, and
            MongoDB. My focus is clean architecture, responsive interfaces, and
            backend systems that are maintainable beyond the first release.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 border border-slate-600 hover:border-slate-500 transition-all duration-300 cursor-pointer group"
            >
              View Work
              <ExternalLink
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <Link
              to="contact-form"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 cursor-pointer group"
            >
              Contact Me
              <Mail
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 text-slate-400"
          >
            <span className="text-sm font-medium">Connect:</span>
            <a
              href="https://github.com/huzaifabashir03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/huzaifa-bashir-209b073a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <Link
              to="contact-form"
              smooth={true}
              duration={500}
              offset={-90}
              aria-label="Go to contact form"
              className="hover:text-slate-300 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={24} />
            </Link>
          </motion.div>
        </div>

        {/* Right Side - Profile Picture */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center"
        >
          <div className="relative w-full max-w-md">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-600 to-slate-700 rounded-full blur-3xl opacity-20 animate-pulse" />

            {/* Profile image container */}
            <div className="relative bg-linear-to-br from-slate-800 to-slate-900 p-2 rounded-full">
              <img
                src="/profile.png"
                alt="Huzaifa Bashir Profile"
                className="w-full h-auto rounded-full object-cover shadow-2xl"
              />

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
