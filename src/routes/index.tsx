import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle2, Factory, Layers, MapPin, ShieldCheck, Truck, Wrench } from "lucide-react";
import hero from "@/assets/hero-factory.jpg";
import { featuredProducts, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unicorn Rubbers — Industrial Rubber Manufacturer | Hyderabad" },
      { name: "description", content: "16+ years manufacturing precision industrial rubber products: gaskets, O-rings, seals, bellows, bushes and custom moulded parts. Bulk supply across India." },
      { property: "og:title", content: "Unicorn Rubbers — Industrial Rubber Manufacturer" },
      { property: "og:description", content: "Precision rubber components for automotive, industrial, water, electrical and poultry industries." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { v: "16+", l: "Years of Expertise" },
  { v: "500+", l: "Industrial Clients" },
  { v: "10K+", l: "SKUs Delivered" },
  { v: "100%", l: "Quality Assured" },
];

const why = [
  { icon: Factory, t: "In-House Manufacturing", d: "Fully-equipped Hyderabad plant with moulding, extrusion and finishing under one roof." },
  { icon: ShieldCheck, t: "Quality-First Process", d: "Every batch tested for hardness, tensile, elongation and dimensional accuracy." },
  { icon: Wrench, t: "Custom Engineering", d: "Tooling, compounds and geometries developed to your drawings and applications." },
  { icon: Truck, t: "Reliable Bulk Supply", d: "Consistent on-time despatch pan-India for OEMs, EPCs and traders." },
];

const industries = ["Automotive", "Construction", "Agriculture", "Food", "Poultry", "Electrical", "Industrial Machinery", "Water Treatment"];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" />
        <div className="absolute inset-0 grid-noise opacity-40" />
        <div className="relative container-page py-24 md:py-36 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-ember font-semibold mb-5">
            <span className="h-px w-8 bg-ember" /> Established 2008 · Hyderabad
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] uppercase">
            Shaping Quality &<br />
            <span className="text-ember">Innovation</span> In Rubber
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            Precision-engineered industrial rubber products — gaskets, O-rings, seals, bellows, bushes
            and custom moulded components. Built for OEMs and industries that don't tolerate failure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex items-center gap-2 bg-ember text-ember-foreground px-6 py-3.5 font-semibold rounded-md hover:opacity-90">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3.5 font-semibold rounded-md hover:border-ember hover:text-ember">
              Request a Quote
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl text-ember">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 bg-secondary">
        <div className="container-page grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-3">Visit Our Factory</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Hyderabad Manufacturing Hub</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              Our Jeedimetla facility manufactures precision rubber components for automotive, water,
              electrical and industrial applications. Visit us for material demos, tooling reviews
              and quick sample approvals.
            </p>
            <div className="mt-8 grid gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-ember mt-1" />
                <div>Plot No. 748, Rami Reddy Nagar, IDA, Jeedimetla, Hyderabad – 500055</div>
              </div>
              <div className="text-sm">
                <span className="font-semibold">Phone:</span> <a href="tel:+919848568605" className="hover:text-ember">+91 98485 68605</a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border aspect-[16/10]">
            <iframe
              title="Unicorn Rubbers Hyderabad factory map"
              src="https://www.google.com/maps?q=Plot+No+748,+Rami+Reddy+Nagar,+IDA+Jeedimetla,+Hyderabad+500055&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-3">About Unicorn Rubbers</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">
              16+ Years Engineering<br />Rubber For Industry
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              From our Jeedimetla facility in Hyderabad, Unicorn Rubbers manufactures a full range of
              technical rubber components for automotive, water, electrical, food-processing and heavy
              industrial applications. We specialise in repeatable quality, custom compounds and
              short-lead-time supply for serious procurement teams.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {["ISO-grade compounds", "In-house tool room", "Bulk order capacity", "Pan-India dispatch"].map((x) => (
                <li key={x} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-ember" /> {x}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-ember hover:gap-3 transition-all">
              Discover our journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-ink rounded-lg overflow-hidden">
              <img src={hero} alt="Unicorn Rubbers manufacturing" className="h-full w-full object-cover opacity-90" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-ember text-ember-foreground p-6 rounded-lg shadow-ember max-w-[220px]">
              <Award className="h-7 w-7 mb-2" />
              <div className="font-display text-2xl leading-tight">Trusted by 500+ industrial buyers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-secondary">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-2">Product Range</div>
              <h2 className="font-display text-4xl md:text-5xl uppercase">Built For Every Application</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-ember inline-flex items-center gap-2">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((c) => (
              <Link
                key={c}
                to="/products"
                search={{ category: c }}
                className="group bg-white border border-border rounded-md p-5 hover:border-ember hover:shadow-elevated transition flex items-center justify-between"
              >
                <span className="font-display tracking-wide">{c}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-ember group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-ink text-white">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-2">Why Unicorn</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Engineered To Outperform</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {why.map((w) => (
              <div key={w.t} className="bg-ink p-7">
                <w.icon className="h-9 w-9 text-ember" />
                <h3 className="mt-5 font-display text-xl uppercase">{w.t}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-2">Featured</div>
              <h2 className="font-display text-4xl md:text-5xl uppercase">Most-Ordered Components</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-ember inline-flex items-center gap-2">
              See full catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {featuredProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-secondary">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-2">Industries Served</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Trusted Across Sectors</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {industries.map((i) => (
              <div key={i} className="bg-white p-6 rounded-md text-center border border-border hover:border-ember transition">
                <Layers className="h-7 w-7 text-ember mx-auto mb-2" />
                <div className="font-display tracking-wide">{i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-2">Get a Quote</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">
              Tell us what you<br />need to manufacture.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Share specifications, drawings or a sample requirement — our engineering team responds
              within one business day with pricing, lead time and material recommendations.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div>📞 <a href="tel:+919848568605" className="font-semibold hover:text-ember">+91 98485 68605</a></div>
              <div>✉️ <a href="mailto:unicornhyderabad@gmail.com" className="font-semibold hover:text-ember">unicornhyderabad@gmail.com</a></div>
            </div>
          </div>
          <div className="bg-secondary p-7 md:p-9 rounded-lg border border-border">
            <h3 className="font-display text-2xl uppercase mb-5">Quick Inquiry</h3>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
