/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, User, Phone, CheckCircle2, ChevronRight, Activity, ArrowRight, ShieldCheck, Sparkles, Send } from "lucide-react";
import { ContactFormInputs } from "../types";

export default function ContactForm() {
  const [formValues, setFormValues] = useState<ContactFormInputs>({
    name: "",
    email: "",
    phone: "",
    goal: "build-muscle",
    level: "beginner",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const goalsMap = {
    "build-muscle": "Build Dense Muscle",
    "lose-fat": "Burn Fat & Shred",
    "learn-boxing": "Learn Technical Boxing",
    "master-calisthenics": "Master Bodyweight Skills",
    "private-sessions": "Private 1-on-1 Sessions (200 DH/Session)",
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formValues.name.trim()) errors.name = "Full name is required";
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Please input a valid email address";
    }
    if (!formValues.message.trim()) {
      errors.message = "Please include a brief message about your training background";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database write or submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#CCFF00]/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-red-600/1 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Block Text Description & Trust Signs (5/12) */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-neutral-950 border border-white/5 rounded-full py-1 px-3">
              <Activity className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span className="font-mono text-[10px] tracking-widest text-[#CCFF00] uppercase font-bold">
                Private Intake
              </span>
            </div>

            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight">
              Unshackle Your Capabilities
            </h2>
            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed">
              Submit your private intake files below. Oussama will personally examine your goals, metabolic status, and current calisthenics skill level to construct your customized split.
            </p>

            <div className="w-full h-[1px] bg-white/5 my-4" />

            {/* Quick Guarantees with Lucide icons */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="bg-[#CCFF00]/10 text-[#CCFF00] p-1.5 rounded-full mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-xs text-white uppercase tracking-wider font-semibold">
                    100% Secure & Confidential
                  </h4>
                  <p className="font-sans text-neutral-500 text-[11px] mt-0.5">
                    Your personal information and progress logs are and always remain strictly private.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="bg-[#CCFF00]/10 text-[#CCFF00] p-1.5 rounded-full mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-xs text-white uppercase tracking-wider font-semibold">
                    Response within 24 Hours
                  </h4>
                  <p className="font-sans text-neutral-500 text-[11px] mt-0.5">
                    Oussama reviews and follows up on every qualified application file within a single business day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block Form Frame / Success Frame (7/12) */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative min-h-[500px] flex flex-col justify-center backdrop-blur-sm">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  /* Standard Form Template */
                  <motion.form
                    key="intake-form"
                    id="contact-intake-form"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex space-x-2 items-center mb-6">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse" />
                      <h3 className="font-sans font-black text-lg text-white uppercase tracking-wider">
                        Personal Intake Dossier
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Entry */}
                      <div className="space-y-1.5">
                        <label className="font-sans font-bold text-[10px] text-neutral-400 uppercase tracking-widest block">
                          Full Name
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500 pointer-events-none">
                            <User className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="bg-[#080808] border border-white/5 rounded-2xl py-3.5 pl-10 pr-4 text-white text-xs w-full focus:outline-none focus:border-[#CCFF00] transition-colors"
                          />
                        </div>
                        {validationErrors.name && (
                          <p className="text-red-500 font-sans text-[10px] mt-1">{validationErrors.name}</p>
                        )}
                      </div>

                      {/* Email Entry */}
                      <div className="space-y-1.5">
                        <label className="font-sans font-bold text-[10px] text-neutral-400 uppercase tracking-widest block">
                          Email Address
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500 pointer-events-none">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            placeholder="johndoe@example.com"
                            className="bg-[#080808] border border-white/5 rounded-2xl py-3.5 pl-10 pr-4 text-white text-xs w-full focus:outline-none focus:border-[#CCFF00] transition-colors"
                          />
                        </div>
                        {validationErrors.email && (
                          <p className="text-red-500 font-sans text-[10px] mt-1">{validationErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Primary Goal Dropdown */}
                      <div className="space-y-1.5 text-left">
                        <label className="font-sans font-bold text-[10px] text-neutral-400 uppercase tracking-widest block">
                          Primary Goal
                        </label>
                        <select
                          name="goal"
                          value={formValues.goal}
                          onChange={handleInputChange}
                          className="bg-[#080808] border border-white/5 rounded-2xl py-3.5 px-4 text-white text-xs w-full focus:outline-none focus:border-[#CCFF00] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="build-muscle">Build Lean Muscle</option>
                          <option value="lose-fat">Eradicate Body Fat</option>
                          <option value="learn-boxing">Learn Boxing Fundamentals</option>
                          <option value="master-calisthenics">Master Advanced Calisthenics</option>
                          <option value="private-sessions">Private 1-on-1 Sessions (200 DH/Session)</option>
                        </select>
                      </div>

                      {/* Fitness Experience Level */}
                      <div className="space-y-1.5 text-left">
                        <label className="font-sans font-bold text-[10px] text-neutral-400 uppercase tracking-widest block">
                          Experience Level
                        </label>
                        <select
                          name="level"
                          value={formValues.level}
                          onChange={handleInputChange}
                          className="bg-[#080808] border border-white/5 rounded-2xl py-3.5 px-4 text-white text-xs w-full focus:outline-none focus:border-[#CCFF00] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="beginner">Beginner (Foundations)</option>
                          <option value="intermediate">Intermediate (Solid experience)</option>
                          <option value="advanced">Advanced (Elite competitor)</option>
                        </select>
                      </div>
                    </div>

                    {/* Optional phone details */}
                    <div className="space-y-1.5">
                      <label className="font-sans font-bold text-[10px] text-neutral-400 uppercase tracking-widest block font-semibold">
                        Phone / WhatsApp (Optional)
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500 pointer-events-none">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          name="phone"
                          value={formValues.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 019-2834"
                          className="bg-[#080808] border border-white/5 rounded-2xl py-3.5 pl-10 pr-4 text-white text-xs w-full focus:outline-none focus:border-[#CCFF00] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Large Message Area */}
                    <div className="space-y-1.5">
                      <label className="font-sans font-bold text-[10px] text-neutral-400 uppercase tracking-widest block font-semibold">
                        Message & Training History
                      </label>
                      <textarea
                        name="message"
                        value={formValues.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Detail your injuries, metabolic hurdles, why you want to work with Oussama..."
                        className="bg-[#080808] border border-white/5 rounded-2xl p-4 text-white text-xs w-full focus:outline-none focus:border-[#CCFF00] transition-colors resize-none"
                      />
                      {validationErrors.message && (
                        <p className="text-red-500 font-sans text-[10px] mt-1">{validationErrors.message}</p>
                      )}
                    </div>

                    {/* Submit action button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#CCFF00] hover:bg-[#b0df00] disabled:bg-[#CCFF00]/50 text-black font-sans font-black text-sm tracking-wider uppercase py-4 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.15)] hover:shadow-[0_0_25px_rgba(204,255,0,0.3)] cursor-pointer mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Processing Dossier...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Intake Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Custom Celebratory Success Dashboard Welcome Panel */
                  <motion.div
                    key="success-card"
                    className="text-left py-4 flex flex-col justify-start"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Big success celebration header */}
                    <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/5">
                      <div className="bg-[#CCFF00]/20 text-[#CCFF00] p-3.5 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] tracking-widest text-[#CCFF00] uppercase font-bold">
                          Submission Established
                        </span>
                        <h3 className="font-sans font-black text-2xl text-white uppercase tracking-wide mt-0.5">
                          Welcome to the Circle!
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                        Hail <strong className="text-white">{formValues.name}</strong>, your fitness requirements have been secured. Oussama is reviewing your goal to <strong>{goalsMap[formValues.goal]}</strong> based on your level.
                      </p>

                      <div className="bg-[#CCFF00]/5 border border-[#CCFF00]/20 rounded-3xl p-6 space-y-3">
                        <h4 className="font-sans font-extrabold text-[#CCFF00] text-xs tracking-wider uppercase flex items-center">
                          <Sparkles className="w-4 h-4 mr-1.5" />
                          Your Next Actions Checklist:
                        </h4>

                        <ul className="space-y-3">
                          <li className="flex items-start space-x-2.5">
                            <div className="bg-[#CCFF00] text-black rounded-full p-0.5 flex-shrink-0 mt-0.5">
                              <ChevronRight className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="font-sans text-xs text-neutral-300">
                              Check <strong>{formValues.email}</strong> in the next 15 minutes for your Metabolic Sieving Guide and Welcome PDF.
                            </span>
                          </li>
                          <li className="flex items-start space-x-2.5">
                            <div className="bg-[#CCFF00] text-black rounded-full p-0.5 flex-shrink-0 mt-0.5">
                              <ChevronRight className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="font-sans text-xs text-neutral-300">
                              Oussama will reach out via email or phone to lock down your 1-on-1 strategy call arrangement.
                            </span>
                          </li>
                          <li className="flex items-start space-x-2.5">
                            <div className="bg-[#CCFF00] text-black rounded-full p-0.5 flex-shrink-0 mt-0.5">
                              <ChevronRight className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="font-sans text-xs text-neutral-300">
                              Prepare 2-3 clips of your current push-up, pull-up, or basic boxing punches for biomechanical review.
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Reset submission options */}
                      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest font-semibold">
                          Secured File ID: OP-{Math.floor(Math.random() * 89999 + 10000)}
                        </span>
                        <button
                          onClick={() => setIsSuccess(false)}
                          className="font-sans text-xs text-neutral-450 hover:text-white underline transition-colors uppercase font-bold cursor-pointer"
                        >
                          Submit New Intake Form
                        </button>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
