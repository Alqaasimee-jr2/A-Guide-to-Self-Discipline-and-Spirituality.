"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { readerContent } from "@/lib/content";

interface ReaderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Reader({ isOpen, onClose }: ReaderProps) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const next = useCallback(() => {
    if (currentPage < readerContent[currentChapter].pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (currentChapter < readerContent.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setCurrentPage(0);
    }
  }, [currentChapter, currentPage]);

  const prev = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setCurrentPage(readerContent[currentChapter - 1].pages.length - 1);
    }
  }, [currentChapter, currentPage]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isOpen, next, prev, onClose]);

  const handleDownload = () => {
    window.open("/assets/book.pdf", "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Internal Sanctuary Reader"
          className="fixed inset-0 z-[100] bg-surface flex flex-col"
        >
          {/* Header */}
          <header className="px-6 py-8 border-b border-outline-variant/10 flex justify-between items-center bg-surface/80 backdrop-blur-md sticky top-0">
            <div className="flex items-center gap-6">
              <div className="relative w-8 h-8 opacity-80" aria-hidden="true">
                <Image 
                  src="/assets/compass_zen.png" 
                  alt="" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-serif italic text-on-surface">A Guide to Self-Discipline</h2>
                <p className="text-[10px] uppercase tracking-[0.4em] text-on-surface-variant font-medium">Internal Sanctuary</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <button 
                onClick={handleDownload}
                aria-label="Download the full PDF guide"
                className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant hover:text-primary transition-all tracking-widest uppercase"
              >
                <Download size={14} aria-hidden="true" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>
              <button 
                onClick={onClose}
                aria-label="Close sanctuary reader"
                className="p-2 hover:bg-primary/5 rounded-full transition-colors text-on-surface"
              >
                <X size={28} />
              </button>
            </div>
          </header>

          {/* Content */}
          <main 
            className="flex-1 overflow-y-auto px-6 py-20 md:py-32 scrollbar-hide"
            tabIndex={0} // Allows the main content area to receive focus for accessibility
          >
            <div className="max-w-xl mx-auto space-y-20">
              <motion.div
                key={`${currentChapter}-${currentPage}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-16"
                aria-live="polite"
              >
                <div className="space-y-6">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
                    {readerContent[currentChapter].title}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-serif text-on-surface leading-[1.2]">
                    "{readerContent[currentChapter].pages[currentPage].quote}"
                  </h3>
                </div>

                <div className="prose prose-stone lg:prose-xl">
                  <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-sans font-light">
                    {readerContent[currentChapter].pages[currentPage].text}
                  </p>
                </div>

                <div 
                  className="pt-20 border-t border-outline-variant/10 flex justify-between items-center text-[10px] text-outline tracking-[0.3em] uppercase font-medium"
                  aria-label={`Progress: Discipline ${currentChapter + 1}, orientation ${currentPage + 1} of ${readerContent[currentChapter].pages.length}`}
                >
                  <span>DISCIPLINE {currentChapter + 1}</span>
                  <span>ORIENTATION {currentPage + 1} OF {readerContent[currentChapter].pages.length}</span>
                </div>
              </motion.div>
            </div>
          </main>

          {/* Controls */}
          <footer className="px-6 py-12 border-t border-outline-variant/10 bg-surface">
            <div className="max-w-xl mx-auto flex justify-between items-center">
              <button 
                onClick={prev}
                disabled={currentChapter === 0 && currentPage === 0}
                aria-label="Previous page"
                className="flex items-center gap-3 text-sm font-semibold text-on-surface-variant hover:text-primary disabled:opacity-30 transition-all uppercase tracking-widest"
              >
                <ChevronLeft size={18} aria-hidden="true" />
                Previous
              </button>
              
              <div 
                className="flex gap-4" 
                aria-hidden="true" // Decorative dots
              >
                {readerContent.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-0.5 w-12 rounded-full transition-all duration-700 ${idx === currentChapter ? 'bg-primary' : 'bg-outline-variant/30'}`}
                  />
                ))}
              </div>

              <button 
                onClick={next}
                disabled={currentChapter === readerContent.length - 1 && currentPage === readerContent[currentChapter].pages.length - 1}
                aria-label="Next page"
                className="flex items-center gap-3 text-sm font-semibold text-on-surface-variant hover:text-primary disabled:opacity-30 transition-all uppercase tracking-widest"
              >
                Next
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
