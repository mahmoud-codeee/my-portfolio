import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Pig Game",
      description:
        "An engaging dice game featuring dynamic DOM manipulation, game state management, and smooth animations. Built to demonstrate interactive JavaScript capabilities.",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "from-purple-500 to-pink-500",
      live: "https://mahmoud-codeee.github.io/pig-game/",
      github: "https://github.com/mahmoud-codeee/pig-game",
    },
    {
      title: "Task Manager",
      description:
        "A sleek task management application with LocalStorage persistence, advanced filtering options, and a modern soft UI design approach.",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      live: "https://mahmoud-codeee.github.io/task-manager-soft-ui/",
      github: "https://github.com/mahmoud-codeee/task-manager-soft-ui",
    },
    {
      title: "Guess My Number",
      description:
        "Interactive number guessing game with score tracking, high score persistence, and real-time feedback mechanisms.",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "from-amber-500 to-orange-500",
      live: "https://mahmoud-codeee.github.io/guess-my-number/",
      github: "https://github.com/mahmoud-codeee/guess-my-number",
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A showcase of my work—building interactive experiences with clean
            code and modern design
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isHovered={hoveredIndex === i}
              onHover={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/mahmoud-codeee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-white/10 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    color: string;
    live: string;
    github: string;
  };
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard = ({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onLeave();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
    >
      {/* Gradient Overlay on Hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <div className="relative p-8" style={{ transform: "translateZ(50px)" }}>
        {/* Project Number */}
        <motion.div
          className="text-7xl font-bold text-white/5 absolute top-4 right-4"
          animate={{ opacity: isHovered ? 0.1 : 0.05 }}
        >
          0{index + 1}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-2xl font-bold text-white mb-4 relative z-10"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="text-white/70 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 text-white text-sm rounded-full border border-white/20`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500`}
      />
    </motion.div>
  );
};

export default Projects;
