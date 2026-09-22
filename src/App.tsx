import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import OrderPage from "./pages/Order";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlumbingPage from "./pages/industries/PlumbingPage";
import ElectricalPage from "./pages/industries/ElectricalPage";
import AutoGlassPage from "./pages/industries/AutoGlassPage";
import HomeInspectionPage from "./pages/industries/HomeInspectionPage";
import EstateLawPage from "./pages/industries/EstateLawPage";
import PressureWashingPage from "./pages/industries/PressureWashingPage";
import LandscapingPage from "./pages/industries/LandscapingPage";
import AccountingPage from "./pages/industries/AccountingPage";
import ChiropracticPage from "./pages/industries/ChiropracticPage";
import FoodTruckPage from "./pages/industries/FoodTruckPage";
import RoofingPage from "./pages/industries/RoofingPage";
import DentalPage from "./pages/industries/DentalPage";
import HvacPage from "./pages/industries/HvacPage";
import CriminalDefensePage from "./pages/industries/CriminalDefensePage";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/industries/plumbing" element={<PlumbingPage />} />
          <Route path="/industries/electrical" element={<ElectricalPage />} />
          <Route path="/industries/auto-glass" element={<AutoGlassPage />} />
          <Route
            path="/industries/home-inspection"
            element={<HomeInspectionPage />}
          />
          <Route path="/industries/estate-law" element={<EstateLawPage />} />
          <Route
            path="/industries/pressure-washing"
            element={<PressureWashingPage />}
          />
          <Route path="/industries/landscaping" element={<LandscapingPage />} />
          <Route path="/industries/accounting" element={<AccountingPage />} />
          <Route
            path="/industries/chiropractic"
            element={<ChiropracticPage />}
          />
          <Route path="/industries/food-truck" element={<FoodTruckPage />} />
          <Route path="/industries/roofing" element={<RoofingPage />} />
          <Route path="/industries/dental" element={<DentalPage />} />
          <Route path="/industries/hvac" element={<HvacPage />} />
          <Route
            path="/industries/criminal-defense"
            element={<CriminalDefensePage />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
