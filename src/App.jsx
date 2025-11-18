import React from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Authority from './components/Authority'
import Gallery from './components/Gallery'
import ServiceArea from './components/ServiceArea'
import Scheduler from './components/Scheduler'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight">AquaWell</div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-600">
            <a href="#benefits" className="hover:text-slate-900">Benefits</a>
            <a href="#service-area" className="hover:text-slate-900">Service Area</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700">Book Assessment</a>
        </div>
      </header>

      <main>
        <Hero />
        <Authority />
        <Gallery />
        <Benefits />
        <ServiceArea />
        <Scheduler />
        <Contact />
      </main>

      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} AquaWell Water • Wellness‑oriented water treatment</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
