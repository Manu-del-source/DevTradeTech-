import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, Menu, X, Monitor, ChevronDown, 
  Github, Twitter, Linkedin, Mail, ExternalLink,
  Laptop, Keyboard, Mouse, TrendingUp, Headphones, BookOpen
} from 'lucide-react';
import { categories } from '../data/products';

export function Layout({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop size={18} />;
      case 'Monitor': return <Monitor size={18} />;
      case 'Keyboard': return <Keyboard size={18} />;
      case 'Mouse': return <Mouse size={18} />;
      case 'TrendingUp': return <TrendingUp size={18} />;
      case 'Headphones': return <Headphones size={18} />;
      default: return <Monitor size={18} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A] text-slate-200 selection:bg-teal-500/30">
      {/* Top Bar / Affiliate Disclosure Mini */}
      <div className="bg-teal-500/10 border-b border-teal-500/10 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 text-[10px] uppercase tracking-widest text-teal-500/60 font-medium text-center">
          As an Amazon Associate, we earn from qualifying purchases.
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/[0.05] py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center gap-10">
              <Link to="/" className="text-2xl font-bold logo flex items-center gap-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
                  <Monitor className="text-[#0F172A]" size={22} strokeWidth={2.5} />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                  DevTradeTech
                </span>
              </Link>
              
              <nav className="hidden lg:flex items-center gap-8">
                <div className="relative group/menu">
                  <button className="flex items-center gap-1 nav-link py-2 text-sm font-medium">
                    Reviews <ChevronDown size={14} className="group-hover/menu:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-[#1E293B] border border-white/[0.08] rounded-2xl shadow-2xl p-4 min-w-[480px] grid grid-cols-2 gap-2 glass-morphism">
                      {categories.map((cat) => (
                        <Link 
                          key={cat.id}
                          to={cat.path}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                        >
                          <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-400 group-hover/item:bg-teal-500 group-hover/item:text-[#0F172A] transition-colors">
                            {getCategoryIcon(cat.icon)}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white mb-0.5">{cat.name}</div>
                            <div className="text-xs text-slate-400 line-clamp-1">{cat.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <Link to="/compare" className="nav-link text-sm font-medium">Compare Gear</Link>
                <Link to="/" className="nav-link text-sm font-medium">Buying Guides</Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <form onSubmit={handleSearch} className="relative group">
                <input
                  type="text"
                  placeholder="Search gear..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#1E293B]/50 border border-white/[0.08] rounded-xl py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all w-48 focus:w-64 text-slate-200"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-teal-400">
                  <Search size={16} />
                </button>
              </form>
              <Link to="/reviews/laptops" className="btn-primary py-2.5 px-6 text-xs uppercase tracking-widest font-bold">
                Top Picks 2026
              </Link>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#1E293B] border-b border-white/[0.08] p-6 space-y-8 animate-in slide-in-from-top duration-300">
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Categories</div>
              <nav className="grid grid-cols-1 gap-2">
                {categories.map((cat) => (
                  <Link 
                    key={cat.id}
                    to={cat.path} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 text-slate-300 font-medium"
                  >
                    <div className="text-teal-400">{getCategoryIcon(cat.icon)}</div>
                    {cat.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Tools</div>
              <nav className="grid grid-cols-1 gap-2">
                <Link to="/compare" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 text-slate-300 font-medium">
                  <TrendingUp size={18} className="text-teal-400" /> Compare Tools
                </Link>
                <Link to="/" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 text-slate-300 font-medium">
                  <BookOpen size={18} className="text-teal-400" /> Buying Guides
                </Link>
              </nav>
            </div>

            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0F172A] border border-white/[0.08] rounded-xl py-4 pl-4 pr-12 text-sm focus:outline-none focus:border-teal-500"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-500">
                <Search size={20} />
              </button>
            </form>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-[#080E1E] border-t border-white/[0.05] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4">
              <Link to="/" className="text-2xl font-bold logo mb-6 block">DevTradeTech</Link>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                The leading authority for developers and traders seeking data-driven hardware reviews. We benchmark so you can build better.
              </p>
              <div className="flex gap-4">
                {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-[#0F172A] transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Reviews</h4>
              <ul className="space-y-4 text-sm">
                {categories.slice(0, 4).map(cat => (
                  <li key={cat.id}>
                    <Link to={cat.path} className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                      <ChevronDown size={12} className="-rotate-90" /> {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Guides</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/" className="text-slate-400 hover:text-teal-400 transition-colors">Developer Setups</Link></li>
                <li><Link to="/" className="text-slate-400 hover:text-teal-400 transition-colors">Trading Battlestations</Link></li>
                <li><Link to="/compare" className="text-slate-400 hover:text-teal-400 transition-colors">Comparison Tool</Link></li>
                <li><Link to="/" className="text-slate-400 hover:text-teal-400 transition-colors">Review Methodology</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.05] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-teal-500/20 group-hover:text-teal-500/40 transition-colors">
                  <Mail size={40} />
                </div>
                <h4 className="text-white font-bold mb-2">Weekly Gear Drops</h4>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Join 12,000+ developers getting exclusive hardware deals and benchmark reports.
                </p>
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="dev@example.com" 
                    className="flex-1 bg-[#0F172A] border border-white/[0.1] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-teal-500 transition-colors"
                  />
                  <button className="bg-teal-500 text-[#0F172A] px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-teal-400 transition-colors">
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/[0.05]">
            <div className="bg-white/[0.02] rounded-2xl p-6 mb-10 border border-white/[0.03]">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-teal-500 font-bold mb-3">Affiliate Disclosure</h5>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                DevTradeTech is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases. This helps us keep our benchmarks unbiased and our content free.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] uppercase tracking-widest font-medium">
              <p>© 2026 DevTradeTech. Verified Performance Engineering.</p>
              <div className="flex gap-8">
                <Link to="/about" className="hover:text-teal-400 transition-colors">About</Link>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
                <Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
                <Link to="/affiliate-disclosure" className="hover:text-teal-400 transition-colors">Affiliate Disclosure</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
