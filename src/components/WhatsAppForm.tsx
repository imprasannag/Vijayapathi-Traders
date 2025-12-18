import { useState } from "react";

export default function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
New Enquiry - Vijayapathi Traders

Name: ${formData.name}
Phone: ${formData.phone}
Product: ${formData.product}
Quantity: ${formData.quantity}
Location: ${formData.location}
    `;

    const whatsappNumber = "918248648023"; // 🔴 REPLACE with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="product"
        placeholder="Product Required"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <select
        name="quantity"
        aria-label="Select Quantity"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      >
        <option value="">Select Quantity</option>
        <option value="Retail">Retail</option>
        <option value="Wholesale">Wholesale</option>
      </select>

      <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
