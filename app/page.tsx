'use client'

import { useState } from 'react'
import { currentProduct } from '@/data/product'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'info' | 'stats'>('info')

  return (
    <div>
      <div className="content-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <a href="#" className="logo-nav">
            <img src="/woot-logo.gif" alt="woot!" className="logo-img" />
          </a>
          <div className="header-right">
            <nav className="nav-tabs nav-tabs-top">
              <a href="/" className="nav-tab-top active">current drop</a>
              <a href="/past-drops" className="nav-tab-top">past drops</a>
              <a href="https://root.vc" target="_blank" rel="noopener noreferrer" className="nav-tab-top">terminal</a>
              <a href="https://root.vc/welcome.htm" target="_blank" rel="noopener noreferrer" className="nav-tab-top">website</a>
              <a href="/what-is-root" className="nav-tab-top">what is root?</a>
            </nav>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="main-content">
        <div className="product-section">
          <div className="product-image">
            <img
              src={currentProduct.image}
              alt={currentProduct.title}
              onError={(e) => {
                // Fallback to a placeholder if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="350" height="350"%3E%3Crect width="350" height="350" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial"%3EProduct Image%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          <div className="product-details">
            <div className="product-header">
              <h1 className="product-title">{currentProduct.title}</h1>
              <div className="product-price">${currentProduct.price.toFixed(2)}</div>
              <div className="shipping">+ ${currentProduct.shipping} shipping</div>
            </div>

            <div className="product-info-section">
              <hr className="product-divider product-divider-top" />
              <div className="product-info-row">
                <span className="product-label">CONDITION:</span>
                <span className="product-value">{currentProduct.condition}</span>
              </div>
              <div className="product-info-row">
                <span className="product-label">PRODUCT(S):</span>
                <div className="product-value">
                  1 {currentProduct.title} {currentProduct.sku}
                </div>
              </div>
              <hr className="product-divider product-divider-bottom" />
            </div>

            <button className="want-button">I want one!</button>
          </div>
        </div>
      </main>

      {/* Product Description Section */}
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
            <h2 className="description-headline">Only The Phonely</h2>
            <div className="description-text">
              {currentProduct.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {currentProduct.warranty && (
              <div className="warranty">
                <strong>Warranty:</strong> {currentProduct.warranty}
              </div>
            )}

            <div className="features-title">Features:</div>
            <ul className="features-list">
              {currentProduct.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="tab-content">
            <h2 className="description-headline">Product Statistics</h2>
            <div className="description-text">
              <p>Product statistics will be displayed here.</p>
            </div>
          </div>
        )}
      </section>
      <footer className="footer">
        Made by Root Ventures, obvious parody of the <a href="https://web.archive.org/web/20070711053852/http://www.woot.com/" target="_blank" rel="noopener noreferrer">original woot.com</a>
      </footer>
      </div>
    </div>
  )
}
