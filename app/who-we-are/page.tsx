'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import CounterStatsSection from "@/components/counter-stats-section"

const features = [
  {
    title: "Power To Heal",
    description: "At MediClinic, we believe in the power of innovative healthcare. Our dedicated team of professionals is committed to providing cutting-edge medical solutions and personalized care, ensuring the best possible outcomes for our patients.",
    image: "/who-we-are/who-we-are-img-1.jpg" 
  },
  {
    title: "Powerful Medicine",
    description: "We are committed to delivering cutting-edge medical expertise and personalized care, ensuring the best possible outcomes for our patients.",
    image: "/who-we-are/who-we-are-img-2.jpg" 
  },
  {
    title: "Keeping You Well",
    description: "We are dedicated to providing comprehensive health care services, including preventive care, health screenings, and personalized health management.",
    image: "/who-we-are/who-we-are-img-3.jpg" 
  }
]

const services = [
  {
    title: "Serving People Through Exemplary Health Care",
    description: "At MediClinic, we are committed to serving our patients with excellence in health care. Our team of professionals is dedicated to providing personalized care and cutting-edge medical solutions.",
  },
  {
    title: "Specialty Medicine with Compassion and Care",
    description: "We pride ourselves on delivering compassionate care in our specialty medicine services. Our team of experts provides the highest quality medical care.",
  },
  {
    title: "Caring For The Growing Needs Of Community",
    description: "We are committed to serving our community with compassion and care, delivering personalized health management solutions.",
  }
]

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/who-we-are/who-we-are-parallax-1.jpg"
            alt="Medical team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-[#40C7B9]">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Who We Are</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative h-[200px] mb-6">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#333333] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                  <Link href="#" className="text-[#40C7B9] hover:underline">
                    Read More
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Healthy Lifestyle Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">How To Live a<br />Healthy Lifestyle?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At MediClinic, we are committed to serving our community with compassion and care, delivering personalized health management solutions. Our team of experts is dedicated to providing the best possible care, using the latest medical advancements and a genuine concern for your well-being.
                </p>
                <div className="flex items-center"> 
                  <span className="text-[#40C7B9] font-medium mr-4">Victoria Fernandez</span>
                  
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/about-us-img-1.jpg"
                  alt="Doctors"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Counter Stats Section */}
        <CounterStatsSection />

        {/* Services Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-medium text-[#333333] mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <Link
                    href="#"
                    className="inline-block px-6 py-3 bg-[#40C7B9] text-white rounded-full hover:bg-[#3BB5A8] transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-8">
              "At MediClinic, we're committed to providing exceptional healthcare with compassion and expertise. Our dedicated team of professionals strives to improve the lives of our patients every day, combining cutting-edge medical technology with personalized care. We believe in not just treating illnesses, but in promoting overall wellness and empowering our patients to lead healthier, happier lives."
            </blockquote>
            <div className="flex justify-center space-x-4">
              {['/who-we-are/h10-testimonials-1.png', '/who-we-are/h10-testimonials-2.png', '/who-we-are/h10-testimonials-3.png'].map((image, index) => (
                <div key={index} className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <Image
                    src={image}
                    alt={'Testimonial'}
                    width={80} 
                    height={80} 
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-[#40C7B9] font-medium">Jessica Sharp</p>
            <p className="text-gray-600 dark:text-gray-300">Senior Surgeon</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div> 
    )
  }
