"use client";

import { useState, useEffect } from "react";
import imgBackground from "figma:asset/1556bae3582875dcb4c7b96154e495f76dd26d68.png";

const cardData = [
  {
    title: "Dashboard",
    items: [
      { icon: "📊", label: "My Products" },
      { icon: "🎯", label: "Orders", badge: "NEW" },
      { icon: "📈", label: "Analytics", count: 15 },
      { icon: "👥", label: "Customers" },
      { icon: "💰", label: "Payouts" },
    ]
  },
  {
    title: "Events",
    items: [
      { icon: "🎪", label: "Live Events" },
      { icon: "📅", label: "Upcoming" },
      { icon: "✓", label: "Past Events" },
      { icon: "⭐", label: "Featured" },
      { icon: "🎫", label: "My Tickets" },
    ]
  },
  {
    title: "Analytics",
    items: [
      { icon: "📊", label: "Overview" },
      { icon: "💹", label: "Sales" },
      { icon: "👤", label: "Users" },
      { icon: "🔥", label: "Popular" },
      { icon: "📈", label: "Growth" },
    ]
  }
];

export function Hero() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-black pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imgBackground} 
          alt="" 
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="bebas text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight">
              TICKETING MADE<br />
              <span className="text-[#FC3323]">SIMPLE. SAFE. SMART.</span>
            </h1>
            
            <p className="switzer text-gray-300 text-lg max-w-xl leading-relaxed">
              Experience the future of event ticketing with blockchain-powered security, 
              AI-driven recommendations, and real-time analytics. Join thousands of event 
              organizers who trust Febila for seamless ticket management.
            </p>

            <div className="flex gap-4">
              <button className="bebas px-8 py-4 bg-[#FC3323] text-white tracking-wide hover:bg-white hover:text-[#FC3323] transition-all duration-300">
                Get Started
              </button>
              <button className="bebas px-8 py-4 border-2 border-white text-white tracking-wide hover:bg-[#FC3323] hover:border-[#FC3323] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Image Slideshow */}
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentCard * 100}%)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1706419202046-e4982f00b082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwZXZlbnQlMjBjcm93ZHxlbnwxfHx8fDE3NjY3MjYxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Concert Event"
                className="w-full h-full object-cover flex-shrink-0"
              />
              <img 
                src="https://images.unsplash.com/photo-1610900538035-b04c4d957d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwbGlnaHRzfGVufDF8fHx8MTc2NjY2MDY2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Music Festival"
                className="w-full h-full object-cover flex-shrink-0"
              />
              <img 
                src="https://images.unsplash.com/photo-1764050359179-517599dab87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwZXZlbnR8ZW58MXx8fHwxNzY2NzIzODgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sports Stadium"
                className="w-full h-full object-cover flex-shrink-0"
              />
            </div>
            
            {/* Indicator dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCard(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentCard ? 'w-8 bg-[#FC3323]' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}