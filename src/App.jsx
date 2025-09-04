import React from 'react';
import Hero from './components/Hero';
import Steps from './components/Steps';
import BentoGallery from './components/BentoGallery';
import StepsCompact from './components/StepsCompact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b10] text-white font-inter overflow-x-hidden">
      <Hero />
      <Steps />
      <StepsCompact />
      <BentoGallery />
      <footer className="py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} AlgoUniversity · Hiring Tournament
      </footer>
    </div>
  );
}
