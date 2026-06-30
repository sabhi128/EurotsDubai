import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <motion.a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.08, rotate: -3 }}
        whileTap={{ scale: 0.94 }}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_44px_rgba(37,211,102,0.45)]"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <MessageCircle className="size-6" strokeWidth={2.2} />
      </motion.a>
      <motion.a
        href={site.phoneHref}
        aria-label="Call us"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, type: "spring", stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.08, rotate: 3 }}
        whileTap={{ scale: 0.94 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-[0_18px_44px_rgba(196,162,77,0.45)]"
      >
        <Phone className="size-6" strokeWidth={2.2} />
      </motion.a>
    </div>
  );
}