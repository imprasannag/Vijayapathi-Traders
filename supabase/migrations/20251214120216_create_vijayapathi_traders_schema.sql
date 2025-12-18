/*
  # Vijayapathi Traders Database Schema
  
  ## Overview
  Complete database schema for construction & electrical materials e-commerce website
  
  ## New Tables
  
  ### 1. categories
  Product categories (Sanitary, Electricals, Paints, etc.)
  - `id` (uuid, primary key)
  - `name` (text) - Category name
  - `slug` (text) - URL-friendly identifier
  - `description` (text) - Category description
  - `image_url` (text) - Category image
  - `display_order` (integer) - For sorting
  - `created_at` (timestamptz)
  
  ### 2. brands
  Supplier brands
  - `id` (uuid, primary key)
  - `name` (text) - Brand name
  - `logo_url` (text) - Brand logo
  - `display_order` (integer)
  - `created_at` (timestamptz)
  
  ### 3. products
  Product catalog with full details
  - `id` (uuid, primary key)
  - `category_id` (uuid, foreign key)
  - `name` (text) - Product name
  - `slug` (text) - URL-friendly identifier
  - `description` (text) - Full description
  - `specifications` (jsonb) - Product specs
  - `price_band` (text) - Price range indicator
  - `images` (jsonb) - Array of image URLs
  - `featured` (boolean) - Featured product flag
  - `in_stock` (boolean)
  - `brand_id` (uuid, foreign key, optional)
  - `display_order` (integer)
  - `created_at` (timestamptz)
  
  ### 4. testimonials
  Customer reviews and ratings
  - `id` (uuid, primary key)
  - `customer_name` (text)
  - `company_name` (text, optional)
  - `rating` (integer) - 1-5 stars
  - `review` (text)
  - `location` (text, optional)
  - `approved` (boolean) - Moderation flag
  - `display_order` (integer)
  - `created_at` (timestamptz)
  
  ### 5. inquiries
  Contact form and quote requests
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `phone` (text)
  - `company_name` (text, optional)
  - `message` (text)
  - `inquiry_type` (text) - 'contact' or 'quote'
  - `product_id` (uuid, foreign key, optional)
  - `status` (text) - 'new', 'in_progress', 'completed'
  - `created_at` (timestamptz)
  
  ## Security
  - Enable RLS on all tables
  - Public read access for products, categories, brands, approved testimonials
  - Authenticated write access for inquiries
*/

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Brands table
CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  brand_id uuid REFERENCES brands(id) ON DELETE SET NULL,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  specifications jsonb DEFAULT '{}',
  price_band text DEFAULT '',
  images jsonb DEFAULT '[]',
  featured boolean DEFAULT false,
  in_stock boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  company_name text DEFAULT '',
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review text NOT NULL,
  location text DEFAULT '',
  approved boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text DEFAULT '',
  message text NOT NULL,
  inquiry_type text DEFAULT 'contact' CHECK (inquiry_type IN ('contact', 'quote')),
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed')),
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved) WHERE approved = true;

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for categories (public read)
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for brands (public read)
CREATE POLICY "Anyone can view brands"
  ON brands FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for products (public read)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for testimonials (public read for approved only)
CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (approved = true);

-- RLS Policies for inquiries (anyone can insert)
CREATE POLICY "Anyone can submit inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);