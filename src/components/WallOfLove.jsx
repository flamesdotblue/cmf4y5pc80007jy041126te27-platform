import React from 'react';
import { Heart, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Gupta',
    role: 'SDE @ FinTechX',
    quote:
      'I learned more in 2 hours than in weeks of prep. Got fast-tracked to two interviews and closed one offer!'
  },
  {
    name: 'Sana Kapoor',
    role: 'Data Engineer @ UnicornCo',
    quote:
      'The assessment mirrored real interview signal. Mentors helped me shape crisp, hire-worthy answers.'
  },
  {
    name: 'Rohan Iyer',
    role: 'Backend @ HyperScale',
    quote:
      'Manas\'s session demystified tricky graph patterns. The shortlist → intro → offer pipeline was seamless.'
  },
  {
    name: 'Fatima Khan',
    role: 'SWE @ CloudNative',
    quote:
      'This felt premium. Clean content, real feedback, and actual results. Worth every minute.'
  },
];

export default function WallOfLove() {
  return (
    <section className="relative py-20">
      <style>{`
        @keyframes floatHeart { 0%{ transform: translateY(0) rotate(0deg); opacity:.8 } 50%{ transform: translateY(-10px) rotate(6deg); opacity:1 } 100%{ transform: translateY(0) rotate(0deg); opacity:.8 } }
      `}</style>
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{backgroundImage:'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize:'20px 20px'}}/>
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h3 className="text-3xl sm:text-5xl font-extrabold">Wall of Love</h3>
            <p className="text-white/70 mt-2">Real stories from real hires.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white text-black px-3 py-2 rounded-xl border-2 border-black shadow-[6px_6px_0_#7c3aed]">
            <Heart className="h-4 w-4 text-rose-500"/> <span className="text-xs font-bold">Powered by Community</span>
          </div>
        </div>

        <div className="relative">
          {/* animated hearts */}
          <div className="absolute -top-6 right-8 hidden md:block" style={{animation:'floatHeart 3.2s ease-in-out infinite'}}>
            <span className="text-3xl">💜</span>
          </div>
          <div className="absolute -bottom-6 left-6 hidden md:block" style={{animation:'floatHeart 4s ease-in-out infinite'}}>
            <span className="text-3xl">💖</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <article key={i} className="bg-[#0f0f16] rounded-2xl border-4 border-black shadow-[12px_12px_0_#0e0a22] p-5 flex flex-col">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="h-4 w-4 fill-amber-400" />)}
                </div>
                <p className="mt-3 text-sm text-white/90">“{t.quote}”</p>
                <div className="mt-4 pt-4 border-t-2 border-black/50 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-white text-black text-xs font-bold px-2 py-1 rounded border-2 border-black">
                    <Heart className="h-3.5 w-3.5 text-rose-600"/> Loved it
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
