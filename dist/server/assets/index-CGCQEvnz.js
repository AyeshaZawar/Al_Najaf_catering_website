import { jsx, jsxs } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-BNRxQOrM.js";
import { useScroll, useMotionValue, useSpring, motion, useTransform } from "framer-motion";
import { ArrowRight, Eye, ArrowUpRight, Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { a as aboutSmall, g as g1 } from "./weddings-D-4RebdB.js";
import { l as leaf, t as tomato } from "./icon-2-BMXariju.js";
import { s as section2, r as reserve } from "./reserve-COW_t4qc.js";
import { s as section2_1, b as bg$1 } from "./video-nXtd-USx.js";
import { m as m1 } from "./menu-2-5Vf-wx5L.js";
import { g as g2 } from "./menu-3-C2H4WEME.js";
import { m as m4 } from "./menu-4-T5SFNQNt.js";
import { s as supabase } from "./supabase-CzlEHgCy.js";
import "@tanstack/react-router";
import "@supabase/supabase-js";
const bg = "/assets/hero-bg-CCNWGWFn.jpeg";
const plate = "/assets/icon-1-DZq-dIX7.png";
function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const rotateValue = useMotionValue(0);
  const smoothRotate = useSpring(rotateValue, {
    stiffness: 45,
    damping: 20,
    mass: 1
  });
  const plateY = useSpring(0, {
    stiffness: 30,
    damping: 20
  });
  useEffect(() => {
    let lastScroll = 0;
    return scrollY.on("change", (latest) => {
      const diff = latest - lastScroll;
      if (diff > 0) {
        rotateValue.set(rotateValue.get() + diff * 0.12);
      }
      if (diff < 0) {
        rotateValue.set(rotateValue.get() + diff * 0.12);
      }
      plateY.set(-latest * 0.04);
      lastScroll = latest;
    });
  }, [scrollY, rotateValue, plateY]);
  return /* @__PURE__ */ jsx("section", { id: "home", children: /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      id: "home",
      className: "relative min-h-[105vh] flex items-center justify-center overflow-visible text-cream",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 zoom-slow", children: /* @__PURE__ */ jsx("img", { src: bg, alt: "", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#1a0e07]/72" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#1a0e07]/55 via-[#1a0e07]/65 to-[#1a0e07]/90" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center px-6 max-w-5xl pt-28", children: [
          /* @__PURE__ */ jsxs(
            motion.p,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3, duration: 1 },
              className: "eyebrow text-white mb-7 flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-white text-[10px]", children: "✦" }),
                "THE BEST EVENTS START HERE"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 36 },
              animate: { opacity: 1, y: 0 },
              transition: {
                delay: 0.45,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              },
              className: "font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.98]",
              children: "CREATION OF MEMORABLE EVENTS"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 18 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.1, duration: 0.9 },
              className: "mt-12",
              children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#contact",
                  className: "group inline-flex items-center gap-3 rounded-full bg-gold hover:bg-gold-bright px-8 py-4 text-[11px] tracking-[0.28em] text-brown-deep font-semibold transition-all duration-500",
                  children: [
                    "BOOK A NOW",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" })
                  ]
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: {
              delay: 1,
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1]
            },
            style: {
              rotate: smoothRotate,
              y: plateY
            },
            className: "absolute bottom-4 right-4 \n        w-32 md:-bottom-20 md:right-8 \n        md:w-48 lg:-bottom-24 lg:right-24 \n        lg:w-64 z-30 will-change-transform",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: plate,
                alt: "",
                className: "w-full h-auto rounded-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
              }
            )
          }
        )
      ]
    }
  ) });
}
function Reveal({ children, delay = 0, y = 30, className = "" }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      children
    }
  );
}
const aboutTall = "/assets/about-tall-CST5F7h2.jpeg";
function About() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "about",
      className: "\n        relative\n        bg-cream\n        pt-40\n        pb-28\n        lg:pt-48\n        lg:pb-32\n        overflow-hidden\n      ",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1280px] mx-auto px-6", children: [
        /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("p", { className: "eyebrow text-center text-brown/70 mb-6 flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-brown-deep text-[10px]", children: "✧" }),
          "WHO ARE WE"
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: leaf,
              alt: "",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.1, duration: 1 },
              className: "\n                hidden\n                md:block\n                absolute\n                left-10\n                lg:-left-26\n                -top-30\n                lg:-top-38\n                w-20\n                lg:w-32\n                z-20\n                float-leaf\n                rotate-[-18deg]\n              "
            }
          ),
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: tomato,
              alt: "",
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 1.3, duration: 1 },
              className: "\n                hidden\n                md:block\n                absolute\n                left-4\n                lg:-left-46\n                -top-6\n                lg:-top-10\n                w-16\n                lg:w-24\n                z-20\n                rotate-[8deg]\n              "
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "relative font-serif text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown-deep max-w-5xl mx-auto leading-[1.02] tracking-[-0.01em] text-balance", children: "WE HAVE PROFESSIONAL CATERING TEAMS IN AL NAJAF" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-start", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "md:col-span-4 space-y-8", children: [
            /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-md group", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: aboutSmall,
                alt: "Catering team",
                className: "\n                  w-full\n                  h-52\n                  object-cover\n                  transition-transform\n                  duration-[1200ms]\n                  group-hover:scale-110\n                "
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-serif text-7xl text-brown-deep leading-none", children: "2011" }),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[0.28em] text-brown/60 mt-3", children: "SINCE" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { delay: 0.2, className: "md:col-span-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl lg:text-[1.65rem] text-brown-deep leading-snug", children: "EVERY EVENT IS A UNIQUE OPPORTUNITY TO CRAFT A CULINARY EXPERIENCE AS EXTRAORDINARY AS DELICIOUS." }),
            /* @__PURE__ */ jsx("p", { className: "mt-7 text-sm leading-[1.85] text-brown/75", children: "A meeting or celebration is a unique and unforgettable event! In Al Najaf we have a team of event planners, we take care of the design, creative and innovative work, planning, coordination and organization of all kinds of social and corporate events." })
          ] }),
          /* @__PURE__ */ jsx(Reveal, { delay: 0.3, className: "md:col-span-4", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-md group", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: aboutTall,
              alt: "Elegant table setup",
              className: "\n                  w-full\n                  h-[460px]\n                  object-cover\n                  transition-transform\n                  duration-[1200ms]\n                  group-hover:scale-110\n                "
            }
          ) }) })
        ] })
      ] })
    }
  );
}
const dining = "/assets/corporate-C9ONWnRY.jpeg";
const g3 = "/assets/parties-DGZHOdpG.jpeg";
const sections = [
  {
    image: dining,
    circleImage: dining,
    title: "CORPORATE",
    desc: "Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",
    panel: "rgba(243,238,232,0.38)"
  },
  {
    image: section2,
    circleImage: section2_1,
    title: "SOCIAL EVENTS",
    desc: "Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",
    panel: "rgba(224,220,215,0.48)"
  },
  {
    image: g1,
    circleImage: g1,
    title: "WEDDINGS",
    desc: "Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",
    panel: "rgba(208,204,200,0.58)"
  },
  {
    image: g3,
    circleImage: g3,
    title: "PARTIES",
    desc: "Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",
    panel: "rgba(190,188,185,0.70)"
  }
];
function CinematicStackedSections() {
  const pinnedRef = useRef(null);
  const layersRef = useRef([]);
  const overlaysRef = useRef([]);
  useEffect(() => {
    let cleanup = () => {
    };
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const layers = layersRef.current.filter(Boolean);
        const overlays = overlaysRef.current.filter(Boolean);
        if (!layers.length) return;
        gsap.set(layers, {
          clipPath: "inset(100% 0% 0% 0%)",
          force3D: true,
          willChange: "clip-path"
        });
        gsap.set(layers[0], {
          clipPath: "inset(0% 0% 0% 0%)"
        });
        gsap.set(overlays, {
          opacity: 0
        });
        const transitionCount = sections.length - 1;
        const totalScrollPx = transitionCount * window.innerHeight * 0.95;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinnedRef.current,
            start: "top top",
            end: `+=${totalScrollPx}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });
        layers.forEach((layer, i) => {
          if (i === 0) return;
          const prevOverlay = overlays[i - 1];
          tl.fromTo(
            layer,
            {
              clipPath: "inset(100% 0% 0% 0%)"
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1,
              ease: "none",
              force3D: true
            }
          );
          tl.to(
            prevOverlay,
            {
              opacity: 0.32,
              duration: 1,
              ease: "none"
            },
            "<"
          );
        });
        layers.forEach((layer, i) => {
          const imgs2 = layer.querySelectorAll(".parallax-img");
          if (!imgs2.length) return;
          const tlStart = i === 0 ? 0 : i - 1;
          const tlEnd = i === sections.length - 1 ? transitionCount : i;
          const dur = tlEnd - tlStart;
          if (dur <= 0) return;
          tl.fromTo(
            imgs2,
            {
              yPercent: 2.5,
              scale: 1.08
            },
            {
              yPercent: -2.5,
              scale: 1.03,
              ease: "none",
              duration: dur,
              force3D: true
            },
            tlStart
          );
        });
        ScrollTrigger.refresh();
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 300);
        cleanup = () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      }
    );
    return () => cleanup();
  }, []);
  return /* @__PURE__ */ jsx("section", { id: "Parties", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref: pinnedRef,
      className: "relative bg-[#140B07] overflow-visible isolate",
      style: {
        height: "100vh"
      },
      children: sections.map((section, index) => /* @__PURE__ */ jsx(
        "div",
        {
          ref: (el) => {
            if (el) layersRef.current[index] = el;
          },
          className: "absolute inset-0 overflow-hidden isolate",
          style: {
            zIndex: index + 1,
            willChange: "clip-path",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
            overflow: "hidden",
            clipPath: "inset(100% 0% 0% 0%)"
          },
          children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-screen overflow-visible", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "\n                absolute\n                top-0\n                left-0\n                w-full\n                pointer-events-none\n                z-[999]\n              ",
                style: {
                  top: "-12px",
                  height: "2px",
                  boxShadow: "0 -60px 120px rgba(0, 0, 0, 0.94)"
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-visible", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "\n                  absolute\n                  left-0\n                  top-0\n                  h-full\n                  overflow-hidden\n                  w-[100%]\n                  sm:w-[100%]\n                  lg:w-[100%]\n                ",
                  style: {
                    transform: "translateZ(0)"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: section.image,
                        alt: "",
                        draggable: false,
                        className: "\n                    parallax-img\n                    w-full\n                    h-full\n                    object-cover\n                    scale-[1.12]\n                    will-change-transform\n                  ",
                        style: {
                          objectPosition: "left center",
                          filter: "blur(1px)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        ref: (el) => {
                          if (el) overlaysRef.current[index] = el;
                        },
                        className: "absolute inset-0 bg-black/50"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "\n                  absolute\n                  right-0\n                  top-0\n                  h-full\n                  overflow-hidden\n                  w-[100%]\n                  sm:w-[100%]\n                  lg:w-[100%]\n                ",
                  style: {
                    transform: "translateZ(0)"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: section.image,
                        alt: "",
                        draggable: false,
                        className: "\n                    parallax-img\n                    w-full\n                    h-full\n                    object-cover\n                    scale-[1.12]\n                    will-change-transform\n                  ",
                        style: {
                          objectPosition: "right center",
                          filter: "blur(1px)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "\n                    absolute\n                    left-1/2\n                    top-1/2\n                    -translate-x-1/2\n                    -translate-y-1/2\n                \n                    h-[65vh]\n                   sm:h-[75vh]\n                    lg:h-full\n                \n                    flex\n                    flex-col\n                    overflow-hidden\n                    items-center\n                    justify-center\n                \n                    backdrop-blur-[8px]\n                \n                    rounded-[30px]\n                    sm:rounded-[36px]\n                    lg:rounded-none\n                \n                    w-[78%]\n                    sm:w-[75%]\n                    md:w-[60%]\n                    lg:w-[40vw]\n                \n                    px-5\n                    sm:px-8\n                    lg:px-10\n                \n                    py-8\n                  ",
                  style: {
                    maxWidth: "460px",
                    zIndex: 20,
                    background: section.panel,
                    borderLeft: "1px solid rgba(255,255,255,0.14)",
                    borderRight: "1px solid rgba(255,255,255,0.14)",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    contain: "layout paint"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "\n                    rounded-full\n                    overflow-hidden\n                    shrink-0\n                  ",
                        style: {
                          width: "clamp(150px, 32vw, 360px)",
                          height: "clamp(150px, 32vw, 360px)",
                          boxShadow: "0 25px 80px rgba(0,0,0,0.18)"
                        },
                        children: /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: section.circleImage,
                            alt: section.title,
                            draggable: false,
                            className: "\n                      w-full\n                      h-full\n                      object-cover\n                      scale-[1.08]\n                    "
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "text-center mt-5 sm:mt-7 lg:mt-12 px-2", children: [
                      /* @__PURE__ */ jsx(
                        "h2",
                        {
                          className: "\n                        font-serif\n                        uppercase\n                        tracking-[0.08em]\n                        text-[clamp(1.5rem,4vw,4rem)]\n                        break-words\n                    ",
                          style: {
                            fontSize: "clamp(1.5rem, 4vw, 4rem)",
                            lineHeight: 1,
                            color: "#f8f6f3",
                            textShadow: "0 4px 25px rgba(0,0,0,0.15)"
                          },
                          children: section.title
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: "\n                      mt-4\n                      sm:mt-5\n                      lg:mt-6\n                      leading-relaxed\n                      mx-auto\n                      font-light\n                    ",
                          style: {
                            maxWidth: "340px",
                            fontSize: "clamp(0.72rem, 2.2vw, 1rem)",
                            color: "rgba(255,255,255,0.72)"
                          },
                          children: section.desc
                        }
                      )
                    ] })
                  ]
                }
              )
            ] })
          ] })
        },
        index
      ))
    }
  ) });
}
const foodIcon = "data:image/png;base64,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";
const flavorIcon = "data:image/png;base64,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";
const bowl = "/assets/icon-0-CdI-z-oU.png";
function Speciality() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [-6, 10]), {
    stiffness: 22,
    damping: 30,
    mass: 1.1
  });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [-8, 82]), {
    stiffness: 24,
    damping: 32,
    mass: 1.05
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [10, -14]), {
    stiffness: 22,
    damping: 30,
    mass: 1.05
  });
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref: sectionRef,
      id: "services",
      className: "\n        relative\n        bg-cream\n        py-28\n        lg:py-36\n        overflow-hidden\n      ",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "\n    max-w-[1450px]\n    mx-auto\n    px-6\n    grid\n    grid-cols-1\n    lg:grid-cols-12\n    gap-6\n    lg:gap-8\n    items-center\n  ",
          children: [
            /* @__PURE__ */ jsxs(Reveal, { y: 20, className: "lg:col-span-6", children: [
              /* @__PURE__ */ jsxs("p", { className: "eyebrow text-brown/70 mb-5 flex items-center gap-2 uppercase tracking-[0.2em] text-[11px]", children: [
                /* @__PURE__ */ jsx("span", { className: "text-brown-deep text-[10px]", children: "✧" }),
                "SPECIALITY"
              ] }),
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: "\n      font-serif\n      text-[42px]\n      sm:text-[54px]\n      md:text-[64px]\n      text-[#5b4636]\n      leading-[0.98]\n      tracking-[-0.03em]\n      uppercase\n    ",
                  children: "UNFORGETTABLE CATERING FOR ANY OCCASION WITH OUR SPECIALITY!"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("img", { src: foodIcon, alt: "", className: "w-10 h-10 object-contain opacity-80" }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                      "p",
                      {
                        className: "\n        font-serif\n        text-[27px]\n        leading-[0.95]\n        text-[#7a624f]\n        uppercase\n      ",
                        children: [
                          "Premium",
                          /* @__PURE__ */ jsx("br", {}),
                          "Dining"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "\n          mt-4\n          text-[13px]\n          leading-[1.7]\n          text-[#8b7c6d]\n          max-w-[240px]\n        ",
                      children: "Allow customers to book reservations with automated confirmations."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("img", { src: flavorIcon, alt: "", className: "w-10 h-10 object-contain opacity-80" }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                      "p",
                      {
                        className: "\n        font-serif\n        text-[27px]\n        leading-[0.95]\n        text-[#7a624f]\n        uppercase\n      ",
                        children: [
                          "Abundant",
                          /* @__PURE__ */ jsx("br", {}),
                          "Flavors"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "\n          mt-4\n          text-[13px]\n          leading-[1.7]\n          text-[#8b7c6d]\n          max-w-[240px]\n        ",
                      children: "Our experienced real estate experts guide you through every."
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-9 border-t border-[#ddd2bf]" }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "\n      mt-7\n      text-[14px]\n      text-[#7f7266]\n      leading-[1.9]\n      max-w-[620px]\n    ",
                  children: "At our restaurant, dining is more than just eating, it's an experience. We blend creativity, flavor, and passion to bring you dishes that delight the senses. From our carefully curated menu to our warm and inviting atmosphere."
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 18 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 1.1, duration: 0.9 },
                  className: "mt-12",
                  children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#contact",
                      className: "group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500",
                      children: [
                        "Book Now",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" })
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Reveal, { delay: 0.2, y: 20, className: "lg:col-span-6 relative", children: [
              /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-md luxe-shadow", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: dining,
                  alt: "Luxury dining",
                  className: "\n                w-full\n                h-[580px]\n                object-cover\n              "
                }
              ) }),
              /* @__PURE__ */ jsx(
                motion.img,
                {
                  src: bowl,
                  alt: "",
                  style: {
                    rotate,
                    x,
                    y
                  },
                  className: "\n              absolute\n\n              bottom-[-65px]\n              left-[-20px]\n\n              sm:bottom-[-70px]\n              sm:left-[-25px]\n\n              lg:bottom-[-85px]\n              lg:left-[-95px]\n\n              w-44\n              sm:w-52\n              lg:w-85\n\n              rounded-full\n\n              plate-breathe\n              will-change-transform\n              pointer-events-none\n              select-none\n\n              drop-shadow-[0_30px_45px_rgba(0,0,0,0.35)]\n\n              z-20\n            "
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
const cards = [
  {
    img: m1,
    title: "RELIGIOUS\nMENU",
    desc: "Crafted cocktails, wines, and soft pairings.",
    link: "/religious-menu"
  },
  {
    img: g2,
    title: "PARTIES\nMENU",
    desc: "Crafted cocktails, wines, and soft pairings.",
    link: "/parties-menu"
  },
  {
    img: m4,
    title: "WEDDING\nMENU",
    desc: "Crafted cocktails, wines, and soft pairings.",
    link: "/wedding-menu"
  }
];
function Dishes() {
  return /* @__PURE__ */ jsx("section", { id: "Dishes", children: /* @__PURE__ */ jsx("section", { className: "relative bg-[#ECE5DA] py-24 lg:py-32 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1420px] mx-auto px-5 sm:px-7", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs(
        "p",
        {
          className: "\n                text-[11px]\n                tracking-[0.32em]\n                uppercase\n                text-[#8A7B68]\n                mb-5\n              ",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-brown-deep text-[10px]", children: "✧" }),
            "CATERING MENUS"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "h2",
        {
          className: "\n                font-serif\n                text-[#3A3026]\n                leading-[0.95]\n                tracking-[-0.03em]\n\n                text-5xl\n                sm:text-6xl\n                lg:text-7xl\n              ",
          children: [
            "MOST POPULAR",
            /* @__PURE__ */ jsx("br", {}),
            "DISHES"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "\n            mt-20\n            grid\n            grid-cols-1\n            md:grid-cols-2\n            lg:grid-cols-3\n            gap-8\n          ",
        children: cards.map((c, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: c.link,
            className: "\n                  group\n                  relative\n                  block\n                ",
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "\n                    relative\n\n                    rounded-[28px]\n\n                    border\n                    border-[#F6F1E8]\n\n                    bg-[rgba(255,255,255,0.12)]\n\n                    backdrop-blur-[2px]\n\n                    overflow-hidden\n\n                    min-h-[640px]\n\n                    transition-all\n                    duration-[1200ms]\n                    ease-[cubic-bezier(.22,1,.36,1)]\n\n                    hover:bg-[#F7F3EC]\n                    hover:shadow-[0_35px_80px_-30px_rgba(0,0,0,0.18)]\n                  ",
                children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "\n                      relative\n                      overflow-hidden\n                  \n                      mx-4\n                      mt-4\n                  \n                      rounded-[20px]\n                  \n                      h-[240px]\n                      sm:h-[270px]\n                  \n                      group-hover:h-[240px]\n                      group-active:h-[240px]\n\n                      sm:group-hover:h-[330px]\n                      sm:group-active:h-[330px]\n                  \n                      transition-all\n                      duration-[1200ms]\n                      ease-[cubic-bezier(.22,1,.36,1)]\n                  \n                      isolate\n                    ",
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: c.img,
                            alt: c.title,
                            className: "\n                          w-full\n                          h-full\n                          object-cover\n\n                          transition-all\n                          duration-[1400ms]\n                          ease-[cubic-bezier(.22,1,.36,1)]\n                         "
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "\n                        absolute\n                        inset-0\n\n                        bg-black/0\n\n                        transition-all\n                        duration-1000\n\n                        group-hover:bg-black/28\n                        group-active:bg-black/28\n\n                      "
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "\n                          absolute\n                          inset-0\n                    \n                          flex\n                          items-center\n                          justify-center\n                    \n                          opacity-0\n                          scale-75\n                    \n                          transition-all\n                          duration-700\n                     \n                           group-hover:opacity-100\n                           group-hover:scale-100\n                           group-active:opacity-100\n                           group-active:scale-100\n                         ",
                            children: /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "\n                                w-[92px]\n                                h-[92px]\n                        \n                                rounded-full\n                        \n                                bg-[#2E2A25]/90\n                                text-white\n                        \n                                flex\n                                items-center\n                               justify-center\n                       \n                                shadow-[0_25px_60px_rgba(0,0,0,0.35)]\n                        \n                                backdrop-blur-md\n                              ",
                                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                                  /* @__PURE__ */ jsx(
                                    "span",
                                    {
                                      className: "\n                                text-[11px]\n                                tracking-[0.22em]\n                              ",
                                      children: "VIEW"
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" })
                                ] })
                              }
                            )
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "h-[120px] sm:h-[145px]" }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "\n                      px-8\n                      pb-12\n\n                      text-center\n                    ",
                      children: [
                        /* @__PURE__ */ jsx(
                          "h3",
                          {
                            className: "\n                        font-serif\n\n                        text-[#44372A]\n\n                        leading-[1.02]\n\n                        tracking-[0.01em]\n\n                        text-[2.2rem]\n                        sm:text-[2.7rem]\n\n                        whitespace-pre-line\n                      ",
                            children: c.title
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "p",
                          {
                            className: "\n                        mt-6\n\n                        text-[#75685D]\n\n                        text-[15px]\n\n                        leading-[1.8]\n\n                        max-w-[290px]\n                        mx-auto\n                      ",
                            children: c.desc
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "\n                      absolute\n                      bottom-5\n                      right-5\n\n                      opacity-0\n                      translate-y-3\n\n                      transition-all\n                      duration-700\n\n                      group-hover:opacity-100\n                      group-hover:translate-y-0\n                      group-active:opacity-100\n                      group-active:translate-y-0\n                    ",
                      children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "\n                        w-[54px]\n                        h-[54px]\n\n                        rounded-full\n\n                        bg-white\n\n                        border\n                        border-[#DDD4C7]\n\n                        flex\n                        items-center\n                        justify-center\n\n                        shadow-[0_8px_20px_rgba(0,0,0,0.08)]\n\n                        text-[#2E251D]\n                      ",
                          children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-5 h-5" })
                        }
                      )
                    }
                  )
                ]
              }
            )
          }
        ) }, c.title))
      }
    )
  ] }) }) });
}
function VideoBanner() {
  return /* @__PURE__ */ jsx("section", { id: "Video", children: /* @__PURE__ */ jsxs("section", { className: "relative h-[70vh] min-h-[480px] overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 zoom-slow", children: /* @__PURE__ */ jsx("img", { src: bg$1, alt: "", className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#1a0e07]/65" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-7xl sm:text-9xl lg:text-[12rem] text-cream/15 tracking-[0.18em] absolute top-10 lg:top-16 select-none pointer-events-none", children: "VIDEO" }),
      /* @__PURE__ */ jsx("button", { className: "relative w-24 h-24 rounded-full bg-gold flex items-center justify-center text-brown-deep pulse-ring hover:bg-gold-bright transition-colors", "aria-label": "Play video", children: /* @__PURE__ */ jsx(Play, { className: "w-8 h-8 ml-1", fill: "currentColor" }) })
    ] })
  ] }) });
}
const g4 = "/assets/event-Db-gbXbA.jpeg";
const imgs = [g1, g2, g3, g4];
function Gallery() {
  return /* @__PURE__ */ jsx("section", { id: "gallery", children: /* @__PURE__ */ jsxs("section", { className: "relative bg-cream py-28 lg:py-36 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1280px] mx-auto px-6 text-center relative", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "\n              font-serif\n              text-[clamp(2.5rem,10vw,11rem)]\n              text-brown/10\n              tracking-[0.12em]\n              absolute\n              top-0\n              left-1/2\n              -translate-x-1/2\n              select-none\n              pointer-events-none\n              whitespace-nowrap\n            ",
          "aria-hidden": true,
          children: "GALLERY"
        }
      ),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs(
        "p",
        {
          className: "\n              eyebrow\n              text-brown/70\n              mb-5\n\n              flex\n              items-center\n              justify-center\n              gap-2\n\n              relative\n            ",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-brown-deep text-[10px]", children: "✧" }),
            "OUR GALLERY"
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs(
        "h3",
        {
          className: "\n              font-serif\n              text-5xl\n              sm:text-6xl\n              md:text-7xl\n\n              text-brown-deep\n\n              leading-[1.02]\n              tracking-[-0.01em]\n\n              relative\n            ",
          children: [
            "CATERING",
            /* @__PURE__ */ jsx("br", {}),
            "THAT CREATES",
            /* @__PURE__ */ jsx("br", {}),
            "MOMENTS!"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "\n            grid\n            grid-cols-2\n            md:grid-cols-4\n\n            gap-0\n          ",
        children: imgs.map((src, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "\n                  group\n                  relative\n                  overflow-hidden\n\n                  h-[170px]\n                  sm:h-[270px]\n                  md:h-[370px]\n                  lg:h-[480px]\n                ",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src,
                  alt: "",
                  draggable: false,
                  className: "\n                    absolute\n                    inset-0\n\n                    w-full\n                    h-full\n\n                    object-cover\n\n                    transition-transform\n                    duration-[1800ms]\n                    ease-[cubic-bezier(.22,1,.36,1)]\n\n                    group-hover:scale-[1.06]\n                    group-active:scale-[1.06]\n                  "
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "\n                    absolute\n                    inset-0\n\n                    bg-[#1a0e07]/0\n\n                    transition-all\n                    duration-700\n\n                    group-hover:bg-[#1a0e07]/35\n                    group-active:bg-[#1a0e07]/35\n                  "
                }
              )
            ]
          }
        ) }, i))
      }
    ) })
  ] }) });
}
const inputCls = "w-full bg-cream/70 border border-brown/15 rounded-md px-4 py-3.5 text-sm text-brown-deep placeholder:text-brown/50 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition-all duration-500";
function Reserve() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    event_type: "",
    event_date: "",
    guests: "",
    message: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("submissions").insert({
      type: "reserve",
      name: form.name,
      phone: form.phone,
      email: form.email,
      company: form.company,
      event_type: form.event_type,
      event_date: form.event_date,
      guests: Number(form.guests),
      message: form.message
    });
    if (error) {
      console.log(error);
      alert("Failed to submit");
      return;
    }
    alert("Request submitted successfully ✅");
    setForm({
      name: "",
      phone: "",
      email: "",
      company: "",
      event_type: "",
      event_date: "",
      guests: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "relative bg-cream-dark py-28 lg:py-36", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch", children: [
    /* @__PURE__ */ jsx(Reveal, { y: 20, children: /* @__PURE__ */ jsx("div", { className: "h-full overflow-hidden rounded-md luxe-shadow", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: reserve,
        alt: "Elegant table",
        className: "w-full h-full min-h-[560px] object-cover"
      }
    ) }) }),
    /* @__PURE__ */ jsxs(Reveal, { delay: 0.2, y: 20, children: [
      /* @__PURE__ */ jsxs("p", { className: "eyebrow text-brown/70 mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-brown-deep text-[10px]", children: "✧" }),
        " CONTACT AND RESERVATIONS"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl sm:text-5xl md:text-6xl text-brown-deep leading-[1.04] tracking-[-0.01em]", children: "RESERVE YOUR CATERING SERVICE TODAY!" }),
      /* @__PURE__ */ jsxs("form", { className: "mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: inputCls,
            placeholder: "Your Name*",
            value: form.name,
            onChange: (e) => setForm({ ...form, name: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: inputCls,
            placeholder: "Phone Number*",
            value: form.phone,
            onChange: (e) => setForm({ ...form, phone: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: inputCls,
            placeholder: "Email",
            type: "email",
            value: form.email,
            onChange: (e) => setForm({ ...form, email: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: inputCls,
            placeholder: "Company",
            value: form.company,
            onChange: (e) => setForm({ ...form, company: e.target.value })
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            className: inputCls,
            value: form.event_type,
            onChange: (e) => setForm({ ...form, event_type: e.target.value }),
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Event Type" }),
              /* @__PURE__ */ jsx("option", { value: "Wedding", children: "Wedding" }),
              /* @__PURE__ */ jsx("option", { value: "Corporate", children: "Corporate" }),
              /* @__PURE__ */ jsx("option", { value: "Religious", children: "Religious" }),
              /* @__PURE__ */ jsx("option", { value: "Party", children: "Party" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm text-brown/70 mb-2", children: " Event Date (MM/DD/YYYY)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              className: inputCls,
              value: form.event_date,
              onChange: (e) => setForm({ ...form, event_date: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: inputCls,
            placeholder: "Number of Guests*",
            type: "number",
            value: form.guests,
            onChange: (e) => setForm({ ...form, guests: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: `${inputCls} sm:col-span-2 min-h-[120px] resize-none`,
            placeholder: "Wishes / questions / requests",
            value: form.message,
            onChange: (e) => setForm({ ...form, message: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1.1, duration: 0.9 },
            className: "mt-12",
            children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                className: "group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500",
                children: [
                  "SUBMIT REQUEST",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" })
                ]
              }
            )
          }
        )
      ] })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-cream text-brown-deep overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(CinematicStackedSections, {}),
    /* @__PURE__ */ jsx(Speciality, {}),
    /* @__PURE__ */ jsx(Dishes, {}),
    /* @__PURE__ */ jsx(VideoBanner, {}),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx(Reserve, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
