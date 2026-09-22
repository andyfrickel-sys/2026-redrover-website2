import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "hvac",
  title: "HVAC & Indoor Comfort",
  industry: "HVAC & Indoor Comfort",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/7c06ae00-59de-4ba9-841a-07f26307ffba.png",
  tagline: "Year-round heating, cooling & rapid service request dispatch",
  description:
    "A fast, service-driven website layout for HVAC contractors. Seasonal service promotions, maintenance plan sign-up, and rapid service-request dispatch keep your schedule full year-round.",
  features: [
    "Seasonal service promotions",
    "Maintenance plan sign-up",
    "Rapid service-request dispatch",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "An HVAC website layout from Red Rover Marketing — seasonal promotions, maintenance plans, and rapid service dispatch.",
};

const HvacPage = () => <IndustryPageLayout data={data} />;
export default HvacPage;
