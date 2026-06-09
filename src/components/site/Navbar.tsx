import { useEffect, useState } from "react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";


const links = [
  {
    label: "HOME",
    to: "/",
    hash: "home",
  },

  {
    label: "ABOUT US",
    to: "/AboutUs",
  },

  {
    label: "SERVICES",
    to: "/",
    hash: "Parties",
  },

  {
    label: "CONTACT US",
    to: "/ContactUs",
  },
];



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-[#1a0e07]/80 backdrop-blur-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12 flex items-center justify-between text-cream">
        <nav className="hidden lg:flex items-center gap-10 flex-1">
          {links.map((l) => (
            <Link key={l.label} to={l.to} hash={l.hash} className="whitespace-nowrap text-[11px] tracking-[0.26em] underline-grow hover:text-gold transition-colors duration-500">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to={links[0].to} hash={links[0].hash} className="font-serif text-2xl tracking-[0.35em] flex-1 text-center">
          LOGO
        </Link>
        <div className="hidden lg:flex items-center gap-7 flex-1 justify-end">
          <a href="tel:+923343632414" className="flex items-center gap-2 text-[12px] tracking-wider hover:text-gold transition-colors duration-500">
            <Phone className="w-4 h-4 text-gold" /> +92 334 3632414
          </a>
          <Link to={links[3].to} hash={links[3].hash} className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[11px] tracking-[0.26em] text-brown-deep font-semibold hover:bg-gold-bright transition-colors duration-500">
            GET A QUOTE
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div className={`lg:hidden overflow-hidden transition-all duration-500 bg-[#1a0e07]/95 backdrop-blur-md ${open ? "max-h-[420px] mt-3" : "max-h-0"}`}>
        <div className="px-6 py-6 flex flex-col gap-5 text-cream">
          {links.map((l) => (
            <Link key={l.label} to={l.to} hash={l.hash} onClick={() => setOpen(false)} className="text-xs tracking-[0.26em]">
              {l.label}
            </Link>
          ))}
          <a href="tel:+923343632414" className="flex items-center gap-2 text-xs tracking-wider"><Phone className="w-4 h-4 text-gold" /> +92 334 3632414</a>
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs tracking-[0.26em] text-brown-deep font-semibold w-fit">
            GET A QUOTE <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
