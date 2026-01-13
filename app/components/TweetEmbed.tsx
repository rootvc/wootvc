'use client'

import { useEffect, useRef } from 'react'

interface TweetEmbedProps {
  tweetHtml: string
}

export default function TweetEmbed({ tweetHtml }: TweetEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    // Check periodically after Twitter processes the embed
    const interval = setInterval(ensureLinksOpenInNewTab, 500)
    setTimeout(() => clearInterval(interval), 5000)

    // Load Twitter widgets script if not already loaded
    const loadTwitterScript = () => {
      const existingScript = document.querySelector('script[src*="platform.twitter.com/widgets.js"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://platform.twitter.com/widgets.js'
        script.charset = 'utf-8'
        document.body.appendChild(script)
      }
    }

    loadTwitterScript()

    return () => clearInterval(interval)
  }, [tweetHtml])

  return (
    <div 
      ref={containerRef}
      className="tweet-embed-container"
      style={{ 
        margin: '15px 0',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}
      dangerouslySetInnerHTML={{
        __html: `<blockquote class="twitter-tweet" data-theme="dark" data-dnt="true" align="center">${tweetHtml}</blockquote>`
      }}
    />
  )
}
