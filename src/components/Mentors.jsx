import React from 'react';

const mentors = [
  {
    name: 'Priya Sharma',
    role: 'Ex-Google · Staff Engineer',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop',
    blurb: 'Systems design whisperer. Built planet-scale storage infra; interviewer for 300+ candidates.'
  },
  {
    name: 'Arjun Mehta',
    role: 'Stripe · Senior Engineer',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=640&auto=format&fit=crop',
    blurb: 'Latency hunter. Payments, reliability, and pragmatic algorithms for production.'
  },
  {
    name: 'Nisha Rao',
    role: 'Uber · HR Lead (Tech)',
    img: 'https://images.unsplash.com/photo-1547425260-79a0c24c7b36?q=80&w=640&auto=format&fit=crop',
    blurb: 'Human-first hiring. Decoded what it takes to pass bar-raisers across FAANG+.'
  },
  {
    name: 'Karthik Iyer',
    role: 'CTO · FinTechX',
    img: 'https://images.unsplash.com/photo-1544725121-4bc02e22a8f5?q=80&w=640&auto=format&fit=crop',
    blurb: 'Founder-CTO lens. Helps you tell your story and pitch impact in final rounds.'
  }
];

export default function Mentors() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h3 className="text-3xl sm:text-5xl font-extrabold">Masterclass-level mentors</h3>
          <p className="text-white/70 mt-2">Premium, high-signal guidance — like your own MasterClass for interviews.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, i) => (
            <article key={i} className="bg-[#0f0f16] rounded-2xl border-4 border-black shadow-[12px_12px_0_#0e0a22] overflow-hidden">
              <div className="relative h-52 overflow-hidden border-b-4 border-black">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f16]/80 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-white text-black text-xs font-bold px-2 py-1 rounded border-2 border-black">Mentor</div>
              </div>
              <div className="p-4">
                <h4 className="text-xl font-extrabold">{m.name}</h4>
                <p className="text-sm text-white/70">{m.role}</p>
                <p className="mt-3 text-sm text-white/90">{m.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
