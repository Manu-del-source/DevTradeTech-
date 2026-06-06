import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { 
  ChevronLeft, ShoppingCart, Star, ArrowRight, 
  ShieldCheck, Zap, Info, ArrowLeft
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { motion } from 'motion/react';

export function ComparePage() {
  const [searchParams] = useSearchParams();
  const ids = searchParams.get('ids')?.split(',') || [];
  const compareProducts = products.filter(p => ids.includes(p.id));

  // Determine top pick among selected
  const topPick = compareProducts.length > 0 
    ? [...compareProducts].sort((a, b) => b.rating - a.rating)[0]
    : null;

  const specKeys = Array.from(new Set(
    compareProducts.flatMap(p => Object.keys(p.specs))
  ));

  const breadcrumbs = [
    { label: 'Tools', path: '/compare' },
    { label: 'Product Comparison' }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Head-to-Head Comparison
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            We've benchmarked these tools side-by-side to help you choose the right gear for your development or trading workflow.
          </p>
        </div>

        {compareProducts.length === 0 ? (
          <div className="text-center py-32 rounded-3xl bg-white/5 border border-white/10 glass-morphism">
            <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-400 mx-auto mb-6">
              <Info size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">No gear selected</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Add products to comparison from our review pages to see them side-by-side.
            </p>
            <Link to="/" className="btn-primary py-3 px-8">
              Explore Top Picks
            </Link>
          </div>
        ) : (
          <div className="relative">
            <div className="overflow-x-auto pb-8 rounded-3xl">
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="p-8 text-left text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/5 bg-[#0F172A] sticky left-0 z-20 min-w-[200px]">
                      Feature Details
                    </th>
                    {compareProducts.map(p => (
                      <th key={p.id} className="p-0 border-b border-white/5 min-w-[320px] relative">
                        {topPick?.id === p.id && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-10">
                            <span className="bg-amber-500 text-[#0F172A] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-amber-500/20 flex items-center gap-1">
                              <Zap size={10} fill="currentColor" /> Best Performance
                            </span>
                          </div>
                        )}
                        <div className={`p-8 h-full flex flex-col items-center text-center ${topPick?.id === p.id ? 'bg-teal-500/5' : 'bg-[#1E293B]/30'}`}>
                          <motion.img 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            src={p.image} 
                            className="w-48 h-28 object-cover rounded-2xl border border-white/10 shadow-2xl mb-6" 
                            alt={p.name} 
                          />
                          <h3 className="text-xl font-black text-white mb-2 leading-tight">{p.name}</h3>
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="flex text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} fill={i < Math.floor(p.rating) ? "currentColor" : "none"} />
                              ))}
                            </div>
                            <span className="text-sm font-black text-white">{p.rating}</span>
                          </div>
                          <div className="text-3xl font-black text-teal-400 mb-6">${p.price}</div>
                          <div className="flex flex-col w-full gap-2">
                            <a 
                              href={p.amazonLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full py-3 bg-teal-500 text-[#0F172A] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-teal-400 transition-colors flex items-center justify-center gap-2"
                            >
                              Check Price <ShoppingCart size={14} />
                            </a>
                            <Link 
                              to={`/review/${p.id}`}
                              className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                            >
                              Read Review
                            </Link>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="group transition-colors">
                    <td className="p-8 font-black text-[10px] uppercase tracking-widest text-slate-500 bg-[#0F172A] sticky left-0 z-10">
                      Tier
                    </td>
                    {compareProducts.map(p => (
                      <td key={p.id} className={`p-8 text-center ${topPick?.id === p.id ? 'bg-teal-500/5' : ''}`}>
                        <span className="bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest font-black border border-white/10">
                          {p.budgetRange}
                        </span>
                      </td>
                    ))}
                  </tr>
                  {specKeys.map(key => (
                    <tr key={key} className="group transition-colors">
                      <td className="p-8 font-black text-[10px] uppercase tracking-widest text-slate-500 bg-[#0F172A] sticky left-0 z-10">
                        {key}
                      </td>
                      {compareProducts.map(p => (
                        <td key={p.id} className={`p-8 text-center text-sm font-medium ${topPick?.id === p.id ? 'bg-teal-500/5 text-white' : 'text-slate-400'}`}>
                          {p.specs[key] || <span className="text-slate-800">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-8 font-black text-[10px] uppercase tracking-widest text-slate-500 bg-[#0F172A] sticky left-0 z-10">
                      Top Pros
                    </td>
                    {compareProducts.map(p => (
                      <td key={p.id} className={`p-8 align-top ${topPick?.id === p.id ? 'bg-teal-500/5' : ''}`}>
                        <ul className="space-y-3">
                          {p.pros.slice(0, 3).map((pro, i) => (
                            <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                              <span className="text-teal-500 mt-0.5">•</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom Sticky Mobile CTA placeholder or desktop additional info */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 text-[#0F172A] rounded-2xl flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Safe Shopping Guarantee</h4>
                  <p className="text-xs text-slate-400">All prices are updated every 24 hours via Amazon API.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                  Export Comparison (PDF)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
