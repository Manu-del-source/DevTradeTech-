import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';
import { AIRecommender } from '../components/AIRecommender';
import { ProductCard } from '../components/ProductCard';
import { products, categories, testimonials } from '../data/products';
import { ChevronRight, ArrowRight, ShieldCheck, Zap, Globe, Star, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function HomePage() {
  const topPicks = products.filter(p => p.isTopPick).slice(0, 3);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#14B8A6]/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#F59E0B]/5 blur-[100px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-500 text-xs font-bold uppercase tracking-widest mb-8">
              <Zap size={14} /> Performance First
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tighter">
              Find the Perfect <span className="text-[#14B8A6]">Tech Setup</span> for Pros
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Independent reviews, performance benchmarks, and expert recommendations for developers and traders who demand the best.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/reviews/best-laptops" className="btn-primary py-4 px-8 text-lg">
                Explore Reviews <ArrowRight size={20} />
              </Link>
              <Link to="/compare" className="btn-secondary py-4 px-8 text-lg">
                Compare Products
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-white/[0.05] pt-8">
              <div>
                <div className="text-2xl font-bold text-white">12k+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">User Reviews</div>
              </div>
              <div className="w-px h-10 bg-white/[0.05]" />
              <div>
                <div className="text-2xl font-bold text-white">450+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Tested Products</div>
              </div>
              <div className="w-px h-10 bg-white/[0.05]" />
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-[#0F172A]" src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">+50</div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-teal-500/20 blur-[60px] rounded-3xl group-hover:bg-teal-500/30 transition-all duration-500" />
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional Workspace" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-white/[0.05]">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl"><Globe size={24}/> GLOBAL TECH</div>
          <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck size={24}/> SECURE REVIEWS</div>
          <div className="font-bold text-xl">DEV HARDWARE</div>
          <div className="font-bold text-xl">QUANT DATA</div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="section-spacing">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Expert Reviews</h2>
            <p className="max-w-xl text-slate-400">Deep dives into the latest hardware, tested by engineers who understand the requirements of modern development and trading.</p>
          </div>
          <Link to="/reviews/best-laptops" className="text-[#14B8A6] font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
            View All Categories <ChevronRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.path} className="card p-8 group hover:border-[#14B8A6]/40">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-[#14B8A6] mb-6 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{cat.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Picks This Month */}
      <section className="section-spacing bg-white/[0.02] -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 rounded-3xl border border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Top Picks This Month</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The gold standard for professionals. These products have passed our rigorous performance and durability tests.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPicks.map(p => (
              <ProductCard key={p.id} product={p} orientation="vertical" />
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommender */}
      <section className="section-spacing">
        <AIRecommender />
      </section>

      {/* Testimonials */}
      <section className="section-spacing border-t border-white/[0.05]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Trusted by Pros</h2>
          <p className="text-slate-400">Join thousands of developers and traders who upgraded their setups with us.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="card p-8">
              <div className="flex gap-1 text-[#F59E0B] mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/[0.1]" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-spacing">
        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl p-8 md:p-16 border border-white/[0.08] relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#14B8A6]/5 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center text-[#14B8A6] mx-auto mb-8">
              <Mail size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10">Get weekly hardware benchmarks, secret discounts, and setup tips delivered to your inbox.</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-[#0F172A] border border-white/[0.1] rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-[#14B8A6]"
              />
              <button className="btn-primary py-3 px-8 font-bold">Subscribe</button>
            </form>
            <p className="mt-6 text-[10px] text-slate-600 uppercase tracking-widest font-bold">No spam. Only high-performance data.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h4 className="font-bold text-white mb-2">How do you test the products?</h4>
              <p className="text-sm text-slate-400">Our team runs real-world benchmarks: 4K video rendering, large-scale code compilation, and multi-chart high-frequency trading simulations.</p>
            </div>
            <div className="card p-6">
              <h4 className="font-bold text-white mb-2">Are the reviews independent?</h4>
              <p className="text-sm text-slate-400">Yes. We buy the majority of hardware ourselves and provide unbiased data. We may earn a small commission if you buy through our links, but it never influences our ratings.</p>
            </div>
            <div className="card p-6">
              <h4 className="font-bold text-white mb-2">Can I request a product review?</h4>
              <p className="text-sm text-slate-400">Absolutely! Use our contact form or tweet at us. We prioritize hardware that has high demand in the developer community.</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
