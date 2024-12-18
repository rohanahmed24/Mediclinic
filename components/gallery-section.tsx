'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PlaceholderImage } from './placeholder-image'

const galleryImages = [
  {
    src: '/h1-img-1.jpg',
    alt: 'Surgical team performing operation',
    title: 'Advanced Surgical Care'
  },
  {
    src: '/h1-img-2.jpg',
    alt: 'Modern hospital room',
    title: 'Comfortable Recovery Rooms'
  },
  {
    src: '/h1-img-3.jpg',
    alt: 'Physical therapy session',
    title: 'Professional Physical Therapy'
  },
  {
    src: '/h1-img-4.jpg',
    alt: 'Medical consultation',
    title: 'Personal Consultation'
  },
  {
    src: '/h1-img-5.jpg',
    alt: 'Medical team',
    title: 'Expert Medical Team'
  },
  {
    src: './h1-img-6.jpg',
    alt: 'Medical equipment',
    title: 'State-of-the-art Equipment'
  },
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

export default function GallerySection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-medium text-gray-900 dark:text-white mb-4"
            >
              Our Medical Facilities
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300"
            >
              Experience our state-of-the-art facilities and dedicated medical professionals committed to providing the highest quality of care.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative h-[300px] w-full">
                  {typeof image.src === 'string' ? <img src={image.src} alt={image.alt} className="h-full w-full object-cover" /> : image.src}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">{image.title}</h3>
                      <Link 
                        href="#" 
                        className="inline-block text-[#40C7B9] hover:text-white transition-colors duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

