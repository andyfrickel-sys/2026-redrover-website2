import React, { useEffect, useMemo, useRef, useState } from "react";

/** Three-part Red Rover process slider. */
export default function RedRoverRotatingProcess() {
  const slides = useMemo(
    () => [
      {
        number: "01",
        label: "BE SEEN",
        title: "A Fast, Mobile-First Smart Website",
        subtitle: "Local SEO Enhanced",
        copy: "Replace an outdated online presence with a professional website built for phones first—so local customers can quickly understand what you do and take the next step.",
        outcome: "A better first impression wherever customers find you.",
        visual: "website",
      },
      {
        number: "02",
        label: "BE FOUND",
        title: "Social Media Planner",
        subtitle: "Planned. Designed. Published.",
        copy: "Keep your business visible with professionally planned posts published to Facebook, Instagram, and Google—without stopping what you are doing to create content.",
        outcome: "A consistent presence without another job on your list.",
        visual: "social",
      },
      {
        number: "03",
        label: "BE CHOSEN",
        title: "Review Management",
        subtitle: "Your Follow-Up Never Forgets",
        copy: "Automated review requests make it easier for satisfied customers to share their experience while the good work you did is still fresh in their minds.",
        outcome: "Fresh proof that gives the next customer confidence.",
        visual: "reviews",
      },
    ],
    [],
  );

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const choose = (index) => setActive((index + slides.length) % slides.length);

  useEffect(() => {
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduced) return undefined;
    const timer = window.setInterval(
      () => setActive((v) => (v + 1) % slides.length),
      5600,
    );
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const current = slides[active];

  return (
    <section
      className="rr3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStart.current = e.touches[0]?.clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const end = e.changedTouches[0]?.clientX;
        if (
          touchStart.current != null &&
          end != null &&
          Math.abs(end - touchStart.current) > 45
        )
          choose(active + (end < touchStart.current ? 1 : -1));
        touchStart.current = null;
        setPaused(false);
      }}
    >
      <h1
        style={{
          color: "#031F4A",
          fontSize: "30px",
          textAlign: "center",
          margin: "-30px 0 24px",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
        }}
      >
        3 Must Have's - 1 Simple Solution
      </h1>
      <style>{styles}</style>

      <nav className="rr3__tabs" aria-label="Local presence system steps">
        {slides.map((s, i) => (
          <button
            key={s.label}
            type="button"
            className={i === active ? "active" : ""}
            aria-current={i === active ? "step" : undefined}
            onClick={() => choose(i)}
          >
            <span>{s.number}</span>
            <strong>{s.label}</strong>
            <small>{s.title}</small>
          </button>
        ))}
      </nav>
      <div className="rr3__progress" aria-hidden="true">
        <i key={active} className={paused ? "paused" : ""} />
      </div>

      <article className="rr3__slide" key={current.label} aria-live="polite">
        <div className="rr3__copy">
          <div className="rr3__step">
            <b>{current.number}</b>
            <strong>{current.label}</strong>
          </div>
          <h3>{current.title}</h3>
          <h4>{current.subtitle}</h4>
          <p>{current.copy}</p>
          <div className="rr3__outcome">
            <b>✓</b>
            <span>{current.outcome}</span>
          </div>
        </div>
        <div className="rr3__visual">
          <Graphic type={current.visual} />
        </div>
      </article>

      <footer className="rr3__footer">
        <div className="rr3__arrows">
          <button
            type="button"
            aria-label="Previous step"
            onClick={() => choose(active - 1)}
          >
            ←
          </button>
          <span>{current.number} / 03</span>
          <button
            type="button"
            aria-label="Next step"
            onClick={() => choose(active + 1)}
          >
            →
          </button>
        </div>
        <div className="rr3__system" aria-label="One connected system">
          {slides.map((s, i) => (
            <React.Fragment key={s.label}>
              <button
                type="button"
                className={i === active ? "active" : ""}
                onClick={() => choose(i)}
              >
                {s.label.replace("BE ", "")}
              </button>
              {i < 2 && <span>→</span>}
            </React.Fragment>
          ))}
          <strong>ONE PERFECT SYSTEM</strong>
        </div>
      </footer>
    </section>
  );
}

