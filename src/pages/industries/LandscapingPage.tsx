import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "landscaping",
  title: "Landscaping & Hardscapes",
  industry: "Landscaping & Hardscapes",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/dbb3ac86-e992-4c0d-b4cd-1d0b2ae82b3d.png",
  tagline: "High-end residential estimate scheduler and outdoor living gallery",
  description:
    "A premium, gallery-driven website layout for landscaping and hardscape contractors. Rich outdoor-living project galleries, a residential estimate scheduler, and seasonal service pages attract higher-value projects.",
  features: [
    "Outdoor-living project galleries",
    "Residential estimate scheduler",
    "Seasonal service pages",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A premium landscaping website layout from Red Rover Marketing — project galleries, estimate scheduling, and local SEO.",
};

const LandscapingPage = () => <IndustryPageLayout data={data} />;
export default LandscapingPage;
