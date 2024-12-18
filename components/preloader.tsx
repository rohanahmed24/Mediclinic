'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const PreloaderIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.circle
      cx="50"
      cy="50"
      r="45"
      stroke="#40C7B9"
      strokeWidth="10"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M50 5C74.8528 5 95 25.1472 95 50"
      stroke="#40C7B9"
      strokeWidth="10"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ rotate: 360, pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle
      cx="50"
      cy="50"
      r="20"
      fill="#40C7B9"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
)

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Increased duration to 3 seconds for better visibility

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <PreloaderIcon />
      </motion.div>
      <motion.h2
        className="mt-4 text-2xl font-bold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-[#40C7B9]">Medi</span>
        <span className="text-gray-800 dark:text-white">Clinic</span>
      </motion.h2>
      <motion.div
        className="mt-4 text-[#40C7B9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading...
      </motion.div>
    </motion.div>
  )
}