function Graphic({ type }) {
  if (type === "website")
    return (
      <div
        className="scene website"
        aria-label="Old website transforming into a fast mobile-first website"
      >
        <div className="old">
          <header>•••</header>
          <b />
          <i />
          <i />
          <i />
          <small>OLD WEBSITE</small>
        </div>
        <div className="flow">
          <b>→</b>
          <small>SMARTER</small>
        </div>
        <div className="phone">
          <i />
          <section>
            <small>LOCAL SERVICE</small>
            <strong>Ready When You Need Us.</strong>
            <button>GET A QUOTE</button>
          </section>
          <footer>
            <i />
            <i />
            <i />
          </footer>
          <em>⌕ Local SEO Enhanced</em>
        </div>
        <div className="fast">
          <b>FAST</b>
          <span>MOBILE FIRST</span>
        </div>
      </div>
    );

  if (type === "social")
    return (
      <div
        className="scene social"
        aria-label="Content planner publishing to Facebook, Instagram, and Google"
      >
        <div className="calendar">
          <header>
            <small>CONTENT PLAN</small>
            <b>SEPTEMBER</b>
          </header>
          <section>
            {Array.from({ length: 15 }).map((_, i) => (
              <i
                key={i}
                className={[2, 6, 9, 13].includes(i) ? "filled" : ""}
              />
            ))}
          </section>
          <footer>✓ MONTH PLANNED</footer>
        </div>
        <div className="flow">
          <b>→</b>
          <small>PUBLISH</small>
        </div>
        <div className="posts">
          <article className="fb">
            <b>f</b>
            <i />
            <small>Facebook</small>
          </article>
          <article className="ig">
            <b>◎</b>
            <i />
            <small>Instagram</small>
          </article>
          <article className="go">
            <b>G</b>
            <i />
            <small>Google</small>
          </article>
        </div>
        <div className="owner">
          <small>OWNER STATUS</small>
          <b>Running the business</b>
          <span>Posts publish automatically</span>
        </div>
      </div>
    );

  return (
    <div
      className="scene reviews"
      aria-label="Completed job triggering an automatic five-star review request"
    >
      <div className="complete">
        <b>✓</b>
        <span>
          <small>JOB STATUS</small>
          <strong>Complete</strong>
        </span>
      </div>
      <div className="flow dots">
        <i />
        <i />
        <i />
        <b>→</b>
      </div>
      <div className="review-phone">
        <i />
        <small>NEW MESSAGE</small>
        <p>Thanks for choosing us! Would you share your experience?</p>
        <button>LEAVE A REVIEW</button>
      </div>
      <div className="stars">
        <b>★★★★★</b>
        <strong>Another Happy Customer</strong>
        <span>Request delivered automatically</span>
      </div>
    </div>
  );
}

