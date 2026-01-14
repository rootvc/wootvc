'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement | null) => void
      }
    }
  }
}

interface TweetEmbedProps {
  tweetHtml: string
}

export default function TweetEmbed({ tweetHtml }: TweetEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Ensure all links in the tweet open in new tabs
    const ensureLinksOpenInNewTab = () => {
      if (!containerRef.current) return
      const links = containerRef.current.querySelectorAll('a')
      links.forEach(link => {
        if (link.href && !link.href.startsWith('javascript:')) {
          link.setAttribute('target', '_blank')
          link.setAttribute('rel', 'noopener noreferrer')
        }
      })
    }

    // Force center alignment on blockquote and its content
    const enforceCenterAlignment = () => {
      if (!containerRef.current) return
      const blockquote = containerRef.current.querySelector('blockquote.twitter-tweet')
      if (blockquote) {
        const blockquoteEl = blockquote as HTMLElement
        const hasIframe = blockquote.querySelector('iframe')
        
        if (!hasIframe) {
          // Before iframe loads, use flexbox for vertical centering
          blockquoteEl.style.display = 'flex'
          blockquoteEl.style.alignItems = 'center'
          blockquoteEl.style.justifyContent = 'center'
          blockquoteEl.style.flexDirection = 'column'
        } else {
          // After iframe loads, use block display
          blockquoteEl.style.display = 'block'
        }
        
        blockquoteEl.style.textAlign = 'center'
        blockquoteEl.style.margin = '0 auto'
        // Also center all child elements
        const allElements = blockquote.querySelectorAll('*')
        allElements.forEach(el => {
          ;(el as HTMLElement).style.textAlign = 'center'
        })
      }
    }

    // Enforce alignment periodically during transformation
    const alignmentInterval = setInterval(enforceCenterAlignment, 50)
    setTimeout(() => clearInterval(alignmentInterval), 5000)

    // Also enforce immediately
    enforceCenterAlignment()

    // Load and process Twitter widgets
    const loadTwitterWidgets = () => {
      // Wait for DOM to be ready
      const processWidget = () => {
        if (!containerRef.current) return
        
        // Check if Twitter widgets API is already available
        if (window.twttr && window.twttr.widgets) {
          // Widgets are loaded, process the blockquote
          window.twttr.widgets.load(containerRef.current)
        } else {
          // Load the script first
          const existingScript = document.querySelector('script[src*="platform.twitter.com/widgets.js"]')
          if (!existingScript) {
            const script = document.createElement('script')
            script.async = true
            script.src = 'https://platform.twitter.com/widgets.js'
            script.charset = 'utf-8'
            script.onload = () => {
              // Once script loads, process the blockquote
              if (window.twttr && window.twttr.widgets && containerRef.current) {
                window.twttr.widgets.load(containerRef.current)
              }
            }
            document.body.appendChild(script)
          } else {
            // Script exists, wait for it to be ready
            const checkTwttr = setInterval(() => {
              if (window.twttr && window.twttr.widgets && containerRef.current) {
                window.twttr.widgets.load(containerRef.current)
                clearInterval(checkTwttr)
              }
            }, 100)
            setTimeout(() => clearInterval(checkTwttr), 5000)
          }
        }
      }
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        requestAnimationFrame(processWidget)
      })
    }

    loadTwitterWidgets()

    // Check periodically after Twitter processes the embed
    const interval = setInterval(ensureLinksOpenInNewTab, 500)
    setTimeout(() => clearInterval(interval), 5000)

    return () => {
      clearInterval(interval)
      clearInterval(alignmentInterval)
    }
  }, [tweetHtml])

  return (
    <div 
      ref={containerRef}
      className="tweet-embed-container"
      dangerouslySetInnerHTML={{
        __html: `<blockquote class="twitter-tweet" data-theme="dark" data-dnt="true" align="center">${tweetHtml}</blockquote>`
      }}
    />
  )
}
