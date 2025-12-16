import React, { useState, useEffect } from 'react';
import { SLIDES } from './constants';
import SlideViewer from './components/SlideViewer';
import AITroubleshooter from './components/AITroubleshooter';
import { ChevronLeft, ChevronRight, Server } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  const getSlideContentText = () => {
     // Fallback text if content is complex React Node
     return currentSlide.note || (typeof currentSlide.content === 'string' ? currentSlide.content : `Slide title: ${currentSlide.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative font-sans overflow-x-hidden text-gray-100">
      {/* Dynamic Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-immich/20 rounded-full blur-[130px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[130px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Header / Nav - Fixed Top */}
      <header className="fixed top-0 left-0 w-full z-30 p-6 flex justify-between items-center border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
        <div className="flex items-center space-x-3 group cursor-default">
          <div className="p-2.5 bg-gradient-to-br from-immich to-immich-dark rounded-xl shadow-lg shadow-immich/20 group-hover:shadow-immich/40 transition-shadow duration-300">
            <Server className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Immich<span className="text-gray-500 font-light">Guide</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-xs font-medium text-gray-500 uppercase tracking-widest">
           <span className="hover:text-gray-300 transition-colors cursor-default">Mac M2</span>
           <span className="w-1 h-1 rounded-full bg-gray-800"></span>
           <span className="hover:text-gray-300 transition-colors cursor-default">Docker</span>
           <span className="w-1 h-1 rounded-full bg-gray-800"></span>
           <span className="hover:text-gray-300 transition-colors cursor-default">Cloudflare</span>
        </div>
      </header>

      {/* Main Content Area - With Padding for Fixed Header/Footer */}
      <main className="flex-1 relative z-10 pt-32 pb-48 w-full max-w-5xl mx-auto">
        <SlideViewer slide={currentSlide} />
      </main>

      {/* Footer / Controls - Fixed Bottom */}
      <footer className="fixed bottom-0 left-0 w-full z-30 p-6 border-t border-white/5 bg-gray-950/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-800/50 rounded-full mb-6 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-immich via-indigo-400 to-purple-500 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(174,184,255,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 border border-transparent
                ${currentSlideIndex === 0 
                  ? 'text-gray-600 cursor-not-allowed' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5 active:scale-95'}`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>

            <span className="text-gray-500 font-mono text-xs tracking-wider hidden sm:block">
              STEP {currentSlideIndex + 1} OF {totalSlides}
            </span>

            <button
              onClick={nextSlide}
              disabled={currentSlideIndex === totalSlides - 1}
              className={`flex items-center space-x-2 px-8 py-3 rounded-full transition-all duration-300 transform
                ${currentSlideIndex === totalSlides - 1 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' 
                  : 'bg-white text-black hover:bg-gray-100 hover:scale-105 active:scale-95 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)]'}`}
            >
              <span>{currentSlideIndex === totalSlides - 1 ? 'Finished' : 'Next Step'}</span>
              {currentSlideIndex !== totalSlides - 1 && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </footer>

      {/* AI Assistant Overlay */}
      <AITroubleshooter 
        currentSlideTitle={currentSlide.title}
        currentSlideContent={getSlideContentText()}
      />
    </div>
  );
};

export default App;