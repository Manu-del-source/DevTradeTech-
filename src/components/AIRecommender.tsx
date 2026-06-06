import React, { useState } from 'react';
import { getRecommendation } from '../services/gemini';
import { Sparkles, Send, Loader2 } from 'lucide-react';
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
    <div className="max-w-3xl mx-auto mt-12 mb-20 px-4">
      <div className="bg-[#0f172a]/80 backdrop-blur-md rounded-2xl border border-[#38bdf8]/20 p-8 shadow-[0_0_50px_rgba(56,189,248,0.1)]">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#38bdf8]/10 rounded-lg text-[#38bdf8]">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">AI Setup Consultant</h3>
            <p className="text-sm text-slate-400">Describe your workflow to get expert gear advice</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative mb-8">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. I need a setup for high-frequency trading and mobile app development on a $3000 budget..."
            className="w-full bg-[#1e293b]/50 border border-white/10 rounded-xl p-4 pr-16 text-slate-200 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] min-h-[100px] transition-all"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="absolute right-4 bottom-4 p-2 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#020617] rounded-lg transition-all disabled:opacity-50 disabled:hover:bg-[#38bdf8]"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
          </button>
        </form>

        <AnimatePresence mode="wait">
          {recommendation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-[#1e293b]/30 rounded-xl border border-white/5 prose prose-invert max-w-none prose-sm"
            >
              <div dangerouslySetInnerHTML={{ __html: recommendation.replace(/\n/g, '<br/>') }} />
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest">
                <span>Powered by Gemini 1.5 Flash</span>
                <button onClick={() => setRecommendation(null)} className="hover:text-[#38bdf8]">Clear</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
