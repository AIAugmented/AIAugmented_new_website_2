
import React, { useState, useEffect } from 'react';
import { Experience } from './components/Experience';
import { Navigation } from './components/Navigation';
import { OverlaySections } from './components/OverlaySections';
import { AboutPage } from './components/AboutPage';
import { AgentsPage } from './components/AgentsPage';
import { DemoPage } from './components/DemoPage';
import { PricingPage } from './components/PricingPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  
  // We need to track scroll relative to the total document height minus viewport
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      // Normalize to 0-1
      const progress = totalHeight > 0 ? Math.min(Math.max(currentScroll / totalHeight, 0), 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]); // Re-run logic if page changes (height changes)

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    setScrollProgress(0);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-[#00f0ff] selection:text-black">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* 3D Background Layer - Fixed */}
      {/* The scrollProgress drives the animation. Hidden on Agents/Demo page for a clean look or distinct particles. */}
      <div className={['agents', 'demo'].includes(currentPage) ? 'hidden' : 'block'}>
        <Experience scrollProgress={scrollProgress} />
      </div>
      
      {/* Scrollable Content Layer */}
      <div className="relative z-10 transition-opacity duration-1000 ease-in-out">
        {currentPage === 'home' && <OverlaySections onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'agents' && <AgentsPage onNavigate={handleNavigate} />}
        {currentPage === 'demo' && <DemoPage onNavigate={handleNavigate} />}
        {currentPage === 'pricing' && <PricingPage onNavigate={handleNavigate} />}
        {currentPage === 'privacy' && <PrivacyPage onNavigate={handleNavigate} />}
        {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}
      </div>
    </main>
  );
}
