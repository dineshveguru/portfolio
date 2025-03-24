import React from 'react'

export default function GradientDemo() {
  return (
    <div className="gemini-gradient min-h-screen w-full flex flex-col items-center justify-between p-6">
      {/* Header with a greeting similar to the image */}
      <div className="w-full max-w-md flex justify-between items-center px-4 py-2">
        <div>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <button className="gemini-button mr-2">
            <span className="mr-1">✨</span>
            Gemini 2.0 Flash
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center text-black font-bold">K</div>
        </div>
      </div>

      {/* Main greeting section */}
      <div className="flex-1 w-full max-w-md flex flex-col justify-center">
        <h1 className="text-4xl font-semibold mb-2">Good Evening,</h1>
        <h2 className="text-4xl font-semibold">Kenzo</h2>
        <div className="mt-16 opacity-30">
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" fill="currentColor" fillOpacity="0.3"/>
            <path d="M40 70L60 50L40 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Bottom pill buttons like in the image */}
      <div className="w-full max-w-md grid grid-cols-3 gap-3 mt-4">
        <button className="pill-button">
          <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          List 5 healthy
          <br />breakfast ideas.
        </button>
        <button className="pill-button">
          <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          What should
          <br />I do in Tokyo?
        </button>
        <button className="pill-button">
          <div className="w-6 h-6 rounded-full bg-gray-600 mr-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          Translate
          <br />to Spanish.
        </button>
      </div>

      {/* Input section */}
      <div className="w-full max-w-md mt-4 p-5 rounded-xl backdrop-blur-md bg-black/30">
        <div className="text-lg mb-4">Message T3 Chat</div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-black/20 border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <button className="flex-1 text-left rounded-full px-4 py-2 bg-black/20 border border-white/10">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Search
            </div>
          </button>
          <button className="flex-1 text-left rounded-full px-4 py-2 bg-black/20 border border-white/10">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Reason
            </div>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-magenta-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
} 