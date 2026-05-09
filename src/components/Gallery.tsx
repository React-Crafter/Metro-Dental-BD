import { motion } from "motion/react";
import { IMAGES } from "../constants/images";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Gallery</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Inside Our <span className="text-gradient">Clinic</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our modern facilities and the comfortable environment we've created for our patients.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.gallery.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={image}
                alt={`Gallery ${i}`}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold bg-brand-600/80 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Large
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
