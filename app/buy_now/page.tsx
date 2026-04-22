import React from 'react'
import BuyNow from '@/components/buy_now/BuyNow'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <BuyNow />
      </main>
      <Footer />

    </>
  )
}

export default page