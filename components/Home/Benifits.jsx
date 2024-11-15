'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Clock, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Advanced Safety Standards',
    description: 'Engineered to ensure safety for critical electrical systems and personnel.',
    benefits: [
      'Arc flash protection technology',
      'Isolated bus compartments',
      'Automatic safety interlocks',
      'Remote operation in hazardous settings',
    ],
  },
  {
    icon: Zap,
    title: 'Optimized Efficiency',
    description: 'Our switchgear is designed to maximize power distribution and energy efficiency.',
    benefits: [
      'Low-loss components reduce waste',
      'Real-time monitoring for optimized load balance',
      'Integrated power factor correction',
      'Compact, space-saving designs',
    ],
  },
  {
    icon: Clock,
    title: 'Built for Longevity',
    description: 'Reliable, high-quality materials ensure durability and extended equipment life.',
    benefits: [
      'Corrosion-resistant enclosures',
      'Effective thermal management systems',
      'High mechanical resilience for intense usage',
      'Minimal maintenance with high uptime',
    ],
  },
]

export default function KeyFeaturesAndBenefits() {
  return (
    <div className="container mx-auto px-6 md:px-12 pb-16">
      <motion.h2 
        className="text-4xl font-extrabold mb-8 text-center text-main"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Key Features & Benefits
      </motion.h2>
      <motion.p 
        className="max-w-2xl mx-auto text-center text-gray-700 mb-12 leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover unmatched quality, safety, and efficiency with our switchgear solutions designed for excellence.
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <Card className="h-full flex flex-col shadow-md border border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 hover:shadow-xl transform transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-main">
                  <feature.icon className="h-7 w-7 text-main" />
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mt-4 text-gray-600">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-main mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Industry Leaders Choose Us</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {['Reliable', 'Efficient', 'Safe', 'Durable', 'Compliant', 'Innovative'].map((item, index) => (
            <motion.div
              key={index}
              className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-full text-main font-semibold shadow-md hover:bg-main hover:text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
