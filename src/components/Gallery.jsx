import React, { useState, useEffect, useRef } from 'react'

// Import your 6 Gemini-generated images
import bridalImage from '../assets/bridal-makeup.png'
import partyImage from '../assets/party-makeup.png'
import royalImage from '../assets/royal-bridal.png'
import fusionImage from '../assets/fusion-makeup.png'
import glamImage from '../assets/glam-party.png'
import hairImage from '../assets/hair-styling.png'

const galleryItems = [
  { 
    image: bridalImage, 
    label: 'Bridal Makeup',
    category: 'Traditional',
    emoji: '👰',
    color: 'from-pink-400 to-rose-400',
    tag: '✨ Most Loved'
  },
  { 
    image: partyImage, 
    label: 'Party Makeup',
    category: 'Glam',
    emoji: '💃',
    color: 'from-purple-400 to-pink-400',
    tag: '🌟 Trending'
  },
  { 
    image: royalImage, 
    label: 'Royal Bridal',
    category: 'Luxury',
    emoji: '👑',
    color: 'from-amber-400 to-yellow-400',
    tag: '💎 Premium'
  },
  { 
    image: fusionImage, 
    label: 'Fusion Makeup',
    category: 'Contemporary',
    emoji: '🎨',
    color: 'from-blue-400 to-cyan-400',
    tag: '🌈 Modern'
  },
  { 
    image: glamImage, 
    label: 'Glam Party',
    category: 'Party',
    emoji: '✨',
    color: 'from-rose-400 to-red-400',
    tag: '🔥 Hot'
  },
  { 
    image: hairImage, 
    label: 'Hair Styling',
    category: 'Styling',
    emoji: '💇‍♀️',
    color: 'from-emerald-400 to-teal-400',
    tag: '⭐ Popular'
  },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isVisible, setIsVisible] = useState({})
  const [hoveredIndex, setHoveredIndex] = useState(null)
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

    const cards = document.querySelectorAll('.gallery-card')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  // Confetti effect on hover
  const createConfetti = (e, idx) => {
    if (hoveredIndex === idx) return
    setHoveredIndex(idx)
    
    // Simple confetti effect using emojis
    const confettiEmojis = ['🎉', '✨', '💫', '🌟', '⭐', '🎊']
    const container = document.getElementById(`gallery-${idx}`)
    if (!container) return
    
    for (let i = 0; i < 8; i++) {
      const confetti = document.createElement('div')
      confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)]
      confetti.className = 'absolute text-2xl pointer-events-none'
      confetti.style.left = `${Math.random() * 100}%`
      confetti.style.top = `${Math.random() * 100}%`
      confetti.style.animation = `confetti-${i} 1.5s ease-out forwards`
      confetti.style.animationDelay = `${Math.random() * 0.3}s`
      container.appendChild(confetti)
      
      setTimeout(() => confetti.remove(), 2000)
    }
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Fun Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating balloons */}
        <div className="absolute top-10 left-10 text-6xl animate-float">🎈</div>
        <div className="absolute top-20 right-20 text-5xl animate-float" style={{ animationDelay: '1.5s' }}>🎈</div>
        <div className="absolute bottom-20 left-1/4 text-6xl animate-float" style={{ animationDelay: '3s' }}>🎈</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-float" style={{ animationDelay: '2s' }}>🎪</div>
        
        {/* Sparkle decorations */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          >
            {['✦', '✧', '⭐', '🌟', '💫'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        {/* Section Header - Fun Fair Style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4a0a0]/20 to-[#f8e8e8]/30 backdrop-blur-sm px-6 py-3 rounded-full text-[#8b6b6b] font-medium mb-4">
            <span className="animate-bounce">🎪</span>
            <span>Step into the Magic</span>
            <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🎪</span>
          </div>
          <h2 className="section-title">
            Our <span className="text-[#d4a0a0] relative">
              Gallery
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#d4a0a0] via-purple-400 to-pink-400 rounded-full"></span>
            </span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A glimpse of our beautiful transformations ✨
          </p>
        </div>

        {/* Fun Fair Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              data-index={idx}
              id={`gallery-${idx}`}
              className={`gallery-card relative transform transition-all duration-700 ${
                isVisible[idx] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ 
                transitionDelay: `${idx * 100}ms`,
                animation: isVisible[idx] ? 'cardPop 0.6s ease-out' : 'none'
              }}
              onMouseEnter={(e) => createConfetti(e, idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative group">
                {/* Glowing border effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Main Image Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 aspect-square cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Fun Tag */}
                  <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#2d2a2a] shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                    <span className="flex items-center gap-1">
                      <span>{item.emoji}</span>
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#2d2a2a] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
                    onClick={() => setSelectedImage(idx)}
                  >
                    <i className="fas fa-camera mr-1"></i> View
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg">{item.label}</h3>
                        <p className="text-white/80 text-sm">{item.category}</p>
                      </div>
                    </div>
                    
                    {/* Fun progress bar */}
                    <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${item.color} rounded-full w-0 group-hover:w-full transition-all duration-1000`}></div>
                    </div>
                  </div>

                  {/* Fun corner decorations */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Bottom Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <span className="animate-bounce">🎉</span>
            <span className="text-sm font-medium text-[#2d2a2a]">Professional makeup portfolio</span>
            <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🎉</span>
            <span className="text-sm text-[#6b5a5a]">•</span>
            <span className="text-sm text-[#6b5a5a]">50+ transformations</span>
            <span className="text-sm text-[#6b5a5a]">•</span>
            <span className="text-sm text-[#6b5a5a]">✨ 100% satisfaction</span>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes cardPop {
          0% { transform: scale(0.8) rotate(-3deg); }
          50% { transform: scale(1.05) rotate(1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        
        @keyframes confetti-0 { 0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; } 100% { transform: translate(${Math.random() * 60 - 30}px, -80px) rotate(360deg) scale(0); opacity: 0; } }
        @keyframes confetti-1 { 0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; } 100% { transform: translate(${Math.random() * 60 - 30}px, -80px) rotate(-360deg) scale(0); opacity: 0; } }
        @keyframes confetti-2 { 0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; } 100% { transform: translate(${Math.random() * 60 - 30}px, -80px) rotate(180deg) scale(0); opacity: 0; } }
        @keyframes confetti-3 { 0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; } 100% { transform: translate(${Math.random() * 60 - 30}px, -80px) rotate(-180deg) scale(0); opacity: 0; } }
        @keyframes confetti-4 { 0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; } 100% { transform: translate(${Math.random() * 60 - 30}px, -80px) rotate(90deg) scale(0); opacity: 0; } }
        @keyframes confetti-5 { 0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; } 100% { transform: translate(${Math.random() * 60 - 30}px, -80px) rotate(-90deg) scale(0); opacity: 0; } }
        @keyframes confetti-6 { 0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; } 100% { transform: translate(${Math.random() * 60 - 30}px, -80px) rotate(45deg) scale(0); opacity: 0; } }
        @keyframes confetti-7 { 0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; } 100% { transform: translate(${Math.random() * 60 - 30}px, -80px) rotate(-45deg) scale(0); opacity: 0; } }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  )
}

export default Gallery