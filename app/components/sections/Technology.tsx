"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { staggerContainer, staggerItem } from "../animations/variants";

export default function Technology() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parallax for background images
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const techHighlights = [
    {
      title: "Reusability",
      stat: "250+",
      description: "Successful booster landings, drastically reducing launch costs and enabling rapid reusability",
      icon: "🚀",
    },
    {
      title: "Raptor Engine",
      stat: "33",
      description: "Next-generation full-flow staged combustion engines powering Starship",
      icon: "⚡",
    },
    {
      title: "Innovation",
      stat: "100%",
      description: "Fully reusable spacecraft design for sustainable space exploration",
      icon: "🌟",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6 bg-bg-primary overflow-hidden"
      id="technology"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #00d9ff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] uppercase">
            Innovation & Technology
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Pushing the boundaries of aerospace engineering with cutting-edge technology
          </p>
        </motion.div>

        {/* Tech Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={staggerItem}
              className="relative group"
              style={{ y: index % 2 === 0 ? y1 : y2 }}
            >
              <div className="bg-bg-secondary border border-border rounded-lg p-8 h-full hover:border-accent-cyan transition-colors duration-300">
                {/* Icon */}
                <div className="text-5xl mb-4">{highlight.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)] uppercase">
                  {highlight.title}
                </h3>

                {/* Animated Stat */}
                <div className="text-5xl md:text-6xl font-bold text-accent-cyan mb-4 font-[family-name:var(--font-space-grotesk)]">
                  {highlight.stat === "250+" ? (
                    <>
                      <AnimatedCounter to={250} duration={2} />+
                    </>
                  ) : highlight.stat === "33" ? (
                    <AnimatedCounter to={33} duration={1.5} />
                  ) : (
                    <AnimatedCounter to={100} duration={2} suffix="%" />
                  )}
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {highlight.description}
                </p>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-cyan/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Info */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Starlink */}
          <div className="relative h-[300px] rounded-lg overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: "url(/images/starlink.jpg)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h4 className="text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)] uppercase">
                Starlink Network
              </h4>
              <p className="text-text-secondary">
                Global satellite constellation providing high-speed internet worldwide
              </p>
            </div>
          </div>

          {/* Mars Mission */}
          <div className="relative h-[300px] rounded-lg overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: "url(/images/mars.jpg)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h4 className="text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)] uppercase">
                Mars Colonization
              </h4>
              <p className="text-text-secondary">
                Building the technology to make life multiplanetary
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
