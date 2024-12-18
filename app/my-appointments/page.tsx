'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

interface Appointment {
  id: string
  department: string
  doctor: string
  date: string
  time: string
  status: 'Scheduled' | 'Completed' | 'Cancelled'
}

// Mock data for appointments
const mockAppointments: Appointment[] = [
  { id: '1', department: 'Cardiology', doctor: 'Dr. Sarah Mitchell', date: '2023-06-15', time: '10:00 AM', status: 'Scheduled' },
  { id: '2', department: 'Neurology', doctor: 'Dr. Michael Thompson', date: '2023-06-18', time: '2:30 PM', status: 'Scheduled' },
  { id: '3', department: 'Pediatrics', doctor: 'Dr. Emily Brown', date: '2023-06-10', time: '11:00 AM', status: 'Completed' },
]

export default function MyAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    // In a real application, you would fetch the appointments from an API
    setAppointments(mockAppointments)
  }, [])

  const handleCancelAppointment = (id: string) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: 'Cancelled' as const } : app
    ))
    toast.success('Appointment cancelled successfully')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">My Appointments</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-blue-200">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>My Appointments</span>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Upcoming Appointments</h2>
                {appointments.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="px-4 py-2 text-left">Department</th>
                          <th className="px-4 py-2 text-left">Doctor</th>
                          <th className="px-4 py-2 text-left">Date</th>
                          <th className="px-4 py-2 text-left">Time</th>
                          <th className="px-4 py-2 text-left">Status</th>
                          <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((appointment) => (
                          <tr key={appointment.id} className="border-b dark:border-gray-700">
                            <td className="px-4 py-2">{appointment.department}</td>
                            <td className="px-4 py-2">{appointment.doctor}</td>
                            <td className="px-4 py-2">{appointment.date}</td>
                            <td className="px-4 py-2">{appointment.time}</td>
                            <td className="px-4 py-2">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                appointment.status === 'Scheduled' ? 'bg-green-200 text-green-800' :
                                appointment.status === 'Completed' ? 'bg-blue-200 text-blue-800' :
                                'bg-red-200 text-red-800'
                              }`}>
                                {appointment.status}
                              </span>
                            </td>
                            <td className="px-4 py-2">
                              {appointment.status === 'Scheduled' && (
                                <>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="mr-2"
                                    onClick={() => toast.info('Edit functionality not implemented')}
                                  >
                                    <Edit className="h-4 w-4 mr-1" />
                                    Edit
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => handleCancelAppointment(appointment.id)}
                                  >
                                    <Trash2 className="h-4 w-4 mr-1" />
                                    Cancel
                                  </Button>
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">No appointments scheduled.</p>
                )}
              </div>
            </motion.div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/appointments">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book New Appointment
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

