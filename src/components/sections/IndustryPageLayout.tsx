import { CheckCircle2, Monitor } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { IndustryLeadForm } from "@/components/sections/IndustryLeadForm";

export interface IndustryPageData {
  slug: string;
  title: string;
  industry: string;
  imageUrl: string;
  tagline: string;
  /** Short marketing description shown beneath the screenshot. */
  description: string;
  /** Feature bullets shown in the left column. */
  features: string[];
  /** SEO meta description for the page. */
  metaDescription: string;
}

interface IndustryPageLayoutProps {
  data: IndustryPageData;
}

export const IndustryPageLayout = ({ data }: IndustryPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero / two-column layout */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* LEFT: picture + description */}
            <div className="order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                <Monitor className="h-3.5 w-3.5" />
                <span>{data.industry}</span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-4xl lg:text-[2.75rem]">
                {data.title}
              </h1>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-4 text-lg text-muted-foreground">
                {data.tagline}
              </p>

              {/* Template screenshot */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-secondary/10">
                <div className="flex items-center justify-between border-b border-border/70 bg-slate-100/90 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm border border-slate-200/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Live Preview</span>
                  </div>
                </div>
                <div className="relative w-full overflow-hidden bg-slate-900">
                  <img
                    src={data.imageUrl}
                    alt={`${data.title} — ${data.industry} website design preview`}
                    className="block w-full h-auto"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* Description + features below the image */}
              <div className="mt-8">
                <h2 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
                  Built for {data.industry.toLowerCase()} businesses
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {data.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {data.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground/90 sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT: lead form (sticky on desktop) */}
            <div className="order-2 lg:sticky lg:top-28">
              <IndustryLeadForm
                industry={data.industry}
                template={data.title}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
