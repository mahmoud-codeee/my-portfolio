import { motion } from "framer-motion";

interface AuroraProps {
  className?: string;
}

const Aurora = ({ className = "" }: AuroraProps) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Primary aurora blob */}
      <motion.div
        className="absolute"
        style={{
          top: "-20%",
          left: "-20%",
          width: "70%",
          height: "70%",
          background:
            "radial-gradient(ellipse at center, rgba(251,191,36,0.18) 0%, rgba(234,88,12,0.10) 50%, transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary aurora blob */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-20%",
          right: "-20%",
          width: "80%",
          height: "80%",
          background:
            "radial-gradient(ellipse at center, rgba(239,68,68,0.12) 0%, rgba(251,191,36,0.08) 50%, transparent 70%)",
          filter: "blur(80px)",
          borderRadius: "50%",
        }}
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 60, -90, 0],
          scale: [1.1, 0.9, 1.2, 1.1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Accent blob */}
      <motion.div
        className="absolute"
        style={{
          top: "40%",
          left: "30%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(251,191,36,0.08) 0%, transparent 60%)",
          filter: "blur(50px)",
          borderRadius: "50%",
        }}
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -50, 40, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Aurora;
