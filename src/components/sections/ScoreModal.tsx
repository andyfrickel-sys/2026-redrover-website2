import { useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { submitAuditForm } from "@/lib/tracking";

interface ScoreModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ScoreModal = ({ open, onOpenChange }: ScoreModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form state
  const [websiteOrName, setWebsiteOrName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleStep1Submit = (e: FormEvent) => {
    e.preventDefault();
    if (!websiteOrName.trim()) return;
    setStep(2);
  };

  const handleStep2Submit = (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;

    setLoading(true);
    try {
      submitAuditForm({
        firstName,
        businessName: websiteOrName,
        website: websiteOrName.includes(".") ? websiteOrName : "",
        businessCategory: "Local Service",
        email,
        phone,
        serviceArea: "",
        concerns: "Requested Online Presence Score from Hero CTA",
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (val: boolean) => {
    if (!val) {
      setStep(1);
      setSubmitted(false);
      setWebsiteOrName("");
      setFirstName("");
      setEmail("");
      setPhone("");
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border shadow-xl rounded-2xl p-6 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center text-center py-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold text-secondary">
              Check Your Inbox Soon!
            </DialogTitle>
            <DialogDescription className="mt-3 text-base text-muted-foreground leading-relaxed">
              Thanks. We'll review your website, recent reviews, and social
              activity, then show you what's working, what may be getting
              missed, and what we would fix first.
            </DialogDescription>
            <Button
              className="mt-6 w-full bg-primary text-white hover:bg-primary/90"
              onClick={() => handleOpenChange(false)}
            >
              Done
            </Button>
          </div>
        ) : step === 1 ? (
          <div>
            <DialogHeader className="text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase w-max">
                <Sparkles className="h-3.5 w-3.5" /> Free Analysis
              </div>
              <DialogTitle className="text-2xl font-extrabold text-secondary tracking-tight">
                Get Your Free Online Presence Score
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Step 1 of 2: Tell us where to evaluate your business online.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleStep1Submit} className="mt-6 space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="websiteOrName"
                  className="font-semibold text-secondary"
                >
                  Business Website URL or Business Name
                </Label>
                <Input
                  id="websiteOrName"
                  placeholder="e.g. smithplumbing.com or Smith Plumbing Tacoma"
                  value={websiteOrName}
                  onChange={(e) => setWebsiteOrName(e.target.value)}
                  required
                  className="h-12 text-base"
                  autoFocus
                />
                <p className="text-xs text-muted-foreground">
                  If you don't have a website yet, simply enter your business
                  name.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-md"
              >
                Check My Online Presence
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <DialogHeader className="text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase w-max">
                Step 2 of 2
              </div>
              <DialogTitle className="text-2xl font-extrabold text-secondary tracking-tight">
                Where Should We Send Your Score?
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Evaluating online presence for:{" "}
                <strong className="text-secondary">{websiteOrName}</strong>
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleStep2Submit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="modalFirstName"
                  className="font-semibold text-secondary"
                >
                  First Name
                </Label>
                <Input
                  id="modalFirstName"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="h-11"
                  autoFocus
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="modalEmail"
                  className="font-semibold text-secondary"
                >
                  Business Email
                </Label>
                <Input
                  id="modalEmail"
                  type="email"
                  placeholder="john@smithplumbing.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="modalPhone"
                  className="font-semibold text-secondary"
                >
                  Phone Number{" "}
                  <span className="text-muted-foreground font-normal">
                    (Optional)
                  </span>
                </Label>
                <Input
                  id="modalPhone"
                  type="tel"
                  placeholder="(253) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-11"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="h-12 border-border text-secondary"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex-1 h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-md"
                >
                  {loading ? "Analyzing..." : "Get My Free Score"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
