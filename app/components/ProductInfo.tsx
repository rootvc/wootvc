'use client'

import { useState } from 'react'
import type { Deal } from '@/data/deals'
import TweetEmbed from './TweetEmbed'

interface ProductInfoProps {
  deal: Deal
}

export default function ProductInfo({ deal }: ProductInfoProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'stats'>('info')

  return (
    <section className="description-section">
      <div className="tabs-bottom">
        <button
          className={`tab-bottom ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          product info
        </button>
        <button
          className={`tab-bottom ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          product stats
        </button>
      </div>

      {activeTab === 'info' && (
        <div className="tab-content">
          <h2 className="description-headline">{deal.productInfoHeader}</h2>
          <div className="description-text" dangerouslySetInnerHTML={{ __html: deal.body1 }} />
          {deal.bodyTweetCode && <TweetEmbed tweetHtml={deal.bodyTweetCode} />}
          <div className="description-text" dangerouslySetInnerHTML={{ __html: deal.body2 }} />
          {deal.donations && (
            <div className="description-text" dangerouslySetInnerHTML={{ __html: deal.donations }} />
          )}
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="tab-content">
          <h2 className="description-headline">Product Statistics</h2>
          <div className="description-text" dangerouslySetInnerHTML={{ __html: deal.productStats }} />
        </div>
      )}
    </section>
  )
}
