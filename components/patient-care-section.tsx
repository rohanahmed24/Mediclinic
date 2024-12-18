'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function PatientCareSection() {
  return (
    <section className="py-20 overflow-hidden dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-8">
            <motion.h2 
              className="text-4xl md:text-5xl text-gray-800 dark:text-white"
              variants={itemVariants}
            >
              <span className="font-light">Finest Patient</span>
              <br />
              <span className="font-medium">Care & Amenities</span>
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {[
                'Ut wisi enim ad minim dolore',
                'Veniam quis laore nostrud',
                'Exerci tation ulm hedi corper',
                'Turet suscipit lobortis littera',
                'Ut wisi enim ad minim dolore',
                'Veniam quis laore nostrud',
                'Exerci tation ulm hedi corper',
                'Turet suscipit lobortis littera'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <ChevronRight className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#40C7B9]" />
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-[#40C7B9] text-white rounded-md hover:bg-[#3BB5A8] transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>

          <motion.div
            className="relative h-[600px]"
            variants={itemVariants}
          >
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Medical professionals"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

