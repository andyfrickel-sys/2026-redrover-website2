import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "electrical",
  title: "Electrical & Lighting",
  industry: "Electrical & Lighting",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/e3f9e405-7dc6-431d-bd54-6383be44c37b.png",
  tagline: "Modern electrical services layout optimized for local search",
  description:
    "A clean, professional website layout for electricians. Clear service categories, licensing and certification badges, and instant quote capture help you win more residential and commercial electrical jobs.",
  features: [
    "Service category pages",
    "Licensing & certification badges",
    "Instant quote request form",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Lead capture forms",
  ],
  metaDescription:
    "A modern electrical services website layout from Red Rover Marketing — optimized for local search, trust signals, and quote capture.",
};

const ElectricalPage = () => <IndustryPageLayout data={data} />;
export default ElectricalPage;
