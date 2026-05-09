import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "../constants/content";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            Comprehensive Dental <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We offer a wide range of specialized dental treatments to help you achieve and maintain a healthy, beautiful smile.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Activity;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-50">
                  <button className="text-brand-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <LucideIcons.ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
