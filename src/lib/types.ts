export interface Database {
  public: {
    Tables: {
      categories: {
        Row: Category;
        Insert: Omit<Category, 'id' | 'created_at'>;
        Update: Partial<Omit<Category, 'id' | 'created_at'>>;
      };
      brands: {
        Row: Brand;
        Insert: Omit<Brand, 'id' | 'created_at'>;
        Update: Partial<Omit<Brand, 'id' | 'created_at'>>;
      };
      products: {
        Row: Product;
        Insert: Omit<Product, 'id' | 'created_at'>;
        Update: Partial<Omit<Product, 'id' | 'created_at'>>;
      };
      testimonials: {
        Row: Testimonial;
        Insert: Omit<Testimonial, 'id' | 'created_at'>;
        Update: Partial<Omit<Testimonial, 'id' | 'created_at'>>;
      };
      inquiries: {
        Row: Inquiry;
        Insert: Omit<Inquiry, 'id' | 'created_at'>;
        Update: Partial<Omit<Inquiry, 'id' | 'created_at'>>;
      };
    };
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  display_order: number;
  created_at: string;
}

export interface Brand {
  id: string;
  name: string;
  logo_url: string;
  display_order: number;
  created_at: string;
}

export interface Product {
  id: string;
  category_id: string;
  brand_id: string | null;
  name: string;
  slug: string;
  description: string;
  specifications: Record<string, string>;
  price_band: string;
  images: string[];
  featured: boolean;
  in_stock: boolean;
  display_order: number;
  created_at: string;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  company_name: string;
  rating: number;
  review: string;
  location: string;
  approved: boolean;
  display_order: number;
  created_at: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company_name: string;
  message: string;
  inquiry_type: 'contact' | 'quote';
  product_id: string | null;
  status: 'new' | 'in_progress' | 'completed';
  created_at: string;
}
