"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      onClick={() => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }}
    >
      <span className="text-text-secondary text-sm uppercase tracking-wider">Scroll</span>
      <motion.div
        className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center p-2"
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-1 h-2 bg-text-secondary rounded-full"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
