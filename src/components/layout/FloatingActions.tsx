import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  const msg = encodeURIComponent("Hello Unicorn Rubbers, I would like a quote for: ");
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/919848568605?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="h-13 w-13 grid place-items-center rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 transition"
        style={{ height: 52, width: 52 }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+919848568605"
        aria-label="Call"
        className="h-13 w-13 grid place-items-center rounded-full bg-ember text-ember-foreground shadow-ember hover:scale-105 transition md:hidden"
        style={{ height: 52, width: 52 }}
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
