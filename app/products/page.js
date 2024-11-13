import HeroBanner from '@/components/HeroBanner'
import ProductShowcase from '@/components/Home/Products'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroBanner
        title={"Our Products"}
        subtitle={"products"}
        backgroundImage={"/assets/products-banner.jpg"}
      />
      <div className='py-12'>
        <ProductShowcase />
      </div>
    </>
  )
}

export default page
