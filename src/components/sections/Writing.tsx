import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const posts = [
  {
    title: "The discipline of desire",
    excerpt: "Why wanting something isn't enough — and what happens when you learn to direct your energy.",
  },
  {
    title: "Identity and language",
    excerpt: "You don't just learn words. You learn a new way of being. That's what makes it hard — and beautiful.",
  },
  {
    title: "On understanding yourself",
    excerpt: "The process of learning a language mirrors the process of understanding who you are.",
  },
];

const Writing = () => {
  const ref = useScrollReveal();

  return (
    <section id="writing" className="py-24 px-6">
      <div ref={ref} className="mx-auto max-w-4xl">
        <h2 className="font-handwritten text-3xl sm:text-4xl font-bold text-primary mb-3">
          I also write.
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl">
          I write about identity, discipline, desire, and the process of understanding yourself.
          <br />
          If you want to know how I think, start here.
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {posts.map((p, i) => (
            <a
              key={i}
              href="#"
              className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          Read more on Substack <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Writing;
