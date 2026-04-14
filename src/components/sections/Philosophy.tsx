import { useScrollReveal } from "@/hooks/useScrollReveal";

const Philosophy = () => {
  const ref = useScrollReveal();

  return (
    <section id="philosophy" className="py-24 px-6 bg-secondary/30">
      <div ref={ref} className="mx-auto max-w-3xl">
        <h2 className="font-handwritten text-3xl sm:text-4xl font-bold text-primary mb-8">
          Learning is like landing a trick.
        </h2>
        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <p>
            I've spent years practicing bike tricks.
            <br />
            Falling, repeating, adjusting — until something clicks.
          </p>
          <p>Language works the same way.</p>
          <p>
            You don't learn by memorizing.
            <br />
            You learn by trying, failing, and refining — until it flows.
          </p>
          <p className="text-foreground font-medium">That's how I teach.</p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
