'use client'

export default function WhatIsRoot() {
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
              <a href="/past-drops" className="nav-tab-top">past drops</a>
              <a href="https://root.vc" target="_blank" rel="noopener noreferrer" className="nav-tab-top">terminal</a>
              <a href="https://root.vc/welcome.htm" target="_blank" rel="noopener noreferrer" className="nav-tab-top">website</a>
              <a href="/what-is-root" className="nav-tab-top active">what is root?</a>
            </nav>
          </div>
        </div>
      </header>
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
        Made by Root Ventures, obvious parody of the <a href="https://web.archive.org/web/20070711053852/http://www.woot.com/" target="_blank" rel="noopener noreferrer">original woot.com</a>
      </footer>
      </div>
    </div>
  )
}

