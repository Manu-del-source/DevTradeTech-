import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Info } from 'lucide-react';

export function AffiliateDisclosurePage() {
  const breadcrumbs = [{ label: 'Affiliate Disclosure' }];

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 text-slate-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Affiliate Disclosure</h1>
        
        <div className="bg-teal-500/5 border border-teal-500/10 rounded-3xl p-8 mb-12 flex gap-6 items-start">
           <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 shrink-0">
             <ShieldCheck size={24} />
           </div>
           <div>
             <h4 className="text-white font-bold mb-2">Transparency Matters</h4>
             <p className="text-sm">We believe in being 100% transparent with our readers. This page explains how we fund our independent testing lab.</p>
           </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-6">
          <p>
            DevTradeTech is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
          <p>
            When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. These commissions help us keep our benchmarks unbiased and our content free for all users.
          </p>
          <p>
            <strong>Does it cost you more?</strong> No. The price you pay on Amazon is the same whether you use our affiliate link or go to Amazon directly.
          </p>
          <p>
            <strong>Does it influence reviews?</strong> Absolutely not. Our primary value is our technical integrity. We recommend gear based on benchmark performance and build quality. If a product fails our tests, we say so, regardless of affiliate potential.
          </p>
        </div>
      </div>
    </div>
  );
}
