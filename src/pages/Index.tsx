import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FaceBookFloat from "@/components/FaceBookFloat";
import InstagramFloat from "@/components/InstagramFloat";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  // Schema.org Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "White Shark",
    "alternateName": "القرش الأبيض",
    "url": "https://whiteshark.eg",
    "logo": "https://whiteshark.eg/logo.jpg",
    "description": "شركة White Shark متخصصة في تصنيع وتوريد منتجات التنظيف بالجملة - حوامل سلكية، ليف تنظيف، منتجات B2B",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "الطريق الدولي 45",
      "addressLocality": "الإسكندرية",
      "addressCountry": "EG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+201114259777",
      "contactType": "sales",
      "availableLanguage": ["Arabic", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/white.shark.clean",
      "https://www.facebook.com/whiteshark.clean"
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>White Shark | تصنيع منتجات التنظيف بالجملة - حوامل سلكية وليف تنظيف</title>
        <meta 
          name="description" 
          content="White Shark - الشركة الرائدة في تصنيع وتوريد منتجات التنظيف بالجملة في مصر. حوامل سلكية، ليف إسفنجي، منتجات B2B للمطابخ والشركات. جودة عالية وأسعار تنافسية." 
        />
        <meta 
          name="keywords" 
          content="تصنيع حوامل سلكية، ليف تنظيف بالجملة، منتجات تنظيف B2B، مصنع لوازم المطبخ بالجملة، القرش الأبيض، White Shark، منتجات تنظيف مصر" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://whiteshark.eg" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="White Shark | تصنيع منتجات التنظيف بالجملة" />
        <meta property="og:description" content="الشركة الرائدة في تصنيع وتوريد منتجات التنظيف بالجملة في مصر. حوامل سلكية، ليف إسفنجي، منتجات B2B." />
        <meta property="og:url" content="https://whiteshark.eg" />
        <meta property="og:locale" content="ar_EG" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Shark | تصنيع منتجات التنظيف بالجملة" />
        <meta name="twitter:description" content="الشركة الرائدة في تصنيع وتوريد منتجات التنظيف بالجملة في مصر." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <ContactSection />
                <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[9999] flex gap-4">
          <FaceBookFloat></FaceBookFloat>
          <InstagramFloat></InstagramFloat>
          <WhatsAppFloat></WhatsAppFloat>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
