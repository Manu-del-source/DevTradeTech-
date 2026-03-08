import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Laptop, Monitor, Wrench, ChevronRight, Keyboard, Mouse } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function useSimulatedLoading(delay = 800) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return loading;
}

function SkeletonCard() {
  return (
    <li className="card animate-pulse">
      <div className="card-icon bg-slate-700/50"></div>
      <div className="card-content w-full">
        <div className="h-5 bg-slate-700/50 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
      </div>
      <div className="px-4 py-2 bg-slate-700/50 rounded-lg w-32 h-9 flex-shrink-0"></div>
    </li>
  );
}

function SkeletonCategoryCard() {
  return (
    <li>
      <div className="card group animate-pulse">
        <div className="card-icon bg-slate-700/50"></div>
        <div className="card-content w-full">
          <div className="h-5 bg-slate-700/50 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
        </div>
        <div className="w-6 h-6 bg-slate-700/50 rounded-full flex-shrink-0"></div>
      </div>
    </li>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="page-container"
    >
      {children}
    </motion.div>
  );
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-md p-4 shadow-lg flex justify-center sm:justify-between items-center border-b border-white/5 flex-wrap gap-4">
        <div className="text-2xl font-bold tracking-tight text-[#f8fafc]">
          <Link to="/" className="logo transition-colors duration-300">DevTradeTech</Link>
        </div>
        <nav className="flex gap-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/reviews/best-laptops" className="nav-link">Laptops</Link>
          <Link to="/reviews/best-monitors" className="nav-link">Monitors</Link>
          <Link to="/tools/laptop-recommender" className="nav-link">Tools</Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer>
        <p>© 2026 DevTradeTech. All rights reserved.</p>
      </footer>
    </>
  );
}

function HomePage() {
  const loading = useSimulatedLoading();

  return (
    <PageWrapper>
      <FadeInSection>
        <div className="relative w-full rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
          <div className="absolute inset-0">
            <img 
              src="https://picsum.photos/seed/workspace/1920/1080?blur=2" 
              alt="Developer and Trading Setup" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-16 flex flex-col items-start max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e293b]/80 border border-[#38bdf8]/30 text-sm font-medium text-[#7dd3fc] shadow-[0_0_15px_rgba(56,189,248,0.15)] backdrop-blur-md">
                🚀 Trusted by Developers & Traders
              </span>
            </div>
            <h1 className="!text-left !mt-0 !mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Elevate Your <span className="text-[#38bdf8]">Workspace</span>
            </h1>
            <p className="!text-left !ml-0 text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
              Your ultimate hub for Developer Tech and Trading Setup Reviews. Discover the gear that maximizes your productivity and edge.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/reviews/best-laptops" className="px-6 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#020617] font-semibold rounded-lg transition-all transform active:scale-[0.98] shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]">
                Explore Reviews
              </Link>
              <Link to="/tools/laptop-recommender" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-md border border-white/10 transition-all">
                Find Your Setup
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <h2>Developer & Trading Reviews</h2>
        <ul>
          {loading ? (
            <>
              <SkeletonCategoryCard />
              <SkeletonCategoryCard />
              <SkeletonCategoryCard />
              <SkeletonCategoryCard />
            </>
          ) : (
            <>
              <li>
                <Link to="/reviews/best-laptops" className="card group">
                  <div className="card-icon">
                    <Laptop size={24} />
                  </div>
                  <div className="card-content">
                    <strong>Best Laptops for Programming</strong>
                    <span className="text-sm text-slate-400 block mt-1">Top picks for coding and development</span>
                  </div>
                  <ChevronRight className="text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/reviews/best-monitors" className="card group">
                  <div className="card-icon">
                    <Monitor size={24} />
                  </div>
                  <div className="card-content">
                    <strong>Best Monitors for Trading</strong>
                    <span className="text-sm text-slate-400 block mt-1">Ultrawide and multi-monitor setups</span>
                  </div>
                  <ChevronRight className="text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/reviews/best-keyboards" className="card group">
                  <div className="card-icon">
                    <Keyboard size={24} />
                  </div>
                  <div className="card-content">
                    <strong>Best Keyboards for Coding</strong>
                    <span className="text-sm text-slate-400 block mt-1">Mechanical and ergonomic picks</span>
                  </div>
                  <ChevronRight className="text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/reviews/best-mice" className="card group">
                  <div className="card-icon">
                    <Mouse size={24} />
                  </div>
                  <div className="card-content">
                    <strong>Best Mice for Productivity</strong>
                    <span className="text-sm text-slate-400 block mt-1">Precision and comfort for long sessions</span>
                  </div>
                  <ChevronRight className="text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
                </Link>
              </li>
            </>
          )}
        </ul>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <h2>Tools</h2>
        <ul>
          {loading ? (
            <SkeletonCategoryCard />
          ) : (
            <li>
              <Link to="/tools/laptop-recommender" className="card group">
                <div className="card-icon">
                  <Wrench size={24} />
                </div>
                <div className="card-content">
                  <strong>Laptop Recommendation Tool</strong>
                  <span className="text-sm text-slate-400 block mt-1">Find the perfect laptop for your budget</span>
                </div>
                <ChevronRight className="text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
              </Link>
            </li>
          )}
        </ul>
      </FadeInSection>
    </PageWrapper>
  );
}

function BestLaptops() {
  const loading = useSimulatedLoading();
  return (
    <PageWrapper>
      <FadeInSection>
        <h1>Best Laptops for Programming</h1>
        <p>Here are the top laptops every developer should consider:</p>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <ul>
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <li className="card">
                <div className="card-icon"><Laptop size={24} /></div>
                <div className="card-content">
                  <strong>MacBook Pro 16” (2026)</strong>
                  <span className="text-sm text-slate-400">Great for macOS development.</span>
                </div>
                <a href="YOUR_AMAZON_AFFILIATE_LINK" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
              <li className="card">
                <div className="card-icon"><Laptop size={24} /></div>
                <div className="card-content">
                  <strong>Dell XPS 15</strong>
                  <span className="text-sm text-slate-400">Powerful Windows laptop for coding.</span>
                </div>
                <a href="YOUR_AMAZON_AFFILIATE_LINK" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
              <li className="card">
                <div className="card-icon"><Laptop size={24} /></div>
                <div className="card-content">
                  <strong>Lenovo ThinkPad X1 Carbon</strong>
                  <span className="text-sm text-slate-400">Lightweight and durable.</span>
                </div>
                <a href="YOUR_AMAZON_AFFILIATE_LINK" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
            </>
          )}
        </ul>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            <ChevronRight className="rotate-180" size={16} /> Back to Home
          </Link>
        </div>
      </FadeInSection>
    </PageWrapper>
  );
}

