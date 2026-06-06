import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Best Laptops for Programming',
    description: 'Top picks for coding and development',
    icon: 'Laptop',
    path: '/reviews/best-laptops'
  },
  {
    id: 'monitors',
    name: 'Best Monitors for Trading',
    description: 'Ultrawide and multi-monitor setups',
    icon: 'Monitor',
    path: '/reviews/best-monitors'
  },
  {
    id: 'keyboards',
    name: 'Best Keyboards for Coding',
    description: 'Mechanical and ergonomic picks',
    icon: 'Keyboard',
    path: '/reviews/best-keyboards'
  },
  {
    id: 'mice',
    name: 'Best Mice for Productivity',
    description: 'Precision and comfort for long sessions',
    icon: 'Mouse',
    path: '/reviews/best-mice'
  }
];

export const products: Product[] = [
  // Laptops
  {
    id: 'macbook-pro-16',
    name: 'MacBook Pro 16” (2026)',
    description: 'Great for macOS development and high-performance tasks.',
    category: 'laptops',
    price: 2499,
    specs: {
      CPU: 'Apple M4 Max',
      RAM: '32GB Unified',
      Display: '16.2" Liquid Retina XDR',
      Battery: 'Up to 22 hours'
    },
    amazonLink: '#'
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15',
    description: 'Powerful Windows laptop for coding and professional creative work.',
    category: 'laptops',
    price: 1899,
    specs: {
      CPU: 'Intel Core i9-13900H',
      RAM: '32GB DDR5',
      Display: '15.6" OLED 3.5K',
      Battery: 'Up to 10 hours'
    },
    amazonLink: '#'
  },
  {
    id: 'thinkpad-x1-carbon',
    name: 'Lenovo ThinkPad X1 Carbon',
    description: 'Lightweight, durable, and the gold standard for developer keyboards.',
    category: 'laptops',
    price: 1649,
    specs: {
      CPU: 'Intel Core i7-1365U',
      RAM: '16GB LPDDR5',
      Display: '14" WUXGA Low Power',
      Battery: 'Up to 15 hours'
    },
    amazonLink: '#'
  },
  // Monitors
  {
    id: 'lg-ultrawide-34',
    name: 'LG Ultrawide 34”',
    description: 'Perfect for multi-tasking screens and wide IDE views.',
    category: 'monitors',
    price: 799,
    specs: {
      Resolution: '3440 x 1440',
      Panel: 'Nano IPS',
      Refresh: '144Hz',
      Ports: 'Thunderbolt 4, HDMI, DP'
    },
    amazonLink: '#'
  },
  {
    id: 'dell-ultrasharp-27',
    name: 'Dell UltraSharp 27”',
    description: 'High-resolution for crisp visuals and color accuracy.',
    category: 'monitors',
    price: 549,
    specs: {
      Resolution: '3840 x 2160 (4K)',
      Panel: 'IPS Black',
      Refresh: '60Hz',
      Ports: 'USB-C (90W PD), HDMI, DP'
    },
    amazonLink: '#'
  },
  {
    id: 'samsung-odyssey-g7',
    name: 'Samsung Odyssey G7 32”',
    description: 'Curved display for immersive focus and high refresh rate.',
    category: 'monitors',
    price: 699,
    specs: {
      Resolution: '2560 x 1440',
      Panel: 'QLED',
      Refresh: '240Hz',
      Ports: 'HDMI 2.1, DP 1.4'
    },
    amazonLink: '#'
  },
  // Keyboards
  {
    id: 'keychron-q1-pro',
    name: 'Keychron Q1 Pro',
    description: 'Premium wireless mechanical keyboard with full aluminum body.',
    category: 'keyboards',
    price: 199,
    specs: {
      Type: 'Mechanical (Hotswap)',
      Layout: '75%',
      Connectivity: 'Bluetooth / USB-C',
      Switches: 'Keychron K Pro'
    },
    amazonLink: '#'
  },
  {
    id: 'mx-mechanical',
    name: 'Logitech MX Mechanical',
    description: 'Low-profile tactile switches for productivity and quiet typing.',
    category: 'keyboards',
    price: 169,
    specs: {
      Type: 'Mechanical (Low Profile)',
      Layout: 'Full Size / Mini',
      Connectivity: 'Logi Bolt / Bluetooth',
      Switches: 'Tactile Quiet / Clicky'
    },
    amazonLink: '#'
  },
  // Mice
  {
    id: 'mx-master-3s',
    name: 'Logitech MX Master 3S',
    description: 'The industry standard for productivity and ergonomics.',
    category: 'mice',
    price: 99,
    specs: {
      Sensor: '8000 DPI Darkfield',
      Buttons: '7 Customizable',
      Connectivity: 'Logi Bolt / Bluetooth',
      Battery: 'Up to 70 days'
    },
    amazonLink: '#'
  }
];
