import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import "./styles/animations.css";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Scroll animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
      style={{
        WebkitOverflowScrolling: 'touch',
        overflowX: 'hidden'
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Tejas Mehar
            </motion.div>

            {/* Desktop Navigation */}
            <Navigation
              activeSection={activeSection}
              className="hidden md:flex"
            />

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <Navigation
                activeSection={activeSection}
                className="flex flex-col p-4 space-y-2"
                mobile
                onItemClick={() => setIsMenuOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.section id="hero" variants={itemVariants}>
            <Hero />
          </motion.section>

          <motion.section
            id="about"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <About />
          </motion.section>

          <motion.section
            id="experience"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <Experience />
          </motion.section>

          <motion.section
            id="skills"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <Skills />
          </motion.section>

          <motion.section
            id="projects"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <Projects />
          </motion.section>

          <motion.section
            id="contact"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <Contact />
          </motion.section>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gray-50 dark:bg-gray-900 pt-16 pb-8 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="relative max-w-7xl mx-auto px-6"
        >
          {/* ================= TOP GRID ================= */}

          <div className="grid md:grid-cols-4 gap-10 mb-14">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tejas Mehar<span className="text-blue-600">.</span>
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Full Stack Developer focused on building modern, scalable, and
                high-performance digital solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>

              <ul className="space-y-2 text-sm">
                {["Home", "About", "Projects", "Skills", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Services
              </h4>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Web Development</li>
                <li>MERN Applications</li>
                <li>SEO Optimization</li>
                <li>Hosting & Domain Setup</li>
                <li>UI/UX Design</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Contact
              </h4>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>📧 tejasmhear7@gmail.com</li>
                <li>📞 +91 7447746247</li>
                <li>📍 Pune, Maharashtra</li>
              </ul>
            </div>
          </div>

          {/* ================= SOCIAL ================= */}

          <div className="flex justify-center gap-6 mb-10">
            {[
              {
                icon: "💼",
                link: "https://www.linkedin.com/in/tejas-mehar/",
                label: "LinkedIn",
              },
              {
                icon: "📧",
                link: "mailto:tejasmhear7@gmail.com",
                label: "Email",
              },
              {
                icon: "📞",
                link: "tel:+917447746247",
                label: "Call",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                whileHover={{ scale: 1.2, y: -3 }}
                className="
            w-12 h-12 flex items-center justify-center rounded-full

            bg-white dark:bg-white/5
            border border-gray-200 dark:border-white/10

            shadow-md hover:shadow-lg
            transition
            text-xl
          "
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* ================= DIVIDER ================= */}

          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8" />

          {/* ================= BOTTOM ================= */}

          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Tejas Mehar. All Rights Reserved.
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-500">
              Crafted with ❤️ using React js
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
