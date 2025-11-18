import React, { useEffect, useState } from 'react'

function Authority() {
  const [signals, setSignals] = useState({ badges: [], press: [] })

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/authority`)
        const data = await res.json()
        setSignals(data)
      } catch (e) {
        setSignals({ badges: [], press: [] })
      }
    }
    load()
  }, [])

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3 items-center">
            {signals.badges.map((b, i) => (
              <div key={i} className="px-3 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm shadow-sm">
                {b.label}
              </div>
            ))}
          </div>
          {signals.press.length > 0 && (
            <div className="text-slate-500 text-sm">
              Featured in {signals.press.map(p => `${p.name} ${p.year}`).join(' • ')}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Authority
