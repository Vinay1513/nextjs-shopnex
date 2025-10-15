'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProductGrid from '@/components/ProductGrid'
import productsData from '@/data/products.json'
import { Product } from '@/types/product'
import { useEffect, useRef, useState } from 'react'

export default function HomePage() {
  const products = productsData as Product[]
  const featuredProducts = products.filter(product => product.featured)
  
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  
  // Parallax effect - video moves slower than scroll
  const videoY = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])

  return (
    <div className="min-h-screen">
      {/* Hero Video Section with Parallax */}
      <motion.section 
        ref={heroRef}
        className="relative overflow-hidden h-screen"
        style={{ opacity }}
      >
        {/* Background Video with Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: videoY, scale }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234f46e5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad)'/%3E%3C/svg%3E"
          >
            {/* Using a demo video from Pexels - replace with your own */}
            <source 
              src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" 
              type="video/mp4" 
            />
          </video>
          
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 animated-gradient opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-900/30 to-black/60" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-6 inline-block"
              >
                <span className="glass-dark text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30 backdrop-blur-xl">
                  ✨ Experience the Future of Shopping
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl"
              >
                Welcome to{' '}
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  ShopNex
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-xl md:text-3xl mb-12 text-white/95 max-w-4xl mx-auto drop-shadow-lg font-light leading-relaxed"
              >
                Discover amazing products at unbeatable prices. 
                <br />
                Quality you can trust, delivered to your door.
              </motion.p>
              
              {/* Animated Gradient CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255,255,255,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group px-12 py-5 rounded-2xl font-bold text-xl overflow-hidden shadow-2xl"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-pink-100 to-purple-100 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
                    <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:via-pink-700 group-hover:to-indigo-700 transition-all">
                      Shop Now 🛍️
                    </span>
                  </motion.button>
                </Link>
                
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-12 py-5 rounded-2xl font-bold text-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 glass-dark border-2 border-white/30 group-hover:border-white/50 transition-all" />
                    <span className="relative z-10 text-white group-hover:text-yellow-300 transition-colors">
                      Learn More →
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 flex flex-col items-center gap-2"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-20 w-48 h-48 bg-pink-500/10 backdrop-blur-sm rounded-full hidden lg:block"
        />
      </motion.section>

      {/* Featured Products Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold gradient-text mb-6"
            >
              Featured Products
            </motion.h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Check out our handpicked selection of the best products available
            </p>
          </motion.div>
          
          <ProductGrid products={featuredProducts} />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-block px-12 py-5 rounded-2xl font-bold text-xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-white">
                  View All Products →
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJpbmRpZ28iIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold gradient-text mb-4">Why Choose ShopNex?</h2>
            <p className="text-gray-600 text-xl">Premium quality, unbeatable service</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />,
                title: 'Quality Guaranteed',
                description: 'All products are carefully selected and quality tested',
                gradient: 'from-blue-500 to-cyan-500',
                delay: 0
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                title: 'Fast Shipping',
                description: 'Free express shipping on orders over $100',
                gradient: 'from-purple-500 to-pink-500',
                delay: 0.2
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />,
                title: 'Easy Returns',
                description: '30-day hassle-free return policy on all items',
                gradient: 'from-emerald-500 to-teal-500',
                delay: 0.4
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: feature.delay, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">Stay Updated</h2>
          <p className="text-white/90 mb-10 text-xl leading-relaxed">
            Subscribe to our newsletter for exclusive deals and product updates
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-2xl text-lg"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  )
}
