/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, Target, Flame, Sparkles, MoveRight, HelpCircle } from "lucide-react";
import { DISCIPLINES } from "../data";

interface DisciplinesProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Disciplines({ onScrollTo }: DisciplinesProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="disciplines" className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#CCFF00]/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-red-600/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="disciplines-header" className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-neutral-950 border border-white/5 rounded-full py-1 px-3 mb-4">
            <Target className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span className="font-mono text-[10px] tracking-widest text-[#CCFF00] uppercase font-bold">
              Core Athletic Mastery
            </span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            My Dual-Pillar Training System
          </h2>
          <div className="w-16 h-1 bg-[#CCFF00] mt-4 mb-5 rounded-full" />
          <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed">
            By merging the structural control of elite calisthenics with the rapid cardiovascular power of technical boxing, we cultivate fully optimized, robust bodies primed for speed and endurance.
          </p>
        </div>

        {/* 2-Column Grid of Disciplines */}
        <div id="disciplines-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {DISCIPLINES.map((discipline, index) => {
            const isCalisthenics = discipline.id.includes("calisthenics");
            return (
              <motion.div
                key={discipline.id}
                id={`discipline-card-${discipline.id}`}
                className="relative bg-[#111111]/90 border border-white/5 rounded-3xl overflow-hidden group flex flex-col shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredId(discipline.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Accent Top Border Glowing Effect on Hover */}
                <div
                  className={`absolute top-0 left-0 w-full h-1.5 transition-all duration-500 ${
                    hoveredId === discipline.id ? "bg-[#CCFF00]" : "bg-neutral-800"
                  }`}
                />

                {/* Sub-card Image Frame */}
                <div className="relative w-full h-64 sm:h-80 overflow-hidden">
                  <img
                    src={discipline.image}
                    alt={discipline.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Action Header inside Image */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <span className="font-mono text-xs font-black tracking-wider uppercase text-[#CCFF00] bg-black/85 px-3 py-1 rounded inline-block mb-1.5 font-bold">
                        {discipline.subtitle}
                      </span>
                      <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-none mt-1">
                        {discipline.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Detail Description */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <p className="font-sans text-neutral-400 text-sm sm:text-md leading-relaxed text-left">
                    {discipline.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Skills Breakdown */}
                    <div className="text-left">
                      <div className="flex items-center space-x-1.5 mb-3 border-b border-white/5 pb-1.5">
                        <Flame className="w-4 h-4 text-[#CCFF00]" />
                        <span className="font-sans font-extrabold text-xs tracking-wider uppercase text-neutral-200">
                          Techniques & Skills
                        </span>
                      </div>
                      <ul className="space-y-1.5 flex flex-col">
                        {discipline.skills.map((skill, k) => (
                          <li key={k} className="flex items-start space-x-2">
                            <span className="text-[#CCFF00] text-xs font-mono mt-0.5">•</span>
                            <span className="font-mono text-[11px] text-neutral-300 leading-tight">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Benefits Breakdown */}
                    <div className="text-left">
                      <div className="flex items-center space-x-1.5 mb-3 border-b border-white/5 pb-1.5">
                        <Sparkles className="w-4 h-4 text-[#CCFF00]" />
                        <span className="font-sans font-extrabold text-xs tracking-wider uppercase text-neutral-200">
                          Pillar Benefits
                        </span>
                      </div>
                      <ul className="space-y-2 flex flex-col">
                        {discipline.benefits.map((benefit, k) => (
                          <li key={k} className="flex items-start space-x-2">
                            <div className="bg-[#CCFF00]/10 text-[#CCFF00] p-0.5 rounded flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="font-sans text-xs text-neutral-400 font-medium leading-tight">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Program Redirect Arrow link */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest font-extrabold">
                      Ready to unlock this?
                    </span>
                    <button
                      onClick={() => onScrollTo("pricing")}
                      className="group inline-flex items-center space-x-1.5 text-xs font-sans font-extrabold text-[#CCFF00] uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Select This Specialization</span>
                      <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Quote Highlight */}
        <div className="mt-16 sm:mt-24 p-6 sm:p-10 bg-[#111111]/90 border border-white/5 rounded-3xl text-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 text-[#080808] text-9xl font-black font-sans uppercase tracking-tighter opacity-10 pointer-events-none select-none">
            STRIVE
          </div>
          <p className="font-sans italic text-lg sm:text-xl text-neutral-200 font-medium max-w-4xl mx-auto leading-relaxed">
            "Strength is not just about the weights you can move. It is about how flawlessly you can coordinate your muscles, punch through obstacles, and stay centered in the heat of exhaustion."
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-xs font-mono tracking-widest uppercase font-bold text-[#CCFF00]">
            <span>— COACH OUSSAMA PCHIW</span>
          </div>
        </div>

      </div>
    </section>
  );
}
