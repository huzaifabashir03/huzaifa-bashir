import { motion } from "framer-motion";
import { Code2, Database, Boxes, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      skills: [
        "React.js",
        "JavaScript/ES6+",
        "Tailwind CSS",
        "HTML5/CSS3",
        "Component Architecture",
        "State Management",
      ],
    },
    {
      title: "Backend Development",
      icon: Boxes,
      skills: [
        "Node.js & Express.js",
        "RESTful API Design",
        "Authentication/Authorization",
        "Server Architecture",
        "Middleware Systems",
        "Performance Optimization",
      ],
    },
    {
      title: "Database & Data",
      icon: Database,
      skills: [
        "MongoDB",
        "Data Modeling",
        "Query Optimization",
        "Indexing Strategies",
        "Schema Design",
        "Data Validation",
      ],
    },
    {
      title: "Development Tools & Practices",
      icon: Wrench,
      skills: [
        "Git Version Control",
        "Development Tools",
        "API Testing",
        "Package Management",
        "Build Systems",
        "Best Practices",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-950">
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
            Core Competencies
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Technical Skills
          </h1>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full p-8 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/80 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-slate-700/50">
                      <IconComponent size={24} className="text-slate-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-slate-700/50 text-slate-300 text-sm font-medium rounded-lg border border-slate-600/50 group-hover:border-slate-500/50 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-300 max-w-2xl mx-auto">
            Comprehensive technical expertise developed through hands-on
            experience building production systems. These core competencies
            enable the delivery of scalable, maintainable solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
