import Image from "next/image";
import { 
  TreeDeciduous, 
  Brain, 
  Compass, 
  Diamond, 
  Sparkles, 
  Waves, 
  Flower, 
  Zap,
  ArrowRight,
  Dumbbell,
  Wind,
  FileText
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SubscribeForm from "@/components/SubscribeForm";
import { disciplines } from "@/lib/content";

export default function Home() {
  const chapterIcons = [
    TreeDeciduous, Brain, Compass, Diamond, 
    Sparkles, Waves, Flower, Zap
  ];

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section 
          id="path" 
          className="relative min-h-[95vh] flex items-center px-6 md:px-12 py-32 overflow-hidden bg-surface"
          aria-labelledby="hero-title"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-full flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="relative w-full h-full opacity-15">
              <Image 
                src="/assets/bonsai_zen.png" 
                alt="" 
                fill 
                className="object-contain scale-125 md:scale-100" 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10 w-full text-center">
            <div className="mb-10 animate-fade-in">
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">A Digital Sanctuary</span>
            </div>
            
            <h1 
              id="hero-title"
              className="text-6xl md:text-9xl font-serif leading-[1.05] text-on-surface mb-12 tracking-tighter animate-fade-up"
            >
              From Unfulfilled Potential <br className="hidden md:block" /> to Aligned Action.
            </h1>
            
            <p className="text-2xl md:text-3xl font-serif italic text-on-surface-variant mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
              "Freedom is found in the framework of discipline."
            </p>
            
            <div className="flex flex-col items-center gap-12 animate-fade-up delay-400">
              <a 
                href="#conversion"
                className="btn-zen btn-primary group flex items-center gap-4 text-lg"
                aria-label="Commit to the 8-week journey"
              >
                Start the Journey
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" aria-hidden="true" />
              </a>
              
              <div className="flex flex-col items-center gap-6" aria-hidden="true">
                <div className="reflective-scroll"></div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-outline font-medium">Begin the climb</span>
              </div>
            </div>
          </div>
        </section>

        {/* The 8-Week Compass (Summary) */}
        <section 
          className="bg-surface-container-low py-40 px-6 md:px-12 relative overflow-hidden"
          aria-labelledby="compass-title"
        >
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-black">A Sancturary for the Weary</span>
              <h2 id="compass-title" className="text-5xl md:text-7xl font-serif text-on-surface leading-tight">The 8-Week Compass.</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed font-light">
                This is not just a book; it is a shortcut for those weary of distractions. We eliminate the exhaustive search for self-discipline by providing a direct, automated framework for inner mastery.
              </p>
              
              <div className="pt-20 border-t border-outline-variant/10">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary-dim mb-6">Reflections:</p>
                <h4 className="text-3xl md:text-4xl font-serif text-on-surface italic">In a world designed for noise, where will you find your silence?</h4>
              </div>
            </div>
            
            <div className="relative p-1 glass-panel rounded-lg shadow-2xl shadow-primary/5">
              <div className="bg-surface/50 p-12 md:p-20 space-y-16">
                <div className="flex items-center gap-8 group">
                  <div className="p-4 bg-primary/5 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-700">
                    <FileText size={32} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-on-surface mb-2">The Mind</h4>
                    <p className="text-sm text-on-surface-variant font-medium">Weekly diary reflections to identify deep patterns.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 group">
                  <div className="p-4 bg-primary/5 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-700">
                    <Dumbbell size={32} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-on-surface mb-2">The Body</h4>
                    <p className="text-sm text-on-surface-variant font-medium">Physical bodyweight exercises to ground your progress.</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="p-4 bg-primary/5 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-700">
                    <Wind size={32} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-on-surface mb-2">The Spirit</h4>
                    <p className="text-sm text-on-surface-variant font-medium">Mindful observation and breathing to anchor your focus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 8 Disciplines Roadmap */}
        <section id="disciplines" className="py-40 px-6 md:px-12 bg-surface" aria-labelledby="disciplines-title">
          <div className="max-w-screen-xl mx-auto text-center mb-32">
            <h2 id="disciplines-title" className="text-5xl font-serif text-on-surface mb-6 italic">The Eight Disciplines</h2>
            <p className="text-on-surface-variant uppercase text-xs tracking-[0.5em] font-black">Your 8-Week Blueprint to Mastery</p>
          </div>
          
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-24">
            {disciplines.map((chapter, index) => {
              const Icon = chapterIcons[index];
              return (
                <div key={chapter.id} className="group text-center">
                  <div className="mb-8 flex justify-center opacity-20 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-110">
                    <Icon className="text-primary" size={48} strokeWidth={1} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] text-primary/60 tracking-[0.4em] block mb-4 uppercase font-bold">Week {chapter.id}</span>
                  <h3 className="text-2xl font-serif text-on-surface">{chapter.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-40 text-center space-y-10">
            <h4 className="text-3xl md:text-5xl font-serif text-on-surface leading-snug italic">Which piece of the framework is your missing foundation?</h4>
            <a 
              href="#path"
              className="text-primary font-bold flex items-center gap-3 mx-auto hover:gap-6 transition-all tracking-[0.2em] uppercase text-xs"
              aria-label="Return to the beginning of the path"
            >
              Back to the Path <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Philosophy / Passing the Torch */}
        <section id="philosophy" className="py-40 px-6 md:px-12 bg-surface-container overflow-hidden" aria-labelledby="philosophy-title">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-32">
            <div 
              className="w-full md:w-2/5 aspect-square glass-panel rounded-sm flex items-center justify-center p-20 shadow-inner relative"
              aria-hidden="true"
            >
              <Image 
                src="/assets/torch_pass.png" 
                alt="" 
                fill 
                className="object-contain p-20 opacity-80" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            
            <div className="w-full md:w-3/5 space-y-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-black">Passing the Torch</span>
              <h2 id="philosophy-title" className="text-5xl md:text-7xl font-serif text-on-surface leading-tight">Benefit of Others.</h2>
              <div className="space-y-8 max-w-2xl text-xl text-on-surface-variant leading-relaxed font-light">
                <p>
                  Inspired by the principles shared by those who came before me, this book is an offering of my own journey, reflections, and lessons.
                </p>
                <p>
                  Growth is not a destination; it is a way of being. I invite you to take the torch and carry the light of discipline into your own unique existence.
                </p>
              </div>
              <div className="pt-20 border-t border-outline-variant/10">
                <span className="font-serif italic text-4xl text-on-surface block mb-2">C.R.I.</span>
                <span className="text-xs uppercase tracking-widest text-outline">Author of A Guide to Self-Discipline</span>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Engine / Newsletter */}
        <section id="conversion" className="bg-surface py-40 px-6 md:px-12 relative border-t border-outline-variant/5" aria-labelledby="conversion-title">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none flex justify-center" aria-hidden="true">
            <div className="relative w-full h-full max-w-2xl animate-pulse">
              <Image 
                src="/assets/compass_zen.png" 
                alt="" 
                fill 
                className="object-contain" 
                sizes="100vw"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="space-y-12">
              <h2 id="conversion-title" className="text-5xl md:text-8xl font-serif text-on-surface tracking-tighter italic">Commit to the <br /> 8-Week Transformation.</h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Enter your email to download the full PDF and subscribe to the "Weekly Momentum" newsletter—an automated 8-week guide that sends your exercises directly to your sanctuary.
              </p>
              
              <SubscribeForm />

              <p className="text-sm italic text-on-surface-variant/70 mt-8">Your journey matters. Truly, C.R.I.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low py-20 px-6 md:px-12 border-t border-outline-variant/10" role="contentinfo">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-12 text-center text-on-surface-variant">
          <div className="text-2xl font-serif italic text-primary">A New Horizon</div>
          <nav className="flex flex-wrap justify-center gap-12 text-[10px] uppercase font-bold tracking-[0.3em]" aria-label="Footer links">
            <a className="hover:text-primary transition-colors" href="#disciplines">Library</a>
            <a className="hover:text-primary transition-colors" href="#philosophy">Mission</a>
            <a className="hover:text-primary transition-colors" href="#path">Spirituality</a>
            <a className="hover:text-primary transition-colors" href="/privacy">Privacy</a>
          </nav>
          <div className="space-y-6">
            <p className="text-sm font-serif italic opacity-70">"Growth is not a destination; it is a way of being."</p>
            <p className="text-[9px] tracking-[0.5em] text-outline/50 uppercase">
              © 2024 The Digital Sanctuary. Handcrafted for C.R.I.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
