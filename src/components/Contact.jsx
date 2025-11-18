import React, { useState } from 'react'

const initial = {
  full_name: '',
  email: '',
  phone: '',
  user_intent: 'book_assessment',
  property_type: 'single_family',
  occupants: '',
  concerns: [],
  budget_range: 'unsure',
  message: '',
  preferred_date: '',
  preferred_time: '',
}

const intentOptions = [
  { value: 'book_assessment', label: 'Book Assessment' },
  { value: 'get_quote', label: 'Get a Quote' },
  { value: 'learn_more', label: 'Learn More' },
  { value: 'service_existing', label: 'Service Existing System' },
]

const concernOptions = [
  { value: 'taste_odor', label: 'Taste & Odor' },
  { value: 'chlorine', label: 'Chlorine' },
  { value: 'hardness_scale', label: 'Hardness / Scale' },
  { value: 'lead_metals', label: 'Lead & Heavy Metals' },
  { value: 'pfas', label: 'PFAS' },
  { value: 'bacteria', label: 'Bacteria' },
  { value: 'whole_home_filtration', label: 'Whole‑Home Filtration' },
  { value: 'drinking_water', label: 'Drinking Water' },
  { value: 'shower_skin_hair', label: 'Shower, Skin & Hair' },
  { value: 'appliance_protection', label: 'Appliance Protection' },
]

function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle' })

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      let next = [...form.concerns]
      if (checked) next.push(value)
      else next = next.filter(v => v !== value)
      setForm({ ...form, concerns: next })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'submitting' })
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      let preferred_datetime
      if (form.preferred_date) {
        const time = form.preferred_time || '09:00'
        preferred_datetime = new Date(`${form.preferred_date}T${time}:00`)
      }
      const payload = {
        full_name: form.full_name,
        email: form.email,
        phone: form.phone || undefined,
        user_intent: form.user_intent,
        property_type: form.property_type,
        occupants: form.occupants ? Number(form.occupants) : undefined,
        concerns: form.concerns.length ? form.concerns : undefined,
        budget_range: form.budget_range,
        message: form.message || undefined,
        preferred_datetime: preferred_datetime ? preferred_datetime.toISOString() : undefined,
      }
      const res = await fetch(`${base}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ state: 'success' })
      setForm(initial)
    } catch (e) {
      setStatus({ state: 'error', message: e.message })
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Request your water assessment</h2>
          <p className="mt-3 text-slate-600">Tell us about your home and goals. A specialist will follow up with tailored recommendations.</p>
          <ul className="mt-6 space-y-3 text-slate-700 text-sm">
            <li>• Dedicated project guidance, end‑to‑end</li>
            <li>• Transparent performance and certification data</li>
            <li>• Respectful, no‑pressure consultations</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600">Full name</label>
              <input name="full_name" value={form.full_name} onChange={onChange} required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600">Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600">Intent</label>
              <select name="user_intent" value={form.user_intent} onChange={onChange} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                {intentOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-600">Property type</label>
              <select name="property_type" value={form.property_type} onChange={onChange} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="single_family">Single‑family</option>
                <option value="condo">Condo</option>
                <option value="multi_unit">Multi‑unit</option>
                <option value="commercial">Commercial</option>
                <option value="spa_gym">Spa / Gym</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-600">Occupants</label>
              <input type="number" name="occupants" min="1" max="50" value={form.occupants} onChange={onChange} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm text-slate-600 mb-2">Primary concerns</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {concernOptions.map(o => (
                <label key={o.value} className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" name="concerns" value={o.value} checked={form.concerns.includes(o.value)} onChange={onChange} />
                  {o.label}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600">Budget</label>
              <select name="budget_range" value={form.budget_range} onChange={onChange} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="under_1k">Under $1k</option>
                <option value="1k_3k">$1k–$3k</option>
                <option value="3k_6k">$3k–$6k</option>
                <option value="6k_plus">$6k+</option>
                <option value="unsure">Unsure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-600">Anything else?</label>
              <input name="message" value={form.message} onChange={onChange} placeholder="Tell us about your home, water goals, timeline…" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600">Preferred date</label>
              <input type="date" name="preferred_date" value={form.preferred_date} onChange={onChange} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600">Preferred time</label>
              <input type="time" name="preferred_time" value={form.preferred_time} onChange={onChange} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>

          <button disabled={status.state==='submitting'} className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white font-medium py-3 rounded-lg">
            {status.state==='submitting' ? 'Submitting…' : 'Request Assessment'}
          </button>

          {status.state === 'success' && (
            <p className="mt-3 text-emerald-700 text-sm">Thank you — a specialist will reach out shortly.</p>
          )}
          {status.state === 'error' && (
            <p className="mt-3 text-red-600 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
