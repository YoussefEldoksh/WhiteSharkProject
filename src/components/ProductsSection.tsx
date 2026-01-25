import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React, { lazy } from 'react';


import spaghetti from "@/assets/IMG_٢٠٢٥١٢٠٦_١٥٢٦٣٢.jpg";
import spaghetti2 from "@/assets/IMG_٢٠٢٥١٢٠٦_١٥٢٧٠٩.jpg";
import spaghetti3 from '@/assets/صور منتجات القرش خلفيه بيضاء/سباجيتي 3 ق.png'
import spaghetti4 from '@/assets/صور منتجات القرش خلفيه بيضاء/سباجيتي 9 ق.png'


import kharabish1 from '@/assets/صور منتجات القرش خلفيه بيضاء/خرابيش 2 ق.jpg'
import kharabish2 from '@/assets/صور منتجات القرش خلفيه بيضاء/خرابيش 2 ق.png'
import kharabish3 from '@/assets/صور منتجات القرش خلفيه بيضاء/خرابيش 3_2.jpg'
import kharabish4 from '@/assets/صور منتجات القرش خلفيه بيضاء/خرابيش 6 ق.png'
import kharabish5 from '@/assets/صور منتجات القرش خلفيه بيضاء/خرابيش برو.png'

import zakya1 from '@/assets/صور منتجات القرش خلفيه بيضاء/ذكيه 1 ق.png'
import zakya2 from '@/assets/صور منتجات القرش خلفيه بيضاء/ذكيه القرش 2 ق.png'
import zakya3 from '@/assets/صور منتجات القرش خلفيه بيضاء/ذكيه 3 ق.png'
import zakya4 from '@/assets/صور منتجات القرش خلفيه بيضاء/ذكيه 5 ق.png'
import zakya5 from '@/assets/صور منتجات القرش خلفيه بيضاء/كرتونه ذكيه 1 ق (2) (1).png'
import zakya6 from '@/assets/صور منتجات القرش خلفيه بيضاء/كرتونه ذكيه 1 ق (2) (2).png'

import scotsh1 from '@/assets/صور منتجات القرش خلفيه بيضاء/سكوتش 9 ق.png';
import scotsh2 from '@/assets/صور منتجات القرش خلفيه بيضاء/سكوتش 12 ق.png';
import scotsh3 from '@/assets/صور منتجات القرش خلفيه بيضاء/سكوتش بريمو.png';
import scotsh4 from '@/assets/صور منتجات القرش خلفيه بيضاء/سكوتش جامبو 12 ق.png'
import scotsh5 from '@/assets/صور منتجات القرش خلفيه بيضاء/سكوتش جامبو.png'

import silver from '@/assets/صور منتجات القرش خلفيه بيضاء/سيلفر 6 ق.png'
import flamingo1 from '@/assets/صور منتجات القرش خلفيه بيضاء/فلامينجو .png'
import flamingo2 from '@/assets/صور منتجات القرش خلفيه بيضاء/فلامينجو 9 ق.png'
import morgana1 from '@/assets/صور منتجات القرش خلفيه بيضاء/مرجانه.png'
import nemo1 from '@/assets/صور منتجات القرش خلفيه بيضاء/نيمو .jpg'
import nemo2 from '@/assets/صور منتجات القرش خلفيه بيضاء/نيمو 2 ق.jpg'
import nemo3 from '@/assets/صور منتجات القرش خلفيه بيضاء/نيمو 2 قطعه.png'
import nemo4 from '@/assets/صور منتجات القرش خلفيه بيضاء/نيمو 3 ق .jpg'
import nemo5 from '@/assets/صور منتجات القرش خلفيه بيضاء/نيمو 6 ق.png'
import nemo6 from '@/assets/صور منتجات القرش خلفيه بيضاء/نيمو برو.png'


