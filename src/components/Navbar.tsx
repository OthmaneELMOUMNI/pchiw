/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Disciplines", id: "disciplines" },
    { label: "Pricing", id: "pricing" },
    { label: "Results", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section based on proximity to viewport
      const elements = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onScrollTo(id);
  };

  return (
    <nav
      id="navbar-root"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo Brand */}
          <div
            id="brand-logo"
            onClick={() => handleLinkClick("home")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-[#CCFF00] text-black w-8 h-8 rounded-sm flex items-center justify-center text-black font-black italic text-xl transition-transform group-hover:scale-110">
              P
            </div>
            <span className="font-sans font-black text-xl tracking-tighter uppercase text-white">
              OUSSAMA <span className="text-[#CCFF00]">PCHIW</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] text-white/45 border border-white/10 px-1.5 py-0.5 rounded tracking-widest uppercase font-bold">
              ELITE COACH
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-sans text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                    activeSection === link.id
                      ? "text-[#CCFF00] font-bold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              id="nav-cta"
              onClick={() => handleLinkClick("contact")}
              className="bg-transparent border border-[#CCFF00] text-white hover:bg-[#CCFF00] hover:text-black font-sans font-bold text-xs tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(204,255,0,0.15)]"
            >
              Contact
            </button>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div id="mobile-menu-trigger" className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out border-b border-white/10 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto bg-[#111111]"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-mobile-link-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold tracking-wide transition-colors ${
                activeSection === link.id
                  ? "text-[#CCFF00] bg-white/5 font-bold border-l-4 border-[#CCFF00]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 px-4">
            <button
              id="nav-mobile-cta"
              onClick={() => handleLinkClick("contact")}
              className="w-full bg-[#CCFF00] text-black hover:bg-[#b0dc00] font-sans font-extrabold text-sm tracking-wider uppercase py-3 rounded shadow-[0_0_20px_rgba(204,255,0,0.25)] transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
