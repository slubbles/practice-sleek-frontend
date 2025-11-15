"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountdownTimer from "../ui/CountdownTimer";
import Button from "../ui/Button";
import { FEATURED_MISSION } from "@/app/lib/constants";
import { slideInFromRight } from "../animations/variants";

export default function FeaturedLaunch() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parallax for image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 bg-bg-secondary"
      id="missions"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-space-grotesk)] uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Mission
        </motion.h2>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden"
            style={{ y: imageY }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/rockets/starship.jpg)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Mission Name */}
            <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] uppercase">
              {FEATURED_MISSION.name}
            </h3>

            {/* Countdown */}
            <div>
              <p className="text-text-tertiary text-sm uppercase tracking-wider mb-3">
                Launch Countdown
              </p>
              <CountdownTimer targetDate={FEATURED_MISSION.launchDate} />
            </div>

            {/* Launch Date */}
            <div>
              <p className="text-text-tertiary text-sm uppercase tracking-wider mb-1">
                Launch Date
              </p>
              <p className="text-lg text-text-primary">
                {FEATURED_MISSION.launchDate.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="text-text-tertiary text-sm uppercase tracking-wider mb-2">
                Mission Overview
              </p>
              <p className="text-text-secondary leading-relaxed">
                {FEATURED_MISSION.description}
              </p>
            </div>

            {/* Specs */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                { label: "Destination", value: FEATURED_MISSION.destination },
                { label: "Payload", value: FEATURED_MISSION.payload },
                { label: "Orbit", value: FEATURED_MISSION.orbit },
                { label: "Status", value: FEATURED_MISSION.status.toUpperCase() },
              ].map((spec) => (
                <motion.div
                  key={spec.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-bg-tertiary border border-border rounded-lg p-4"
                >
                  <p className="text-text-tertiary text-xs uppercase tracking-wider mb-1">
                    {spec.label}
                  </p>
                  <p className="text-text-primary font-medium">{spec.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <Button variant="primary">Set Reminder</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
