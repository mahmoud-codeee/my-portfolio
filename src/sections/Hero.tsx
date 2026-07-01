import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Aurora from "../components/reactbits/Aurora";
import SplitText from "../components/reactbits/SplitText";
import CountUp from "../components/reactbits/CountUp";
import Magnet from "../components/reactbits/Magnet";

const Hero = () => {
  const roles = ["Front-End Developer", "Software Engineer"];
  const [currentRole, setCurrentRole] = useState(0);

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
      {/* Aurora background */}
      <Aurora />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.current.map(({ left, top, duration, delay }, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-400/40"
            style={{ left, top }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Hero content */}
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

        {/* Name with SplitText */}
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-6 leading-tight">
          <SplitText
            text="Mahmoud"
            tag="div"
            className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent justify-center"
            charDelay={0.04}
            duration={0.7}
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
          />
          <SplitText
            text="Saad"
            tag="div"
            className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent justify-center"
            charDelay={0.04}
            duration={0.7}
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

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

        {/* Stats with CountUp */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div className="text-center" whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              <CountUp to={3.9} from={0} decimals={1} suffix="/4.0" duration={1.8} delay={0.9} />
            </div>
            <div className="text-xs sm:text-sm text-white/60 mt-1">GPA</div>
          </motion.div>

          <motion.div className="text-center" whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              1st
            </div>
            <div className="text-xs sm:text-sm text-white/60 mt-1">Rank</div>
          </motion.div>

          <motion.div className="text-center" whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              ✓
            </div>
            <div className="text-xs sm:text-sm text-white/60 mt-1">Dean's List</div>
          </motion.div>
        </motion.div>

        {/* CTA buttons with Magnet */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Magnet strength={0.4} padding={50}>
            <motion.a
              href="#projects"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-full"
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </Magnet>

          <Magnet strength={0.4} padding={50}>
            <motion.a
              href={`${import.meta.env.BASE_URL}Mahmoud_Saad_Frontend_Developer_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-full"
              whileTap={{ scale: 0.95 }}
            >
              View My CV
            </motion.a>
          </Magnet>

          <Magnet strength={0.4} padding={50}>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-black transition-all"
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
