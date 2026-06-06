import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, MessageSquare, Twitter, Github, Linkedin, Send } from 'lucide-react';

export function ContactPage() {
  const breadcrumbs = [{ label: 'Contact' }];

  return (
    <div className="min-h-screen bg-[#0F172A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Get in <span className="text-teal-500">Touch.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 font-medium">
              Have a gear question? Interested in a partnership? Or just want to talk tech benchmarks? We're all ears.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-teal-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">General Inquiries</h4>
                  <p className="text-slate-400">hello@devtradetech.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-teal-500 shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Review Requests</h4>
                  <p className="text-slate-400">editorial@devtradetech.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-6">Social Channels</h4>
              <div className="flex gap-4">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-[#0F172A] transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 glass-morphism">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Full Name</label>
                  <input type="text" className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-teal-500 transition-colors" placeholder="Linus Torvalds" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
                  <input type="email" className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-teal-500 transition-colors" placeholder="linus@linux.org" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Subject</label>
                <select className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-teal-500 transition-colors appearance-none">
                  <option>General Question</option>
                  <option>Review Request</option>
                  <option>Bug Report</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Message</label>
                <textarea rows={6} className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none" placeholder="How can we help you upgrade your setup?"></textarea>
              </div>
              <button className="w-full py-5 bg-teal-500 text-[#0F172A] rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-teal-400 transition-colors flex items-center justify-center gap-3 shadow-xl shadow-teal-500/20">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
