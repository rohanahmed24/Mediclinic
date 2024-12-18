'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Tablet, Brain, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "General Practitioner",
    description: "Specializing in preventive medicine and comprehensive patient care with over 10 years of experience.",
    image: "/team-member-1.jpg",
    icon: Stethoscope,
  },
  {
    name: "Dr. Michael Thompson",
    role: "Cardiologist",
    description: "Expert in cardiovascular health and advanced cardiac treatments with 15+ years of practice.",
    image: "/team-member-2.jpg",
    icon: Heart,
  },
  {
    name: "Dr. Lisa Anderson",
    role: "Neurologist",
    description: "Dedicated to neurological care and innovative treatment approaches for complex conditions.",
    image: "/team-member-3.jpg",
    icon: Brain,
  },
  {
    name: "Dr. Robert Wilson",
    role: "Internal Medicine",
    description: "Experienced in managing complex medical conditions with a focus on patient-centered care.",
    image: "/team-member-4.jpg",
    icon: Tablet,
  }
]

export default function TeamSection() {
  return (
    <section className="pt-20 bg-white dark:bg-gray-900">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-medium text-[#333333] dark:text-white mb-4"
            variants={itemVariants}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-[#8B6F62] max-w-3xl mx-auto text-lg"
            variants={itemVariants}
          >
            Our team of experienced medical professionals is dedicated to providing the highest quality care with compassion and expertise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
            >
              <motion.div 
                className="relative inline-block mb-6 overflow-hidden rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="relative w-[280px] h-[280px] mx-auto rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-[#40C7B9] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
                <motion.div 
                  className="absolute top-1 right-1 bg-[#40C7B9] p-2 rounded-full"
                  style={{ zIndex: 10 }}
                  whileHover={{ 
                    scale: 1.1, 
                    transition: { duration: 0.3 }
                  }}
                >
                  <member.icon className="h-5 w-5 text-white" />
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-xl font-medium text-[#333333] dark:text-white mb-2"
                whileHover={{ color: "#40C7B9" }}
              >
                {member.name}
              </motion.h3>
              <p className="text-[#435BA1] mb-4">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-[280px] mx-auto leading-relaxed">
                {member.description}
              </p>
              <motion.div 
                className="flex justify-center space-x-3"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    }
                  }
                }}
              >
                <motion.a
                  href="#" 
                  className="text-[#333333] dark:text-white hover:text-[#40C7B9] transition-colors duration-300"
                  aria-label="LinkedIn"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="#" 
                  className="text-[#333333] dark:text-white hover:text-[#40C7B9] transition-colors duration-300"
                  aria-label="Twitter"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <div className="bg-[#40C7B9] py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-xl mb-6 md:mb-0 text-center md:text-left">
            Contact us for more information or book an appointment
          </p>
          <Link 
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white text-[#40C7B9] rounded hover:bg-gray-100 transition-colors"
          >
            Book Appointment
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

