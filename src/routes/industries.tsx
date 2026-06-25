import { createFileRoute } from "@tanstack/react-router";
import { Car, Building2, Sprout, UtensilsCrossed, Bird, Zap, Cog, Droplets, Pill } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Unicorn Rubbers" },
      { name: "description", content: "Unicorn Rubbers supplies rubber components to automotive, construction, agriculture, food, poultry, electrical, defence, military, industrial machinery and water treatment sectors." },
      { property: "og:title", content: "Industries Served — Unicorn Rubbers" },
      { property: "og:description", content: "Industrial rubber products engineered for ten core sectors." },
    ],
  }),
  component: Industries,
});

const list = [
  { i: Car, t: "Automotive", d: "Engine seals, bushings, suspension components, wiring grommets and custom moulded NBR/EPDM parts for tier-1 and after-market suppliers." },
  { i: Building2, t: "Construction", d: "Bridge bearings, expansion joints, anti-vibration pads, sealing strips and rubber linings for construction and infrastructure projects." },
  { i: Sprout, t: "Agriculture", d: "Tractor and implement seals, sprayer diaphragms, hose components and tank gaskets for the agricultural equipment industry." },
  { i: UtensilsCrossed, t: "Food & Dairy", d: "FDA-grade silicone and EPDM seals, gaskets and tubing for dairy plants, beverage lines and food processing equipment." },
  { i: Bird, t: "Poultry", d: "Plucker fingers, conveyor components and food-safe rubber parts for poultry processing units across India." },
  { i: Zap, t: "Electrical", d: "Cable insulation, conductive rubber for ESD applications, panel gaskets and silicone heat-resistant sleeving." },
  { i: Cog, t: "Industrial Machinery", d: "Oil seals, bellows, anti-vibration mounts, gaskets and custom moulded parts for pumps, gearboxes and rotating equipment." },
  { i: Droplets, t: "Water Treatment", d: "Tank linings, check valves, flange gaskets and chemical-resistant components for ETP, STP and municipal water projects." },
  { i: Building2, t: "Defence", d: "Ballistic-grade seals, shock mounts and specialised rubber components for defense, aerospace and security equipment." },
  { i: Cog, t: "Military", d: "Rugged military-grade O-rings, grommets, seals and vibration control parts designed for harsh field environments." },
  { i: Pill, t: "Pharma", d: "Medical-grade seals, tubing and gaskets for pharmaceutical equipment, diagnostic devices and sterile manufacturing processes." },
];

function Industries() {
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-3">Sectors</div>
          <h1 className="font-display text-5xl md:text-6xl uppercase">Industries We Serve</h1>
          <p className="mt-5 max-w-2xl text-white/70">
            Eleven core sectors. Hundreds of applications. One quality standard.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {list.map((l) => (
            <div key={l.t} className="p-7 border border-border rounded-lg hover:border-ember hover:shadow-elevated transition bg-white">
              <l.i className="h-10 w-10 text-ember" />
              <h3 className="font-display text-2xl uppercase mt-4">{l.t}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{l.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
