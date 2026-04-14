import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Hey%20Anibal%2C%20I%20saw%20your%20page%20and%20I%27m%20interested%20in%20classes.";

const CTA = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-28 px-6 bg-secondary/30">
      <div ref={ref} className="mx-auto max-w-2xl text-center">
        <h2 className="font-handwritten text-3xl sm:text-4xl font-bold text-primary mb-4">
          If this feels right, let's talk.
        </h2>
        <p className="text-muted-foreground mb-10">
          Send me a message and tell me what you're looking for.
        </p>
        <Button asChild size="lg" className="text-base font-semibold rounded-full px-8">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            👉 Message me on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
