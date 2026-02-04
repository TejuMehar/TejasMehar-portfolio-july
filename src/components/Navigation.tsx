import React from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  activeSection: string;
  className?: string;
  mobile?: boolean;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  className = "",
  mobile = false,
  onItemClick,
}) => {
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const headerHeight = mobile ? 60 : 80;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    onItemClick?.();
  };

  return (
    <nav
      className={`${className} ${
        mobile ? "flex flex-col space-y-2" : "flex space-x-4"
      }`}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <motion.button
            key={item.id}
            whileHover={{ scale: mobile ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(item.id)}
            className={`
              relative px-4 py-2 font-medium
              transition-colors duration-200
              ${mobile ? "w-full text-left" : "text-center"}

              ${
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }
            `}
          >
            {/* Text Wrapper */}
            <span className="relative inline-block pb-1">{item.label}</span>

            {/* Mobile Left Bar */}
            {isActive && mobile && (
              <motion.span
                layoutId="activeIndicator"
                className="
                  absolute left-0 top-1/2 -translate-y-1/2
                  w-1 h-6
                  bg-blue-600 dark:bg-blue-400
                  rounded-full
                "
              />
            )}
          </motion.button>
        );
      })}
    </nav>
  );
};

export default Navigation;
