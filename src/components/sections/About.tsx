import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="mx-auto max-w-3xl">
        <h2 className="font-handwritten text-3xl sm:text-4xl font-bold text-primary mb-8">
          This is not a traditional class.
        </h2>
        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <p>
            I don't follow rigid methods or force you into a script.
            <br />
            I pay attention to how you think, how you hesitate, how you express yourself — and we build from there.
          </p>
          <p>
            My classes are conversations. Real ones.
            <br />
            The kind where you forget you're "studying" and start actually using the language.
          </p>
          <p>
            I adapt to you in real time — your pace, your personality, your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
