'use client'

import { hasMultipleDeals } from '@/data/deals'

type ActiveTab = 'current-drop' | 'past-drops' | 'what-is-root'

interface HeaderProps {
  activeTab?: ActiveTab
}

export default function Header({ activeTab = 'current-drop' }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo-nav">
          <img src="/woot-logo.gif" alt="woot!" className="logo-img" />
        </a>
        <div className="header-right">
          <nav className="nav-tabs nav-tabs-top">
            <a href="/" className={`nav-tab-top ${activeTab === 'current-drop' ? 'active' : ''}`}>
              current drop
            </a>
            {hasMultipleDeals() && (
              <a href="/past-drops" className={`nav-tab-top ${activeTab === 'past-drops' ? 'active' : ''}`}>
                past drops
              </a>
            )}
            <a href="/what-is-root" className={`nav-tab-top ${activeTab === 'what-is-root' ? 'active' : ''}`}>
              what is root?
            </a>
            <a href="https://root.vc" target="_blank" rel="noopener noreferrer" className="nav-tab-top">
              terminal
            </a>
            <a href="https://root.vc/welcome.htm" target="_blank" rel="noopener noreferrer" className="nav-tab-top">
              homepage
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
