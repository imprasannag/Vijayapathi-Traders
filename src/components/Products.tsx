import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import products from "./products.json";

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  description: string;
  image: string;
  whatsappText: string;
}

interface ProductsProps {
  selectedCategory?: string | null;
}

export default function Products({ selectedCategory }: ProductsProps) {
  const [filteredCategory, setFilteredCategory] = useState<string | null>(selectedCategory || null);
  const whatsappNumber = "919842133726";

  useEffect(() => {
    if (selectedCategory) {
      setFilteredCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const filteredProducts = filteredCategory
    ? products.filter((product: Product) => product.category === filteredCategory)
    : products;

  const clearFilter = () => {
    setFilteredCategory(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 bg-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-2">
          Our Products
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2">
          Quality products at wholesale prices
        </p>
      </div>

      {/* Category Filter Badge */}
      {filteredCategory && (
        <div className="flex justify-center mb-6 sm:mb-8 px-2">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-accent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg animate-fade-in text-sm sm:text-base">
            <span className="font-semibold">Showing: {filteredCategory}</span>
            <button
              onClick={clearFilter}
              className="bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors"
              aria-label="Clear filter"
            >
              <X size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 sm:py-16 px-4">
          <p className="text-lg sm:text-xl text-slate-600 mb-4">No products found in this category.</p>
          <button
            onClick={clearFilter}
            className="bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            View All Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filteredProducts.map((product: Product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden border border-slate-200 hover:border-primary flex flex-col"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              {/* Product Image */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/shop.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-primary/90 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm text-primary font-medium mb-2">
                  {product.brand}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 line-clamp-2 flex-grow">
                  {product.description}
                </p>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    product.whatsappText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-center py-2.5 sm:py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base group/btn"
                >
                  <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                  <span>Enquire Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
