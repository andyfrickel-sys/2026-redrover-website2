export interface StepCardItem {
  id: string;
  step: string;
  title: string;
  body: string;
  image: string;
  alt: string;
}

export const howItWorksSteps: StepCardItem[] = [
  {
    id: "step-1",
    step: "Step 1",
    title: "Step 1: We Review Your Current Presence",
    body: "We evaluate your website, reviews, local visibility, and social-media activity.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/6c7393d1-8b92-41de-b370-3b2d4600fffe.png",
    alt: "Step 1: We Review Your Current Presence - Laptop showing website audit, Google reviews, local visibility map, and social media activity",
  },
  {
    id: "step-2",
    step: "Step 2",
    title: "Step 2: We Build Your Plan",
    body: "We identify the most important gaps and determine what needs to be built, corrected, or connected.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/c5b02286-3d62-4e7b-acf3-d0ee788e38fe.png",
    alt: "Step 2: We Build Your Plan - Laptop display of marketing roadmap, identified gaps, priorities, and action plan checklist",
  },
  {
    id: "step-3",
    step: "Step 3",
    title: "Step 3: We Launch the System",
    body: "We build the website, activate the review process, and prepare the social-content schedule.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/88a574b7-c44f-4576-b460-b5b50d20a180.png",
    alt: "Step 3: We Launch the System - Rocket launching over laptop showing business website, automated review requests, and social schedule",
  },
  {
    id: "step-4",
    step: "Step 4",
    title: "Step 4: We Keep It Moving",
    body: "We monitor the system, publish content, assist with updates, and provide a simple monthly report.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/5aaa61c8-e89d-4094-9593-046bb654ef6d.png",
    alt: "Step 4: We Keep It Moving - Laptop dashboard displaying website performance, social media updates, system health, and monthly growth report",
  },
];
