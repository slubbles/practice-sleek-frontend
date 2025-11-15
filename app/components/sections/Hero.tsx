"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";
import ScrollIndicator from "../ui/ScrollIndicator";
// import SplineLoader from "../ui/SplineLoader";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      {/* Background - Video or Spline 3D Model */}
      <div className="absolute inset-0 z-0">
        {/* Option 1: Video Background */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Option 2: Spline 3D Rocket (uncomment to use) */}
        {/* <SplineLoader
          scene="https://prod.spline.design/YOUR-SCENE-ID/scene.splinecode"
          className="w-full h-full"
          fallbackImage="/images/hero-poster.jpg"
        /> */}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        style={{ y, opacity }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] uppercase tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Next Mission
          <br />
          <span className="text-accent-cyan">To Mars</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-2xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Starship prepares for humanity's journey to becoming a multiplanetary species
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button variant="primary">Watch Launch</Button>
          <Button variant="outline">Learn More</Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
