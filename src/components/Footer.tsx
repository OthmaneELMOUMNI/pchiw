/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Flame, Mail, MapPin, Shield, HelpCircle, Instagram, Youtube, Compass, ArrowUp, Phone } from "lucide-react";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const categories = [
    {
      title: "Coaching Pages",
      links: [
        { label: "Home Base", id: "home" },
        { label: "The Disciplines", id: "disciplines" },
        { label: "Pricing plans", id: "pricing" },
        { label: "Testimonials", id: "testimonials" },
        { label: "Apply Now", id: "contact" },
      ],
    },
    {
      title: "Active Protocols",
      items: [
        "Street Workout Foundations",
        "Adult Ring Muscle-Up Split",
        "Planche Progression Series",
        "Heavy Bag Strike & Slipping",
        "Fight Cardio VO2-Max",
        "Rest & Joint Repair guides",
      ],
    },
  ];

  return (
    <footer id="footer-root" className="bg-[#060606] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle neon glowing footer ring */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[#CCFF00]/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/5">
          
          {/* Column 1: Coach Brand Info (5/12) */}
          <div className="md:col-span-5 space-y-5">
            <div
              onClick={() => onScrollTo("home")}
              className="flex items-center space-x-2.5 cursor-pointer group w-fit"
            >
              <div className="bg-[#CCFF00] text-black p-1.5 rounded-full flex items-center justify-center">
                <Flame className="w-4 h-4 fill-current" />
              </div>
              <span className="font-sans font-black text-lg tracking-wider text-white">
                OUSSAMA <span className="text-[#CCFF00]">PCHIW</span>
              </span>
            </div>
            
            <p className="font-sans text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Premium Street Workout, Calisthenics, & Boxing conditioning designed to unlock physical dominance and absolute spatial mastery. Elevate your body, configure your macros, and join the elite.
            </p>

            {/* Social handles with custom designs */}
            <div className="flex space-x-3.5 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-neutral-900 hover:bg-[#CCFF00] hover:text-black border border-white/5 p-2.5 rounded-full transition-all duration-300 text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="bg-neutral-900 hover:bg-[#CCFF00] hover:text-black border border-white/5 p-2.5 rounded-full transition-all duration-300 text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollTo("contact");
                }}
                className="bg-neutral-900 hover:bg-[#CCFF00] hover:text-black border border-white/5 p-2.5 rounded-full transition-all duration-300 text-white"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (3/12) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-xs tracking-wider uppercase text-neutral-300">
              {categories[0].title}
            </h4>
            <ul className="space-y-2.5">
              {categories[0].links?.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onScrollTo(link.id)}
                    className="font-sans text-xs text-neutral-405 hover:text-[#CCFF00] transition-colors cursor-pointer text-left font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Active Disciplines list (2/12) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-xs tracking-wider uppercase text-neutral-300 font-semibold">
              {categories[1].title}
            </h4>
            <ul className="space-y-2 flex flex-col">
              {categories[1].items?.map((item, idx) => (
                <li key={idx} className="font-sans text-[11px] text-neutral-500 font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location/Contact coordinates (2/12) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-xs tracking-wider uppercase text-neutral-300 font-semibold">
              Direct Contact
            </h4>
            
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-neutral-450 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-3.5 h-3.5 text-[#CCFF00] flex-shrink-0" />
                <a href="mailto:coaching@oussamapchiw.com" className="font-sans text-[11px] leading-tight">
                  coaching@oussamapchiw.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-neutral-450">
                <MapPin className="w-3.5 h-3.5 text-[#CCFF00] flex-shrink-0" />
                <span className="font-sans text-[11px] leading-tight font-medium">
                  Elite Fitness, Morocco
                </span>
              </li>
              <li className="flex items-center space-x-2 text-neutral-450">
                <Phone className="w-3.5 h-3.5 text-[#CCFF00] flex-shrink-0" />
                <span className="font-sans text-[11px] leading-tight font-medium">
                  +44 7700 900077
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Footer Sub section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-neutral-500">
          <div>
            <span>
              &copy; {currentYear} Coach Oussama Pchiw. All Rights Reserved. Engineered for performance.
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
              <Shield className="w-3 h-3 text-[#CCFF00]" />
              <span>Terms & Private Policy</span>
            </div>
            <span>•</span>
            <button
              onClick={() => onScrollTo("home")}
              className="flex items-center space-x-1 text-neutral-500 hover:text-[#CCFF00] transition-colors cursor-pointer font-bold"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
