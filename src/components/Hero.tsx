import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import { CLINIC_INFO } from "../constants/content";
import { IMAGES } from "../constants/images";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/50 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-brand-200/30 blur-3xl rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Now Accepting New Patients
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              Professional <span className="text-brand-600">Dental Care</span> For Your Beautiful Smile
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Experience the highest quality dental services with state-of-the-art technology and personalized care from {CLINIC_INFO.tagline}.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-500/20 flex items-center gap-2 hover:bg-brand-700 transition-all"
              >
                Book Appointment
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${CLINIC_INFO.phone}`}
                className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:border-brand-200 transition-all"
              >
                <Phone size={20} className="text-brand-600" />
                Call Now
              </motion.a>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">5,000+ Happy Smiles</p>
                <p className="text-xs text-gray-500">Trusted by families in Dhaka</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
              <img
                src={IMAGES.hero[0]}
                alt="Clinic Hero"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20 hidden sm:flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Quick Support</p>
                <p className="text-sm font-bold text-gray-900">Online Consultation</p>
              </div>
            </motion.div>
            
            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
            >
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-bold text-gray-900">4.9/5 Rating</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
