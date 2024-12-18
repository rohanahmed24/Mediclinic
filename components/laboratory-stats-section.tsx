'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { Microscope, VolumeIcon as Vial, HeartPulse, Users } from 'lucide-react'

const stats = [
  { icon: Microscope, value: 99.9, suffix: '%', label: 'Accuracy' },
  { icon: Vial, value: 5000, suffix: '+', label: 'Tests Daily' },
  { icon: HeartPulse, value: 50, suffix: '+', label: 'Specialties' },
  { icon: Users, value: 1000000, suffix: '+', label: 'Patients Served' },
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
      duration: 0.6,
    },
  },
}

export default function LaboratoryStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Laboratory in Numbers
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isInView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                    useEasing={true}
                  />
                )}
              </div>
              <p className="text-xl text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

