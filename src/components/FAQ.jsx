import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What exactly is the “secret topic” for the live class?',
    a: 'We reveal it live to keep prep fresh and high-signal. Expect advanced DS/Algo patterns that map directly to interview rounds.'
  },
  {
    q: 'How does shortlisting with mentors/HRs work?',
    a: 'Your assessment performance and profile are matched with partner requirements. Mentors/HRs shortlist and coordinate intros where relevant.'
  },
  {
    q: 'Is there a refund if I cannot attend?',
    a: 'Yes. If the event is postponed or you face a critical issue, we provide refunds as per policy. Reach us before the assessment starts.'
  },
  {
    q: 'Will I get interview prep support after the event?',
    a: 'Absolutely. Top performers get continued guidance for interviews and negotiation until closure.'
  },
];

function Item({ q, a, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#0f0f16] rounded-2xl border-4 border-black shadow-[12px_12px_0_#0e0a22] overflow-hidden">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className="font-bold">{q}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-2 text-white/80 text-sm">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-3xl sm:text-5xl font-extrabold">FAQ</h3>
            <p className="text-white/70 mt-2">Everything you need to know about the Tournament.</p>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 bg-white text-black px-3 py-2 rounded-xl border-2 border-black shadow-[6px_6px_0_#f59e0b]">
            <HelpCircle className="h-4 w-4" /> <span className="text-xs font-bold">Need help?</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
