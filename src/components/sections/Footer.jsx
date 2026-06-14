import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      name: "GitHub",
      url: "https://github.com/huzaifabashir03",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/huzaifa-bashir-209b073a0/",
      icon: Linkedin,
    },
    {
      name: "Email",
      section: "contact-form",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-slate-700 border border-slate-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">HB</span>
              </div>
              <span className="text-white font-semibold">Huzaifa Bashir</span>
            </div>
            <p className="text-slate-400 text-sm">
              Full-stack developer building reliable MERN applications for the
              web.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#home"
                className="text-slate-400 hover:text-slate-300 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-slate-400 hover:text-slate-300 transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-400 hover:text-slate-300 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 md:justify-end">
              {footerLinks.map((link) => {
                const IconComponent = link.icon;

                return link.section ? (
                  <Link
                    key={link.name}
                    to={link.section}
                    smooth={true}
                    duration={500}
                    offset={-90}
                    className="text-slate-400 hover:text-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    title={link.name}
                    aria-label="Go to contact form"
                  >
                    <IconComponent size={20} />
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-300 transition-all duration-300 hover:-translate-y-1"
                    title={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-linear-to-r from-transparent via-slate-700 to-transparent my-8" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-sm"
        >
          <p>&copy; {currentYear} Huzaifa Bashir. All rights reserved.</p>
          <p>
            Built with <span className="text-slate-300">React</span>,{" "}
            <span className="text-slate-300">Tailwind CSS</span>, and{" "}
            <span className="text-slate-300">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
