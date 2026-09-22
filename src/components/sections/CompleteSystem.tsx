import { Fragment } from "react";
import {
  Search,
  Star,
  Eye,
  BarChart3,
  Users,
  TrendingUp,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Eye,
    number: "01",
    tag: "Be Seen",
    title: "Social Media That Stays Active",
    body: "Keep your business visible with professionally planned content without having to stop what you are doing and create another post.",
    items: [
      "Monthly content planning",
      "Professionally written posts",
      "Scheduled publishing",
      "Seasonal related content",
      "Service & Promotion Related",
      "Customer approval process",
      "Consistent Weekly Posts",
      "Google, Facebook, Instagram, Yelp",
    ],
  },
  {
    icon: Search,
    number: "02",
    tag: "Be Found",
    title: "A Website Built to Generate Leads",
    body: "Get a fast, mobile-first website that clearly explains what you do, where you work, and why local customers should contact you.",
    items: [
      "Mobile-First Design",
      "Local SEO & AI Search Ready",
      "Service & Service-Area Pages",
      "Social Sharing Optimization",
      "Lead Capture Forms",
      "Fast, Secure Hosting",
      "Built-In CRM",
      "Google-Friendly Sitemap",
    ],
  },
  {
    icon: Star,
    number: "03",
    tag: "Be Chosen",
    title: "A Review System That Never Forgets",
    body: "Automatically follow up with customers after the job and make it easier for satisfied customers to share their experience.",
    items: [
      "Automated review requests",
      "Email and text follow-up",
      "Review monitoring",
      "Review-response assistance",
      "Automatic follow-up reminders",
      "Private feedback capture",
      "Website review display",
      "Google Reviews on your GBP",
    ],
  },
];

const benefits = [
  { icon: BarChart3, label: "More Leads" },
  { icon: Users, label: "More Reviews" },
  { icon: TrendingUp, label: "More Revenue" },
];

