import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import { industryGroups } from "@/lib/industries";

const nav = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "What's Included", href: "/#included" },
  { label: "Why Red Rover", href: "/#why-red-rover" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const enterMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const leaveMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  return (
    <header className="sticky top-0 z-50 w-full mt-[15px] mb-[15px] pb-[15px] border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          {siteConfig.logoUrl ? (
            <img
              src={siteConfig.logoUrl}
              alt={`${siteConfig.agencyName} logo`}
              className="h-[60px] w-auto sm:h-[66px]"
            />
          ) : (
            <span className="text-lg font-extrabold tracking-tight text-secondary">
              Red Rover Marketing
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {/* Industries mega menu trigger */}
          <div onMouseEnter={enterMega} onMouseLeave={leaveMega}>
            <button
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
            >
              Industries
              <ChevronDown
                className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a href="/#audit">Get Your Free Audit</a>
          </Button>
        </div>

        <button
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {megaOpen && (
          <div
            className="absolute left-4 top-full z-50 mt-2 w-[1152px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl sm:left-6"
            onMouseEnter={enterMega}
            onMouseLeave={leaveMega}
          >
            <div className="relative">
              <button
                type="button"
                aria-label="Scroll industries left"
                onClick={() => {
                  const el = scrollRef.current;
                  if (el) el.scrollBy({ left: -420, behavior: "smooth" });
                }}
                className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-card/95 text-foreground shadow-md transition-colors hover:bg-muted"
              >
                <ChevronDown className="h-5 w-5 rotate-90" />
              </button>
              <button
                type="button"
                aria-label="Scroll industries right"
                onClick={() => {
                  const el = scrollRef.current;
                  if (el) el.scrollBy({ left: 420, behavior: "smooth" });
                }}
                className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-card/95 text-foreground shadow-md transition-colors hover:bg-muted"
              >
                <ChevronDown className="h-5 w-5 -rotate-90" />
              </button>

              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scroll-smooth p-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {industryGroups
                  .flatMap((group) => group.items)
                  .map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group w-[260px] shrink-0 rounded-lg transition-colors hover:bg-muted/70"
                    >
                      <div className="h-[190px] w-full overflow-hidden rounded-md border border-border/60 bg-muted">
                        <img
                          src={item.image}
                          alt={`${item.label} website preview`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-center text-sm font-semibold text-foreground group-hover:text-primary">
                        {item.label}
                      </p>
                    </a>
                  ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-border/60 bg-muted/40 px-4 py-2.5">
              <span className="text-xs text-muted-foreground">
                Don't see your industry? We build for every local business.
              </span>
              <a
                href="/#audit"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Get your free audit →
              </a>
            </div>
          </div>
        )}
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Industries
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-2">
                {industryGroups
                  .flatMap((g) => g.items)
                  .map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm font-medium text-muted-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
              </div>
            </div>
            <div className="my-1 h-px bg-border/60" />
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="/#audit" onClick={() => setOpen(false)}>
                Get Your Free Audit
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
