import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "roofing",
  title: "Roofing & Exterior Solutions",
  industry: "Roofing & Exterior Solutions",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/ce92700e-4b67-4466-a9f0-8c1937594ceb.png",
  tagline:
    "Luxury roofing & exterior solutions with direct estimate request flow",
  description:
    "A premium, trust-building website layout for roofing and exterior contractors. Storm-damage resources, financing options, and a direct estimate request flow help homeowners take action after severe weather.",
  features: [
    "Storm-damage resource pages",
    "Financing options display",
    "Direct estimate request flow",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A roofing & exteriors website layout from Red Rover Marketing — storm resources, financing, and direct estimate requests.",
};

const RoofingPage = () => <IndustryPageLayout data={data} />;
export default RoofingPage;
