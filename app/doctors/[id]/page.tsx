'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Calendar, Star, MapPin, Phone, Mail } from 'lucide-react'
import { useParams } from 'next/navigation'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from '@/components/ui/button'
import { DoctorReviews } from '@/components/doctor-reviews'
import { toast } from 'sonner'
import { doctors, type Doctor } from '@/lib/doctors'

export default function DoctorProfilePage() {
  const params = useParams()
  const [doctor, setDoctor] = useState<Doctor | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDoctor = async () => {
      setIsLoading(true)
      try {
        const doctorData = doctors.find(d => d.id === params.id)
        if (!doctorData) {
          throw new Error('Doctor not found')
        }
        setDoctor(doctorData)
      } catch (error) {
        console.error('Error fetching doctor:', error)
        toast.error('Failed to load doctor information')
      } finally {
        setIsLoading(false)
      }
    }

    fetchDoctor()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">Loading doctor information...</p>
      </div>
    )
  }

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-xl text-gray-700 dark:text-gray-300">Doctor not found</p>
        <Link href="/doctors" className="mt-4 text-blue-500 hover:underline">
          View all doctors
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{doctor.name}</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-blue-200">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/doctors" className="hover:text-blue-200">Doctors</Link>
              <ChevronRight className="h-4 w-4" />
              <span>{doctor.name}</span>
            </div>
          </div>
        </div>

        {/* Doctor Profile */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{doctor.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{doctor.specialty}</p>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-5 w-5 ${
                              index < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {doctor.rating} ({doctor.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-gray-400" />
                        <span>{doctor.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-gray-400" />
                        <span>{doctor.email}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full mt-6 bg-[#40C7B9] hover:bg-[#3BB5A8]">
                      <Link href={`/appointments?doctor=${doctor.id}`}>
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Appointment
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                >
                  <h3 className="text-2xl font-semibold mb-4">About Dr. {doctor.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{doctor.bio}</p>
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <ul className="list-disc list-inside mb-6 text-gray-600 dark:text-gray-300">
                    {doctor.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                  <h4 className="text-xl font-semibold mb-2">Experience</h4>
                  <ul className="list-disc list-inside mb-6 text-gray-600 dark:text-gray-300">
                    {doctor.experience.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <DoctorReviews doctorId={doctor.id} initialReviews={[]} />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
