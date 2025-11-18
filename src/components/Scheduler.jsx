import React, { useState } from 'react'

function Scheduler() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleClick = () => {
    const target = document.getElementById('contact')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Schedule a convenient time</h2>
          <p className="mt-3 text-slate-600">Pick a preferred date and time. We’ll confirm or propose the closest available slot.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <button onClick={handleClick} className="mt-6 inline-flex items-center px-5 py-3 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700">Continue to request</button>
          <p className="mt-3 text-sm text-slate-500">Your selection will be included in your request for our team to honor when possible.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
          <div className="text-slate-700">Prefer a third‑party calendar?</div>
          <ul className="mt-3 text-sm text-cyan-700 underline">
            <li><a href="#" onClick={(e) => e.preventDefault()}>Add Calendly or Google Calendar link</a></li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">We can embed your scheduling tool here upon request.</p>
        </div>
      </div>
    </section>
  )
}

export default Scheduler
