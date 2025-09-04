import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596495578065-8a35f2d129b7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529336953121-adb2eb8da2bc?q=80&w=1200&auto=format&fit=crop',
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const slides = useMemo(() => images, []);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [index]);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setTimeout(() => {
      next();
    }, 3500);
  };

  const stopAuto = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative py-20 bg-[#0f0f16] border-y-4 border-black">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-3xl sm:text-5xl font-extrabold">Gallery</h3>
            <p className="text-white/70 mt-2">Glimpses from past events and wins.</p>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 bg-white text-black px-3 py-2 rounded-xl border-2 border-black shadow-[6px_6px_0_#22d3ee]">
            <Camera className="h-4 w-4" /> <span className="text-xs font-bold">Highlights</span>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden border-4 border-black shadow-[18px_18px_0_#0e0a22]">
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i+1}`}
                className={`w-full h-full object-cover transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                draggable={false}
              />
            ))}
          </div>

          <button onClick={() => { stopAuto(); prev(); }} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-xl border-2 border-black shadow-[8px_8px_0_#7c3aed] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => { stopAuto(); next(); }} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-xl border-2 border-black shadow-[8px_8px_0_#7c3aed] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <span key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full border-2 border-black cursor-pointer ${i===index ? 'bg-[#a78bfa]' : 'bg-white'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
