'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: 'Chosen For Excellence',
    description: 'Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Care For Your Smile',
    description: 'Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Dentistry With Heart',
    description: 'Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl',
    image: '/placeholder.svg?height=300&width=400'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
            >
              <div className="relative h-[300px] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#333333] dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <Link 
                href="#"
                className="inline-block text-[#40C7B9] hover:text-[#3BB5A8] transition-colors duration-300"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

