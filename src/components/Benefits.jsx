import React, { useEffect, useState } from 'react'

function Benefits() {
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    const loadFaq = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/faq`)
        const data = await res.json()
        setFaqs(data.items || [])
      } catch (e) {
        setFaqs([])
      }
    }
    loadFaq()
  }, [])

  const items = [
    {
      title: 'Skin & Hair',
      text: 'Feel the difference with reduced chlorine and balanced minerals for softer skin and healthier hair.',
    },
    {
      title: 'Taste & Wellness',
      text: 'Great-tasting water encourages hydration and supports daily wellness rituals like tea and cooking.',
    },
    {
      title: 'Home Protection',
      text: 'Minimize scale to extend the life of fixtures, glass, and high-end appliances.',
    },
  ]

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((b) => (
            <div key={b.title} className="p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-3 text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>

        {faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-slate-900">Common questions</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {faqs.map((f, i) => (
                <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-medium text-slate-800">{f.q}</div>
                  <div className="text-slate-600 mt-2 text-sm">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Benefits
