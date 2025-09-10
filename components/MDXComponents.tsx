import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  CheckCircle,
  AlertTriangle,
  Info,
  Quote,
  Code,
  ExternalLink,
  ArrowRight
} from 'lucide-react'

// Base component types
type BaseProps = ComponentPropsWithoutRef<'div'>

// Custom MDX components with Tailwind styling
export const MDXComponents = {
  // Headings
  h1: ({ className, ...props }: ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className={cn(
        'mt-8 mb-4 text-3xl font-bold tracking-tight text-foreground scroll-m-20',
        className
      )}
      {...props}
    />
  ),

  h2: ({ className, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className={cn(
        'mt-6 mb-3 text-2xl font-bold tracking-tight text-foreground scroll-m-20',
        className
      )}
      {...props}
    />
  ),

  h3: ({ className, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className={cn(
        'mt-5 mb-2 text-xl font-bold tracking-tight text-foreground scroll-m-20',
        className
      )}
      {...props}
    />
  ),

  h4: ({ className, ...props }: ComponentPropsWithoutRef<'h4'>) => (
    <h4
      className={cn(
        'mt-4 mb-2 text-lg font-semibold tracking-tight text-foreground scroll-m-20',
        className
      )}
      {...props}
    />
  ),

  // Paragraph
  p: ({ className, ...props }: ComponentPropsWithoutRef<'p'>) => (
    <p
      className={cn(
        'mb-4 leading-7 text-foreground [&:not(:first-child)]:mt-6',
        className
      )}
      {...props}
    />
  ),

  // Links
  a: ({ className, href, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <a
      className={cn(
        'font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors',
        className
      )}
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),

  // Lists
  ul: ({ className, ...props }: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className={cn(
        'my-6 ml-6 list-disc [&>li]:mt-2 text-foreground',
        className
      )}
      {...props}
    />
  ),

  ol: ({ className, ...props }: ComponentPropsWithoutRef<'ol'>) => (
    <ol
      className={cn(
        'my-6 ml-6 list-decimal [&>li]:mt-2 text-foreground',
        className
      )}
      {...props}
    />
  ),

  li: ({ className, ...props }: ComponentPropsWithoutRef<'li'>) => (
    <li className={cn('leading-7', className)} {...props} />
  ),

  // Blockquote
  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className={cn(
        'mt-6 mb-6 border-l-4 border-primary pl-6 italic text-muted-foreground',
        className
      )}
      {...props}
    />
  ),

  // Code blocks and inline code
  code: ({ className, ...props }: ComponentPropsWithoutRef<'code'>) => (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className
      )}
      {...props}
    />
  ),

  pre: ({ className, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className={cn(
        'overflow-x-auto rounded-lg border bg-muted p-4 my-6 [&>code]:bg-transparent',
        className
      )}
      {...props}
    />
  ),

  // Tables
  table: ({ className, ...props }: ComponentPropsWithoutRef<'table'>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn('w-full border-collapse border border-border', className)}
        {...props}
      />
    </div>
  ),

  thead: ({ className, ...props }: ComponentPropsWithoutRef<'thead'>) => (
    <thead className={cn('border-b border-border bg-muted/50', className)} {...props} />
  ),

  tbody: ({ className, ...props }: ComponentPropsWithoutRef<'tbody'>) => (
    <tbody className={cn('', className)} {...props} />
  ),

  tr: ({ className, ...props }: ComponentPropsWithoutRef<'tr'>) => (
    <tr
      className={cn(
        'border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        className
      )}
      {...props}
    />
  ),

  th: ({ className, ...props }: ComponentPropsWithoutRef<'th'>) => (
    <th
      className={cn(
        'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
        className
      )}
      {...props}
    />
  ),

  td: ({ className, ...props }: ComponentPropsWithoutRef<'td'>) => (
    <td
      className={cn('p-4 align-middle text-foreground', className)}
      {...props}
    />
  ),

  // Custom components for enhanced content
  Callout: ({
    type = 'info',
    title,
    children,
    className,
    ...props
  }: BaseProps & {
    type?: 'info' | 'warning' | 'success' | 'error'
    title?: string
  }) => {
    const icons = {
      info: Info,
      warning: AlertTriangle,
      success: CheckCircle,
      error: AlertTriangle,
    }

    const Icon = icons[type]

    return (
      <Alert className={cn('my-6', className)} {...props}>
        <Icon className="h-4 w-4" />
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    )
  },

  Card: ({ title, description, children, className, ...props }: BaseProps & {
    title?: string
    description?: string
  }) => (
    <Card className={cn('my-6', className)} {...props}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  ),

  Badge: ({ variant = 'secondary', className, ...props }: ComponentPropsWithoutRef<'span'> & {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  }) => (
    <Badge variant={variant} className={cn('mx-1', className)} {...props} />
  ),

  Button: (props: (
    {
      variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
      size?: 'default' | 'sm' | 'lg' | 'icon'
      className?: string
    } & (
      (ComponentPropsWithoutRef<'button'> & { href?: undefined }) |
      (ComponentPropsWithoutRef<'a'> & { href: string })
    )
  )) => {
    const { variant = 'default', size = 'default', className } = props
    if ('href' in props && props.href) {
      const { href, children, ...rest } = props as ComponentPropsWithoutRef<'a'> & { href: string }
      return (
        <Button asChild variant={variant} size={size} className={className}>
          <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      )
    }
    const { children, ...rest } = props as ComponentPropsWithoutRef<'button'>
    return <Button variant={variant} size={size} className={className} {...rest}>{children}</Button>
  },

  Separator: ({ className, ...props }: ComponentPropsWithoutRef<'hr'>) => (
    <Separator className={cn('my-8', className)} {...props} />
  ),

  // Enhanced blockquote with quote icon
  Quote: ({ author, source, className, ...props }: ComponentPropsWithoutRef<'blockquote'> & {
    author?: string
    source?: string
  }) => (
    <div className={cn('my-8 border-l-4 border-primary bg-muted/30 p-6 rounded-r-lg', className)}>
      <div className="flex items-start gap-3">
        <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
        <div className="flex-1">
          <blockquote className="text-lg italic text-foreground leading-relaxed" {...props} />
          {(author || source) && (
            <footer className="mt-4 text-sm text-muted-foreground">
              {author && <span className="font-medium">— {author}</span>}
              {source && <span className="ml-2">({source})</span>}
            </footer>
          )}
        </div>
      </div>
    </div>
  ),

  // Code block with copy functionality (placeholder for now)
  CodeBlock: ({ language, filename, className, ...props }: ComponentPropsWithoutRef<'pre'> & {
    language?: string
    filename?: string
  }) => (
    <div className={cn('my-6', className)}>
      {filename && (
        <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-t-lg border border-border border-b-0">
          <Code className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-mono text-muted-foreground">{filename}</span>
          {language && (
            <Badge variant="outline" className="ml-auto text-xs">
              {language}
            </Badge>
          )}
        </div>
      )}
      <pre
        className={cn(
          'overflow-x-auto rounded-lg border bg-muted p-4 [&>code]:bg-transparent',
          filename ? 'rounded-t-none' : '',
          className
        )}
        {...props}
      />
    </div>
  ),

  // Link with arrow for CTAs
  CTA: ({ href, className, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <a
      className={cn(
        'inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors group',
        className
      )}
      href={href}
      {...props}
    >
      {props.children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  ),
}
