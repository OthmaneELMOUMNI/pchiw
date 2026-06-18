/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, X, Shield, ArrowRight, Sparkles, Flame, Percent } from "lucide-react";
import { PRICING_PLANS, ONBOARDING_STEPS } from "../data";

interface PricingProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Pricing({ onScrollTo }: PricingProps) {
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [selectedPass, setSelectedPass] = useState(5);

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#CCFF00]/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-red-600/2 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div id="pricing-header" className="max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-neutral-950 border border-white/5 rounded-full py-1.5 px-3.5 mb-4">
            <Percent className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span className="font-mono text-[10px] tracking-widest text-[#CCFF00] uppercase font-bold">
              Investment Options
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Professional 1-on-1 Coaching
          </h2>
          <div className="w-16 h-1 bg-[#CCFF00] mt-4 mb-5 rounded-full" />
          <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed">
            Get elite physical transformation results in Morocco. Coach Oussama does absolutely everything for you: from programming your custom workout splits to designing your custom meal plans with exactly what to eat, combined with a daily direct follow-up.
          </p>

          {/* Toggle Billing Selector */}
          <div id="billing-cycle-selector" className="flex items-center space-x-4 mt-8 bg-neutral-950 p-1.5 rounded-full border border-white/5">
            <button
              onClick={() => setIsQuarterly(false)}
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                !isQuarterly ? "bg-[#CCFF00] text-black shadow-lg" : "text-neutral-400 hover:text-white"
              }`}
            >
              Monthly Cycle
            </button>
            <button
              onClick={() => setIsQuarterly(true)}
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap flex items-center space-x-1.5 cursor-pointer ${
                isQuarterly ? "bg-[#CCFF00] text-black shadow-lg" : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>Quarterly Package</span>
              <span className="bg-red-650 text-white text-[9px] font-mono leading-none px-1.5 py-0.5 rounded font-black uppercase">
                Save ~20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div id="pricing-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => {
            const activePrice = isQuarterly ? plan.priceQuarterly : plan.price;
            return (
              <motion.div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-3xl flex flex-col justify-between p-6 sm:p-8 border shadow-2xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#111111] border-[#CCFF00] ring-1 ring-[#CCFF00]/20 md:scale-105 z-10"
                    : "bg-[#111111]/80 border-white/5 hover:border-white/10"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Popularity Badge Ornament */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black text-[9px] font-mono font-black tracking-widest px-4 py-1.5 rounded-full uppercase flex items-center space-x-1 shadow-lg font-bold">
                    <Flame className="w-3 h-3 fill-current" />
                    <span>Coach's Selection — Most Popular</span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-left">
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-white tracking-wide uppercase">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-neutral-500 text-xs mt-1.5 leading-relaxed min-h-[40px]">
                    {plan.tagline}
                  </p>

                  {/* Price display stack */}
                  <div className="flex items-baseline mt-6 border-b border-white/5 pb-6">
                    <span className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight">
                      {activePrice}
                    </span>
                    <span className="font-mono text-xs text-neutral-400 uppercase font-black tracking-wider ml-1.5">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Included Features List */}
                <div className="text-left mt-6 flex-grow">
                  <span className="font-sans font-extrabold text-[10px] tracking-wider uppercase text-neutral-400">
                    What You Get:
                  </span>
                  <ul className="space-y-3.5 mt-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5">
                        <div className="bg-[#CCFF00]/10 text-[#CCFF00] p-0.5 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-sans text-xs text-neutral-300 leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}

                    {/* Excluded features mapped with clear styled crosses */}
                    {plan.unavailableFeatures && plan.unavailableFeatures.map((unFeature, unIdx) => (
                      <li key={`un-${unIdx}`} className="flex items-start space-x-2.5 opacity-35">
                        <div className="bg-red-600/10 text-red-500 p-0.5 rounded-full flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3" />
                        </div>
                        <span className="font-sans text-xs text-neutral-500 line-through leading-tight">
                          {unFeature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA actions */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button
                    onClick={() => onScrollTo("contact")}
                    className={`w-full py-4 rounded-full font-sans font-black text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#CCFF00] text-black hover:bg-[#b0df00] shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                        : "bg-neutral-900 text-white hover:bg-[#1a1a1a] hover:text-[#CCFF00] border border-white/5"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center space-x-1.5 mt-3 text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                    <Shield className="w-3 h-3" />
                    <span>Secured check-ins</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elite Pay-Per-Session Alternative */}
        <motion.div
          id="private-session-showcase"
          className="max-w-4xl mx-auto mb-28 p-8 md:p-10 rounded-3xl bg-[#111111]/90 border border-[#CCFF00]/15 relative overflow-hidden text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle neon detail */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#CCFF00]/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Session Info */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-full py-1 px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
                <span className="font-mono text-[9px] tracking-widest text-[#CCFF00] uppercase font-bold">
                  In-Person / Live Sessions Option
                </span>
              </div>
              
              <h3 className="font-sans font-black text-2xl md:text-3xl text-white tracking-wide uppercase">
                Private 1-on-1 Sessions
              </h3>
              
              <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Prefer hands-on personal attention with a fully customized session-by-session approach? Book expert private training slots in Morocco directly. Excellent for immediate boxing padwork, biomechanical checks, or targeted calisthenics skill progressions with Coach Oussama.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2.5">
                  <div className="bg-[#CCFF00]/10 text-[#CCFF00] p-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans text-xs text-neutral-300">Flexible Hourly Schedule</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="bg-[#CCFF00]/10 text-[#CCFF00] p-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans text-xs text-neutral-300">Intense Boxing Padwork</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="bg-[#CCFF00]/10 text-[#CCFF00] p-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans text-xs text-neutral-300">Elite Gymnasium Locations</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="bg-[#CCFF00]/10 text-[#CCFF00] p-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans text-xs text-neutral-300">Instant Physical Corrections</span>
                </div>
              </div>
            </div>

            {/* Interactive Package selector card */}
            <div className="md:col-span-5 bg-[#080808]/95 border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-auto relative">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase font-black block mb-1">
                  Select Session Pass:
                </span>
                <span className="font-sans font-black text-3xl text-white tracking-tight">
                  {selectedPass === 1 ? "200 DH" : selectedPass === 5 ? "900 DH" : "1700 DH"}
                </span>
                <span className="font-mono text-[10px] text-neutral-400 uppercase font-black tracking-wider ml-1.5">
                  / {selectedPass} {selectedPass === 1 ? "Session" : "Sessions"}
                </span>

                {selectedPass > 1 && (
                  <div className="mt-2 bg-[#CCFF00]/10 text-[#CCFF00] font-mono text-[9px] font-bold px-2 py-1 rounded w-fit uppercase tracking-wider">
                    Discount Saved: {selectedPass === 5 ? "100 DH" : "300 DH"}!
                  </div>
                )}
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 my-5">
                {[1, 5, 10].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelectedPass(num)}
                    className={`py-2 px-1 rounded-xl font-mono text-[11px] font-black uppercase transition-all duration-200 cursor-pointer text-center ${
                      selectedPass === num
                        ? "bg-[#CCFF00] text-black shadow-md font-bold"
                        : "bg-neutral-900/45 text-neutral-400 hover:text-white border border-white/5"
                    }`}
                  >
                    {num === 1 ? "1 Slot" : `${num} Slots`}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onScrollTo("contact")}
                  className="w-full py-3.5 bg-[#CCFF00] hover:bg-[#b0df00] text-black font-sans font-black text-xs tracking-wider uppercase rounded-full flex items-center justify-center space-x-1.5 transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <span>Book Private Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-center font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">
                  Standard Rate: 200 DH per session
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Onboarding Steps Section (How it works) */}
        <div id="onboarding-guide" className="max-w-5xl mx-auto pt-16 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <div className="inline-flex items-center space-x-1.5 bg-neutral-950 border border-white/5 rounded-full py-1 px-3 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span className="font-mono text-[9px] tracking-widest text-[#CCFF00] uppercase font-bold">
                Integration Protocol
              </span>
            </div>
            <h3 className="font-sans font-black text-2xl text-white tracking-wide uppercase">
              How We Start Your Onboarding
            </h3>
            <p className="font-sans text-neutral-500 text-xs sm:text-sm mt-2">
              From bodyweight diagnostics to active progress. We operate a streamlined 4-step onboarding matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ONBOARDING_STEPS.map((step, sIdx) => (
              <div
                key={sIdx}
                id={`onboarding-step-${sIdx}`}
                className="relative bg-[#111111]/90 p-6 rounded-3xl border border-white/5 flex flex-col items-start text-left hover:border-[#CCFF00]/25 hover:shadow-[0_8px_32px_rgba(204,255,0,0.05)] transition-all duration-300 overflow-hidden group min-h-[220px]"
              >
                {/* Background Image Texture */}
                {step.imageUrl && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundImage: `url('${step.imageUrl}')` }}
                  />
                )}
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Visual Step Number */}
                <div className="font-mono font-black text-3xl text-neutral-800/80 group-hover:text-[#CCFF00]/15 absolute top-4 right-4 tracking-tighter transition-colors duration-300 relative z-10">
                  {step.number}
                </div>
                
                <div className="bg-[#CCFF00]/10 text-[#CCFF00] px-2.5 py-1 rounded-full font-mono text-[9px] font-bold uppercase mb-4 tracking-wider relative z-10">
                  Phase {step.number}
                </div>
                
                <h4 className="font-sans font-black text-sm text-neutral-200 tracking-wider uppercase mb-1.5 border-b border-white/5 pb-1.5 w-full relative z-10 group-hover:text-white transition-colors">
                  {step.title}
                </h4>
                
                <p className="font-sans text-neutral-400 text-[11px] leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
