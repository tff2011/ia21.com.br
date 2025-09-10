'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()
  const isBusinessTheme = pathname?.startsWith('/para-empresas')

  const toggleVisibility = () => {
    const scrolled = window.pageYOffset
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (scrolled / maxHeight) * 100
    
    setScrollProgress(progress)
    setIsVisible(scrolled > 400)
  }

  useEffect(() => {
    const throttledToggleVisibility = () => {
      requestAnimationFrame(toggleVisibility)
    }

    window.addEventListener('scroll', throttledToggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', throttledToggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  const themeColors = isBusinessTheme
    ? {
        bg: 'bg-brand-tech-blue/90',
        bgHover: 'hover:bg-brand-tech-blue',
        text: 'text-white',
        border: 'border-brand-tech-blue/30',
        shadow: 'shadow-brand-tech-blue/20',
        ring: 'ring-brand-tech-blue/20'
      }
    : {
        bg: 'bg-brand-metallic-gold/90',
        bgHover: 'hover:bg-brand-metallic-gold',
        text: 'text-brand-rich-black',
        border: 'border-brand-metallic-gold/30',
        shadow: 'shadow-brand-metallic-gold/20',
        ring: 'ring-brand-metallic-gold/20'
      }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `conic-gradient(${isBusinessTheme ? '#3A7CA5' : '#C8A253'} ${scrollProgress * 3.6}deg, transparent 0deg)`
          }}
        />
        
        <button
          onClick={scrollToTop}
          className={`
            relative ${themeColors.bg} ${themeColors.bgHover} ${themeColors.text}
            backdrop-blur-sm border ${themeColors.border}
            rounded-full w-12 h-12
            flex items-center justify-center
            shadow-lg ${themeColors.shadow} hover:shadow-xl
            transition-all duration-300 ease-out
            transform hover:scale-110 active:scale-95
            ring-0 hover:ring-4 ${themeColors.ring}
            group-hover:ring-8
            before:absolute before:inset-0 before:rounded-full 
            before:bg-gradient-to-br before:from-white/20 before:to-transparent 
            before:opacity-0 before:transition-opacity before:duration-300
            hover:before:opacity-100
          `}
          aria-label="Voltar ao topo da página"
        >
          <ChevronUp
            className="
              h-5 w-5 relative z-10
              transition-all duration-300 ease-out
              group-hover:-translate-y-0.5 group-hover:scale-110
              drop-shadow-sm
            "
            strokeWidth={2.5}
          />
          
          <div className={`
            absolute inset-0 rounded-full
            bg-gradient-to-t from-black/10 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          `} />
        </button>
      </div>
    </div>
  )
}
