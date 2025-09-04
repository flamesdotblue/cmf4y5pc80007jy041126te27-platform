import React from 'react';
import { Rocket, CalendarDays, Ticket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#120f2a] via-[#0b0b10] to-[#0b0b10]" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-3xl bg-[#7c3aed]/20 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-3xl bg-[#22d3ee]/10 blur-2xl" />
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:
          'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize:'20px 20px'}}/>
      </div>

      <div className="relative container mx-auto px-6 pt-24 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy + CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl border-2 border-black shadow-[8px_8px_0_#1e1b4b]">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              <CalendarDays className="h-4 w-4" /> 21st September · Global · Online
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
              AlgoUniversity
              <br />
              Hiring Tournament
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white/80">Learn. Code. Get Hired.</p>

            <ul className="mt-6 space-y-2 text-white/80">
              <li className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#a78bfa]"/> Secret live topic by Manas Kumar Verma</li>
              <li className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#a78bfa]"/> Online assessment with real interview signal</li>
              <li className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#a78bfa]"/> Direct shortlists with Mentors/HRs</li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#steps" className="group inline-flex items-center gap-3 bg-[#a78bfa] text-black font-semibold px-6 py-4 rounded-xl shadow-[10px_10px_0_#1e1b4b] border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                <Rocket className="h-5 w-5" /> Explore How It Works
              </a>
              <a href="#ticket" className="inline-flex items-center gap-3 bg-white text-black font-semibold px-6 py-4 rounded-xl shadow-[10px_10px_0_#7c3aed] border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                <Ticket className="h-5 w-5" /> Get Ticket
              </a>
            </div>
          </div>

          {/* Right: Premium neo‑brutalist mock stack */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-[#7c3aed]/30 rounded-3xl blur-2xl opacity-50" />
            <div className="relative rotate-[-2deg] bg-[#0f0f16] border-4 border-black rounded-3xl shadow-[18px_18px_0_#1f1147] overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#14141f] border-b-4 border-black">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs text-white/70">Tournament Dashboard</div>
              </div>
              {/* Content grid */}
              <div className="p-4 grid grid-cols-2 gap-4">
                <div className="bg-[#0b0b10] rounded-xl border-2 border-black p-4">
                  <div className="text-sm font-bold">Assessment Signal</div>
                  <div className="mt-2 h-24 bg-[#14141f] border-2 border-black rounded-lg" />
                </div>
                <div className="bg-[#0b0b10] rounded-xl border-2 border-black p-4">
                  <div className="text-sm font-bold">Mentor Shortlists</div>
                  <div className="mt-2 h-24 bg-[#14141f] border-2 border-black rounded-lg" />
                </div>
                <div className="bg-[#0b0b10] rounded-xl border-2 border-black p-4 col-span-2">
                  <div className="text-sm font-bold">Live Prep Boilerplate</div>
                  <pre className="mt-2 text-[11px] leading-relaxed text-white/80 whitespace-pre-wrap">{`// Graph toolkit: 0-1 BFS, DSU by size, centroiding
function solveTournament(input) {
  // patterns + pitfalls → interview-ready
}`}</pre>
                </div>
              </div>
            </div>

            {/* Accent card */}
            <div className="hidden lg:block absolute -bottom-10 -left-6 rotate-[3deg] bg-white text-black rounded-2xl border-4 border-black shadow-[14px_14px_0_#7c3aed] p-4">
              <div className="text-xs font-bold">ALGO-HT</div>
              <div className="text-lg font-extrabold leading-tight">Priority Shortlisting</div>
              <div className="text-xs">Top performers get fast-tracked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
