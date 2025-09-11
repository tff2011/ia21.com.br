import { Quote } from 'lucide-react'

export function PhilosophyQuote() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
        </div>
        <blockquote className="leading-tight tracking-tight">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            A <span className="text-primary">IA</span> não substituirá
            <span className="font-black"> líderes</span>, mas
            <span className="font-black text-primary"> líderes</span> que
            <span className="font-black"> usam </span>
            <span className="font-black text-primary">IA</span>
            <span className="font-black"> substituirão</span> aqueles que não usam.
          </p>
        </blockquote>
      </div>
    </section>
  )
}

