"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Button from "../ui/Button";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      id="about"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-bg-primary to-accent-cyan opacity-20" />
      
      {/* Animated stars background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] uppercase">
            Join the Mission
            <br />
            <span className="text-accent-cyan">To Mars</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Be part of humanity's journey to becoming a multiplanetary species. 
            Get exclusive updates on launches, missions, and groundbreaking technology.
          </p>

          {/* Email Form or Buttons */}
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:flex-1 px-6 py-4 bg-bg-secondary border-2 border-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:border-accent-cyan focus:outline-none transition-colors duration-300"
              />
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Get Updates
              </Button>
            </motion.form>
          ) : (
            <motion.div
              className="text-accent-success text-xl font-semibold mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              ✓ Thank you! You're now part of the mission.
            </motion.div>
          )}

          {/* Alternative CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button variant="outline">Explore Careers</Button>
            <Button variant="secondary">Watch Documentary</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
