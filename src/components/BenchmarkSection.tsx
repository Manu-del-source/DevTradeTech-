import React from 'react';
import { Benchmark } from '../types';

export function BenchmarkSection({ benchmarks }: { benchmarks: Benchmark[] }) {
  if (!benchmarks || benchmarks.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-3">
        Performance Benchmarks
        <span className="h-px flex-1 bg-white/10" />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benchmarks.map((b, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-end mb-2">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Standard Test</div>
                <div className="text-sm font-bold text-white">{b.label}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-teal-400 leading-none">{b.value}</div>
              </div>
            </div>
            <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-600 to-teal-400 transition-all duration-1000 delay-300"
                style={{ width: `${b.score || 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
