'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import useCartStore from '@/lib/store'
import { Product } from '@/types/product'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const addToCart = useCartStore(state => state.addToCart)
  const cart = useCartStore(state => state.cart)

  // Check if product is already in cart
  const isInCart = cart.some(item => item.id === product.id)

  const handleAddToCart = () => {
    if (!isInCart) {
      setIsAdding(true)
      for (let i = 0; i < quantity; i++) {
        addToCart(product)
      }
      
      setTimeout(() => {
        setIsAdding(false)
      }, 1000)
    }
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Product Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <span className="bg-red-500 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl">
              Out of Stock
            </span>
          </div>
        )}
      </motion.div>

      {/* Product Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col"
      >
        <div className="mb-6">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-indigo-600 uppercase tracking-wider mb-3 font-bold"
          >
            {product.category}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {product.name}
          </motion.h1>
          
          {/* Rating */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center mb-6"
          >
            <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-xl">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-700 ml-3 font-semibold">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </motion.div>

          {/* Price */}
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8"
          >
            ${product.price.toFixed(2)}
          </motion.p>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-8 glass p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </motion.div>

          {/* Stock Status */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <p className="text-sm font-semibold">
              Status:{' '}
              <span className={`${product.inStock ? 'text-green-600' : 'text-red-600'} text-base`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </span>
            </p>
          </motion.div>
        </div>

        {/* Quantity and Add to Cart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-auto space-y-6"
        >
          <div className="flex items-center space-x-6">
            <label className="text-gray-700 font-semibold text-lg">Quantity:</label>
            <div className="flex items-center glass rounded-2xl overflow-hidden shadow-lg">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={decrementQuantity}
                className="px-6 py-3 text-gray-600 hover:bg-indigo-50 transition-colors font-bold text-xl"
                disabled={!product.inStock}
              >
                -
              </motion.button>
              <span className="px-8 py-3 border-x border-gray-200 font-bold text-xl">
                {quantity}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={incrementQuantity}
                className="px-6 py-3 text-gray-600 hover:bg-indigo-50 transition-colors font-bold text-xl"
                disabled={!product.inStock}
              >
                +
              </motion.button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: isInCart ? 1 : 1.02 }}
            whileTap={{ scale: isInCart ? 1 : 0.98 }}
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding || isInCart}
            className={`w-full py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl ${
              product.inStock
                ? (isAdding || isInCart)
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-purple-500/50'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {(isAdding || isInCart) ? '✓ Added to Cart!' : product.inStock ? '🛍️ Add to Cart' : 'Out of Stock'}
          </motion.button>

          {/* Additional Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="glass p-6 rounded-2xl space-y-3"
          >
            {[
              'Free shipping on orders over $100',
              '30-day return policy',
              'Secure payment processing'
            ].map((text, index) => (
              <p key={index} className="flex items-center text-sm text-gray-700">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {text}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
