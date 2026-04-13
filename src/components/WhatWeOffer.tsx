"use client";

import { useState } from "react";

const offerings = [
  {
    title: "BLOCKCHAIN SECURITY",
    description: "100% Authentic Tickets. Zero Fraud. Every ticket purchased on Febila is instantly recorded on an immutable blockchain network. This creates a transparent, unchangeable record of ownership, ensuring that what you buy is real and cannot be counterfeited, guaranteeing absolute peace of mind for buyers and organizers."
  },
  {
    title: "AI RECOMMENDATIONS",
    description: "Smart suggestions powered by advanced AI algorithms. Get personalized event recommendations based on your preferences, past attendance, and trending events in your area. Our AI learns from your behavior to provide increasingly accurate suggestions."
  },
  {
    title: "LIVE ANALYTICS",
    description: "Real-time insights into your event performance. Track ticket sales, attendance patterns, revenue metrics, and audience demographics as they happen. Make data-driven decisions with comprehensive analytics dashboards and customizable reports."
  },
  {
    title: "24/7 AVAILABILITY",
    description: "Round-the-clock customer support and system uptime. Our platform is always available when you need it, with dedicated support teams ready to assist you at any time. Experience uninterrupted service with 99.9% uptime guarantee."
  }
];

export function WhatWeOffer() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="bebas text-5xl md:text-6xl lg:text-7xl text-center mb-16 tracking-wide">
          WHAT WE OFFER
        </h2>

        <div className="max-w-5xl mx-auto space-y-4">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`border-2 transition-all duration-500 ${
                expandedIndex === index
                  ? 'border-[#FC3323] bg-gradient-to-r from-[#FC3323]/10 to-transparent'
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
              >
                <h3 className="bebas text-2xl md:text-3xl lg:text-4xl tracking-wide group-hover:text-[#FC3323] transition-colors">
                  {offering.title}
                </h3>
                <div
                  className={`text-2xl transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute w-6 h-0.5 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <div
                        className={`absolute w-0.5 h-6 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                          expandedIndex === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="border-t-2 border-[#FC3323] pt-6">
                    <h4 className="bebas text-2xl md:text-3xl text-[#FC3323] mb-4 tracking-wide">
                      {offering.title}
                    </h4>
                    <p className="switzer text-gray-300 text-base md:text-lg leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
