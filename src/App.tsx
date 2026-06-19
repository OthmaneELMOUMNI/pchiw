/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Disciplines from "./components/Disciplines";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  /**
   * Performs high-precision smooth scrolling to target HTML sections
   */
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#080808] text-[#ededed] min-h-screen selection:bg-[#CCFF00] selection:text-black antialiased font-sans flex flex-col">
      {/* Top Level Sticky Navbar */}
      <Navbar onScrollTo={handleScrollToSection} />

      <main className="flex-grow">
        {/* Hero Section Banner */}
        <Hero onScrollTo={handleScrollToSection} />

        {/* Dual Disciplines section */}
        <Disciplines onScrollTo={handleScrollToSection} />

        {/* Pricing matrix tiers + Onboarding phase cards */}
        <Pricing onScrollTo={handleScrollToSection} />

        {/* Real life results / testimonials */}
        <Testimonials />

        {/* Intake and custom appraisal Form */}
        <ContactForm />
      </main>

      {/* Structured Footer coordinates list */}
      <Footer onScrollTo={handleScrollToSection} />

      <FloatingWhatsApp />
    </div>
  );
}
