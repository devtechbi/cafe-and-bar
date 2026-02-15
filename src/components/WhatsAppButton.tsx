import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919990055405?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20reservations."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 animate-pulse-gold"
    style={{ backgroundColor: "#25D366" }}
  >
    <MessageCircle size={26} className="text-primary-foreground" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
