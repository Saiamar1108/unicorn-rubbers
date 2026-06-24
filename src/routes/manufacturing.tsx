import { createFileRoute } from "@tanstack/react-router";
import { Beaker, Boxes, Cog, PackageCheck, Truck, ClipboardCheck } from "lucide-react";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing Process | Unicorn Rubbers" },
      { name: "description", content: "From validated raw material to traceable despatch — discover Unicorn Rubbers' six-stage industrial rubber manufacturing process." },
      { property: "og:title", content: "Manufacturing Process — Unicorn Rubbers" },
      { property: "og:description", content: "End-to-end rubber manufacturing process built around precision and traceability." },
    ],
  }),
  component: Manufacturing,
});

const steps = [
  { i: Beaker, t: "Raw Material Sourcing", d: "Elastomers, fillers and curatives are sourced from approved Indian and international suppliers. Each lot is tested for purity, viscosity and hardness before entering production." },
  { i: Cog, t: "Compounding & Moulding", d: "Validated compounds are mixed on internal mixers, sheeted out and moulded under controlled temperature and pressure in compression or transfer presses." },
  { i: Boxes, t: "Extrusion & Cutting", d: "Cords, beadings, profiles and sheets are extruded continuously, then cut, die-punched or water-jetted to the required dimensions." },
  { i: ClipboardCheck, t: "Quality Testing", d: "Every batch undergoes hardness, tensile, elongation, compression set and dimensional checks. Records are maintained for full traceability." },
  { i: PackageCheck, t: "Finishing & Packaging", d: "Deflashing, edge trimming, marking and bulk or carton packing with batch labelling to ease your inward inspection." },
  { i: Truck, t: "Despatch & Delivery", d: "Pan-India dispatch via trusted logistics partners with bulk and express options to meet your project timelines." },
];

function Manufacturing() {
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-3">Process</div>
          <h1 className="font-display text-5xl md:text-6xl uppercase">Six Steps. Zero Shortcuts.</h1>
          <p className="mt-5 max-w-2xl text-white/70">
            Our manufacturing process is engineered for repeatability. Every order — whether 100
            gaskets or 50,000 O-rings — flows through the same controlled pipeline.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page space-y-10">
          {steps.map((s, idx) => (
            <div key={s.t} className="grid md:grid-cols-[120px_1fr] gap-6 items-start pb-10 border-b border-border last:border-0 last:pb-0">
              <div>
                <div className="font-display text-7xl text-ember leading-none">{String(idx + 1).padStart(2, "0")}</div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <s.i className="h-7 w-7 text-ember" />
                  <h2 className="font-display text-2xl md:text-3xl uppercase">{s.t}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
