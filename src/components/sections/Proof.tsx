import { Quote } from "lucide-react";

const placeholders = [
  "[WEBSITE BEFORE-AND-AFTER EXAMPLE]",
  "[REVIEW-GROWTH CASE STUDY]",
  "[SOCIAL-MEDIA CONTENT EXAMPLE]",
];

export const Proof = () => (
  <section id="proof" className="border-t border-border/60 bg-background">
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          Built Around Real Business Results
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-4 text-lg text-muted-foreground">
          We'll add verified examples here as they become available. No
          fabricated case studies or invented numbers.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {placeholders.map((p) => (
          <div
            key={p}
            className="flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-border bg-muted/40 p-6 text-center"
          >
            <span className="text-sm font-medium text-muted-foreground">
              {p}
            </span>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
        <Quote className="h-8 w-8 text-primary" />
        <p className="mt-4 text-lg font-medium text-secondary">
          [CLIENT TESTIMONIAL]
        </p>
        <p className="mt-4 text-sm text-muted-foreground">[CLIENT LOGOS]</p>
      </div>
    </div>
  </section>
);
