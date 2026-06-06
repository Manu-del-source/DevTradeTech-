export interface RatingBreakdown {
  performance: number;
  design: number;
  value: number;
  features: number;
}

export interface Benchmark {
  label: string;
  value: string;
  score?: number; // 0-100 for visualization
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string; // Made more flexible for new categories
  price: number;
  rating: number;
  reviewCount: number;
  budgetRange: 'Budget' | 'Mid-Range' | 'Premium';
  tags: string[];
  specs: Record<string, string>;
  amazonLink: string;
  image: string;
  isTopPick?: boolean;
  
  // Professional Review Fields
  pros: string[];
  cons: string[];
  benchmarks?: Benchmark[];
  fullReview?: string;
  ratingBreakdown?: RatingBreakdown;
  authorId?: string;
  updatedAt: string;
  relatedProductIds?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  authorId: string;
  updatedAt: string;
  image: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
