import {
  Shield,
  Truck,
  BadgeDollarSign,
  Headphones,
  Package,
  Handshake,
} from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "جودة مضمونة",
      description:
        "نستخدم أفضل المواد الخام ونطبق معايير جودة صارمة في كل مرحلة من مراحل التصنيع",
    },
    {
      icon: Truck,
      title: "توريد مستمر",
      description:
        "قدرة إنتاجية عالية تضمن توفر المنتجات وتلبية الطلبات الكبيرة في الوقت المحدد",
    },
    {
      icon: BadgeDollarSign,
      title: "أسعار تنافسية",
      description:
        "أسعار جملة مميزة تناسب تجار الجملة والموزعين وتضمن هامش ربح جيد",
    },
    {
      icon: Package,
      title: "تخصيص الطلبات",
      description:
        "إمكانية تصنيع منتجات حسب المواصفات المطلوبة وبعلامتك التجارية الخاصة",
    },
    {
      icon: Headphones,
      title: "دعم فني متواصل",
      description:
        "فريق دعم متاح للإجابة على استفساراتك ومساعدتك في اختيار المنتجات المناسبة",
    },
    {
      icon: Handshake,
      title: "شراكة طويلة المدى",
      description:
        "نبني علاقات تجارية مستدامة مع عملائنا قائمة على الثقة والالتزام",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-background" dir="rtl">
      <div data-aos="fade-down" className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            مميزاتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            لماذا تختار White Shark؟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نحن نفهم احتياجات السوق ونقدم حلولاً متكاملة لتجار الجملة والموزعين
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-card"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-soft">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <reason.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div data-aos="flip-up" className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100%", label: "رضا العملاء" },
              { value: "+10,000", label: "طلب شهري" },
              { value: "+20", label: "محافظة نخدمها" },
              { value: "48h", label: "سرعة التوريد" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
