/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Discipline, PricingPlan, Testimonial, TrainerStat, OnboardingStep } from "./types";

export const TRAINER_STATS: TrainerStat[] = [
  { id: "stat-1", value: "8+", label: "Years Experience" },
  { id: "stat-2", value: "50+", label: "Transformations" },
  { id: "stat-3", value: "100%", label: "Custom Plans" },
  { id: "stat-4", value: "24/7", label: "Elite Support" }
];

export const DISCIPLINES: Discipline[] = [
  {
    id: "discipline-calisthenics",
    title: "Calisthenics & Street Workout",
    subtitle: "Master Your Bodyweight",
    description: "Defy gravity, build dense functional muscle, and acquire elite skills. Learn to manipulate your body in space using progressive gymnastics, ring training, and floor work. No gym required—just pure raw mastery of form.",
    image: "/src/assets/images/calisthenics_discipline_1781785354653.jpg",
    skills: [
      "Handstands & Press Variations",
      "Strict Gym Ring Muscle-ups",
      "Planche & Front Lever progressions",
      "Human Flag & Core Compression",
      "Explosive Clapping Pull-ups",
      "Joint Mobility & Bulletproofing"
    ],
    benefits: [
      "Supreme Relative Strength-to-Weight Ratio",
      "Dense, Sculpted, & Highly Athletic Physique",
      "Unlocking Elite Bodyweight Skills",
      "Bulletproof Joints and Core Control"
    ]
  },
  {
    id: "discipline-boxing",
    title: "Boxing & Conditioning",
    subtitle: "Unleash Explosive Power",
    description: "Sharpen your hands, cultivate lightning fast footwork, and blow past physical plateaus. Blend authentic striking fundamentals with high-intensity fight cardio that builds a warrior's mindset and unshakeable confidence.",
    image: "/src/assets/images/boxing_discipline_1781785373233.jpg",
    skills: [
      "Stance, Guard, & Slip Mechanics",
      "Devastating Combo Striking",
      "Slick Angle Cutting & Footwork",
      "Slipping, Rolling & Ducking",
      "Heavy Bag & Focus Mitt Drills",
      "High-Intensity Interval Conditioning"
    ],
    benefits: [
      "Explosive Punches & Striking Speed",
      "Elite VO2 Max & Extreme Cardio Output",
      "Unshakable Mindset & Mental Resilience",
      "Rapid Fat Loss & Functional Endurance"
    ]
  }
];

