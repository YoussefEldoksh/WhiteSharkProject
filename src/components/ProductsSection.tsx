import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import spaghetti from "@/assets/spaghetti.jpg";


import spongeScrubber from "@/assets/sponge-scrubber.jpg";
import spongeScrubber2 from "@/assets/صور منتجات سكوتش القرش/سكوتش بريمو 02.jpg";
import spongeScrubber3 from "@/assets/صور منتجات سكوتش القرش/سكوتش بريمو 03.jpg";
import spongeScrubber9 from "@/assets/صور منتجات سكوتش القرش/سكوتش جامبو .jpg";
import spongeScrubber4 from "@/assets/صور منتجات سكوتش القرش/فليكس باد 02.jpg";
import spongeScrubber5 from "@/assets/صور منتجات سكوتش القرش/فليكس باد 33.jpg";
import spongeScrubber6 from "@/assets/صور منتجات سكوتش القرش/فايبر 001.png";
import spongeScrubber7 from "@/assets/صور منتجات سكوتش القرش/فليكس باد.jpg";

import wireProduct1 from "@/assets/صور منتجات سلك القرش/1B6A2083.jpg";
import wireProduct3 from "@/assets/صور منتجات سلك القرش/1B6A4306.jpg";
import wireProduct2 from "@/assets/صور منتجات سلك القرش/MEITU_20251214_122503805.png";
import wireProduct4 from "@/assets/صور منتجات سلك القرش/MEITU_20251214_130129808.png";
import wireProduct5 from "@/assets/صور منتجات سلك القرش/سلك 3.jpg";
import wireProduct6 from "@/assets/صور منتجات سلك القرش/سلك جامبو 01.png";
import wireProduct7 from "@/assets/صور منتجات سلك القرش/قطعه كارت سلك القرش.jpg";
import wireProduct9 from "@/assets/صور منتجات سلك القرش/كرت سلك اقرش.jpg";
import wireProduct10 from "@/assets/صور منتجات سلك القرش/كرت سلك القرش.png";
import wireProduct11 from "@/assets/صور منتجات سلك القرش/كرتونه سلك 3.jpg";
import wireProduct12 from "@/assets/صور منتجات سلك القرش/كرتونه سلك جامبو.jpg";

import smartProduct1 from "@/assets/صور منتجات ذكيه القرش/ذكيه 1 ق 01.jpg";
import smartProduct2 from "@/assets/صور منتجات ذكيه القرش/ذكيه 3-3.jpg";
import smartProduct3 from "@/assets/صور منتجات ذكيه القرش/ذكيه القرش .jpg";
import smartProduct4 from "@/assets/صور منتجات ذكيه القرش/كرتونه ذكيه 1 ق.jpg";
import smartProduct5 from "@/assets/صور منتجات ذكيه القرش/كرتونه ذكيه القرش.jpg";

import otherProducts1 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٧٣٠٣٢.jpg";
import otherProducts2 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٧٣٤٠٦.jpg";
import otherProducts3 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٧٣٨١٦.jpg";
import otherProducts4 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٧٤٠٠٢.jpg";
import otherProducts5 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٧٤٩٤٦.jpg";
import otherProducts6 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٧٥٢٤٩.jpg";
import otherProducts7 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٧٥٩٥١.jpg";
import otherProducts8 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٨٠٢٣٤.jpg";
import otherProducts9 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٨٢٧٣٦.jpg";
import otherProducts10 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١٠٥_١٨٢٨٤٠.jpg";
import otherProducts11 from "@/assets/صور منتجات تصدير/IMG_٢٠٢٥١١١٦_١٣١٨٤٦.jpg";

