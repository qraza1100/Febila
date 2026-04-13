import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for small events and individual organizers getting started",
    features: [
      "Up to 100 Tickets Per Event",
      "Blockchain Verification",
      "Basic Analytics Dashboard",
      "Email Support",
      "Standard Event Listings",
      "Mobile-Optimized Tickets",
      "QR Code Generation",
      "Basic Customer Support",
    ],
    buttonText: "Get Started",
    highlighted: false
  },
  {
    name: "Professional",
    price: "$25",
    period: "/month",
    description: "Ideal for growing businesses and regular event organizers",
    features: [
      "Unlimited Tickets",
      "Advanced Blockchain Security",
      "AI-Powered Recommendations",
      "Real-Time Live Analytics",
      "Priority Email & Chat Support",
      "Custom Event Branding",
      "Advanced Reporting Tools",
      "Multi-Currency Support",
      "Ticket Transfer Management",
      "API Access",
      "Dedicated Account Manager",
    ],
    buttonText: "Start Free Trial",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$100",
    period: "/month",
    description: "Comprehensive solution for large-scale events and organizations",
    features: [
      "Unlimited Tickets & Events",
      "Enterprise Blockchain Infrastructure",
      "White-Label Solutions",
      "24/7 Priority Phone Support",
      "Advanced Security Features",
      "Custom Integration",
      "Dedicated Success Team",
      "SLA Guarantee",
      "Advanced Fraud Detection",
      "Custom Reporting",
      "On-Premise Deployment Option",
    ],
    buttonText: "Contact Sales",
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="bebas text-5xl md:text-6xl lg:text-7xl mb-4 tracking-wide">
            PRICING
          </h2>
          <p className="bebas text-3xl md:text-4xl text-gray-400 tracking-wide">
            AFFORDABLE & SCALABLE
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border-2 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#FC3323] border-[#FC3323] scale-105 shadow-2xl shadow-[#FC3323]/20'
                  : 'bg-black border-white/20 hover:border-[#FC3323]/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-6 py-1 rounded-full">
                  <span className="bebas text-[#FC3323] tracking-wide">MOST POPULAR</span>
                </div>
              )}

              <div className="p-8">
                <h3 className={`bebas text-3xl mb-2 tracking-wide ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className={`bebas text-5xl ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`switzer text-xl ${plan.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>

                <p className={`switzer text-sm mb-8 ${plan.highlighted ? 'text-white/90' : 'text-gray-400'}`}>
                  {plan.description}
                </p>

                <button
                  className={`w-full bebas py-4 px-6 rounded tracking-wide transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-[#FC3323] hover:bg-gray-100'
                      : 'bg-[#FC3323] text-white hover:bg-white hover:text-[#FC3323]'
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`mt-0.5 ${plan.highlighted ? 'text-white' : 'text-[#FC3323]'}`}>
                        <Check className="w-5 h-5" />
                      </div>
                      <span className={`switzer text-sm ${plan.highlighted ? 'text-white' : 'text-gray-300'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
