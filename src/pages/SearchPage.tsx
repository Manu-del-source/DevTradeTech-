import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ChevronLeft, Search as SearchIcon, Compass } from 'lucide-react';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const results = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query) ||
    p.tags.some(t => t.toLowerCase().includes(query)) ||
    Object.values(p.specs).some(v => v.toLowerCase().includes(query))
  );

  return (
    <PageWrapper>
      <div className="section-spacing pt-12">
        <FadeInSection>
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#14B8A6] transition-colors mb-6 text-sm font-medium">
              <ChevronLeft size={16} /> Hub
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-[#14B8A6] border border-white/[0.05]">
                <SearchIcon size={24} />
              </div>
              <h1 className="text-3xl font-extrabold text-white">Results for "{query}"</h1>
            </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 gap-8">
          {results.length > 0 ? (
            results.map(product => (
              <ProductCard key={product.id} product={product} orientation="horizontal" />
            ))
          ) : (
            <div className="text-center py-32 card bg-white/[0.02] border-dashed">
              <Compass size={48} className="text-slate-700 mx-auto mb-6" />
              <p className="text-slate-400 mb-8 max-w-sm mx-auto italic">No products found matching your search. Try different keywords or browse by category.</p>
              <Link to="/reviews/best-laptops" className="text-[#14B8A6] font-bold hover:underline">Browse All Reviews</Link>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
