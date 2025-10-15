'use client'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductDetail from '@/components/ProductDetail'
import ProductGrid from '@/components/ProductGrid'
import productsData from '@/data/products.json'
import { Product } from '@/types/product'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const products = productsData as Product[]
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  // Get related products from the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center space-x-2 text-sm"
        >
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/products" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Products
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </motion.nav>

        {/* Product Detail */}
        <ProductDetail product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >
            <h2 className="text-4xl font-bold gradient-text mb-8 text-center">
              Related Products
            </h2>
            <ProductGrid products={relatedProducts} />
          </motion.div>
        )}
      </div>
    </div>
  )
}
