import { useEffect } from 'react';
import { Award } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Brands() {
  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const { data } = await supabase
      .from('brands')
      .select('*')
      .order('display_order');

    // Brands data can be used for future enhancements
    if (data) {
      // Store brands data if needed
    }
  };

  const popularBrands = [
    'Havells', 'Polycab', 'Finolex', 'Anchor', 'Legrand',
    'Asian Paints', 'Berger Paints', 'Dulux', 'Nerolac',
    'Cera', 'Parryware', 'Hindware', 'Jaquar',
    'Crompton', 'V-Guard', 'Orientbell', 'Kajaria'
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Award className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-2">Our Brand Partners</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            We partner with the most trusted brands in the industry to bring you quality products
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {popularBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 border border-slate-200 hover:border-primary rounded-lg p-4 sm:p-6 flex items-center justify-center transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl cursor-pointer min-h-[80px] sm:min-h-[100px]"
            >
              <span className="text-xs sm:text-sm md:text-base text-slate-700 hover:text-primary font-semibold text-center transition-colors">{brand}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary via-accent to-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-accentLight px-2">
            Authorized Dealer & Distributor
          </h3>
          <p className="text-sm sm:text-base text-white/90 max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
            We are proud to be authorized dealers for leading brands, ensuring you receive genuine products with valid warranties and manufacturer support. Our partnerships enable us to offer competitive pricing and reliable after-sales service.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full transition-all transform hover:scale-110 cursor-pointer">
              100% Genuine Products
            </div>
            <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full transition-all transform hover:scale-110 cursor-pointer">
              Manufacturer Warranty
            </div>
            <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full transition-all transform hover:scale-110 cursor-pointer">
              Best Prices Guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
