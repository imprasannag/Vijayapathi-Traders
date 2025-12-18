import { ArrowRight } from 'lucide-react';
import products from './products.json';

interface Category {
  name: string;
  count: number;
  image: string;
}

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
}

export default function Categories({ onCategorySelect }: CategoriesProps) {
  // Get unique categories from products
  const categoriesMap = new Map<string, { count: number; image: string }>();
  
  products.forEach((product: any) => {
    const cat = product.category;
    if (!categoriesMap.has(cat)) {
      categoriesMap.set(cat, { count: 0, image: product.image });
    }
    const current = categoriesMap.get(cat)!;
    categoriesMap.set(cat, { count: current.count + 1, image: current.image });
  });

  const categories: Category[] = Array.from(categoriesMap.entries()).map(([name, data]) => ({
    name,
    count: data.count,
    image: data.image,
  }));

  const categoryImages: Record<string, string> = {
    'Electrical': '/images/wire.jpg',
    'Construction': '/images/cement.jpg',
    'Sanitary Wares': '/images/sani.jpg',
    'Hardware': '/images/steels.jpg',
    'Paints': '/images/paints.jpg',
    'Plumbing': '/images/pipes.jpg',
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-2">
            Shop by Category
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Explore our wide range of quality products organized by category
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
              className="group relative bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer overflow-hidden border border-slate-200 hover:border-primary"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Category Image */}
              <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={categoryImages[category.name] || category.image || '/images/shop.jpg'}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/shop.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Category Info */}
              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3 md:mb-4">
                  {category.count} {category.count === 1 ? 'product' : 'products'}
                </p>
                
                {/* Arrow Icon */}
                <div className="flex items-center text-primary font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ArrowRight 
                    size={14} 
                    className="sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

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
      `}</style>
    </div>
  );
}

