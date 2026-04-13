export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="bebas text-2xl tracking-wide">FEBILA</div>
          
          <div className="hidden md:flex items-center gap-8 switzer">
            <a href="#home" className="text-white hover:text-[#FC3323] transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-[#FC3323] transition-colors">
              About
            </a>
            <a href="#explore" className="text-white hover:text-[#FC3323] transition-colors">
              Explore
            </a>
            <a href="#events" className="text-white hover:text-[#FC3323] transition-colors">
              Events
            </a>
            <a href="#members" className="text-white hover:text-[#FC3323] transition-colors">
              Members
            </a>
            <a href="#contact" className="text-white hover:text-[#FC3323] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
