import { motion, type TargetAndTransition } from "framer-motion";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

interface SplitTextProps {
  text: string;
  className?: string;
  charDelay?: number;
  duration?: number;
  tag?: Tag;
  from?: TargetAndTransition;
  to?: TargetAndTransition;
  ease?: [number, number, number, number];
}

const SplitText = ({
  text,
  className = "",
  charDelay = 0.04,
  duration = 0.6,
  tag: Tag = "p",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  ease = [0.16, 1, 0.3, 1],
}: SplitTextProps) => {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <Tag className={className} style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-flex" }}>
          {word.split("").map((char) => {
            const delay = charIndex++ * charDelay;
            return (
              <motion.span
                key={`${wi}-${char}-${delay}`}
                initial={from}
                whileInView={to}
                viewport={{ once: true }}
                transition={{ duration, delay, ease }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
