import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '919876543210';

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-6 bg-white rounded-lg shadow-2xl w-80 md:w-96 z-50 overflow-hidden animate-slide-up">
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Vijayapathi Traders</h3>
                <p className="text-xs text-green-100">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-green-700 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4 bg-slate-50">
            <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
              <p className="text-sm text-slate-700">
                Hello! How can we help you today?
              </p>
              <p className="text-xs text-slate-500 mt-1">Choose an option below:</p>
            </div>

            <div className="space-y-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I'd like to inquire about your products`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white hover:bg-green-50 border border-slate-200 hover:border-green-300 rounded-lg p-3 transition-all"
              >
                <p className="text-sm font-medium text-slate-900">Product Inquiry</p>
                <p className="text-xs text-slate-600">Ask about our products</p>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I need a quote for bulk order`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white hover:bg-green-50 border border-slate-200 hover:border-green-300 rounded-lg p-3 transition-all"
              >
                <p className="text-sm font-medium text-slate-900">Request Quote</p>
                <p className="text-xs text-slate-600">Get pricing for bulk orders</p>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I need help with my order`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white hover:bg-green-50 border border-slate-200 hover:border-green-300 rounded-lg p-3 transition-all"
              >
                <p className="text-sm font-medium text-slate-900">Customer Support</p>
                <p className="text-xs text-slate-600">Get help with your order</p>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 text-white rounded-lg p-3 transition-colors text-center font-medium"
              >
                Start Chat
              </a>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 md:right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50 group"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <>
            <MessageCircle size={28} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </>
        )}
      </button>
    </>
  );
}
