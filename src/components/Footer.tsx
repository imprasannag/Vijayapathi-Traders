export default function Footer({ onNavigate }: { onNavigate?: (section: string) => void }) {
  return (
<footer className="bg-secondary text-gray-200">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-14">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

      {/* Brand */}
      <div className="sm:col-span-2 md:col-span-1">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="bg-primary text-white font-bold rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base">
            VT
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-accentLight">
            Vijayapathi Traders
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-0">
          Your trusted partner for construction and electrical materials
          in Madurai since 2025.
        </p>

        <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5">
          <span className="bg-primary p-1.5 sm:p-2 rounded hover:bg-accent cursor-pointer transition-colors text-xs sm:text-sm">f</span>
          <span className="bg-primary p-1.5 sm:p-2 rounded hover:bg-accent cursor-pointer transition-colors text-xs sm:text-sm">t</span>
          <span className="bg-primary p-1.5 sm:p-2 rounded hover:bg-accent cursor-pointer transition-colors text-xs sm:text-sm">i</span>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-accentLight font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
          Quick Links
        </h3>
        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }} className="hover:text-accentLight cursor-pointer transition-colors">Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate?.('about'); }} className="hover:text-accentLight cursor-pointer transition-colors">About Us</a></li>
          <li><a href="#products" onClick={(e) => { e.preventDefault(); onNavigate?.('products'); }} className="hover:text-accentLight cursor-pointer transition-colors">Products</a></li>
          <li><a href="#brands" onClick={(e) => { e.preventDefault(); onNavigate?.('brands'); }} className="hover:text-accentLight cursor-pointer transition-colors">Brands</a></li>
          <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); onNavigate?.('testimonials'); }} className="hover:text-accentLight cursor-pointer transition-colors">Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }} className="hover:text-accentLight cursor-pointer transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Product Categories */}
      <div>
        <h3 className="text-accentLight font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
          Product Categories
        </h3>
        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
          <li><a href="#products" className="hover:text-accentLight transition-colors">Sanitary Ware</a></li>
          <li><a href="#products" className="hover:text-accentLight transition-colors">Electrical Supplies</a></li>
          <li><a href="#products" className="hover:text-accentLight transition-colors">Paints & Coatings</a></li>
          <li><a href="#products" className="hover:text-accentLight transition-colors">Plumbing Materials</a></li>
          <li><a href="#products" className="hover:text-accentLight transition-colors">Motors & Pumps</a></li>
          <li><a href="#products" className="hover:text-accentLight transition-colors">Accessories</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-accentLight font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
          Contact Info
        </h3>

        <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
          3/516/ABC Main Road, Sikkandar Chavadi,<br />
          Alanganallur Main Road,<br />
          Madurai – 625018
        </p>

        <p className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">
          📞 +91 9842133726
        </p>

        <p className="text-xs sm:text-sm text-gray-300 break-all">
          ✉️ info@vijayapathitraders.com
        </p>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary/30 mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between text-xs sm:text-sm text-gray-400 gap-3">
      <p>© 2025 Vijayapathi Traders. All rights reserved.</p>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        <a className="hover:text-accentLight transition-colors cursor-pointer">Privacy Policy</a>
        <a className="hover:text-accentLight transition-colors cursor-pointer">Terms</a>
        <a className="hover:text-accentLight transition-colors cursor-pointer">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
  );
}
