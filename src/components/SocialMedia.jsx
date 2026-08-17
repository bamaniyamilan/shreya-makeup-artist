import React, { useState, useEffect, useRef } from 'react'

const SocialMedia = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
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

  const socialPlatforms = [
    { 
      name: 'Instagram', 
      icon: 'fab fa-instagram', 
      color: 'from-pink-500 via-purple-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500',
      handle: '@shreya_makeup_artist',
      url: 'https://instagram.com',
      followers: '12.5K',
      posts: '450+',
      emoji: '📸'
    },
    { 
      name: 'YouTube', 
      icon: 'fab fa-youtube', 
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-red-500 to-red-600',
      handle: 'Shreya Makeup Artist',
      url: 'https://youtube.com',
      followers: '8.2K',
      posts: '120+',
      emoji: '🎬'
    },
    { 
      name: 'Facebook', 
      icon: 'fab fa-facebook', 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      handle: 'Shreya Makeup Artist',
      url: 'https://facebook.com',
      followers: '5.8K',
      posts: '200+',
      emoji: '👍'
    },
    { 
      name: 'WhatsApp', 
      icon: 'fab fa-whatsapp', 
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-gradient-to-br from-green-400 to-green-500',
      handle: 'Quick Connect',
      url: 'https://wa.me/919876543210',
      followers: '3.4K',
      posts: '24/7',
      emoji: '💬'
    },
  ]

  const recentPosts = [
    { emoji: '👰', text: 'Bridal transformation ✨', likes: '2.4K' },
    { emoji: '💄', text: 'Party makeup glam 💃', likes: '1.8K' },
    { emoji: '👑', text: 'Royal bridal look 👑', likes: '3.1K' },
    { emoji: '🌸', text: 'Fusion makeup inspiration 🎨', likes: '1.5K' },
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#fdf8f5] via-white to-[#f8e8e8] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#d4a0a0]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#f8e8e8]/30 rounded-full blur-3xl"></div>
        
        {/* Floating social emojis */}
        {['❤️', '💫', '✨', '🌟', '💖', '🦋', '🌈', '⭐'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-float"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#d4a0a0]/20 to-[#f8e8e8]/30 backdrop-blur-sm px-6 py-2 rounded-full text-[#8b6b6b] text-sm font-medium mb-4 animate-pulse-slow">
              🌟 Join the Community
            </div>
            <h2 className="section-title">
              Follow <span className="text-[#d4a0a0] relative">
                My Journey
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#d4a0a0] via-pink-400 to-purple-400 rounded-full"></span>
              </span>
            </h2>
            <p className="section-subtitle max-w-md mx-auto">
              Connect with me on social media for daily inspiration ✨
            </p>
          </div>

          {/* YouTube Video Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative group">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d4a0a0]/30 via-pink-300/20 to-[#d4a0a0]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative pb-[56.25%] h-0">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Makeup Tutorial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video overlay with play button effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <span className="text-sm text-[#6b5a5a] flex items-center gap-2">
                <span>🎬</span> Watch my latest makeup transformations
              </span>
              <span className="text-[#d4a0a0]/30">|</span>
              <span className="text-xs text-[#6b5a5a] flex items-center gap-1">
                <span>⏱️</span> New video every week
              </span>
            </div>
          </div>

          {/* Social Platform Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialPlatforms.map((platform, idx) => (
              <a
                key={idx}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative transform transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 ${platform.bgColor} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 text-center">
                  {/* Platform Icon */}
                  <div className={`relative w-20 h-20 mx-auto rounded-full ${platform.bgColor} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${platform.icon} text-3xl text-white`}></i>
                    
                    {/* Pulsing ring */}
                    <div className={`absolute inset-0 rounded-full ${platform.bgColor} opacity-30 animate-ping`}></div>
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-lg font-bold text-[#2d2a2a] mb-1">
                    {platform.name}
                  </h3>
                  
                  {/* Handle */}
                  <p className="text-sm text-[#6b5a5a] mb-3">
                    {platform.handle}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-center gap-4 text-xs">
                    <div>
                      <span className="block font-bold text-[#2d2a2a]">{platform.followers}</span>
                      <span className="text-[#6b5a5a]">Followers</span>
                    </div>
                    <div className="w-px bg-[#d4a0a0]/20"></div>
                    <div>
                      <span className="block font-bold text-[#2d2a2a]">{platform.posts}</span>
                      <span className="text-[#6b5a5a]">Posts</span>
                    </div>
                  </div>

                  {/* Follow Button */}
                  <div className="mt-4 pt-4 border-t border-[#d4a0a0]/10">
                    <span className={`text-xs font-medium ${platform.bgColor} bg-clip-text text-transparent inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      {platform.emoji} Follow
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Recent Posts Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-[#2d2a2a] flex items-center justify-center gap-2">
                <span>🔥</span> Recent Posts
                <span className="text-sm font-light text-[#6b5a5a]">(most liked)</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recentPosts.map((post, idx) => (
                <div
                  key={idx}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${idx * 150 + 400}ms` }}
                >
                  <div className="text-4xl mb-2">{post.emoji}</div>
                  <p className="text-sm font-medium text-[#2d2a2a] mb-1">{post.text}</p>
                  <p className="text-xs text-[#6b5a5a] flex items-center justify-center gap-1">
                    <span>❤️</span> {post.likes} likes
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-wrap items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <span className="animate-bounce">✨</span>
              <span className="text-sm font-medium text-[#2d2a2a]">
                Follow <span className="text-[#d4a0a0]">@shreya_makeup_artist</span>
              </span>
              <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>✨</span>
              <span className="text-sm text-[#6b5a5a]">•</span>
              <span className="text-sm text-[#6b5a5a]">Daily inspiration</span>
              <span className="text-sm text-[#6b5a5a]">•</span>
              <span className="text-sm text-[#6b5a5a]">💄 Beauty tips</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  )
}

export default SocialMedia