"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "../ui/Card";
import { VEHICLES } from "@/app/lib/constants";
import { staggerContainer, staggerItem } from "../animations/variants";

export default function VehicleCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-6 bg-bg-primary" id="vehicles">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-space-grotesk)] uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Fleet
        </motion.h2>

        {/* Vehicle Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {VEHICLES.map((vehicle) => (
            <motion.div key={vehicle.id} variants={staggerItem}>
              <Card
                backgroundImage={vehicle.image}
                className="h-[500px] md:h-[600px] p-6 flex flex-col justify-end group"
              >
                {/* Vehicle Name */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)] uppercase">
                  {vehicle.name}
                </h3>

                {/* Tagline */}
                <p className="text-text-secondary mb-4">{vehicle.tagline}</p>

                {/* Specs - Show on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                  <div className="space-y-1 mb-4 text-sm">
                    <p>
                      <span className="text-text-tertiary">Payload to LEO:</span>{" "}
                      {vehicle.specs.payloadToLEO}
                    </p>
                    <p>
                      <span className="text-text-tertiary">Height:</span> {vehicle.specs.height}
                    </p>
                    <p>
                      <span className="text-text-tertiary">Diameter:</span>{" "}
                      {vehicle.specs.diameter}
                    </p>
                    <p>
                      <span className="text-text-tertiary">Reusable:</span>{" "}
                      {vehicle.specs.reusable ? "Yes" : "No"}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button className="text-accent-cyan font-medium hover:text-accent-blue transition-colors duration-300 text-left">
                  Explore →
                </button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
