import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div id="cta" className="py-20 bg-brand-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--brand-200)_0%,_transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Ready to restore your smile?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#contact" 
                className="bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl shadow-black/20"
              >
                Book Your Visit
              </a>
              <a 
                href="tel:01716374977" 
                className="bg-brand-700/50 text-white border-2 border-white/30 px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-700 transition-all backdrop-blur-sm"
              >
                Call +8801716374977
              </a>
            </div>
          </div>
        </div>
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

