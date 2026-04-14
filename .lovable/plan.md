

# Anibal's English Teacher Landing Page

## Overview
A dark, textured, indie-aesthetic personal landing page with 9 modular section components, a hero image slider, WhatsApp integration, and smooth animations.

## Structure

```text
src/
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── HeroSlider.tsx
│   │   ├── About.tsx
│   │   ├── Videos.tsx
│   │   ├── Writing.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── ui/ (existing)
├── pages/
│   └── Index.tsx (assembles all sections)
```

## Visual Design
- **Background**: Dark (#0a0a0a / #111) with subtle CSS grain texture overlay (no image needed — use CSS pseudo-element with noise filter)
- **Fonts**: Google Fonts — "Caveat" for handwritten titles, "Inter" for body text
- **Palette**: Off-white text (#f5f5f0), warm accent (#e8a838 gold), muted secondary text (#888)
- **Animations**: Use existing fade-in/scale-in from tailwind config + intersection observer for scroll-triggered reveals

## Key Implementation Details

1. **HeroSlider** — Use existing Embla carousel (already installed via `embla-carousel-react`). 4 placeholder images with dark overlay, auto-play via `embla-carousel-autoplay` plugin. Headline, subheadline, intro text, and WhatsApp CTA button overlaid.

2. **Videos** — 3 YouTube/placeholder iframes wrapped in aspect-ratio containers. Lazy loaded with `loading="lazy"` on iframes.

3. **Writing** — 2-3 hardcoded post preview cards with title + excerpt + link placeholder.

4. **Testimonials** — Simple quote cards in a grid, styled with border-left accent and italic text.

5. **WhatsAppButton** — Fixed bottom-right floating green button linking to `https://wa.me/PHONENUMBER?text=Hey%20Anibal...`. Visible on all pages.

6. **Smooth scroll** — CSS `scroll-behavior: smooth` on html + anchor links in Navbar.

7. **Scroll animations** — A small `useScrollReveal` hook using IntersectionObserver to add `animate-fade-in` class when sections enter viewport.

8. **SEO** — Update `index.html` title/meta to "Anibal — English Teacher" with proper description and OG tags.

9. **Grain texture** — CSS-only noise overlay using a pseudo-element with `background-image: url(data:image/svg+xml,...)` or a tiny inline SVG pattern, applied to body with `pointer-events: none`.

## Files Modified
- `index.html` — SEO meta tags, Google Fonts link
- `src/index.css` — Dark theme globals, grain overlay, custom font classes
- `src/pages/Index.tsx` — Compose all section components
- `src/App.css` — Remove default Vite boilerplate styles
- 9 new section components + WhatsAppButton + useScrollReveal hook

## Content
All copy provided in the brief will be used verbatim. Placeholder images use Unsplash URLs (bike, casual lifestyle). Video embeds use placeholder YouTube IDs that can be swapped.

