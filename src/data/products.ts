import { Product, Category, Testimonial, Author, Guide } from '../types';

export const authors: Author[] = [
  {
    id: 'manu-tech',
    name: 'Manu K.',
    role: 'Lead Tech Reviewer',
    bio: 'Hardware enthusiast and software engineer with 10+ years of experience in building high-performance workstations.',
    avatar: 'https://i.pravatar.cc/150?u=manu'
  },
  {
    id: 'sarah-quant',
    name: 'Sarah Chen',
    role: 'Trading Setup Expert',
    bio: 'Former quant trader specializing in multi-monitor configurations and low-latency peripherals.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'High-performance machines for developers and power users.',
    icon: 'Laptop',
    path: '/reviews/laptops'
  },
  {
    id: 'monitors',
    name: 'Monitors',
    description: 'Ultra-wide and high-resolution displays for maximum productivity.',
    icon: 'Monitor',
    path: '/reviews/monitors'
  },
  {
    id: 'keyboards',
    name: 'Keyboards',
    description: 'Mechanical and ergonomic tools for precision typing.',
    icon: 'Keyboard',
    path: '/reviews/keyboards'
  },
  {
    id: 'mice',
    name: 'Mice',
    description: 'High-precision sensors and ergonomic designs.',
    icon: 'Mouse',
    path: '/reviews/mice'
  },
  {
    id: 'trading-setups',
    name: 'Trading Setups',
    description: 'Complete workstation configurations for professional traders.',
    icon: 'TrendingUp',
    path: '/reviews/trading-setups'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential gear from docking stations to ergonomic chairs.',
    icon: 'Headphones',
    path: '/reviews/accessories'
  }
];

