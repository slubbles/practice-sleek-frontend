"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  children,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-base";
  
  const variants = {
    primary: "bg-accent-cyan text-black hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]",
    secondary: "bg-accent-blue text-white hover:bg-opacity-80 hover:shadow-[0_0_20px_rgba(0,82,136,0.4)]",
    outline: "border-2 border-text-secondary text-text-primary hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
