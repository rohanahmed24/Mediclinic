'use client'

import { useState, useRef, useEffect } from 'react'
import Link from "next/link"
import { Phone, Mail, Search, ShoppingCart, Menu, ChevronDown, X, Moon, Sun, Calendar, ClipboardList, FileText } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'
import { useDarkMode } from '@/contexts/dark-mode-context'

export default function SiteHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const { items } = useCart()
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0)
  const { darkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 border-b dark:border-gray-700">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Medi</span>
              <span className="text-2xl font-bold text-gray-800 dark:text-white">Clinic</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">+(123) 1800-567-8990</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">+(123) 1800-453-1546</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-600 dark:text-blue-400">Mon - Fri: 9:00AM - 5:00PM</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Sat - Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-4">
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-blue-600 dark:text-blue-400">Home</Link>
            <div 
              ref={dropdownRef}
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Pages
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
                  isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ minWidth: '200px' }}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1">
                  <Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white" role="menuitem">About Us</Link>
                  <Link href="/who-we-are" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white" role="menuitem">Who We Are</Link>
                  <Link href="/our-clinic" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white" role="menuitem">Our Clinic</Link>
                  <Link href="/our-services" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white" role="menuitem">Our Services</Link>
                  <Link href="/contact-us" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white" role="menuitem">Contact Us</Link>
                </div>
              </div>
            </div>
            <Link href="/doctors" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Doctors</Link>
            <Link href="/departments" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Departments</Link>
            <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
            <Link href="/shop" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Shop</Link>
            <Link href="/appointments" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Calendar className="inline-block mr-1 h-5 w-5" />
              Book Appointment
            </Link>
            <Link href="/my-appointments" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <ClipboardList className="inline-block mr-1 h-5 w-5" />
              My Appointments
            </Link>
            <Link href="/my-records" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <FileText className="inline-block mr-1 h-5 w-5" />
              My Records
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-blue-600 dark:hover:text-blue-400">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/checkout" className="p-2 hover:text-blue-600 dark:hover:text-blue-400 relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link href="/" className="text-blue-600 dark:text-blue-400">Home</Link>
            <Link href="/about-us" className="text-gray-600 dark:text-gray-300">About Us</Link>
            <Link href="/who-we-are" className="text-gray-600 dark:text-gray-300">Who We Are</Link>
            <Link href="/our-clinic" className="text-gray-600 dark:text-gray-300">Our Clinic</Link>
            <Link href="/our-services" className="text-gray-600 dark:text-gray-300">Our Services</Link>
            <Link href="/contact-us" className="text-gray-600 dark:text-gray-300">Contact Us</Link>
            <Link href="/doctors" className="text-gray-600 dark:text-gray-300">Doctors</Link>
            <Link href="/departments" className="text-gray-600 dark:text-gray-300">Departments</Link>
            <Link href="/blog" className="text-gray-600 dark:text-gray-300">Blog</Link>
            <Link href="/shop" className="text-gray-600 dark:text-gray-300">Shop</Link>
            <Link href="/appointments" className="text-gray-600 dark:text-gray-300">
              <Calendar className="inline-block mr-1 h-5 w-5" />
              Book Appointment
            </Link>
            <Link href="/my-appointments" className="text-gray-600 dark:text-gray-300">
              <ClipboardList className="inline-block mr-1 h-5 w-5" />
              My Appointments
            </Link>
            <Link href="/my-records" className="text-gray-600 dark:text-gray-300">
              <FileText className="inline-block mr-1 h-5 w-5" />
              My Records
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

