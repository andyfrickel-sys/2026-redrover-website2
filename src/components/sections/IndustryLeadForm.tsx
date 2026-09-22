import { useState, type FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitIndustryLead } from "@/lib/tracking";

interface IndustryLeadFormProps {
  industry: string;
  template: string;
}

export const IndustryLeadForm = ({
  industry,
  template,
}: IndustryLeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const businessName = String(data.get("businessName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const website = String(data.get("website") || "").trim();
    const serviceArea = String(data.get("serviceArea") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!firstName || !businessName || !email || !phone) return;

    setLoading(true);
    try {
      submitIndustryLead({
        firstName,
        businessName,
        email,
        phone,
        website,
        serviceArea,
        industry,
        template,
        message,
      });
      setSubmitted(true);
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-foreground shadow-lg shadow-secondary/10 sm:p-8">
      {submitted ? (
        <div className="flex flex-col items-center py-10 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-2xl font-bold text-secondary">
            Thanks — we'll be in touch!
          </h3>
          <p className="mt-2 max-w-sm text-muted-foreground">
            We received your request for the {template} layout. We'll reach out
            within one business day to get your project started.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setSubmitted(false)}
          >
            Submit another
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Let's Get Started
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-secondary">
              Claim This Layout for Your Business
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your {industry.toLowerCase()} business and we'll
              customize this proven layout for you.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First and last name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Jane Smith"
                required
                autoComplete="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business name</Label>
              <Input
                id="businessName"
                name="businessName"
                placeholder="Your Business Name"
                required
                autoComplete="organization"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@business.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                required
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="website">Current website (optional)</Label>
              <Input
                id="website"
                name="website"
                type="url"
                placeholder="https://yourbusiness.com"
                autoComplete="url"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceArea">Primary service area</Label>
              <Input
                id="serviceArea"
                name="serviceArea"
                placeholder="Greater Tacoma, WA"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Anything we should know? (optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your goals or timeline."
              rows={3}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Get My Custom Website"}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            No pressure. We'll review your business and show you how this layout
            can be tailored to win more local customers.
          </p>
        </form>
      )}
    </div>
  );
};
