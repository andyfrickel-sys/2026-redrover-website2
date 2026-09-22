import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "chiropractic",
  title: "Chiropractic & Rehabilitation",
  industry: "Chiropractic & Rehabilitation",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/6c2a0e5e-0aca-4fa6-82d2-3d194d595f49.png",
  tagline: "Direct new-patient visit scheduler with condition breakdown",
  description:
    "A welcoming, patient-focused website layout for chiropractic and rehabilitation clinics. Condition-specific pages, a direct new-patient scheduler, and insurance information make booking care simple.",
  features: [
    "Condition-specific pages",
    "Direct new-patient scheduler",
    "Insurance & FAQ information",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A chiropractic website layout from Red Rover Marketing — new-patient scheduling, condition pages, and local SEO.",
};

const ChiropracticPage = () => <IndustryPageLayout data={data} />;
export default ChiropracticPage;
