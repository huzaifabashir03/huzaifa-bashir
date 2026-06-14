import { motion } from "framer-motion";

const Timeline = () => {
  const timelineSteps = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description:
        "Established strong foundations in HTML, CSS, and JavaScript. Developed understanding of core web technologies and browser APIs.",
    },
    {
      id: 2,
      title: "Frontend Development Expertise",
      description:
        "Specialized in responsive design, DOM manipulation, and modern CSS frameworks. Built pixel-perfect UIs with focus on user experience.",
    },
    {
      id: 3,
      title: "React & Modern JavaScript",
      description:
        "Mastered component-based architecture, state management, hooks, and React best practices. Developed complex single-page applications.",
    },
    {
      id: 4,
      title: "Full-Stack Development",
      description:
        "Designed and built complete MERN stack applications with authentication, database optimization, and real-time features.",
    },
    {
      id: 5,
      title: "System Design & Architecture",
      description:
        "Advanced knowledge in scalable architecture, API design, performance optimization, caching strategies, and deployment patterns.",
    },
    {
      id: 6,
      title: "Advanced Integration & Innovation",
      description:
        "Explored emerging technologies including machine learning integration and advanced optimization techniques for modern web applications.",
    },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="timeline" className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Professional Timeline
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Learning & Development Path
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            A structured progression through key milestones in web development
            expertise and professional growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-linear-to-b from-slate-500 via-slate-600 to-slate-700" />

          {/* Timeline Items */}
          <div className="space-y-8 pl-16">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="absolute -left-14 top-1 w-8 h-8 rounded-full bg-slate-700 border-3 border-slate-950 flex items-center justify-center text-white font-semibold text-xs transition-all duration-300 z-10"
                >
                  {index + 1}
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgb(71, 85, 105)" }}
                  className="p-6 bg-slate-800/30 border border-slate-700/40 rounded-lg hover:border-slate-600/80 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-slate-700/50"
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            Continuous Professional Growth
          </h3>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            I maintain a commitment to professional development through
            continuous learning, exploration of emerging technologies, and
            adherence to industry best practices. Each milestone represents not
            just acquired knowledge, but practical experience applied in
            production environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
