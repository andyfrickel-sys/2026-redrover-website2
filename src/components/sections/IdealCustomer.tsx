import { CheckCircle2, XCircle } from "lucide-react";

const goodFit = [
  "You already have satisfied customers",
  "One new job is worth substantially more than the monthly investment",
  "Your website needs improvement",
  "You want more recent reviews",
  "Your social accounts are inconsistent",
  "You want marketing handled without hiring another employee",
];

export const IdealCustomer = () => (
  <section
    id="why-red-rover"
    className="border-t border-border/60 bg-background"
  >
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          Is This a Good Fit for Your Business?
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-4 text-lg text-muted-foreground">
          The Red Rover system is designed for established local service
          businesses that do good work but are not consistently showing it
          online.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
        <h3 className="text-lg font-semibold text-secondary">
          Good-fit indicators
        </h3>
        <ul className="mt-5 space-y-3">
          {goodFit.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-muted/50 p-4">
          <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            If your business is still getting established or you are looking for
            an overnight lead-generation promise, this probably is not the right
            fit.
          </p>
        </div>
      </div>
    </div>
  </section>
);
