import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "auto-glass",
  title: "Auto Glass & Mobile Repair",
  industry: "Auto Glass & Mobile Repair",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/27fe38b1-3826-4b19-8a2c-9f53798ee458.png",
  tagline: "Mobile-first instant quote booking and click-to-call flow",
  description:
    "A mobile-first website built for mobile auto glass and repair services. Instant quote booking, a service-area map, and one-tap click-to-call make it effortless for drivers to request service on the go.",
  features: [
    "Instant quote booking flow",
    "One-tap click-to-call",
    "Service-area coverage map",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A mobile-first auto glass website layout from Red Rover Marketing — instant quote booking, click-to-call, and local SEO ready.",
};

const AutoGlassPage = () => <IndustryPageLayout data={data} />;
export default AutoGlassPage;
