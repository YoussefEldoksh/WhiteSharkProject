import { Factory, Award, Users, TrendingUp } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const AboutSection = () => {

    useEffect(()=>{
      AOS.init({
         duration: 1000,once: true,offset: 50 ,disable: window.innerWidth < 768 ? false : 'mobile'
      });
    },[]);
  const features = [
    {
      icon: Factory,
      title: "تصنيع محلي",
      description: "مصنع متكامل في الإسكندرية مجهز بأحدث خطوط الإنتاج",
    },
    {
      icon: Award,
      title: "جودة عالية",
      description: "معايير صارمة في الجودة ومواد خام ممتازة",
    },
    {
      icon: Users,
      title: "شراكات B2B",
      description: "نخدم تجار الجملة والموزعين والشركات الكبرى",
    },
    {
      icon: TrendingUp,
      title: "قدرة توريد عالية",
      description: "إمكانية تلبية الطلبات الكبيرة في وقت قياسي",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" dir="rtl">
      <div className="container-custom">
        {/* Section Header */}
        <div data-aos="fade-down" className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            تعرف علينا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            من نحن
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div data-aos="fade-left" className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="text-primary">White Shark</span> - الرائدون في تصنيع منتجات التنظيف
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              منذ أكثر من 15 عاماً، تُعد شركة White Shark من أبرز الشركات المتخصصة 
              في تصنيع وتوريد منتجات التنظيف عالية الجودة في مصر. نفخر بخدمة قاعدة 
              واسعة من تجار الجملة والموزعين وشركات التوزيع الكبرى.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              يقع مصنعنا في الإسكندرية - الطريق الدولي، ونمتلك خطوط إنتاج حديثة 
              تمكننا من تلبية الطلبات الكبيرة بجودة ثابتة وأسعار تنافسية للسوق المصري والعربي.
            </p>

            {/* Stats */}
            <div  className="grid grid-cols-3 gap-4 pt-6">
              <div  className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-primary">+15</div>
                <div className="text-sm text-muted-foreground">سنة خبرة</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-primary">+500</div>
                <div className="text-sm text-muted-foreground">عميل</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-primary">+50</div>
                <div className="text-sm text-muted-foreground">منتج</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div data-aos="fade-right"
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
