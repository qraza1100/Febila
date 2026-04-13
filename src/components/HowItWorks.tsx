"use client";

import { useState } from "react";
import imgHowItWorksImage32 from "figma:asset/e579b3132c5f96298f03c69a0276b327dcd9a665.png";
import imgHowItWorksImage1 from "figma:asset/d80f63ff5b975c5e58e4973b9f5773fa77bcf3ac.png";
import imgHowItWorksImage30 from "figma:asset/291a425613dbec6b91fd3e30bf865a99453fadc5.png";
import imgHowItWorksImage28 from "figma:asset/fa8e4317b372b8a0d23f458db771912abebb7f33.png";
import imgHowItWorksImage26 from "figma:asset/60d77579cacdcd3c403039949afb73e49b6d0083.png";

const steps = [
  {
    title: "DISCOVER EVENTS INSTANTLY",
    description: "Browse through thousands of verified events from concerts to conferences. Our smart search and AI recommendations help you find exactly what you're looking for.",
    image: imgHowItWorksImage32
  },
  {
    title: "CHOOSE YOUR TICKETS",
    description: "Select your preferred seats and ticket types. View real-time availability and pricing with complete transparency. No hidden fees, no surprises.",
    image: imgHowItWorksImage1
  },
  {
    title: "SECURE CHECKOUT & BLOCKCHAIN VERIFICATION",
    description: "Complete your purchase with enterprise-grade security. Every ticket is instantly verified and recorded on the blockchain, creating an immutable proof of ownership.",
    image: imgHowItWorksImage30
  },
  {
    title: "BLOCKCHAIN BACKED TICKET OWNERSHIP",
    description: "Your ticket is now secured on the blockchain. Transfer, resell, or gift your tickets with complete confidence. Every transaction is transparent and verifiable.",
    image: imgHowItWorksImage28
  }
];

const extraSteps = [
  {
    title: "RECEIVE TICKETS VIA EMAIL",
    description: "Get instant confirmation and digital tickets delivered to your email. Access them anytime from any device.",
    image: imgHowItWorksImage26
  },
  {
    title: "KEEP FOR TRANSFER TICKETS SECURELY",
    description: "Store your tickets safely in your digital wallet. Transfer ownership seamlessly when needed with blockchain verification.",
    image: imgHowItWorksImage32
  }
];

export function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="bebas text-5xl md:text-6xl lg:text-7xl text-center mb-16 tracking-wide">
          HOW IT WORKS
        </h2>

        {/* Main Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Black cube container */}
              <div className="relative bg-[#0a0a0a] border-2 border-white/10 rounded-none p-6 h-96 flex flex-col items-center justify-end overflow-hidden transition-all duration-500 hover:border-[#FC3323]/50 shadow-xl">
                
                {/* Gradient background that appears on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#FC3323]/40 via-orange-500/30 to-red-600/20 transition-opacity duration-700 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* 3D Character that slides up from behind */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 transition-all duration-700 ease-out ${
                    hoveredIndex === index
                      ? 'translate-y-[-80px] opacity-100'
                      : 'translate-y-[100px] opacity-0'
                  }`}
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>

                {/* Content that fades in */}
                <div
                  className={`relative z-10 text-center transition-all duration-500 delay-150 pb-4 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <h3 className="bebas text-xl mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="switzer text-xs text-gray-400 leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>

                {/* Default title shown when not hovering */}
                <div
                  className={`absolute bottom-6 left-6 right-6 text-center transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <h3 className="bebas text-lg tracking-wide leading-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Red accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC3323] to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Steps */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {extraSteps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index + 4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-[#0a0a0a] border-2 border-white/10 rounded-none p-8 h-80 flex flex-col items-center justify-end overflow-hidden transition-all duration-500 hover:border-[#FC3323]/50 shadow-xl">
                
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#FC3323]/40 via-orange-500/30 to-red-600/20 transition-opacity duration-700 ${
                    hoveredIndex === index + 4 ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-56 transition-all duration-700 ease-out ${
                    hoveredIndex === index + 4
                      ? 'translate-y-[-60px] opacity-100'
                      : 'translate-y-[100px] opacity-0'
                  }`}
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>

                <div
                  className={`relative z-10 text-center transition-all duration-500 delay-150 pb-4 ${
                    hoveredIndex === index + 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <h3 className="bebas text-xl mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="switzer text-xs text-gray-400 leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>

                <div
                  className={`absolute bottom-6 left-6 right-6 text-center transition-all duration-500 ${
                    hoveredIndex === index + 4 ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <h3 className="bebas text-lg tracking-wide leading-tight">
                    {step.title}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC3323] to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}