function BestMonitors() {
  const loading = useSimulatedLoading();
  return (
    <PageWrapper>
      <FadeInSection>
        <h1>Best Monitors for Trading</h1>
        <p>Top monitors to improve your trading and coding setup:</p>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <ul>
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <li className="card">
                <div className="card-icon"><Monitor size={24} /></div>
                <div className="card-content">
                  <strong>LG Ultrawide 34”</strong>
                  <span className="text-sm text-slate-400">Perfect for multi-tasking screens.</span>
                </div>
                <a href="YOUR_AMAZON_AFFILIATE_LINK" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
              <li className="card">
                <div className="card-icon"><Monitor size={24} /></div>
                <div className="card-content">
                  <strong>Dell UltraSharp 27”</strong>
                  <span className="text-sm text-slate-400">High-resolution for crisp visuals.</span>
                </div>
                <a href="YOUR_AMAZON_AFFILIATE_LINK" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
              <li className="card">
                <div className="card-icon"><Monitor size={24} /></div>
                <div className="card-content">
                  <strong>Samsung Odyssey G7 32”</strong>
                  <span className="text-sm text-slate-400">Curved display for immersive focus.</span>
                </div>
                <a href="YOUR_AMAZON_AFFILIATE_LINK" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
            </>
          )}
        </ul>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            <ChevronRight className="rotate-180" size={16} /> Back to Home
          </Link>
        </div>
      </FadeInSection>
    </PageWrapper>
  );
}

