import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Award, Zap, Mail, MapPin, Globe } from 'lucide-react';

export function AboutPage() {
  const breadcrumbs = [{ label: 'About Us' }];

  return (
    <div className="min-h-screen bg-[#0F172A] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          The Authority in Professional <span className="text-teal-500">Performance Gear.</span>
        </h1>
        
        <div className="prose prose-invert max-w-none text-slate-400 space-y-8 text-lg leading-relaxed">
          <p className="font-bold text-white text-xl">
            DevTradeTech was founded with a single mission: to provide the most rigorous, data-driven hardware recommendations for developers, traders, and engineers.
          </p>
          
          <p>
            In an era where "sponsored reviews" and superficial "hands-on" impressions dominate tech media, we chose a different path. We believe that professional-grade work requires professional-grade tools, and choosing those tools should be based on benchmarks, not marketing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 not-prose">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Independent First</h3>
              <p className="text-sm text-slate-400">We buy 90% of the gear we review. When we receive review units, we disclose it immediately and maintain full editorial control over the results.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Benchmark Driven</h3>
              <p className="text-sm text-slate-400">Every laptop, monitor, and keyboard goes through our proprietary "DevFlow" test suite, measuring real-world productivity metrics.</p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-white">Our Review Methodology</h2>
          <p>
            We don't just "use" a product. We stress test it. For laptops, we measure kernel compilation times, Docker container startup latency, and multi-monitor thermal stability. For peripherals, we analyze actuation force, latency, and long-term ergonomic impact.
          </p>
          
          <div className="p-8 rounded-3xl bg-teal-500/10 border border-teal-500/20 my-12">
            <h4 className="text-white font-bold mb-4">Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="text-teal-500" size={18} />
                <span>editorial@devtradetech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-teal-500" size={18} />
                <span>www.devtradetech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-teal-500" size={18} />
                <span>Nairobi, Kenya / Remote Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
