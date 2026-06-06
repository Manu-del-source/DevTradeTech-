import React from 'react';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="section-spacing pt-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-500 text-xs font-bold uppercase tracking-widest mb-8">
              <Shield size={14} /> Trust & Security
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Privacy Policy</h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              At DevTradeTech, we take your privacy seriously. This policy explains how we handle your data when you use our AI tools and browse our reviews.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="card p-8">
                <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center text-[#14B8A6] mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">Transparency</h3>
                <p className="text-sm text-slate-400 leading-relaxed">We are clear about what data we collect and why. No hidden tracking or dark patterns.</p>
              </div>
              <div className="card p-8">
                <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center text-[#F59E0B] mb-6">
                  <Lock size={24} />
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">Security</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Your AI interactions are encrypted and never sold to third-party data brokers.</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-slate-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="text-[#14B8A6]" size={24} /> 1. Data Collection
                </h2>
                <p className="mb-4">
                  We collect minimal data to provide our services. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-400">
                  <li><strong>AI Recommender Inputs:</strong> The text you provide to get gear advice is processed by Gemini 1.5 but is not stored permanently by DevTradeTech.</li>
                  <li><strong>Usage Data:</strong> Anonymous analytics about which categories and products are popular.</li>
                  <li><strong>Cookies:</strong> Essential cookies to remember your comparison list and preferences.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="text-[#14B8A6]" size={24} /> 2. Affiliate Disclosure
                </h2>
                <p className="text-slate-400">
                  DevTradeTech is a participant in the Amazon Services LLC Associates Program. When you click on our links and make a purchase, we may earn an affiliate commission at no extra cost to you. This helps fund our independent testing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">3. Third-Party Services</h2>
                <p className="text-slate-400">
                  We use Google's Gemini API to power our AI Consultant. By using the tool, your inputs are subject to Google's Privacy Policy. We do not share your personal identification with Google.
                </p>
              </section>

              <section className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-4">Questions?</h2>
                <p className="text-sm text-slate-400 mb-6">If you have any questions about how we handle your data, please reach out to our privacy team.</p>
                <a href="mailto:privacy@devtradetech.com" className="text-[#14B8A6] font-bold hover:underline">privacy@devtradetech.com</a>
              </section>
            </div>

            <div className="mt-20 pt-10 border-t border-white/[0.05] text-[10px] text-slate-600 uppercase tracking-widest font-bold">
              Last updated: June 6, 2026
            </div>
          </div>
        </FadeInSection>
      </div>
    </PageWrapper>
  );
}
