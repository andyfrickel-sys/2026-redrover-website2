import { Calendar, CheckCircle2, MessageSquare, Share2 } from "lucide-react";

interface SocialPoint {
  icon: typeof Calendar;
  title: string;
  body: string;
  bgImage: string;
}

const points: SocialPoint[] = [
  {
    icon: Calendar,
    title: "Planned In Advance",
    body: "A full month of posts mapped out before the first one goes live — no more scrambling for something to share.",
    bgImage:
      "https://vibe.filesafe.space/1788454197571242570/attachments/1da97386-661a-40a5-ae9b-993100d1faee.png",
  },
  {
    icon: MessageSquare,
    title: "Professionally Written",
    body: "Every caption is written for your industry, your services, and the homeowners you want to reach.",
    bgImage:
      "https://vibe.filesafe.space/1788454197571242570/attachments/7f901f8b-4e08-4585-ae60-0798951ac7d2.png",
  },
  {
    icon: Share2,
    title: "Published On Schedule",
    body: "Posts go out on the right days at the right times across Google, Facebook, Instagram, and Yelp.",
    bgImage:
      "https://vibe.filesafe.space/1788454197571242570/attachments/c71f2598-eda9-4061-bd4d-da8857ff2725.png",
  },
];

const guarantees = [
  "Consistent weekly posts",
  "Seasonal & service-related content",
  "Customer approval before anything goes live",
  "No need to stop working to create content",
];