export const products: Product[] = [
  {
    id: 'macbook-pro-16',
    name: 'MacBook Pro 16” (M4 Max)',
    description: 'The definitive choice for macOS and mobile developers seeking peak performance.',
    category: 'laptops',
    price: 2499,
    rating: 4.9,
    reviewCount: 1240,
    budgetRange: 'Premium',
    tags: ['M4 Max', 'Liquid Retina XDR', '22h Battery'],
    specs: {
      CPU: 'Apple M4 Max',
      RAM: '32GB Unified',
      Display: '16.2" Liquid Retina XDR',
      Battery: 'Up to 22 hours',
      Weight: '4.7 lbs'
    },
    amazonLink: 'https://amzn.to/4ocPKnS',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    isTopPick: true,
    pros: [
      'Industry-leading battery life',
      'Stunning Liquid Retina XDR display',
      'Exceptional build quality',
      'M4 Max is a compiling beast'
    ],
    cons: [
      'Very expensive entry price',
      'Limited port selection without dongles',
      'Not user-upgradeable'
    ],
    benchmarks: [
      { label: 'Geekbench 6 Multi-Core', value: '21,000', score: 98 },
      { label: 'Cinebench R23', value: '24,500', score: 95 }
    ],
    ratingBreakdown: {
      performance: 9.8,
      design: 9.5,
      value: 7.5,
      features: 9.0
    },
    authorId: 'manu-tech',
    updatedAt: '2026-06-01',
    relatedProductIds: ['dell-xps-15', 'thinkpad-x1-carbon']
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15',
    description: 'A masterpiece of Windows engineering, balancing power with a stunning InfinityEdge display.',
    category: 'laptops',
    price: 1899,
    rating: 4.7,
    reviewCount: 850,
    budgetRange: 'Premium',
    tags: ['Intel i9', 'OLED', 'CNC Aluminum'],
    specs: {
      CPU: 'Intel Core i9-13900H',
      RAM: '32GB DDR5',
      Display: '15.6" OLED 3.5K',
      Battery: 'Up to 10 hours'
    },
    amazonLink: 'https://amzn.to/4eseyVu',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    pros: [
      'Best-in-class Windows display',
      'Premium build quality',
      'Excellent keyboard and trackpad'
    ],
    cons: [
      'Battery life could be better',
      'Tends to run hot under load'
    ],
    updatedAt: '2026-05-15',
    authorId: 'manu-tech'
  },
  {
    id: 'thinkpad-x1-carbon',
    name: 'ThinkPad X1 Carbon Gen 11',
    description: 'The legendary developer companion. Lightweight, indestructible, and best-in-class keyboard.',
    category: 'laptops',
    price: 1649,
    rating: 4.8,
    reviewCount: 920,
    budgetRange: 'Mid-Range',
    tags: ['Ultra Light', 'Classic Keyboard', 'LTE'],
    specs: {
      CPU: 'Intel Core i7-1365U',
      RAM: '16GB LPDDR5',
      Display: '14" WUXGA Low Power',
      Battery: 'Up to 15 hours'
    },
    amazonLink: 'https://amzn.to/43Srpu4',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    isTopPick: true,
    pros: [
      'Incredible keyboard feel',
      'Extremely lightweight (2.5 lbs)',
      'Enterprise-grade security features'
    ],
    cons: [
      'Integrated graphics only',
      'OLED option drains battery fast'
    ],
    updatedAt: '2026-05-20',
    authorId: 'manu-tech'
  },
  {
    id: 'lg-ultrawide-34',
    name: 'LG 34BK95U-W Ultrawide 34”',
    description: 'Expand your IDE and trading charts with this stunning Nano IPS panoramic display.',
    category: 'monitors',
    price: 799,
    rating: 4.6,
    reviewCount: 540,
    budgetRange: 'Mid-Range',
    tags: ['21:9', 'IPS', 'USB-C PD'],
    specs: {
      Resolution: '3440 x 1440',
      Panel: 'Nano IPS',
      Refresh: '144Hz',
      Ports: 'Thunderbolt 4, HDMI, DP'
    },
    amazonLink: 'https://amzn.to/4vB5h3p',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    isTopPick: true,
    pros: [
      'Massive screen real estate',
      'Excellent color accuracy',
      'Single cable setup via Thunderbolt'
    ],
    cons: [
      'Requires a powerful GPU for 144Hz',
      'Stand takes up significant desk space'
    ],
    updatedAt: '2026-04-10',
    authorId: 'sarah-quant'
  },
  {
    id: 'dell-ultrasharp-27',
    name: 'Dell UltraSharp 27” 4K',
    description: 'Unmatched color accuracy and 4K clarity for precision-oriented workflows.',
    category: 'monitors',
    price: 549,
    rating: 4.8,
    reviewCount: 1100,
    budgetRange: 'Mid-Range',
    tags: ['4K', 'IPS Black', 'USB Hub'],
    specs: {
      Resolution: '3840 x 2160',
      Panel: 'IPS Black',
      Refresh: '60Hz',
      Ports: 'USB-C (90W PD)'
    },
    amazonLink: 'https://amzn.to/4vqQh7Y',
    image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=800&q=80',
    pros: [
      'IPS Black technology for deeper blacks',
      'Incredible connectivity options',
      'Great factory calibration'
    ],
    cons: [
      'Only 60Hz refresh rate',
      'HDR performance is limited'
    ],
    updatedAt: '2026-05-01',
    authorId: 'sarah-quant'
  },
  {
    id: 'keychron-q1-pro',
    name: 'Keychron Q1 Pro',
    description: 'A heavy-duty aluminum mechanical keyboard that redefines the typing experience.',
    category: 'keyboards',
    price: 199,
    rating: 4.9,
    reviewCount: 320,
    budgetRange: 'Premium',
    tags: ['Full Metal', 'QMK/VIA', 'Wireless'],
    specs: {
      Type: 'Mechanical',
      Layout: '75%',
      Switches: 'Keychron K Pro',
      Connectivity: 'Bluetooth 5.1'
    },
    amazonLink: '#',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
    isTopPick: true,
    pros: [
      'Rock-solid aluminum build',
      'Fully customizable with QMK/VIA',
      'Excellent wireless stability'
    ],
    cons: [
      'Very heavy',
      'High profile may require wrist rest'
    ],
    updatedAt: '2026-05-25',
    authorId: 'manu-tech'
  },
  {
    id: 'mx-master-3s',
    name: 'Logitech MX Master 3S',
    description: 'The ergonomic standard for professionals. Quiet clicks and an electromagnetic scroll wheel.',
    category: 'mice',
    price: 99,
    rating: 4.9,
    reviewCount: 4500,
    budgetRange: 'Mid-Range',
    tags: ['Ergonomic', 'MagSpeed', 'Quiet'],
    specs: {
      Sensor: '8000 DPI',
      Buttons: '7 Customizable',
      Battery: 'Up to 70 days',
      Connection: 'Logi Bolt / BT'
    },
    amazonLink: '#',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    isTopPick: true,
    pros: [
      'Unmatched ergonomic comfort',
      'MagSpeed wheel is addictive',
      'Works on virtually any surface'
    ],
    cons: [
      'Not suitable for left-handed users',
      'Micro-USB charging (S3 version)'
    ],
    updatedAt: '2026-06-05',
    authorId: 'manu-tech'
  }
];

export const guides: Guide[] = [
  {
    id: 'best-developer-setup-2026',
    title: 'The Ultimate Developer Setup Guide 2026',
    description: 'How to build a high-performance workspace that minimizes fatigue and maximizes code output.',
    category: 'Buying Guides',
    authorId: 'manu-tech',
    updatedAt: '2026-06-05',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    content: 'Full guide content goes here...'
  },
  {
    id: 'trading-setup-multi-monitor',
    title: 'Mastering the Multi-Monitor Trading Station',
    description: 'Everything you need to know about display latency, mounting, and cable management for traders.',
    category: 'Trading Setups',
    authorId: 'sarah-quant',
    updatedAt: '2026-05-28',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    content: 'Full guide content goes here...'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Senior Fullstack Engineer',
    content: 'DevTradeTech helped me build a workspace that actually reduced my fatigue. Their monitor recommendations are spot on for multi-IDE setups.',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Quant Trader',
    content: 'The comparison tool is a lifesaver. Being able to see display latency and refresh rates side-by-side saved me hours of research.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'DevOps Lead',
    content: 'I trust their Top Picks. The ThinkPad X1 Carbon review convinced me to switch, and it\'s the best decision I\'ve made for my remote setup.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];
