import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import SocialMedia from './components/SocialMedia'
import ContactForm from './components/ContactForm'
import WhatsAppFloat from './components/WhatsAppFloat'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <SocialMedia />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App