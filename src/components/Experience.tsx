import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Active Software Consultancy and Research Pvt. Ltd.",
      period: "Feb 2026 - Present",
      location: "Remote",
      description:
        "Currently working as a Software Development Intern, contributing to real-world projects, developing scalable applications, and collaborating with senior engineers.",
      achievements: [
        "Developing production-ready web applications",
        "Working on live client projects",
        "Improving performance and system reliability",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    },

    {
      title: "Freelance Full Stack Developer",
      company: "WebCultivate Software Solutions",
      period: "Nov 2025 - Present",
      location: "Remote",
      description:
        "Providing freelance web development services, building business websites, portfolio platforms, and custom web applications for clients.",
      achievements: [
        "Delivered multiple client projects independently",
        "Handled deployment, hosting, and maintenance",
        "Integrated SEO and performance optimization",
      ],
      technologies: ["MERN Stack", "Next.js", "Tailwind CSS", "AWS"],
    },

    {
      title: "MERN Stack Developer Intern",
      company: "Bizonance India Pvt. Ltd.",
      period: "March 2025 - May 2025",
      location: "Onsite, Amravati, Maharashtra",
      description:
        "Contributed to internal projects and collaborated with senior developers in a MERN-based environment.",
      achievements: [
        "Built and refined core features",
        "Improved backend workflows",
        "Worked on scalable cloud architecture",
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },

    {
      title: "Web Development Intern",
      company: "Octanet Technologies Pvt. Ltd.",
      period: "Dec 2024 - Jun 2025",
      location: "Amravati, Maharashtra",
      description:
        "Designed and developed responsive websites using modern frontend practices.",
      achievements: [
        "Created responsive layouts",
        "Improved UI/UX",
        "Delivered client projects",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="experience"
      className="
        relative py-32 overflow-hidden

        bg-gradient-to-br
        from-white via-blue-50 to-purple-50
        dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >
      {/* Glow Background */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[180px] top-[-150px] left-[-150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[180px] bottom-[-150px] right-[-150px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in building scalable and impactful solutions
          </p>

          <div className="mt-6 w-28 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* ================= EXPERIENCE CARDS ================= */}

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="
                  relative p-8 md:p-10 rounded-3xl

                  bg-white/80 dark:bg-white/5
                  backdrop-blur-xl

                  border border-gray-200 dark:border-white/10

                  shadow-xl
                  transition-all duration-300
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 blur-xl transition" />

                <div className="relative grid md:grid-cols-3 gap-8">
                  {/* LEFT */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Briefcase className="text-blue-600 dark:text-blue-400" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>

                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.period}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE */}
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                        <Award size={16} />
                        Key Achievements
                      </h4>

                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="
                            px-3 py-1 rounded-full text-xs font-medium

                            bg-blue-100 dark:bg-blue-900/30
                            text-blue-700 dark:text-blue-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="
            mt-32 text-center p-12 rounded-3xl

            bg-gradient-to-r
            from-blue-500/10 to-purple-500/10

            border border-gray-200 dark:border-white/10
            backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I’m open to exciting opportunities and collaborations. Let’s build
            something impactful.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-8 py-3 rounded-full

              bg-gradient-to-r from-blue-600 to-purple-600
              text-white font-semibold

              shadow-lg hover:shadow-xl
              transition
            "
          >
            Contact Me 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
