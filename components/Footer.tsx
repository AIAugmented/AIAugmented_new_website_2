
import React from 'react';
import { Linkedin } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-[#050505] flex flex-col items-center relative pointer-events-auto border-t border-white/5 z-20">
        
        {/* Detailed Footer Grid */}
        <div className="w-full max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center md:text-left mb-16">
             <div className="flex flex-col gap-6 md:items-start items-center">
                 <div className="flex items-center gap-3">
                    <Logo className="w-8 h-8" />
                    <span className="text-white font-display text-lg tracking-[0.2em] font-bold">AI-AUGMENTED</span>
                 </div>
                 <span className="text-sm text-gray-500 uppercase tracking-widest leading-relaxed">
                   The Architecture of Power. <br/>
                   Ascend to Augmented.
                 </span>
                 <a href="https://www.linkedin.com/company/ai-augmented/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#6e683b] transition-colors inline-block p-2 border border-white/5 hover:border-[#6e683b]/30">
                    <Linkedin size={18} strokeWidth={1.5} />
                 </a>
             </div>

            <div>
                <h4 className="text-white font-display text-sm tracking-[0.2em] uppercase mb-8 font-bold text-[#6e683b]">Protocol</h4>
                <ul className="space-y-4 text-xs text-gray-500 uppercase tracking-widest font-medium">
                    <li onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">Home</li>
                    <li onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">About</li>
                    <li onClick={() => onNavigate('agents')} className="hover:text-white transition-colors cursor-pointer">The Council</li>
                    <li onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors cursor-pointer">Membership</li>
                </ul>
            </div>

             <div>
                 <h4 className="text-white font-display text-sm tracking-[0.2em] uppercase mb-8 font-bold text-[#6e683b]">Secure Comms</h4>
                 <ul className="space-y-4 text-xs text-gray-500 tracking-widest font-medium">
                    <li onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors cursor-pointer uppercase">Privacy Policy</li>
                    <li onClick={() => onNavigate('terms')} className="hover:text-white transition-colors cursor-pointer uppercase">Terms of Service</li>
                    <li className="hover:text-white transition-colors cursor-pointer pt-4 border-t border-white/5">info@aiaugmented.io</li>
                 </ul>
            </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#6e683b]/50 to-transparent"></div>
          <div className="text-[10px] text-gray-700 tracking-[0.3em] uppercase font-bold">
            AI-Augmented © 2025 // System Active
          </div>
        </div>
      </section>
  );
};
