'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: 'Orders & Payment',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment gateway.'
        },
        {
          q: 'How do I track my order?',
          a: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and visiting the "Order History" section.'
        },
        {
          q: 'Can I cancel or modify my order?',
          a: 'You can cancel or modify your order within 1 hour of placing it. After that, orders are processed for shipping. Please contact our support team immediately if you need changes.'
        },
        {
          q: 'Do you offer gift cards?',
          a: 'Yes! Gift cards are available in denominations from $25 to $500. They never expire and can be used for any product on our site.'
        }
      ]
    },
    {
      category: 'Shipping & Delivery',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Overnight shipping delivers the next business day (orders placed by 2 PM).'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes! We ship to over 50 countries worldwide. International shipping times vary by destination but typically take 7-14 business days. Customs fees may apply.'
        },
        {
          q: 'Is there free shipping?',
          a: 'Yes! We offer free standard shipping on all orders over $100. The discount applies automatically at checkout.'
        },
        {
          q: 'What if my package is lost or damaged?',
          a: 'We\'re here to help! Contact us immediately if your package arrives damaged or goes missing. We\'ll file a claim with the carrier and send a replacement or issue a refund.'
        }
      ]
    },
    {
      category: 'Returns & Refunds',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day money-back guarantee on all items. Products must be in original condition with tags attached. Return shipping is free within the US.'
        },
        {
          q: 'How long do refunds take?',
          a: 'Once we receive your return, refunds are processed within 5-7 business days. The refund will be issued to your original payment method.'
        },
        {
          q: 'Can I exchange an item?',
          a: 'Yes! Contact our support team to arrange an exchange. We\'ll send you the new item once we receive the original product back.'
        },
        {
          q: 'Are there any non-returnable items?',
          a: 'Final sale items, personalized products, and items without original packaging cannot be returned. These items are clearly marked on product pages.'
        }
      ]
    },
    {
      category: 'Product Information',
      questions: [
        {
          q: 'Are your products authentic?',
          a: 'Absolutely! We source all products directly from authorized distributors and manufacturers. Every item is guaranteed to be 100% authentic.'
        },
        {
          q: 'Do you offer warranties?',
          a: 'Yes, all electronics come with manufacturer warranties. Extended warranty options are available at checkout for select products.'
        },
        {
          q: 'How do I know what size to order?',
          a: 'Each product page includes detailed size charts and measurements. You can also check customer reviews for fit feedback. If you\'re unsure, contact us for personalized sizing help.'
        },
        {
          q: 'When will out-of-stock items be available?',
          a: 'You can sign up for email notifications on any out-of-stock product page. We\'ll notify you as soon as the item is back in stock.'
        }
      ]
    },
    {
      category: 'Account & Security',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click "Sign Up" in the top right corner, enter your email and create a password. You can also sign up using your Google or Apple account for faster checkout.'
        },
        {
          q: 'Is my information secure?',
          a: 'Yes! We use industry-standard SSL encryption to protect your data. We never store your credit card information - all payments are processed through secure third-party providers.'
        },
        {
          q: 'How do I reset my password?',
          a: 'Click "Forgot Password" on the login page. Enter your email address and we\'ll send you a secure link to create a new password.'
        },
        {
          q: 'Can I save my payment information?',
          a: 'Yes, you can securely save payment methods in your account for faster checkout. This information is encrypted and stored safely.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">FAQ</h1>
          <p className="text-xl text-gray-600">Find answers to commonly asked questions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold gradient-text mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex
                  const isOpen = openIndex === globalIndex

                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: faqIndex * 0.1 }}
                      className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-indigo-300 transition-colors"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-6 h-6 text-indigo-600 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Still have questions? */}
          <div className="glass rounded-3xl p-8 text-center shadow-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            <h3 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Can't find what you're looking for? Our support team is happy to help!
            </p>
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
        </motion.div>
      </div>
    </div>
  )
}

