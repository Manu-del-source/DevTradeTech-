import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { ChevronLeft, Layers, SlidersHorizontal, ArrowRight, Zap } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export function ReviewPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [loading, setLoading] = useState(true);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all' | 'Premium' | 'Mid-Range' | 'Budget'>('all');

  const category = categories.find(c => c.path.split('/').pop() === categoryId);
  const rawProducts = products.filter(p => p.category === categoryId);
  const filteredProducts = filter === 'all' ? rawProducts : rawProducts.filter(p => p.budgetRange === filter);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [categoryId]);

  const toggleCompare = (id: string) => {
    setCompareList(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const breadcrumbs = [
    { label: 'Reviews', path: '/' },
    { label: category?.name || 'Category' }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] py-12">
      <Helmet>
        <title>Best {category?.name} for Developers 2026 | DevTradeTech</title>
        <meta name="description" content={`Our top picks and in-depth reviews for the best ${category?.name} on the market. Tested for performance and reliability.`} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
              Best <span className="text-teal-500">{category?.name}</span> for Pros 2026.
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">{category?.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 shrink-0">
            <AnimatePresence>
              {compareList.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Link 
                    to={`/compare?ids=${compareList.join(',')}`}
                    className="btn-primary py-4 px-8 shadow-2xl shadow-teal-500/30 rounded-2xl flex items-center gap-3 text-sm"
                  >
                    <Layers size={20} /> Compare Gear ({compareList.length})
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide border-b border-white/5">
          <div className="text-slate-500 mr-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest shrink-0">
            <SlidersHorizontal size={14} /> Filter By:
          </div>
          {(['all', 'Premium', 'Mid-Range', 'Budget'] as const).map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                filter === f 
                  ? 'bg-teal-500 border-teal-500 text-[#0F172A]' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8">
          {loading ? (
            [1, 2, 3].map(i => (
              <div key={i} className="h-64 rounded-3xl animate-pulse bg-white/5 border border-white/10" />
            ))
          ) : (
            <div className="space-y-8">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ProductCard 
                    product={product} 
                    isComparing={compareList.includes(product.id)}
                    onCompareToggle={toggleCompare}
                    orientation="horizontal"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-32 rounded-3xl bg-white/5 border border-white/10 glass-morphism">
             <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-400 mx-auto mb-6">
              <Zap size={32} />
            </div>
            <p className="text-slate-300 font-black text-xl mb-4">No reviews found in this tier.</p>
            <button onClick={() => setFilter('all')} className="text-teal-500 font-bold hover:underline">Clear all filters</button>
          </div>
        )}

        {/* Category Expertise Section */}
        <div className="mt-32 p-12 rounded-[40px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 text-teal-500/5 rotate-12">
             <Zap size={200} />
           </div>
           <div className="relative z-10 max-w-2xl">
             <h3 className="text-2xl font-black text-white mb-6">How we test {category?.name}</h3>
             <p className="text-slate-400 leading-relaxed mb-8">
               Our testing lab evaluates each {category?.id.slice(0, -1)} for professional use cases. We measure metrics that manufacturers often hide, such as sustained performance under load, real-world color accuracy, and interface latency.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-widest">
                 <CheckCircle2 size={16} className="text-teal-500" /> 100% Independent
               </div>
               <div className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-widest">
                 <CheckCircle2 size={16} className="text-teal-500" /> Data Driven
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

const CheckCircle2 = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
