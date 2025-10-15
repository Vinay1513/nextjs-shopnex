'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useCartStore from '@/lib/store'

export default function CheckoutPage() {
  const router = useRouter()
  const cart = useCartStore(state => state.cart)
  const getCartTotal = useCartStore(state => state.getCartTotal)
  const clearCart = useCartStore(state => state.clearCart)
  
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const total = getCartTotal()
  const shipping = total > 100 ? 0 : 9.99
  const tax = total * 0.08 // 8% tax
  const finalTotal = total + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    // Format card number: Only numbers, add space every 4 digits
    if (name === 'cardNumber') {
      // Remove all non-numeric characters first
      const numbersOnly = value.replace(/\D/g, '')
      // Format with spaces
      formattedValue = numbersOnly
        .replace(/(\d{4})/g, '$1 ')
        .trim()
        .slice(0, 19) // 16 digits + 3 spaces
    }

    // Format expiry date: MM/YY
    if (name === 'expiryDate') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .slice(0, 5)
    }

    // Format CVV: Only numbers, max 4 digits
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4)
    }

    // Format ZIP code: Only alphanumeric, max 10 characters
    if (name === 'zipCode') {
      formattedValue = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10).toUpperCase()
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }))
  }

  // Prevent non-numeric keys for card number, expiry, and CVV
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, fieldType: string) => {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End']
    const isNumber = /^[0-9]$/.test(e.key)
    const isAllowedKey = allowedKeys.includes(e.key)
    const isCtrlCmd = e.ctrlKey || e.metaKey // Allow Ctrl+C, Ctrl+V, etc.

    if (fieldType === 'numeric' && !isNumber && !isAllowedKey && !isCtrlCmd) {
      e.preventDefault()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setOrderComplete(true)
    
    // Clear cart after 3 seconds and redirect
    setTimeout(() => {
      clearCart()
      router.push('/')
    }, 3000)
  }

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <svg className="w-32 h-32 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-4xl font-bold gradient-text mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add items to your cart before checking out.</p>
          <Link href="/products" className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all">
            Browse Products
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold gradient-text mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your purchase</p>
        </motion.div>

        <AnimatePresence>
          {orderComplete ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="glass rounded-3xl p-12 text-center shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h2 className="text-4xl font-bold gradient-text mb-4">Order Successful! 🎉</h2>
              <p className="text-gray-600 text-lg mb-6">
                Thank you for your purchase! Your order has been confirmed.
              </p>
              <p className="text-gray-500">
                Redirecting to home page...
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="glass rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold gradient-text mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="glass rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold gradient-text mb-6">Shipping Address</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          placeholder="123 Main Street"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            placeholder="New York"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                            placeholder="10001"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="glass rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold gradient-text mb-6">Payment Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          onKeyDown={(e) => handleKeyDown(e, 'numeric')}
                          required
                          placeholder="1234 5678 9012 3456"
                          inputMode="numeric"
                          autoComplete="cc-number"
                          pattern="[0-9\s]*"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-mono text-lg tracking-wider"
                        />
                        <p className="text-xs text-gray-500 mt-1">Enter your 16-digit card number</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            onKeyDown={(e) => handleKeyDown(e, 'numeric')}
                            required
                            placeholder="MM/YY"
                            inputMode="numeric"
                            autoComplete="cc-exp"
                            pattern="[0-9/]*"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-mono text-lg"
                          />
                          <p className="text-xs text-gray-500 mt-1">MM/YY format</p>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            onKeyDown={(e) => handleKeyDown(e, 'numeric')}
                            required
                            placeholder="123"
                            inputMode="numeric"
                            autoComplete="cc-csc"
                            pattern="[0-9]*"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-mono text-lg"
                          />
                          <p className="text-xs text-gray-500 mt-1">3-4 digits</p>
                        </div>
                      </div>
                      <div className="flex gap-3 pt-2">
                        {['VISA', 'MASTERCARD', 'AMEX', 'DISCOVER'].map((card) => (
                          <div key={card} className="glass px-3 py-2 rounded-lg text-xs font-bold text-gray-700">
                            {card}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isProcessing}
                    whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                    whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                    className={`w-full py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all ${
                      isProcessing
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-purple-500/50'
                    }`}
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Payment...
                      </span>
                    ) : (
                      `Complete Purchase - $${finalTotal.toFixed(2)}`
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1"
              >
                <div className="glass rounded-2xl p-6 shadow-2xl sticky top-24">
                  <h2 className="text-2xl font-bold gradient-text mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold text-sm text-gray-900 line-clamp-1">{item.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          <p className="text-sm font-bold text-indigo-600">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6 border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-semibold">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="font-semibold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax (8%)</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-2xl font-bold">
                        <span className="gradient-text">Total</span>
                        <span className="gradient-text">${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 bg-indigo-50 p-4 rounded-xl">
                    {[
                      '🔒 Secure 256-bit SSL encryption',
                      '📦 Free shipping on orders over $100',
                      '↩️ 30-day money-back guarantee'
                    ].map((text, index) => (
                      <p key={index} className="flex items-start">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

