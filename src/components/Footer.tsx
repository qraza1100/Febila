export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="bebas text-3xl mb-6 tracking-wide">FEBILA</h3>
            <p className="switzer text-gray-400 mb-6 leading-relaxed">
              Revolutionizing event ticketing with blockchain technology and AI-powered solutions. 
              Simple, safe, and smart ticketing for the modern age.
            </p>
            <p className="switzer text-sm text-gray-500">
              Copyright © Febila All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="bebas text-xl mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#careers" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="bebas text-xl mb-4 tracking-wide">HELP</h4>
            <ul className="space-y-3">
              <li>
                <a href="#support" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#terms" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="bebas text-xl mb-4 tracking-wide">CONTACT</h4>
            <ul className="space-y-3">
              <li>
                <a href="#email" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="#phone" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  Phone
                </a>
              </li>
              <li>
                <a href="#faq" className="switzer text-gray-400 hover:text-[#FC3323] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
