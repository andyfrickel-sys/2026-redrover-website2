import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitAuditForm } from "@/lib/tracking";

const auditCovers = [
  "Mobile website experience",
  "Local SEO fundamentals",
  "Review rating, quantity, and recency",
  "Review-response activity",
  "Social-media consistency",
  "Lead-conversion opportunities",
];

export const AuditForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const businessName = String(data.get("businessName") || "").trim();
    const website = String(data.get("website") || "").trim();
    const businessCategory = String(data.get("businessCategory") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const serviceArea = String(data.get("serviceArea") || "").trim();
    const concerns = String(data.get("concerns") || "").trim();

    if (!firstName || !businessName || !email || !phone) return;

    setLoading(true);
    try {
      submitAuditForm({
        firstName,
        businessName,
        website,
        businessCategory,
        email,
        phone,
        serviceArea,
        concerns,
      });
      setSubmitted(true);
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="audit"
      className="relative overflow-hidden border-t border-border/60 bg-secondary text-secondary-foreground"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get Your Free Online Presence Audit
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-4 text-lg text-secondary-foreground/80">
            We'll review your website, online reviews, and social-media activity
            and show you where potential customers may be falling through the
            cracks.
          </p>
          <ul className="mt-8 space-y-3">
            {auditCovers.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <span className="text-secondary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 text-foreground shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-secondary">
                Thanks — we're on it!
              </h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                We'll take a real look at your business and reach out within one
                business day with your free online presence audit.
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
                    placeholder="Smith Appliance Repair"
                    required
                    autoComplete="organization"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="website">Website address</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://smithrepair.com"
                    autoComplete="url"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessCategory">Business category</Label>
                  <Input
                    id="businessCategory"
                    name="businessCategory"
                    placeholder="HVAC, plumbing, roofing…"
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
                    placeholder="jane@smithrepair.com"
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
              <div className="space-y-2">
                <Label htmlFor="serviceArea">Primary service area</Label>
                <Input
                  id="serviceArea"
                  name="serviceArea"
                  placeholder="Greater Tacoma, WA"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="concerns">
                  What part of your online marketing concerns you most?
                </Label>
                <Textarea
                  id="concerns"
                  name="concerns"
                  placeholder="Tell us where you feel you're falling behind."
                  rows={3}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Get My Free Audit"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No pressure and no generic automated report. We'll take a real
                look at your business and explain what we find.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
