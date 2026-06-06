export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'laptops' | 'monitors' | 'keyboards' | 'mice';
  price: number;
  rating: number;
  reviewCount: number;
  budgetRange: 'Budget' | 'Mid-Range' | 'Premium';
  tags: string[];
  specs: Record<string, string>;
  amazonLink: string;
  image: string;
  isTopPick?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
