import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const roles = ["Front-End Developer", "Software Engineer"];
  const [currentRole, setCurrentRole] = useState(0);

  // Generate floating particles positions once
  const particles = useRef(
    [...Array(18)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 2,
    })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6"
    >
      {/* ===== MOVING BACKGROUND ELEMENTS ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orb 1 */}
        <motion.div
          className="absolute w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-br from-amber-400/40 to-orange-500/30 blur-2xl"
          initial={{ x: -200, y: 120 }}
          animate={{ x: [-200, 300, -150], y: [120, -200, 120] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orb 2 */}
        <motion.div
          className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 blur-3xl"
          initial={{ x: 500, y: -100 }}
          animate={{ x: [500, -200, 400], y: [-100, 220, -100] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orb 3 */}
        <motion.div
          className="absolute w-36 sm:w-48 h-36 sm:h-48 rounded-full bg-gradient-to-br from-yellow-400/30 to-amber-500/30 blur-xl"
          initial={{ x: 200, y: 400 }}
          animate={{ x: [200, -120, 200], y: [400, 100, 400] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {particles.current.map(({ left, top, duration, delay }, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-400/40"
            style={{ left, top }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 sm:mb-4"
        >
          <span className="text-amber-400 text-base sm:text-lg font-medium">
            Hello, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-6 leading-tight">
          <motion.span
            className="block bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mahmoud
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Saad
          </motion.span>
        </motion.h1>

        {/* Rotating Role */}
        <motion.div className="h-12 sm:h-16 mb-6 sm:mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRole}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-2xl md:text-3xl text-white/80"
              aria-live="polite"
            >
              {roles[currentRole]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* ===== STATS (RESTORED) ===== */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: "GPA", value: "3.9/4.0" },
            { label: "Rank", value: "1st" },
            { label: "Dean's List", value: "✓" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="/Mahmoud_Saad_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My CV
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
