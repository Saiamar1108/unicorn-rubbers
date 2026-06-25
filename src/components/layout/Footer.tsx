import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const logoSrc = "/__l5e/assets-v1/df58d25e-ba32-48fc-b559-2510d4fad2f3/unicorn_rubber_logo.jpg.png";
const logoFallback = "/favicon.ico";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-20">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logoSrc}
              alt="Unicorn Rubbers"
              className="h-12 w-auto bg-white p-1 rounded"
              onError={(event) => {
                event.currentTarget.src = logoFallback;
              }}
            />
            <div>
              <div className="text-white font-display text-lg">UNICORN RUBBERS</div>
              <div className="text-[10px] tracking-widest uppercase text-ember">Est. 14+ Years</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Manufacturer & supplier of precision-engineered industrial rubber products.
            Shaping quality and innovation in rubber since 2012.
          </p>
        </div>

        <div>
          <h4 className="text-white font-display tracking-wide mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-ember">About Us</Link></li>
            <li><Link to="/manufacturing" className="hover:text-ember">Manufacturing</Link></li>
            <li><Link to="/industries" className="hover:text-ember">Industries Served</Link></li>
            <li><Link to="/faqs" className="hover:text-ember">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-ember">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display tracking-wide mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" search={{ category: "Gaskets" }} className="hover:text-ember">Gaskets</Link></li>
            <li><Link to="/products" search={{ category: "O-Rings" }} className="hover:text-ember">O-Rings</Link></li>
            <li><Link to="/products" search={{ category: "Oil Seals" }} className="hover:text-ember">Oil Seals</Link></li>
            <li><Link to="/products" search={{ category: "Rubber Sheets" }} className="hover:text-ember">Rubber Sheets</Link></li>
            <li><Link to="/products" search={{ category: "Custom Molded" }} className="hover:text-ember">Custom Molded</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display tracking-wide mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-ember shrink-0" /> Plot No. 748, Rami Reddy Nagar, IDA, Jeedimetla, Hyderabad – 500055</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-ember shrink-0" /> <a href="tel:+919848568605" className="hover:text-ember">+91 98485 68605</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-ember shrink-0" /> <a href="mailto:unicornhyderabad@gmail.com" className="hover:text-ember">unicornhyderabad@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs flex flex-col md:flex-row justify-between gap-2 text-white/60">
          <div>© {new Date().getFullYear()} Unicorn Rubbers. All rights reserved. · GSTIN: 36ATTPT3974E1ZY</div>
          <div>Website by Bravix · Marketing contact: 7780186140</div>
        </div>
      </div>
    </footer>
  );
}
