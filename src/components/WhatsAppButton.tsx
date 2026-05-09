import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { CLINIC_INFO } from "../constants/content";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={CLINIC_INFO.socials.whatsapp}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  );
}
