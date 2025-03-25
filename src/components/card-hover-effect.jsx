"use client"

import  React from "react"
import PropTypes from "prop-types"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function CardHoverEffect({ children, className }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef(null)

  /**
   * @param {React.MouseEvent} e - The mouse event
   */
  const handleMouseMove = (e) => {
    if (!cardRef.current) 
      {
        return

      }

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden rounded-3xl bg-gray-50 p-4 transition-all duration-300", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      {isHovering && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {children}
    </motion.div>
  )
}

