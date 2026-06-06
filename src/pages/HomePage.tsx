import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';
import { AIRecommender } from '../components/AIRecommender';
import { categories } from '../data/products';
import { ChevronRight, Laptop, Monitor, Keyboard, Mouse } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap = { Laptop, Monitor, Keyboard, Mouse };

export function HomePage() {
  return (
    <PageWrapper>
      <FadeInSection>
        <div className="relative w-full rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80" 
              alt="Workspace" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-16 flex flex-col items-start max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-xs font-bold text-[#38bdf8] uppercase tracking-widest backdrop-blur-md">
                🚀 The Future of Workspaces
              </span>
            </motion.div>
            <h1 className="!text-left !mt-0 !mb-4 text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight">
              Optimize Your <span className="text-[#38bdf8] drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">Digital Edge</span>
            </h1>
            <p className="!text-left !ml-0 text-lg md:text-xl text-slate-400 mb-8 max-w-xl">
              Data-driven hardware reviews for developers and high-performance traders. Find the gear that keeps you ahead.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/reviews/best-laptops" className="px-8 py-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#020617] font-bold rounded-xl transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                Explore Gear
              </Link>
              <Link to="/compare" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-md border border-white/10 transition-all">
                Compare Specs
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="!m-0 !text-left text-2xl font-bold">Expert Reviews</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] || Laptop;
            return (
              <Link key={cat.id} to={cat.path} className="card group hover:border-[#38bdf8]/50">
                <div className="card-icon group-hover:bg-[#38bdf8]/20 group-hover:text-[#38bdf8] transition-all">
                  <Icon size={24} />
                </div>
                <div className="card-content">
                  <strong className="text-lg group-hover:text-white transition-colors">{cat.name}</strong>
                  <span className="text-sm text-slate-500 block mt-1">{cat.description}</span>
                </div>
                <ChevronRight className="text-slate-600 group-hover:text-[#38bdf8] transition-all transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <AIRecommender />
      </FadeInSection>
    </PageWrapper>
  );
}
