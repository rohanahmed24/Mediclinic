'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const locations = [
  {
    city: "New York",
    address: "198 West 21th Street, Suite 721",
    cityCode: "New York NY 10010",
    email: "mediclinic@qodeinteractive.com",
    phone: "(+880) 161 8990 566"
  },
  {
    city: "Amsterdam",
    address: "1514 Fairmont Avenue, Suite 54",
    cityCode: "Amsterdam 64723",
    email: "mediclinic@qodeinteractive.com",
    phone: "(+880) 161 8990 567"
  },
  {
    city: "London",
    address: "Green Hill Road, Suite 195",
    cityCode: "London 75947",
    email: "mediclinic@qodeinteractive.com",
    phone: "(+880) 161 8990 568"
  },
  {
    city: "San Francisco",
    address: "2566 Jim Rosa Lane, Suite 129",
    cityCode: "San Francisco 94118",
    email: "mediclinic@qodeinteractive.com",
    phone: "(+880) 161 8990 569"
  }
]

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

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[300px] overflow-hidden bg-[#40C7B9]">
          <div className="absolute inset-0 bg-[#40C7B9] bg-opacity-90" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-white/80">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Contact Us</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* Locations */}
              <motion.div variants={itemVariants} className="grid gap-8">
                {locations.map((location, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-medium text-[#333333] dark:text-white">{location.city}</h3>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1">
                      <p>{location.address}</p>
                      <p>{location.cityCode}</p>
                      <p>{location.email}</p>
                      <p>Phone: {location.phone}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded focus:outline-none focus:border-[#40C7B9] dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded focus:outline-none focus:border-[#40C7B9] dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded focus:outline-none focus:border-[#40C7B9] dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#40C7B9] text-white rounded hover:bg-[#3BB5A8] transition-colors"
                  >
                    Contact Us
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[600px] relative">
          <Image
            src="/b9d0324b-0c81-4d0e-9980-18776fe9fa25.png"
            alt="Map"
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

