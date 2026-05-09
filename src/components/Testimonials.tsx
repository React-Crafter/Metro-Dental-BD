import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants/content";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Patient Stories</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all"
            >
              <div className="absolute top-8 right-8 text-brand-100">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-brand-50"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
