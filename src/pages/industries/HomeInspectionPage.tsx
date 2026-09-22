import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "home-inspection",
  title: "Home Inspection Services",
  industry: "Home Inspection Services",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/f885c1e1-423f-4b0c-a958-f3653b5aecb8.png",
  tagline: "Trust-building credentials and direct online appointment booking",
  description:
    "A credibility-focused website layout for home inspectors. Prominent credentials, sample report previews, and direct online appointment booking help buyers and agents book inspections with confidence.",
  features: [
    "Credentials & certification display",
    "Sample report previews",
    "Direct online appointment booking",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A trust-building home inspection website layout from Red Rover Marketing — credentials, sample reports, and direct online booking.",
};

const HomeInspectionPage = () => <IndustryPageLayout data={data} />;
export default HomeInspectionPage;
