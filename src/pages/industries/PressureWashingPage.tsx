import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "pressure-washing",
  title: "Pressure Washing & Soft Wash",
  industry: "Pressure Washing & Soft Wash",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/af888119-6037-4104-abbb-e8315bce70da.png",
  tagline: "Interactive 4-step project estimator and instant quote capture",
  description:
    "A bold, visual website layout for pressure washing and exterior cleaning companies. Before-and-after galleries, an interactive project estimator, and instant quote capture turn curb-appeal seekers into booked jobs.",
  features: [
    "Before-and-after galleries",
    "Interactive project estimator",
    "Instant quote capture",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A pressure washing website layout from Red Rover Marketing — interactive estimator, before-and-after galleries, and instant quotes.",
};

const PressureWashingPage = () => <IndustryPageLayout data={data} />;
export default PressureWashingPage;
