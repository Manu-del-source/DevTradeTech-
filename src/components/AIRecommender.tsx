import React, { useState } from 'react';
import { getRecommendation } from '../services/gemini';
import { Sparkles, Send, Loader2, Bot, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AIRecommender() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const result = await getRecommendation(input);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl border border-white/[0.08] overflow-hidden shadow-2xl">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center text-[#14B8A6]">
                <Bot size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AI Setup Consultant</h3>
                <p className="text-slate-400">Get personalized gear advice powered by Gemini 1.5</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <Info size={14} /> Expert Knowledge Base
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#14B8A6] to-[#F59E0B] rounded-2xl blur opacity-10 group-focus-within:opacity-20 transition duration-500" />
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your workflow, budget, and specific needs (e.g. 'I need a silent setup for late-night Go development on a $2500 budget...')"
                className="w-full bg-[#0F172A] border border-white/[0.1] rounded-2xl p-6 pr-20 text-slate-200 focus:outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] min-h-[140px] transition-all text-lg placeholder:text-slate-600"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="absolute right-4 bottom-4 w-12 h-12 bg-[#14B8A6] hover:bg-[#0D9488] text-[#0F172A] rounded-xl transition-all flex items-center justify-center shadow-lg shadow-teal-500/20 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} />}
              </button>
            </div>
          </form>

          <AnimatePresence mode="wait">
            {recommendation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12 p-8 bg-[#0F172A]/50 rounded-2xl border border-white/[0.05] relative"
              >
                <div className="flex items-center gap-2 text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-6">
                  <Sparkles size={14} fill="currentColor" /> AI Verdict
                </div>
                <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4">
                  <div dangerouslySetInnerHTML={{ __html: recommendation.replace(/\n/g, '<br/>') }} />
                </div>
                <div className="mt-10 pt-6 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-slate-600 uppercase tracking-widest font-bold">
                  <span>Knowledge cut-off: June 2026</span>
                  <button onClick={() => setRecommendation(null)} className="hover:text-white transition-colors">Start Over</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
