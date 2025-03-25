"use client"

import React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * @typedef {Object} CTAButtonProps
 * @property {string} href
 * @property {"primary" | "secondary"} [variant]
 * @property {React.ReactNode} children
 */
/**
 * @param {CTAButtonProps} props
 */
export function CTAButton({ href, variant = "primary", children }) {
  return (
    <Link href={href}>
      <motion.button
        className={cn(
          "px-8 py-3 rounded-full font-medium",
          variant === "primary" ? "bg-black text-white" : "bg-gray-100 text-black",
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    </Link>
  )
}

