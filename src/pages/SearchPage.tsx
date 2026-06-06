import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowLeft, Search as SearchIcon } from 'lucide-react';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const results = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query) ||
    Object.values(p.specs).some(v => v.toLowerCase().includes(query))
  );

  return (
    <PageWrapper>
      <FadeInSection>
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#38bdf8] transition-colors mb-4 text-sm font-medium">
            <ArrowLeft size={16} /> Back to Hub
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#38bdf8]/10 rounded-lg text-[#38bdf8]">
              <SearchIcon size={24} />
            </div>
            <h1 className="!text-left !m-0 text-3xl font-bold">Results for "{query}"</h1>
          </div>
        </div>
      </FadeInSection>

      <div className="space-y-4">
        {results.length > 0 ? (
          results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="text-center py-20 bg-[#0f172a]/50 rounded-2xl border border-white/5">
            <p className="text-slate-400 mb-6 italic">No products found matching your search. Try different keywords.</p>
            <Link to="/" className="text-[#38bdf8] hover:underline font-medium">Return to Homepage</Link>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