import logo from "@/assets/logo.jpg"


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
      image: [wireProduct1],
      title: "سلك ستانلس",
      description:
        "تخلص من الأوساخ العنيدة والبقع المستعصية بكل سهولة! سلك التنظيف المصنوع من الفولاذ المقاوم للصدأ يعطيك نتائج احترافية في ثوانٍ معدودة",
      uses: ["مطابخ المطاعم", "الفنادق", "المنازل", "المستشفيات"],
      alt: "حوامل سلكية ستانلس ستيل للمطبخ - White Shark",
      products: [
        {
          image: [
            wireProduct11,
            wireProduct2,
            wireProduct3,
            wireProduct4,
            wireProduct5,
            wireProduct6,
            wireProduct7,
            wireProduct12,
            wireProduct9,
            wireProduct10,
            wireProduct1,
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
          ],
          title: "سلك ستانلس",
          description:
            "تخلص من الأوساخ العنيدة والبقع المستعصية بكل سهولة! سلك التنظيف المصنوع من الفولاذ المقاوم للصدأ يعطيك نتائج احترافية في ثوانٍ معدودة",
          uses: ["12 جرام", "13 جرام", "19 جرام", "سلك شبك"],
          alt: "حوامل سلكية ستانلس ستيل للمطبخ - White Shark",
        },
      ],
    },
    {
      image: [spongeScrubber4],
      title: "منتجات سكوتش القرش",
      description:
        "ليف تنظيف إسفنجي بألوان متعددة، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح.",
      uses: ["تنظيف الأواني", "الأسطح", "البلاط", "الأجهزة"],
      alt: "ليف إسفنجي ملون للتنظيف - White Shark",
      products: [
        {
          image: [
            spongeScrubber2,
            otherProducts8,
            spongeScrubber9,
            spongeScrubber3,
            otherProducts4,
            otherProducts5,
            otherProducts6,
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
          ],
          title: "ليف سكوتش القرش للتنظيف",
          description:
            "ليف تنظيف إسفنجي مصنعة من ( طبة فايبر قوية+ إسفينج معالج ضد البكتريا )، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح",
          uses: ["جحم بريمو", "جحم وسط", "جحم جامبو"],
          alt: "ليف سكوتش القرش للتنظيف - White Shark",
        },
        {
          image: [
            otherProducts10,
            spongeScrubber7,
            spongeScrubber5,
            spongeScrubber4,
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
          ],
          title: "فليكس باد",
          description:
            "ليف تنظيف إسفنجي مصنعة من ( طبة فايبر قوية+ إسفينج معالج ضد البكتريا )، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح",
          uses: ["فليكس باد 5 قطعة ", "فليكس باد 2 قطعة"],
          alt: "ليف إسفنجي ملون للتنظيف - White Shark",
        },
        {
          image: [spongeScrubber6],
          title: "ليف  فايبر",
          description:
            "ليف تنظيف إسفنجي مصنعة من ( طبة فايبر قوية+ إسفينج معالج ضد البكتريا )، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح.",
          uses: ["فايبر 6 قطع"],
          alt: "ليف إسفنجي ملون للتنظيف - White Shark",
        },
      ],
    },
    {
      image: [smartProduct1],
      title: "منتجات ذكية",
          description: "تجمع بين قوة السلك الاستانلس في التنظيف السريع والفعال وبين الاسفنج عالي الكثافة,فهي الحل الأمثل لمن يبحث عن السرعة والكفاءة ",
      uses: ["سلك المواعين", "ليف الفايبر", "فوط التنظيف", "إسفنج متعدد"],
      alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
      products: [
        {
          image: [
            smartProduct5,  
            smartProduct2,
            smartProduct3,
            smartProduct4,
            smartProduct1,
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
            "../assets/stainless-steel-wire-rack.jpg",
          ],
          title: "الليفة الذكية",
          description: "تجمع بين قوة السلك الاستانلس في التنظيف السريع والفعال وبين الاسفنج عالي الكثافة,فهي الحل الأمثل لمن يبحث عن السرعة والكفاءة ",
          uses: ["جحم جامبو", "جحم متوسط"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
      ],
    },
    {
      image: [otherProducts3],
      title: "منتجات اخري",
      description:
        "تشكيلة واسعة من منتجات التنظيف الصناعية والمنزلية بجودة عالية وأسعار الجملة.",
      uses: ["سلك المواعين", "ليف الفايبر", "فوط التنظيف", "إسفنج متعدد"],
      alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
      products: [
        {
          image: [
            otherProducts3,
          ],
          title: "سيلفر",
          description:
            "مصنعة من ( خيط بلاستكية + إسفينج معالج ضد البكتريا )",
          uses: ["سيلفر 6 قطع ", "سيلفر 3 قطع"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
        {
          image: [
              logo
          ],
          title: "مرجانة",
          description:
            "تتميز بتقنية فريدة حيث تنسد خيوط بلاستيكية مما يمنحها اداءا قويا متماسكا, مما يجعلها الخيار المثالي للمطاعم والفنادق ",
          uses: ["مرجانة 2 قطعة"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
      ],
    },
    {
      image: [otherProducts7],
      title: "ليف شعر",
      description:
        "تشكيلة واسعة من منتجات التنظيف الصناعية والمنزلية بجودة عالية وأسعار الجملة.",
      uses: ["سلك المواعين", "ليف الفايبر", "فوط التنظيف", "إسفنج متعدد"],
      alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
      products: [
        {
          image: [
            otherProducts7,
          ],
          title: "خرابيش",
          description:
            "تعتبر ليفة خرابيش واحدة من افضل الاختيارات في عالم الليف النايلون حيث تجمع بين القوة والاداء العالي",
          uses: ["6x", "2x", "3x"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
        {
          image: [logo],
          title: "نيمو",
          description:
            "تعتبر ليفة نيمو من تكثر المنتدات جاذبية خاصة بين السيدات بفضل ألوانها الفسفورية الجذابة ,البمبي ,البرتقالي و الأخضر الفسفوري ",
          uses: ["2x نيمو","3x نيمو","6x نيمو"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
        {
          image: [otherProducts1],
          title: "فلامينجو",
          description:
            "تأتي بثلاثة ألوان متناسقة الأحمر والأصفر والأزرق  كل لون لأستخدام في مطبخك  بالأضافة لخشونتها المناسبة ",
          uses: ["3x فلامينجو"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
        {
          image: [spaghetti],
          title: "سباجيتي",
          description:
            "تتميز بتصميم فريد وجديد خشونتها المناسبة لتنظيف الصلصة الملتصقة بالأطباق والأواني بكفاءة وفاعلية سريعة  ",
          uses: ["3x سباجيتي"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
      ],
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
