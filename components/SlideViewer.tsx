import React from 'react';
import { SlideStep, SlideType } from '../types';
import CodeSnippet from './CodeSnippet';
import { Info, Terminal } from 'lucide-react';

interface SlideViewerProps {
  slide: SlideStep;
}

const SlideViewer: React.FC<SlideViewerProps> = ({ slide }) => {
  return (
    <div key={slide.id} className="w-full max-w-4xl mx-auto animate-fade-in px-6 md:px-0">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 animate-slide-up">
          {slide.title}
        </h1>
        <div className="h-1 w-20 bg-immich rounded-full animate-slide-up" style={{ animationDelay: '100ms' }}></div>
      </div>

      {/* Content Layout */}
      <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-xl">
          
          {/* Main Text Content */}
          <div className="prose prose-invert max-w-none mb-6 text-lg text-gray-300">
            {slide.content}
          </div>

          {/* Conditional Rendering based on Slide Type */}
          
          {slide.type === SlideType.INTRO && slide.image && (
             <div className="mt-6 rounded-xl overflow-hidden border border-gray-700 opacity-80 hover:opacity-100 transition-opacity duration-500">
               <img src={slide.image} alt="Cover" className="w-full h-64 object-cover" />
             </div>
          )}

          {slide.type === SlideType.CODE && slide.code && (
            <div className="mt-2">
              <div className="flex items-center space-x-2 text-immich-light mb-2 text-sm font-semibold uppercase tracking-widest">
                <Terminal className="w-4 h-4" />
                <span>Terminal Command</span>
              </div>
              <CodeSnippet code={slide.code} language={slide.codeLanguage} />
            </div>
          )}

          {slide.note && (
            <div className="mt-6 flex items-start space-x-3 p-4 bg-blue-900/20 border border-blue-800/50 rounded-lg">
              <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-200">{slide.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideViewer;