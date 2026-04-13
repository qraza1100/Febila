import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatWeOffer />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
