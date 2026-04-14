import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Hey%20Anibal%2C%20I%20saw%20your%20page%20and%20I%27m%20interested%20in%20classes.";

const slides = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&h=800&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80",
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&h=800&fit=crop&q=80",
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((src, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="font-handwritten text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
            Learn English by becoming yourself in the language.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-3">
            No scripts. No pressure. Just real conversations that help you think and express naturally.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-8">
            I'm Anibal — an English teacher from Brazil. I help you speak with clarity, confidence, and personality.
          </p>
          <Button asChild size="lg" className="text-base font-semibold rounded-full px-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              👉 Talk to me on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-foreground/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
