"use client";

import { motion } from "framer-motion";

import { CTAButton } from "@/components/cta-button";
import Link from "next/link";
import { CardHoverEffect } from "@/components/card-hover-effect";

export default function ServicesPage() {
  const services = [
    {
      title: "Websites & Web Applications",
      description:
        "Fast, responsive, and accessible web solutions tailored to your needs",
    },
    {
      title: "WordPress Sites",
      description:
        "Custom WordPress development with powerful features and easy management",
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android",
    },
  ];

  return (
    <div className=" py-8 md:py-12 px-2">
      <div className="mx-auto flex flex-col items-center">
        <motion.h1
          className="text-2xl md:text-4xl font-medium mb-6 md:mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>

        <motion.div
          className="w-full mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-base md:text-lg text-center max-w-2xl mx-auto mb-8 md:mb-12">
            We offer end-to-end design and development services to bring your
            product vision to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <CardHoverEffect className="p-4 md:p-6 border border-gray-100 rounded-lg">
                  <h3 className="text-lg md:text-xl font-medium mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {service.description}
                  </p>
                </CardHoverEffect>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
}
