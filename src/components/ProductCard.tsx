import React from 'react';
import { ExternalLink, Plus, Minus, Laptop, Monitor, Keyboard, Mouse } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  isComparing?: boolean;
  onCompareToggle?: (id: string) => void;
}

const icons = {
  laptops: Laptop,
  monitors: Monitor,
  keyboards: Keyboard,
  mice: Mouse
};

export function ProductCard({ product, isComparing, onCompareToggle }: ProductCardProps) {
  const Icon = icons[product.category] || Laptop;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6"
    >
      <div className="card-icon">
        <Icon size={24} />
      </div>
      
      <div className="card-content flex-1">
        <div className="flex justify-between items-start mb-1">
          <strong className="text-xl">{product.name}</strong>
          <span className="text-[#38bdf8] font-bold">${product.price}</span>
        </div>
        <p className="!text-left !m-0 !max-w-none text-sm text-slate-400 mb-4">{product.description}</p>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-4">
          {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
            <div key={key} className="text-[10px] uppercase tracking-wider text-slate-500">
              <span className="font-semibold text-slate-400">{key}:</span> {value}
            </div>
          ))}
        </div>
      </div>

      <div className="flex sm:flex-col gap-2 w-full sm:w-auto mt-4 sm:mt-0">
        <a 
          href={product.amazonLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 sm:w-32 px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-all flex items-center justify-center gap-2 text-sm font-medium border border-[#38bdf8]/20"
        >
          Buy <ExternalLink size={14} />
        </a>
        
        {onCompareToggle && (
          <button 
            onClick={() => onCompareToggle(product.id)}
            className={`flex-1 sm:w-32 px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-medium border ${
              isComparing 
                ? 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20' 
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
            }`}
          >
            {isComparing ? <><Minus size={14} /> Remove</> : <><Plus size={14} /> Compare</>}
          </button>
        )}
      </div>
    </motion.div>
  );
}
