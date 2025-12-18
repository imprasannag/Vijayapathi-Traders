import { Building2, Users, Award, Target, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only premium products from trusted brands to ensure lasting value for our customers.'
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We provide personalized service and expert guidance.'
    },
    {
      icon: Heart,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through honest business practices and transparent pricing.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Expanding our product range and services to meet evolving customer needs.'
    }
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">About Vijayapathi Traders</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-2">
            Your trusted partner for construction and electrical materials in Madurai for over a decade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
          <div>
            <img
              src="/images/shop.jpg"
              alt="Store"
              className="rounded-lg shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-primary to-accent p-2 sm:p-3 rounded-lg shadow-lg">
                <Building2 className="text-white w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Our Story</h3>
                <p className="text-sm sm:text-base text-slate-600">Established in 2025</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
              Founded in 2025, Vijayapathi Traders has grown from a small retail shop to one of Madurai's most trusted suppliers of construction and electrical materials. Our journey began with a simple vision: to provide quality products at fair prices with exceptional service.
            </p>

            <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 leading-relaxed">
              Over the years, we've built strong relationships with leading manufacturers and brands, enabling us to offer our customers genuine products at wholesale prices. Today, we serve thousands of contractors, builders, electricians, and homeowners across Madurai and surrounding regions.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our extensive inventory includes sanitary ware, electrical supplies, paints, plumbing materials, motors, pumps, and much more. Whether you're building a new home, renovating, or working on a large commercial project, we have everything you need under one roof.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary via-accent to-primary rounded-2xl p-6 sm:p-8 md:p-12 text-white mb-12 sm:mb-16 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <Users size={40} className="sm:w-12 sm:h-12 text-accentLight" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-accentLight">5000+</h3>
              <p className="text-sm sm:text-base text-white/90">Satisfied Customers</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <Award size={40} className="sm:w-12 sm:h-12 text-accentLight" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-accentLight">50+</h3>
              <p className="text-sm sm:text-base text-white/90">Premium Brands</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <Building2 size={40} className="sm:w-12 sm:h-12 text-accentLight" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-accentLight">10+</h3>
              <p className="text-sm sm:text-base text-white/90">Years of Excellence</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center px-2">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <Icon className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center px-2">Why Choose Us?</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              'Genuine products from authorized dealers',
              'Competitive wholesale pricing for retail customers',
              'Expert product knowledge and guidance',
              'Wide range of brands and products',
              'Quick delivery across Madurai',
              'Flexible payment options',
              'After-sales support and service',
              'Bulk order discounts available'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-1 rounded-full mt-1">
                  <Award className="text-primary" size={16} />
                </div>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
