'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useCartStore from '@/lib/store'
import { useState } from 'react'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addToCart = useCartStore(state => state.addToCart)
  const cart = useCartStore(state => state.cart)
  const [isAdding, setIsAdding] = useState(false)

  // Check if product is already in cart
  const isInCart = cart.some(item => item.id === product.id)

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!isInCart) {
      setIsAdding(true)
      addToCart(product)
      
      setTimeout(() => {
        setIsAdding(false)
      }, 1000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/product/${product.id}`} className="group block h-full">
        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
        >
          <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {!product.inStock && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Out of Stock
              </div>
            )}
            {product.featured && product.inStock && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
              >
                ✨ Featured
              </motion.div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-5 flex flex-col flex-grow">
            <p className="text-xs text-indigo-600 uppercase tracking-wider mb-2 font-semibold">
              {product.category}
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2 font-medium">
                ({product.reviews})
              </span>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </p>
              <motion.button
                whileHover={{ scale: isInCart ? 1 : 1.05 }}
                whileTap={{ scale: isInCart ? 1 : 0.95 }}
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdding || isInCart}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all shadow-md ${
                  product.inStock
                    ? (isAdding || isInCart)
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {(isAdding || isInCart) ? '✓ Added' : product.inStock ? 'Add' : 'Unavailable'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
