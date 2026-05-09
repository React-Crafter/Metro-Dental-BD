import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { CLINIC_INFO } from "../constants/content";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-display tracking-tight text-white">
                Metro Dental BD
              </h3>
              <p className="text-xs text-brand-400 font-bold uppercase tracking-widest mt-1">
                Dr Mustak Dental Care
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading dental clinic in Dhaka specializing in modern implants and braces care. Providing smiles that last a lifetime.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-brand-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              {["Implants", "Braces Care", "Root Canal", "Whitening", "Wisdom Tooth"].map((link) => (
                <li key={link}>
                  <a href="#services" className="hover:text-brand-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Get In Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-400 mt-1" />
                <span>{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-400 mt-1" />
                <span>{CLINIC_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-400 mt-1" />
                <span className="text-sm">{CLINIC_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
