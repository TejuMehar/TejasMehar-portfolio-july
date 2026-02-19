import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filters = ["All", "Full Stack", "Static", "Portfolios"];

  const projects = [
    {
      title: "WebCultivate Software Solutions Website",
      category: "Static",
      desc: "Official business website for WebCultivate Software Solutions showcasing IT services, client solutions, SEO optimization, hosting setup, and lead generation system.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1770182501/webcultivate_t9givb.webp",
      github: "#",
      live: "https://webcultivate.com",
    },
    {
      title: "LodgifyMe (Hotel Listing Platform)",
      category: "Full Stack",
      desc: "MERN-based hotel listing platform with authentication.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "AI Powered LMS Website",
      category: "Full Stack",
      desc: "Smart Learning Management System with AI-based recommendations, course management, authentication, and analytics.",
      image:
        "https://www.ispringsolutions.com/blog/wp-content/uploads/2024/11/what-is-an-lms.png",
      github: "#",
      live: "#",
    },
    {
      title: "Full E-Commerce Website",
      category: "Full Stack",
      desc: "Complete E-commerce platform with product management, cart, secure payments, order tracking, user authentication, and admin dashboard for inventory, users, and sales analytics.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1771297970/Screenshot_2026-02-17_083643_uaw0up.png",
      github: "#",
      live: "https://e-com-demo-7aoa.onrender.com/",
    },
    {
      title: "Real Estate Property Management System",
      category: "Full Stack",
      desc: "Advanced real estate platform for property listing, buying, renting, and management with user authentication, property search filters, image uploads, booking system, and admin dashboard for managing agents, properties, and customer inquiries.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1771297970/Screenshot_2026-02-17_081724_ngqxs9.png",
      github: "#",
      live: "#",
    },
    {
      title: "Vastuanand Real Estate Website",
      category: "Static",
      desc: "Professional real estate website with property listings, enquiry forms, SEO optimization, and mobile-friendly design.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1770182501/vastuanand_bmawgw.webp",
      github: "#",
      live: "https://www.vastuanandm.com",
    },
    {
      title: "Pioneershub IT Consultant Website",
      category: "Static",
      desc: "Professional business website for an IT consulting firm showcasing services, client solutions, contact forms, and digital presence.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1770182501/pioneershub_iscjne.webp",
      github: "#",
      live: "https://www.pioneershub.in",
    },
    {
      title: "WedClicks PhotoStudio Website",
      category: "Static",
      desc: "Responsive wedding photography website with modern UI, gallery, and contact section.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1770182975/wedclicks_xhunbs.webp",
      github: "#",
      live: "https://www.wedclicks.in",
    },
    {
      title: "Shubhmilanfilms PhotoStudio Website",
      category: "Static",
      desc: "Professional photography studio website with portfolio showcase and client enquiry system.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1770183808/shubhmilanfilms_j7bb4t.webp",
      github: "#",
      live: "https://www.shubhmilanfilms.com",
    },
    {
      title: "Personal Portfolio Website",
      category: "Portfolios",
      desc: "My personal portfolio showcasing projects, skills, experience, animations, SEO optimization, and responsive modern UI design.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1770183249/TejasMehar_scgdqd.webp",
      github: "https://github.com/TejuMehar",
      live: "https://tejas-mehar-portfolio-july.netlify.app/",
    },
    {
      title: "Prarthana Tolmare Portfolio Website",
      category: "Portfolios",
      desc: "Personal portfolio website for Prarthana Tolmare featuring professional profile, career highlights, responsive design, and modern UI.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1770183248/PrarthanaTolmare_jhkuzx.webp",
      github: "#",
      live: "https://prarthana-tolmare-portfolio.netlify.app/",
    },
    {
      title: "Sonali Jawarkar Portfolio Website",
      category: "Portfolios",
      desc: "Personal portfolio website showcasing skills, projects, achievements, and contact information with modern UI design, responsive layout, smooth animations, and integrated contact form.",
      image:
        "https://res.cloudinary.com/deq5qb9vv/image/upload/v1771298065/Screenshot_2026-02-17_084405_qaarbt.png",
      github: "#",
      live: "#",
    },
  ];

  // Reset visible projects when filter changes
  useEffect(() => {
    setVisibleCount(3);
  }, [activeFilter]);

  // Filter logic
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Show limited projects
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section
      id="projects"
      className="
        relative py-32
        bg-gradient-to-br
        from-white via-blue-50 to-purple-50
        dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my real-world and personal projects.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-2 rounded-full font-semibold transition
                ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                }
              `}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="
                  group rounded-3xl overflow-hidden
                  bg-white dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                  shadow-xl dark:shadow-none
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
                    {project.category}
                  </span>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.desc}
                  </p>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-sm hover:text-blue-500"
                    >
                      <Github size={16} />
                      Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1 text-sm hover:text-blue-500"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="
                px-8 py-3 rounded-full font-semibold
                bg-gradient-to-r from-blue-600 to-purple-600
                text-white shadow-lg
                hover:shadow-xl transition
              "
            >
              View More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
