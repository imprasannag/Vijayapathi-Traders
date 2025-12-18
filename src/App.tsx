import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import WhatsAppForm from "./components/WhatsAppForm";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleNavigate("products");
  };

  useEffect(() => {
    document.title =
      "Vijayapathi Traders - Construction & Electrical Materials | Madurai";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Leading supplier of construction materials, electrical supplies, sanitary ware, paints, and plumbing materials in Madurai. Quality products at wholesale prices. 10+ years of trusted service."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Leading supplier of construction materials, electrical supplies, sanitary ware, paints, and plumbing materials in Madurai. Quality products at wholesale prices. 10+ years of trusted service.";
      document.head.appendChild(meta);
    }

    const sections = [
      "home",
      "about",
      "products",
      "brands",
      "testimonials",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        onNavigate={handleNavigate}
        currentSection={currentSection}
      />

      <main>
        <section id="home">
          <Hero onNavigate={handleNavigate} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="categories">
          <Categories onCategorySelect={handleCategorySelect} />
        </section>

        <section id="products">
          <Products 
            selectedCategory={selectedCategory}
          />
        </section>

        <section id="brands">
          <Brands />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />

          {/* 🔹 WhatsApp Quote Form Added Here */}
          <div className="max-w-xl mx-auto mt-12 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Request a Quote
            </h2>
            <WhatsAppForm />
          </div>
        </section>
      </main>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
