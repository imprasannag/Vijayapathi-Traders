import { Menu, X, Search, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export default function Navigation({ onNavigate, currentSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'categories', label: 'Categories' },
    { id: 'products', label: 'Products' },
    { id: 'brands', label: 'Brands' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('products');
    }
  };

  return (
    <>
      <div className="bg-secondary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <a href="tel:+91 8072352445" className="flex items-center gap-2 hover:text-accentLight transition-colors text-xs sm:text-sm">
              <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">+91 8072352445</span>
            </a>
            <a href="tel:+91 9842133726" className="flex items-center gap-2 hover:text-accentLight transition-colors text-xs sm:text-sm">
              <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">+91 9842133726</span>
            </a>
            <a href="mailto:vijayapathitraders@gmail.com" className="flex items-center gap-2 hover:text-accentLight transition-colors text-xs sm:text-sm">
              <Mail size={12} className="sm:w-3.5 sm:h-3.5" />
              <span className="hidden md:inline">vijayapathitraders@gmail.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            <span className="hidden md:inline whitespace-nowrap">Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform">
                VT
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-secondary group-hover:text-primary transition-colors">Vijayapathi Traders</h1>
                <p className="text-xs text-slate-600">Construction & Electrical Materials</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-slate-700 hover:text-primary font-semibold transition-all relative pb-1 text-sm xl:text-base ${
                    currentSection === item.id ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                  {currentSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-48 xl:w-64 text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
              </form>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <form onSubmit={handleSearch} className="mb-4 md:hidden px-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                </div>
              </form>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors text-sm ${
                    currentSection === item.id ? 'bg-primary/10 text-primary font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
