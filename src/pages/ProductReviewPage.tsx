import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ShoppingCart, Share2, Bookmark, ArrowRight, ShieldCheck, Zap, Info } from 'lucide-react';
import { products, authors } from '../data/products';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RatingSummary } from '../components/RatingSummary';
import { ProsCons } from '../components/ProsCons';
import { AuthorWidget } from '../components/AuthorWidget';
import { BenchmarkSection } from '../components/BenchmarkSection';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export function ProductReviewPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);
  const author = authors.find(a => a.id === product?.authorId) || authors[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) return <Navigate to="/" replace />;

  const breadcrumbs = [
    { label: product.category, path: `/reviews/${product.category}` },
    { label: product.name }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] py-12">
      <Helmet>
        <title>{product.name} Review & Benchmarks | DevTradeTech</title>
        <meta name="description" content={`In-depth review of ${product.name}. Benchmarks, pros/cons, and technical specifications for professional users.`} />
        <meta property="og:title" content={`${product.name} Review - DevTradeTech`} />
        <meta property="og:image" content={product.image} />
      </Helmet>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Main Info */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {product.isTopPick && (
                  <span className="bg-amber-500/10 text-amber-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-amber-500/20 flex items-center gap-1">
                    <Zap size={10} fill="currentColor" /> Editor's Choice 2026
                  </span>
                )}
                <span className="bg-teal-500/10 text-teal-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-teal-500/20">
                  {product.budgetRange} Range
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {product.name} Review: Is it Still the Developer King?
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full border border-teal-500/30" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Reviewed by <span className="text-white font-bold">{author.name}</span></div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Updated June 2026</div>
                </div>
              </div>

              <div className="prose prose-invert max-w-none mb-10 text-slate-400 leading-relaxed">
                <p className="text-lg text-slate-300 font-medium">
                  {product.description}
                </p>
                <p>
                  In this comprehensive deep-dive, we put the {product.name} through our rigorous developer-centric testing suite. We evaluated its performance across various IDEs, build times for large codebases, and its overall reliability as a daily driver for professional workflows.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <a 
                  href={product.amazonLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary flex items-center gap-2 py-4 px-8 rounded-2xl shadow-xl shadow-teal-500/20"
                >
                  Check Price on Amazon <ShoppingCart size={18} />
                </a>
                <div className="flex gap-2">
                  <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors">
                    <Bookmark size={20} />
                  </button>
                  <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Image Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="sticky top-32"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#1E293B] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-2xl font-black text-white">${product.price}</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1">
                        <ShieldCheck size={14} className="text-teal-500" /> Authorized Retailer
                      </div>
                    </div>
                    <div className="space-y-3 mb-8">
                      {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                          <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{key}</span>
                          <span className="text-xs text-slate-200 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                    <a 
                      href={product.amazonLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full py-4 bg-teal-500 text-[#0F172A] rounded-xl font-black text-center block hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Professional Review Sections */}
        <div className="space-y-20">
          <section>
            <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">01</span>
              Verdict & Score
            </h2>
            <RatingSummary score={product.rating} breakdown={product.ratingBreakdown} />
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">02</span>
              Pros & Cons
            </h2>
            <ProsCons pros={product.pros} cons={product.cons} />
          </section>

          {product.benchmarks && (
            <section>
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">03</span>
                Technical Performance
              </h2>
              <BenchmarkSection benchmarks={product.benchmarks} />
            </section>
          )}

          <section>
             <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">04</span>
              Reviewer Notes
            </h2>
            <div className="bg-white/5 border border-white/[0.05] rounded-3xl p-8 leading-relaxed text-slate-300">
              <p className="mb-4">
                During our 2-week testing period, we primarily used this gear for a mix of TypeScript backend development and high-frequency trading simulations. The {product.name} consistently outperformed our expectations in terms of thermal stability and raw processing throughput.
              </p>
              <p>
                What sets this apart from competitors in the {product.category} category is the attention to detail in its firmware and driver support. We encountered zero compatibility issues with modern Linux kernels (WSL2) or macOS Sonoma.
              </p>
            </div>
          </section>

          <section>
            <div className="p-8 rounded-3xl bg-teal-500/5 border border-teal-500/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-teal-500/10 text-teal-500 rounded-lg">
                  <Info size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Review Methodology</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Our reviews are 100% independent. We purchase most equipment ourself, and when products are provided for review, we disclose that clearly. Our benchmark suite includes standard tools like Geekbench and Cinebench, plus real-world developer tasks like compiling the Linux kernel or indexing a 100k+ file codebase in VS Code.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-6">About the Author</h3>
            <AuthorWidget author={author} updatedAt={product.updatedAt} />
          </section>

          {/* Related Products Placeholder */}
          {product.relatedProductIds && (
            <section className="pt-10 border-t border-white/5">
              <h3 className="text-2xl font-black text-white mb-8">Related Comparisons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.relatedProductIds.map(id => {
                  const related = products.find(p => p.id === id);
                  if (!related) return null;
                  return (
                    <Link 
                      key={id} 
                      to={`/review/${id}`}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all"
                    >
                      <img src={related.image} alt={related.name} className="w-20 h-20 rounded-xl object-cover" />
                      <div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">{related.category}</div>
                        <div className="text-white font-bold group-hover:text-teal-400 transition-colors">{related.name} vs {product.name}</div>
                        <div className="text-[10px] text-teal-500/60 font-bold uppercase tracking-widest mt-1 flex items-center gap-1">
                          Read Comparison <ArrowRight size={10} />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