import flexPad1 from '@/assets/صور منتجات القرش خلفيه بيضاء/فليكس 5 ق.png'
import flexPad2 from '@/assets/صور منتجات القرش خلفيه بيضاء/فليكس باد 33.jpg'
import flexPad3 from '@/assets/صور منتجات القرش خلفيه بيضاء/فليكس باد.jpg'


import spongeScrubber4 from "@/assets/صور منتجات سكوتش القرش/فليكس باد 02.jpg";
import spongeScrubber5 from "@/assets/صور منتجات سكوتش القرش/فليكس باد 33.jpg";
import spongeScrubber6 from "@/assets/صور منتجات سكوتش القرش/فايبر 001.png";
import spongeScrubber7 from "@/assets/صور منتجات سكوتش القرش/فليكس باد.jpg";

import wireProduct1 from "@/assets/صور منتجات القرش خلفيه بيضاء/سلك 3 ق.png";
import wireProduct3 from "@/assets/صور منتجات القرش خلفيه بيضاء/سلك 8 ق.png";
import wireProduct2 from "@/assets/صور منتجات القرش خلفيه بيضاء/سلك جامبو 01.png";
import wireProduct4 from "@/assets/صور منتجات القرش خلفيه بيضاء/سلك جامبو.png";
import wireProduct5 from "@/assets/صور منتجات القرش خلفيه بيضاء/كرتونه سلك 3 والباكيت.png";
import wireProduct6 from "@/assets/صور منتجات القرش خلفيه بيضاء/كرتونه سلك جامبو والباكيت.png";

import fiber from '@/assets/صور منتجات القرش خلفيه بيضاء/فايبر.png'



