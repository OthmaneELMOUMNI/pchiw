/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Star, Award, Clock, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-[#CCFF00]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-red-600/1 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div id="testimonials-header" className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-neutral-950 border border-white/5 rounded-full py-1 px-3.5 mb-4">
            <Award className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span className="font-mono text-[10px] tracking-widest text-[#CCFF00] uppercase font-bold">
              Proven Performance
            </span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Transformations & Results
          </h2>
          <div className="w-16 h-1 bg-[#CCFF00] mt-4 mb-5 rounded-full" />
          <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed">
            Real training outcomes measured through body composition, skill acquisition, endurance, and consistent coach-led execution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div id="testimonials-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="bg-[#111111]/80 border border-white/5 rounded-3xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between relative shadow-2xl hover:border-[#CCFF00]/25 transition-all duration-300 backdrop-blur-sm min-h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Giant decorative quote mark */}
              <div className="absolute top-6 right-6 text-neutral-800 opacity-20 pointer-events-none">
                <Quote className="w-12 h-12 stroke-2" />
              </div>

              {/* Main Content Info */}
              <div className="flex flex-col text-left">
                {/* Visual Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-[#CCFF00] text-[#CCFF00]" />
                  ))}
                </div>

                {/* Achievement Highlight Line */}
                <span className="font-sans font-black text-lg text-[#CCFF00] tracking-wide uppercase leading-tight mb-3">
                  "{testimonial.achievement}"
                </span>

                {/* Client Quote excerpt */}
                <p className="font-sans italic text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Before vs After stats tracker table */}
                <div className="bg-black/60 border border-white/5 rounded-2xl p-4 mb-6 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-1 sm:gap-3 text-[11px] border-b border-white/5 pb-2">
                    <span className="font-mono text-neutral-500 uppercase font-black tracking-wider whitespace-nowrap">Before Setup:</span>
                    <span className="font-sans text-neutral-300 font-semibold sm:text-right leading-snug">{testimonial.beforeStats}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-1 sm:gap-3 text-[11px] font-bold">
                    <span className="font-mono text-[#CCFF00] uppercase tracking-wider whitespace-nowrap">Active State:</span>
                    <span className="font-sans text-[#CCFF00] font-black sm:text-right leading-snug">{testimonial.afterStats}</span>
                  </div>
                </div>

                {/* Custom acquired badges list */}
                <div className="space-y-2 mb-6">
                  <span className="font-sans font-extrabold text-[10px] tracking-wider uppercase text-neutral-400 block">
                    Unshackled Capabilities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {testimonial.skillsUnlocked.map((skill, k) => (
                      <span
                        key={k}
                        className="bg-neutral-900 border border-white/5 text-neutral-200 font-mono text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider block"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Client Bio footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 pt-5 mt-auto text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center font-mono font-black text-xs text-[#CCFF00]">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-sans font-black text-sm text-white tracking-wide uppercase">
                      {testimonial.name}
                    </h4>
                    <span className="font-sans text-neutral-500 text-[11px]">
                      Age: {testimonial.age} • Athlete Class
                    </span>
                  </div>
                </div>

                {/* Duration indicator */}
                <div className="flex flex-col items-start sm:items-end">
                  <div className="flex items-center space-x-1 text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="font-mono text-[10px] font-extrabold text-neutral-300">
                      {testimonial.duration}
                    </span>
                  </div>
                  <span className="text-[9px] font-sans text-neutral-500 uppercase tracking-wider mt-0.5">
                    Timeframe
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global Statistics Highlights Banner */}
        <div className="mt-16 sm:mt-24 p-6 sm:p-8 bg-[#111111]/60 border border-white/5 rounded-3xl max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 text-center backdrop-blur-sm">
          <div className="space-y-1">
            <span className="font-mono text-3xl sm:text-4xl font-black text-white">-11kg</span>
            <p className="font-sans text-[10px] text-[#CCFF00] uppercase tracking-widest font-black">Average Client Fat Loss</p>
          </div>
          <div className="w-[1px] h-10 bg-white/5 hidden md:block" />
          <div className="space-y-1">
            <span className="font-mono text-3xl sm:text-4xl font-black text-[#CCFF00]">82%</span>
            <p className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest font-black">Unlock Gym Ring Muscle-Up in 90 Days</p>
          </div>
          <div className="w-[1px] h-10 bg-white/5 hidden md:block" />
          <div className="space-y-1">
            <span className="font-mono text-3xl sm:text-4xl font-black text-white">4.9/5</span>
            <p className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest font-black">Client Satisfaction Index</p>
          </div>
        </div>

      </div>
    </section>
  );
}
