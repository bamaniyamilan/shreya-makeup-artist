import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section
      const sections = ['home', 'services', 'gallery', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#services', label: 'Services', icon: '✨' },
    { href: '#gallery', label: 'Gallery', icon: '🎨' },
    { href: '#testimonials', label: 'Reviews', icon: '⭐' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl' 
        : 'bg-white/80 backdrop-blur-md shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative">
            <span className="text-3xl font-bold text-[#d4a0a0] group-hover:scale-110 transition-transform duration-300 inline-block">
              ✨
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#d4a0a0] rounded-full animate-pulse"></span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold text-[#2d2a2a] leading-none group-hover:text-[#d4a0a0] transition-colors">
              Shreya
            </span>
            <span className="text-[10px] font-light text-[#8b6b6b] tracking-wider uppercase">
              Makeup Artist
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-[#d4a0a0] bg-[#d4a0a0]/10'
                  : 'text-[#2d2a2a] hover:text-[#d4a0a0] hover:bg-[#d4a0a0]/5'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{link.icon}</span>
                {link.label}
              </span>
              {/* Active indicator */}
              {activeSection === link.href.replace('#', '') && (
                <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#d4a0a0] to-pink-400 rounded-full"></span>
              )}
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="ml-4 btn-primary text-sm px-6 py-2.5 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>📅</span>
              Book Now
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#c08a8a] to-[#d4a0a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#d4a0a0]/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 w-full h-0.5 bg-[#2d2a2a] rounded-full transition-all duration-300 ${
              isOpen ? 'top-1/2 transform -translate-y-1/2 rotate-45' : 'top-0'
            }`}></span>
            <span className={`absolute left-0 w-full h-0.5 bg-[#2d2a2a] rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'top-1/2 transform -translate-y-1/2'
            }`}></span>
            <span className={`absolute left-0 w-full h-0.5 bg-[#2d2a2a] rounded-full transition-all duration-300 ${
              isOpen ? 'top-1/2 transform -translate-y-1/2 -rotate-45' : 'bottom-0'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl px-4 pb-6 pt-2 space-y-1 border-t border-[#d4a0a0]/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-[#d4a0a0]/10 text-[#d4a0a0]'
                  : 'text-[#2d2a2a] hover:bg-[#d4a0a0]/5 hover:text-[#d4a0a0]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.label}</span>
              {activeSection === link.href.replace('#', '') && (
                <span className="ml-auto text-[#d4a0a0]">✦</span>
              )}
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="flex items-center justify-center gap-2 mt-4 btn-primary text-sm px-6 py-3"
            onClick={() => setIsOpen(false)}
          >
            <span>📅</span>
            Book Now
          </a>
          
          {/* Social icons in mobile menu */}
          <div className="flex justify-center gap-4 pt-4 mt-2 border-t border-[#d4a0a0]/10">
            <a href="#" className="text-[#2d2a2a] hover:text-[#d4a0a0] transition-colors">
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a href="#" className="text-[#2d2a2a] hover:text-[#d4a0a0] transition-colors">
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <a href="#" className="text-[#2d2a2a] hover:text-[#d4a0a0] transition-colors">
              <i className="fab fa-youtube text-lg"></i>
            </a>
            <a href="#" className="text-[#2d2a2a] hover:text-[#d4a0a0] transition-colors">
              <i className="fab fa-whatsapp text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar