'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, StarHalf, Heart } from 'lucide-react'
import { Product } from '@/lib/types'
import { useCart } from '@/hooks/use-cart'
import { useWishlist } from '@/components/wishlist-context'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = () => {
    addToCart(product)
    toast.success('Added to cart')
  }

  const handleToggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast.success('Removed from wishlist')
    } else {
      addToWishlist(product)
      toast.success('Added to wishlist')
    }
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        {product.onSale && (
          <div className="absolute left-2 top-2 z-10 rounded bg-red-500 px-2 py-1 text-xs text-white">
            Sale
          </div>
        )}
        <Image
          src= {product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
        <button
          onClick={handleToggleWishlist}
          className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 text-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <Heart
            className={`h-5 w-5 ${
              isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <Link href={`/shop/${product.id}`} className="text-lg font-medium hover:text-[#40C7B9]">
            {product.name}
          </Link>
          <div className="text-right">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
            <span className="ml-2 text-lg font-medium">${product.price}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {renderStars(product.rating)}
        </div>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-[#40C7B9] hover:bg-[#3BB5A8]"
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  )
}

