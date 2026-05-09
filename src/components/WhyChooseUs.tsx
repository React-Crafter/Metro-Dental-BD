import { motion } from "motion/react";
import { Stethoscope, HeartPulse, Clock, Sparkles, Smile, ShieldCheck } from "lucide-react";

const reasons = [
  {
    title: "Experienced Dental Care",
    desc: "Our team brings years of expertise in specialized dental treatments.",
    icon: Stethoscope,
  },
  {
    title: "Modern Equipment",
    desc: "We use the latest technology for precise and effective dental care.",
    icon: Sparkles,
  },
  {
    title: "Pain Free Treatment",
    desc: "Your comfort is our priority. We ensure a gentle dental experience.",
    icon: HeartPulse,
  },
  {
    title: "Affordable Service",
    desc: "Premium dental care that fits your budget with transparent pricing.",
    icon: ShieldCheck,
  },
  {
    title: "Friendly Environment",
    desc: "A warm, welcoming clinic where you'll feel right at home.",
    icon: Smile,
  },
  {
    title: "Emergency Support",
    desc: "We're here for you when you need urgent dental care services.",
    icon: Clock,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-gray-50 hover:bg-brand-600 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-600 mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <reason.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-display group-hover:text-white transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Giving You the Smile <br /><span className="text-gradient">You've Always Dreamed Of</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand that choosing a dentist is a significant decision. Here's why thousands of patients trust Metro Dental BD for their oral health.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Patient-First Philosophy</h4>
                  <p className="text-gray-600">We don't just treat teeth; we treat people. Every treatment is tailored to your unique needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Guaranteed Safety</h4>
                  <p className="text-gray-600">We follow international sterilization standards to ensure your safety and hygiene at every step.</p>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
