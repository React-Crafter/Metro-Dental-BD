import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { CLINIC_INFO } from "../constants/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Contact Us</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Have questions or ready to book your appointment? Our team is standing by to help you achieve your perfect smile.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5 glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                  <p className="text-gray-600">{CLINIC_INFO.phone}</p>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-brand-600 font-bold text-sm mt-2 block">Call Now</a>
                </div>
              </div>

              <div className="flex items-start gap-5 glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clinic Location</h4>
                  <p className="text-gray-600 leading-relaxed">{CLINIC_INFO.location}</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-brand-600 font-bold text-sm mt-2 block"
                  >
                    View on Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                  {CLINIC_INFO.openingHours.map((oh, i) => (
                    <p key={i} className="text-gray-600 text-sm">{oh.day}: {oh.time}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-display">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 transition-all font-medium"
                    placeholder="01XXX-XXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service You're Interested In</label>
                <select className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 transition-all font-medium appearance-none">
                  <option>Select a Service</option>
                  <option>Dental Implants</option>
                  <option>Braces Care</option>
                  <option>Root Canal</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 transition-all font-medium"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-500/20 flex items-center justify-center gap-2 hover:bg-brand-700 transition-all"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
