import { Product, Category, Testimonial } from '../types';

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Development Laptops',
    description: 'High-performance machines for compiling and multitasking.',
    icon: 'Laptop',
    path: '/reviews/best-laptops'
  },
  {
    id: 'monitors',
    name: 'Trading Monitors',
    description: 'Ultra-wide and high-resolution displays for maximum visibility.',
    icon: 'Monitor',
    path: '/reviews/best-monitors'
  },
  {
    id: 'keyboards',
    name: 'Precision Keyboards',
    description: 'Mechanical and ergonomic tools for long coding sessions.',
    icon: 'Keyboard',
    path: '/reviews/best-keyboards'
  },
  {
    id: 'mice',
    name: 'Productivity Mice',
    description: 'High-DPI sensors and ergonomic shapes for precision.',
    icon: 'Mouse',
    path: '/reviews/best-mice'
  }
];

export const products: Product[] = [
  // Laptops
  {
    id: 'macbook-pro-16',
    name: 'MacBook Pro 16”',
    description: 'The definitive choice for macOS and mobile developers seeking peak performance.',
    category: 'laptops',
    price: 2499,
    rating: 4.9,
    reviewCount: 1240,
    budgetRange: 'Premium',
    tags: ['M4 Max', 'OLED', '22h Battery'],
    specs: {
      CPU: 'Apple M4 Max',
      RAM: '32GB Unified',
      Display: '16.2" Liquid Retina XDR',
      Battery: 'Up to 22 hours'
    },
    amazonLink: 'https://amzn.to/4ocPKnS',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    isTopPick: true
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
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'thinkpad-x1-carbon',
    name: 'ThinkPad X1 Carbon',
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
    isTopPick: true
  },
  // Monitors
  {
    id: 'lg-ultrawide-34',
    name: 'LG Ultrawide 34”',
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
    isTopPick: true
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
    image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=800&q=80'
  },
  // Keyboards
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
    isTopPick: true
  },
  // Mice
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
    isTopPick: true
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
