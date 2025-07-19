import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import resumePdf from '../assets/TejasResume (3).pdf';
import founder from '../assets/founder.jpeg';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['MERN Stack Developer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = texts[currentIndex];
    let i = 0;
    const typeInterval = setInterval(() => {
      setCurrentText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const handleDownload = () => {
    // Using the public URL approach
    window.open(resumePdf);
    const fileUrl = '/TejasResume(3).pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Tejas_mehar_Resume.pdf'; // This will be the filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
      animate={{
        y: [0, -20, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
      style={{
        left: `${10 + Math.random() * 80}%`,
        top: `${20 + Math.random() * 60}%`,
      }}
    />
  ));

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-0">
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Profile Image (shown first on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-4 flex justify-center order-1 lg:order-none"
          >
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
              className="relative"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-inner">
                  <img 
                    src={founder} 
                    alt="Tejas Mehar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -inset-4 rounded-3xl border-2 border-blue-400/30 hidden sm:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="col-span-1 lg:col-span-8 text-center lg:text-left order-0 lg:order-none">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-4 md:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold"
                >
                  <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Tejas Mehar
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="h-12 sm:h-16 flex items-center justify-center lg:justify-start"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
                    I'm a{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-400 relative">
                      {currentText}
                      <motion.span
                        className="absolute right-0 top-0 bottom-0 w-px bg-blue-600 dark:bg-blue-400"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </span>
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  MERN Developer | AWS Cloud Learner | 4th Year Information Technology Engineering Student at Sipna COET
                  I build scalable web apps with React & Node.js, love solving problems, and seek opportunities to learn & grow.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  View My Work
                </motion.button>

                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 text-sm sm:text-base"
                >
                  <Download size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Resume
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-2"
              >
                {[ 
                  { Icon: Github, href: 'https://github.com/TejuMehar', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/tejas-mehar/', label: 'LinkedIn' },
                  { Icon: Mail, href: '#contact', label: 'Contact' }
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-xl"
                    aria-label={label}
                  >
                    <Icon size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;