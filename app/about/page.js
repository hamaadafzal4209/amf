import HeroBanner from '@/components/HeroBanner'
import AboutUs from '@/components/Home/About'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroBanner title={'About'} subtitle={'about us'} backgroundImage={'/assets/about-banner.jpg'}/>
      <AboutUs/>
    </div>
  )
}

export default page
