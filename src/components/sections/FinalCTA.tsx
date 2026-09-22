import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => (
  <section className="border-t border-border/60 bg-background">
    <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
      <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
        Your Marketing Shouldn't Depend on What You Have Time to Do This Week.
      </h2>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />
      <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
        Let's put the essentials on a consistent system so your business can be
        seen, found, and chosen.
      </p>
      <div className="mt-8">
        <Button asChild size="lg" className="text-base">
          <a href="#audit">
            Get Your Free Online Presence Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);
