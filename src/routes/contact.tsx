import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Unicorn Rubbers | Jeedimetla, Hyderabad" },
      { name: "description", content: "Reach Unicorn Rubbers — Plot 748, Rami Reddy Nagar, IDA Jeedimetla, Hyderabad 500055. Phone +91 98485 68605. Email unicornhyderabad@gmail.com." },
      { property: "og:title", content: "Contact Unicorn Rubbers" },
      { property: "og:description", content: "Talk to our team for quotes, custom moulding and bulk industrial rubber orders." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const waMsg = encodeURIComponent("Hello Unicorn Rubbers, I'd like to discuss a requirement.");
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-3">Contact</div>
          <h1 className="font-display text-5xl md:text-6xl uppercase">Let's Talk Rubber.</h1>
          <p className="mt-4 max-w-xl text-white/70">
            Quotes, technical questions, custom moulding briefs or bulk inquiries — our team
            responds within one business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-5">
            {[
              { i: MapPin, t: "Visit Us", d: "Plot No. 748, Rami Reddy Nagar, IDA, Jeedimetla, Hyderabad – 500055, Telangana, India" },
              { i: Phone, t: "Call Us", d: "+91 98485 68605", href: "tel:+919848568605" },
              { i: Mail, t: "Email", d: "unicornhyderabad@gmail.com", href: "mailto:unicornhyderabad@gmail.com" },
              { i: MessageCircle, t: "WhatsApp", d: "Chat with our team", href: `https://wa.me/919848568605?text=${waMsg}` },
              { i: Clock, t: "Business Hours", d: "Mon – Sat · 9:30 AM – 6:30 PM" },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 p-5 border border-border rounded-lg bg-white">
                <div className="h-11 w-11 grid place-items-center rounded-md bg-ember/10 text-ember shrink-0">
                  <c.i className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                  {c.href ? (
                    <a href={c.href} className="font-semibold hover:text-ember">{c.d}</a>
                  ) : (
                    <div className="font-semibold">{c.d}</div>
                  )}
                </div>
              </div>
            ))}
            <div className="text-xs text-muted-foreground p-3">GSTIN: 36ATTPT3974E1ZY</div>
          </div>

          <div className="bg-secondary p-7 md:p-9 rounded-lg border border-border">
            <h2 className="font-display text-2xl md:text-3xl uppercase mb-5">Send an Inquiry</h2>
            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="aspect-[16/8] rounded-lg overflow-hidden border border-border">
            <iframe
              title="Unicorn Rubbers location"
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
    </>
  );
}
