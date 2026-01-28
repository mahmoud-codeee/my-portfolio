import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "Git & GitHub Basics",
    issuer: "School Learning Platform",
    date: "2025",
    image: "/git-github.jpg",
  },
  {
    title: "Graduation Ceremony & Award",
    issuer: " University of Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
    date: "2025",
    image: "/grad-1.jpeg",
    description:
      "I celebrated my graduation at a formal ceremony in Oman, wearing traditional Omani regalia, proudly holding my trophy and certificate..",
  },
  {
    title: "RPA Academy",
    issuer: "INTRO Technology",
    date: "December 2025",
    image: "/RPA.png",
  },
  {
    title: "UiPath Academy - 1",
    issuer: "UiPath Academy",
    date: "November 2025",
    image: "/UiPath-1.png",
  },
  {
    title: "UiPath Academy - 2",
    issuer: "UiPath Academy",
    date: "November 2025",
    image: "/UiPath-2.png",
  },
  {
    title: "Dean's Honour List Award & Certificate",
    issuer: "Muscat College - Department of Computing",
    date: "2024/2025 Academic Year",
    image: "/grad-2.jpeg",
    description:
      "I received this award for making the Dean's Honour List during the 27th Graduation Ceremony at Muscat College.",
  },
  {
    title: "Graduation Celebration",
    issuer: "Muscat College",
    date: "2024/2025 Academic Year",
    image: "/grad-3.jpeg",
    description: "Celebrating my graduation.",
  },
];

const fadeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Certificates = () => {
  const [activeCert, setActiveCert] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-purple-400 mb-4">
            Certifications
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A collection of certifications that reflect my continuous learning
            journey
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedCerts.map((cert, index) => (
              <motion.div
                key={index}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
                onClick={() => setActiveCert(index)}
              >
                {/* Image */}
                <div className="relative mb-6 h-48 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-contain rounded-xl"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-neutral-500 text-sm">
                      Certificate Image
                    </span>
                  )}

                  {/* Maximize Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-black/60 rounded-lg flex items-center justify-center text-white text-sm">
                    ⤢
                  </div>
                </div>

                {/* Certificate Info */}
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-neutral-400">{cert.issuer}</p>
                <span className="inline-block mt-3 text-sm text-purple-400">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Button */}
        {certificates.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 transition text-white font-semibold shadow-lg shadow-purple-700/50"
              aria-expanded={showAll}
              aria-label={
                showAll ? "View less certificates" : "View more certificates"
              }
            >
              {showAll ? (
                <>
                  View Less
                  <span className="text-xl">▲</span>
                </>
              ) : (
                <>
                  View More
                  <span className="text-xl">▼</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Modal / Maximize Certificate */}
      <AnimatePresence>
        {activeCert !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              className="glass max-w-4xl w-full p-8 rounded-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 transition"
              >
                ✕
              </button>

              {/* Large Image */}
              {certificates[activeCert].image ? (
                <img
                  src={certificates[activeCert].image}
                  alt={`${certificates[activeCert].title} certificate large view`}
                  className="h-[400px] w-full object-contain rounded-xl mb-6"
                  loading="lazy"
                />
              ) : (
                <div className="h-[400px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-neutral-500">
                    Certificate Image (Large View)
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">
                {certificates[activeCert].title}
              </h3>
              <p className="text-neutral-400">
                {certificates[activeCert].issuer}
              </p>
              <span className="text-purple-400 text-sm">
                {certificates[activeCert].date}
              </span>

              {/* Description */}
              {certificates[activeCert].description && (
                <p className="text-neutral-400 mt-4 text-base">
                  {certificates[activeCert].description}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
