'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

const departments = [
  'Cardiology',
  'Neurology',
  'Pediatrics',
  'Orthopedics',
  'Dermatology',
  'Ophthalmology',
  'Gynecology',
]

export default function AppointmentsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    time: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the appointment data to your backend
    console.log('Appointment submitted:', formData)
    toast.success('Appointment booked successfully!')
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      date: '',
      time: '',
      message: '',
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Book an Appointment</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-blue-200">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Appointments</span>
            </div>
          </div>
        </div>

        {/* Appointment Booking Form */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">Schedule Your Visit</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <Select
                  name="department"
                  value={formData.department}
                  onValueChange={(value) => setFormData({ ...formData, department: value })}
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </Select>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Additional Message (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

