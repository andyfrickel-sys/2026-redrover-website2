import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { CompleteSystem } from "@/components/sections/CompleteSystem";
import { HowPartsWork } from "@/components/sections/HowPartsWork";
import { WebsiteShowcase } from "@/components/sections/WebsiteShowcase";
import { SocialConsistency } from "@/components/sections/SocialConsistency";
import { AutomatedReviews } from "@/components/sections/AutomatedReviews";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { IdealCustomer } from "@/components/sections/IdealCustomer";
import { Pricing } from "@/components/sections/Pricing";
import { PackageComparison } from "@/components/sections/PackageComparison";
import { OptionalServices } from "@/components/sections/OptionalServices";
import { FAQ } from "@/components/sections/FAQ";
import { AuditForm } from "@/components/sections/AuditForm";
import { Footer } from "@/components/sections/Footer";
import { RedRoverMascot } from "@/components/sections/RedRoverMascot";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Red Rover work with my current website?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
    {
      "@type": "Question",
      name: "Will I own my new website?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
    {
      "@type": "Question",
      name: "What social-media platforms are supported?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
    {
      "@type": "Question",
      name: "Do I have to create the social-media content?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
    {
      "@type": "Question",
      name: "How are review requests sent?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
    {
      "@type": "Question",
      name: "Can you guarantee Google rankings or a certain number of reviews?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
    {
      "@type": "Question",
      name: "Is there a contract?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
    {
      "@type": "Question",
      name: "What happens if I need website changes?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
    {
      "@type": "Question",
      name: "Can I add other marketing services later?",
      acceptedAnswer: { "@type": "Answer", text: "[ANSWER REQUIRED]" },
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <div className="w-full bg-secondary py-[50px]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <a
              href="#pricing"
              aria-label="Founders Pricing: First 50 Clients Get 50% Off - View Pricing"
              className="group block overflow-hidden rounded-xl sm:rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/25"
            >
              <img
                src="https://vibe.filesafe.space/1788454197571242570/attachments/b5631bd9-9234-4a6b-bd6d-53c8c5bd627e.png"
                alt="Founders Pricing - First 50 Clients Get 50% Off"
                className="block h-auto w-full select-none"
                loading="eager"
              />
            </a>
          </div>
        </div>
        <HowPartsWork />
        <Problem />
        <CompleteSystem />
        <WebsiteShowcase />
        <SocialConsistency />
        <AutomatedReviews />
        <IdealCustomer />
        <HowItWorks />
        <Pricing />
        <PackageComparison />
        <OptionalServices />
        <AuditForm />
        <FAQ />
      </main>
      <Footer />
      <RedRoverMascot />
    </div>
  );
};

export default Index;
