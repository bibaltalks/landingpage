import { useScrollReveal } from "@/hooks/useScrollReveal";

const videoIds = ["dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ"];

const Videos = () => {
  const ref = useScrollReveal();

  return (
    <section id="videos" className="py-24 px-6 bg-secondary/30">
      <div ref={ref} className="mx-auto max-w-5xl">
        <h2 className="font-handwritten text-3xl sm:text-4xl font-bold text-primary mb-3 text-center">
          Before you decide, watch this.
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          This is what my classes actually feel like.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {videoIds.map((id, i) => (
            <div key={i} className="aspect-video overflow-hidden rounded-lg border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`Video ${i + 1}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
