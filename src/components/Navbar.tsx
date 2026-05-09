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
        (isScrolled || isOpen) ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`font-display font-bold text-xl md:text-2xl tracking-tight text-brand-600`}>
              Metro Dental BD
            </span>
            <span className={`text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] ${isScrolled || isOpen ? 'text-gray-500' : 'text-gray-600'}`}>
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
              className="text-gray-900 p-3 -mr-2 focus:outline-none transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} className="text-brand-600" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.9, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl absolute top-full left-0 w-full"
          >
            <div className="px-5 pt-4 pb-8 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-brand-50 hover:text-brand-600 rounded-xl transition-all border-b border-gray-50 last:border-0"
                >
                  {link.name}
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
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
