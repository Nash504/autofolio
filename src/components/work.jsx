"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/cta-button";
import { CardHoverEffect } from "@/components/card-hover-effect";

export default function WorkPage() {
  return (
    <>
      <div className="w-full py-8 md:py-12 px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <motion.h1
            className="text-2xl md:text-4xl font-medium mb-6 md:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.h1>

          <motion.div
            className="w-full mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-base md:text-lg text-center max-w-2xl mx-auto mb-8 md:mb-12">
              We partner with product-led founders to design and develop
              exceptional digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <CardHoverEffect className="p-4 md:p-6 aspect-video md:aspect-[4/3]">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Project {i + 1}
                    </div>
                  </CardHoverEffect>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          ></motion.div>
        </div>
      </div>
    </>
  );
}
