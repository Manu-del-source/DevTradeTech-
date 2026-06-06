import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Laptop } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold logo flex items-center gap-2">
                <Laptop className="text-[#38bdf8]" />
                <span className="hidden sm:inline">DevTradeTech</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/reviews/best-laptops" className="nav-link">Laptops</Link>
              <Link to="/reviews/best-monitors" className="nav-link">Monitors</Link>
              <Link to="/compare" className="nav-link">Compare</Link>
              <form onSubmit={handleSearch} className="relative group">
                <input
                  type="text"
                  placeholder="Search hardware..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#1e293b]/50 border border-white/10 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all w-48 focus:w-64"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#38bdf8]">
                  <Search size={16} />
                </button>
              </form>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0f172a] border-b border-white/5 p-4 space-y-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white">Home</Link>
              <Link to="/reviews/best-laptops" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white">Laptops</Link>
              <Link to="/reviews/best-monitors" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white">Monitors</Link>
              <Link to="/compare" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white">Compare</Link>
            </nav>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={16} />
              </button>
            </form>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-[#01030a] border-top border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 text-sm">© 2026 DevTradeTech. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs">Terms of Service</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs">Affiliate Disclosure</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
