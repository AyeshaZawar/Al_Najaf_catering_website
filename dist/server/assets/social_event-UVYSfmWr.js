import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Phone, ArrowRight, X, Menu, Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
const links = [
  {
    label: "HOME",
    to: "/",
    hash: "home"
  },
  {
    label: "ABOUT US",
    to: "/AboutUs"
  },
  {
    label: "SERVICES",
    to: "/",
    hash: "Parties"
  },
  {
    label: "CONTACT US",
    to: "/ContactUs"
  }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? "bg-[#1a0e07]/80 backdrop-blur-md py-3" : "bg-transparent py-6"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-[1380px] mx-auto px-6 lg:px-12 flex items-center justify-between text-cream", children: [
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-10 flex-1", children: links.map((l) => /* @__PURE__ */ jsx(Link, { to: l.to, hash: l.hash, className: "whitespace-nowrap text-[11px] tracking-[0.26em] underline-grow hover:text-gold transition-colors duration-500", children: l.label }, l.label)) }),
          /* @__PURE__ */ jsx(Link, { to: links[0].to, hash: links[0].hash, className: "font-serif text-2xl tracking-[0.35em] flex-1 text-center", children: "LOGO" }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-7 flex-1 justify-end", children: [
            /* @__PURE__ */ jsxs("a", { href: "tel:+923343632414", className: "flex items-center gap-2 text-[12px] tracking-wider hover:text-gold transition-colors duration-500", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-gold" }),
              " +92 334 3632414"
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: links[3].to, hash: links[3].hash, className: "group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[11px] tracking-[0.26em] text-brown-deep font-semibold hover:bg-gold-bright transition-colors duration-500", children: [
              "GET A QUOTE",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => setOpen(!open), className: "lg:hidden p-2", "aria-label": "menu", children: open ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `lg:hidden overflow-hidden transition-all duration-500 bg-[#1a0e07]/95 backdrop-blur-md ${open ? "max-h-[420px] mt-3" : "max-h-0"}`, children: /* @__PURE__ */ jsxs("div", { className: "px-6 py-6 flex flex-col gap-5 text-cream", children: [
          links.map((l) => /* @__PURE__ */ jsx(Link, { to: l.to, hash: l.hash, onClick: () => setOpen(false), className: "text-xs tracking-[0.26em]", children: l.label }, l.label)),
          /* @__PURE__ */ jsxs("a", { href: "tel:+923343632414", className: "flex items-center gap-2 text-xs tracking-wider", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-gold" }),
            " +92 334 3632414"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#contact", onClick: () => setOpen(false), className: "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs tracking-[0.26em] text-brown-deep font-semibold w-fit", children: [
            "GET A QUOTE ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#3B1F08] text-[#F5EBDD] pt-24 pb-10 px-6 md:px-10 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr_0.8fr] gap-16 items-start", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[78px] md:text-[102px] leading-none text-[#D89B4D] tracking-[-2px] font-bold", children: "AL NAJAF" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mt-12", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[#D89B4D] transition", children: /* @__PURE__ */ jsx(Facebook, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[#D89B4D] transition", children: /* @__PURE__ */ jsx(Linkedin, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[#D89B4D] transition", children: /* @__PURE__ */ jsx(Instagram, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-[28px] text-[#F5EBDD] mb-8", children: "DISCOVER" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 text-[13px] font-semibold uppercase", children: [
            /* @__PURE__ */ jsx(Link, { to: "/", hash: "home", children: "Home" }),
            /* @__PURE__ */ jsx(Link, { to: "/AboutUs", children: "About Us" }),
            /* @__PURE__ */ jsx(Link, { to: "/", hash: "Parties", children: "Services" }),
            /* @__PURE__ */ jsx(Link, { to: "/", hash: "Dishes", children: "Menu" }),
            /* @__PURE__ */ jsx(Link, { to: "/", hash: "Video", children: "Video" }),
            /* @__PURE__ */ jsx(Link, { to: "/ContactUs", children: "Contact" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 text-[13px] font-semibold uppercase", children: [
            /* @__PURE__ */ jsx(Link, { to: "/", hash: "Parties", children: "Corporate" }),
            /* @__PURE__ */ jsx(Link, { to: "/wedding-menu", children: "Wedding" }),
            /* @__PURE__ */ jsx(Link, { to: "/religious-menu", children: "Religious" }),
            /* @__PURE__ */ jsx(Link, { to: "/parties-menu", children: "Parties" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-[28px] text-[#F5EBDD] mb-8", children: "CONTACT" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-[17px] leading-relaxed text-[#F5EBDD]/90", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "2972 Westheimer Rd. Santa",
            /* @__PURE__ */ jsx("br", {}),
            "Ana, Illinois 85486"
          ] }),
          /* @__PURE__ */ jsx("p", { children: "support@example.com" }),
          /* @__PURE__ */ jsx("p", { className: "text-[#D89B4D] text-[18px] font-medium tracking-normal", children: "++92 334 3632414" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-24 border-t border-[#5A3417]" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center mt-6", children: /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#F5EBDD]/80", children: "© 2024 Al Najaf Catering. All rights reserved." }) })
  ] }) });
}
const section2 = "/assets/social_event-dxXwkz0u.jpg";
export {
  Footer as F,
  Navbar as N,
  section2 as s
};
