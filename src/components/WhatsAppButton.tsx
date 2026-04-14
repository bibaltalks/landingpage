import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Hey%20Anibal%2C%20I%20saw%20your%20page%20and%20I%27m%20interested%20in%20classes.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
