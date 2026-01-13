'use client'

import Header from '../components/Header'

export default function WhatIsRoot() {
  return (
    <div>
      <div className="content-container">
      <Header activeTab="what-is-root" />
      {/* Main Content */}
      <main className="main-content">
        <div className="page-section">
          <h1 className="page-title">what is root?</h1>
          <div className="page-content">
            <p>
              Root Ventures is a San Francisco-based deep tech seed fund. We write $2-5M checks to technical founding teams. Send us your cool friends and enemies.
            </p>
            <p>
              Learn more here: <a href="https://root.vc" target="_blank" rel="noopener noreferrer">https://root.vc</a>
            </p>
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
