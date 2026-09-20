import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Clock3, Instagram, MapPin, Menu, Phone, Star, X } from "lucide-react";
import { useState } from "react";
import courtyard from "@/assets/garden-cafe-courtyard.jpg";
import pizza from "@/assets/garden-fresh-pizza.jpg";
import mojito from "@/assets/strawberry-mojito.jpg";
import latte from "@/assets/cafe-latte-table.jpg";

const phoneHref = "tel:+916239604749";
const mapHref = "https://www.google.com/maps/search/?api=1&query=Garden+Cafe+74-D+D-Block+Sarabha+Nagar+Ludhiana+Punjab+141001";
const instagramHref = "https://www.instagram.com/gardencafeldh/";
const menuGroups = [
  { label: "Cafe favourites", items: ["Hot Chocolate", "Cafe Latte", "Irish Coffee", "Expresso", "Garden Fresh Pizza"] },
  { label: "From the kitchen", items: ["Garlic Bread", "Pan O Lasagne", "Stuffed Paneer Tikka", "Garden Fresh Bruschetta", "Alfredo Pasta"] },
  { label: "Cool & refreshing", items: ["Paan & Strawberry Mojito", "Virgin Mojito", "Virgin Pinacolada", "Orange Kaffir Lime", "Fruit Punch"] },
  { label: "Sweet finish", items: ["Baked Yogurt", "Hot Chocolate Cup", "Mud Pie", "Death By The Chocolate", "Crème Caramel"] },
];
const reviews = [
  { quote: "The service was excellent, staff was very polite and attentive. The way they served made the whole experience even more special.", name: "Kashu Khan", detail: "Google review · 2 months ago" },
  { quote: "The food was great, but the best part was the amazing service. The staff was friendly, quick, and made sure everything was perfect.", name: "Zoya Aslam", detail: "Google review · 2 months ago" },
  { quote: "Love this place. Food is amazing, ambience is amazing, with both outdoor and indoor space. The Signature Pizza is the yummiest!", name: "Nitika Jindal", detail: "Google Local Guide" },
];
const faqs = [
  ["Where is Garden Cafe located?", "You’ll find us at 74-D, D-Block, Sarabha Nagar, Ludhiana, Punjab 141001."],
  ["How late is the cafe open?", "Garden Cafe is listed as open until 11 pm. Call before travelling if you need to confirm today’s timings."],
  ["Can I reserve a table?", "Reservations are available. Call 062396 04749 to check availability and reserve directly with the cafe."],
  ["Does Garden Cafe have outdoor seating?", "Yes. Guests frequently mention the garden setting, with both indoor and outdoor seating available."],
  ["What should I expect to spend?", "The reported range is approximately ₹400–1,400 per person, depending on your order."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garden Cafe Ludhiana | Cafe in Sarabha Nagar" },
      { name: "description", content: "Visit Garden Cafe in Sarabha Nagar, Ludhiana for coffee, pizza, pasta, Indian favourites, mocktails and inviting indoor and garden seating. Call to reserve." },
      { property: "og:title", content: "Garden Cafe — Sarabha Nagar, Ludhiana" },
      { property: "og:description", content: "A garden cafe for coffee, global comfort food, mocktails and relaxed indoor-outdoor dining in Ludhiana." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "CafeOrCoffeeShop", name: "Garden Cafe", telephone: "+91 62396 04749", priceRange: "₹400–1,400 per person", servesCuisine: ["Cafe", "Chinese", "North Indian", "American", "Asian", "Italian", "Fast Food"], address: { "@type": "PostalAddress", streetAddress: "74-D, D-Block, Sarabha Nagar", addressLocality: "Ludhiana", addressRegion: "Punjab", postalCode: "141001", addressCountry: "IN" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.0", reviewCount: "1195" }, sameAs: [instagramHref] }) }],
  }),
  component: Index,
});

