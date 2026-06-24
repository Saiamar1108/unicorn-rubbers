import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, Goal, ShieldCheck, Factory, Wrench, Boxes } from "lucide-react";
import hero from "@/assets/hero-factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Unicorn Rubbers — 16+ Years Industrial Rubber Manufacturer" },
      { name: "description", content: "Unicorn Rubbers is a Hyderabad-based manufacturer of industrial rubber components with 16+ years of expertise, in-house tooling and end-to-end quality control." },
      { property: "og:title", content: "About Unicorn Rubbers" },
      { property: "og:description", content: "16+ years engineering rubber components for industrial India." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative bg-ink text-white py-24 overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-ink/60" />
        <div className="container-page relative">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-3">About Us</div>
          <h1 className="font-display text-5xl md:text-7xl uppercase max-w-3xl leading-[1]">
            Built On Precision.<br />Driven By Industry.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl uppercase">Our Story</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Unicorn Rubbers was founded in 2008 in Jeedimetla, Hyderabad — one of India's largest
              industrial estates — with a single objective: deliver rubber components that industrial
              buyers can rely on, batch after batch. Over 16+ years we have grown into a trusted
              manufacturer and supplier serving OEMs, contractors, EPC companies and trading houses
              across the country.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every component we ship is the result of disciplined process control: validated raw
              material, calibrated tooling, in-process inspection and final quality sign-off. That
              discipline is why our customers keep coming back — and why they bring their toughest
              custom requirements to us.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl uppercase">Manufacturing Expertise</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We work with the complete family of industrial elastomers — Natural Rubber, NBR, EPDM,
              Neoprene, SBR, Silicone, Butyl and Polyurethane — across hardness ranges from 30 to 90
              Shore A. Our facility houses compression and transfer moulding presses, extrusion
              lines, die-cutting, lining bays and finishing operations under one roof.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From a standard O-ring to a project-scale tank lining, the same engineering rigour
              applies — drawings reviewed, compounds selected, tools validated, output inspected.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { i: Goal, t: "Our Mission", d: "Manufacture industrial rubber components of uncompromising quality, supplied on time, at fair industrial pricing." },
            { i: Eye, t: "Our Vision", d: "To be India's most trusted partner for technical rubber components — known equally for standards and customisation." },
            { i: ShieldCheck, t: "Quality Standards", d: "Every batch tested for hardness, tensile strength, elongation and dimensional accuracy before despatch." },
          ].map((b) => (
            <div key={b.t} className="bg-white p-7 border border-border rounded-lg">
              <b.i className="h-9 w-9 text-ember" />
              <h3 className="font-display text-xl uppercase mt-4">{b.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-2">Production</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Capabilities & Machinery</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { i: Factory, t: "Compression & Transfer Moulding", d: "Multi-cavity presses for high-volume moulded parts up to 600mm OD." },
              { i: Wrench, t: "In-House Tool Room", d: "Custom mould design and fabrication — concept to first article in days, not weeks." },
              { i: Boxes, t: "Extrusion & Die-Cutting", d: "Continuous extrusion of cords, beadings, profiles and precision die-cut gaskets." },
              { i: Award, t: "Material Lab", d: "Hardness, tensile and ageing tests on every production batch." },
              { i: ShieldCheck, t: "Rubber Lining Bay", d: "On-site and shop application of tank linings for chemical and process industries." },
              { i: Factory, t: "Finishing & Inspection", d: "Deflashing, trimming, dimensional inspection and traceable batch packing." },
            ].map((c) => (
              <div key={c.t} className="bg-white p-6">
                <c.i className="h-7 w-7 text-ember" />
                <h3 className="font-display text-lg uppercase mt-3">{c.t}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
