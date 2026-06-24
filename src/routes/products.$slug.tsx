import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { getProductBySlug, relatedProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product, related: relatedProducts(params.slug) };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: p
        ? [
            { title: `${p.name} — ${p.price} | Unicorn Rubbers` },
            { name: "description", content: `${p.name} manufactured by Unicorn Rubbers. ${p.description}` },
            { property: "og:title", content: `${p.name} | Unicorn Rubbers` },
            { property: "og:description", content: p.description },
            { property: "og:image", content: p.image },
            { property: "og:type", content: "product" },
            { name: "twitter:image", content: p.image },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-4xl mb-3">Product not found</h1>
      <Link to="/products" className="text-ember font-semibold">Back to catalogue</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product, related } = Route.useLoaderData();
  const waMsg = encodeURIComponent(`Hello Unicorn Rubbers, I'd like a quote for: ${product.name} (${product.price})`);

  return (
    <>
      <section className="bg-secondary py-4 border-b border-border">
        <div className="container-page text-xs text-muted-foreground flex flex-wrap gap-2">
          <Link to="/" className="hover:text-ember">Home</Link> /
          <Link to="/products" className="hover:text-ember">Products</Link> /
          <Link to="/products" search={{ category: product.category, q: "", sort: "default" }} className="hover:text-ember">{product.category}</Link> /
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          {/* gallery */}
          <div>
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden border border-border">
              <img src={product.image} alt={product.name} className="h-full w-full object-contain p-10" />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-secondary rounded-md border border-border overflow-hidden">
                  <img src={product.image} alt="" className="h-full w-full object-contain p-3 opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* details */}
          <div>
            <Link to="/products" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-ember mb-4">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to catalogue
            </Link>
            <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-2">{product.category}</div>
            <h1 className="font-display text-4xl md:text-5xl uppercase leading-tight">{product.name}</h1>
            <div className="mt-5 flex items-center gap-3">
              <span className="font-display text-3xl text-ember">{product.price}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
                MOQ: {product.moq}
              </span>
            </div>
            <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>

            <dl className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm border-y border-border py-5">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Material</dt>
                <dd className="font-semibold mt-0.5">{product.material}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Sizes Available</dt>
                <dd className="font-semibold mt-0.5">{product.sizes}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Customization</dt>
                <dd className="font-semibold mt-0.5">Compound, hardness, dimensions per drawing</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Lead Time</dt>
                <dd className="font-semibold mt-0.5">7–15 days for bulk orders</dd>
              </div>
            </dl>

            <div className="mt-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Applications</div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {product.applications.map((a: string) => (
                  <li key={a} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-ember" /> {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/919848568605?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-md font-semibold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Quote
              </a>
              <a href="tel:+919848568605" className="inline-flex items-center gap-2 bg-ember text-ember-foreground px-5 py-3 rounded-md font-semibold">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* inquiry */}
      <section className="py-16 bg-secondary">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-2">Add to Inquiry</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase">Get pricing for {product.name}</h2>
            <p className="mt-4 text-muted-foreground">
              Share your required specifications and quantity — our team will revert with a final
              quote, technical datasheet and delivery schedule.
            </p>
          </div>
          <div className="bg-white p-7 rounded-lg border border-border">
            <InquiryForm productName={product.name} compact />
          </div>
        </div>
      </section>

      {/* related */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="container-page">
            <h2 className="font-display text-3xl uppercase mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p: typeof related[number]) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
