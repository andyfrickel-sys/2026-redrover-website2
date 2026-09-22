export type Plan = {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  monthly: number;
  foundersMonthly: number;
  setup: string;
  setupFee: number;
  foundersSetupFee: number;
  description: string;
  features: string[];
  bestFor: string;
  cta: string;
  featured?: boolean;
  foundersLabel: string;
};

export const STARTER: Plan = {
  id: "starter",
  badge: "Starter",
  name: "Build Your Foundation",
  tagline: "STARTER",
  monthly: 397,
  foundersMonthly: 199,
  setup: "Plus $1,497 one-time setup",
  setupFee: 1497,
  foundersSetupFee: 749,
  description:
    "Get a professional AI-powered website and the essentials to start capturing leads.",
  features: [
    "Mobile-first AI website",
    "AI chat to answer questions",
    "Local SEO foundation",
    "Built-in CRM and lead forms",
    "Online booking and quote requests",
    "Hosting, security and updates",
  ],
  bestFor:
    "Businesses that need a stronger website and an easier way to capture inquiries.",
  cta: "Claim Starter",
  foundersLabel: "Founders Rate",
};

export const PRO: Plan = {
  id: "pro",
  badge: "Pro",
  name: "Build Visibility & Trust",
  tagline: "Pro",
  monthly: 697,
  foundersMonthly: 349,
  setup: "Plus $1,997 one-time setup",
  setupFee: 1997,
  foundersSetupFee: 999,
  description:
    "Stay visible, build trust, and turn more visitors into customers with consistent content and automated follow-up.",
  features: [
    "Everything in Starter, plus:",
    "Automated review requests and reminders",
    "Review monitoring and response assistance",
    "Customer reviews on your website",
    "Monthly social media content planning",
    "Eight original posts per month (2 channels)",
    "Scheduled publishing and monthly reporting",
  ],
  bestFor:
    "Businesses that want consistent visibility, stronger reviews and coordinated marketing.",
  cta: "Claim Pro",
  featured: true,
  foundersLabel: "Best Founders Value",
};

export const PREMIUM: Plan = {
  id: "premium",
  badge: "Premium",
  name: "Keep Capturing Leads After Hours",
  tagline: "Premium",
  monthly: 997,
  foundersMonthly: 499,
  setup: "Plus $2,497 one-time setup",
  setupFee: 2497,
  foundersSetupFee: 1249,
  description:
    "Add an AI voice receptionist and advanced workflows that keep your business moving, even when you're off the clock.",
  features: [
    "Everything in Pro, plus:",
    "AI voice receptionist",
    "After-hours call answering",
    "Lead qualification and contact capture",
    "AI appointment booking",
    "Automated lead follow-up",
    "Two advanced workflows at setup",
    "Priority support",
  ],
  bestFor:
    "Businesses that want after-hours coverage and a more automated process for handling leads.",
  cta: "Claim Premium",
  foundersLabel: "Founders Rate",
};

export const PLANS: Plan[] = [STARTER, PRO, PREMIUM];

export const ANNUAL_DISCOUNT_MONTHS = 10;

export const fmt = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export const getPlanById = (id?: string | null): Plan | undefined =>
  PLANS.find((p) => p.id === id);
