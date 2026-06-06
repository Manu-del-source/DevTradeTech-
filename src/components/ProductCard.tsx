import React from 'react';
import { ExternalLink, Plus, Minus, Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  isComparing?: boolean;
  onCompareToggle?: (id: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

export function ProductCard({ product, isComparing, onCompareToggle, orientation = 'horizontal' }: ProductCardProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`card overflow-hidden flex ${isHorizontal ? 'flex-col sm:flex-row' : 'flex-col'} h-full`}
    >
      <div className={`relative ${isHorizontal ? 'sm:w-64 w-full h-48 sm:h-auto' : 'w-full h-48'} overflow-hidden bg-slate-800`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {product.isTopPick && (
            <span className="bg-[#F59E0B] text-[#0F172A] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
              Top Pick
            </span>
          )}
          <span className="bg-[#14B8A6] text-[#0F172A] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
            {product.budgetRange}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <div className="flex items-center gap-1 text-[#F59E0B]">
            <Star size={14} fill="currentColor" />
            <span className="text-sm font-bold">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-slate-400 mb-6 line-clamp-2">{product.description}</p>
        
        <Link 
          to={`/review/${product.id}`}
          className="text-teal-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1 mb-6 hover:text-teal-400 transition-colors group/link"
        >
          Read Full Review <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded-md border border-white/[0.05]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-white/[0.05] flex items-center justify-between">
          <div className="text-xl font-bold text-white">${product.price}</div>
          <div className="flex gap-2">
            {onCompareToggle && (
              <button 
                onClick={() => onCompareToggle(product.id)}
                className={`p-2 rounded-lg transition-all ${
                  isComparing 
                    ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                }`}
                title={isComparing ? "Remove from comparison" : "Add to comparison"}
              >
                {isComparing ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            )}
            <a 
              href={product.amazonLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary py-2 px-4 text-xs"
            >
              Shop <ShoppingCart size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
