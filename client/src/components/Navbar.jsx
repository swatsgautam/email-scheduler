import React from 'react'

const Navbar = ({ currentTab, setCurrentTab }) => {
  return (
    <nav className="navbar">
            <button
                className={`tab ${currentTab === 'home' ? 'active-tab' : ''}`}
                onClick={() => setCurrentTab('home')}
            >
                Home
            </button>
            <button
                className={`tab ${currentTab === 'emails' ? 'active-tab' : ''}`}
                onClick={() => setCurrentTab('emails')}
            >
                Scheduled Emails
            </button>
        </nav>
  )
}

export default Navbar
