import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { FaWhatsapp } from "react-icons/fa"; // using react-icons for WhatsApp icon
import React from "react";
import "./index.css";
import InstagramFloat from "./components/instagramfloat";
import WhatsAppFloat from "./components/whatsappfloat";
import FaceBookFloat from "./components/FaceBookFloat";

const queryClient = new QueryClient();



const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-5 right-5 z-[9999] flex gap-4">
          <FaceBookFloat></FaceBookFloat>
          <WhatsAppFloat></WhatsAppFloat>
        <InstagramFloat ></InstagramFloat>

        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
