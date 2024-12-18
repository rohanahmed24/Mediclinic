'use client'

import { MapPin, Phone, Mail } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link'

const newsItems = [
  {
    title: "Advanced Laboratory Research",
    date: "December 9, 2023",    
    image: "/blog-post-1-150x150.jpg"
  },
  {
    title: "Breakthrough in Clinical Testing",
    date: "December 8, 2023",
    image: "/blog-post-2-150x150.jpg"
  },
  {
    title: "New Blood Analysis Technology",
    date: "December 7, 2023",
    image: "/blog-post-3-150x150.jpg"
  }
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#1E1E1E] dark:bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-[#40C7B9]">Medi</span>
              <span className="text-2xl font-bold text-white">Clinic</span>
            </Link>
            <p className="text-gray-400 dark:text-gray-300 mb-6">
              Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis augue duis dolore te feugait nulla facilisi mazim placerat
            </p>
            <div className="text-gray-400 dark:text-gray-300 space-y-2 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#40C7B9]" />
                <span>Street, 11000 Helsinki, Finland</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#40C7B9]" />
                <span>(+123)11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#40C7B9]" />
                <span>mediclinic@qodeinteractive.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#40C7B9] transition-colors"
              >
                <FaFacebookF className="text-white text-lg" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#40C7B9] transition-colors"
              >
                <FaTwitter className="text-white text-lg" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#40C7B9] transition-colors"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#40C7B9] transition-colors">
                <FaYoutube className="text-white text-lg" />
              </Link>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-[#40C7B9] dark:text-[#5FE3D3] text-xl font-medium mb-6">Latest News</h3>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                  <div>
                    <h4 className="text-white dark:text-gray-100 hover:text-[#40C7B9] dark:hover:text-[#5FE3D3] transition-colors cursor-pointer">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-[#40C7B9] dark:text-[#5FE3D3] text-xl font-medium mb-6">Contact Us</h3>
            <p className="text-gray-400 dark:text-gray-300 mb-6">
              For all the latest news and updates,<br />
              follow us on Twitter: @QodeInteractive.com
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#2A2A2A] dark:bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#40C7B9] dark:focus:border-[#5FE3D3]"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-[#2A2A2A] dark:bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#40C7B9] dark:focus:border-[#5FE3D3]"
              />
              <button
                type="submit"
                className="bg-[#40C7B9] dark:bg-[#5FE3D3] text-white dark:text-gray-900 px-6 py-2 rounded hover:bg-[#3BB5A8] dark:hover:bg-[#4FD3C3] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400 dark:text-gray-300">
          <p>&copy; 2017 Qode Interactive. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