export const CompleteSystem = () => (
  <section id="included" className="rr-growth-section">
    <style>{css}</style>

    {/* decorative background */}
    <div className="rr-growth-bg" aria-hidden="true">
      <div className="rr-growth-dots" />
      <div className="rr-growth-glow rr-growth-glow--left" />
      <div className="rr-growth-glow rr-growth-glow--right" />
      <div className="rr-growth-curve rr-growth-curve--tl" />
      <div className="rr-growth-curve rr-growth-curve--br" />
    </div>

    {/* handwritten accent */}
    <div className="rr-growth-script" aria-hidden="true">
      Local Business
      <br />
      Growth Simplified
      <span className="rr-growth-script-underline" />
    </div>

    <div className="rr-growth-inner">
      {/* header */}
      <header className="rr-growth-header">
        <p className="rr-growth-eyebrow text-amber-300 text-xl">
          More Visibility. More Customers. A Stronger Business.
        </p>
        <h2 className="rr-growth-title">The 3-Part Growth System</h2>
        <div className="rr-growth-divider" />
        <p className="rr-growth-subhead">
          Be <span className="rr-growth-red">Seen.</span> Be{" "}
          <span className="rr-growth-red">Found.</span> Be{" "}
          <span className="rr-growth-red">Chosen.</span>
        </p>
        <p className="rr-growth-lede">
          A complete system to attract, convert, and keep more local customers —
          so you can grow with confidence.
        </p>
      </header>

      {/* cards */}
      <div className="rr-growth-grid">
        {/* desktop connector line behind icon row */}
        <div className="rr-growth-connector-line" aria-hidden="true" />

        {steps.map((s, i) => (
          <Fragment key={s.tag}>
            <article className="rr-growth-card">
              {/* oversized step number */}
              <span className="rr-growth-stepnum" aria-hidden="true">
                {s.number}
              </span>

              {/* glowing icon orb */}
              <div className="rr-growth-icon" aria-hidden="true">
                <div className="rr-growth-icon-ring" />
                <div className="rr-growth-icon-ring rr-growth-icon-ring--2" />
                <s.icon className="rr-growth-icon-glyph" strokeWidth={2} />
              </div>

              <span className="rr-growth-label text-amber-300 text-gold">
                {s.tag}
              </span>
              <h3 className="rr-growth-card-title">{s.title}</h3>
              <p className="rr-growth-card-body">{s.body}</p>

              <div className="rr-growth-checklist">
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>
                      <span className="rr-growth-check" aria-hidden="true">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* desktop arrow between cards */}
            {i < steps.length - 1 && (
              <div className="rr-growth-arrow" aria-hidden="true">
                <div className="rr-growth-arrow-line" />
                <div className="rr-growth-arrow-node">
                  <ArrowRight
                    className="rr-growth-arrow-glyph"
                    strokeWidth={3}
                  />
                </div>
                <div className="rr-growth-arrow-line" />
              </div>
            )}

            {/* mobile vertical connector */}
            {i < steps.length - 1 && (
              <div className="rr-growth-vconnector" aria-hidden="true">
                <div className="rr-growth-vline" />
                <div className="rr-growth-arrow-node rr-growth-arrow-node--down">
                  <ChevronDown
                    className="rr-growth-arrow-glyph"
                    strokeWidth={3}
                  />
                </div>
                <div className="rr-growth-vline" />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      {/* benefit bar */}
      <div className="rr-growth-benefits">
        {benefits.map((b, i) => (
          <Fragment key={b.label}>
            <div className="rr-growth-benefit">
              <b.icon className="rr-growth-benefit-icon" strokeWidth={2.2} />
              <span>{b.label}</span>
            </div>
            {i < benefits.length - 1 && (
              <div className="rr-growth-benefit-divider" aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  </section>
);

const css = `
.rr-growth-section{position:relative;overflow:hidden;background:linear-gradient(160deg,#031B36 0%,#07142B 100%);color:#fff;font-family:Inter,Arial,sans-serif;padding:clamp(56px,8vw,96px) clamp(16px,4vw,40px)}
.rr-growth-bg{position:absolute;inset:0;pointer-events:none;z-index:0}
.rr-growth-dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px);background-size:28px 28px;opacity:0.6}
.rr-growth-glow{position:absolute;width:420px;height:420px;border-radius:50%;filter:blur(140px);opacity:0.5}
.rr-growth-glow--left{left:-120px;top:18%;background:rgba(227,24,45,0.16)}
.rr-growth-glow--right{right:-120px;bottom:12%;background:rgba(227,24,45,0.16)}
.rr-growth-curve{position:absolute;width:560px;height:560px;border-radius:50%;border:1px solid rgba(120,160,220,0.06)}
.rr-growth-curve--tl{top:-260px;left:-180px}
.rr-growth-curve--br{bottom:-280px;right:-200px}

.rr-growth-script{position:absolute;top:42px;right:clamp(20px,5vw,70px);z-index:2;font-family:"Brush Script MT","Segoe Script",cursive;font-size:clamp(16px,1.6vw,22px);line-height:1.15;color:rgba(150,180,220,0.55);text-align:right;pointer-events:none;display:none}
@media(min-width:1100px){.rr-growth-script{display:block}}
.rr-growth-script-underline{display:block;width:100%;height:2px;margin-top:4px;background:linear-gradient(90deg,transparent,rgba(227,24,45,0.5),transparent)}

.rr-growth-inner{position:relative;z-index:1;max-width:1152px;margin:0 auto}
.rr-growth-header{text-align:center;max-width:90%;margin:0 auto}
.rr-growth-eyebrow{margin:0;color:rgba(170,195,225,0.85);font-size:clamp(11px,1.2vw,13px);font-weight:700;letter-spacing:0.28em;text-transform:uppercase}
.rr-growth-title{margin:14px 0 0;font-size:clamp(34px,5vw,56px);font-weight:800;letter-spacing:-0.03em;line-height:1.05;color:#fff}
.rr-growth-divider{width:64px;height:3px;border-radius:99px;margin:18px auto 0;background:linear-gradient(90deg,#E3182D,#FF1F38)}
.rr-growth-subhead{margin:18px 0 0;font-size:clamp(22px,3vw,34px);font-weight:800;letter-spacing:-0.02em;color:#fff;white-space:nowrap}
@media(max-width:560px){.rr-growth-subhead{white-space:normal}}
.rr-growth-red{color:#FF1F38}
.rr-growth-lede{margin:14px auto 0;max-width:640px;font-size:clamp(16px,1.8vw,19px);line-height:1.6;color:rgba(190,210,235,0.8);font-weight:400}

.rr-growth-grid{position:relative;display:flex;flex-direction:column;align-items:stretch;gap:22px;margin-top:clamp(31px,7vw,63px)}
.rr-growth-connector-line{position:absolute;left:14%;right:14%;top:118px;height:2px;background:linear-gradient(90deg,transparent,rgba(227,24,45,0.45),rgba(227,24,45,0.6),rgba(227,24,45,0.45),transparent);display:none}
@media(min-width:1024px){.rr-growth-grid{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;align-items:start;gap:0}.rr-growth-connector-line{display:block}}

.rr-growth-card{position:relative;display:flex;flex-direction:column;background:rgba(255,255,255,0.045);border:1px solid rgba(120,160,220,0.16);border-radius:30px;padding:clamp(28px,3vw,42px) clamp(24px,2.6vw,38px) clamp(28px,3vw,38px);backdrop-filter:blur(12px);box-shadow:0 24px 60px -28px rgba(0,0,0,0.8);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;margin-top:42px}
.rr-growth-card:hover{transform:translateY(-4px);border-color:rgba(227,24,45,0.4);box-shadow:0 32px 70px -26px rgba(227,24,45,0.35)}
@media(min-width:1024px){.rr-growth-card{margin-top:42px}}
@media(max-width:1023px){.rr-growth-card{margin-top:48px;text-align:center;align-items:center}}

.rr-growth-stepnum{position:absolute;top:14px;left:22px;font-size:clamp(40px,3.4vw,58px);font-weight:800;line-height:1;letter-spacing:-0.04em;background:linear-gradient(180deg,rgba(120,160,220,0.22),rgba(60,90,140,0.08));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;user-select:none}
@media(max-width:1023px){.rr-growth-stepnum{left:50%;transform:translateX(-50%);top:18px}}

.rr-growth-icon{position:absolute;top:-30px;left:50%;transform:translateX(-50%);width:clamp(48px,4vw,66px);height:clamp(48px,4vw,66px);border-radius:50%;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 35% 30%,#FF1F38 0%,#E3182D 55%,#B30D20 100%);box-shadow:0 0 25px -3px rgba(255,31,56,0.7),0 7px 15px -5px rgba(227,24,45,0.6)}
.rr-growth-icon-ring{position:absolute;inset:-3px;border-radius:50%;border:1px solid rgba(255,31,56,0.45)}
.rr-growth-icon-ring--2{inset:-6px;border:1px solid rgba(255,31,56,0.22)}
.rr-growth-icon-glyph{position:relative;width:46%;height:46%;color:#fff;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.25))}

.rr-growth-label{margin-top:28px;font-size:clamp(20px,2vw,26px);font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#FF1F38}
.rr-growth-card-title{margin:8px 0 0;font-size:clamp(20px,2vw,25px);font-weight:700;line-height:1.2;color:#fff}
.rr-growth-card-body{margin:12px 0 0;font-size:clamp(15px,1.4vw,16px);line-height:1.6;color:rgba(180,200,230,0.78)}

.rr-growth-checklist{margin-top:auto;padding-top:22px}
.rr-growth-checklist ul{list-style:none;margin:0;padding:18px 20px;background:rgba(4,12,28,0.55);border:1px solid rgba(120,160,220,0.14);border-radius:20px;display:flex;flex-direction:column;gap:11px}
.rr-growth-checklist li{display:flex;align-items:flex-start;gap:11px;font-size:clamp(14px,1.3vw,15px);color:rgba(225,235,250,0.92);line-height:1.4}
@media(max-width:1023px){.rr-growth-checklist li{text-align:left}}
.rr-growth-check{flex-shrink:0;margin-top:2px;width:18px;height:18px;border-radius:50%;background:rgba(227,24,45,0.18);color:#FF1F38;display:flex;align-items:center;justify-content:center}

.rr-growth-arrow{display:none}
@media(min-width:1024px){.rr-growth-arrow{display:flex;align-items:center;justify-content:center;padding-top:99px}}
.rr-growth-arrow-line{width:14px;height:2px;background:rgba(227,24,45,0.4)}
.rr-growth-arrow-node{flex-shrink:0;width:38px;height:38px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#FF1F38 0%,#E3182D 55%,#B30D20 100%);border:2px solid rgba(255,31,56,0.45);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 0 26px -4px rgba(255,31,56,0.7),0 10px 22px -10px rgba(227,24,45,0.6);position:relative}
.rr-growth-arrow-node::before{content:"";position:absolute;inset:-6px;border-radius:50%;border:1px solid rgba(255,31,56,0.22)}
.rr-growth-arrow-glyph{width:16px;height:16px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.25))}

.rr-growth-vconnector{display:flex;flex-direction:column;align-items:center;gap:0}
@media(min-width:1024px){.rr-growth-vconnector{display:none}}
.rr-growth-vline{width:2px;height:22px;background:linear-gradient(180deg,rgba(227,24,45,0.15),rgba(227,24,45,0.45))}
.rr-growth-arrow-node--down{width:34px;height:34px}

.rr-growth-benefits{margin:clamp(40px,5vw,56px) auto 0;max-width:760px;display:flex;align-items:center;justify-content:center;gap:0;flex-wrap:wrap;background:linear-gradient(90deg,rgba(4,12,28,0.7),rgba(10,24,52,0.7),rgba(4,12,28,0.7));border:1px solid rgba(120,160,220,0.2);border-radius:99px;padding:18px 28px;box-shadow:0 14px 40px -20px rgba(0,0,0,0.7)}
.rr-growth-benefit{display:flex;align-items:center;gap:12px;padding:4px 22px}
.rr-growth-benefit-icon{width:24px;height:24px;color:#FF1F38;flex-shrink:0}
.rr-growth-benefit span{font-size:clamp(13px,1.4vw,16px);font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#fff;white-space:nowrap}
.rr-growth-benefit-divider{width:1px;height:26px;background:rgba(120,160,220,0.25)}
@media(max-width:560px){.rr-growth-benefits{flex-direction:column;border-radius:24px;gap:6px}.rr-growth-benefit-divider{width:60px;height:1px}.rr-growth-benefit{padding:8px}}

@media(prefers-reduced-motion:reduce){.rr-growth-card{transition:none}.rr-growth-card:hover{transform:none}}
`;
