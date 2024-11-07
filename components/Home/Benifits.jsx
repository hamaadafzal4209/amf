'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Clock, Award, CheckCircle } from 'lucide-react'
import { Fade } from 'react-awesome-reveal'

const features = [
  {
    icon: Shield,
    title: 'Enhanced Safety',
    description: 'Our switchgear products are designed with advanced safety features to protect both equipment and personnel.',
    benefits: [
      'Arc flash mitigation technology',
      'Insulated and segregated bus bars',
      'Interlocking mechanisms to prevent operational errors',
      'Remote operation capabilities for hazardous environments'
    ]
  },
  {
    icon: Zap,
    title: 'Improved Efficiency',
    description: 'Maximize your power distribution efficiency with our cutting-edge switchgear solutions.',
    benefits: [
      'Low-loss components for reduced energy consumption',
      'Smart monitoring for optimal load management',
      'Power factor correction capabilities',
      'Compact designs for space optimization'
    ]
  },
  {
    icon: Clock,
    title: 'Exceptional Durability',
    description: 'Built to last, our switchgear products offer long-term reliability in demanding environments.',
    benefits: [
      'Corrosion-resistant materials for harsh conditions',
      'Thermal management systems for extended component life',
      'Robust mechanical designs for high short-circuit ratings',
      'Minimal maintenance requirements for reduced downtime'
    ]
  },
  {
    icon: Award,
    title: 'Industry Compliance',
    description: 'Stay compliant with the latest industry standards and regulations with our certified switchgear products.',
    benefits: [
      'IEC 61439 compliance for low-voltage switchgear',
      'IEEE C37 standards for medium-voltage equipment',
      'UL 1558 listing for safety assurance',
      'NEMA ratings for various environmental conditions'
    ]
  }
]

export default function KeyFeaturesAndBenefits() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 pb-12">
      <motion.h2 
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Key Features and Benefits
      </motion.h2>
      <motion.p 
        className="max-w-3xl mx-auto text-muted-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover why our switchgear products are the preferred choice for industry leaders worldwide.
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-6 w-6 text-primary" />
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Fade duration={500} distance="20px" triggerOnce>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Fade>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Why Choose Our Switchgear?</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm bg-gray-100 hover:bg-main hover:text-white">Reliable</Badge>
          <Badge variant="secondary" className="text-sm bg-gray-100 hover:bg-main hover:text-white">Efficient</Badge>
          <Badge variant="secondary" className="text-sm bg-gray-100 hover:bg-main hover:text-white">Safe</Badge>
          <Badge variant="secondary" className="text-sm bg-gray-100 hover:bg-main hover:text-white">Durable</Badge>
          <Badge variant="secondary" className="text-sm bg-gray-100 hover:bg-main hover:text-white">Compliant</Badge>
          <Badge variant="secondary" className="text-sm bg-gray-100 hover:bg-main hover:text-white">Innovative</Badge>
        </div>
      </motion.div>
    </div>
  )
}
