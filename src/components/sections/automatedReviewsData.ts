export interface ReviewCardItem {
  id: string;
  title: string;
  body: string;
  image: string;
  alt: string;
}

export const reviewCards: ReviewCardItem[] = [
  {
    id: "automated-requests",
    title: "Automated Review Requests",
    body: "After every job, your customer gets a polite, timed request by email or text — no manual follow-up required.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/2bc6fbdb-f9f9-4a0c-9b7a-baae36dda374.png",
    alt: "Automated Review Requests - Smartphone with timed review notification after job completion",
  },
  {
    id: "email-text-follow-up",
    title: "Email & Text Follow-Up",
    body: "We reach customers where they actually look, with reminders tuned to get more happy clients to share their experience.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/3819d791-9748-4cdf-a1b0-0f24b23099f4.png",
    alt: "Email & Text Follow-Up - Simultaneous SMS and Email review reminders on smartphone screen",
  },
  {
    id: "private-feedback",
    title: "Private Feedback Capture",
    body: "Unhappy customers are routed to a private feedback form first, so concerns get handled before they ever reach a public review.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/3bd1b519-d404-41c1-a41e-97d6e4f1a952.png",
    alt: "Private Feedback Capture - Tablet routing negative ratings to a private form before public posting",
  },
  {
    id: "response-assistance",
    title: "Review-Response Assistance",
    body: "We help you respond to reviews quickly and professionally, so every customer feels heard and future visitors see an active, caring business.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/736b9018-1590-4318-b6dd-e465a6da61af.png",
    alt: "Review-Response Assistance - Laptop interface with AI suggested reply to customer review",
  },
  {
    id: "website-display",
    title: "Website Review Display",
    body: "Your best reviews are showcased directly on your website, reinforcing trust the moment a visitor lands on your homepage.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/b0c22d37-2c91-4be3-a0a0-a91c18ddeba1.png",
    alt: "Website Review Display - Website homepage featuring glowing 5-star customer testimonials",
  },
  {
    id: "review-monitoring",
    title: "Review Monitoring",
    body: "We keep an eye on what's being said across your platforms, so you always know where your reputation stands.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/b1855c7a-53ce-4245-8a10-817b06972b70.png",
    alt: "Review Monitoring - Real-time tracking and alert dashboard across Google and social platforms",
  },
];
