import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const ScrollUI = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      setShowBackToTop(window.scrollY > 400);

      // Active section detection
      const offsets = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ── Section dots (right side) ── */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 items-center">
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              className="group relative flex items-center justify-end gap-2"
            >
              {/* Tooltip */}
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-medium text-white/80 bg-black/70 px-2 py-1 rounded-md whitespace-nowrap pointer-events-none">
                {label}
              </span>

              {/* Dot */}
              <motion.span
                className="block rounded-full bg-amber-400 transition-all duration-300"
                animate={{
                  width: isActive ? 10 : 6,
                  height: isActive ? 10 : 6,
                  opacity: isActive ? 1 : 0.35,
                  boxShadow: isActive
                    ? "0 0 8px rgba(251,191,36,0.8)"
                    : "none",
                }}
                transition={{ duration: 0.2 }}
              />
            </a>
          );
        })}
      </div>

      {/* ── Back to top button ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-black flex items-center justify-center shadow-lg shadow-amber-500/30 hover:shadow-amber-500/60 transition-shadow"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollUI;
