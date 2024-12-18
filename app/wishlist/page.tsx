'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { ProductCard } from '@/components/product-card'
import { useWishlist } from '@/components/wishlist-context'

export default function WishlistPage() {
  const { wishlist } = useWishlist()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">My Wishlist</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-[#40C7B9]">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Wishlist</span>
            </div>
          </div>
        </div>

        {/* Wishlist Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {wishlist.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlist.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-xl mb-4">Your wishlist is empty.</p>
                <Link
                  href="/shop"
                  className="inline-block px-6 py-3 bg-[#40C7B9] text-white rounded hover:bg-[#3BB5A8] transition-colors"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

