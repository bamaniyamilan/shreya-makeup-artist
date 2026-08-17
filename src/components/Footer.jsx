import React, { useState, useEffect } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const footer = document.getElementById('footer')
    if (footer) {
      observer.observe(footer)
    }

    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    { 
      icon: 'fab fa-instagram', 
      label: 'Instagram',
      color: 'hover:text-pink-400',
      url: 'https://instagram.com/shreya_makeup_artist',
      bgColor: 'bg-gradient-to-br from-pink-500 to-purple-500'
    },
    { 
      icon: 'fab fa-facebook', 
      label: 'Facebook',
      color: 'hover:text-blue-500',
      url: 'https://facebook.com/shreyamakeupartist',
      bgColor: 'bg-blue-600'
    },
    { 
      icon: 'fab fa-youtube', 
      label: 'YouTube',
      color: 'hover:text-red-500',
      url: 'https://youtube.com/@shreyamakeupartist',
      bgColor: 'bg-red-600'
    },
    { 
      icon: 'fab fa-whatsapp', 
      label: 'WhatsApp',
      color: 'hover:text-green-400',
      url: 'https://wa.me/919876543210',
      bgColor: 'bg-green-500'
    },
    { 
      icon: 'fab fa-pinterest', 
      label: 'Pinterest',
      color: 'hover:text-red-400',
      url: 'https://pinterest.com/shreyamakeupartist',
      bgColor: 'bg-red-500'
    },
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const contactInfo = [
    { icon: '📱', text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: '✉️', text: 'shreya@makeup.com', href: 'mailto:shreya@makeup.com' },
    { icon: '📍', text: 'Mumbai, India', href: '#' },
  ]

  return (
    <footer 
      id="footer"
      className="relative bg-gradient-to-b from-[#2d2a2a] to-[#1a1a1a] text-white/80 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#d4a0a0]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d4a0a0]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a0a0]/3 rounded-full blur-3xl"></div>
        
        {/* Floating sparkles */}
        {['✦', '✧', '⭐', '🌟', '💫'].map((star, i) => (
          <div
            key={i}
            className="absolute text-white/10 animate-twinkle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${1 + Math.random() * 2}rem`,
            }}
          >
            {star}
          </div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✨</span>
              <div>
                <h3 className="text-2xl font-bold text-white">Shreya</h3>
                <p className="text-xs text-[#d4a0a0]">Makeup Artist</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Transforming brides into their most beautiful selves with 
              personalized makeup and hair styling.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span>💄</span>
              <span>Est. 2018</span>
              <span className="mx-1">•</span>
              <span>✨ Award Winner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#d4a0a0]">→</span>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#d4a0a0] transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#d4a0a0]">✦</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#d4a0a0]">→</span>
              Contact Info
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  <a 
                    href={info.href}
                    className="text-sm text-white/60 hover:text-[#d4a0a0] transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{info.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#d4a0a0]">→</span>
              Follow Me
            </h4>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                  
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#2d2a2a] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                  
                  {/* Glow effect */}
                  <span className={`absolute inset-0 rounded-full ${social.bgColor} opacity-0 group-hover:opacity-20 transition-opacity blur-sm`}></span>
                </a>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-4">
              <p className="text-xs text-white/50 mb-2">Subscribe for updates ✨</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="flex-1 px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#d4a0a0]/50 transition-colors"
                />
                <button 
                  type="submit"
                  className="px-3 py-1.5 text-xs rounded-full bg-[#d4a0a0] text-[#2d2a2a] font-medium hover:bg-[#c08a8a] transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-6 border-t border-white/5 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {currentYear} Shreya Makeup Artist. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-xs text-white/40">
              <a href="#" className="hover:text-[#d4a0a0] transition">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-[#d4a0a0] transition">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-[#d4a0a0] transition">Sitemap</a>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/30">
              <span>Made with</span>
              <span className="text-[#d4a0a0] animate-pulse">💄</span>
              <span>&</span>
              <span className="text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }}>✨</span>
              <span>by Shreya</span>
            </div>
          </div>

          {/* Scroll to top button */}
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4a0a0]/20 border border-white/10 hover:border-[#d4a0a0]/30 transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
            >
              <svg className="w-5 h-5 text-white/40 group-hover:text-[#d4a0a0] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.2); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer