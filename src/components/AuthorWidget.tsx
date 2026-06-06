import React from 'react';
import { Author } from '../types';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function AuthorWidget({ author, updatedAt }: { author: Author, updatedAt: string }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/[0.05]">
      <img 
        src={author.avatar} 
        alt={author.name} 
        className="w-20 h-20 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all"
      />
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <div>
            <h4 className="text-white font-bold">{author.name}</h4>
            <p className="text-xs text-teal-400 font-medium">{author.role}</p>
          </div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            Last Updated: {new Date(updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
        <p className="text-sm text-slate-400 line-clamp-2 mb-4">
          {author.bio}
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          {[Twitter, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="text-slate-500 hover:text-teal-400 transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
