import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0b0b10] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md shadow-[6px_6px_0_#7c3aed] border-2 border-black">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          21st September · Global · Online
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
          AlgoUniversity Hiring Tournament
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-white/80">Learn. Code. Get Hired.</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#steps" className="group inline-flex items-center gap-3 bg-[#a78bfa] text-black font-semibold px-6 py-4 rounded-lg shadow-[8px_8px_0_#1e1b4b] border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
            <Rocket className="h-5 w-5" /> Explore How It Works
          </a>
          <a href="#ticket" className="inline-flex items-center gap-3 bg-white text-black font-semibold px-6 py-4 rounded-lg shadow-[8px_8px_0_#7c3aed] border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
            Get Ticket
          </a>
        </div>
      </div>
    </section>
  );
}
