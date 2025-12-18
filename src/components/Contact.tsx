import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    message: '',
    inquiry_type: 'contact' as 'contact' | 'quote'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const { error } = await supabase
      .from('inquiries')
      .insert([formData] as any);

    setIsSubmitting(false);

    if (error) {
      setSubmitError('Failed to submit inquiry. Please try again or contact us directly.');
    } else {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        message: '',
        inquiry_type: 'contact'
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">Get In Touch</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 px-2">
            Have questions? Need a quote? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Contact Information</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Visit Us</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                          3/516/ABC Main Road, Sikkandar Chavadi , Alanganallur Main Road<br />
                  Madurai, TN 625018
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Call Us</h4>
                   
                    <a href="tel:+919842133726" className="text-primary hover:text-accent hover:underline block transition-colors text-xs sm:text-sm">
                      +91 98421 33726
                    </a>
                      <a href="tel:0452 2669667" className="text-primary hover:text-accent hover:underline block transition-colors text-xs sm:text-sm">
                      +91 8072352445
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Email Us</h4>
                    <a href="mailto:info@vijayapathitraders.com" className="text-primary hover:text-accent hover:underline block transition-colors text-xs sm:text-sm break-all">
                      info@vijayapathitraders.com
                    </a>
                    <a href="mailto:sales@vijayapathitraders.com" className="text-primary hover:text-accent hover:underline block transition-colors text-xs sm:text-sm break-all">
                      sales@vijayapathitraders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Clock className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Business Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 9.00AM -1.00pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden h-48 sm:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9902978849444!2d78.1197!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send us a Message</h3>

            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Thank you! We'll get back to you soon.</span>
              </div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="inquiry_type" className="block text-sm font-medium text-slate-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  required
                >
                  <option value="contact">General Inquiry</option>
                  <option value="quote">Request Quote</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company_name" className="block text-sm font-medium text-slate-700 mb-2">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary disabled:bg-slate-400 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-r-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
