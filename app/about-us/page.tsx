"use client";

import { motion, useInView } from "framer-motion";

import Image from "next/image";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

import CountUp from "react-countup";

import { useRef } from "react";

import SiteHeader from "@/components/site-header";

import SiteFooter from "@/components/site-footer";

const containerVariants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,

      delayChildren: 0.3,
    },
  },
};

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
};

export default function AboutUsPage() {
  const statsRef = useRef<HTMLElement>(null);

  const isInView = useInView(statsRef, { once: true, amount: 0.5 });

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}

        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="/about-us-parallax.jpg"
            alt="Medical team"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black bg-opacity-50" />

          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About MediClinic
            </h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-[#40C7B9]">
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span>About Us</span>
            </div>
          </div>
        </div>

        {/* Patient Care Section */}

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-medium">
                  Excellence in Healthcare Since 1995
                </h2>

                <p className="text-gray-600 dark:text-gray-300">
                  MediClinic has been at the forefront of medical excellence for
                  over 25 years, providing comprehensive healthcare services
                  with cutting-edge technology and compassionate care. Our
                  state-of-the-art facility combines advanced medical expertise
                  with a patient-centered approach.
                </p>
                <button className="px-6 py-3 bg-[#40C7B9] text-white rounded hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative h-[700px]"
              >
                <Image
                  src="/about-us-img-1.jpg"
                  alt="Medical professionals"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-medium">
                  Our Mission & Values
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To deliver exceptional healthcare services while maintaining
                  the highest standards of medical excellence and patient care.
                  We are committed to continuous innovation, professional
                  development, and community wellness.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="relative h-[700px]"
              >
                <Image
                  src="/about-us-blog-img-1.jpg"
                  alt="Medical professionals"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose MediClinic Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Cardiac Clinic",

                  description:
                    "mediclinic.com provides comprehensive cardiac care, including diagnostics, treatment, and rehabilitation for heart conditions.",
                },

                {
                  title: "Emergency Clinic",

                  description:
                    "emergency care for sudden health issues, including trauma and urgent conditions.",
                },

                {
                  title: "Precise Diagnosis",

                  description:
                    "precise diagnosis and treatment for medical conditions, including cancer, trauma, and orthopedic procedures.",
                },

                {
                  title: "Primary Care",

                  description:
                    "primary care for overall well-being, including preventive care, health screenings, and personalized health management.",
                },

                {
                  title: "Vascular Surgery",

                  description:
                    "specialized surgery for vascular conditions, including heart, blood vessels, and blood vessels.",
                },

                {
                  title: "General Surgery",

                  description:
                    "general surgery for complex medical conditions, including trauma, cancer, and orthopedic procedures.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-700 dark:text-gray-300"
                >
                  <h3 className="text-xl font-medium mb-4">{service.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}

        <section ref={statsRef} className="py-16 bg-[#435BA1] text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: 4, label: "Health Sections" },

                { number: 29, label: "Different Services" },

                { number: 78, label: "Blood Donations" },

                { number: 256, label: "Satisfied Patients" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {isInView && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        useEasing={true}
                        useGrouping={true}
                        separator=","
                      />
                    )}
                  </div>

                  <div className="text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Chosen For Excellence",

                  image: "/about-us-blog-img-1.jpg",
                },

                {
                  title: "Care For Your Smile",

                  image: "/about-us-blog-img-2.jpg",
                },

                {
                  title: "Dentistry With Heart",

                  image: "/about-us-blog-img-3.jpg",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
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

                  <h3 className="text-xl font-medium mb-4">{feature.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Ut wisi enim ad minim veniam, quis laore nostrud exerci
                    tation ulm hedi corper turet suscipit lobortis
                  </p>

                  <Link href="#" className="text-[#40C7B9] hover:underline">
                    Read More
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
