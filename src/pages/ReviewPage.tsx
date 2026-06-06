import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { ChevronLeft, Layers, SlidersHorizontal } from 'lucide-react';

export function ReviewPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [loading, setLoading] = useState(true);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all' | 'Premium' | 'Mid-Range' | 'Budget'>('all');

  const category = categories.find(c => c.path.split('/').pop() === categoryId);
  const rawProducts = products.filter(p => p.category === categoryId?.split('-').pop());
  const filteredProducts = filter === 'all' ? rawProducts : rawProducts.filter(p => p.budgetRange === filter);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [categoryId]);

  const toggleCompare = (id: string) => {
    setCompareList(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <PageWrapper>
      <div className="section-spacing pt-12">
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#14B8A6] transition-colors mb-6 text-sm font-medium">
                <ChevronLeft size={16} /> Hub
              </Link>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{category?.name || 'Expert Reviews'}</h1>
              <p className="text-lg text-slate-400">{category?.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {compareList.length > 0 && (
                <Link 
                  to={`/compare?ids=${compareList.join(',')}`}
                  className="btn-primary py-3 px-6 shadow-xl shadow-teal-500/20"
                >
                  <Layers size={20} /> Compare Selected ({compareList.length})
                </Link>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
            <div className="text-slate-500 mr-2"><SlidersHorizontal size={18} /></div>
            {(['all', 'Premium', 'Mid-Range', 'Budget'] as const).map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                  filter === f 
                    ? 'bg-[#14B8A6] border-[#14B8A6] text-[#0F172A]' 
                    : 'bg-transparent border-white/[0.08] text-slate-400 hover:border-white/[0.2]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 gap-8">
          {loading ? (
            [1, 2, 3].map(i => (
              <div key={i} className="card h-64 animate-pulse bg-slate-800/50" />
            ))
          ) : (
            filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isComparing={compareList.includes(product.id)}
                onCompareToggle={toggleCompare}
                orientation="horizontal"
              />
            ))
          )}
        </div>

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-32 card bg-white/[0.02]">
            <p className="text-slate-500 italic">No reviews found matching your filter.</p>
            <button onClick={() => setFilter('all')} className="mt-4 text-[#14B8A6] font-bold">Reset Filters</button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
