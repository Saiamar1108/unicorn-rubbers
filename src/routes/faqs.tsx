import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Unicorn Rubbers" },
      { name: "description", content: "Answers to common questions about MOQ, lead time, custom moulding, materials, bulk orders, payments, shipping and warranty at Unicorn Rubbers." },
      { property: "og:title", content: "Frequently Asked Questions — Unicorn Rubbers" },
      { property: "og:description", content: "Everything you need to know before placing a rubber components order." },
    ],
  }),
  component: FAQs,
});

const faqs = [
  { q: "What is your minimum order quantity (MOQ)?", a: "MOQ depends on the product and tooling. Standard catalogue items typically start from 50–500 pieces. For custom moulded parts, MOQ is decided per drawing and compound. Share your requirement and we'll confirm." },
  { q: "What is the typical delivery / lead time?", a: "Stock items are dispatched in 2–5 working days. Bulk production runs take 7–15 days. Custom tooling adds 7–10 days for first article. Express timelines available on request." },
  { q: "Do you take custom moulding orders?", a: "Yes. Custom moulding is a core part of our business. Share a drawing, sample or sketch — we'll recommend compound, tooling and pricing." },
  { q: "Which rubber materials do you work with?", a: "Natural Rubber, NBR (Nitrile), EPDM, Neoprene (CR), SBR, Silicone (VMQ), Butyl, Hypalon and Polyurethane across 30–90 Shore A hardness." },
  { q: "Do you accept bulk and project orders?", a: "Absolutely. We regularly supply OEMs, EPC contractors, traders and large industrial buyers with monthly or project-based volumes." },
  { q: "What are your accepted payment methods?", a: "Bank transfer (NEFT/RTGS) and cheque. Credit terms are available to approved repeat customers." },
  { q: "Where do you ship?", a: "We dispatch across India through trusted logistics partners. Export despatch is supported on request." },
  { q: "Do your products carry a warranty?", a: "Yes. All products are warranted against manufacturing defects. Custom items carry first-article approval before bulk production." },
];

function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-3">Support</div>
          <h1 className="font-display text-5xl md:text-6xl uppercase">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page max-w-3xl">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <span className="font-display text-lg md:text-xl">{f.q}</span>
                    {isOpen ? <Minus className="h-5 w-5 text-ember shrink-0" /> : <Plus className="h-5 w-5 text-ember shrink-0" />}
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
