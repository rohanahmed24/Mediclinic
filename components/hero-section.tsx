'use client'

import { useState, useEffect } from 'react'
import { Phone, Calendar, Clock, Heart, TreesIcon as Lungs } from 'lucide-react'
import { motion } from 'framer-motion'

const sliderImages = [
  { 
    id: 1, 
    src: <div className="relative">
            <img src="/h1-elliptical-slider-img-1.jpg" alt="Slider Image 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div> 
          </div>
  },
  { 
    id: 2, 
    src: <div className="relative">
            <img src="/h1-elliptical-slider-img-2.jpg" alt='Slider Image 2' className='w-full h-full object-cover' />
            <div className="absolute inset-0 bg-black/50"></div> 
          </div>
  },
  { 
    id: 3, 
    src: <div className="relative">
            <img src="/h1-elliptical-slider-img-3.jpg" alt='Slider Image 3' className='w-full h-full object-cover' />
            <div className="absolute inset-0 bg-black/50"></div> 
          </div>
  }
]
const StomachIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a7 7 0 0 0-7 7v3c0 3.866 3.134 7 7 7s7-3.134 7-7v-3a7 7 0 0 0-7-7z" />
    <path d="M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
)

const LiverIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
  </svg>
)

const KidneysIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 4c-1.5 0-3 .5-3 2.5S8.5 9 10 9s3-.5 3-2.5S11.5 4 10 4z" />
    <path d="M14 4c1.5 0 3 .5 3 2.5S15.5 9 14 9s-3-.5-3-2.5S12.5 4 14 4z" />
    <path d="M10 9v12" />
    <path d="M14 9v12" />
  </svg>
)

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="relative">
        <div className="h-[700px] overflow-hidden">
          {sliderImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImageIndex === image.id - 1 ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
              style={{ zIndex: currentImageIndex === image.id - 1 ? 1 : 0 }}
            >
              {image.src}
            </motion.div>
          ))}
          
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-medium mb-4 text-white"
              >
                An Advanced
                <br />
                Medicine Practice
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-200 mb-8"
              >
                Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo consequat duis autem vel eum iriure
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="container mx-auto px-4 relative z-20 -mt-32 mb-24"
      >
        <div className="grid md:grid-cols-3 overflow-hidden rounded-lg shadow-lg">
          {/* Emergency Cases Card */}
          <div className="bg-[#435BA1] p-12">
            <div className="flex flex-col h-full">
              <Phone className="h-8 w-8 text-white mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-medium text-white mb-4">Emergency Cases</h3>
              <p className="text-gray-200 text-sm mb-6">
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation
              </p>
              <p className="text-3xl font-medium text-white mt-auto">1-800-400-7400</p>
            </div>
          </div>

          {/* Doctors Timetable Card */}
          <div className="bg-[#5B75CF] p-12">
            <Calendar className="h-8 w-8 text-white mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-medium text-white mb-4">Doctors Timetable</h3>
            <p className="text-gray-200 text-sm">
              Duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend 
              option congue nihil imperdiet molestie consequat, vel legentis in iis qui facit
            </p>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-[#40C7B9] p-12">
            <Clock className="h-8 w-8 text-white mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-medium text-white mb-4">Opening Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-white">
                <span>Monday - Friday</span>
                <span>8.00-17.00</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Saturday</span>
                <span>9.30-17.30</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Sunday</span>
                <span>9.30-15.00</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

