import Navbar from '@/components/layout/Navbar'
import Faq from '@/components/FAQ/Faq';
import Footer from '@/components/Footer'

export const page = () => {
  return (
    <div>
      <Navbar />
      <Faq />
      <Footer />

    </div>
  )
}

export default page