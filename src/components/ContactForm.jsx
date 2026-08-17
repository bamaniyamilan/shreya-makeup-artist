import React, { useState, useEffect, useRef } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    occasion: '',
    date: '',
    phone: '',
    message: ''
  })
  const [isFocused, setIsFocused] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true })
  }

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // WhatsApp message formatting
    const message = `Hi Shreya! I'd like to book a makeup session.%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Occasion: ${formData.occasion}%0A` +
      `Date: ${formData.date}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Message: ${formData.message}`
    
    const phoneNumber = '919876543210' // Replace with actual number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    
    // Show success animation
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    
    // Reset form
    setFormData({
      name: '',
      occasion: '',
      date: '',
      phone: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#d4a0a0]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#f8e8e8]/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#d4a0a0]/5 to-[#f8e8e8]/5 rounded-full blur-3xl"></div>
        
        {/* Floating decorative elements */}
        {['💄', '✨', '👑', '🌸', '💎', '🌟', '💫', '🌺'].map((emoji, i) => (
          <div
            key={i}
            className={`absolute text-3xl animate-float-${i % 3 + 1}`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10" ref={sectionRef}>
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#d4a0a0]/20 to-[#f8e8e8]/30 backdrop-blur-sm px-6 py-2 rounded-full text-[#8b6b6b] text-sm font-medium mb-4 animate-pulse-slow">
              💌 Get in Touch
            </div>
            <h2 className="section-title">
              Let's <span className="text-[#d4a0a0] relative">
                Connect
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#d4a0a0] to-pink-400 rounded-full"></span>
              </span>
            </h2>
            <p className="section-subtitle max-w-md mx-auto">
              Book your consultation or send a message
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4a0a0]/30 via-pink-300/20 to-[#d4a0a0]/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main Form */}
            <form onSubmit={handleSubmit} className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 space-y-6 border border-white/20">
              {/* Success Message */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10 animate-fadeIn">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">🎉</div>
                    <h3 className="text-2xl font-bold text-[#2d2a2a]">Message Sent!</h3>
                    <p className="text-[#6b5a5a]">We'll respond within 24 hours ✨</p>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#2d2a2a] mb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-[#d4a0a0]">👤</span>
                    Your Name <span className="text-[#d4a0a0]">*</span>
                  </span>
                </label>
                <div className={`relative transition-all duration-300 ${isFocused.name ? 'transform scale-[1.02]' : ''}`}>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    className={`w-full px-5 py-3.5 rounded-2xl border-2 transition-all duration-300 
                      ${isFocused.name 
                        ? 'border-[#d4a0a0] shadow-lg shadow-[#d4a0a0]/20' 
                        : 'border-[#d4a0a0]/20 hover:border-[#d4a0a0]/40'} 
                      focus:outline-none bg-white/50 backdrop-blur-sm`}
                    value={formData.name} 
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. Priya Sharma"
                  />
                  {formData.name && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                      ✅
                    </div>
                  )}
                </div>
              </div>

              {/* Occasion Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#2d2a2a] mb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-[#d4a0a0]">🎯</span>
                    Occasion <span className="text-[#d4a0a0]">*</span>
                  </span>
                </label>
                <div className={`relative transition-all duration-300 ${isFocused.occasion ? 'transform scale-[1.02]' : ''}`}>
                  <select 
                    name="occasion" 
                    required
                    className={`w-full px-5 py-3.5 rounded-2xl border-2 transition-all duration-300 appearance-none
                      ${isFocused.occasion 
                        ? 'border-[#d4a0a0] shadow-lg shadow-[#d4a0a0]/20' 
                        : 'border-[#d4a0a0]/20 hover:border-[#d4a0a0]/40'} 
                      focus:outline-none bg-white/50 backdrop-blur-sm`}
                    value={formData.occasion} 
                    onChange={handleChange}
                    onFocus={() => handleFocus('occasion')}
                    onBlur={() => handleBlur('occasion')}
                  >
                    <option value="">🎪 Select occasion</option>
                    <option value="Bridal Makeup">👰 Bridal Makeup</option>
                    <option value="Party Makeup">💃 Party Makeup</option>
                    <option value="Hair Styling">💇‍♀️ Hair Styling</option>
                    <option value="Pre-Wedding">💍 Pre-Wedding</option>
                    <option value="Other">✨ Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-[#d4a0a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Date Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#2d2a2a] mb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-[#d4a0a0]">📅</span>
                    Event Date <span className="text-[#d4a0a0]">*</span>
                  </span>
                </label>
                <div className={`relative transition-all duration-300 ${isFocused.date ? 'transform scale-[1.02]' : ''}`}>
                  <input 
                    type="date" 
                    name="date" 
                    required
                    className={`w-full px-5 py-3.5 rounded-2xl border-2 transition-all duration-300
                      ${isFocused.date 
                        ? 'border-[#d4a0a0] shadow-lg shadow-[#d4a0a0]/20' 
                        : 'border-[#d4a0a0]/20 hover:border-[#d4a0a0]/40'} 
                      focus:outline-none bg-white/50 backdrop-blur-sm`}
                    value={formData.date} 
                    onChange={handleChange}
                    onFocus={() => handleFocus('date')}
                    onBlur={() => handleBlur('date')}
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#2d2a2a] mb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-[#d4a0a0]">📱</span>
                    Phone Number
                  </span>
                </label>
                <div className={`relative transition-all duration-300 ${isFocused.phone ? 'transform scale-[1.02]' : ''}`}>
                  <input 
                    type="tel" 
                    name="phone"
                    className={`w-full px-5 py-3.5 rounded-2xl border-2 transition-all duration-300
                      ${isFocused.phone 
                        ? 'border-[#d4a0a0] shadow-lg shadow-[#d4a0a0]/20' 
                        : 'border-[#d4a0a0]/20 hover:border-[#d4a0a0]/40'} 
                      focus:outline-none bg-white/50 backdrop-blur-sm`}
                    value={formData.phone} 
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-[#2d2a2a] mb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-[#d4a0a0]">💬</span>
                    Message
                  </span>
                </label>
                <div className={`relative transition-all duration-300 ${isFocused.message ? 'transform scale-[1.02]' : ''}`}>
                  <textarea 
                    name="message" 
                    rows="4"
                    className={`w-full px-5 py-3.5 rounded-2xl border-2 transition-all duration-300 resize-none
                      ${isFocused.message 
                        ? 'border-[#d4a0a0] shadow-lg shadow-[#d4a0a0]/20' 
                        : 'border-[#d4a0a0]/20 hover:border-[#d4a0a0]/40'} 
                      focus:outline-none bg-white/50 backdrop-blur-sm`}
                    value={formData.message} 
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    placeholder="Any special requests or questions... 💭"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="relative w-full btn-primary justify-center group overflow-hidden text-lg py-4"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                  <span className="text-sm opacity-70">✨</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#c08a8a] to-[#d4a0a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>

              {/* Footer Text */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                <p className="text-xs text-[#6b5a5a] flex items-center gap-1">
                  <span>🔒</span> We'll respond within 24 hours ✨
                </p>
                <span className="text-[#d4a0a0]/30">|</span>
                <p className="text-xs text-[#6b5a5a] flex items-center gap-1">
                  <span>💝</span> 100% satisfaction guaranteed
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 7s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-bounce { animation: bounce 1s infinite; }
      `}</style>
    </section>
  )
}

export default ContactForm