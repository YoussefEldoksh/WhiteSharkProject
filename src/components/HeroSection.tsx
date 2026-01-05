import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
// For Vite / React import:
import heroVideo from "@/assets/hero-video.mp4"; 
import { useEffect } from "react";
// If using Next.js, you can alternatively put hero-video.mp4 in public/ and use src="/hero-video.mp4"



const HeroSection = () => {

  useEffect(()=>{
    AOS.init({
       duration: 1000,once: false,offset: 50 ,disable: window.innerWidth < 768 ? false : 'mobile'
    });
  },[]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir="rtl"
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
           src="/hero-video.mp4" 
          autoPlay
          muted
          loop
          playsInline
          poster={logo} // fallback image while video loads
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img  
              src={logo}
              alt="White Shark Logo"
              className="h-32 md:h-40 mx-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            الشريك الموثوق في تصنيع
            <span className="block mt-2 text-secondary">منتجات التنظيف بالجملة</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-100">
            نحن متخصصون في تصنيع وتوريد حوامل سلكية وليف التنظيف عالية الجودة 
            للشركات وتجار الجملة. جودة صناعية بأسعار تنافسية.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              تواصل معنا الآن
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Button>
            <a href="tel:01114259777">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" />
               01114259777
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-4 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up animation-delay-300">
            {[
              { number: "+15", label: "سنة خبرة" },
              { number: "+500", label: "عميل راضٍ" },
              { number: "+50", label: "منتج متنوع" },
              { number: "24/7", label: "دعم فني" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse-soft" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
