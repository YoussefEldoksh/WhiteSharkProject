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
import './index.css';

const queryClient = new QueryClient();

// WhatsApp floating button component
const WhatsAppButton = () => {
  const phoneNumber = "201234567890"; // replace with your company's WhatsApp number
  const message = "Hello! I want to know more about your services."; // default message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

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
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
