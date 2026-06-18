/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Trophy, Shield, Dumbbell, Sparkles } from "lucide-react";
import { TRAINER_STATS } from "../data";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center bg-[#080808] overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#CCFF00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Typographic Hero Callout (Left Column - 7/12) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              id="hero-badge"
              className="inline-flex items-center space-x-2 bg-[#111111] border border-white/5 rounded-full py-1.5 px-4 pr-5 text-xs text-neutral-300 shadow-lg"
            >
              <div className="bg-[#CCFF00] text-black p-1 rounded-full flex items-center justify-center">
                <Trophy className="w-3 h-3" />
              </div>
              <span className="font-mono text-[10px] tracking-wider uppercase font-semibold text-neutral-200">
                STREET WORKOUT / CALISTHENICS & BOXING SPECIALIST
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              id="hero-main-title"
              className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none uppercase"
            >
              Master Your Body. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CCFF00] to-[#bade00] relative italic font-extrabold block mt-2">
                Control Your Mind.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="hero-description"
              className="font-sans text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              Professional Calisthenics & Boxing coaching tailored to your goals. Get custom training and nutrition plans built for real results. Defy limits with the elite Oussama Pchiw.
            </motion.p>

            {/* CTA action group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              id="hero-ctas"
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 pt-4"
            >
              <button
                onClick={() => onScrollTo("pricing")}
                className="group flex items-center justify-center space-x-2 bg-[#CCFF00] hover:bg-[#b0df00] text-black font-sans font-extrabold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.2)] hover:shadow-[0_0_35px_rgba(204,255,0,0.4)]"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onScrollTo("contact")}
                className="flex items-center justify-center space-x-2 bg-neutral-950 hover:bg-[#111111] text-white border border-white/10 hover:border-white/20 font-sans font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300"
              >
                <span>Book a Free Consultation</span>
              </button>
            </motion.div>

            {/* Stats section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              id="hero-stats-panel"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 py-6 bg-[#111111] border border-white/5 rounded-3xl w-full max-w-2xl mt-8 backdrop-blur-sm shadow-2xl"
            >
              {TRAINER_STATS.map((stat, idx) => (
                <div key={stat.id} className="text-center group border-r border-white/5 last:border-r-0">
                  <div className="font-sans font-black text-2xl sm:text-3xl text-[#CCFF00] tracking-tight group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[10px] tracking-wider uppercase text-neutral-400 font-bold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait Graphic Display (Right Column - 5/12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative max-w-sm sm:max-w-md lg:max-w-full w-full aspect-[3/4]"
            >
              {/* Geometric Frame Decors */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#CCFF00] pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#CCFF00] pointer-events-none" />
              <div className="absolute inset-0 bg-[#CCFF00]/10 mix-blend-color pointer-events-none z-10 rounded-3xl" />
              <div className="absolute -inset-1 border-2 border-dashed border-white/5 rounded-3xl pointer-events-none" />

              {/* Background gradient shadow */}
              <div className="absolute inset-0 bg-[#111111] translate-x-2 translate-y-2 rounded-3xl border border-white/5 shadow-2xl pointer-events-none" />

              {/* Main Image */}
              <div id="trainer-main-image-container" className="relative w-full h-full overflow-hidden rounded-3xl border border-white/5 shadow-2xl group">
                <img
                  src="/src/assets/images/pchiw_portrait_1781792038114.jpg"
                  alt="OUSSAMA PCHIW - Personal Trainer Profile"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Corner watermarks */}
                <div className="absolute top-4 right-4 bg-black/80 px-2 py-1 border border-white/5 rounded text-[9px] font-mono text-[#CCFF00] uppercase tracking-widest leading-none">
                  STREET WORKOUT
                </div>
                <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 border border-white/5 rounded text-[9px] font-mono text-[#CCFF00] uppercase tracking-widest leading-none">
                  BOXING & FIT
                </div>

                {/* Sub-text gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute -bottom-2 -left-2 bg-[#111111] border border-white/5 p-3 rounded-full shadow-2xl z-20 flex items-center space-x-2">
                <div className="bg-[#CCFF00]/10 text-[#CCFF00] p-1.5 rounded-full">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-mono text-neutral-400 uppercase leading-none">TRAINED SPECIALIST</div>
                  <div className="text-xs font-sans font-extrabold text-white leading-tight uppercase mt-0.5">OUSSAMA PCHIW</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
