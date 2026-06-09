import { useEffect, useRef } from "react";

import section1 from "@/assets/site/corporate.jpeg";
import section2 from "@/assets/site/social_event.jpeg";
import section2_1 from "@/assets/site/social.jpeg";
import section3 from "@/assets/site/weddings.jpeg";
import section4 from "@/assets/site/parties.jpeg";

const sections = [
  {
    image: section1,
    circleImage: section1,
    title: "CORPORATE",
    desc: "Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",
    panel: "rgba(243,238,232,0.38)",
  },

  {
    image: section2,
    circleImage: section2_1,
    title: "SOCIAL EVENTS",
    desc: "Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",
    panel: "rgba(224,220,215,0.48)",
  },

  {
    image: section3,
    circleImage: section3,
    title: "WEDDINGS",
    desc: "Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",
    panel: "rgba(208,204,200,0.58)",
  },

  {
    image: section4,
    circleImage: section4,
    title: "PARTIES",
    desc: "Professional Elementor adjustment with better compatibility, higher stability, and improved visual consistency.",
    panel: "rgba(190,188,185,0.70)",
  },
];

export default function CinematicStackedSections() {
  const pinnedRef = useRef<HTMLDivElement>(null);

  const layersRef = useRef<HTMLDivElement[]>([]);
  const overlaysRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);

        const layers = layersRef.current.filter(Boolean);
        const overlays = overlaysRef.current.filter(Boolean);

        if (!layers.length) return;

        // NEW CINEMATIC MASKING
        gsap.set(layers, {
          clipPath: "inset(100% 0% 0% 0%)",
          force3D: true,
          willChange: "clip-path",
        });

        gsap.set(layers[0], {
          clipPath: "inset(0% 0% 0% 0%)",
        });

        gsap.set(overlays, {
          opacity: 0,
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
            invalidateOnRefresh: true,
          },
        });

        layers.forEach((layer, i) => {
          if (i === 0) return;

          const prevOverlay = overlays[i - 1];

          // NEW REVEAL TRANSITION
          tl.fromTo(
            layer,
            {
              clipPath: "inset(100% 0% 0% 0%)",
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1,
              ease: "none",
              force3D: true,
            },
          );

          tl.to(
            prevOverlay,
            {
              opacity: 0.32,
              duration: 1,
              ease: "none",
            },
            "<",
          );
        });

        // PARALLAX
        layers.forEach((layer, i) => {
          const imgs = layer.querySelectorAll<HTMLElement>(".parallax-img");

          if (!imgs.length) return;

          const tlStart = i === 0 ? 0 : i - 1;

          const tlEnd = i === sections.length - 1 ? transitionCount : i;

          const dur = tlEnd - tlStart;

          if (dur <= 0) return;

          tl.fromTo(
            imgs,
            {
              yPercent: 2.5,
              scale: 1.08,
            },
            {
              yPercent: -2.5,
              scale: 1.03,
              ease: "none",
              duration: dur,
              force3D: true,
            },
            tlStart,
          );
        });

        ScrollTrigger.refresh();

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 300);

        cleanup = () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      },
    );

    return () => cleanup();
  }, []);

  return (
    <section id="Parties">
      <div
        ref={pinnedRef}
        className="relative bg-[#140B07] overflow-visible isolate"
        style={{
          height: "100vh",
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) layersRef.current[index] = el;
            }}
            className="absolute inset-0 overflow-hidden isolate"
            style={{
              zIndex: index + 1,
              willChange: "clip-path",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "translateZ(0)",
              overflow: "hidden",
              clipPath: "inset(100% 0% 0% 0%)",
            }}
          >
            {/* FULL HEIGHT */}
            <div className="relative w-full h-screen overflow-visible">
              {/* TOP SHADOW */}
              <div
                className="
                absolute
                top-0
                left-0
                w-full
                pointer-events-none
                z-[999]
              "
                style={{
                  top: "-12px",
                  height: "2px",
                  boxShadow: "0 -60px 120px rgba(0, 0, 0, 0.94)",
                }}
              />

              {/* BACKGROUND */}
              <div className="absolute inset-0 overflow-visible">
                {/* LEFT IMAGE */}
                <div
                  className="
                  absolute
                  left-0
                  top-0
                  h-full
                  overflow-hidden
                  w-[100%]
                  sm:w-[100%]
                  lg:w-[100%]
                "
                  style={{
                    transform: "translateZ(0)",
                  }}
                >
                  <img
                    src={section.image}
                    alt=""
                    draggable={false}
                    className="
                    parallax-img
                    w-full
                    h-full
                    object-cover
                    scale-[1.12]
                    will-change-transform
                  "
                    style={{
                      objectPosition: "left center",
                      filter: "blur(1px)",
                    }}
                  />

                  <div
                    ref={(el) => {
                      if (el) overlaysRef.current[index] = el;
                    }}
                    className="absolute inset-0 bg-black/50"
                  />
                </div>

                {/* RIGHT IMAGE */}
                <div
                  className="
                  absolute
                  right-0
                  top-0
                  h-full
                  overflow-hidden
                  w-[100%]
                  sm:w-[100%]
                  lg:w-[100%]
                "
                  style={{
                    transform: "translateZ(0)",
                  }}
                >
                  <img
                    src={section.image}
                    alt=""
                    draggable={false}
                    className="
                    parallax-img
                    w-full
                    h-full
                    object-cover
                    scale-[1.12]
                    will-change-transform
                  "
                    style={{
                      objectPosition: "right center",
                      filter: "blur(1px)",
                    }}
                  />

                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* CENTER PANEL */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                
                    h-[65vh]
                   sm:h-[75vh]
                    lg:h-full
                
                    flex
                    flex-col
                    overflow-hidden
                    items-center
                    justify-center
                
                    backdrop-blur-[8px]
                
                    rounded-[30px]
                    sm:rounded-[36px]
                    lg:rounded-none
                
                    w-[78%]
                    sm:w-[75%]
                    md:w-[60%]
                    lg:w-[40vw]
                
                    px-5
                    sm:px-8
                    lg:px-10
                
                    py-8
                  "
                  style={{
                    maxWidth: "460px",
                    zIndex: 20,
                    background: section.panel,
                    borderLeft: "1px solid rgba(255,255,255,0.14)",
                    borderRight: "1px solid rgba(255,255,255,0.14)",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    contain: "layout paint",
                  }}
                >
                  {/* CIRCLE IMAGE */}
                  <div
                    className="
                    rounded-full
                    overflow-hidden
                    shrink-0
                  "
                    style={{
                      width: "clamp(150px, 32vw, 360px)",
                      height: "clamp(150px, 32vw, 360px)",
                      boxShadow: "0 25px 80px rgba(0,0,0,0.18)",
                    }}
                  >
                    <img
                      src={section.circleImage}
                      alt={section.title}
                      draggable={false}
                      className="
                      w-full
                      h-full
                      object-cover
                      scale-[1.08]
                    "
                    />
                  </div>

                  {/* TEXT */}
                  <div className="text-center mt-5 sm:mt-7 lg:mt-12 px-2">
                    <h2
                      className="
                        font-serif
                        uppercase
                        tracking-[0.08em]
                        text-[clamp(1.5rem,4vw,4rem)]
                        break-words
                    "
                      style={{
                        fontSize: "clamp(1.5rem, 4vw, 4rem)",
                        lineHeight: 1,
                        color: "#f8f6f3",
                        textShadow: "0 4px 25px rgba(0,0,0,0.15)",
                      }}
                    >
                      {section.title}
                    </h2>

                    <p
                      className="
                      mt-4
                      sm:mt-5
                      lg:mt-6
                      leading-relaxed
                      mx-auto
                      font-light
                    "
                      style={{
                        maxWidth: "340px",
                        fontSize: "clamp(0.72rem, 2.2vw, 1rem)",
                        color: "rgba(255,255,255,0.72)",
                      }}
                    >
                      {section.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
