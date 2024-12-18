'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

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

const locations = [
  {
    city: "New York",
    address: "156 West 57th Street, Suite 721",
    cityCode: "New York NY 10019",
    email: "mediclinic@qodeinteractive.com",
    phone: "(386) 131 8956 356"
  },
  {
    city: "Amsterdam",
    address: "Box 21",
    cityCode: "1071 BR Amsterdam",
    email: "mediclinic@qodeinteractive.com",
    phone: "(386) 131 8956 357"
  },
  {
    city: "London",
    address: "Houghton Street, Suite 721",
    cityCode: "London EC2A",
    email: "mediclinic@qodeinteractive.com",
    phone: "(386) 131 8956 358"
  },
  {
    city: "San Francisco",
    address: "2130 Fulton Street",
    cityCode: "San Francisco, CA 94117",
    email: "mediclinic@qodeinteractive.com",
    phone: "(386) 131 8956 359"
  }
]

export default function OurClinicPage() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/clinic-parallax-1.jpg"
            alt="Medical procedure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clinic</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-[#40C7B9]">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Our Clinic</span>
            </div>
          </div>
        </div>

        {/* Your Hospital For Life Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-medium text-[#333333] mb-4">Your Hospital For Life</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl ut aliquip ex ea commodo consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                <Image
                  src="/clinic-img-1.jpg"
                  alt="Medical equipment 1"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
                <Image
                  src="/clinic-img-2.jpg"
                  alt="Medical equipment 2"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Dedication Beyond Measure Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-medium text-[#333333] mb-4">Dedication Beyond Measure</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl ut aliquip ex ea commodo consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
                <Image
                  src="/clinic-img-3.jpg"
                  alt="Computer setup"
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
                <Image
                  src="/clinic-img-4.jpg"
                  alt="Hospital hallway"
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
                <Image
                  src="/clinic-img-5.jpg"
                  alt="Hospital beds"
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <h3 className="text-xl font-medium text-[#333333] mb-4">{location.city}</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>{location.address}</p>
                    <p>{location.cityCode}</p>
                    <p>{location.email}</p>
                    <p>Phone: {location.phone}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Partnerships For Health Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-medium text-[#333333] mb-4">Partnerships For Health</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl ut aliquip ex ea commodo consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                <Image
                  src="/clinic-img-6.jpg"
                  alt="Medical procedure 1"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
                <Image
                  src="/clinic-img-7.jpg"
                  alt="Medical procedure 2"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

