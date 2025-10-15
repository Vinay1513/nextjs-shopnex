'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import useCartStore from '@/lib/store'

export default function CartPage() {
  const cart = useCartStore(state => state.cart)
  const removeFromCart = useCartStore(state => state.removeFromCart)
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const clearCart = useCartStore(state => state.clearCart)
  const getCartTotal = useCartStore(state => state.getCartTotal)

  const total = getCartTotal()
  const shipping = total > 100 ? 0 : 9.99
  const finalTotal = total + shipping

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="w-32 h-32 text-gray-300 mx-auto mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </motion.svg>
          <h2 className="text-4xl font-bold gradient-text mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all"
            >
              Start Shopping 🛍️
            </Link>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold gradient-text mb-12"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-6 flex flex-col sm:flex-row gap-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  <div className="flex-grow">
                    <Link
                      href={`/product/${item.id}`}
                      className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors block mb-2"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-3">
                      {item.category}
                    </p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                    <div className="flex items-center glass rounded-xl overflow-hidden shadow-md">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-4 py-2 text-gray-600 hover:bg-indigo-50 transition-colors font-bold"
                      >
                        -
                      </motion.button>
                      <span className="px-6 py-2 border-x border-gray-200 font-bold">
                        {item.quantity}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-4 py-2 text-gray-600 hover:bg-indigo-50 transition-colors font-bold"
                      >
                        +
                      </motion.button>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-700 font-semibold transition-colors"
                    >
                      Remove
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 font-semibold transition-colors mt-4"
            >
              Clear Cart
            </motion.button>
          </div>

          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass rounded-2xl p-8 sticky top-24 shadow-2xl">
              <h2 className="text-3xl font-bold gradient-text mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-700 text-lg">
                  <span>Subtotal</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700 text-lg">
                  <span>Shipping</span>
                  <span className="font-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping === 0 && (
                  <motion.p 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-sm text-green-600 font-semibold bg-green-50 px-4 py-2 rounded-lg"
                  >
                    🎉 You qualify for free shipping!
                  </motion.p>
                )}
                {total < 100 && shipping > 0 && (
                  <p className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                    Add <span className="font-bold">${(100 - total).toFixed(2)}</span> more for free shipping
                  </p>
                )}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-2xl font-bold">
                    <span className="gradient-text">Total</span>
                    <span className="gradient-text">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all mb-4"
                >
                  Proceed to Checkout 🚀
                </motion.button>
              </Link>
              
              <Link
                href="/products"
                className="block text-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
              >
                ← Continue Shopping
              </Link>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">We Accept</h3>
                <div className="flex gap-2">
                  {['VISA', 'MASTERCARD', 'AMEX'].map((card) => (
                    <div key={card} className="glass px-4 py-2 rounded-lg text-xs font-bold text-gray-700">
                      {card}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                {[
                  'Secure 256-bit SSL encryption',
                  'Easy returns within 30 days',
                  '24/7 customer support'
                ].map((text, index) => (
                  <p key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
