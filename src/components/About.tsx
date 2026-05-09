import { motion } from "motion/react";
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";
import { CLINIC_INFO } from "../constants/content";
import { IMAGES } from "../constants/images";

const stats = [
  { icon: Award, label: "Exp. Years", value: "15+" },
  { icon: Users, label: "Patients", value: "10k+" },
  { icon: ShieldCheck, label: "Trust Rate", value: "99%" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.about}
                alt="About Clinic"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 bg-brand-600 p-5 md:p-8 rounded-2xl md:rounded-3xl text-white shadow-2xl z-20">
              <p className="text-2xl md:text-4xl font-bold mb-1">15+</p>
              <p className="text-[10px] md:text-sm opacity-80 uppercase tracking-widest font-bold leading-tight">Years of Excellence</p>
            </div>
            
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-100 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">About the Clinic</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              A Modern Approach To <span className="text-gradient">Dental Wellness</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At {CLINIC_INFO.name}, led by Dr Mustak, we are committed to providing the highest quality dental care in a comfortable and friendly environment. Our clinic is equipped with the latest modern dental technology to ensure precise treatments and exceptional results.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Personalized treatment plans for every patient",
                "State-of-the-art sterilization and hygiene",
                "Advanced dental implants and braces care",
                "Comfortable and pain-free experience"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-gray-50 text-center hover:bg-brand-50 transition-colors">
                  <stat.icon className="mx-auto text-brand-600 mb-2" size={24} />
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
