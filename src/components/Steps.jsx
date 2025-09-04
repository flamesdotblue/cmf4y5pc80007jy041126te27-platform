import React from 'react';
import { Mic, Video, Users, MessageSquare, Share, Circle, Smile, PhoneOff } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Live Class: Secret Topic',
    byline: 'Legendary Manas Kumar Verma',
    desc: 'Kick off with an immersive live class on a carefully chosen secret topic that top companies love. High-signal, interview-ready content only.',
    mockup: (
      <div className="bg-[#0f0f16] border-2 border-black rounded-2xl shadow-[10px_10px_0_#7c3aed] overflow-hidden">
        {/* Zoom-like top bar */}
        <div className="px-4 py-2 bg-[#151523] border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-red-500 text-black font-bold border-2 border-black">LIVE</span>
            <span className="text-white/80">AlgoU Live — Secret Topic</span>
          </div>
          <div className="text-xs bg-white text-black px-2 py-1 rounded border-2 border-black">00:45:12</div>
        </div>

        {/* Video grid */}
        <div className="p-3 grid grid-cols-3 sm:grid-cols-3 gap-3">
          {["Manas","Priya","Arjun","Nisha","Karthik","You"].map((n,i)=> (
            <div key={i} className="relative aspect-video bg-[#0b0b10] border-2 border-black rounded-xl overflow-hidden">
              <img src={`https://i.pravatar.cc/400?img=${i+12}`} alt={n} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between">
                <div className="text-[11px] font-bold bg-white text-black px-2 py-0.5 rounded border-2 border-black">{n}{n==='Manas'?' · Speaker':''}</div>
                {n==='Manas' && <div className="text-[10px] bg-emerald-400 text-black font-bold px-1.5 py-0.5 rounded border-2 border-black">HD</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom controls */}
        <div className="px-4 py-3 bg-[#151523] border-t-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Control icon={<Mic className="h-4 w-4"/>} label="Mute" />
            <Control icon={<Video className="h-4 w-4"/>} label="Video" />
            <Control icon={<Users className="h-4 w-4"/>} label="Participants" />
            <Control icon={<MessageSquare className="h-4 w-4"/>} label="Chat" />
            <Control icon={<Share className="h-4 w-4"/>} label="Share" />
            <Control icon={<Circle className="h-4 w-4"/>} label="Record" />
            <Control icon={<Smile className="h-4 w-4"/>} label="Reactions" />
          </div>
          <button className="inline-flex items-center gap-2 bg-red-500 text-black font-bold px-3 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0_#7c3aed]">
            <PhoneOff className="h-4 w-4"/> Leave
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Online Assessment',
    byline: 'On the same secret topic',
    desc: 'Right after learning, lock it in with a curated assessment mirroring real interview signal. Timed, proctored, and fair.',
    mockup: (
      <div className="bg-[#0f0f16] border-2 border-black rounded-xl shadow-[8px_8px_0_#22d3ee] overflow-hidden">
        <div className="px-4 py-3 bg-[#1c1c27] border-b-2 border-black flex justify-between items-center">
          <span className="text-sm">Assessment Portal</span>
          <span className="text-xs bg-white text-black px-2 py-1 rounded border-2 border-black">45:00</span>
        </div>
        <div className="p-4 space-y-3 text-sm">
          <div className="bg-[#14141f] border-2 border-black rounded px-3 py-2">Q1. Implement 0-1 BFS variant for weighted grid shortest path.</div>
          <div className="bg-[#14141f] border-2 border-black rounded px-3 py-2">Q2. DSU with rollback to answer offline queries.</div>
          <div className="bg-[#14141f] border-2 border-black rounded px-3 py-2">Q3. Optimize memory with bitsets for large constraints.</div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Pairing with Mentors & HRs',
    byline: 'Shortlists across companies',
    desc: 'Based on your performance, get matched to mentors and HR partners who shortlist you directly for relevant roles.',
    mockup: (
      <div className="bg-[#0f0f16] border-2 border-black rounded-xl shadow-[8px_8px_0_#34d399] overflow-hidden">
        <div className="p-4 grid grid-cols-3 gap-3">
          {['Priya','Arjun','Nisha','Karthik','Meera','Dev'].map((n,i)=> (
            <div key={i} className="bg-[#14141f] border-2 border-black rounded p-3">
              <div className="flex items-center gap-2">
                <img src={`https://i.pravatar.cc/80?img=${i+5}`} alt={n} className="h-8 w-8 rounded-full border border-white/20" />
                <div>
                  <p className="text-sm font-semibold">{n}</p>
                  <p className="text-xs text-white/60">Mentor / HR</p>
                </div>
              </div>
              <div className="mt-2 text-[11px] text-white/70">Shortlisting → Mocked ➜ Intro</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Interview & Get Hired',
    byline: 'Final rounds with partner companies',
    desc: 'Convert your shortlist into offers. We coordinate interviews and keep you prepped till you sign the offer letter.',
    mockup: (
      <div className="bg-[#0f0f16] border-2 border-black rounded-xl shadow-[8px_8px_0_#f59e0b] overflow-hidden">
        <div className="p-4 grid grid-cols-2 gap-3">
          <div className="bg-[#14141f] border-2 border-black rounded p-3 text-sm">
            <p className="font-semibold">Panel</p>
            <p className="text-white/70 text-xs mt-1">Hiring Manager • SDE-II • 45 mins</p>
            <ul className="list-disc list-inside text-xs mt-2 text-white/80 space-y-1">
              <li>System design warm-up</li>
              <li>Deep dive: Graphs</li>
              <li>Behavioral fit</li>
            </ul>
          </div>
          <div className="bg-[#14141f] border-2 border-black rounded p-3 text-sm">
            <p className="font-semibold">Outcome</p>
            <div className="mt-2 bg-emerald-400 text-black font-bold px-2 py-1 rounded inline-block border-2 border-black">Offer Pending</div>
            <p className="text-white/70 text-xs mt-2">Recruiter follow-up within 24h</p>
          </div>
        </div>
      </div>
    ),
  },
];

function Control({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-[#0f0f16] text-white px-3 py-1.5 rounded-lg border-2 border-black text-xs">
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default function Steps() {
  return (
    <section id="steps" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold">Your 4-step path to an offer</h2>
            <p className="text-white/70 mt-2">Start strong on 21st September — finish with an offer letter.</p>
          </div>
          <a href="#ticket" className="hidden sm:inline-flex bg-white text-black font-semibold px-4 py-3 rounded-lg border-2 border-black shadow-[6px_6px_0_#7c3aed] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">Buy Ticket</a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div key={s.id} className="bg-[#0f0f16] border-4 border-black rounded-2xl p-6 shadow-[12px_12px_0_#1f1147]">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center bg-[#a78bfa] text-black font-extrabold rounded-xl border-2 border-black shadow-[4px_4px_0_#1e1b4b]">{s.id}</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold">{s.title}</h3>
                  <p className="text-white/60 text-sm">{s.byline}</p>
                </div>
              </div>
              <p className="mt-3 text-white/80">{s.desc}</p>
              <div className="mt-5">{s.mockup}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
