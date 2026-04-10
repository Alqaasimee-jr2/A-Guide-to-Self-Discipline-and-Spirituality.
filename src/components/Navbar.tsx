"use client";

import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reader from "./Reader";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  return (
    <>
      <Reader isOpen={isReaderOpen} onClose={() => setIsReaderOpen(false)} />
      
      <nav 
        aria-label="Sanctuary Navigation" 
        className="fixed top-0 w-full z-50 glass-panel border-b border-outline-variant/5 transition-all duration-500"
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-8 max-w-screen-2xl mx-auto">
          <div className="text-xl font-serif italic text-on-surface tracking-tight" aria-hidden="false">
            A New Horizon
          </div>
          
          <div className="hidden md:flex items-center gap-12" role="list">
            <a className="text-on-surface-variant hover:text-primary transition-colors text-xs font-semibold tracking-[0.2em] uppercase" href="#path">The Path</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-xs font-semibold tracking-[0.2em] uppercase" href="#disciplines">Disciplines</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-xs font-semibold tracking-[0.2em] uppercase" href="#philosophy">Philosophy</a>
            <button 
              onClick={() => setIsReaderOpen(true)}
              aria-label="Open the Teaser Reader"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-xs font-semibold tracking-[0.2em] uppercase"
            >
              <BookOpen size={14} aria-hidden="true" />
              The Teaser
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsReaderOpen(true)}
              aria-label="Start the Journey"
              className="btn-zen btn-primary !py-3 !px-8 text-xs !shadow-none font-bold uppercase tracking-widest hidden sm:block"
            >
              Start the Journey
            </button>
            <button 
              className="md:hidden text-on-surface" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface border-b border-outline-variant/10 px-8 py-12 space-y-8 overflow-hidden"
            >
              <a className="block text-primary text-xl font-serif" href="#path" onClick={() => setIsMenuOpen(false)}>The Path</a>
              <a className="block text-on-surface-variant text-xl font-serif" href="#disciplines" onClick={() => setIsMenuOpen(false)}>Disciplines</a>
              <a className="block text-on-surface-variant text-xl font-serif" href="#philosophy" onClick={() => setIsMenuOpen(false)}>Philosophy</a>
              <button 
                onClick={() => { setIsReaderOpen(true); setIsMenuOpen(false); }}
                className="flex items-center gap-3 text-on-surface-variant text-xl font-serif w-full text-left"
              >
                <BookOpen size={20} />
                The Teaser
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
