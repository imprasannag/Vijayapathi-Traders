import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Phone, Mail, ShoppingCart, CheckCircle } from 'lucide-react';
import type { Product } from '../lib/types';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images.length > 0 ? product.images : ['https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-slate-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="relative bg-slate-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-blue-600 w-8' : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.slice(0, 4).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? 'border-blue-600' : 'border-transparent hover:border-slate-300'
                      }`}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-20 object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                {product.in_stock ? (
                  <span className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                    <CheckCircle size={16} />
                    In Stock
                  </span>
                ) : (
                  <span className="text-red-600 bg-red-50 px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </span>
                )}
                {product.featured && (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              {product.price_band && (
                <div className="mb-6">
                  <p className="text-sm text-slate-600 mb-1">Price Range</p>
                  <p className="text-3xl font-bold text-blue-600">{product.price_band}</p>
                  <p className="text-sm text-slate-500 mt-1">Contact us for exact pricing and bulk discounts</p>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Description</h3>
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              {Object.keys(product.specifications).length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Specifications</h3>
                  <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-slate-200 pb-2 last:border-0">
                        <span className="text-slate-600 font-medium capitalize">{key.replace(/_/g, ' ')}</span>
                        <span className="text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <a
                  href={`https://wa.me/91?text=Hi, I'd like to order ${product.name}. Please provide more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={20} />
                    Order via WhatsApp
                  </div>
                </a>

                <a
                  href="tel:+919876543210"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={20} />
                    Call to Order
                  </div>
                </a>

                <button
                  onClick={onClose}
                  className="w-full border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Need help?</strong> Contact our team for product recommendations, bulk pricing, or technical specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
