import { motion } from "framer-motion";
import { Code2, Database, Zap, Rocket } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
            About
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional Background
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Description */}
          <motion.div variants={itemVariants} className="space-y-6 max-w-3xl">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Full-stack developer with focused experience in the MERN stack. I
              design and build web applications with clear data flow, practical
              API design, and interfaces that stay responsive across devices.
            </p>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              My work covers frontend architecture, backend services, database
              modeling, authentication, and deployment. I care about readable
              code, predictable user flows, and shipping features that can be
              improved without rewriting the whole system.
            </p>
          </motion.div>

          {/* Core Competencies */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="group p-5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <Code2
                    className="text-slate-400 mt-1 shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-white">Clean Code</p>
                    <p className="text-sm text-slate-400">
                      Maintainable & Scalable
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group p-5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <Database
                    className="text-slate-400 mt-1 shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-white">Full-Stack</p>
                    <p className="text-sm text-slate-400">
                      End-to-end solutions
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group p-5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <Zap
                    className="text-slate-400 mt-1 shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-white">Performance</p>
                    <p className="text-sm text-slate-400">
                      Optimized & Efficient
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group p-5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <Rocket
                    className="text-slate-400 mt-1 shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-white">Problem Solving</p>
                    <p className="text-sm text-slate-400">
                      Technical & Strategic
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
