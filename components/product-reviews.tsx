'use client'

import { useState } from 'react'
import { Star, User } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface Review {
  id: string
  userName: string
  rating: number
  comment: string
  date: string
}

interface ProductReviewsProps {
  productId: string
  initialReviews: Review[]
}

export function ProductReviews({ productId, initialReviews }: ProductReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [newReview, setNewReview] = useState({ userName: '', rating: 5, comment: '' })

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    const review: Review = {
      id: Date.now().toString(),
      ...newReview,
      date: new Date().toLocaleDateString()
    }
    setReviews([review, ...reviews])
    setNewReview({ userName: '', rating: 5, comment: '' })
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-medium mb-6">Customer Reviews</h3>
      
      {/* Review Form */}
      <form onSubmit={handleSubmitReview} className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h4 className="text-lg font-medium mb-4">Write a Review</h4>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={newReview.userName}
            onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
            required
          />
          <div>
            <label className="block mb-2">Rating</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className={`text-2xl ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <Textarea
            placeholder="Your Review"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required
          />
          <Button type="submit" className="bg-[#40C7B9] hover:bg-[#3BB5A8]">
            Submit Review
          </Button>
        </div>
      </form>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-gray-200 dark:border-gray-700 pb-6"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <User className="h-6 w-6 text-gray-400" />
                <span className="font-medium">{review.userName}</span>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