const styles = `
.rr3{--navy:#172b59;--deep:#0d1c3f;--red:#a20c1a;--ink:#152039;--muted:#66728a;--line:#dce2ec;--soft:#f4f7fb;--white:#fff;box-sizing:border-box;width:min(100%,1160px);margin:auto;padding:clamp(21px,3.5vw,41px) clamp(16px,5vw,64px);color:var(--ink);background:radial-gradient(circle at 90% 20%,rgba(162,12,26,.08),transparent 26%),linear-gradient(#fff,#f7f9fc);font-family:Inter,Arial,sans-serif;overflow:hidden}.rr3 *{box-sizing:border-box}.rr3__intro{text-align:center;max-width:760px;margin:auto}.rr3__intro p{margin:0 0 10px;color:var(--red);font-size:12px;font-weight:800;letter-spacing:.16em}.rr3__intro h2{margin:0;color:var(--deep);font:700 clamp(34px,5vw,60px)/1.02 Georgia,serif;letter-spacing:-.035em}.rr3__intro span{display:block;max-width:620px;margin:17px auto 0;color:var(--muted);font-size:clamp(15px,2vw,18px);line-height:1.6}
.rr3__tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:clamp(30px,5vw,52px) 0 0}.rr3__tabs button{display:grid;grid-template-columns:auto 1fr;gap:3px 10px;min-height:88px;padding:16px 18px;border:1px solid var(--line);border-radius:16px 16px 0 0;color:var(--muted);background:#ffffffbf;text-align:left;cursor:pointer;transition:.22s}.rr3__tabs button:hover{transform:translateY(-3px)}.rr3__tabs button:focus-visible,.rr3__arrows button:focus-visible{outline:3px solid #a20c1a33;outline-offset:3px}.rr3__tabs button.active{color:#fff;background:var(--deep);border-color:var(--deep)}.rr3__tabs button span{grid-row:1/span 2;color:var(--red);font-size:11px;font-weight:900}.rr3__tabs button.active span{color:#ff8490}.rr3__tabs strong{font-size:14px;letter-spacing:.08em}.rr3__tabs small{font-size:12px;line-height:1.25;opacity:.75}.rr3__progress{height:4px;background:#e1e6ee;overflow:hidden}.rr3__progress i{display:block;width:100%;height:100%;background:var(--red);transform-origin:left;animation:progress 5.6s linear}.rr3__progress i.paused{animation-play-state:paused}
.rr3__slide{display:grid;grid-template-columns:minmax(280px,.92fr) minmax(360px,1.08fr);gap:clamp(34px,6vw,78px);align-items:center;min-height:500px;padding:clamp(34px,6vw,70px) 0;animation:arrive .5s ease}.rr3__step{display:flex;align-items:center;gap:10px}.rr3__step b{display:grid;place-items:center;width:34px;aspect-ratio:1;border-radius:50%;color:#fff;background:var(--red);font-size:11px}.rr3__step strong{color:var(--red);font-size:12px;letter-spacing:.14em}.rr3__copy h3{margin:18px 0 0;color:var(--deep);font:700 clamp(32px,4.5vw,52px)/1.04 Georgia,serif;letter-spacing:-.03em}.rr3__copy h4{margin:11px 0 0;color:var(--red);font-size:15px}.rr3__copy>p{margin:20px 0 0;color:var(--muted);font-size:16px;line-height:1.7}.rr3__outcome{display:flex;gap:12px;align-items:center;margin-top:24px;padding:15px 17px;border-left:4px solid var(--red);background:#fff;box-shadow:0 10px 26px #0d1c3f12}.rr3__outcome b{color:var(--red)}.rr3__outcome span{font-size:13px;font-weight:700}.rr3__visual{padding:clamp(16px,3vw,28px);border-radius:26px;background:var(--deep);box-shadow:0 26px 58px #0d1c3f33}.scene{position:relative;min-height:355px;color:var(--deep);overflow:hidden}.website{display:flex;align-items:center;justify-content:center;gap:14px}.old{position:relative;width:34%;padding:36px 14px 18px;border-radius:10px;background:#d9dee8;box-shadow:0 15px 28px #0003;transform:rotate(-4deg);opacity:.72}.old header{position:absolute;inset:0 0 auto;height:23px;padding:4px 8px;color:#778197;background:#adb5c5;letter-spacing:3px}.old>b,.old>i{display:block;height:8px;margin:11px 0;background:#98a2b5}.old>b{height:26px}.old>i:nth-of-type(2){width:76%}.old>i:nth-of-type(3){width:58%}.old small{display:block;margin-top:22px;font-size:8px;font-weight:900;letter-spacing:.12em}.flow{display:grid;place-items:center;color:#fff}.flow b{color:#ff6372;font-size:32px;animation:nudge 1.4s infinite}.flow small{font-size:7px;font-weight:900;letter-spacing:.12em}.phone{position:relative;width:36%;min-width:125px;aspect-ratio:.59;padding:25px 8px 10px;border:5px solid #fff;border-radius:24px;background:#fff;box-shadow:0 20px 36px #0005;animation:phonein .7s}.phone>i,.review-phone>i{position:absolute;top:9px;left:50%;width:29%;height:4px;border-radius:6px;background:#b4bdcc;transform:translateX(-50%)}.phone section{display:flex;flex-direction:column;justify-content:end;min-height:52%;padding:12px 10px;border-radius:10px;color:#fff;background:linear-gradient(145deg,var(--navy),var(--red))}.phone section small{font-size:6px;font-weight:900;letter-spacing:.15em}.phone section strong{margin-top:5px;font:700 12px/1.05 Georgia,serif}.phone section button{width:max-content;margin-top:9px;padding:5px 7px;border:0;border-radius:3px;color:var(--deep);background:#fff;font-size:6px;font-weight:900}.phone footer{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin-top:7px}.phone footer i{aspect-ratio:.9;border-radius:4px;background:#e6eaf1}.phone em{position:absolute;right:-24px;bottom:35px;padding:8px 10px;border-radius:20px;background:#fff;box-shadow:0 10px 24px #0003;font-size:8px;font-style:normal;font-weight:900;white-space:nowrap}.fast{position:absolute;top:25px;right:3px;display:grid;place-items:center;width:80px;aspect-ratio:1;border:5px solid #ffffffb3;border-radius:50%;color:#fff;background:var(--red);box-shadow:0 12px 28px #0003}.fast b{font-size:16px}.fast span{font-size:7px;font-weight:900}
.social{display:grid;grid-template-columns:1fr 30px 1fr;gap:8px;align-items:center}.calendar{padding:15px;border-radius:15px;background:#fff;box-shadow:0 16px 32px #0004}.calendar header{display:flex;justify-content:space-between;align-items:center;padding-bottom:11px;border-bottom:1px solid var(--line)}.calendar header small{color:var(--red);font-size:7px;font-weight:900}.calendar header b{font-size:11px}.calendar section{display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin-top:10px}.calendar section i{aspect-ratio:1;border-radius:4px;background:#e9edf3}.calendar section i.filled{position:relative;background:#f5cbd0}.calendar section i.filled:after{content:'✓';position:absolute;inset:0;display:grid;place-items:center;color:var(--red);font-size:8px;font-style:normal;font-weight:900}.calendar footer{margin-top:11px;padding:7px;border-radius:5px;color:#fff;background:var(--red);font-size:7px;font-weight:900;text-align:center}.posts{position:relative;min-height:220px}.posts article{position:absolute;left:50%;display:grid;grid-template-rows:auto 1fr auto;width:108px;aspect-ratio:.78;padding:10px;border-radius:13px;background:#fff;box-shadow:0 16px 32px #0004}.posts article b{font-size:17px}.posts article i{margin:7px 0;border-radius:7px;background:linear-gradient(145deg,var(--red),#e5a4ab)}.posts article small{font-size:8px;font-weight:800}.posts .fb{top:31px;transform:translateX(-84%) rotate(-8deg)}.posts .ig{z-index:2;top:8px;transform:translateX(-50%)}.posts .go{top:31px;transform:translateX(-16%) rotate(8deg)}.owner{position:absolute;right:3px;bottom:2px;padding:10px 13px;border-radius:9px;background:#fff;box-shadow:0 10px 22px #0003}.owner>*{display:block}.owner small{color:var(--red);font-size:6px;font-weight:900}.owner b{margin-top:3px;font-size:9px}.owner span{margin-top:2px;color:var(--muted);font-size:7px}
.reviews{display:grid;grid-template-columns:.8fr 38px 1fr;gap:10px;align-items:center}.complete{display:flex;align-items:center;gap:10px;padding:15px;border-radius:13px;background:#fff;box-shadow:0 14px 30px #0003}.complete>b{display:grid;place-items:center;width:34px;aspect-ratio:1;border-radius:50%;color:#fff;background:var(--red)}.complete span>*{display:block}.complete small{color:var(--muted);font-size:7px;font-weight:800}.complete strong{margin-top:3px;font-size:13px}.review-phone{position:relative;width:80%;min-width:145px;margin:auto;padding:31px 14px 18px;border:5px solid #fff;border-radius:22px;background:var(--soft);box-shadow:0 18px 36px #0005}.review-phone>small{color:var(--red);font-size:7px;font-weight:900}.review-phone p{margin:8px 0 13px;font-size:10px;line-height:1.45}.review-phone button{width:100%;padding:8px;border:0;border-radius:5px;color:#fff;background:var(--red);font-size:7px;font-weight:900}.dots{position:relative}.dots i{position:absolute;width:6px;aspect-ratio:1;border-radius:50%;background:#ff6574;animation:dots 1.5s infinite}.dots i:nth-child(2){animation-delay:.25s}.dots i:nth-child(3){animation-delay:.5s}.stars{position:absolute;right:0;bottom:8px;padding:12px 14px;border-radius:12px;background:#fff;box-shadow:0 14px 28px #0004;animation:pop .7s .25s both}.stars>*{display:block}.stars>b{color:#f1af22;font-size:17px;letter-spacing:2px}.stars strong{margin-top:4px;font-size:9px}.stars span{margin-top:2px;color:var(--muted);font-size:7px}
.rr3__footer{display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:center}.rr3__arrows{display:flex;align-items:center;gap:11px}.rr3__arrows button{display:grid;place-items:center;width:42px;aspect-ratio:1;border:1px solid var(--line);border-radius:50%;color:var(--deep);background:#fff;font-size:18px;cursor:pointer}.rr3__arrows button:hover{color:#fff;background:var(--red)}.rr3__arrows span{color:var(--muted);font-size:11px;font-weight:800}.rr3__system{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex-wrap:wrap}.rr3__system button{padding:8px 10px;border:0;border-radius:20px;color:var(--muted);background:#e7ebf2;font-size:9px;font-weight:900;cursor:pointer}.rr3__system button.active{color:#fff;background:var(--navy)}.rr3__system>span{color:var(--red);font-weight:900}.rr3__system>strong{margin-left:4px;color:var(--red);font-size:9px;letter-spacing:.1em}
@keyframes progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes arrive{from{opacity:0;transform:translateX(22px)}to{opacity:1;transform:none}}@keyframes phonein{from{opacity:0;transform:translateX(28px) scale(.94)}to{opacity:1;transform:none}}@keyframes nudge{50%{transform:translateX(6px)}}@keyframes dots{from{opacity:0;transform:translateX(-14px)}50%{opacity:1}to{opacity:0;transform:translateX(14px)}}@keyframes pop{from{opacity:0;transform:translateY(18px) scale(.92)}to{opacity:1;transform:none}}
@media(max-width:780px){.rr3__tabs button{grid-template-columns:1fr;gap:4px;min-height:86px;padding:11px;text-align:center}.rr3__tabs button span{grid-row:auto}.rr3__tabs small{display:none}.rr3__slide{grid-template-columns:1fr;min-height:0;padding-block:38px}.rr3__copy{max-width:620px;margin:auto;text-align:center}.rr3__step,.rr3__outcome{justify-content:center}.rr3__visual{width:min(100%,580px);margin:auto}.rr3__footer{grid-template-columns:1fr}.rr3__arrows,.rr3__system{justify-content:center}}
@media(max-width:520px){.rr3{padding-inline:12px}.rr3__tabs{gap:4px}.rr3__tabs button{min-height:74px;padding:8px 3px;border-radius:10px 10px 0 0}.rr3__tabs strong{font-size:10px}.rr3__visual{padding:12px;border-radius:18px}.scene{min-height:300px}.old{min-width:85px;padding-inline:8px}.phone{min-width:104px}.fast{width:65px;right:-3px}.phone em{right:-8px}.social{grid-template-columns:.9fr 16px 1.1fr;gap:2px}.calendar{padding:8px}.calendar header{display:block}.calendar header b{display:block;margin-top:3px}.posts article{width:80px}.reviews{grid-template-columns:.7fr 16px 1.3fr;gap:3px}.complete{display:grid;justify-items:center;padding:8px;text-align:center}.review-phone{min-width:116px;padding-inline:7px}.stars{right:-5px}.rr3__system>span{display:none}.rr3__system>strong{flex-basis:100%;text-align:center}}
@media(prefers-reduced-motion:reduce){.rr3 *{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
`;
