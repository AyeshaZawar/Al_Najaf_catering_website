import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronRight, Sparkles, Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { N as Navbar, s as section2, F as Footer } from "./social_event-UVYSfmWr.js";
import { d as dining, s as section3 } from "./weddings-BxtxYCSt.js";
import { s as section2_1, r as reserve } from "./reserve-DnaZGtLd.js";
import { P as PLATE_IMG } from "./icon-4-C6n2uvyn.js";
import "react";
import "@tanstack/react-router";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
function Index() {
  return /* @__PURE__ */ jsx("section", { id: "AboutUs", children: /* @__PURE__ */ jsxs("div", { className: "font-sans-lux bg-cream text-brown-deep overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative h-screen w-full overflow-hidden", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        scale: 1.15
      }, animate: {
        scale: 1
      }, transition: {
        duration: 8,
        ease: "easeOut"
      }, className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: `url(${section2})`
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" }),
      /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", animate: "show", variants: fadeUp, className: "relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-serif-lux text-6xl md:text-8xl tracking-[0.15em] font-medium", children: "ABOUT US" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-2 text-xs tracking-[0.3em] text-gold", children: [
          /* @__PURE__ */ jsx("span", { children: "HOME" }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/80", children: "ABOUT US" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-cream py-24 px-6 lg:px-10 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        amount: 0.3
      }, variants: fadeUp, className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold text-xs tracking-[0.3em] font-semibold mb-6", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" }),
          " ABOUT US"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif-lux text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-brown-deep", children: "WE PROVIDE CATERING SERVICE FOR ALL EVENTS SINCE 2011" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mt-12 max-w-md", children: [
          /* @__PURE__ */ jsx("img", { src: section2_1, alt: "Catering platter", className: "rounded-2xl shadow-2xl w-full hover:scale-[1.03] transition-transform duration-700" }),
          /* @__PURE__ */ jsx("img", { src: PLATE_IMG, alt: "Plate", className: "hidden md:block absolute -right-12 -bottom-12 w-48 h-48 rounded-full object-cover border-8 border-cream shadow-2xl hover:rotate-6 transition-transform duration-700" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        amount: 0.3
      }, variants: fadeUp, className: "space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl shadow-2xl", children: /* @__PURE__ */ jsx("img", { src: dining, alt: "Luxury dining", className: "w-full h-[480px] object-cover hover:scale-110 transition-transform duration-1000" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-brown-deep/70 text-base leading-relaxed max-w-lg", children: "We pour passion into every dish, transforming meals into memories. With a flair for detail, a deep love for hospitality, and a relentless pursuit of excellence in catering and event styling — every gathering becomes a story worth remembering." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative h-[80vh] w-full overflow-visible flex items-center justify-center", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center bg-fixed", style: {
        backgroundImage: `url(${reserve})`
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/55" }),
      /* @__PURE__ */ jsx("h3", { className: "absolute font-serif-lux text-[14vw] lg:text-[12vw] text-white/10 tracking-widest whitespace-nowrap select-none", children: "VIDEO AND" }),
      /* @__PURE__ */ jsx(motion.button, { whileHover: {
        scale: 1.1
      }, whileTap: {
        scale: 0.95
      }, className: "relative z-20 w-24 h-24 rounded-full backdrop-blur-md bg-white/20 border border-white/40 flex items-center justify-center shadow-2xl hover:bg-gold/40 transition-colors duration-500", children: /* @__PURE__ */ jsx(Play, { className: "w-8 h-8 text-white fill-white ml-1" }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-56 pb-32 overflow-visible", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: `url(${section3})`
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/35" }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 60
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.9
      }, className: "\n      absolute\n      left-1/2\n      top-0\n      -translate-x-1/2\n      -translate-y-1/2\n      z-30\n      w-[92%]\n      max-w-4xl\n    ", children: /* @__PURE__ */ jsxs("div", { className: "relative bg-[#ECE2D2] px-8 md:px-16 pt-24 pb-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)]", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 -top-16 -translate-x-1/2", children: /* @__PURE__ */ jsx("img", { src: section3, alt: "Wedding", className: "w-32 h-32 md:w-40 md:h-40 object-cover shadow-2xl" }) }),
        /* @__PURE__ */ jsxs("h2", { className: "font-serif-lux text-4xl md:text-6xl leading-[1.1] text-[#4B2E14]", children: [
          "UNFORGETTABLE",
          /* @__PURE__ */ jsx("br", {}),
          "CATERING FOR ANY",
          /* @__PURE__ */ jsx("br", {}),
          "OCCASION!"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-[#4B2E14]/70 text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto", children: "Whether it's an intimate gathering, a corporate event, or a grand celebration, our expert culinary team crafts exquisite menus using the finest ingredients and exceptional presentation." }),
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          y: 18
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.1,
          duration: 0.9
        }, className: "mt-12", children: /* @__PURE__ */ jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500", children: [
          "Book Now",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("img", { src: section3, alt: "Left Decor", className: "hidden lg:block w-[220px] h-[420px] object-cover opacity-90" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ jsx("img", { src: section3, alt: "Right Decor", className: "hidden lg:block w-[220px] h-[420px] object-cover opacity-90" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
export {
  Index as component
};
