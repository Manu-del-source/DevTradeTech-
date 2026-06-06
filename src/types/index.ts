export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'laptops' | 'monitors' | 'keyboards' | 'mice';
  price: number;
  specs: Record<string, string>;
  amazonLink: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  path: string;
}
