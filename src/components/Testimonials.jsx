import React, { useState, useEffect, useRef } from 'react'

const testimonials = [
  { 
    name: 'Priya Sharma', 
    location: 'Mumbai',
    text: 'Shreya made me look like a dream on my wedding day! Her attention to detail is unmatched. Every guest complimented my makeup and I felt like a princess.',
    rating: 5,
    avatar: '👰',
    date: '2 weeks ago',
    wedding: 'Traditional Wedding'
  },
  { 
    name: 'Anjali Patel', 
    location: 'Delhi',
    text: 'Best makeup artist in town! She understood exactly what I wanted and delivered perfection. My makeup stayed flawless throughout the entire 12-hour event.',
    rating: 5,
    avatar: '💃',
    date: '1 month ago',
    wedding: 'Fusion Wedding'
  },
  { 
    name: 'Neha Reddy', 
    location: 'Bangalore',
    text: 'My bridal makeup lasted all night and I received so many compliments. Thank you Shreya for making me feel so beautiful on my special day! ✨',
    rating: 5,
    avatar: '👑',
    date: '3 weeks ago',
    wedding: 'Royal Wedding'
  },
  { 
    name: 'Sneha Mehta', 
    location: 'Pune',
    text: 'Absolutely loved my party makeup! Shreya is so professional and talented. She made me look glamorous and I felt so confident. Highly recommend!',
    rating: 5,
    avatar: '💄',
    date: '5 days ago',
    wedding: 'Party Makeup'
  },
  { 
    name: 'Ritu Kapoor', 
    location: 'Jaipur',
    text: 'The hair styling and makeup was perfect! Shreya listened to all my preferences and created exactly what I envisioned. A true artist! 🌟',
    rating: 5,
    avatar: '💇‍♀️',
    date: '2 months ago',
    wedding: 'Pre-Wedding'
  },
  { 
    name: 'Kavya Singh', 
    location: 'Chennai',
    text: 'Shreya is a gem! She made my bridal makeup look so natural yet elegant. Everyone thought I was glowing from within. Thank you so much!',
    rating: 5,
    avatar: '✨',
    date: '1 week ago',
    wedding: 'Bridal Makeup'
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

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

  // Auto-slide carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(intervalRef.current)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
  }

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.wedding.includes(activeTab))

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50/30 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#d4a0a0]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#f8e8e8]/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#d4a0a0]/5 to-[#f8e8e8]/5 rounded-full blur-3xl"></div>
        
        {/* Floating quote marks */}
        {['"', '"', '"', '"', '"'].map((quote, i) => (
          <div
            key={i}
            className="absolute text-8xl font-serif text-[#d4a0a0]/5 animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            {quote}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#d4a0a0]/20 to-[#f8e8e8]/30 backdrop-blur-sm px-6 py-2 rounded-full text-[#8b6b6b] text-sm font-medium mb-4">
              💖 Love Notes
            </div>
            <h2 className="section-title">
              What <span className="text-[#d4a0a0] relative">
                Brides Say
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#d4a0a0] via-pink-400 to-purple-400 rounded-full"></span>
              </span>
            </h2>
            <p className="section-subtitle max-w-md mx-auto">
              Real reviews from our beautiful clients ✨
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'Bridal', 'Party', 'Wedding', 'Pre-Wedding'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-[#d4a0a0] text-white shadow-lg shadow-[#d4a0a0]/30'
                    : 'bg-white/50 text-[#2d2a2a] hover:bg-[#d4a0a0]/10'
                }`}
              >
                {tab === 'all' ? '✨ All Reviews' : tab}
              </button>
            ))}
          </div>

          {/* Carousel View */}
          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((t, idx) => (
                  <div key={idx} className="min-w-full px-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4a0a0] to-pink-400 flex items-center justify-center text-4xl shadow-lg">
                              {t.avatar}
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-green-400 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                              <span className="text-xs">✓</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-[#2d2a2a]">{t.name}</h3>
                              <p className="text-sm text-[#6b5a5a]">{t.location} • {t.wedding}</p>
                            </div>
                            <div className="text-lg">{renderStars(t.rating)}</div>
                          </div>
                          
                          <div className="relative">
                            <span className="absolute -top-2 -left-2 text-4xl text-[#d4a0a0]/20 font-serif">"</span>
                            <p className="text-[#2d2a2a] italic leading-relaxed pl-6 py-2">
                              {t.text}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#d4a0a0]/10">
                            <span className="text-xs text-[#6b5a5a] flex items-center gap-1">
                              <span>📅</span> {t.date}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-[#d4a0a0]">
                              <span>❤️</span> Verified Review
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 hover:bg-[#d4a0a0] hover:text-white group z-10"
            >
              <svg className="w-5 h-5 group-hover:text-white text-[#2d2a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 hover:bg-[#d4a0a0] hover:text-white group z-10"
            >
              <svg className="w-5 h-5 group-hover:text-white text-[#2d2a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? 'w-8 bg-[#d4a0a0] shadow-lg shadow-[#d4a0a0]/30' 
                      : 'bg-[#d4a0a0]/30 hover:bg-[#d4a0a0]/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Grid View (Alternative for smaller screens) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:hidden">
            {testimonials.slice(0, 3).map((t, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a0a0] to-pink-400 flex items-center justify-center text-2xl">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d2a2a]">{t.name}</h4>
                    <p className="text-xs text-[#6b5a5a]">{t.location}</p>
                  </div>
                </div>
                <div className="text-sm mb-2">{renderStars(t.rating)}</div>
                <p className="text-sm text-[#2d2a2a] italic">"{t.text}"</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { number: '500+', label: 'Happy Brides', emoji: '👰' },
              { number: '4.9', label: 'Average Rating', emoji: '⭐' },
              { number: '100%', label: 'Satisfaction', emoji: '💯' },
              { number: '50+', label: '5-Star Reviews', emoji: '🌟' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 150 + 600}ms` }}
              >
                <div className="text-2xl mb-1">{stat.emoji}</div>
                <div className="text-xl font-bold text-[#d4a0a0]">{stat.number}</div>
                <div className="text-xs text-[#6b5a5a]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Testimonials