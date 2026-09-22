import { Check, Minus, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Cell = { type: "check" | "dash" | "text"; value?: string };

type Row = {
  label: string;
  cells: [Cell, Cell, Cell];
  emphasis?: boolean;
};

const check: Cell = { type: "check" };
const dash: Cell = { type: "dash" };
const text = (v: string): Cell => ({ type: "text", value: v });

const ROWS: Row[] = [
  { label: "AI Website", cells: [check, check, check] },
  { label: "AI Chat", cells: [check, check, check] },
  { label: "Review Management", cells: [dash, check, check] },
  { label: "Social Media Automation", cells: [dash, check, check] },
  { label: "Monthly Coaching / Planning Call", cells: [dash, check, check] },
  { label: "After-Hours Voice AI", cells: [dash, dash, check] },
  {
    label: "Best for",
    cells: [
      text("New foundation"),
      text("Growing reputation"),
      text("Never miss a lead"),
    ],
    emphasis: true,
  },
];

const COLUMNS = [
  {
    key: "starter",
    label: "Website",
    sub: undefined as string | undefined,
    featured: false,
  },
  { key: "pro", label: "Growth", sub: "Most Popular", featured: true },
  {
    key: "premium",
    label: "24/7",
    sub: undefined as string | undefined,
    featured: false,
  },
];

function CellContent({ cell, featured }: { cell: Cell; featured: boolean }) {
  if (cell.type === "check")
    return (
      <Check
        className={`mx-auto h-5 w-5 ${
          featured ? "text-white" : "text-[hsl(var(--success))]"
        }`}
        aria-label="Included"
      />
    );
  if (cell.type === "dash")
    return (
      <Minus
        className={`mx-auto h-5 w-5 ${
          featured ? "text-white/40" : "text-muted-foreground/40"
        }`}
        aria-label="Not included"
      />
    );
  return (
    <span
      className={`text-sm font-semibold ${
        featured ? "text-white" : "text-foreground"
      }`}
    >
      {cell.value}
    </span>
  );
}

// Solid red used for the body cells of the featured column.
const FEATURED_BODY = "bg-[#A20C1A] text-white";
// Gradient used only on the header and the very bottom row.
const FEATURED_TOP = "bg-gradient-to-b from-[#B81528] to-[#A20C1A] text-white";
const FEATURED_BOTTOM =
  "bg-gradient-to-b from-[#A20C1A] to-[#800A14] text-white";

export const PackageComparison = () => {
  const navigate = useNavigate();
  const claim = (plan: string) =>
    navigate(`/order?plan=${plan}&billing=monthly`);
  return (
    <section
      id="compare-options"
      className="hidden border-t border-border/60 bg-[#EEF2F6] text-foreground sm:block"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Compare Your Options
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
            Choose the level of support that fits your business. Every package
            includes your website, AI chat and connected lead capture.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto pb-2">
          <table className="w-full min-w-[820px] border-separate border-spacing-x-0">
            <thead>
              <tr>
                <th className="w-[30%] px-4 py-5 text-left align-bottom" />
                {COLUMNS.map((col) => (
                  <th
                    key={col.key}
                    className={`px-4 py-5 text-center align-bottom ${
                      col.featured
                        ? `rounded-t-3xl ${FEATURED_TOP} ring-1 ring-white/20`
                        : "rounded-t-3xl bg-white border border-border/70 shadow-lg"
                    }`}
                  >
                    <div
                      className={`text-lg font-bold uppercase tracking-wide ${
                        col.featured ? "text-white" : "text-foreground"
                      }`}
                    >
                      {col.label}
                    </div>
                    {col.sub && (
                      <div className="mt-1.5 inline-block rounded-full bg-[hsl(var(--gold))] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-[hsl(var(--gold-foreground))]">
                        {col.sub}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row, ri) => {
                const isVeryLast = ri === ROWS.length - 1;
                return (
                  <tr key={row.label}>
                    <td
                      className={`px-4 py-3 text-left text-sm ${
                        row.emphasis
                          ? "font-extrabold uppercase tracking-wide text-primary"
                          : "text-foreground/90"
                      }`}
                    >
                      {row.label}
                    </td>
                    {row.cells.map((cell, i) => (
                      <td
                        key={i}
                        className={`px-4 py-3 text-center ${
                          COLUMNS[i].featured
                            ? isVeryLast
                              ? `rounded-b-3xl ${FEATURED_BOTTOM} ring-1 ring-white/10`
                              : FEATURED_BODY
                            : isVeryLast
                              ? "rounded-b-3xl bg-white border border-border/70 shadow-lg"
                              : "bg-white"
                        }`}
                      >
                        <CellContent
                          cell={cell}
                          featured={COLUMNS[i].featured}
                        />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="px-4 py-3" />
                {COLUMNS.map((col) => (
                  <td key={col.key} className="px-4 py-4 text-center">
                    <button
                      type="button"
                      onClick={() => claim(col.key)}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.03] ${
                        col.featured
                          ? "bg-[#A20C1A] hover:bg-[#800A14]"
                          : "bg-black hover:bg-black/80"
                      }`}
                    >
                      Claim{" "}
                      {col.label === "Website"
                        ? "Starter"
                        : col.label === "Growth"
                          ? "Pro"
                          : "Premium"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Pricing is for one business location. Social posts are adapted across
          the two included channels. Voice, chat and messaging allowances and
          overage rates are specified in your proposal. Local SEO includes the
          initial website foundation; ongoing SEO campaigns, advertising and
          custom integrations are quoted separately.
        </p>
      </div>
    </section>
  );
};
