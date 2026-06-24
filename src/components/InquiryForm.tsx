import { useState } from "react";
import { toast } from "sonner";

export function InquiryForm({ productName, compact = false }: { productName?: string; compact?: boolean }) {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const qty = String(fd.get("qty") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !phone) {
      toast.error("Please enter your name and phone number.");
      setSubmitting(false);
      return;
    }
    const text =
      `New Inquiry%0A` +
      (productName ? `Product: ${productName}%0A` : "") +
      `Name: ${name}%0A` +
      `Company: ${company}%0A` +
      `Phone: ${phone}%0A` +
      `Quantity: ${qty}%0A` +
      `Message: ${message}`;
    window.open(`https://wa.me/919848568605?text=${text}`, "_blank");
    toast.success("Inquiry prepared. Continue in WhatsApp to send.");
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}
    >
      <input name="name" placeholder="Full name *" className="h-11 px-4 rounded-md border border-input bg-white" />
      <input name="phone" placeholder="Phone *" className="h-11 px-4 rounded-md border border-input bg-white" />
      <input name="company" placeholder="Company" className="h-11 px-4 rounded-md border border-input bg-white" />
      <input name="qty" placeholder={productName ? "Required quantity" : "Product / quantity"} className="h-11 px-4 rounded-md border border-input bg-white" />
      <textarea
        name="message"
        rows={compact ? 3 : 4}
        placeholder="Specifications, sizes, application…"
        className={`px-4 py-3 rounded-md border border-input bg-white ${compact ? "" : "md:col-span-2"}`}
      />
      <button
        disabled={submitting}
        className={`h-12 bg-ember text-ember-foreground font-semibold rounded-md hover:opacity-90 transition ${compact ? "" : "md:col-span-2"}`}
      >
        {submitting ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
