/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TrainerStat {
  id: string;
  value: string;
  label: string;
}

export interface Discipline {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  skills: string[];
  benefits: string[];
}

export interface ProgramFeature {
  id: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceQuarterly: string;
  period: string;
  popular: boolean;
  tagline: string;
  features: string[];
  ctaText: string;
  unavailableFeatures?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  achievement: string;
  beforeStats: string;
  afterStats: string;
  quote: string;
  skillsUnlocked: string[];
  duration: string;
  imageSeed: string;
}

export interface OnboardingStep {
  number: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ContactFormInputs {
  name: string;
  email: string;
  phone?: string;
  goal: "build-muscle" | "lose-fat" | "learn-boxing" | "master-calisthenics";
  level: "beginner" | "intermediate" | "advanced";
  message: string;
}
