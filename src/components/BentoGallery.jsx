import React from 'react';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    text: 'Lightning Q&A with mentors — unblocked in minutes.'
  },
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
    text: 'Live whiteboarding moments that land offers.'
  },
  {
    img: 'https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=1600&auto=format&fit=crop',
    text: 'Assessment grind — high signal, no fluff.'
  },
  {
    img: 'https://images.unsplash.com/photo-1596495578065-8a35f2d129b7?q=80&w=1600&auto=format&fit=crop',
    text: 'Backstage prep: frameworks, heuristics, patterns.'
  },
  {
    img: 'https://images.unsplash.com/photo-1529336953121-adb2eb8da2bc?q=80&w=1600&auto=format&fit=crop',
    text: 'Offer day — the moment you trained for.'
  },
  {
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop',
    text: 'Team huddles that sharpen your edge.'
  },
];

export default function BentoGallery() {
  return (
    <section className="relative py-20 bg-[#0f0f16] border-y-4 border-black">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-3xl sm:text-5xl font-extrabold">Gallery — Bento</h3>
          <p className="text-white/70 mt-2">Glimpses from past events; one-liners that tell the story.</p>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {/* Row 1 */}
          <BentoCard span="col-span-6 lg:col-span-4" img={items[0].img} text={items[0].text} />
          <BentoCard span="col-span-6 lg:col-span-2" img={items[1].img} text={items[1].text} />

          {/* Row 2 */}
          <BentoCard span="col-span-6 lg:col-span-2" img={items[2].img} text={items[2].text} />
          <BentoCard span="col-span-6 lg:col-span-4" img={items[3].img} text={items[3].text} />

          {/* Row 3 */}
          <BentoCard span="col-span-6 lg:col-span-3" img={items[4].img} text={items[4].text} />
          <BentoCard span="col-span-6 lg:col-span-3" img={items[5].img} text={items[5].text} />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ span, img, text }) {
  return (
    <div className={`${span} relative group rounded-3xl border-4 border-black overflow-hidden shadow-[16px_16px_0_#0e0a22]`}> 
      <img src={img} alt={text} className="w-full h-56 sm:h-72 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3">
        <p className="truncate bg-white text-black text-xs sm:text-sm font-bold px-3 py-2 rounded-xl border-2 border-black inline-flex max-w-full">
          {text}
        </p>
      </div>
    </div>
  );
}
