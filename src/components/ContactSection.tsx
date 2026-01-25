import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Download,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
// import { PhoneInput } from "./Phone-input";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import pdf from "@/assets/داتا منتجات.pdf";

const ContactSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      disable: window.innerWidth < 768 ? false : "mobile",
    });
  }, []);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    countryCode: "",
    countryName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value, data) => {
    setFormData({
      ...formData,
      phone: value, // Full phone number including dial code
      countryCode: `+${data.dialCode}`,
      countryName: data.name,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // https://formspree.io/f/xwvvewzq
    // Simulate form submission
    try {
      const response = await fetch("https://formspree.io/f/meeokqob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "تم إرسال رسالتك بنجاح!",
        description: "سنتواصل معك في أقرب وقت ممكن.",
      });

      console.log(formData);

      setFormData({
        name: "",
        company: "",
        countryCode: "",
        countryName: "",
        phone: "",
        email: "",
        message: "",
      });

      setIsSubmitting(false);
      setIsValid(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "01114259777",
      link: "tel:01114259777",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "01114259777",
      link: "https://wa.me/201114259777",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "white.shark.egy@gmail.com",
      link: "mailto:white.shark.egy@gmail.com",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "الإسكندرية - الطريق الدولي 45",
      link: "https://maps.google.com/?q=Alexandria,Egypt",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "السبت - الخميس: 9ص - 6م",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted" dir="rtl">
      <div className="container-custom">
        {/* Section Header */}
        <div data-aos="fade-down" className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            نحن هنا لخدمتك
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تواصل معنا للحصول على عروض أسعار الجملة أو للاستفسار عن منتجاتنا
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div
          data-aos="zoom-in"
          className="grid lg:grid-cols-2 row-span-2  gap-12"
        >
          {/* Contact Form */}
          <div className="grid grid-row-2 h-fit bg-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    required
                    className="text-right"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    اسم الشركة
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="اسم شركتك (اختياري)"
                    className="text-right"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2.5"
                  >
                    رقم الهاتف <span className="text-red-500">*</span>
                  </label>
                  <PhoneInput
                    onChange={handlePhoneChange}
                    value={formData.phone}
                    country={"eg"}
                    excludeCountries={["il"]}
                    placeholder="(eg. +20) 123456789"
                    containerStyle={{ direction: 'ltr' }}
                    enableSearch
                    searchPlaceholder="ابحث"
                    inputStyle={{
                      width: 250 ,
                      padding: 18,
                      textAlign: 'right', 
                      paddingRight: '20px',
                      backgroundColor: 'rgba(246, 246, 246, 0.55)',
                      direction: 'ltr', 
                      border: "solid 1px rgba(224, 233, 238, 0.61)"
                      
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="text-right"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  رسالتك
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا... (مثال: أريد عرض سعر لـ 1000 قطعة ليف)"
                  rows={5}
                  className="text-right resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {
                  <>
                    إرسال الرسالة
                    <Send className="h-5 w-5 mr-2" />
                  </>
                }
              </Button>
            </form>
            <a href={pdf} download={"White-Shark-Catalogue.pdf"}>
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-500 mt-2 "
                disabled={!isValid}
              >
                {
                  <>
                    تحميل الكتالوج
                    <Download className="h-5 w-5 mr-1"></Download>
                  </>
                }
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                معلومات التواصل
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          dir={
                            info.title === "البريد الإلكتروني" ? "ltr" : "rtl"
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.8104192629976!2d30.00855547539471!3d31.25367107433715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5da8fae7d1dff%3A0xb550070eb55099b0!2sMostafa%20Kamel%2C%20As%20Soyouf%20Qebli%20(Include%20Izbat%20Derbanah)%2C%20Third%20Al%20Montazah%2C%20Alexandria%20Governorate%205515531!5e0!3m2!1sen!2seg!4v1769138550784!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع White Shark على الخريطة"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
