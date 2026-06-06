import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Monitor, ChevronRight } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A]">
      <header className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-bold logo flex items-center gap-2">
                <div className="w-10 h-10 bg-[#14B8A6] rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <Monitor className="text-[#0F172A]" size={22} strokeWidth={2.5} />
                </div>
                <span>DevTradeTech</span>
              </Link>
              
              <nav className="hidden lg:flex items-center gap-6">
                <Link to="/reviews/best-laptops" className="nav-link">Laptops</Link>
                <Link to="/reviews/best-monitors" className="nav-link">Monitors</Link>
                <Link to="/compare" className="nav-link">Compare</Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <form onSubmit={handleSearch} className="relative group">
                <input
                  type="text"
                  placeholder="Search gear..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#1E293B] border border-white/[0.08] rounded-xl py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] transition-all w-48 focus:w-64 text-slate-200"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#14B8A6]">
                  <Search size={16} />
                </button>
              </form>
              <Link to="/reviews/best-laptops" className="btn-primary py-2 px-5 text-sm">
                Explore Reviews
              </Link>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-slate-400">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1E293B] border-b border-white/[0.08] p-6 space-y-6">
            <nav className="flex flex-col gap-4">
              <Link to="/reviews/best-laptops" onClick={() => setIsMenuOpen(false)} className="text-slate-300 font-medium">Laptops</Link>
              <Link to="/reviews/best-monitors" onClick={() => setIsMenuOpen(false)} className="text-slate-300 font-medium">Monitors</Link>
              <Link to="/compare" onClick={() => setIsMenuOpen(false)} className="text-slate-300 font-medium">Compare</Link>
            </nav>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0F172A] border border-white/[0.08] rounded-xl py-3 pl-4 pr-10 text-sm focus:outline-none"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                <Search size={18} />
              </button>
            </form>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-[#0F172A] border-t border-white/[0.05] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="text-xl font-bold logo mb-6 block">DevTradeTech</Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Expert hardware reviews and data-driven recommendations for the modern professional workspace.
              </p>
            </div>
            <div>
              <h4 className="text-slate-200 font-semibold mb-6">Reviews</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/reviews/best-laptops" className="text-slate-400 hover:text-[#14B8A6] transition-colors">Best Laptops</Link></li>
                <li><Link to="/reviews/best-monitors" className="text-slate-400 hover:text-[#14B8A6] transition-colors">Trading Monitors</Link></li>
                <li><Link to="/reviews/best-keyboards" className="text-slate-400 hover:text-[#14B8A6] transition-colors">Keyboards</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-200 font-semibold mb-6">Tools</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/compare" className="text-slate-400 hover:text-[#14B8A6] transition-colors">Product Comparison</Link></li>
                <li><Link to="/" className="text-slate-400 hover:text-[#14B8A6] transition-colors">AI Recommender</Link></li>
                <li><Link to="/" className="text-slate-400 hover:text-[#14B8A6] transition-colors">Performance Benchmarks</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-200 font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/" className="text-slate-400 hover:text-[#14B8A6] transition-colors">About Us</Link></li>
                <li><Link to="/" className="text-slate-400 hover:text-[#14B8A6] transition-colors">Affiliate Policy</Link></li>
                <li><Link to="/" className="text-slate-400 hover:text-[#14B8A6] transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
            <p>© 2026 DevTradeTech. Built for professionals.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">Privacy</a>
              <a href="#" className="hover:text-slate-300">Terms</a>
              <a href="#" className="hover:text-slate-300">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
