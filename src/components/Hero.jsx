import React, { useEffect, useRef } from 'react'
import heroImage from '../assets/hero-makeup.png'

const Hero = () => {
  const floatingRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (floatingRef.current) {
        const rect = floatingRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        floatingRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
      }
    }

    const element = floatingRef.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d4a0a0]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#f8e8e8]/30 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#d4a0a0]/5 to-[#f8e8e8]/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          >
            {['✨', '💄', '👑', '🌸', '💎', '🌟', '💫', '🌺', '🦋', '🌈', '⭐', '💖'][i]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left animate-fadeInUp">
            <div className="inline-block bg-[#d4a0a0]/20 backdrop-blur-sm px-4 py-2 rounded-full text-[#8b6b6b] text-sm font-medium mb-4 animate-pulse-slow">
              ✨ Award Winning Makeup Artist
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2d2a2a] leading-tight mb-4">
              Shreya <span className="text-[#d4a0a0] relative">
                Makeup
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#d4a0a0] to-transparent rounded-full"></span>
              </span> <br />
              <span className="text-3xl md:text-5xl font-light bg-gradient-to-r from-[#2d2a2a] to-[#8b6b6b] bg-clip-text text-transparent">
                Artistry
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6b5a5a] mb-8 max-w-lg mx-auto md:mx-0 animate-slideInLeft">
              Transforming brides into their most beautiful selves with 
              personalized makeup and hair styling for every occasion.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-calendar-check"></i> Book Consultation
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#c08a8a] to-[#d4a0a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              <a href="#gallery" className="border-2 border-[#d4a0a0] text-[#2d2a2a] px-8 py-3 rounded-full hover:bg-[#d4a0a0]/10 transition-all duration-300 inline-flex items-center gap-2 group hover:scale-105 hover:shadow-lg">
                <i className="fas fa-play-circle group-hover:animate-pulse"></i> View Work
              </a>
            </div>
            <div className="flex gap-8 mt-8 justify-center md:justify-start">
              {[
                { number: '500+', label: 'Happy Brides', delay: '0s' },
                { number: '8+', label: 'Years Experience', delay: '0.2s' },
                { number: '50+', label: 'Awards', delay: '0.4s' }
              ].map((stat, idx) => (
                <div key={idx} className="group cursor-pointer animate-slideInUp" style={{ animationDelay: stat.delay }}>
                  <span className="block text-2xl font-bold text-[#d4a0a0] group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </span>
                  <span className="text-sm text-[#6b5a5a] group-hover:text-[#2d2a2a] transition-colors">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div 
              ref={floatingRef}
              className="relative w-72 h-72 md:w-96 md:h-96 transition-transform duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glowing ring behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4a0a0]/30 to-[#f8e8e8] animate-pulse-slow"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-500 hover:scale-105">
                <img 
                  src={heroImage} 
                  alt="Shreya Makeup Artist" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d4a0a0]/20 via-transparent to-transparent"></div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-2 shadow-lg animate-float" style={{ animationDelay: '0s' }}>
                <span className="text-xl">💄</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-2 shadow-lg animate-float" style={{ animationDelay: '3s' }}>
                <span className="text-xl">👑</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-2 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xl">🌸</span>
              </div>

              {/* Rotating ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-[#d4a0a0]/20 animate-spin-slow"></div>
              <div className="absolute -inset-8 rounded-full border border-[#d4a0a0]/10 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        .animate-slideInUp {
          opacity: 0;
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero