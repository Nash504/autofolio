"use client"

import { motion } from "framer-motion"
import { CTAButton } from "@/components/cta-button"
import { CardHoverEffect } from "@/components/card-hover-effect"

export default function WorkPage() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center py-12 px-4 md:py-24">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* <div className="w-full flex justify-center mb-16 md:mb-24">
          <Logo />
        </div> */}

        <motion.h1
          className="text-3xl md:text-5xl font-medium mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Work
        </motion.h1>

        <motion.div
          className="w-full mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-lg text-center max-w-2xl mx-auto mb-12">
            We partner with product-led founders to design and develop exceptional digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <CardHoverEffect className="p-6 aspect-[4/3]">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Project {i + 1}</div>
                </CardHoverEffect>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <CTAButton href="/contact" variant="primary">
            Email
          </CTAButton>
          <CTAButton href="/book-call" variant="secondary">
            Book a call
          </CTAButton>
        </motion.div>

      </div>
    </main>
    </>
  )
}

