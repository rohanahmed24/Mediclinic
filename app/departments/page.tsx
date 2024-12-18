'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronDown } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useState } from 'react'

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

const timeSlots = ['8:00 - 9:00', '9:00 - 12:00', '13:00 - 15:00', '15:00 - 18:00']

const schedule = {
  Monday: [
    { department: 'Primary Health Care', doctor: 'Steven Elliott' },
    { department: 'Pediatric Clinic', doctor: 'Marilyn Hansen' },
    { department: 'Primary Health Care', doctor: 'Steven Elliott' },
    { department: 'Gynecological Clinic', doctor: 'Nicole Dixon' }
  ],
  Tuesday: [
    { department: 'Gynecological Clinic', doctor: 'Nicole Dixon' },
    { department: '', doctor: '' },
    { department: 'Primary Health Care', doctor: 'Steven Elliott' },
    { department: 'Outpatient Surgery', doctor: 'Angela Adams' }
  ],
  Wednesday: [
    { department: 'Neurology Clinic', doctor: 'Donald Williams' },
    { department: 'Laryngological Clinic', doctor: 'Megan Gardner' },
    { department: 'Cardiology Clinic', doctor: 'Jordan Kelley' },
    { department: 'Dental Clinic', doctor: 'Jerry Edwards' }
  ],
  Thursday: [
    { department: '', doctor: '' },
    { department: 'Pediatric Clinic', doctor: 'Marilyn Hansen' },
    { department: 'Dental Clinic', doctor: 'Jerry Edwards' },
    { department: '', doctor: '' }
  ],
  Friday: [
    { department: 'Primary Health Care', doctor: 'Steven Elliott' },
    { department: '', doctor: '' },
    { department: '', doctor: '' },
    { department: 'Primary Health Care', doctor: 'Steven Elliott' }
  ],
  Saturday: [
    { department: 'Outpatient Surgery', doctor: 'Angela Adams' },
    { department: 'Cardiology Clinic', doctor: 'Jordan Kelley' },
    { department: '', doctor: '' },
    { department: 'Neurology Clinic', doctor: 'Donald Williams' }
  ],
  Sunday: [
    { department: 'Pediatric Clinic', doctor: 'Marilyn Hansen' },
    { department: 'Primary Health Care', doctor: 'Steven Elliott' },
    { department: 'Laryngological Clinic', doctor: 'Megan Gardner' },
    { department: '', doctor: '' }
  ]
}

export default function DepartmentsPage() {
  const [filter, setFilter] = useState('All Events')

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/timetable-parallax-1.jpg"
            alt="Medical clock"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Timetable</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-[#40C7B9]">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Timetable</span>
            </div>
          </div>
        </div>

        {/* Timetable Section */}
        <section className="py-20 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Filter Dropdown */}
              <div className="mb-8">
                <div className="relative inline-block">
                  <button
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded flex items-center space-x-2 text-gray-800 dark:text-white"
                    onClick={() => setFilter(filter === 'All Events' ? 'Selected Events' : 'All Events')}
                  >
                    <span>{filter}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Timetable Grid */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-left font-medium text-gray-700 dark:text-gray-300">Time</th>
                      {Object.keys(schedule).map((day) => (
                        <th key={day} className="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-left font-medium text-gray-700 dark:text-gray-300">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((timeSlot, timeIndex) => (
                      <tr key={timeSlot}>
                        <td className="p-4 border border-gray-200 dark:border-gray-600 font-medium text-gray-700 dark:text-gray-300">{timeSlot}</td>
                        {Object.values(schedule).map((daySchedule, dayIndex) => (
                          <td key={dayIndex} className="p-4 border border-gray-200 dark:border-gray-600">
                            {daySchedule[timeIndex].department && (
                              <div>
                                <div className="font-medium text-[#435BA1] dark:text-[#6B8AFF]">
                                  {daySchedule[timeIndex].department}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  {daySchedule[timeIndex].doctor}
                                </div>
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#40C7B9] dark:bg-[#2A8C82] py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-white text-xl mb-6 md:mb-0 text-center md:text-left">
                Contact us for more information or book an appointment
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-white text-[#40C7B9] dark:text-[#2A8C82] rounded hover:bg-gray-100 transition-colors"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

