import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(251, 191, 36, 0.12)",
  spotlightSize = 400,
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--x", `${x}px`);
    divRef.current.style.setProperty("--y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    divRef.current.style.setProperty("--spotlight-size", `${spotlightSize}px`);
  };

  const handleMouseLeave = () => {
    if (!divRef.current) return;
    divRef.current.style.setProperty("--x", `-9999px`);
    divRef.current.style.setProperty("--y", `-9999px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
      style={
        {
          "--x": "-9999px",
          "--y": "-9999px",
          "--spotlight-color": spotlightColor,
          "--spotlight-size": `${spotlightSize}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
