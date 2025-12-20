'use client'

import { useState } from 'react'
import { getPastDeals } from '@/data/deals'

export default function PastDrops() {
  const pastDeals = getPastDeals()
  const [hoveredDeal, setHoveredDeal] = useState<number | null>(null)

  return (
    <div>
      <div className="content-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <a href="/" className="logo-nav">
            <img src="/woot-logo.gif" alt="woot!" className="logo-img" />
          </a>
          <div className="header-right">
            <nav className="nav-tabs nav-tabs-top">
              <a href="/" className="nav-tab-top">current drop</a>
              <a href="/past-drops" className="nav-tab-top active">past drops</a>
              <a href="/what-is-root" className="nav-tab-top">what is root?</a>
              <a href="https://root.vc" target="_blank" rel="noopener noreferrer" className="nav-tab-top">terminal</a>
              <a href="https://root.vc/welcome.htm" target="_blank" rel="noopener noreferrer" className="nav-tab-top">website</a>
            </nav>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="main-content">
        <div className="page-section">
          <h1 className="page-title">past drops</h1>
          <div className="deals-grid">
            {pastDeals.map((deal, index) => (
              <div
                key={index}
                className="deal-card"
                onMouseEnter={() => setHoveredDeal(index)}
                onMouseLeave={() => setHoveredDeal(null)}
              >
                <div className="deal-image-container">
                  <img
                    src={deal.heroImageURL}
                    alt={deal.title}
                    className="deal-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial"%3EProduct Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  {hoveredDeal === index && (
                    <div className="deal-tooltip">
                      <div className="deal-tooltip-content">
                        <div className="deal-tooltip-header">{deal.productInfoHeader}</div>
                        <div className="deal-tooltip-body" dangerouslySetInnerHTML={{ __html: deal.productInfoBody }} />
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="deal-title">{deal.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        Made by <a href="https://root.vc" target="_blank" rel="noopener noreferrer">Root Ventures</a>, obvious parody of the <a href="https://web.archive.org/web/20070711053852/http://www.woot.com/" target="_blank" rel="noopener noreferrer">original woot.com</a>
        <br />
        Please, don't sue us, Amazon
      </footer>
      </div>
    </div>
  )
}

