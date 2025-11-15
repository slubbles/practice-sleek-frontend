"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  gradient?: boolean;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  backgroundImage,
  gradient = true,
  hover = true,
}: CardProps) {
  const baseStyles = "relative overflow-hidden rounded-lg";

  return (
    <motion.div
      className={cn(baseStyles, className)}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Background Image */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          variants={
            hover
              ? {
                  rest: { scale: 1, filter: "brightness(1)" },
                  hover: { scale: 1.05, filter: "brightness(1.2)" },
                }
              : undefined
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
      
      {/* Gradient Overlay */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      )}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
