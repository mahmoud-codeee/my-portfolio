import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "../components/reactbits/SplitText";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Framer Motion", icon: "🎭" },
    { name: "Git & GitHub", icon: "🔗" },
    { name: "Vite", icon: "🔥" },
    { name: "MySQL", icon: "🗄️" },
  ];

  const achievements = [
    {
      icon: "🎓",
      title: "Software Engineering",
      subtitle: "Muscat College × UMPSA",
      description: "Graduated with GPA 3.9/4.0",
    },
    {
      icon: "🏆",
      title: "Dean's List",
      subtitle: "Academic Excellence",
      description: "Ranked 1st in cohort",
    },
    {
      icon: "💡",
      title: "Continuous Learner",
      subtitle: "Tech Enthusiast",
      description: "RPA, UiPath & Git certified",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <SplitText
            text="About Me"
            tag="h2"
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent justify-center"
            charDelay={0.05}
            duration={0.7}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Story */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              <span className="text-amber-400 font-semibold">
                Software Engineering graduate
              </span>{" "}
              (GPA 3.9, Dean's List) and self-driven{" "}
              <span className="text-amber-400 font-semibold">
                Front-End Developer
              </span>{" "}
              with a proven track record of shipping real, deployed web
              applications.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Skilled in HTML5, CSS3, modern JavaScript (ES6+), React,
              TypeScript, and Tailwind CSS — with three live projects on GitHub
              Pages demonstrating clean component architecture, responsive
              design, and strong attention to UI detail. Passionate about
              writing maintainable code and building things that actually work.
            </p>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-amber-400 font-medium mb-2">{item.subtitle}</p>
              <p className="text-white/60">{item.description}</p>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-white">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="group flex flex-col items-center gap-3 p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-amber-400/50 hover:bg-white/10 transition-all cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                <span className="text-3xl">{skill.icon}</span>
                <span className="text-sm font-medium text-white/80 group-hover:text-amber-400 transition-colors text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
