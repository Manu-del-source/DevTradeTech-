import React from 'react';
import { Star } from 'lucide-react';
import { RatingBreakdown } from '../types';

interface RatingSummaryProps {
  score: number;
  breakdown?: RatingBreakdown;
}

export function RatingSummary({ score, breakdown }: RatingSummaryProps) {
  const categories = [
    { label: 'Performance', value: breakdown?.performance || 0 },
    { label: 'Design', value: breakdown?.design || 0 },
    { label: 'Value', value: breakdown?.value || 0 },
    { label: 'Features', value: breakdown?.features || 0 },
  ];

  return (
    <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] rounded-3xl p-8 glass-morphism">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-white/[0.05]"
              />
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={364.42}
                strokeDashoffset={364.42 - (364.42 * score) / 5}
                className="text-teal-500"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-white">{score}</span>
              <div className="flex text-teal-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} fill={i < Math.floor(score) ? "currentColor" : "none"} />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Overall Rating</p>
        </div>

        <div className="flex-1 w-full space-y-4">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex justify-between text-xs font-bold mb-1.5 uppercase tracking-wider">
                <span className="text-slate-400">{cat.label}</span>
                <span className="text-teal-400">{cat.value}/10</span>
              </div>
              <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal-500 transition-all duration-1000 ease-out"
                  style={{ width: `${(cat.value / 10) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
