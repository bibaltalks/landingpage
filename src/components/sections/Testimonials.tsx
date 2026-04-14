import { useScrollReveal } from "@/hooks/useScrollReveal";

const quotes = [
  "I didn't realize I was watching videos in English… until I noticed I understood everything.",
  "Classes feel more like conversations than lessons.",
  "I stopped translating in my head.",
];

const Testimonials = () => {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 px-6">
      <div ref={ref} className="mx-auto max-w-4xl">
        <h2 className="font-handwritten text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
          What students say
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              className="border-l-2 border-primary/60 pl-5 py-2"
            >
              <p className="italic text-muted-foreground leading-relaxed">"{q}"</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