export const SocialConsistency = () => (
  <section className="rr-social-section">
    <style>{css}</style>

    <div className="rr-social-bg" aria-hidden="true">
      <div className="rr-social-dots" />
      <div className="rr-social-glow rr-social-glow--left" />
      <div className="rr-social-glow rr-social-glow--right" />
    </div>

    <div className="rr-social-inner">
      <header className="rr-social-header">
        <p className="rr-social-eyebrow text-xl text-amber-300">
          Stay Top Of Mind
        </p>
        <h2 className="rr-social-title">
          Consistent Social Media That Keeps{" "}
          <span className="rr-social-you">You</span> Visible
        </h2>
        <p className="rr-social-lede">
          Posting gets pushed aside when you're busy running the business. Red
          Rover plans, writes, and publishes your social content on a steady
          schedule — so your business always looks active, professional, and
          ready to help.
        </p>
      </header>

      <div className="rr-social-grid">
        {points.map(({ icon: Icon, title, body, bgImage }) => (
          <article
            key={title}
            className="rr-social-card"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Dark gradient overlay at the bottom so text is crisp and readable */}
            <div className="rr-social-card-overlay" aria-hidden="true" />

            <div className="rr-social-card-content">
              <div className="rr-social-icon" aria-hidden="true">
                <Icon className="rr-social-icon-glyph" strokeWidth={2.2} />
              </div>
              <h3 className="rr-social-card-title">{title}</h3>
              <p className="rr-social-card-body">{body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="rr-social-guarantees">
        <ul>
          {guarantees.map((g) => (
            <li key={g}>
              <CheckCircle2 className="rr-social-check" strokeWidth={2.2} />
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const css = `
.rr-social-section{position:relative;overflow:hidden;background:linear-gradient(160deg,#031B36 0%,#07142B 100%);color:#fff;font-family:Inter,Arial,sans-serif;padding:clamp(56px,8vw,96px) clamp(16px,4vw,40px)}
.rr-social-bg{position:absolute;inset:0;pointer-events:none;z-index:0}
.rr-social-dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px);background-size:28px 28px;opacity:0.6}
.rr-social-glow{position:absolute;width:420px;height:420px;border-radius:50%;filter:blur(140px);opacity:0.5}
.rr-social-glow--left{left:-120px;top:18%;background:rgba(227,24,45,0.16)}
.rr-social-glow--right{right:-120px;bottom:12%;background:rgba(227,24,45,0.16)}

.rr-social-inner{position:relative;z-index:1;max-width:1152px;margin:0 auto}
.rr-social-header{text-align:center;max-width:100%;margin:0 auto}
.rr-social-eyebrow{margin:0;color:#FF1F38;font-size:clamp(11px,1.2vw,13px);font-weight:700;letter-spacing:0.28em;text-transform:uppercase}
.rr-social-title{margin:14px 0 0;font-size:clamp(30px,4.4vw,52px);font-weight:800;letter-spacing:-0.03em;line-height:1.08;color:#fff}
.rr-social-you{position:relative;color:#fff;white-space:nowrap}
.rr-social-you::after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:4px;border-radius:99px;background:linear-gradient(90deg,#E3182D,#FF1F38)}
.rr-social-lede{margin:16px auto 0;max-width:680px;font-size:clamp(16px,1.8vw,19px);line-height:1.6;color:rgba(190,210,235,0.8);font-weight:400}

.rr-social-grid{display:grid;grid-template-columns:1fr;gap:24px;margin-top:clamp(44px,6vw,64px)}
@media(min-width:768px){.rr-social-grid{grid-template-columns:repeat(3,1fr);gap:28px}}

.rr-social-card{
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  aspect-ratio:0.8/1;
  width:100%;
  border-radius:28px;
  overflow:hidden;
  background-size:116% 116%;
  background-position:center 6%;
  background-repeat:no-repeat;
  background-color:transparent;
  border:1px solid rgba(255,255,255,0.85);
  box-shadow:0 24px 60px -20px rgba(0,0,0,0.85);
  transition:transform .3s ease,box-shadow .3s ease;
}
.rr-social-card:hover{
  transform:translateY(-4px);
  border-color:rgba(227,24,45,0.4);
  box-shadow:0 32px 70px -26px rgba(227,24,45,0.35);
}

.rr-social-card-overlay{
  position:absolute;
  inset:0;
  pointer-events:none;
  background:linear-gradient(
    180deg,
    rgba(3,27,54,0) 0%,
    rgba(3,27,54,0) 40%,
    rgba(3,27,54,0.85) 75%,
    rgba(3,27,54,0.98) 100%
  );
  z-index:1;
}

.rr-social-card-content{
  position:relative;
  z-index:2;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding:clamp(22px,2.6vw,32px);
}
@media(max-width:767px){
  .rr-social-card-content{
    align-items:center;
    text-align:center;
  }
}

.rr-social-icon{
  flex-shrink:0;
  width:clamp(48px,4.5vw,58px);
  height:clamp(48px,4.5vw,58px);
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:radial-gradient(circle at 35% 30%,#FF1F38 0%,#E3182D 55%,#B30D20 100%);
  box-shadow:0 0 28px -4px rgba(255,31,56,0.7),0 10px 22px -8px rgba(227,24,45,0.65);
  border:1px solid rgba(255,255,255,0.25);
  margin-bottom:14px;
}
.rr-social-icon-glyph{
  width:44%;
  height:44%;
  color:#fff;
  filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.rr-social-card-title{
  margin:0;
  font-size:clamp(20px,1.9vw,24px);
  font-weight:800;
  line-height:1.2;
  color:#fff;
  text-shadow:0 2px 10px rgba(0,0,0,0.7);
}
.rr-social-card-body{
  margin:10px 0 0;
  font-size:clamp(14px,1.35vw,15.5px);
  line-height:1.55;
  color:rgba(215,230,250,0.92);
  text-shadow:0 2px 8px rgba(0,0,0,0.6);
}

.rr-social-guarantees{margin:clamp(40px,5vw,56px) auto 0;max-width:1100px;background:rgba(4,12,28,0.55);border:1px solid rgba(120,160,220,0.14);border-radius:20px;padding:clamp(22px,3vw,30px)}
.rr-social-guarantees ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr;gap:14px}
@media(min-width:640px){.rr-social-guarantees ul{grid-template-columns:1fr 1fr;gap:14px 28px}}
.rr-social-guarantees li{display:flex;align-items:flex-start;gap:12px;font-size:clamp(15px,1.4vw,16px);color:rgba(225,235,250,0.92);line-height:1.4}
.rr-social-check{flex-shrink:0;margin-top:2px;width:20px;height:20px;color:#FF1F38}

@media(prefers-reduced-motion:reduce){.rr-social-card{transition:none}.rr-social-card:hover{transform:none}}
`;
