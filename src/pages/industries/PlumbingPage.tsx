import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "plumbing",
  title: "Plumbing & Mechanical",
  industry: "Plumbing & Mechanical",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/256564df-3c5f-4c4d-9d78-82be294c5acb.png",
  tagline: "High-converting layout built for emergency and scheduled calls",
  description:
    "A fast, mobile-first website designed for plumbing contractors. Prominent click-to-call buttons, emergency service banners, and clear service-area pages help homeowners reach you the moment a pipe bursts — on any device.",
  features: [
    "Emergency click-to-call buttons",
    "Service-area landing pages",
    "Online appointment booking",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A high-converting plumbing website layout from Red Rover Marketing — built for emergency calls, local SEO, and mobile-first booking.",
};

const PlumbingPage = () => <IndustryPageLayout data={data} />;
export default PlumbingPage;
