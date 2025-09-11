import { Quote } from 'lucide-react'

type Props = {
  context?: 'b2c' | 'b2b'
}

export function PhilosophyQuote({ context }: Props) {
  const getQuoteContent = () => {
    if (context === 'b2b') {
      return (
        <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          <span className="font-black text-blue-300">Empresas</span> com
          <span className="font-black"> IA</span> crescem
          <span className="font-black text-blue-300"> 3x mais rápido</span> que
          <span className="font-black"> empresas</span> sem
          <span className="font-black text-blue-300"> IA</span>.
        </p>
      )
    }
    
    // B2C version (default for home and para-voce)
    return (
      <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
        A <span className="text-primary">IA</span> não vai
        <span className="font-black"> substituir você</span>, mas
        <span className="font-black text-primary"> quem usa IA</span> vai
        <span className="font-black"> substituir</span> quem não usa.
      </p>
    )
  }

  return (
    <section className={`relative py-16 sm:py-20 px-4 ${
      context === 'b2b' ? 'bg-[#0F1C3F]' : 'bg-[#F5F5F5]'
    }`}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Quote className={`h-8 w-8 sm:h-10 sm:w-10 ${
            context === 'b2b' ? 'text-blue-300' : 'text-primary'
          }`} aria-hidden="true" />
        </div>
        <blockquote className="leading-tight tracking-tight">
          {getQuoteContent()}
        </blockquote>
        
        {context && (
          <p className={`mt-4 text-sm sm:text-base ${
            context === 'b2b' ? 'text-blue-200' : 'text-muted-foreground'
          }`}>
            {context === 'b2b' ? '' : 'Transformação pessoal através da IA para sua carreira.'}
          </p>
        )}
      </div>
      
      {/* Section transition styled as a downward arrow pointing to next section */}
      <div className="absolute -bottom-8 sm:-bottom-10 left-0 right-0 z-10 pointer-events-none select-none">
        <svg
          className="w-full h-24 sm:h-28"
          viewBox="0 0 1200 96"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mobile: wider opening for better visual proportion */}
          <path
            className="sm:hidden"
            d="M0,0 L1200,0 L1200,24 L720,24 L600,96 L480,24 L0,24 Z"
            style={{ fill: context === 'b2b' ? '#0F1C3F' : 'var(--muted)' }}
          />
          {/* ≥ sm: keep previous width (desktop/tablet) */}
          <path
            className="hidden sm:inline"
            d="M0,0 L1200,0 L1200,24 L660,24 L600,96 L540,24 L0,24 Z"
            style={{ fill: context === 'b2b' ? '#0F1C3F' : 'var(--muted)' }}
          />
        </svg>
      </div>
    </section>
  )}
