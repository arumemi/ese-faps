import React, { useState, useEffect } from "react";
import { Code, Import, Menu, X } from "lucide-react";
import { Nav_links, PERSONAL_INFO } from "../../utils/constants";
import { useScrollSpy } from "../../hooks/UseScrollSpy";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(Nav_links.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionID) => {
    const section = document.getElementById(sectionID);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-1000 top-0 left-0 right-0 py-4 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg backdrop-blur-lg" : "bg-transparent"
      }`}
      style={{ transform: "translate3d(0,0,1)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl  md:text-2xl font-bold text-amber-400 hover:text-primary transition-colors"
            >
              {PERSONAL_INFO.name.split(" 1")[0]}
            </button>
          </div>
          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-4 lg:gap-7">
            {Nav_links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.id)}
                className={`text-sm lg:text-base font-medium transition-all duration-300 mx-2 lg:mx-4
                  ${
                    activeSection === link.id
                      ? "text-amber-400"
                      : "text-white hover:text-amber-400"
                  }
                  `}
              >
                {link.title}
              </button>
            ))}

            {/* cta button */}
            <button
              onClick={() => handleNavLinkClick("contact")}
              className="px-3 lg:px-4 py-2 bg-white text-[#121212] text-sm lg:text-base font-medium rounded-[17px] border border-white hover:opacity-90 transition-all duration-300"
            >
              Contrate-me
            </button>
          </div>
          {/*mobile menu btn */}
        
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-amber-400 hover:bg-yellow-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} className="" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden border-t border-amber-400/20 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col items-stretch px-4 py-4">
          {Nav_links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className={`block w-full text-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                  ${
                    activeSection === link.id
                      ? "text-amber-400"
                      : "text-white hover:text-amber-400"
                  }
                  `}
            >
              {link.title}
            </button>
          ))}
          <button 
            onClick={() => handleNavLinkClick('contact')} 
            className="w-full px-7 py-3 text-black bg-white font-medium text-base rounded-lg border border-white hover:opacity-90 transition-all duration-300 mt-2"
          >
            Hire Me
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
