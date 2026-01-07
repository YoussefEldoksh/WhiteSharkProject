import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import wireRack from "@/assets/wire-rack.jpg";
import spaghetti from "@/assets/spaghetti.jpg";
import cleaningProduct1 from "@/assets/assorted-cleaning-products-wholesale.jpg"


import spongeScrubber from "@/assets/sponge-scrubber.jpg";
import spongeScrubber2 from "@/assets/صور منتجات سكوتش القرش/سكوتش بريمو 02.jpg"
import spongeScrubber3 from "@/assets/صور منتجات سكوتش القرش/سكوتش بريمو 03.jpg"
import spongeScrubber4 from "@/assets/صور منتجات سكوتش القرش/فليكس باد 02.jpg"
import spongeScrubber5 from "@/assets/صور منتجات سكوتش القرش/فليكس باد 33.jpg" 
import spongeScrubber6 from "@/assets/صور منتجات سكوتش القرش/فليكس باد.jpg"


import cleaningProducts from "@/assets/cleaning-products.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ProductMorphingCard } from "./product-morphing-card";

const TRANSITION = {
  type: "spring",
  stiffness: 260,
  damping: 30,
};

const ProductsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      disable: window.innerWidth < 768 ? false : "mobile",
    });
  }, []);

  const products = [
    {
      image: [wireRack],
      title: "spaghetti ليفه",
      description:
        "حوامل سلكية متينة من الستانلس ستيل، مصممة للاستخدام المكثف في المطابخ التجارية والمنزلية.",
      uses: ["مطابخ المطاعم", "الفنادق", "المنازل", "المستشفيات"],
      alt: "حوامل سلكية ستانلس ستيل للمطبخ - White Shark",
      products: {
        image: [
          wireRack,
          "../assets/stainless-steel-wire-rack-kitchen.jpg",
          "../assets/stainless-steel-wire-rack.jpg",
        ],
        title: "spaghetti ليفه",
        description:
          "حوامل سلكية متينة من الستانلس ستيل، مصممة للاستخدام المكثف في المطابخ التجارية والمنزلية.",
        uses: ["مطابخ المطاعم", "الفنادق", "المنازل", "المستشفيات"],
        alt: "حوامل سلكية ستانلس ستيل للمطبخ - White Shark",
      },
    },
    {
      image: [spongeScrubber],
      title: "ليف إسفنجي للتنظيف",
      description:
        "ليف تنظيف إسفنجي بألوان متعددة، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح.",
      uses: ["تنظيف الأواني", "الأسطح", "البلاط", "الأجهزة"],
      alt: "ليف إسفنجي ملون للتنظيف - White Shark",
      products: {
        image: [
          spongeScrubber,
          spongeScrubber2,
          spongeScrubber3,
          spongeScrubber4,
          spongeScrubber5,
          spongeScrubber6
        ],
        title: "ليف إسفنجي للتنظيف",
        description:
          "ليف تنظيف إسفنجي بألوان متعددة، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح.",
        uses: ["تنظيف الأواني", "الأسطح", "البلاط", "الأجهزة"],
        alt: "ليف إسفنجي ملون للتنظيف - White Shark",
      },
    },
    {
      image: [cleaningProducts],
      title: "منتجات تنظيف متنوعة",
      description:
        "تشكيلة واسعة من منتجات التنظيف الصناعية والمنزلية بجودة عالية وأسعار الجملة.",
      uses: ["سلك المواعين", "ليف الفايبر", "فوط التنظيف", "إسفنج متعدد"],
      alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
      products: {
        image: [
          wireRack,
           cleaningProduct1,
          "../assets/stainless-steel-wire-rack.jpg",  
        ],
        title: "منتجات تنظيف متنوعة",
        description:
          "تشكيلة واسعة من منتجات التنظيف الصناعية والمنزلية بجودة عالية وأسعار الجملة.",
        uses: ["سلك المواعين", "ليف الفايبر", "فوط التنظيف", "إسفنج متعدد"],
        alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
      },
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="section-padding bg-muted" dir="rtl">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            منتجاتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            تشكيلة متنوعة من منتجات التنظيف
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة واسعة من منتجات التنظيف عالية الجودة، مصممة خصيصاً
            لتلبية احتياجات تجار الجملة والموزعين والشركات.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductMorphingCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              uses={product.uses}
              alt={product.alt}
              products={product.products}
              onRequestQuote={scrollToContact}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            لديك استفسار عن منتج معين؟ تواصل معنا للحصول على كتالوج كامل وأسعار
            الجملة
          </p>
          <Button variant="default" size="lg" onClick={scrollToContact}>
            تواصل للحصول على الكتالوج
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
