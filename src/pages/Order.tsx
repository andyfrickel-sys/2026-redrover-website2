import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PLANS, getPlanById, fmt, ANNUAL_DISCOUNT_MONTHS } from "@/lib/plans";
import { submitOrderForm } from "@/lib/tracking";

type OrderData = {
  firstName: string;
  businessName: string;
  email: string;
  phone: string;
  website?: string;
  billingCycle: "monthly" | "annual";
  notes?: string;
};

export const OrderPage = () => {
  const [params, setParams] = useSearchParams();
  const planId = params.get("plan") ?? "pro";
  const plan = getPlanById(planId) ?? PLANS[1];
  const [annual, setAnnual] = useState<boolean>(
    params.get("billing") === "annual",
  );
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<OrderData>({
    firstName: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    billingCycle: annual ? "annual" : "monthly",
    notes: "",
  });

  const baseMonthly = plan.foundersMonthly;
  const baseSetup = plan.foundersSetupFee;
  const priceFor = annual
    ? Math.round((baseMonthly * ANNUAL_DISCOUNT_MONTHS) / 12)
    : baseMonthly;
  const setupFor = annual ? Math.round(baseSetup / 2) : baseSetup;
  const monthlySavings = baseMonthly * 12 - priceFor * 12;
  const setupSavings = baseSetup - setupFor;
  const totalSavings = monthlySavings + setupSavings;
  const yearlyTotal = priceFor * 12 + setupFor;

  const switchPlan = (id: string) => {
    const next = new URLSearchParams(params);
    next.set("plan", id);
    setParams(next, { replace: true });
  };

  const toggleBilling = (next: boolean) => {
    setAnnual(next);
    const ns = new URLSearchParams(params);
    ns.set("billing", next ? "annual" : "monthly");
    setParams(ns, { replace: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitOrderForm({
      firstName: form.firstName,
      businessName: form.businessName,
      email: form.email,
      phone: form.phone,
      website: form.website,
      plan: plan.badge,
      billingCycle: annual ? "annual" : "monthly",
      notes: form.notes,
    });
    setSubmitted(true);
  };

  const update = (key: keyof OrderData, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </a>
          <h1 className="text-base font-bold tracking-tight text-white sm:text-lg">
            Complete Your Order
          </h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {submitted ? (
          <div className="mx-auto max-w-xl rounded-3xl border border-border/70 bg-card p-10 text-center shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground">
              Order Received!
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Thanks {form.firstName || "there"} — we've received your{" "}
              <span className="font-semibold text-foreground">
                {plan.tagline}
              </span>{" "}
              order. Our team will reach out within one business day to confirm
              your setup and get everything rolling.
            </p>
            <Button asChild className="mt-7" size="lg">
              <a href="/">Return Home</a>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Order form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Your details
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your info and we'll handle the rest. No payment due now
                — we'll confirm setup before billing anything.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName">Name</Label>
                    <Input
                      id="firstName"
                      required
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      required
                      value={form.businessName}
                      onChange={(e) => update("businessName", e.target.value)}
                      placeholder="Acme Services LLC"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="jane@acme.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="website">Current Website (optional)</Label>
                  <Input
                    id="website"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                    placeholder="https://acme.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="notes">
                    Anything we should know? (optional)
                  </Label>
                  <Textarea
                    id="notes"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Tell us about your goals, timeline, or any specific needs…"
                    rows={3}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-bold">
                  Submit Order
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-2">
              <div className="sticky top-6 rounded-3xl border border-border/70 bg-card p-6 shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  Order Summary
                </h3>

                {/* Plan selector */}
                <div className="mt-4 space-y-2">
                  {PLANS.map((p) => {
                    const active = p.id === plan.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => switchPlan(p.id)}
                        className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                          active
                            ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                            : "border-border/70 hover:border-border"
                        }`}
                      >
                        <div>
                          <p
                            className={`text-sm font-bold ${
                              active ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {p.tagline}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {p.name}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {fmt(p.foundersMonthly)}
                          <span className="text-xs font-normal text-muted-foreground">
                            /mo
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Billing toggle */}
                <div className="mt-5 flex items-center justify-center">
                  <div className="inline-flex items-center rounded-full bg-muted p-1 ring-1 ring-border/60">
                    <button
                      type="button"
                      onClick={() => toggleBilling(false)}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                        !annual
                          ? "bg-primary text-primary-foreground shadow"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleBilling(true)}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                        annual
                          ? "bg-primary text-primary-foreground shadow"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Annual
                    </button>
                  </div>
                </div>

                {/* Totals */}
                <div className="mt-5 space-y-2.5 border-t border-border/60 pt-5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {plan.tagline} ({annual ? "annual" : "monthly"})
                    </span>
                    <span className="font-semibold text-foreground">
                      {fmt(priceFor)}
                      <span className="text-xs font-normal text-muted-foreground">
                        /mo
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      One-time setup{annual ? " (50% off)" : ""}
                    </span>
                    <span className="font-semibold text-foreground">
                      {fmt(setupFor)}
                    </span>
                  </div>
                  {annual && totalSavings > 0 && (
                    <div className="flex items-center justify-between rounded-lg bg-[hsl(var(--success))]/10 px-3 py-2">
                      <span className="font-semibold text-[hsl(var(--success))]">
                        Total savings
                      </span>
                      <span className="font-bold text-[hsl(var(--success))]">
                        {fmt(totalSavings)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-5 flex items-baseline justify-between border-t border-border/60 pt-5">
                  <span className="text-base font-bold text-foreground">
                    {annual ? "Year 1 total" : "First month"}
                  </span>
                  <span className="text-2xl font-extrabold text-foreground">
                    {fmt(annual ? yearlyTotal : priceFor + setupFor)}
                  </span>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  No payment is collected now. We'll confirm your setup details
                  and scope before any charges.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default OrderPage;
