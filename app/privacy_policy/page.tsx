import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'
import PrivacyPolicy from '@/components/PrivacyPolicy'

const page = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <PrivacyPolicy />
      </main>

      <Footer />
    </div>
  )
}

export default page