import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "estate-law",
  title: "Estate Law & Legal Services",
  industry: "Legal & Professional Services",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/50dc4315-5567-4f10-862f-9b82a35c4bc2.png",
  tagline: "Sophisticated consultation capture with clear authority badges",
  description:
    "A sophisticated, authoritative website layout for estate planning and professional law firms. Clear practice-area pages, attorney credentials, and confidential consultation capture help high-value clients reach you.",
  features: [
    "Practice-area pages",
    "Attorney credentials display",
    "Confidential consultation capture",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A sophisticated estate law website layout from Red Rover Marketing — authority badges, practice-area pages, and consultation capture.",
};

const EstateLawPage = () => <IndustryPageLayout data={data} />;
export default EstateLawPage;
