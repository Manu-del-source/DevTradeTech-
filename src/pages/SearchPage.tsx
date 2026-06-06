import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ChevronLeft, Search as SearchIcon, Compass, Zap } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const results = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query) ||
    p.tags.some(t => t.toLowerCase().includes(query)) ||
    Object.values(p.specs).some(v => v.toLowerCase().includes(query))
  );

  const breadcrumbs = [
    { label: 'Search', path: '/search' },
    { label: `Results for "${query}"` }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mb-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 border border-teal-500/20 shadow-xl shadow-teal-500/10">
              <SearchIcon size={32} />
            </div>
            <div>
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Search Results</div>
              <h1 className="text-4xl font-black text-white">Results for "{query}"</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {results.length > 0 ? (
            <div className="space-y-8">
              {results.map(product => (
                <ProductCard key={product.id} product={product} orientation="horizontal" />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 rounded-3xl bg-white/5 border border-white/10 glass-morphism">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-slate-700 mx-auto mb-8 border border-white/5">
                <Compass size={40} />
              </div>
              <p className="text-slate-300 font-black text-xl mb-4 italic">"I'm afraid I couldn't find any gear matching that."</p>
              <p className="text-slate-500 max-w-sm mx-auto mb-10 font-medium">Try searching for specific model names, specs like "M4 Max", or categories like "OLED monitors".</p>
              <Link to="/" className="btn-primary py-4 px-10 rounded-2xl">
                Return to Gear Hub
              </Link>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="mt-20 p-12 rounded-[40px] bg-teal-500/5 border border-teal-500/10 text-center">
            <h3 className="text-xl font-black text-white mb-4">Didn't find what you were looking for?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto font-medium">Our lab is constantly testing new gear. Suggest a product for review and we'll add it to our benchmark queue.</p>
            <Link to="/contact" className="text-teal-500 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:underline">
               Request a Review <Zap size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
