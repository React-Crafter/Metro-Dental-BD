import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC_INFO } from "../constants/content";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`font-display font-bold text-2xl tracking-tight ${isScrolled ? 'text-brand-600' : 'text-brand-600'}`}>
              Metro Dental BD
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-[0.2em] ${isScrolled ? 'text-gray-500' : 'text-gray-600'}`}>
              Dr Mustak Dental care
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-brand-700 hover:shadow-lg transition-all active:scale-95"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 pt-4">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="bg-brand-600 text-white w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-3 shadow-lg"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
