import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Server, Cpu, Globe } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "JavaScript", level: 88 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 85 },
        { name: "PL/SQL", level: 75 },
      ],
    },
    {
      title: "Core CS",
      icon: Cpu,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "OOP", level: 90 },
        { name: "DSA", level: 88 },
        { name: "OS", level: 80 },
        { name: "DBMS", level: 85 },
        { name: "Networks", level: 75 },
      ],
    },
    {
      title: "Deployment & SEO",
      icon: Globe,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Hostinger hPanel", level: 85 },
        { name: "Custom Domain Setup", level: 90 },
        { name: "Shared Hosting", level: 80 },
        { name: "Website Deployment", level: 88 },
        { name: "Basic SEO", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative py-32 overflow-hidden

        bg-gradient-to-br
        from-white via-blue-50 to-purple-50
        dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[150px] -top-40 -left-40"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[150px] bottom-[-150px] right-[-150px]"
        animate={{ scale: [1.3, 1, 1.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center space-y-6 mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technical expertise for building, deploying, and maintaining
            scalable web applications.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* ================= SKILLS GRID ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
              }}
              className="
                relative group rounded-3xl p-6

                bg-white/80 dark:bg-white/5
                backdrop-blur-xl

                border border-gray-200 dark:border-white/10
                shadow-xl dark:shadow-none

                transition-all duration-300
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-25 blur-xl transition" />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                >
                  <category.icon size={22} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="relative space-y-4">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-800 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>

                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1.2,
                          delay: i * 0.1 + j * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= TOOLS ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="
    mt-28 p-10 rounded-3xl text-center

    bg-gradient-to-r
    from-blue-50 to-purple-50
    dark:from-white/5 dark:to-white/5

    border border-gray-200 dark:border-white/10
    backdrop-blur-xl
  "
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tools & Platforms
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {[
              {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              },
              {
                name: "GitHub",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
              {
                name: "GitHub Copilot",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
              {
                name: "GitHub Actions",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
              {
                name: "VS Code",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
              },
              {
                name: "Postman",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
              },
              {
                name: "Hoppscotch",
                icon: "https://i0.wp.com/oss.capital/wp-content/uploads/2025/02/hoppscotch%402x.png?fit=556%2C264&ssl=1",
              },
              {
                name: "Docker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              },
              {
                name: "Netlify",
                icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
              },
              {
                name: "Render",
                icon: "https://us1.discourse-cdn.com/flex016/uploads/render/original/2X/1/11352202c8503f736bea5efb59684f678d7c860c.svg",
              },
              {
                name: "Vercel",
                icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
              },
              {
                name: "Hostinger",
                icon: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Hostinger_Logotype.png",
              },
              {
                name: "Amazon Q",
                icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
              },
              {
                name: "Squoosh",
                icon: "https://web.dev/static/blog/squoosh-v2/image/thumbnail.jpg",
              },
            ].map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="
          group flex flex-col items-center justify-center gap-2
          px-4 py-4 rounded-2xl

          bg-white dark:bg-white/5
          border border-gray-200 dark:border-white/10

          shadow-md dark:shadow-none
          transition-all duration-300
        "
              >
                {/* Logo */}
                <img
                  src={tool.icon}
                  alt={tool.name}
                  loading="lazy"
                  className="
            w-10 h-10 object-contain
            group-hover:scale-110 transition
          "
                />

                {/* Name */}
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-300 text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
