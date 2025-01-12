'use client'

import { motion } from 'framer-motion'
import { Activity, Stethoscope, Clock, Truck, Heart } from 'lucide-react'

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

const services = [
  {
    icon: Heart,
    title: "Cardiac Clinic",
    description: "Comprehensive cardiac care, including diagnostics, treatment, and rehabilitation for heart conditions"
  },
  {
    icon: Truck,
    title: "Emergency Clinic",
    description: "Emergency medical services for sudden health issues, including trauma and urgent conditions."
  },
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Comprehensive primary medical care for all health needs, including preventive care, health screenings, and treatment of common illnesses."
  },
  {
    icon: Clock,
    title: "Vascular Surgery",
    description: "Comprehensive vascular surgery services for the treatment of blood vessels and related conditions."
  },
  {
    icon: Activity,
    title: "General Surgery",
    description: "Specialized surgery for major medical conditions, including cancer, trauma, and orthopedic procedures."
  },
  {
    icon: Clock,
    title: "Dental Clinic",
    description: "Dental care and preventive health programs for a healthy, beautiful smile."
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-16 h-16 text-[#435BA1]">
                {service.icon === Heart || service.icon === Truck ? <service.icon /> : <service.icon size={32} />}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

