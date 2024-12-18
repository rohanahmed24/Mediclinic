'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Microscope, FlaskRoundIcon as Flask, Dna } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: Microscope,
    title: "Advanced Equipment",
    description: "State-of-the-art microscopes and diagnostic tools for accurate results."
  },
  {
    icon: Flask,
    title: "Comprehensive Testing",
    description: "Wide range of tests covering all major medical specialties."
  },
  {
    icon: Dna,
    title: "Genetic Analysis",
    description: "Cutting-edge genetic testing and personalized medicine solutions."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function LaboratorySection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              State-of-the-Art Laboratory Facilities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our advanced laboratory is equipped with cutting-edge technology to provide accurate and timely diagnostic services. We're committed to delivering the highest standard of care through precise testing and analysis.
            </p>
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link 
                href="/services"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Advanced laboratory equipment"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

