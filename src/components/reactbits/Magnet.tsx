import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

const Magnet = ({
  children,
  padding = 60,
  strength = 0.45,
  className = "",
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const handleMouseLeave = () => {
    setActive(false);
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={handleMouseLeave}
      style={{ padding, margin: -padding, display: "inline-block" }}
      className={className}
    >
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={
          active
            ? { type: "spring", stiffness: 200, damping: 18, mass: 0.8 }
            : { type: "spring", stiffness: 300, damping: 25 }
        }
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Magnet;
