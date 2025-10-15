'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              About ShopNex
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your trusted destination for quality products and exceptional shopping experiences
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 mb-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold gradient-text mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              Founded with a vision to revolutionize online shopping, ShopNex has grown to become
              a trusted name in e-commerce. We believe that shopping should be simple, enjoyable,
              and accessible to everyone.
            </p>
            <p>
              Our journey began with a simple question: What if we could create an online store
              that combines quality products, competitive prices, and outstanding customer service?
              Today, we serve thousands of satisfied customers across the globe.
            </p>
            <p>
              From electronics to lifestyle products, we carefully curate every item in our catalog
              to ensure it meets our high standards. Our team works tirelessly to bring you the
              latest products at the best prices.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: 'Quality First',
                description: 'We never compromise on quality. Every product is carefully selected and tested to meet our stringent standards.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                title: 'Innovation',
                description: 'We continuously evolve and improve our platform to provide the best shopping experience possible.',
                gradient: 'from-emerald-500 to-teal-500'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`bg-gradient-to-r ${value.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">ShopNex by Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '10K+', label: 'Happy Customers' },
                { value: '500+', label: 'Products' },
                { value: '50+', label: 'Countries' },
                { value: '4.8', label: 'Average Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                >
                  <p className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{stat.value}</p>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold gradient-text mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Explore our collection of quality products and find exactly what you're looking for.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all"
            >
              Browse Products →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
