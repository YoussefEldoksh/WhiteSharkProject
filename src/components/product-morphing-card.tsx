import * as React from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  type Transition,
} from "framer-motion";
import {
  X,
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useState } from "react";

const TRANSITION: Transition = {
  type: "spring",
  stiffness: 600,
  damping: 50,
  mass: 0.2,
  restDelta: 5,
  restSpeed: 0.1,
  delay: 0,
  velocity: 50

};

interface Product {
  image: string[];
  title: string;
  uses: string[];
  alt: string;
  description: string;
}

interface ProductMorphingCardProps {
  image: string[];
  title: string;
  description: string;
  uses: string[];
  alt: string;
  products: Product[];
  onRequestQuote: () => void;
}

export function ProductMorphingCard({
  image,
  title,
  description,
  uses,
  alt,
  products,
  onRequestQuote,
}: ProductMorphingCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const uniqueId = React.useId();

  const [productIndex, setCurrentProductIndex] = useState(0); // pagination useState

  // Close on escape
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
    };
    if (isExpanded) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  const goToPreviousProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };  

  const goToNextProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <MotionConfig transition={TRANSITION}>
      <div className="relative">
        {/* The Card Trigger */}
        <motion.article
          layoutId={`card-${uniqueId}`}
          onClick={() => setIsExpanded(true)}
          className={cn(
            "bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 group cursor-pointer h-full flex flex-col will-change-transform",
            isExpanded ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="relative h-56 overflow-hidden">
            <motion.img
              layoutId={`image-${uniqueId}`}
              src={image[0]}
              alt={alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <motion.h3
              layoutId={`title-${uniqueId}`}
              className="text-xl font-bold text-foreground mb-3"
            >
              {title}
            </motion.h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
              {description}
            </p>

            <div className="mt-auto">
              <div className="relative h-10 w-full">
                <motion.div
                  layoutId={`cta-container-${uniqueId}`}
                  className="absolute inset-0 bg-primary/10 border border-primary/20 text-primary rounded-md flex items-center justify-center gap-2 group/btn font-medium px-4"
                >
                  <motion.span
                    layoutId={`cta-text-${uniqueId}`}
                    className="text-sm"
                  >
                    اطلب عرض سعر
                  </motion.span>
                  <motion.div layoutId={`cta-icon-${uniqueId}`}>
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Overlay & Expanded Dialog */}
        <AnimatePresence mode="sync">
          {isExpanded && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExpanded(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                style={{ contain: "layout style paint" }}
              />

              <motion.div
                layoutId={`card-${uniqueId}`}
                className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-auto md:top-1/4 md:right-1/4 md:-translate-x-1/2 md:-translate-y-1/2 w-auto md:w-full md:max-w-3xl md:max-h-[100vh] bg-card rounded-3xl overflow-hidden shadow-2xl z-[51] flex flex-col md:flex-row will-change-transform"
                dir="rtl"
                 style={{ contain: "layout style paint" }}
              >
                <div className="relative w-full  md:w-2/5 sm:h-auto md:h-auto shrink-0 overflow-hidden will-change-transform">
                  <Carousel className="  w-full h-full flex items-center justify-center bg-gray-50">
                    <CarouselContent className="h-96 flex  items-center justify-center">
                      {products[productIndex].image.map((img, index) => (
                        <CarouselItem key={`${productIndex}-${index}`} className="w-98 h-auto">
                          <motion.img
                            layoutId={index === 0 ? `image-${uniqueId}` : `image-${uniqueId}-${index}`}
                            src={img}
                            alt={`${alt} ${index}`}
                            className="w-98 h-auto object-cover"
                            loading="lazy"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 md:left-3" />
                    <CarouselNext className="right-2 md:right-3 " />
                  </Carousel>

                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-4 left-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors md:hidden"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 overflow-y-auto">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3
                      layoutId={`title-${uniqueId}`}
                      className="text-2xl font-bold text-foreground"
                    >
                      {products[productIndex].title}
                    </motion.h3>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="hidden md:flex p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {products[productIndex].description}
                    </p>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                       الاحجام المتاحة:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {products[productIndex].uses.map((use, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.05 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span>{use}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t mt-auto">
                      <div>
                        {products.length > 0 && (
                          <div className="flex items-center justify-center gap-4 mb-4">
                            <button
                              onClick={goToNextProduct}
                              className="p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                              aria-label="Next product"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            <div className="bg-muted px-3 py-1 rounded-full text-foreground text-sm font-medium">
                              {products.length} / {productIndex + 1}
                            </div>
                            <button
                              onClick={goToPreviousProduct}
                              className="p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                              aria-label="Previous product"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-center gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 rounded-xl bg-transparent"
                          onClick={() => setIsExpanded(false)}
                        >
                          إغلاق
                        </Button>
                        <motion.div
                          layoutId={`cta-container-${uniqueId}`}
                          className="flex-[2] relative h-11"
                        >
                          <Button
                            className="p-4 w-full h-full rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                            onClick={() => {
                              setIsExpanded(false);
                              onRequestQuote();
                            }}
                          >
                            <motion.span layoutId={`cta-text-${uniqueId}`}>
                              اطلب عرض الكتالوج الآن
                            </motion.span>
                            <motion.div
                              layoutId={`cta-icon-${uniqueId}`}
                              className="mr-2"
                            >
                              <CheckCircle2 className="h-4 w-4" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}