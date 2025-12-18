import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Testimonial } from '../lib/types';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('display_order');

    if (data) setTestimonials(data);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 text-blue-200" size={48} />

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}
                  />
                ))}
              </div>

              <blockquote className="text-xl text-slate-700 text-center mb-8 leading-relaxed">
                "{currentTestimonial.review}"
              </blockquote>

              <div className="text-center">
                <p className="text-lg font-semibold text-slate-900">{currentTestimonial.customer_name}</p>
                {currentTestimonial.company_name && (
                  <p className="text-blue-600 font-medium">{currentTestimonial.company_name}</p>
                )}
                {currentTestimonial.location && (
                  <p className="text-slate-500 text-sm mt-1">{currentTestimonial.location}</p>
                )}
              </div>
            </div>

            {testimonials.length > 1 && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-600 text-slate-700 hover:text-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-600 text-slate-700 hover:text-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-4 line-clamp-4">"{testimonial.review}"</p>
              <div>
                <p className="font-semibold text-slate-900">{testimonial.customer_name}</p>
                {testimonial.company_name && (
                  <p className="text-sm text-blue-600">{testimonial.company_name}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
