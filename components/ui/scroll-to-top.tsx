'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const isBusinessTheme = pathname?.startsWith('/para-empresas')

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  const buttonClasses = isBusinessTheme
    ? 'bg-brand-tech-blue hover:bg-brand-tech-blue/90 text-white border-brand-tech-blue'
    : 'bg-brand-metallic-gold hover:bg-brand-metallic-gold/90 text-brand-rich-black border-brand-metallic-gold'

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={scrollToTop}
        size="lg"
        className={`
          ${buttonClasses}
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-in-out
          rounded-full w-14 h-14
          border-2
          flex items-center justify-center
          group
        `}
        aria-label="Voltar ao topo da página"
      >
        <ChevronUp
          className="
            h-6 w-6
            transition-transform duration-300 ease-in-out
            group-hover:-translate-y-1
          "
        />
      </Button>
    </div>
  )
}
