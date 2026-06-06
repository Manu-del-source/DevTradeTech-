import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories, guides, authors } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  ArrowRight, ShieldCheck, Zap, Star, Mail, 
  TrendingUp, BookOpen, Award, CheckCircle2, 
  Clock, ArrowUpRight, Search
} from 'lucide-react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  const featuredProduct = products.find(p => p.isTopPick && p.category === 'laptops') || products[0];
  const latestReviews = [...products].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 4);
  const editorsChoice = products.filter(p => p.isTopPick).slice(0, 3);
  const trendingTech = products.slice(2, 8); // Just a sample for trending

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Helmet>
        <title>DevTradeTech | High-Performance Tech Reviews for Developers & Traders</title>
        <meta name="description" content="Expert hardware reviews, data-driven benchmarks, and professional workstation guides for the modern engineer." />
        <meta property="og:title" content="DevTradeTech - The Authority in Professional Performance Gear" />
        <meta property="og:description" content="Benchmark-driven tech reviews for developers and traders." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* 1. Hero / Featured Publication Section */}
      <section className="relative pt-8 pb-20 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Main Featured Article */}
            <div className="lg:col-span-8 group">
              <Link to={`/review/${featuredProduct.id}`} className="relative block h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-teal-500 text-[#0F172A] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      Featured Review
                    </span>
                    <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <Clock size={12} /> 5 min read
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight group-hover:text-teal-400 transition-colors">
                    {featuredProduct.name}: Why every developer is switching this year.
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 line-clamp-2 max-w-2xl font-medium">
                    {featuredProduct.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={authors[0].avatar} className="w-10 h-10 rounded-full border-2 border-teal-500" alt={authors[0].name} />
                    <div>
                      <div className="text-sm font-bold text-white">{authors[0].name}</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Lead Tech Reviewer</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Sidebar Featured / Trending */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex-1 glass-morphism relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 text-teal-500/10 group-hover:text-teal-500/20 transition-colors">
                  <TrendingUp size={120} />
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <TrendingUp size={16} className="text-teal-500" /> Trending Gear
                </h3>
                <div className="space-y-6">
                  {trendingTech.slice(0, 5).map((p, i) => (
                    <Link key={p.id} to={`/review/${p.id}`} className="flex items-center gap-4 group/item">
                      <div className="text-2xl font-black text-slate-800 group-hover/item:text-teal-500 transition-colors">0{i+1}</div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover/item:text-teal-400 transition-colors">{p.name}</div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{p.category}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Latest Reviews Grid */}
      <section className="py-20 bg-[#080E1E]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-teal-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Fresh from the lab</div>
              <h2 className="text-4xl font-black text-white">Latest Benchmarks</h2>
            </div>
            <Link to="/reviews/laptops" className="text-xs font-black text-slate-500 uppercase tracking-widest hover:text-teal-500 transition-colors flex items-center gap-2 group">
              Explore All Reviews <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestReviews.map((p) => (
              <ProductCard key={p.id} product={p} orientation="vertical" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Categories Mega Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white mb-4">Gear Directories</h2>
            <p className="text-slate-400 font-medium">Every component tested for reliability and peak output.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={cat.path} 
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/5 transition-all text-center"
              >
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 mx-auto mb-4 group-hover:scale-110 transition-transform">
                   <Zap size={24} />
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-widest">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Editor's Choice Highlight */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-teal-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest mb-8">
                <Award size={14} /> The Gold Standard 2026
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
                Our Editor's Choice Recommendations.
              </h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
                We've spent over 500 hours testing 100+ hardware combinations. These are the tools that actually made it into our own daily workflows.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Verified performance benchmarks',
                  'Unbiased long-term reliability reports',
                  'Developer-centric workflow testing',
                  'Deep-dive technical specifications'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-teal-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/compare" className="btn-primary py-4 px-10 rounded-2xl shadow-2xl shadow-teal-500/20">
                Compare Top Picks
              </Link>
            </div>
            <div className="space-y-6">
              {editorsChoice.map((p, i) => (
                <Link 
                  key={p.id} 
                  to={`/review/${p.id}`}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/30 hover:bg-white/[0.08] transition-all group"
                >
                  <img src={p.image} className="w-24 h-24 rounded-2xl object-cover" alt={p.name} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-black text-white group-hover:text-teal-400 transition-colors">{p.name}</h4>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs font-black">{p.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{p.category} • Top Rated</p>
                  </div>
                  <ArrowUpRight size={24} className="text-slate-800 group-hover:text-teal-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Buying Guides Section */}
      <section className="py-20 bg-[#080E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-white flex items-center gap-4">
              <BookOpen className="text-teal-500" /> Buying Guides
            </h2>
            <Link to="/" className="text-xs font-black text-slate-500 uppercase tracking-widest hover:text-teal-500 transition-colors">
              Read All Guides
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Link 
                key={guide.id} 
                to="/" 
                className="group relative h-80 rounded-3xl overflow-hidden border border-white/10 shadow-xl"
              >
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="bg-teal-500 text-[#0F172A] text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-4">
                    {guide.category}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 leading-tight group-hover:text-teal-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-1 font-medium">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Professional Trust Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-black text-white">Independent Testing</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">We purchase the majority of gear ourselves. No brand deals influence our benchmark data.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h4 className="text-xl font-black text-white">Developer Focused</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">We benchmark for real-world code compilation, IDE latency, and build throughput.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 mx-auto mb-6">
                <Search size={32} />
              </div>
              <h4 className="text-xl font-black text-white">Transparent Data</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">All performance scores are verified and updated every 6 months to ensure relevance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
