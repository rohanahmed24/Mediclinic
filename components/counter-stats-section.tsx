"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"
import CountUp from 'react-countup';

const stats = [
  { number: 22, label: 'Health Sections' },
  { number: 146, label: 'Different Services' },
  { number: 388, label: 'Blood Donations' },
  { number: 1280, label: 'Satisfied Patients' }
]

export default function CounterStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref}
      className="relative py-20 text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/h1-parallax-1.jpg"
          alt="Medical team background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {isInView && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2}
                    separator=","
                  />
                )}
              </div>
              <div className="text-sm md:text-base lg:text-lg font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}