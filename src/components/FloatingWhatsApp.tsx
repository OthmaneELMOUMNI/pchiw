import React from "react";
import { WHATSAPP_URL } from "../contact";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Oussama on WhatsApp"
      className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-black shadow-[0_0_32px_rgba(37,211,102,0.35)] ring-1 ring-white/10 transition-all duration-300 hover:w-40 hover:scale-105 hover:bg-[#20bd5a] active:scale-95 focus:w-40 focus:outline-none focus:ring-2 focus:ring-[#CCFF00] focus:ring-offset-2 focus:ring-offset-[#080808]"
    >
      <WhatsAppIcon className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:rotate-6 group-focus:rotate-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-sans text-xs font-black uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-24 group-hover:opacity-100 group-focus:ml-2 group-focus:max-w-24 group-focus:opacity-100">
        WhatsApp
      </span>
    </a>
  );
}
