import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const displayImage = product.images?.[0] ?? product.image;

  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col bg-white border border-border rounded-lg overflow-hidden hover:border-ember hover:shadow-elevated transition-all"
    >
      <div className="aspect-[4/3] sm:aspect-square bg-secondary overflow-hidden">
        <img
          src={displayImage}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-5 sm:p-6 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="text-[10px] uppercase tracking-widest text-ember font-semibold">
          {product.category}
        </div>
        <h3 className="font-display text-lg leading-tight">{product.name}</h3>
        <div className="mt-auto pt-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-ember">
            Inquire <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
