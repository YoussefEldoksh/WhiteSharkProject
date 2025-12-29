import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import wireRack from "@/assets/wire-rack.jpg";
import spaghetti from "@/assets/spaghetti.jpg";
import spongeScrubber from "@/assets/sponge-scrubber.jpg";
import cleaningProducts from "@/assets/cleaning-products.jpg";

const ProductsSection = () => {
  const products = [
    {
      image: wireRack,
      title: "spaghetti ليفه",
      description:
        "حوامل سلكية متينة من الستانلس ستيل، مصممة للاستخدام المكثف في المطابخ التجارية والمنزلية.",
      uses: ["مطابخ المطاعم", "الفنادق", "المنازل", "المستشفيات"],
      alt: "حوامل سلكية ستانلس ستيل للمطبخ - White Shark",
    },
    {
      image: spongeScrubber,
      title: "ليف إسفنجي للتنظيف",
      description:
        "ليف تنظيف إسفنجي بألوان متعددة، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح.",
      uses: ["تنظيف الأواني", "الأسطح", "البلاط", "الأجهزة"],
      alt: "ليف إسفنجي ملون للتنظيف - White Shark",
    },
    {
      image: cleaningProducts,
      title: "منتجات تنظيف متنوعة",
      description:
        "تشكيلة واسعة من منتجات التنظيف الصناعية والمنزلية بجودة عالية وأسعار الجملة.",
      uses: ["سلك المواعين", "ليف الفايبر", "فوط التنظيف", "إسفنج متعدد"],
      alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
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
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Uses */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    الاستخدامات:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.uses.map((use, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full group/btn"
                  onClick={scrollToContact}
                >
                  اطلب عرض سعر
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            لديك استفسار عن منتج معين؟ تواصل معنا للحصول على كتالوج كامل وأسعار الجملة
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