function ButtonLink({ href, children, tone = "solid", external = false }: { href: string; children: React.ReactNode; tone?: "solid" | "light" | "outline"; external?: boolean }) {
  const style = tone === "solid" ? "bg-citrus text-foreground hover:bg-secondary" : tone === "light" ? "bg-cream text-primary hover:bg-secondary" : "border border-cream/45 text-cream hover:bg-cream/10";
  return <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-extrabold transition-colors ${style}`}>{children}</a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  return <div className="min-h-screen overflow-x-hidden bg-background pb-20 font-sans md:pb-0">
    <header className="absolute inset-x-0 top-0 z-30 border-b border-cream/20 text-cream">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="focus-ring flex items-center gap-3" aria-label="Garden Cafe home"><span className="grid size-10 place-items-center rounded-full border border-cream/40 font-display text-xl">G</span><span className="font-display text-xl">Garden Cafe</span></a>
        <nav className="hidden items-center gap-7 text-sm font-bold md:flex" aria-label="Main navigation"><a href="#about">Our story</a><a href="#menu">Menu</a><a href="#reviews">Reviews</a><a href="#gallery">Gallery</a><a href="#contact">Visit</a></nav>
        <div className="hidden md:block"><ButtonLink href={phoneHref} tone="light"><Phone className="size-4" /> Reserve a table</ButtonLink></div>
        <button className="focus-ring grid size-11 place-items-center md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="border-t border-cream/20 bg-primary px-5 py-4 md:hidden" aria-label="Mobile navigation">{["about", "menu", "reviews", "gallery", "contact"].map((id) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-cream/15 py-3 font-bold capitalize">{id === "about" ? "Our story" : id}</a>)}</nav>}
    </header>

    <main>
      <section id="top" className="relative flex min-h-[760px] items-end overflow-hidden bg-primary text-cream md:min-h-[800px]">
        <img src={courtyard} width={1600} height={1200} alt="Lush garden courtyard dining at Garden Cafe" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/45" /><div className="absolute inset-0 bg-linear-to-t from-primary via-primary/35 to-primary/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-32 lg:px-8 lg:pb-16">
          <div className="mb-5 flex flex-wrap gap-2 text-xs font-extrabold"><span className="rounded-full bg-cream/15 px-3 py-2 backdrop-blur-md">4.0 ★ · 1,195 Google reviews</span><span className="rounded-full bg-cream/15 px-3 py-2 backdrop-blur-md">Open · Closes 11 pm</span></div>
          <h1 className="max-w-4xl font-display text-6xl leading-[0.93] text-balance sm:text-7xl lg:text-8xl">Garden Cafe</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">A leafy escape in Sarabha Nagar, where generous cups of coffee meet garden-fresh plates, lively mocktails and relaxed dining—inside and out.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row"><ButtonLink href={phoneHref}><Phone className="size-4" /> Call to reserve</ButtonLink><ButtonLink href={mapHref} tone="outline" external><MapPin className="size-4" /> Get directions</ButtonLink></div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream/25 pt-5 text-sm font-bold text-cream/80"><span>₹400–1,400 per person</span><span>Cafe · Sarabha Nagar</span><span>Indoor & outdoor seating</span></div>
        </div>
      </section>

      <section id="about" className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
          <div><p className="section-kicker text-coral">Welcome to the garden</p><h2 className="mt-4 font-display text-5xl leading-tight text-balance sm:text-6xl">A neighbourhood favourite with room to linger.</h2></div>
          <div className="grid gap-8 sm:grid-cols-2"><p className="text-base leading-8 text-muted-foreground">Garden Cafe brings a relaxed garden setting to the heart of Ludhiana. Guests come for the greenery, inviting decor and choice of indoor or outdoor seating—whether it’s a quick coffee, brunch with friends or dinner with family.</p><div><p className="text-base leading-8 text-muted-foreground">The menu crosses cuisines and moods, from cafe classics and pizzas to Indian grills, Asian mains, mocktails, shakes and desserts. With 1,195 Google reviews, the cafe remains a familiar Sarabha Nagar meeting place.</p><div className="mt-6 flex items-center gap-4 border-t border-border pt-5"><span className="font-display text-5xl text-primary">4.0</span><span className="text-sm font-bold text-muted-foreground">Rated by<br />1,195 guests</span></div></div></div>
        </div>
      </section>

      <section id="menu" className="bg-primary py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-5 border-b border-cream/20 pb-8 sm:flex-row sm:items-end"><div><p className="section-kicker text-citrus">From our menu</p><h2 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-balance sm:text-6xl">Something delicious for every table.</h2></div><p className="max-w-sm text-sm leading-7 text-cream/65">A selection of popular and signature names from Garden Cafe’s wide-ranging menu. Ask the cafe for current availability and prices.</p></div>
          <div className="grid border-b border-cream/20 md:grid-cols-2">{menuGroups.map((group, i) => <article key={group.label} className={`py-9 md:px-8 ${i % 2 === 0 ? "md:border-r md:border-cream/20 md:pl-0" : "md:pr-0"} ${i < 2 ? "border-b border-cream/20" : ""}`}><p className="section-kicker text-citrus">0{i + 1} · {group.label}</p><ul className="mt-5 space-y-3">{group.items.map((item, n) => <li key={item} className="flex items-center justify-between gap-4 text-lg"><span>{item}</span>{(i === 0 && n < 4) && <span className="text-xs font-extrabold text-citrus">POPULAR</span>}</li>)}</ul></article>)}</div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><p className="font-display text-2xl">Also serving Indian, Asian, Italian and cafe favourites.</p><ButtonLink href={phoneHref} tone="light">Ask about the menu <ArrowRight className="size-4" /></ButtonLink></div>
        </div>
      </section>

      <section id="gallery" className="bg-background py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-10 max-w-2xl"><p className="section-kicker text-coral">Taste the moment</p><h2 className="mt-4 font-display text-5xl leading-tight text-balance sm:text-6xl">Bright plates. Slow sips. Garden light.</h2></div><div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[320px] md:grid-cols-4"><img src={pizza} loading="lazy" width={1200} height={1200} alt="Garden Fresh Pizza" className="col-span-2 h-full w-full rounded-md object-cover md:row-span-2" /><img src={mojito} loading="lazy" width={1200} height={1200} alt="Paan and strawberry style mojito" className="h-full w-full rounded-md object-cover" /><img src={latte} loading="lazy" width={1200} height={1200} alt="Cafe latte with garlic bread and dessert" className="h-full w-full rounded-md object-cover" /><img src={courtyard} loading="lazy" width={1600} height={1200} alt="Garden cafe seating at dusk" className="col-span-2 h-full w-full rounded-md object-cover" /></div></div></section>

      <section id="reviews" className="border-y border-border bg-secondary/55 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker text-coral">Guest notes</p><h2 className="mt-4 font-display text-5xl sm:text-6xl">In their own words.</h2></div><div className="flex items-center gap-2 font-bold"><Star className="size-5 fill-citrus text-citrus" /> 4.0 from 1,195 Google reviews</div></div><div className="mt-10 grid gap-px bg-border lg:grid-cols-3">{reviews.map((review) => <figure key={review.name} className="bg-background p-7 lg:p-9"><div className="flex gap-1 text-coral" aria-label="Five stars">{[1,2,3,4,5].map((n) => <Star key={n} className="size-4 fill-current" />)}</div><blockquote className="mt-6 font-display text-2xl leading-relaxed">“{review.quote}”</blockquote><figcaption className="mt-7 border-t border-border pt-5"><p className="font-extrabold">{review.name}</p><p className="mt-1 text-xs text-muted-foreground">{review.detail}</p></figcaption></figure>)}</div><p className="mt-5 text-xs text-muted-foreground">Review excerpts have been lightly edited for clarity and length.</p></div></section>

      <section className="bg-background py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-8"><div><p className="section-kicker text-coral">Before you visit</p><h2 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">Good to know.</h2><p className="mt-5 max-w-sm leading-7 text-muted-foreground">Quick answers for planning coffee, brunch, dinner or a relaxed catch-up in the garden.</p></div><div>{faqs.map(([question, answer], i) => <div key={question} className="border-t border-border"><button className="focus-ring flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-extrabold" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>{question}<ChevronDown className={`size-5 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} /></button>{openFaq === i && <p className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</p>}</div>)}</div></div></section>

      <section id="contact" className="relative overflow-hidden bg-primary text-cream"><img src={courtyard} loading="lazy" width={1600} height={1200} alt="Garden Cafe courtyard" className="absolute inset-0 h-full w-full object-cover opacity-25" /><div className="absolute inset-0 bg-primary/75" /><div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28"><div><p className="section-kicker text-citrus">Your table is waiting</p><h2 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-balance sm:text-7xl">Make your next meal feel like a little escape.</h2><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href={phoneHref}><Phone className="size-4" /> Call 062396 04749</ButtonLink><ButtonLink href={mapHref} tone="outline" external><MapPin className="size-4" /> Get directions</ButtonLink></div></div><address className="not-italic lg:border-l lg:border-cream/25 lg:pl-10"><p className="section-kicker text-citrus">Visit Garden Cafe</p><p className="mt-5 font-display text-3xl">74-D, D-Block<br />Sarabha Nagar<br />Ludhiana, Punjab 141001</p><div className="mt-7 space-y-4 text-sm font-bold"><a className="flex items-center gap-3" href={phoneHref}><Phone className="size-4 text-citrus" /> 062396 04749</a><p className="flex items-center gap-3"><Clock3 className="size-4 text-citrus" /> Open · Closes 11 pm</p><a className="flex items-center gap-3" href={instagramHref} target="_blank" rel="noreferrer"><Instagram className="size-4 text-citrus" /> @gardencafeldh</a></div></address></div></section>
    </main>

    <footer className="bg-foreground px-5 py-9 text-cream"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><div><p className="font-display text-2xl">Garden Cafe</p><p className="mt-1 text-xs text-cream/55">Sarabha Nagar, Ludhiana</p></div><div className="flex gap-5 text-sm font-bold"><a href="#menu">Menu</a><a href="#reviews">Reviews</a><a href={instagramHref} target="_blank" rel="noreferrer">Instagram</a></div></div></footer>

    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background p-2 shadow-2xl md:hidden"><a href={phoneHref} className="focus-ring flex min-h-12 flex-col items-center justify-center gap-1 text-xs font-extrabold"><Phone className="size-4" />Call</a><a href={mapHref} target="_blank" rel="noreferrer" className="focus-ring flex min-h-12 flex-col items-center justify-center gap-1 text-xs font-extrabold"><MapPin className="size-4" />Directions</a><a href={phoneHref} className="focus-ring flex min-h-12 flex-col items-center justify-center gap-1 rounded-md bg-primary text-xs font-extrabold text-primary-foreground"><Star className="size-4" />Reserve</a></div>
  </div>;
}