function LaptopRecommender() {
  const [budget, setBudget] = useState("500");
  const [recommendation, setRecommendation] = useState<React.ReactNode>("Recommended setup will appear here.");

  const recommendLaptop = () => {
    if (budget === "500") {
      setRecommendation(
        <div className="text-left space-y-4 w-full">
          <div>
            <strong className="text-[#f8fafc] block mb-1">Recommended Laptop:</strong>
            Lenovo IdeaPad
          </div>
          <div>
            <strong className="text-[#f8fafc] block mb-1">Recommended Monitor:</strong>
            24" 1080p Monitor
          </div>
          <div>
            <strong className="text-[#f8fafc] block mb-1">Recommended Accessories:</strong>
            Basic Keyboard<br/>
            Basic Mouse
          </div>
        </div>
      );
    } else if (budget === "1000") {
      setRecommendation(
        <div className="text-left space-y-4 w-full">
          <div>
            <strong className="text-[#f8fafc] block mb-1">Recommended Laptop:</strong>
            Dell XPS 13
          </div>
          <div>
            <strong className="text-[#f8fafc] block mb-1">Recommended Monitor:</strong>
            27" 1440p Monitor
          </div>
          <div>
            <strong className="text-[#f8fafc] block mb-1">Recommended Accessories:</strong>
            Wireless Keyboard<br/>
            Wireless Mouse
          </div>
        </div>
      );
    } else {
      setRecommendation(
        <div className="text-left space-y-4 w-full">
          <div>
            <strong className="text-[#f8fafc] block mb-1">Recommended Laptop:</strong>
            MacBook Pro M3
          </div>
          <div>
            <strong className="text-[#f8fafc] block mb-1">Recommended Monitor:</strong>
            34" Ultrawide Monitor
          </div>
          <div>
            <strong className="text-[#f8fafc] block mb-1">Recommended Accessories:</strong>
            Mechanical Keyboard<br/>
            Ergonomic Mouse
          </div>
        </div>
      );
    }
  };

  return (
    <PageWrapper>
      <FadeInSection>
        <h1>Setup Recommendation Tool</h1>
        <div className="max-w-md mx-auto bg-[#0f172a]/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl mt-8">
          <p className="!text-left !ml-0 mb-4 text-[#e2e8f0]">Select your budget:</p>
          <select 
            value={budget} 
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-[#1e293b] border border-white/10 rounded-lg p-3 text-[#f8fafc] focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all mb-6"
          >
            <option value="500">$500</option>
            <option value="1000">$1000</option>
            <option value="1500">$1500+</option>
          </select>
          
          <button 
            onClick={recommendLaptop}
            className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#020617] font-semibold py-3 px-6 rounded-lg transition-all transform active:scale-[0.98] shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
          >
            Get Recommendation
          </button>

          <div className="mt-8 p-4 bg-[#1e293b]/50 rounded-lg border border-white/5 min-h-[80px] flex items-center justify-center">
            <div className="!m-0 !text-sm text-[#94a3b8] w-full">{recommendation}</div>
          </div>
        </div>
      </FadeInSection>
      
      <FadeInSection delay={0.1}>
        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            <ChevronRight className="rotate-180" size={16} /> Back to Home
          </Link>
        </div>
      </FadeInSection>
    </PageWrapper>
  );
}

function BestKeyboards() {
  const loading = useSimulatedLoading();
  return (
    <PageWrapper>
      <FadeInSection>
        <h1>Best Keyboards for Coding</h1>
        <p>Top keyboards for typing comfort and speed:</p>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <ul>
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <li className="card">
                <div className="card-icon"><Keyboard size={24} /></div>
                <div className="card-content">
                  <strong>Keychron Q1 Pro</strong>
                  <span className="text-sm text-slate-400">Premium wireless mechanical keyboard.</span>
                </div>
                <a href="#" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
              <li className="card">
                <div className="card-icon"><Keyboard size={24} /></div>
                <div className="card-content">
                  <strong>Logitech MX Mechanical</strong>
                  <span className="text-sm text-slate-400">Low-profile tactile switches for productivity.</span>
                </div>
                <a href="#" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
              <li className="card">
                <div className="card-icon"><Keyboard size={24} /></div>
                <div className="card-content">
                  <strong>Kinesis Advantage360</strong>
                  <span className="text-sm text-slate-400">Ultimate ergonomic split keyboard.</span>
                </div>
                <a href="#" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
            </>
          )}
        </ul>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            <ChevronRight className="rotate-180" size={16} /> Back to Home
          </Link>
        </div>
      </FadeInSection>
    </PageWrapper>
  );
}

function BestMice() {
  const loading = useSimulatedLoading();
  return (
    <PageWrapper>
      <FadeInSection>
        <h1>Best Mice for Productivity</h1>
        <p>Top mice for precision and ergonomic support:</p>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <ul>
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <li className="card">
                <div className="card-icon"><Mouse size={24} /></div>
                <div className="card-content">
                  <strong>Logitech MX Master 3S</strong>
                  <span className="text-sm text-slate-400">The industry standard for productivity.</span>
                </div>
                <a href="#" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
              <li className="card">
                <div className="card-icon"><Mouse size={24} /></div>
                <div className="card-content">
                  <strong>Logitech Lift Vertical</strong>
                  <span className="text-sm text-slate-400">Ergonomic vertical mouse for smaller hands.</span>
                </div>
                <a href="#" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
              <li className="card">
                <div className="card-icon"><Mouse size={24} /></div>
                <div className="card-content">
                  <strong>Razer Pro Click</strong>
                  <span className="text-sm text-slate-400">High-precision sensor with ergonomic shape.</span>
                </div>
                <a href="#" className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/20 transition-colors whitespace-nowrap text-sm font-medium">Buy on Amazon</a>
              </li>
            </>
          )}
        </ul>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            <ChevronRight className="rotate-180" size={16} /> Back to Home
          </Link>
        </div>
      </FadeInSection>
    </PageWrapper>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews/best-laptops" element={<BestLaptops />} />
          <Route path="/reviews/best-monitors" element={<BestMonitors />} />
          <Route path="/reviews/best-keyboards" element={<BestKeyboards />} />
          <Route path="/reviews/best-mice" element={<BestMice />} />
          <Route path="/tools/laptop-recommender" element={<LaptopRecommender />} />
        </Routes>
      </Layout>
      <SpeedInsights />
    </Router>
  );
}
