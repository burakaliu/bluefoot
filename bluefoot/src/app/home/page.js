import Navbar from '@/app/components/navbar'
import Hero from '@/app/components/hero'
import Services from '@/app/components/services'
import WhyChooseUs from '@/app/components/whyChooseUs'
import CTA from '@/app/components/cta'
import Footer from '@/app/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  )
}
