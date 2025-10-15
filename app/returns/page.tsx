'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircleIcon, XCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function ReturnsPage() {
  const steps = [
    {
      step: '1',
      title: 'Contact Us',
      description:
        'Email support@shopnex.com or call +1 (555) 123-4567 to initiate your return',
      icon: <DocumentTextIcon className="w-6 h-6 text-indigo-600" />,
    },
    {
      step: '2',
      title: 'Get Return Label',
      description: "We'll email you a prepaid return shipping label within 24 hours",
      icon: <DocumentTextIcon className="w-6 h-6 text-indigo-600" />,
    },
    {
      step: '3',
      title: 'Pack & Ship',
      description:
        'Pack the item securely in original packaging and drop it off at any carrier location',
      icon: <DocumentTextIcon className="w-6 h-6 text-indigo-600" />,
    },
    {
      step: '4',
      title: 'Get Refund',
      description:
        'Receive your refund within 5-7 business days after we receive your return',
      icon: <CheckCircleIcon className="w-6 h-6 text-indigo-600" />,
    },
  ]

  const policyDetails = [
    { label: 'Return Window', value: '30 Days', icon: '📅' },
    { label: 'Refund Method', value: 'Original Payment', icon: '💳' },
    { label: 'Return Shipping', value: 'Free', icon: '📦' },
    { label: 'Processing Time', value: '5-7 Business Days', icon: '⏱️' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
            Returns & Refunds
          </h1>
          <p className="text-xl text-gray-600">Hassle-free returns within 30 days</p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* 30-Day Banner */}
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white text-center">
              <h2 className="text-4xl font-bold mb-2">30-Day Money-Back Guarantee</h2>
              <p className="text-lg">Not satisfied? Return it for a full refund, no questions asked!</p>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              {/* Steps */}
              <div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
                  How to Return an Item
                </h2>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-300 transition-all"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-2">
                          {step.icon}
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Policy Details */}
              <div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
                  Return Policy Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {policyDetails.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-3xl">{item.icon}</span>
                        <h3 className="font-bold text-gray-900">{item.label}</h3>
                      </div>
                      <p className="text-lg text-indigo-600 font-semibold">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Conditions */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <CheckCircleIcon className="w-6 h-6 mr-2" /> Items Must Be
                </h3>
                <ul className="space-y-2 text-blue-900">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span> In original, unused condition
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span> In original packaging with all tags attached
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span> Accompanied by proof of purchase
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span> Returned within 30 days of delivery
                  </li>
                </ul>
              </div>

              {/* Non-returnable Items */}
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                  <XCircleIcon className="w-6 h-6 mr-2" /> Non-Returnable Items
                </h3>
                <ul className="space-y-2 text-red-900">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span> Final sale or clearance items
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span> Personalized or custom-made products
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span> Items without original packaging
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span> Used or damaged items
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need to Return Something?</h3>
                <p className="mb-6">Our customer service team is here to help</p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg"
                  >
                    Contact Support
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
