'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Filter, Search } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { ProductCard } from '@/components/product-card'
import { PriceRangeSlider } from '@/components/price-range-slider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { products, categories, tags } from '@/lib/data'

const sortOptions = [
  { label: 'Default sorting', value: 'default' },
  { label: 'Sort by popularity', value: 'popularity' },
  { label: 'Sort by average rating', value: 'rating' },
  { label: 'Sort by latest', value: 'latest' },
  { label: 'Sort by price: low to high', value: 'price_asc' },
  { label: 'Sort by price: high to low', value: 'price_desc' },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [sortBy, setSortBy] = useState('default')
  const [email, setEmail] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  useEffect(() => {
    // Filter products when price range changes
    const filtered = products
      .filter(product => !selectedCategory || product.category === selectedCategory)
      .filter(product => 
        selectedTags.length === 0 || 
        selectedTags.some(tag => product.tags.includes(tag))
      )
      .filter(product => 
        product.price >= priceRange[0] && 
        product.price <= priceRange[1]
      )
      .filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'price_asc':
            return a.price - b.price
          case 'price_desc':
            return b.price - a.price
          case 'rating':
            return b.rating - a.rating
          default:
            return 0
        }
      })
    
    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [selectedCategory, selectedTags, priceRange, sortBy, searchQuery])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const Sidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <button
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center justify-between w-full text-left hover:text-[#40C7B9] ${
                  selectedCategory === category.name ? 'text-[#40C7B9]' : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-400 dark:text-gray-500">({category.count})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-medium mb-4">Filter by price</h3>
        <PriceRangeSlider
          min={0}
          max={500}
          value={priceRange}
          onValueChange={(newValue) => setPriceRange(newValue)}
        />
        <div className="mt-2 flex items-center justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-lg font-medium mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTags(
                  selectedTags.includes(tag)
                    ? selectedTags.filter(t => t !== tag)
                    : [...selectedTags, tag]
                )
              }}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-[#40C7B9] text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-lg font-medium mb-4">Newsletter</h3>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full bg-[#40C7B9] hover:bg-[#3BB5A8]">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/shop-parallax-img.jpg"
            alt="Medical equipment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Shop</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-[#40C7B9]">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Shop</span>
            </div>
          </div>
        </div>

        {/* Shop Section */}
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {/* Sidebar for larger screens */}
              <div className="hidden lg:block">
                <Sidebar />
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
                    Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} results
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => setIsSidebarOpen(true)}
                      className="lg:hidden bg-[#40C7B9] hover:bg-[#3BB5A8]"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <nav className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsSidebarOpen(false)} />
            <div className="absolute inset-y-0 right-0 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                      <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close panel</span>
                        {/* <X className="h-6 w-6" aria-hidden="true" /> */}
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}

