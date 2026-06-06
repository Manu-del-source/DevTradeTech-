import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';
import { products } from '../data/products';
import { ChevronLeft, ShoppingCart, Star } from 'lucide-react';

export function ComparePage() {
  const [searchParams] = useSearchParams();
  const ids = searchParams.get('ids')?.split(',') || [];
  const compareProducts = products.filter(p => ids.includes(p.id));

  const specKeys = Array.from(new Set(
    compareProducts.flatMap(p => Object.keys(p.specs))
  ));

  return (
    <PageWrapper>
      <div className="section-spacing pt-12">
        <FadeInSection>
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#14B8A6] transition-colors mb-6 text-sm font-medium">
            <ChevronLeft size={16} /> Hub
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight">Hardware Comparison</h1>

          {compareProducts.length === 0 ? (
            <div className="text-center py-32 card bg-white/[0.02]">
              <p className="text-slate-400 mb-8 max-w-sm mx-auto">No products selected for comparison. Browse our reviews to find the best gear for your setup.</p>
              <Link to="/reviews/best-laptops" className="btn-primary">
                Browse Gear
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="p-6 text-left text-slate-500 text-xs font-bold uppercase tracking-widest border-b border-white/[0.05] bg-[#0F172A] sticky left-0 z-10 w-48">Spec</th>
                    {compareProducts.map(p => (
                      <th key={p.id} className="p-8 border-b border-white/[0.05] min-w-[300px] bg-[#1E293B]">
                        <div className="flex flex-col items-center gap-4">
                          <img src={p.image} className="w-32 h-20 object-cover rounded-lg border border-white/[0.1] shadow-lg" alt={p.name} />
                          <div className="text-center">
                            <div className="text-lg font-bold text-white mb-1">{p.name}</div>
                            <div className="flex items-center justify-center gap-1 text-[#F59E0B] mb-2">
                              <Star size={12} fill="currentColor" />
                              <span className="text-xs font-bold">{p.rating}</span>
                            </div>
                            <div className="text-[#14B8A6] font-bold text-xl">${p.price}</div>
                          </div>
                          <a 
                            href={p.amazonLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-primary py-2 px-6 text-xs w-full"
                          >
                            Buy Now <ShoppingCart size={14} />
                          </a>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  <tr>
                    <td className="p-6 font-bold text-slate-400 bg-white/[0.02] sticky left-0 z-10 text-sm">Budget Range</td>
                    {compareProducts.map(p => (
                      <td key={p.id} className="p-6 text-center text-white font-semibold text-sm">
                        <span className="bg-[#14B8A6]/10 text-[#14B8A6] px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border border-[#14B8A6]/20">
                          {p.budgetRange}
                        </span>
                      </td>
                    ))}
                  </tr>
                  {specKeys.map(key => (
                    <tr key={key} className="group hover:bg-white/[0.01] transition-colors">
                      <td className="p-6 font-bold text-slate-400 bg-white/[0.02] sticky left-0 z-10 text-sm">{key}</td>
                      {compareProducts.map(p => (
                        <td key={p.id} className="p-6 text-center text-slate-300 text-sm">
                          {p.specs[key] || <span className="text-slate-700">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-6 font-bold text-slate-400 bg-white/[0.02] sticky left-0 z-10 text-sm">Expert Verdict</td>
                    {compareProducts.map(p => (
                      <td key={p.id} className="p-8 text-center text-xs text-slate-400 italic leading-relaxed max-w-[300px] mx-auto">
                        {p.description}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </FadeInSection>
      </div>
    </PageWrapper>
  );
}
