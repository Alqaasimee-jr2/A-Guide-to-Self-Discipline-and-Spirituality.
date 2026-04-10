import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface py-32 px-6 md:px-12">
      <main className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="group flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-[10px] mb-20 hover:gap-5 transition-all"
        >
          <ArrowLeft size={16} /> Back to the Path
        </Link>
        
        <article className="prose prose-stone lg:prose-xl max-w-none">
          <h1 className="text-5xl md:text-7xl font-serif text-on-surface mb-12 italic">Privacy Sanctuary.</h1>
          
          <div className="space-y-12 text-on-surface-variant leading-relaxed font-light">
            <section className="space-y-6">
              <h2 className="text-2xl font-serif text-on-surface">1. Focus & Sanctity</h2>
              <p>At A New Horizon, we believe that your digital data is as personal as your spiritual journey. We value the sanctity of your focus above all else.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-serif text-on-surface">2. Minimal Collection</h2>
              <p>We collect only your email address to deliver the 8-Week Compass and weekly momentum guides. This is a direct exchange of value intended to save you time and provide clarity.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-serif text-on-surface">3. Absolute Ownership</h2>
              <p>We do not share, sell, or trade your data. Your information is used strictly for the delivery of the promised digital items. You are the master of your data and may request removal at any time.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-serif text-on-surface">4. Silent Communication</h2>
              <p>Our goal is to eliminate noise. You will receive only what you subscribed for: the compass, and the weekly blueprints. No clutter. No spam.</p>
            </section>
          </div>

          <footer className="mt-32 pt-12 border-t border-outline-variant/10 text-[9px] uppercase tracking-[0.5em] text-outline text-center">
            "Privacy is the companion of peace."
          </footer>
        </article>
      </main>
    </div>
  );
}
