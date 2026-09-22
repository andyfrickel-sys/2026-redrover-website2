export type Industry = {
  label: string;
  href: string;
  title: string;
  image: string;
};

export type IndustryGroup = {
  label: string;
  items: Industry[];
};

export const industryGroups: IndustryGroup[] = [
  {
    label: "Home Services",
    items: [
      {
        label: "Plumbing",
        href: "/industries/plumbing",
        title: "Plumbing & Mechanical",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/256564df-3c5f-4c4d-9d78-82be294c5acb.png",
      },
      {
        label: "Electrical",
        href: "/industries/electrical",
        title: "Electrical & Lighting",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/e3f9e405-7dc6-431d-bd54-6383be44c37b.png",
      },
      {
        label: "HVAC",
        href: "/industries/hvac",
        title: "HVAC & Indoor Comfort",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/7c06ae00-59de-4ba9-841a-07f26307ffba.png",
      },
      {
        label: "Roofing",
        href: "/industries/roofing",
        title: "Roofing & Exterior Solutions",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/ce92700e-4b67-4466-a9f0-8c1937594ceb.png",
      },
      {
        label: "Landscaping",
        href: "/industries/landscaping",
        title: "Landscaping & Hardscapes",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/dbb3ac86-e992-4c0d-b4cd-1d0b2ae82b3d.png",
      },
      {
        label: "Pressure Washing",
        href: "/industries/pressure-washing",
        title: "Pressure Washing & Soft Wash",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/af888119-6037-4104-abbb-e8315bce70da.png",
      },
      {
        label: "Home Inspection",
        href: "/industries/home-inspection",
        title: "Home Inspection Services",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/f885c1e1-423f-4b0c-a958-f3653b5aecb8.png",
      },
      {
        label: "Auto Glass",
        href: "/industries/auto-glass",
        title: "Auto Glass & Mobile Repair",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/27fe38b1-3826-4b19-8a2c-9f53798ee458.png",
      },
    ],
  },
  {
    label: "Healthcare",
    items: [
      {
        label: "Dental",
        href: "/industries/dental",
        title: "Family & Cosmetic Dentistry",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/7cad67d4-7a1c-4849-8d20-32a8b131b8fb.png",
      },
      {
        label: "Chiropractic",
        href: "/industries/chiropractic",
        title: "Chiropractic & Rehabilitation",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/6c2a0e5e-0aca-4fa6-82d2-3d194d595f49.png",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        label: "Estate Law",
        href: "/industries/estate-law",
        title: "Estate Law & Legal Services",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/50dc4315-5567-4f10-862f-9b82a35c4bc2.png",
      },
      {
        label: "Criminal Defense",
        href: "/industries/criminal-defense",
        title: "Criminal Defense & Trial Counsel",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/503b8aa7-66c2-430e-bfaa-ef761d8976eb.png",
      },
    ],
  },
  {
    label: "Professional Services",
    items: [
      {
        label: "Accounting",
        href: "/industries/accounting",
        title: "Accounting & Tax Advisory",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/3c132e94-2dae-4e59-9652-67c3fc7aee6f.png",
      },
    ],
  },
  {
    label: "Food & Hospitality",
    items: [
      {
        label: "Food Truck",
        href: "/industries/food-truck",
        title: "Food Truck & Event Catering",
        image:
          "https://vibe.filesafe.space/1788454197571242570/attachments/f9577964-4e2b-42c1-a4fd-5e536c9b537c.png",
      },
    ],
  },
];

export const allIndustries: Industry[] = industryGroups.flatMap((g) => g.items);
