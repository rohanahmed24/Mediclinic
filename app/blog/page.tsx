'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Heart, MessageCircle, Share2 } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

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

const blogPosts = [
  {
    title: "Advances in Minimally Invasive Surgery: What Patients Need to Know",
    category: "Medical Technology",
    date: "January 10, 2025",
    description:
      "Explore the latest developments in minimally invasive surgical techniques and how they're improving patient recovery times and outcomes.",
    image: "/blog-post-4.jpg",
    author: "Dr. Sarah Chen",
    authorRole: "Chief of Surgery",
  },
  {
    title: "Understanding Heart Health: Prevention and Early Detection",
    category: "Cardiology",
    date: "January 8, 2025",
    description:
      "Learn about the latest guidelines for heart disease prevention, risk factors to watch for, and when to seek professional medical advice.",
    image: "/blog-post-6.jpg",
    author: "Dr. Michael Roberts",
    authorRole: "Senior Cardiologist",
  },
];

const quotes = [
  {
    text: "We are building a healthy and conscious community one individual at a time.",
    author: "Steven Scott"
  },
  {
    text: "Committed to health care",
    icon: true
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/blog-parallax-1.jpg"
            alt="Medical instruments"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Blog & News</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-[#40C7B9]">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog" className="hover:text-[#40C7B9]">Medical Blog & News</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Medical Blog & News</span>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <section className="py-20 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {blogPosts.map((post, index) => (
                <div key={index}>
                  <motion.article variants={itemVariants} className="space-y-6">
                    <div className="relative h-[500px] overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <Link href="#" className="text-[#435BA1] dark:text-[#6B8AFF] hover:underline">{post.category}</Link>
                        <span>{post.date}</span>
                      </div>
                      <h2 className="text-3xl font-medium text-gray-900 dark:text-white hover:text-[#40C7B9] dark:hover:text-[#5FE3D3] transition-colors">
                        <Link href="#">{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{post.description}</p>
                      <div className="flex items-center justify-between pt-4">
                        <Link
                          href="#"
                          className="text-[#40C7B9] dark:text-[#5FE3D3] hover:underline"
                        >
                          Learn more
                        </Link>
                        <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Heart className="h-5 w-5" />
                            <span>0</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="h-5 w-5" />
                            <span>0</span>
                          </div>
                          <Share2 className="h-5 w-5 cursor-pointer hover:text-[#40C7B9] dark:hover:text-[#5FE3D3]" />
                        </div>
                      </div>
                    </div>
                  </motion.article>

                  {quotes[index] && (
                    <motion.div
                      variants={itemVariants}
                      className="my-16 bg-[#435BA1] dark:bg-[#2A3A6A] text-white p-12 rounded-lg text-center"
                    >
                      {quotes[index].icon ? (
                        <div className="flex items-center justify-center space-x-2">
                          <Share2 className="h-6 w-6" />
                          <p className="text-xl">{quotes[index].text}</p>
                        </div>
                      ) : (
                        <>
                          <p className="text-xl mb-4">"{quotes[index].text}"</p>
                          <p className="text-sm opacity-80">{quotes[index].author}</p>
                        </>
                      )}
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

