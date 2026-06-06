import React from 'react';
import { Check, X } from 'lucide-react';

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-teal-500/5 border border-teal-500/10 rounded-2xl p-6">
        <h4 className="flex items-center gap-2 text-teal-400 font-bold mb-4 uppercase tracking-widest text-xs">
          <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
            <Check size={14} />
          </div>
          Pros
        </h4>
        <ul className="space-y-3">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="w-1 h-1 rounded-full bg-teal-500 mt-2 shrink-0" />
              {pro}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6">
        <h4 className="flex items-center gap-2 text-red-400 font-bold mb-4 uppercase tracking-widest text-xs">
          <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
            <X size={14} />
          </div>
          Cons
        </h4>
        <ul className="space-y-3">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="w-1 h-1 rounded-full bg-red-500 mt-2 shrink-0" />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
