import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-BNRxQOrM.js";
import { g as g2 } from "./menu-3-C2H4WEME.js";
import { s as steak } from "./icon-5-Dbfl-MLR.js";
import { P as PLATE_IMG } from "./icon-4-C6n2uvyn.js";
import { l as leaf, t as tomato } from "./icon-2-BMXariju.js";
import "@tanstack/react-router";
const DATA = {
  STARTERS: [{
    title: "Grilled Chicken Slider",
    desc: "Edamame Hummus on a Wonton Crisp and finished with Wasabi Peas"
  }, {
    title: "No Bake S'mores Cheesecake",
    desc: "Green roman salad, chicken breast, beetroot, olive oil."
  }, {
    title: "Cannoli Stuffed French Toast",
    desc: "Plum sauce with plum brandy, curd chips, caramelized plums"
  }, {
    title: "Blueberry Zucchini Bread",
    desc: "Banana cream, raspberries, banana sorbet,"
  }, {
    title: "No Bake S'mores Cheesecake",
    desc: "Homemade hash, white cabbage purée, potatoes"
  }, {
    title: "Chicken Parmigiana",
    desc: "Plum sauce with plum brandy, curd chips, caramelized plums"
  }, {
    title: "Shrimp and Corn Hush Puppies",
    desc: "Banana cream, raspberries, banana sorbet,"
  }, {
    title: "Pasta with Pesto Cream Sauce",
    desc: "Green roman salad, chicken breast, beetroot, olive oil."
  }],
  "MAINS COURSE": [{
    title: "Braised Short Rib",
    desc: "Slow cooked with red wine reduction, root vegetables, herbed polenta."
  }, {
    title: "Pan-Seared Sea Bass",
    desc: "Lemon butter sauce, asparagus tips, saffron risotto."
  }, {
    title: "Herb Crusted Lamb Rack",
    desc: "Rosemary jus, garlic confit, seasonal greens."
  }, {
    title: "Truffle Mushroom Ravioli",
    desc: "Hand-folded pasta, shaved parmesan, brown butter."
  }, {
    title: "Grilled Filet Mignon",
    desc: "Bordelaise sauce, gratin dauphinois, glazed carrots."
  }],
  DESSERTS: [{
    title: "Vanilla Bean Crème Brûlée",
    desc: "Caramelized sugar crust, fresh berries, mint."
  }, {
    title: "Dark Chocolate Fondant",
    desc: "Molten center, vanilla ice cream, raspberry coulis."
  }, {
    title: "Tiramisu Classico",
    desc: "Espresso soaked ladyfingers, mascarpone, cocoa dust."
  }, {
    title: "Lemon Tart",
    desc: "Buttery shortcrust, torched meringue, candied zest."
  }],
  BEVERAGES: [{
    title: "Signature Rose Lemonade",
    desc: "House made, fresh mint, sparkling water."
  }, {
    title: "Cold Brew Coffee",
    desc: "24-hour steeped, served over a clear sphere of ice."
  }, {
    title: "Hibiscus Iced Tea",
    desc: "Lightly sweetened, citrus peel, dried hibiscus."
  }, {
    title: "Cucumber Mint Cooler",
    desc: "Cucumber pressed, lime, soda, garden mint."
  }]
};
const TABS = ["STARTERS", "MAINS COURSE", "DESSERTS", "BEVERAGES"];
function PartiesMenuPage() {
  const [active, setActive] = useState("STARTERS");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative h-[70vh] min-h-[460px] md:h-[560px] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: g2, alt: "Elegant parties table setup", className: "h-full w-full object-cover animate-slow-zoom" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex flex-col items-center justify-center px-6 text-center text-white", children: [
        /* @__PURE__ */ jsx(motion.h1, { initial: {
          y: 30,
          opacity: 0
        }, animate: {
          y: 0,
          opacity: 1
        }, transition: {
          duration: 0.9
        }, className: "font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.05em]", children: "PARTIES MENU" }),
        /* @__PURE__ */ jsx(motion.nav, { initial: "hidden", animate: "show", variants: {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.4
            }
          }
        }, className: "mt-6 flex items-center gap-3 text-[11px] sm:text-xs tracking-[0.3em]", children: ["HOME", "MENUS", "PARTIES MENU"].map((c, i, arr) => /* @__PURE__ */ jsxs(motion.span, { variants: {
          hidden: {
            opacity: 0,
            y: 8
          },
          show: {
            opacity: 1,
            y: 0
          }
        }, className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: i === arr.length - 1 ? "text-gold" : "", children: c }),
          i < arr.length - 1 && /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3 text-gold" })
        ] }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-20 md:py-28 overflow-x-hidden overflow-y-visible", children: /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "\n        relative\n        overflow-visible\n        mx-auto\n        w-full\n        lg:w-[78%]\n        rounded-[32px]\n        bg-cream/55\n        backdrop-blur-xl\n        shadow-[0_20px_60px_rgba(0,0,0,0.08)]\n        px-5\n        sm:px-10\n        md:px-16\n        py-12\n        md:py-16\n        z-20\n      ", children: [
      /* @__PURE__ */ jsx(motion.img, { src: steak, alt: "", "aria-hidden": true, initial: {
        opacity: 0,
        x: 40
      }, whileInView: {
        opacity: 0.55,
        x: 0
      }, transition: {
        duration: 0.8
      }, className: "\n          hidden lg:block\n          absolute\n          right-[-130px]\n          top-[140px]\n          w-[300px]\n          z-10\n          pointer-events-none\n        " }),
      /* @__PURE__ */ jsx(motion.img, { src: PLATE_IMG, alt: "", "aria-hidden": true, initial: {
        opacity: 0,
        x: -40
      }, whileInView: {
        opacity: 0.55,
        x: 0
      }, transition: {
        duration: 0.8
      }, className: "\n          hidden lg:block\n          absolute\n          left-[-140px]\n          bottom-[-40px]\n          w-[250px]\n          z-10\n          pointer-events-none\n        " }),
      /* @__PURE__ */ jsx("img", { src: leaf, alt: "", "aria-hidden": true, className: "\n          hidden md:block\n          absolute\n          left-[-60px]\n          top-[45%]\n          w-24\n          opacity-70\n          z-10\n          pointer-events-none\n        " }),
      /* @__PURE__ */ jsx("img", { src: tomato, alt: "", "aria-hidden": true, className: "\n          hidden md:block\n          absolute\n          left-[-95px]\n          top-[56%]\n          w-14\n          opacity-80\n          z-10\n          pointer-events-none\n        " }),
      /* @__PURE__ */ jsx("div", { className: "relative z-20 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar", children: TABS.map((tab) => {
        const isActive = tab === active;
        return /* @__PURE__ */ jsxs("button", { onClick: () => setActive(tab), className: "relative shrink-0 px-5 sm:px-7 py-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-semibold", children: [
          isActive && /* @__PURE__ */ jsx(motion.span, { layoutId: "active-pill", transition: {
            type: "spring",
            stiffness: 280,
            damping: 28
          }, className: "absolute inset-0 rounded-full bg-gold" }),
          /* @__PURE__ */ jsx("span", { className: `relative ${isActive ? "text-primary-foreground" : "text-foreground/70"}`, children: tab })
        ] }, tab);
      }) }) }),
      /* @__PURE__ */ jsx("div", { className: "relative z-20 mt-10 sm:mt-12", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(motion.ul, { initial: "hidden", animate: "show", exit: {
        opacity: 0,
        y: -8,
        transition: {
          duration: 0.2
        }
      }, variants: {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.06
          }
        }
      }, className: "divide-y divide-foreground/10", children: DATA[active].map((item) => /* @__PURE__ */ jsxs(motion.li, { variants: {
        hidden: {
          opacity: 0,
          y: 14
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: "easeOut"
          }
        }
      }, className: "group py-5 sm:py-6 transition-all duration-300 hover:pl-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif-display text-xl sm:text-2xl text-foreground transition-colors group-hover:text-gold", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: item.desc })
      ] }, item.title)) }, active) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PartiesMenuPage as component
};
