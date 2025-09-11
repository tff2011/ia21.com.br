'use client'

import { Sparkles, Rocket, Medal } from 'lucide-react'

const companies = [
  'Google',
  'Microsoft',
  'Amazon',
  'Apple',
  'Tesla'
]

export function CompaniesCarousel({ theme = 'gold' }: { theme?: 'gold' | 'blue' }) {
  const colors = theme === 'blue' 
    ? {
        primary: '#1C3B6F',
        secondary: '#0F1C3F',
        gradientFrom: 'from-[#1C3B6F]/5',
        gradientTo: 'to-[#0F1C3F]/5',
        border: 'border-[#1C3B6F]/10',
        iconColor: 'text-[#1C3B6F]',
        logoGradientFrom: 'from-[#1C3B6F]',
        logoGradientTo: 'to-[#0F1C3F]',
        hoverColor: 'group-hover:text-[#1C3B6F]',
        dividerColor: 'via-[#1C3B6F]',
        decorativeLeft: 'text-[#1C3B6F]',
        decorativeRight: 'text-[#0F1C3F]'
      }
    : {
        primary: '#C8A253',
        secondary: '#B8860B',
        gradientFrom: 'from-[#C8A253]/5',
        gradientTo: 'to-[#0F1C3F]/5',
        border: 'border-[#C8A253]/10',
        iconColor: 'text-[#C8A253]',
        logoGradientFrom: 'from-[#C8A253]',
        logoGradientTo: 'to-[#0F1C3F]',
        hoverColor: 'group-hover:text-[#C8A253]',
        dividerColor: 'via-[#C8A253]',
        decorativeLeft: 'text-[#C8A253]',
        decorativeRight: 'text-[#0F1C3F]'
      };

  return (
    <>
      <section className={`relative w-full overflow-hidden bg-gradient-to-r ${colors.gradientFrom} via-background ${colors.gradientTo} mt-3 py-6 sm:py-8 flex items-center`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,162,83,0.03),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center gap-12">
          {/* Introductory Text */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Medal className={`h-5 w-5 ${colors.iconColor}`} />
            <span className="text-sm font-medium text-foreground whitespace-nowrap">
              Professores de IA escolhidos por profissionais de
            </span>
          </div>

          {/* Carousel Container */}
          <div className="relative flex-1 max-w-3xl overflow-hidden">
            {/* Companies Row */}
            <div className="flex animate-scroll">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center gap-3 group cursor-default"
                >
                  {/* Logo Circle */}
                  <div className={`w-9 h-9 bg-gradient-to-br ${colors.logoGradientFrom} ${colors.logoGradientTo} rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105`}>
                    <span className="text-white font-bold text-sm">
                      {company.charAt(0)}
                    </span>
                  </div>

                  {/* Company Name */}
                  <span className={`text-sm font-semibold text-foreground ${colors.hoverColor} transition-colors duration-300 whitespace-nowrap`}>
                    {company}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Text */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Medal className={`h-4 w-4 ${colors.iconColor} flex-shrink-0`} />
            <span className="text-xs sm:text-sm font-medium text-foreground text-center">
              Professores de IA escolhidos por profissionais de
            </span>
          </div>

          {/* Mobile Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 flex items-center gap-2 group cursor-default"
                >
                  {/* Logo Circle */}
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br ${colors.logoGradientFrom} ${colors.logoGradientTo} rounded-full flex items-center justify-center shadow-sm`}>
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {company.charAt(0)}
                    </span>
                  </div>

                  {/* Company Name */}
                  <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Mobile Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-20">
        <Sparkles className={`h-4 w-4 ${colors.decorativeLeft}`} />
      </div>
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-20">
        <Rocket className={`h-4 w-4 ${colors.decorativeRight}`} />
      </div>
    </section>

      {/* Elegant Divider */}
      <div className="relative w-full flex justify-center py-4">
        <div className="relative">
          {/* Main divider line */}
          <div className={`w-32 sm:w-48 h-px bg-gradient-to-r from-transparent ${colors.dividerColor} to-transparent opacity-60`}></div>
          
          {/* Central ornament */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`w-2 h-2 bg-gradient-to-br ${colors.logoGradientFrom} ${colors.logoGradientTo} rounded-full shadow-sm`}>
              <div className={`w-full h-full bg-gradient-to-tr ${colors.logoGradientFrom} ${colors.logoGradientTo} rounded-full opacity-70`}></div>
            </div>
          </div>
          
          {/* Side ornaments */}
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
            <div className={`w-1 h-1 bg-[${colors.primary}] rounded-full opacity-40`}></div>
          </div>
          <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
            <div className={`w-1 h-1 bg-[${colors.primary}] rounded-full opacity-40`}></div>
          </div>
        </div>
      </div>
    </>
  )
}
