import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

import resumePdf from "../assets/TejasResume (3).pdf";
import founder from "../assets/founder.jpeg";

const Hero: React.FC = () => {
  /* ================= TEXT ANIMATION ================= */

  const texts = useMemo(
    () => [
      "MERN Stack Developer",
      "Full Stack Web Developer",
      "Professional Web Developer",
      "Problem Solver",
      "Building Scalable Web Apps",
      "Passionate Software Engineer",
      "Clean Code Developer",
      "Tech Enthusiast",
    ],
    [],
  );

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, texts]);

  /* ================= DOWNLOAD ================= */

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Tejas_Mehar_Resume.pdf";
    link.click();
  };

  /* ================= UI ================= */

  return (
    <section
      id="hero"
      className="
        relative min-h-screen flex items-center justify-center
       overflow-x-hidden overflow-y-hidden
        py-24 sm:py-32

        bg-gradient-to-br
        from-gray-50 via-blue-50 to-purple-50
        dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* Glow Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-[150px] top-[-120px] left-[-120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-400/20 dark:bg-purple-500/20 rounded-full blur-[150px] bottom-[-120px] right-[-120px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Name */}

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug text-gray-900 dark:text-white">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Tejas Mehar
            </span>
          </h1>

          {/* Typing */}

          <h2 className="text-lg sm:text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 min-h-[2.5rem] sm:min-h-[3rem]">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          {/* About */}

          <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            MERN Stack Developer • AWS Learner • IT Engineering Student with
            experience in building 10+ real-world projects, scalable web
            applications, and modern business solutions.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                px-7 py-3 rounded-full
                bg-gradient-to-r from-blue-600 to-purple-600
                text-white font-semibold
                shadow-lg hover:shadow-blue-500/30
                transition
              "
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="
                px-7 py-3 rounded-full
                border border-gray-300 dark:border-white/20
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                text-gray-800 dark:text-white
                hover:border-blue-400
                shadow-sm hover:shadow-md
                transition
                flex items-center gap-2
              "
            >
              <Download size={18} />
              Resume
            </motion.button>
          </div>

          {/* Socials */}

          <div className="flex gap-5 pt-4">
            {[
              {
                icon: Github,
                url: "https://github.com/TejuMehar",
              },
              {
                icon: Linkedin,
                url: "https://www.linkedin.com/in/tejas-mehar/",
              },
              {
                icon: Mail,
                url: "#contact",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="
                  p-3 rounded-full
                  bg-gray-200 dark:bg-white/10
                  text-gray-800 dark:text-white
                  border border-gray-300 dark:border-white/20
                  shadow-md
                  hover:bg-blue-500 hover:text-white
                  dark:hover:bg-blue-500
                  transition-all duration-300
                "
              >
                <item.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Glass Card */}

          <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-90 md:h-90 rounded-full p4 sm:h-64 md:w-90 md:h-90 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 shadow-2xl">
            {/* Glass Layer */}
            <div
              className="
      w-full h-full rounded-full overflow-hidden
      backdrop-blur-xl
      bg-white/80 dark:bg-white/5
      border border-gray-200 dark:border-white/20
      shadow-lg dark:shadow-none
    "
            >
              <img
                src={founder}
                alt="Tejas Mehar"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Ring */}

          {/* <motion.div
            className="absolute -inset-6 rounded-full border border-blue-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          /> */}
        </motion.div>
      </div>
      {/* ================= CLEAR ANIMATED DIVIDER ================= */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-0 right-0 w-full flex justify-center"
      >
        <div className="relative w-full max-w-5xl px-4 flex items-center justify-center gap-5">
          {/* Left Line */}
          <motion.div
            className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-gray-700 dark:via-gray-300 dark:to-gray-200"
            animate={{ scaleX: [0.9, 1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "right" }}
          />

          {/* Center Dot */}
          <motion.div
            className="relative w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 shadow-xl"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 5px rgba(59,130,246,0.6)",
                "0 0 20px rgba(139,92,246,0.9)",
                "0 0 5px rgba(16,185,129,0.6)",
              ],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Pulse Ring */}
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-blue-400/50"
              animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.div>

          {/* Right Line */}
          <motion.div
            className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-gray-600 to-gray-700 dark:via-gray-300 dark:to-gray-200"
            animate={{ scaleX: [1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
