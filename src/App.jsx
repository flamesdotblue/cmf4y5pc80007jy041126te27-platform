import React from 'react';
import Hero from './components/Hero';
import Steps from './components/Steps';
import StepsCompact from './components/StepsCompact';
import PartnersMarquee from './components/PartnersMarquee';
import Mentors from './components/Mentors';
import WallOfLove from './components/WallOfLove';
import BentoGallery from './components/BentoGallery';
import FAQ from './components/FAQ';
import StatsCTA from './components/StatsCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b10] text-white font-inter overflow-x-hidden">
      <Hero />
      <Steps />
      <StepsCompact />
      <PartnersMarquee />
      <Mentors />
      <WallOfLove />
      <BentoGallery />
      <FAQ />
      <StatsCTA />
      <footer className="py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} AlgoUniversity · Hiring Tournament
      </footer>
    </div>
  );
}
