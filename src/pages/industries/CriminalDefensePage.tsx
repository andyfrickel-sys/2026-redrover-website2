import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "criminal-defense",
  title: "Criminal Defense & Trial Counsel",
  industry: "Criminal Defense & Trial Counsel",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/503b8aa7-66c2-430e-bfaa-ef761d8976eb.png",
  tagline:
    "High-stakes trial representation with confidential consultation capture",
  description:
    "A serious, authoritative website layout for criminal defense and trial law firms. Practice-area focus, case-result highlights, and confidential 24/7 consultation capture help clients reach you in urgent moments.",
  features: [
    "Practice-area focus pages",
    "Case-result highlights",
    "Confidential 24/7 consultation capture",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A criminal defense law firm website layout from Red Rover Marketing — case results, practice areas, and confidential consultation capture.",
};

const CriminalDefensePage = () => <IndustryPageLayout data={data} />;
export default CriminalDefensePage;
