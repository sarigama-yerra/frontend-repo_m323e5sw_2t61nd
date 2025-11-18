import React from 'react'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1614713899518-7ec14c1a3f00?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcnlzdGFsLWNsZWFyJTIwZHJpbmtpbmclMjB3YXRlciUyMGlufGVufDB8MHx8fDE3NjM0Nzk1NTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Crystal-clear drinking water in a carafe with citrus',
  },
  {
    src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
    alt: 'Modern kitchen with filtered water tap',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    alt: 'Spa-like bathroom with soft water shower',
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1600&auto=format&fit=crop',
    alt: 'Luxury bathroom fixtures protected from scale',
  },
]

function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-slate-900">A wellness-first aesthetic</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">Soft textures, natural finishes, and beautifully designed taps and tanks. Our systems are made to perform and made to be seen.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl shadow-sm border border-slate-200">
              <img src={p.src} alt={p.alt} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
