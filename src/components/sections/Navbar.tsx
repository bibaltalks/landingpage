const links = [
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Writing", href: "#writing" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#" className="font-handwritten text-2xl font-bold text-primary">
        Anibal
      </a>
      <ul className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
