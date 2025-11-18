import React from 'react'

function ServiceArea() {
  return (
    <section id="service-area" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Where we serve</h2>
          <p className="mt-3 text-slate-600">We provide on-site assessments and white-glove installation across the metro area and surrounding suburbs. Remote consultations available nationwide.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <li className="p-3 rounded-lg bg-white border border-slate-200">Downtown & Waterfront</li>
            <li className="p-3 rounded-lg bg-white border border-slate-200">North & East Suburbs</li>
            <li className="p-3 rounded-lg bg-white border border-slate-200">South Communities</li>
            <li className="p-3 rounded-lg bg-white border border-slate-200">Custom Projects by Request</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">Don’t see your area? We often travel for specialty projects—reach out.</p>
        </div>
        <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <iframe
            title="Service Area Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31533.29061735382!2d-122.4473036!3d37.7598649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1a0b0b7f0b%3A0x7f1d7b1b2cf9a2b3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1717000000000"
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
