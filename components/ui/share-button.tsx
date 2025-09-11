'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Share2, Copy, Check } from 'lucide-react'
import { FaXTwitter, FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa6'

interface ShareButtonProps {
  title: string
  url: string
  description?: string
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'outline' | 'ghost'
}

export function ShareButton({ 
  title, 
  url, 
  description = '', 
  size = 'sm',
  variant = 'outline' 
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=ia21educacao`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle} ${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar link:', err)
    }
  }

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400')
  }

  // Native Web Share API se disponível
  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
      } catch (err) {
        console.error('Erro ao compartilhar:', err)
      }
    }
  }

  const isNativeShareAvailable = typeof navigator !== 'undefined' && navigator.share

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size}>
          <Share2 className="mr-2 h-4 w-4" />
          Compartilhar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {isNativeShareAvailable && (
          <>
            <DropdownMenuItem onClick={handleNativeShare} className="cursor-pointer">
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        
        <DropdownMenuItem 
          onClick={() => handleShare('x')} 
          className="cursor-pointer"
        >
          <FaXTwitter className="mr-2 h-4 w-4" />
          X (Twitter)
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleShare('linkedin')} 
          className="cursor-pointer"
        >
          <FaLinkedin className="mr-2 h-4 w-4 text-blue-600" />
          LinkedIn
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleShare('whatsapp')} 
          className="cursor-pointer"
        >
          <FaWhatsapp className="mr-2 h-4 w-4 text-green-600" />
          WhatsApp
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleShare('facebook')} 
          className="cursor-pointer"
        >
          <FaFacebook className="mr-2 h-4 w-4 text-blue-600" />
          Facebook
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={handleCopyLink} className="cursor-pointer">
          {copied ? (
            <Check className="mr-2 h-4 w-4 text-green-600" />
          ) : (
            <Copy className="mr-2 h-4 w-4" />
          )}
          {copied ? 'Link copiado!' : 'Copiar link'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}