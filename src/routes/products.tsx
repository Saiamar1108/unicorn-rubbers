import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const searchSchema = z.object({
  category: fallback(z.string(), "").default(""),
  q: fallback(z.string(), "").default(""),
  sort: fallback(z.enum(["default", "low", "high"]), "default").default("default"),
});

export const Route = createFileRoute("/products")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Industrial Rubber Products Catalogue | Unicorn Rubbers" },
      { name: "description", content: "Browse our complete catalogue of industrial rubber products: gaskets, O-rings, oil seals, bushes, bellows, sheets, cords and custom moulded components." },
      { property: "og:title", content: "Rubber Products Catalogue — Unicorn Rubbers" },
      { property: "og:description", content: "Industrial-grade rubber components engineered for OEMs and industries across India." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category, q, sort } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(q);

  const filtered = useMemo(() => {
    let list = products.slice();
    if (category) list = list.filter((p) => p.category === category);
    if (q) {
      const needle = q.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(needle) || p.category.toLowerCase().includes(needle));
    }
    if (sort === "low") list.sort((a, b) => (a.priceValue || Infinity) - (b.priceValue || Infinity));
    if (sort === "high") list.sort((a, b) => (b.priceValue || 0) - (a.priceValue || 0));
    return list;
  }, [category, q, sort]);

  return (
    <>
      <section className="bg-ink text-white py-16">
        <div className="container-page">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ember font-semibold mb-3">Product Catalogue</div>
          <h1 className="font-display text-4xl md:text-6xl uppercase">Industrial Rubber Products</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Precision-manufactured at our Hyderabad facility. Stock items and custom production with
            short lead times for bulk industrial buyers.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page grid lg:grid-cols-[260px_1fr] gap-10">
          {/* sidebar */}
          <aside className="space-y-7">
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") navigate({ search: (s) => ({ ...s, q: query }) });
                  }}
                  placeholder="Search products…"
                  className="w-full h-11 pl-9 pr-3 rounded-md border border-input bg-white"
                />
              </div>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-widest mb-3">Categories</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/products"
                    search={{ q: "", sort: "default", category: "" }}
                    className={`block px-3 py-2 rounded text-sm hover:bg-secondary ${!category ? "bg-secondary font-semibold" : ""}`}
                  >
                    All Products
                  </Link>
                </li>
                {categories.map((c) => (
                  <li key={c}>
                    <Link
                      to="/products"
                      search={{ q: "", sort: "default", category: c }}
                      className={`block px-3 py-2 rounded text-sm hover:bg-secondary ${category === c ? "bg-secondary font-semibold text-ember" : ""}`}
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-widest mb-3">Sort</h3>
              <select
                value={sort}
                onChange={(e) => navigate({ search: (s) => ({ ...s, sort: e.target.value as "default" | "low" | "high" }) })}
                className="w-full h-10 px-3 rounded-md border border-input bg-white text-sm"
              >
                <option value="default">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </aside>

          {/* grid */}
          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="text-sm text-muted-foreground">
                Showing <strong>{filtered.length}</strong> of {products.length} products
                {category && <> · <span className="text-ember font-semibold">{category}</span></>}
              </div>
            </div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center text-muted-foreground">No products match your filters.</div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
