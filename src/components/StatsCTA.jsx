import React from 'react';
import { Ticket, Star, Users } from 'lucide-react';

export default function StatsCTA() {
  return (
    <section id="ticket" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl sm:text-5xl font-extrabold">Proof that it works</h3>
            <p className="text-white/70 mt-2">We optimize for hiring signal, not vanity metrics.</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <StatCard label="Hiring Partners" value="50+" color="#a78bfa" />
              <StatCard label="Offers Rolled" value="200+" color="#34d399" />
              <StatCard label="Avg. CTC" value="18 LPA" color="#f59e0b" />
              <StatCard label="Applicants" value="10k+" color="#22d3ee" />
            </div>

            <ul className="mt-6 text-sm text-white/80 space-y-2 list-disc list-inside">
              <li>Priority shortlisting for top performers</li>
              <li>Interview prep support till offer</li>
              <li>Refund guarantee if event is postponed</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <TicketMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className="bg-[#0f0f16] border-4 border-black rounded-2xl p-4 shadow-[10px_10px_0_#0e0a22]">
      <div className="text-3xl font-extrabold" style={{ color }}>{value}</div>
      <div className="text-white/70 text-sm">{label}</div>
    </div>
  );
}

function TicketMock() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute -inset-2 bg-[#7c3aed] rounded-3xl blur-xl opacity-40" />
      <div className="relative bg-white text-black rounded-3xl border-4 border-black shadow-[16px_16px_0_#1e1b4b] overflow-hidden">
        <div className="flex">
          <div className="flex-1 p-6">
            <div className="flex items-center gap-2 text-xs font-bold">
              <Ticket className="h-4 w-4" /> ENTRY TICKET
            </div>
            <h4 className="mt-2 text-2xl font-extrabold leading-tight">AlgoUniversity Hiring Tournament</h4>
            <p className="text-sm text-black/70">Learn. Code. Get Hired.</p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-black text-white p-2 rounded-lg border-2 border-black">21st September</div>
              <div className="bg-[#a78bfa] p-2 rounded-lg border-2 border-black">Online · Global</div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-black/70">
              <Users className="h-4 w-4" /> Limited seats · Priority shortlists
            </div>

            <a href="#buy" className="mt-5 inline-flex items-center justify-center w-full bg-black text-white font-bold px-4 py-3 rounded-xl border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              Buy Ticket — $19
            </a>
          </div>
          <div className="w-24 bg-[#0f0f16] text-white border-l-4 border-black p-4 relative">
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 h-6 w-6 rounded-full bg-[#0b0b10] border-4 border-black" />
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 h-6 w-6 rounded-full bg-[#0b0b10] border-4 border-black" />
            <div className="flex flex-col items-center justify-between h-full">
              <Star className="opacity-70" />
              <div className="text-[10px] rotate-90 tracking-widest opacity-70">ALGO-HT</div>
              <Star className="opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
