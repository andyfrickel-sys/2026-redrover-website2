import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can Red Rover work with my current website?",
    a: "In many cases, yes. We'll take a look at your website, what platform it's built on, and what you want it to do. From there, we can recommend improvements or explain whether a new site would make more sense for your business.",
  },
  {
    q: "Will I own my new website?",
    a: "Your website is built, hosted, and managed through Red Rover's proprietary AI-powered platform. Because the technology and functionality are tied to that platform, the website itself cannot be downloaded or transferred to another hosting provider. You retain ownership of your domain name and the original business assets you provide, such as your logo, photos, and written content. As long as you remain a Red Rover client, we handle the hosting, maintenance, security, and ongoing updates that keep your website working for your business.",
  },
  {
    q: "How long does setup take?",
    a: "Most setups take 1-2 weeks once we have the content, account access, and approvals we need. Timing depends on your package and the size of your website. We'll outline the steps up front so you know what to expect.",
  },
  {
    q: "What social-media platforms are supported?",
    a: "Our social media planner supports Facebook, Instagram, Google Business Profile, LinkedIn, TikTok, YouTube, Pinterest, Threads, and Bluesky. You don't need to be everywhere. We'll help you focus on the channels that make sense for your business and the customers you're trying to reach.",
  },
  {
    q: "Do I have to create the social-media content?",
    a: "You don't have to start from a blank page. Depending on your package, we can help you plan, create, and schedule posts. Photos of your work, team updates, and customer stories help make that content feel like your business. We'll explain what we handle and what we need from you before getting started.",
  },
  {
    q: "How are review requests sent?",
    a: "Review requests can be sent by text or email after a customer does business with you, with a direct link that makes leaving an honest review easy. We'll work with you to determine when requests should go out and how they fit into your customer follow-up.",
  },
  {
    q: "Can you guarantee Google rankings or a certain number of reviews?",
    a: "No—and we'd be cautious of anyone who does. Google controls its rankings, and customers decide whether to leave a review. Our focus is improving your online presence, making it easier for customers to share their experiences, and tracking progress over time.",
  },
  {
    q: "Is there a contract?",
    a: "Our services are offered on an initial 12-month contract paid monthly, and then month-to-month after the initial contract term. Once the initial term is completed you can cancel at any time with a 30-day written notice. We'll explain the pricing, what's included, and any cancellation requirements before you get started, so you know exactly what you're agreeing to.",
  },
  {
    q: "What happens if I need website changes?",
    a: "Businesses change, and your website should keep up. When you need an update, contact us with the details. We'll let you know whether it's covered by your plan or requires a separate quote before work begins.",
  },
  {
    q: "Can I add other marketing services later?",
    a: "Absolutely. Start with what your business needs today, then add services as your goals and budget change. Whether that means review management, social media, or AI tools to help respond to leads, we can help you decide what makes sense next.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-xl border border-border bg-card shadow-sm"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-secondary">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
