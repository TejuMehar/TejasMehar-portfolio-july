import React from "react";
import { motion } from "framer-motion";
import { Code2, Heart, Coffee, Zap, Award, Users } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { number: "1.2+", label: "Years Experience", icon: Zap },
    { number: "15+", label: "Projects", icon: Code2 },
    { number: "100%", label: "Satisfaction", icon: Heart },
    { number: "∞", label: "Coffee", icon: Coffee },
  ];

  const highlights = [
    {
      icon: Award,
      title: "Technical Excellence",
      description: "Advanced MERN & Cloud development skills",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Professional internship collaboration experience",
    },
    {
      icon: Code2,
      title: "Full Stack",
      description: "Frontend, backend & database mastery",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative py-32 overflow-hidden

        /* Light Mode */
        bg-gradient-to-br
        from-white via-blue-50 to-purple-50
        text-gray-900

        /* Dark Mode */
        dark:from-slate-950 dark:via-slate-900 dark:to-black
        dark:text-white
      "
    >
      {/* ================= FLOATING GLOWS ================= */}

      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-500/20 rounded-full blur-[180px] top-[-200px] left-[-200px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-500/20 rounded-full blur-[180px] bottom-[-200px] right-[-200px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* ================= GRID OVERLAY ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.04)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center space-y-6 mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Me
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Building futuristic web experiences with passion, precision, and
            performance.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold">
              Crafting Scalable Digital Products
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-lg">
              I'm Tejas Mehar, a 4th-year IT Engineering student specializing in
              MERN Stack, DevOps, and AWS Cloud.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg">
              I design high-performance applications that solve real-world
              business problems and deliver measurable impact.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg">
              With 10+ real-world projects, I continuously push boundaries in
              modern web engineering.
            </p>

            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px #6366f1" }}
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
                shadow-xl transition
              "
            >
              Let’s Collaborate 🚀
            </motion.button>
          </motion.div>

          {/* ================= STATS ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ rotateX: 10, rotateY: -10, scale: 1.08 }}
                className="
                  group relative p-6 rounded-2xl

                  bg-white/80 dark:bg-white/5
                  backdrop-blur-xl

                  border border-gray-200 dark:border-white/10
                  shadow-lg dark:shadow-none

                  transition-all duration-300
                "
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-30 blur-xl transition" />

                <div className="relative flex flex-col items-center space-y-3 text-center">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    <stat.icon size={26} />
                  </div>

                  <div className="text-3xl font-bold">{stat.number}</div>

                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= MULTI IMAGE SHOWCASE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-28"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              My Work Environment
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Where creativity meets technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop",
                title: "Development Workspace",
                desc: "Focused coding and problem solving",
              },
              {
                img: "https://images.unsplash.com/photo-1760536928911-40831dacdbc3?q=80&w=1074&auto=format&fit=crop",
                title: "Professional Setup",
                desc: "Modern tools and productivity",
              },
              {
                img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1332&auto=format&fit=crop",
                title: "Tech Environment",
                desc: "Building scalable applications",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.05, rotateX: 6, rotateY: -6 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl bg-black/10 dark:bg-black/20"
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1.08 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-[260px] md:h-[300px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 text-white text-sm"
                >
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-gray-300 text-xs mt-1">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= HIGHLIGHTS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-28 grid md:grid-cols-3 gap-8"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.05 }}
              className="
                relative p-8 rounded-2xl

                bg-white/80 dark:bg-white/5
                backdrop-blur-xl

                border border-gray-200 dark:border-white/10
                shadow-lg dark:shadow-none

                transition
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 rounded-2xl transition" />

              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  <item.icon size={30} />
                </div>

                <h4 className="text-xl font-bold">{item.title}</h4>

                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= QUOTE ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="
            mt-28 p-10 md:p-14 rounded-3xl text-center

            bg-gradient-to-r
            from-blue-500/10 to-purple-500/10

            border border-gray-200 dark:border-white/10
            backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-bold mb-6">
            My Philosophy
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            “I believe great software blends creativity, engineering excellence,
            and continuous learning to shape the future.”
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
