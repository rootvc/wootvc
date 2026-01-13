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
              Root Ventures is a San Francisco-based deep tech seed fund. As engineers
              ourselves, we specialize in leading initial funding for founders tackling
              new technical opportunities. Our initial investments typically range from
              $2-5M. With a selective few new deals a year and more than half of our funds in
              reserve, we are committed to being a long-term partner.
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
