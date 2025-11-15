"use client";

import { motion } from "framer-motion";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/app/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
              SPACEX
            </h3>
            <p className="text-text-secondary text-sm">
              Making life multiplanetary through innovation and determination.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-bg-tertiary border border-border flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.platform}
                >
                  {/* Icon placeholder - you can replace with actual icons */}
                  {social.platform.charAt(0)}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-tertiary text-sm">
              © {new Date().getFullYear()} SpaceX. All rights reserved.
            </p>
            <p className="text-text-tertiary text-sm">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
