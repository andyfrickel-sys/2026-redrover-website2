import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "dental",
  title: "Family & Cosmetic Dentistry",
  industry: "Family & Cosmetic Dentistry",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/7cad67d4-7a1c-4849-8d20-32a8b131b8fb.png",
  tagline:
    "Patient-friendly online visit scheduling for gentle family & cosmetic care",
  description:
    "A warm, patient-friendly website layout for family and cosmetic dental practices. Treatment-overview pages, insurance information, and online visit scheduling make it easy for new patients to book.",
  features: [
    "Treatment-overview pages",
    "Insurance & new-patient info",
    "Online visit scheduling",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A family & cosmetic dentistry website layout from Red Rover Marketing — online scheduling, treatment pages, and local SEO.",
};

const DentalPage = () => <IndustryPageLayout data={data} />;
export default DentalPage;
