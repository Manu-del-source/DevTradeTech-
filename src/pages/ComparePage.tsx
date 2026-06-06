import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';
import { products } from '../data/products';
import { ArrowLeft, X, ShoppingCart } from 'lucide-react';

export function ComparePage() {
  const [searchParams] = useSearchParams();
  const ids = searchParams.get('ids')?.split(',') || [];
  const compareProducts = products.filter(p => ids.includes(p.id));

  // Get all unique spec keys across selected products
  const specKeys = Array.from(new Set(
    compareProducts.flatMap(p => Object.keys(p.specs))
  ));

  return (
    <PageWrapper>
      <FadeInSection>
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#38bdf8] transition-colors mb-4 text-sm font-medium">
          <ArrowLeft size={16} /> Back to Hub
        </Link>
        <h1 className="!text-left !m-0 text-3xl font-bold mb-8">Hardware Comparison</h1>

        {compareProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#0f172a]/50 rounded-2xl border border-white/5">
            <p className="text-slate-400 mb-6">No products selected for comparison.</p>
            <Link to="/reviews/best-laptops" className="px-6 py-3 bg-[#38bdf8] text-[#020617] rounded-xl font-bold">
              Browse Gear
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto pb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-slate-500 font-medium border-b border-white/5 w-48">Specification</th>
                  {compareProducts.map(p => (
                    <th key={p.id} className="p-4 border-b border-white/5 min-w-[250px]">
                      <div className="flex flex-col items-center gap-3">
                        <div className="text-lg font-bold text-white text-center">{p.name}</div>
                        <div className="text-[#38bdf8] font-bold">${p.price}</div>
                        <a 
                          href={p.amazonLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-[#38bdf8]/20 transition-all"
                        >
                          View on Amazon <ShoppingCart size={12} />
                        </a>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-white/[0.02]">Price</td>
                  {compareProducts.map(p => (
                    <td key={p.id} className="p-4 text-center font-bold text-white">${p.price}</td>
                  ))}
                </tr>
                {specKeys.map(key => (
                  <tr key={key} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 font-bold text-slate-400 bg-white/[0.02]">{key}</td>
                    {compareProducts.map(p => (
                      <td key={p.id} className="p-4 text-center text-slate-300 text-sm">
                        {p.specs[key] || <span className="text-slate-600">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4 font-bold text-slate-400 bg-white/[0.02]">Description</td>
                  {compareProducts.map(p => (
                    <td key={p.id} className="p-4 text-center text-xs text-slate-500 italic leading-relaxed">
                      {p.description}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </FadeInSection>
    </PageWrapper>
  );
}
