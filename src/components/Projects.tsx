import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    // {
    //   id: 1,
    //   title: 'Multi-OS Activity Tracker',
    //   description: 'A cross-platform app to track user activities (Work, Private, Idle) across Linux, macOS, and Windows with real-time data visualization.',
    //   category: 'fullstack',
    //   image: 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Chart.js', 'Deepseek API', 'Google Gemini API'],
    //   liveUrl: 'https://moat-glr5.vercel.app/',
    //   githubUrl: '#',
    //   featured: true
    // },
    // {
    //   id: 2,
    //   title: 'ChargeTrack - EV Charging Station Manager',
    //   description: 'Full-stack web application for managing EV charging stations with CRUD operations, maps, and user authentication.',
    //   category: 'fullstack',
    //   image: 'https://www.csemag.com/wp-content/uploads/2025/03/CSE2403_MAG_ENERGY_Figure_slider-scaled-e1709743990298.jpg',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Map APIs', 'Express.js'],
    //   liveUrl: 'https://charge-track.vercel.app/',
    //   githubUrl: '#',
    //   featured: true
    // },
    {
      id: 3,
      title: 'Lodgify - Travel Listing App',
      description: 'A full-stack travel listing application with property exploration, reviews, and location-based search.',
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      liveUrl: 'https://github.com/TejuMehar/LodgifyMe-Hotel-Listing',
      githubUrl: 'https://github.com/TejuMehar/LodgifyMe-Hotel-Listing',
      featured: false
    },
    // {
    //   id: 4,
    //   title: 'Eventlify',
    //   description: 'College event management platform with AI assistant, payments, notifications, maps, and secure login.',
    //   category: 'fullstack',
    //   image: 'https://png.pngtree.com/thumb_back/fh260/background/20221108/pngtree-event-management-doodle-set-image_1435576.jpg',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Google Gemini API', 'Razorpay'],
    //   liveUrl: 'https://eventify-1-ixhs.onrender.com/',
    //   githubUrl: '#',
    //   featured: true
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I love working with
            </p>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
            <AnimatePresence mode="wait">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10 }}
                  className={`group relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700`}
                >
                  <div className="relative overflow-hidden flex-grow-0">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 md:h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        aria-label="View Live Project"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        aria-label="View Source Code"
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-auto">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                      >
                        <Eye size={14} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-sm sm:text-base"
                      >
                        <Github size={14} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="flex justify-center px-2 sm:px-0"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/TejuMehar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm sm:text-base"
            >
              View More Projects on GitHub
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-3xl p-6 sm:p-8 mx-2 sm:mx-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and bring innovative ideas to life. 
              Let's create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;