import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const logoSrc = "/__l5e/assets-v1/df58d25e-ba32-48fc-b559-2510d4fad2f3/unicorn_rubber_logo.jpg.png";
const logoFallback = "/favicon.ico";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/industries", label: "Industries" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* top utility bar */}
      <div className="hidden md:block bg-ink text-white/80 text-xs">
        <div className="container-page flex justify-between py-2">
          <span>GSTIN: 36ATTPT3974E1ZY · Manufacturer & Supplier · Hyderabad</span>
          <div className="flex gap-5">
            <a href="tel:+919848568605" className="hover:text-ember">+91 98485 68605</a>
            <a href="mailto:unicornhyderabad@gmail.com" className="hover:text-ember">unicornhyderabad@gmail.com</a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all ${
          scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"
        } border-b border-border`}
      >
        <div className="container-page flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Unicorn Rubbers"
              className="h-14 w-auto"
              onError={(event) => {
                event.currentTarget.src = logoFallback;
              }}
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-xl tracking-wide">UNICORN RUBBERS</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Shaping Quality & Innovation
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-ember transition-colors [&.active]:text-ember"
                activeProps={{ className: "active" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919848568605"
              className="hidden md:inline-flex items-center gap-2 bg-ember text-ember-foreground px-4 py-2.5 text-sm font-semibold rounded-md hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="container-page py-3 flex flex-col gap-4">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 py-3">
                <img
                src={logoSrc}
                alt="Unicorn Rubbers"
                className="h-10 w-auto"
                onError={(event) => {
                  event.currentTarget.src = logoFallback;
                }}
              />
                <div>
                  <div className="font-display text-base tracking-wide">UNICORN RUBBERS</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Shaping Quality & Innovation
                  </div>
                </div>
              </Link>
              <div className="flex flex-wrap gap-2 pb-3 border-b border-border/60">
                <a
                  href="https://wa.me/919848568605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 flex-1 min-w-[150px] bg-[#25D366] text-white px-4 py-3 text-sm font-semibold rounded-md"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+919848568605"
                  className="inline-flex items-center justify-center gap-2 flex-1 min-w-[150px] bg-ember text-ember-foreground px-4 py-3 text-sm font-semibold rounded-md"
                >
                  Call Now
                </a>
              </div>
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium border-b border-border/60 last:border-0 [&.active]:text-ember"
                  activeProps={{ className: "active" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
