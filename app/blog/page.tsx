import React from 'react'
import Blog from '@/components/blog/Blog'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Blog />
      <Footer />
    </div>


  )
}

export default page