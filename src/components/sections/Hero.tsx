import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScoreModal } from "./ScoreModal";
import { ChromaKeyHeroImage } from "./ChromaKeyHeroImage";

export const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid pt-[20px] sm:pt-[50px] pb-8 sm:pb-12 lg:pb-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center lg:text-left">
          {/* Eyebrow */}
          <span className="block font-bold uppercase tracking-wider text-primary text-[clamp(0.7rem,2vw,1.3rem)] leading-tight sm:whitespace-nowrap">
            MARKETING THAT'S CUSTOMIZED FOR YOUR BRAND AND BUILT TO DOMINATE
          </span>
        </div>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* LEFT COLUMN: ~55% (7 out of 12 cols) */}
          <div className="flex flex-col text-center lg:col-span-7 lg:text-left">
            {/* Main Headline */}
            <h1 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-secondary sm:text-4xl md:text-5xl lg:text-[52px]">
              Everything You Need to Be Seen, Found, and Chosen.
            </h1>

            {/* Mobile-only image — appears right under the headline on small screens */}
            <div className="mt-6 flex justify-center lg:hidden">
              <ChromaKeyHeroImage
                alt="Red Rover connected website, social media, and review management system"
                width={1000}
                height={920}
                className="w-full max-w-[540px] h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>

            {/* Supporting Copy */}
            <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              One connected system combines a fast mobile-first website, planned
              social content, and automated review management—so your marketing
              keeps moving while you run your business.
            </p>

            {/* Primary CTA */}
            <div className="mt-8 flex flex-col items-center sm:items-stretch lg:items-start">
              <Button
                size="lg"
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg transition-all hover:translate-y-[-1px]"
              >
                Get My Free Online Presence Score
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Reassurance */}
              <p className="mt-4 w-full lg:max-w-lg text-xs sm:text-sm text-muted-foreground leading-snug text-center sm:text-center lg:text-left">
                No pressure. No generic automated report.
                <br />
                We’ll show you what’s working, what’s being missed, and what we
                would fix first.
              </p>

              {/* Small Text Link to Services */}
              <a
                href="#included"
                className="mt-3 inline-block text-xs font-semibold text-secondary hover:text-primary underline underline-offset-4 transition-colors text-center sm:text-center lg:text-left"
              >
                See What’s Included ↓
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN VISUAL: ~45% (5 out of 12 cols) */}
          <div className="relative hidden lg:flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[540px] lg:max-w-none">
              <ChromaKeyHeroImage
                alt="Red Rover connected website, social media, and review management system"
                width={1000}
                height={920}
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2-Step Score Modal */}
      <ScoreModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};
