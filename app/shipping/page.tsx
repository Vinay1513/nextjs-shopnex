'use client'

import { motion } from 'framer-motion'
import type { Metadata } from 'next'

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Shipping Information</h1>
          <p className="text-xl text-gray-600">Fast, reliable delivery to your door</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-2xl space-y-8"
        >
          {/* Free Shipping Banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">🎉 Free Shipping!</h2>
            <p className="text-lg">On all orders over $100</p>
          </div>

          {/* Shipping Options */}
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-6">Shipping Options</h2>
            <div className="space-y-4">
              {[
                {
                  name: 'Standard Shipping',
                  time: '5-7 Business Days',
                  cost: '$9.99',
                  description: 'Perfect for regular orders'
                },
                {
                  name: 'Express Shipping',
                  time: '2-3 Business Days',
                  cost: '$19.99',
                  description: 'Faster delivery when you need it'
                },
                {
                  name: 'Overnight Shipping',
                  time: 'Next Business Day',
                  cost: '$29.99',
                  description: 'Get it tomorrow (order by 2 PM)'
                }
              ].map((option, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-300 transition-all"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{option.name}</h3>
                    <p className="text-gray-600">{option.time}</p>
                    <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-600">{option.cost}</p>
                    <p className="text-sm text-gray-500">per order</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Delivery Areas */}
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-6">Delivery Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { region: 'United States', flag: '🇺🇸', available: true },
                { region: 'Canada', flag: '🇨🇦', available: true },
                { region: 'United Kingdom', flag: '🇬🇧', available: true },
                { region: 'Europe (EU)', flag: '🇪🇺', available: true },
                { region: 'Australia', flag: '🇦🇺', available: true },
                { region: 'International', flag: '🌍', available: true }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{area.flag}</span>
                    <span className="font-semibold text-gray-900">{area.region}</span>
                  </div>
                  <span className="text-green-600 font-bold">✓ Available</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Important Notes
            </h3>
            <ul className="space-y-2 text-amber-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Orders placed after 2 PM will be processed the next business day</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Free shipping applies automatically at checkout for orders over $100</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tracking information will be sent via email once your order ships</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>International orders may be subject to customs duties and taxes</span>
              </li>
            </ul>
          </div>

          {/* Tracking */}
          <div className="text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Track Your Order</h3>
            <p className="mb-6">Enter your order number to track your shipment in real-time</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Order #12345"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Track
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