import logo from "@/assets/logo.jpg"


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
      image: [wireProduct4],
      title: "سلك ستانلس",
      description:
        "تخلص من الأوساخ العنيدة والبقع المستعصية بكل سهولة! سلك التنظيف المصنوع من الفولاذ المقاوم للصدأ يعطيك نتائج احترافية في ثوانٍ معدودة",
      uses: ["مطابخ المطاعم", "الفنادق", "المنازل", "المستشفيات"],
      alt: "حوامل سلكية ستانلس ستيل للمطبخ - White Shark",
      products: [
        {
          image: [
            wireProduct3,
            wireProduct1,
            wireProduct2,
            wireProduct4,
            wireProduct5,
            wireProduct6,
            logo,
            logo,
            logo,
            logo,
            logo,

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
      image: [scotsh3],
      title: "منتجات سكوتش القرش",
      description:
        "ليف تنظيف إسفنجي بألوان متعددة، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح.",
      uses: ["تنظيف الأواني", "الأسطح", "البلاط", "الأجهزة"],
      alt: "ليف إسفنجي ملون للتنظيف - White Shark",
      products: [
        {
          image: [
            scotsh4,
            scotsh5,
            scotsh1,
            scotsh2,
            scotsh3,
            logo,
            logo,
            logo,
            logo,
          ],
          title: "ليف سكوتش القرش",
          description:
            "ليف تنظيف إسفنجي مصنعة من ( طبة فايبر قوية+ إسفينج معالج ضد البكتريا )، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح",
          uses: ["جحم بريمو", "جحم وسط", "جحم جامبو"],
          alt: "ليف سكوتش القرش للتنظيف - White Shark",
        },
        {
          image: [
            flexPad1,
            spongeScrubber4,
            spongeScrubber7,
            flexPad2,
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
          image: [spongeScrubber6,fiber, logo],
          title: "ليف  فايبر",
          description:
            "ليف تنظيف إسفنجي مصنعة من ( طبة فايبر قوية+ إسفينج معالج ضد البكتريا )، فعال في إزالة البقع والأوساخ مع الحفاظ على الأسطح.",
          uses: ["فايبر 6 قطع"],
          alt: "ليف إسفنجي ملون للتنظيف - White Shark",
        },
      ],
    },
    {
      image: [zakya1],
      title: "منتجات ذكية",
          description: "تجمع بين قوة السلك الاستانلس في التنظيف السريع والفعال وبين الاسفنج عالي الكثافة,فهي الحل الأمثل لمن يبحث عن السرعة والكفاءة ",
      uses: ["سلك المواعين", "ليف الفايبر", "فوط التنظيف", "إسفنج متعدد"],
      alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
      products: [
        {
          image: [
            zakya6,
            zakya5,
            zakya4,
            zakya3,
            zakya2,
            zakya1,  
            logo,
            logo,
            logo,
            logo,
            logo,
          ],
          title: "الليفة الذكية",
          description: "تجمع بين قوة السلك الاستانلس في التنظيف السريع والفعال وبين الاسفنج عالي الكثافة,فهي الحل الأمثل لمن يبحث عن السرعة والكفاءة ",
          uses: ["جحم جامبو", "جحم متوسط"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
      ],
    },
    {
      image: [morgana1],
      title: "منتجات اخري",
      description:
        "تشكيلة واسعة من منتجات التنظيف الصناعية والمنزلية بجودة عالية وأسعار الجملة.",
      uses: ["سلك المواعين", "ليف الفايبر", "فوط التنظيف", "إسفنج متعدد"],
      alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
      products: [
                {
          image: [
              morgana1
          ],
          title: "مرجانة",
          description:
            "تتميز بتقنية فريدة حيث تنسد خيوط بلاستيكية مما يمنحها اداءا قويا متماسكا, مما يجعلها الخيار المثالي للمطاعم والفنادق ",
          uses: ["مرجانة 2 قطعة"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
        {
          image: [
            silver,
          ],
          title: "سيلفر",
          description:
            "مصنعة من ( خيط بلاستكية + إسفينج معالج ضد البكتريا )",
          uses: ["سيلفر 6 قطع ", "سيلفر 3 قطع"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },

      ],
    },
    {
      image: [spaghetti3],
      title: "ليف شعر",
      description:
        "تشكيلة واسعة من منتجات التنظيف الصناعية والمنزلية بجودة عالية وأسعار الجملة.",
      uses: ["سلك المواعين", "ليف الفايبر", "فوط التنظيف", "إسفنج متعدد"],
      alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
      products: [
                {
          image: [
            spaghetti4,
            spaghetti,
            spaghetti2,
            spaghetti3,
            logo,
            logo,
            logo,

          ],
          title: "سباجيتي",
          description:
            "تتميز بتصميم فريد وجديد خشونتها المناسبة لتنظيف الصلصة الملتصقة بالأطباق والأواني بكفاءة وفاعلية سريعة  ",
          uses: ["3x سباجيتي"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
        {
          image: [
            kharabish2,
            kharabish3,
            kharabish4,
            kharabish1,
            kharabish5,
            logo,
            logo,
            logo,
            logo,
          ],
          title: "خرابيش",
          description:
            "تعتبر ليفة خرابيش واحدة من افضل الاختيارات في عالم الليف النايلون حيث تجمع بين القوة والاداء العالي",
          uses: ["6x", "2x", "3x"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
        {
          image: [
            nemo5,
            nemo4,
            nemo1,
            nemo2,
            nemo3,
            logo,
            logo,
            logo,
            logo,
           ],
          title: "نيمو",
          description:
            "تعتبر ليفة نيمو من تكثر المنتدات جاذبية خاصة بين السيدات بفضل ألوانها الفسفورية الجذابة ,البمبي ,البرتقالي و الأخضر الفسفوري ",
          uses: ["2x نيمو","3x نيمو","6x نيمو"],
          alt: "منتجات تنظيف متنوعة بالجملة - White Shark",
        },
        {
          image: [
            flamingo2,
            flamingo1,
            logo],
          title: "فلامينجو",
          description:
            "تأتي بثلاثة ألوان متناسقة الأحمر والأصفر والأزرق  كل لون لأستخدام في مطبخك  بالأضافة لخشونتها المناسبة ",
          uses: ["3x فلامينجو"],
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
        <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
