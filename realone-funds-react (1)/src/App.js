import React from "react";

const features = [
  "12%–14% fixed annual returns",
  "5-year investment term",
  "No management or performance fees",
  "No capital calls",
  "SEC Regulation D, Rule 506(c) compliant",
];

const fundTypes = [
  {
    title: "RealOne Fixed Income Fund",
    description:
      "Designed for stable, passive income through real estate-backed promissory notes. Earn 12%–14% fixed interest annually.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "RealOne Diversified Fund",
    description:
      "Gain exposure to multifamily, industrial, and retail properties across regions with balanced growth and income.",
    image: "https://images.unsplash.com/photo-1617104678930-11f1f640ecd2?auto=format&fit=crop&w=800&q=60",
  },
];

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="relative">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1950&q=80"
          alt="Dallas skyline"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">RealOne Financials Real Estate Funds</h1>
          <p className="text-lg max-w-3xl">
            Secure. Structured. Smart Real Estate Investing focused on the growing Dallas-Fort Worth market.
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Invest with RealOne?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-xl shadow">
              <p className="text-lg font-medium text-indigo-800">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Fund Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fundTypes.map(({ title, description, image }) => (
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <img src={image} alt={title} className="w-full h-60 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-700 mb-4">{description}</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">Ready to Invest in Your Future?</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600">
          Whether you're seeking stable returns or diversified exposure, RealOne Financials has a fund for you.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-700">
          Get Started Today
        </button>
      </section>

      <footer className="bg-gray-100 text-center p-6 text-sm text-gray-600">
        © {new Date().getFullYear()} RealOne Financials. All rights reserved.
      </footer>
    </div>
  );
}
