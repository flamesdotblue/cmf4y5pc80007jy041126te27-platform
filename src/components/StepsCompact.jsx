import React from 'react';
import { Mic, MonitorPlay, Users, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Live Class: Secret Topic',
    byline: 'Legendary Manas Kumar Verma',
    color: '#a78bfa',
    icon: <Mic className="h-4 w-4" />,
    note: 'Interview-grade patterns, revealed live.'
  },
  {
    id: 2,
    title: 'Online Assessment',
    byline: 'On the same topic',
    color: '#22d3ee',
    icon: <MonitorPlay className="h-4 w-4" />,
    note: 'Timed, curated, high signal.'
  },
  {
    id: 3,
    title: 'Mentor/HR Pairing',
    byline: 'Shortlists across companies',
    color: '#34d399',
    icon: <Users className="h-4 w-4" />,
    note: 'Get matched, get intros.'
  },
  {
    id: 4,
    title: 'Interviews & Offers',
    byline: 'Final rounds with partners',
    color: '#f59e0b',
    icon: <CheckCircle2 className="h-4 w-4" />,
    note: 'Close the loop. Get hired.'
  },
];

export default function StepsCompact() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-3xl sm:text-5xl font-extrabold">The path — at a glance</h3>
          <p className="text-white/70 mt-2">Four playful rows with a dotted connector. Clear and fast.</p>
        </div>

        <div className="relative">
          {/* Dotted connector line */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 border-l-4 border-black border-dotted pointer-events-none" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <Row key={s.id} s={s} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ s, flip }) {
  return (
    <div className={`relative pl-14 sm:pl-16`}>
      {/* Node */}
      <div className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white border-4 border-black flex items-center justify-center">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
      </div>

      {/* Card */}
      <div className={`transform ${flip ? '-rotate-1' : 'rotate-1'} bg-[#0f0f16] rounded-2xl border-4 border-black shadow-[12px_12px_0_#1f1147]`}> 
        <div className="flex items-stretch">
          <div className="hidden sm:block w-2 rounded-l-2xl" style={{ backgroundColor: s.color }} />
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 bg-white text-black text-xs font-bold px-2 py-1 rounded border-2 border-black">
                {s.icon}
                <span>Step {s.id}</span>
              </div>
              <span className="text-[10px] sm:text-xs" style={{ color: s.color }}>21st Sept</span>
            </div>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
              <h4 className="text-lg sm:text-xl font-extrabold">{s.title}</h4>
              <span className="text-xs text-white/60">· {s.byline}</span>
            </div>
            <p className="mt-1 text-sm text-white/80">{s.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
