import React from 'react';

const logos = [
  // Using brandlogos.net technology brands (SVG/PNG). Fallbacks included.
  'https://brandlogos.net/wp-content/uploads/2021/06/google-logo.png',
  'https://brandlogos.net/wp-content/uploads/2021/08/amazon-logo.png',
  'https://brandlogos.net/wp-content/uploads/2021/06/microsoft-logo.png',
  'https://brandlogos.net/wp-content/uploads/2021/06/uber-logo.png',
  'https://brandlogos.net/wp-content/uploads/2016/09/stripe-logo.png',
  'https://brandlogos.net/wp-content/uploads/2021/03/atlassian-logo.png',
  'https://brandlogos.net/wp-content/uploads/2021/08/adobe-logo.png',
  'https://brandlogos.net/wp-content/uploads/2022/04/notion-logo_brandlogos.net_pum3e.png',
  'https://brandlogos.net/wp-content/uploads/2021/04/slack-logo.png',
  'https://brandlogos.net/wp-content/uploads/2022/01/zoom-logo_brandlogos.net_hcz8s.png',
];

export default function PartnersMarquee() {
  return (
    <section className="relative py-16 bg-[#0f0f16] border-y-4 border-black">
      <style>{`
        @keyframes scrollx { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Hiring partners joining the Tournament</h3>
          <span className="text-xs bg-white text-black px-3 py-1 rounded border-2 border-black">Rolling list</span>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-16 items-center w-[200%]" style={{ animation: 'scrollx 40s linear infinite' }}>
          {[...logos, ...logos].map((src, i) => (
            <div key={i} className="h-16 flex items-center justify-center px-8">
              <img src={src} alt="partner logo" className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