export const PROGRAMS_NUTRITION = {
  title: "The Ultimate Transformation Blueprint",
  subtitle: "Oussama's Signature Triple-Threat Protocol",
  description: "Elite physical shapes are built when tailored strength routines are matched with calculated nutrition and unyielding personal accountability. We design every single detail for your body, lifestyle, and goals.",
  pillars: [
    {
      id: "pillar-workout",
      title: "1. Progressive Workout Splitted Routine",
      description: "A hyper-customized split matching your training level. We blend explosive boxing footwork & power drills with calisthenics bent-arm and straight-arm strength cycles. Complete with video demonstration files for each rep.",
      highlights: ["Video demonstration database", "Adaptive sets, reps, & rests", "Form assessment protocols"]
    },
    {
      id: "pillar-nutrition",
      title: "2. Tailored Macro-Sieved Diet Plan",
      description: "No starvation, no bland, boring meals. You receive a fully calculated caloric and macro breakdown matching your daily metabolic expenditure. Built around rich, delicious foods you actually enjoy to fuel rapid body recomposition.",
      highlights: ["Personal macro target formulas", "Flexible substitution cookbook", "Performance-priming menu presets"]
    },
    {
      id: "pillar-accountability",
      title: "3. Interactive Form Screenings & Check-ins",
      description: "Plateaus are obliterated before they even manifest. Through our premium portal, submit video footage of your boxing combinations or calisthenics holds. Each week, we analyze your biomechanics and fine-tune your load.",
      highlights: ["Weekly bio-mechanical audits", "Progress analytics charts", "Direct feedback loops with Coach Oussama"]
    }
  ]
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-starter",
    name: "Starter Protocol",
    price: "500 DH",
    priceQuarterly: "400 DH",
    period: "month",
    popular: false,
    tagline: "Your entry checklist to structured training, custom meals, and verified coach follow-ups.",
    features: [
      "100% Custom Workout Split (Calisthenics & Boxing details)",
      "Structured Meal Plan (We design exactly what to eat using local ingredients)",
      "Weekly Strategic Follow-up & Progress Tracking by Oussama",
      "Technique adjustments via weekly video check-ins",
      "Exact Calorie & Macronutrient target splits",
      "Direct Coach Support via premium dashboard"
    ],
    unavailableFeatures: [
      "24/7 Unlimited Direct WhatsApp Access with Coach Oussama",
      "Daily personal progress audit & urgent meal replacements",
      "Response to video screenings in less than 4 Hours",
      "Monthly 1-on-1 strategy video consultation calls"
    ],
    ctaText: "Start My Program"
  },
  {
    id: "plan-elite",
    name: "Elite Coaching",
    price: "900 DH",
    priceQuarterly: "750 DH",
    period: "month",
    popular: true,
    tagline: "The premium standard in Morocco. Coach Oussama does everything: programs your routines, structures your meals, and monitors your progress constantly.",
    features: [
      "Fully Personalized Workout Schedule & Skill Progression",
      "Tailored Daily Meal Menu (Exactly what to eat with simple Moroccan recipes)",
      "Rigorous Weekly Video Form Review & Boxing mechanics tweaks",
      "Continuous Tracking (Weight changes, body fat loss, strength metrics)",
      "Personal follow-up and weekly accountability audits with Oussama",
      "Direct Priority Support & fast adjustments",
      "Advanced gymnastics ring & floor skill-building blueprints"
    ],
    unavailableFeatures: [
      "24/7 Direct Private Phone & WhatsApp Access",
      "Immediate video response window under 4 hours"
    ],
    ctaText: "Unlock Premium Results"
  },
  {
    id: "plan-vip",
    name: "VIP Athlete",
    price: "1800 DH",
    priceQuarterly: "1450 DH",
    period: "month",
    popular: false,
    tagline: "The ultimate peak mentorship. Coach Oussama is with you every step of the day. No limits, absolute high-fidelity support.",
    features: [
      "Total Coaching coverage: We program, structure, and check everything you do",
      "Super-detailed Diet Plans (What to eat at home, work, or restaurants in Morocco)",
      "24/7 Direct Private WhatsApp Access to Coach Oussama for daily tracking",
      "Instant Video Mechanics Audit (Reviewed within 4 hours)",
      "Monthly 45-min private video strategy consultation calls",
      "Travel-adjusted programs & personalized restaurant macro-navigators",
      "Lifetime membership to our elite networking athlete circle"
    ],
    ctaText: "Apply For VIP Mentorship"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Karim Benali",
    age: 28,
    achievement: "Learned Human Flag & Lost 11kg",
    beforeStats: "89 kg (Soft build, Low core tension)",
    afterStats: "78 kg (Ripped, 15-sec Human Flag)",
    quote: "Working with Oussama completely changed my relationship with fitness. I always thought you needed weights to be strong. Now, I control my body with absolute precision, and my punching power has doubled!",
    skillsUnlocked: ["Human Flag", "Clapping Pull-up", "Ring Muscle-up"],
    duration: "16 Weeks",
    imageSeed: "karim"
  },
  {
    id: "testimonial-2",
    name: "Yassine Mansour",
    age: 32,
    achievement: "Learned Handstand Press & Built Dense Back",
    beforeStats: "74 kg (Office posture, neck stiffness)",
    afterStats: "79 kg (Broad shoulders, free-standing handstand)",
    quote: "The combination of Calisthenics skill progressions and intense Boxing interval conditioning is unmatched. I deleted fat, corrected my desk posture, and finally unlocked a strict gymnastics-ring muscle-up.",
    skillsUnlocked: ["Handstand Press", "Ring Muscle-up", "3-Min Bag Blast"],
    duration: "12 Weeks",
    imageSeed: "yassine"
  },
  {
    id: "testimonial-3",
    name: "Sofiane Amrani",
    age: 24,
    achievement: "Explosive Striking Technique & Ripped Abs",
    beforeStats: "82 kg (Decent build, poor endurance)",
    afterStats: "76 kg (Shredded abs, peak cardiorespiratory stamina)",
    quote: "Oussama doesn't run a generic fitness site. He takes biomechanics seriously. His custom menus kept me full, and his feedback on coach video audits corrected my slipping and shoulder loading immediately.",
    skillsUnlocked: ["Strict Chest-to-Bar", "3-Punch KO Combo", "L-Sit Hold"],
    duration: "8 Weeks",
    imageSeed: "sofiane"
  }
];

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    number: "01",
    title: "Fill the Body Questionnaire",
    description: "Submit details about your current athletic capabilities, injury record, schedule list, and specific body/boxing goals using our minimal contact screen tracker.",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Strategic Blueprint Video-Audit",
    description: "Oussama handcomputes your metabolic index and reviews target goals to craft your exact program layout, boxing progression tracks, and weekly checkpoints.",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Unshackle Your Fitness Transformation",
    description: "Receive complete portal access to your mobile-friendly custom schedule, nutrition guidelines, macro matrices, and progressive resistance guides.",
    imageUrl: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Train, Review, Adapt & Conquer",
    description: "Submit video uploads of your calisthenics sets and sparring clips. Benefit from weekly structural adjustments, ongoing metrics tracking, and raw motivation.",
    imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop"
  }
];
