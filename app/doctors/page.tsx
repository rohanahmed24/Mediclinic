'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Scissors, Activity, Pill, Apple, Heart, Stethoscope, Brain, Truck as FirstAid } from 'lucide-react'
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

const doctors = [
  {
    name: "Angela Adams",
    specialty: "Cardiac Surgery",
    description: "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
    image: "/team-member-1.jpg",
    icon: Scissors,
  },
  {
    name: "Jordan Kelley",
    specialty: "Cardiology",
    description: "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
    image: "/team-member-4.jpg",
    icon: Activity,
  },
  {
    name: "Nicole Dixon",
    specialty: "Gynecology",
    description: "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
    image: "/team-member-2.jpg",
    icon: Pill,
  },
  {
    name: "Steven Elliott",
    specialty: "Dietetics",
    description: "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
    image: "/team-member-3.jpg",
    icon: Apple,
  },
  {
    name: "Jerry Edwards",
    specialty: "Dentist",
    description: "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
    image: "/team-member-4.jpg",
    icon: Heart,
  },
  {
    name: "Megan Gardner",
    specialty: "Pulmonology",
    description: "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
    image: "/team-member-5.jpg",
    icon: Stethoscope,
  },
  {
    name: "Donald Williams",
    specialty: "Neurology",
    description: "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
    image: "/team-member-6.jpg",
    icon: Brain,
  },
  {
    name: "Marilyn Hansen",
    specialty: "Pediatrics",
    description: "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
    image: "/team-member-7.jpg",
    icon: FirstAid,
  }
]

export default function DoctorsPage() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/team-parallax-1.jpg"
            alt="Medical team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctors</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-[#40C7B9]">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Our Doctors</span>
            </div>
          </div>
        </div>

        {/* Doctors Section */}
        <section className="py-20 dark:bg-gray-800">
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
                className="text-3xl md:text-4xl font-medium text-[#333333] dark:text-white mb-4"
              >
                Our Best Doctors
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16"
              >
                Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent claritatem insitamconsequat duis autem facilisis at vero eros
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {doctors.map((doctor, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <div className="relative inline-block mb-6">
                      <div className="relative w-[280px] h-[280px] mx-auto rounded-full overflow-hidden">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-[#40C7B9] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      </div>
                      <div className="absolute top-1 right-1 bg-[#40C7B9] p-2 rounded-full" style={{ zIndex: 10 }}>
                        <doctor.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-[#333333] dark:text-white mb-2">{doctor.name}</h3>
                    <p className="text-[#435BA1] dark:text-[#6B8AFF] mb-4">{doctor.specialty}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-[280px] mx-auto">{doctor.description}</p>
                    <div className="flex justify-center space-x-3">
                      <Link 
                        href="#" 
                        className="text-[#333333] dark:text-gray-300 hover:text-[#40C7B9] transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </Link>
                      <Link 
                        href="#" 
                        className="text-[#333333] dark:text-gray-300 hover:text-[#40C7B9] transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-medium text-[#333333] dark:text-white mb-8">Need Help Finding The Right Doctor?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get helpful information on what's important to you when choosing your kids pediatrician.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Name*"
                  className="flex-1 px-4 py-3 bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded focus:outline-none focus:border-[#40C7B9] dark:text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="flex-1 px-4 py-3 bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded focus:outline-none focus:border-[#40C7B9] dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#40C7B9] text-white rounded hover:bg-[#3BB5A8] transition-colors"
                >
                  Contact Us
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

