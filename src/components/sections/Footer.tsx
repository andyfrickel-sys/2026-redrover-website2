import { siteConfig } from "@/config";

export const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-8 text-center sm:grid-cols-3 sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          {siteConfig.footerLogoUrl || siteConfig.logoUrl ? (
            <img
              src={siteConfig.footerLogoUrl || siteConfig.logoUrl || ""}
              alt={`${siteConfig.agencyName} logo`}
              className="w-56 max-w-full h-auto border-0 sm:w-36"
            />
          ) : (
            <span className="text-lg font-extrabold">
              {siteConfig.agencyName}
            </span>
          )}
          <p className="mt-4 text-sm text-secondary-foreground/70">
            One simple marketing system for local service businesses.
          </p>
          <address className="mt-4 text-sm not-italic text-secondary-foreground/70 sm:text-left">
            Bonney Lake, WA
          </address>
        </div>

        <div className="text-sm">
          <h3 className="font-semibold text-secondary-foreground">Contact</h3>
          <ul className="mt-4 space-y-2 text-secondary-foreground/70">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="hover:text-secondary-foreground"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.emailHref}
                className="hover:text-secondary-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="font-semibold text-secondary-foreground">Legal</h3>
          <ul className="mt-4 space-y-2 text-secondary-foreground/70">
            <li>
              <a href="#" className="hover:text-secondary-foreground">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary-foreground">
                Terms
              </a>
            </li>
            <li>[SOCIAL PROFILE LINKS]</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 text-center text-sm text-secondary-foreground/60">
        © {new Date().getFullYear()} {siteConfig.agencyName}. All rights
        reserved.
      </div>
    </div>
  </footer>
);
