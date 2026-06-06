import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';
import { ProductCard } from '../components/ProductCard';
import { SkeletonCard } from '../components/Skeleton';
import { products, categories } from '../data/products';
import { ArrowLeft, Layers } from 'lucide-react';

export function ReviewPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [loading, setLoading] = useState(true);
  const [compareList, setCompareList] = useState<string[]>([]);

  const category = categories.find(c => c.path.split('/').pop() === categoryId);
  const filteredProducts = products.filter(p => p.category === categoryId?.split('-').pop());

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [categoryId]);

  const toggleCompare = (id: string) => {
    setCompareList(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <PageWrapper>
      <FadeInSection>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#38bdf8] transition-colors mb-4 text-sm font-medium">
              <ArrowLeft size={16} /> Back to Hub
            </Link>
            <h1 className="!text-left !m-0 text-3xl font-bold">{category?.name || 'Hardware Reviews'}</h1>
          </div>
          
          {compareList.length > 0 && (
            <Link 
              to={`/compare?ids=${compareList.join(',')}`}
              className="flex items-center gap-3 px-6 py-3 bg-[#38bdf8] text-[#020617] rounded-xl font-bold shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-all"
            >
              <Layers size={20} /> Compare Selected ({compareList.length})
            </Link>
          )}
        </div>
      </FadeInSection>

      <div className="space-y-4">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isComparing={compareList.includes(product.id)}
              onCompareToggle={toggleCompare}
            />
          ))
        )}
      </div>

      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 italic">No reviews found in this category yet. Check back soon!</p>
        </div>
      )}
    </PageWrapper>
  );
}
