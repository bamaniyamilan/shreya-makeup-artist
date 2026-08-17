import React, { useState, useEffect, useRef } from 'react'

const services = [
  { 
    icon: '👰', 
    title: 'Bridal Makeup', 
    desc: 'Traditional & contemporary bridal looks with long-lasting finish.',
    color: 'from-pink-400 to-rose-400',
    bgColor: 'bg-pink-50',
    features: ['HD Finish', 'Long Lasting', 'Customized']
  },
  { 
    icon: '💃', 
    title: 'Party Makeup', 
    desc: 'Glamorous party looks for engagements, receptions & events.',
    color: 'from-purple-400 to-pink-400',
    bgColor: 'bg-purple-50',
    features: ['Glamorous', 'Trendy', 'Photogenic']
  },
  { 
    icon: '💇‍♀️', 
    title: 'Hair Styling', 
    desc: 'Professional hair draping, curls, braids & elegant updos.',
    color: 'from-amber-400 to-orange-400',
    bgColor: 'bg-amber-50',
    features: ['Expert Styling', 'Premium Products', 'All Hair Types']
  },
  { 
    icon: '🎨', 
    title: 'Airbrush Makeup', 
    desc: 'Flawless HD finish for photography & videography.',
    color: 'from-blue-400 to-cyan-400',
    bgColor: 'bg-blue-50',
    features: ['HD Quality', 'Lightweight', 'Long Wear']
  },
  { 
    icon: '👗', 
    title: 'Drape & Saree', 
    desc: 'Expert saree draping & traditional attire styling.',
    color: 'from-emerald-400 to-teal-400',
    bgColor: 'bg-emerald-50',
    features: ['Traditional', 'Elegant', 'Perfect Fit']
  },
  { 
    icon: '💍', 
    title: 'Pre-Wedding', 
    desc: 'Mehendi, sangeet & pre-wedding event makeup.',
    color: 'from-rose-400 to-red-400',
    bgColor: 'bg-rose-50',
    features: ['Complete Package', 'Multiple Events', 'Stress-Free']
  },
]

const Services = () => {
  const [isVisible, setIsVisible] = useState({})
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setIsVisible(prev => ({ ...prev, [index]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.service-card')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#d4a0a0]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#f8e8e8]/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#d4a0a0]/5 to-[#f8e8e8]/5 rounded-full blur-3xl"></div>
        
        {/* Floating decorative shapes */}
        <div className="absolute top-10 left-10 text-4xl animate-float opacity-20">✦</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-20" style={{ animationDelay: '2s' }}>✦</div>
        <div className="absolute top-1/3 right-20 text-3xl animate-float opacity-20" style={{ animationDelay: '4s' }}>✦</div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#d4a0a0]/10 backdrop-blur-sm px-6 py-2 rounded-full text-[#8b6b6b] text-sm font-medium mb-4">
            ✨ What I Offer
          </div>
          <h2 className="section-title">
            My <span className="text-[#d4a0a0] relative">
              Services
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#d4a0a0] to-transparent rounded-full"></span>
            </span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Professional makeup & hair styling for every occasion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`service-card transform transition-all duration-700 ${
                isVisible[idx] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative group h-full">
                {/* Glowing background effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                  {/* Icon with gradient background */}
                  <div className={`relative w-24 h-24 rounded-full ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <div className="text-5xl relative z-10">{service.icon}</div>
                    
                    {/* Decorative ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-[#d4a0a0]/10 group-hover:border-[#d4a0a0]/30 transition-all duration-300"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#2d2a2a] mb-3 group-hover:text-[#d4a0a0] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6b5a5a] text-sm leading-relaxed mb-4 flex-grow">
                    {service.desc}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {service.features.map((feature, fIdx) => (
                      <span 
                        key={fIdx}
                        className={`text-xs px-3 py-1 rounded-full ${service.bgColor} text-[#6b5a5a] font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href="#contact" 
                      className={`text-sm font-medium text-[#d4a0a0] hover:text-[#c08a8a] inline-flex items-center gap-1`}
                    >
                      Learn More 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#d4a0a0]/30"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-[#d4a0a0]/10 to-[#f8e8e8]/30 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <p className="text-[#2d2a2a] font-medium mb-3">
              Looking for something special?
            </p>
            <a 
              href="#contact" 
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <i className="fas fa-calendar-check"></i> Book Your Session
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#c08a8a] to-[#d4a0a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Services