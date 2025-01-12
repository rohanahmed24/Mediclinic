'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Minus, Plus, Star, StarHalf } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { toast } from 'sonner'
import { ProductCard } from '@/components/product-card'
import { ProductReviews } from '@/components/product-reviews'
import { products } from '@/lib/data'
import type { Product } from '@/lib/types'

export function ProductView({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    toast.success(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart`)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-current text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 text-yellow-400" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-4 w-4 text-gray-300" />)
    }

    return stars
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  // Mock initial reviews
  const initialReviews = [
    {
      id: '1',
      userName: 'John Doe',
      rating: 5,
      comment: 'Great product! Highly recommended.',
      date: '2023-06-01'
    },
    {
      id: '2',
      userName: 'Jane Smith',
      rating: 4,
      comment: 'Good quality, but a bit pricey.',
      date: '2023-05-28'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 flex items-center space-x-2 text-sm">
            <Link href="/" className="hover:text-[#40C7B9]">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/shop" className="hover:text-[#40C7B9]">Shop</Link>
            <ChevronRight className="h-4 w-4" />
            <span>{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square"
            >
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
              {product.onSale && (
                <div className="absolute left-4 top-4 z-10 rounded bg-red-500 px-2 py-1 text-sm text-white">
                  Sale
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-medium">{product.name}</h1>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">({product.rating} rating)</span>
              </div>

              <div className="text-2xl font-medium">
                {product.originalPrice && (
                  <span className="text-gray-500 line-through mr-4">${product.originalPrice}</span>
                )}
                ${product.price}
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="bg-[#40C7B9] hover:bg-[#3BB5A8]"
                >
                  Add to Cart
                </Button>
              </div>

              <div>
                <h3 className="font-medium mb-2">Categories:</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/shop?category=${product.category}`}
                    className="text-[#40C7B9] hover:underline"
                  >
                    {product.category}
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/shop?tag=${tag}`}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 hover:bg-gray-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Reviews Section */}
          <ProductReviews productId={product.id} initialReviews={initialReviews} />

          {/* Related Products Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-medium mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
