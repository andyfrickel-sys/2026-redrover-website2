import { IndustryPageLayout } from "@/components/sections/IndustryPageLayout";

const data = {
  slug: "food-truck",
  title: "Food Truck & Event Catering",
  industry: "Food Truck & Event Catering",
  imageUrl:
    "https://vibe.filesafe.space/1788454197571242570/attachments/f9577964-4e2b-42c1-a4fd-5e536c9b537c.png",
  tagline:
    "Vibrant menu showcase, truck finder, and high-volume catering bookings",
  description:
    "A vibrant, appetite-driving website layout for food trucks and event caterers. A live truck-location finder, vivid menu showcase, and high-volume catering booking capture both walk-up and event customers.",
  features: [
    "Live truck-location finder",
    "Vivid menu showcase",
    "High-volume catering bookings",
    "Mobile-first responsive design",
    "Local SEO foundation",
    "Review display widgets",
  ],
  metaDescription:
    "A food truck & catering website layout from Red Rover Marketing — truck finder, menu showcase, and catering bookings.",
};

const FoodTruckPage = () => <IndustryPageLayout data={data} />;
export default FoodTruckPage;
