import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "accounting",
  title: "Accounting & Tax Advisory",
  industry: "Accounting & Tax Advisory",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/3c132e94-2dae-4e59-9652-67c3fc7aee6f.png",
  tagline: "Strategic consultation capture tailored for growing businesses",
  description:
    "A polished, trust-focused website layout for accounting and tax advisory firms. Clear service tiers, advisor bios, and strategic consultation capture help business owners take the next step with confidence.",
  features: [
    "Clear service-tier pages",
    "Advisor bios & credentials",
    "Strategic consultation capture",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "An accounting & tax advisory website layout from Red Rover Marketing — service tiers, advisor bios, and consultation capture.",
};

const AccountingPage = () => <IndustryPageLayout data={data} />;
export default AccountingPage;
