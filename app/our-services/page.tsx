'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Eye, Activity, Heart } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import CounterStatsSection from "@/components/counter-stats-section"

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

const healingMethods = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4a4 4 0 100 8 4 4 0 000-8z" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      </svg>
    ),
    title: "Sight Therapy",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud"
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Eye Medication",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud"
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h16M4 12l4-4m-4 4l4 4" />
      </svg>
    ),
    title: "Blindness Test",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Lasik Surgery",
    description: "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud"
  }
]

const services = [
  {
    title: "Serving People Through Exemplary Health Care",
    description: "At MediClinic, we are committed to serving our patients with excellence in health care. Our team of professionals is dedicated to providing personalized care and cutting-edge medical solutions."
  },
  {
    title: "Specialty Medicine with Compassion and Care",
    description: "We are proud to serve our community with compassion and care, delivering personalized health management solutions. Our team of experts is dedicated to providing the best possible care, using the latest medical advancements and a genuine concern for your well-being."
  },
  {
    title: "Caring For The Growing Needs Of Community",
    description: "At MediClinic, we are committed to serving our patients with excellence in health care. Our team of professionals is dedicated to providing personalized care and cutting-edge medical solutions."
  }
]

export default function OurServicesPage() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/services-paralax-1.jpg"
            alt="Medical stethoscope"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-[#40C7B9]">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Our Services</span>
            </div>
          </div>
        </div>

        {/* Our Methods In Healing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-medium text-[#333333] mb-4"
              >
                Our Methods In Healing
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16"
              >
                At MediClinic, we are committed to serving our patients with excellence in health care. Our team of professionals is dedicated to providing personalized care and cutting-edge medical solutions.
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {healingMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col items-center"
                  >
                    <div className="w-24 h-24 rounded-full border-2 border-[#40C7B9] flex items-center justify-center text-[#40C7B9] mb-6">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-medium text-[#333333] mb-4">{method.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{method.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Laboratory Place Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-medium text-[#333333]">
                  Laboratory Place<br />
                  In Medicine Practice
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  At MediClinic, we are committed to serving our patients with excellence in health care. Our team of professionals is dedicated to providing personalized care and cutting-edge medical solutions.
                </p>
                <Link
                  href="#"
                  className="inline-block px-6 py-3 bg-[#40C7B9] text-white rounded hover:bg-[#3BB5A8] transition-colors"
                >
                  Learn More
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/services-img-1.jpg"
                  alt="Laboratory"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <h3 className="text-xl font-medium text-[#333333] mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <Link
                    href="#"
                    className="inline-block px-6 py-3 bg-[#40C7B9] text-white rounded-full hover:bg-[#3BB5A8] transition-colors"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <CounterStatsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

