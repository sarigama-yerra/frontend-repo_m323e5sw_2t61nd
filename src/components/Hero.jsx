import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-teal-300/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-cyan-600 font-semibold mb-4">Wellness Water For Elevated Living</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-slate-900">
            Purified, balanced, luxuriously soft water — designed for your home and health
          </h1>
          <p className="mt-6 text-lg text-slate-600 md:max-w-xl">
            We craft premium whole‑home and drinking water systems that remove chlorine, heavy metals, and PFAS while protecting skin, hair, and appliances.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-600 text-white font-medium shadow-sm hover:bg-cyan-700 transition-colors">Book a Water Assessment</a>
            <a href="#benefits" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:border-slate-400 transition-colors">Explore Benefits</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Concierge Service</div>
            <div className="hidden sm:flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Certified Components</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-50 p-2 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1511044568932-e4b3b3e6fc0f?q=80&w=1600&auto=format&fit=crop"
              alt="Spa-like bathroom with soft, balanced water"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl opacity-70"
            />
            <div className="relative w-full h-full rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-slate-800 text-xl font-medium">Your Daily Ritual, Elevated</h3>
                <p className="text-slate-600 mt-2">Silky showers, brighter laundry, and drinking water that tastes as clean as it feels.</p>
              </div>
              <ul className="mt-6 space-y-3 text-slate-700 text-sm">
                <li>• Reduces PFAS, lead, and chlorine</li>
                <li>• Protects skin, hair, and appliances</li>
                <li>• Designed to complement modern interiors</li>
              </ul>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-semibold text-slate-900">WQA</div>
                  <div className="text-xs text-slate-500">Certified</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-slate-900">4.9★</div>
                  <div className="text-xs text-slate-500">Client Rated</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-slate-900">24/7</div>
                  <div className="text-xs text-slate-500">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
