import { ArrowRight, ShoppingBag, FileText } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-secondary to-primaryDark overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }}></div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-primaryDark/95"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32 w-full z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block bg-accent text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg">
            ⭐ 10+ Years of Trusted Service
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg">
            Top-Quality Construction & Electrical Materials
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-accentLight mb-3 sm:mb-4 font-bold drop-shadow-md">
            Retail at Wholesale Prices
          </p>

          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Your one-stop destination for premium construction materials, electrical supplies, sanitary ware, paints, and more in Madurai. Quality products at unbeatable prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('categories')}
              className="group bg-gradient-to-r from-accent to-accentLight hover:from-accentLight hover:to-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg"
            >
              <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">Shop Products</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 hover:border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg"
            >
              <FileText size={18} className="sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">Get Quote</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 max-w-4xl">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '5000+', label: 'Happy Customers' },
            { number: '50+', label: 'Brand Partners' },
            { number: '100%', label: 'Quality Assured' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-3 sm:p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accentLight mb-1 sm:mb-2 drop-shadow-md">{stat.number}</div>
              <div className="text-xs sm:text-sm text-white/90 font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Call Button */}
      <a
        href="tel:+919842133726"
        className="lg:hidden fixed bottom-6 right-6 bg-accent text-white rounded-full p-4 shadow-2xl z-50 hover:bg-accentLight transition-all transform hover:scale-110"
        aria-label="Call Now"
      >
        <span className="text-2xl">📞</span>
      </a>

      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white to-transparent z-10"></div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(-50%) translateY(0);
          }
          50% {
            transform: translateY(-50%) translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
