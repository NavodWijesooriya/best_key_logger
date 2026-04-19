import React from 'react'
import BuyNow from '@/components/buy_now/BuyNow'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className="pt-24 md:pt-28">
      <Navbar />
      <BuyNow />
      <Footer />

    </div>
  )
}

export default page