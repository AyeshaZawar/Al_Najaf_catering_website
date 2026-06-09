import Reveal from "./Reveal";
import { Eye, ArrowUpRight } from "lucide-react";

import m1 from "@/assets/site/menu-2.jpeg";
import m2 from "@/assets/site/menu-3.jpeg";
import m4 from "@/assets/site/menu-4.jpeg";




const cards = [
  {
    img: m1,
    title: "RELIGIOUS\nMENU",
    desc: "Crafted cocktails, wines, and soft pairings.",
    link: "/religious-menu",
  },

  {
    img: m2,
    title: "PARTIES\nMENU",
    desc: "Crafted cocktails, wines, and soft pairings.",
    link: "/parties-menu",
  },

  {
    img: m4,
    title: "WEDDING\nMENU",
    desc: "Crafted cocktails, wines, and soft pairings.",
    link: "/wedding-menu",
  },
];

export default function Dishes() {
  return (
        <section id="Dishes">
      {/* dishes content */}
   
    <section className="relative bg-[#ECE5DA] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-5 sm:px-7">
        {/* HEADING */}
        <Reveal>
          <div className="text-center">
            <p
              className="
                text-[11px]
                tracking-[0.32em]
                uppercase
                text-[#8A7B68]
                mb-5
              "
            >
              <span className="text-brown-deep text-[10px]">✧</span>
               CATERING MENUS
            </p>

            <h2
              className="
                font-serif
                text-[#3A3026]
                leading-[0.95]
                tracking-[-0.03em]

                text-5xl
                sm:text-6xl
                lg:text-7xl
              "
            >
              MOST POPULAR
              <br />
              DISHES
            </h2>
          </div>
        </Reveal>

        {/* CARDS */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <a
                href={c.link}
                className="
                  group
                  relative
                  block
                "
              >
                {/* MAIN CARD */}
                <div
                  className="
                    relative

                    rounded-[28px]

                    border
                    border-[#F6F1E8]

                    bg-[rgba(255,255,255,0.12)]

                    backdrop-blur-[2px]

                    overflow-hidden

                    min-h-[640px]

                    transition-all
                    duration-[1200ms]
                    ease-[cubic-bezier(.22,1,.36,1)]

                    hover:bg-[#F7F3EC]
                    hover:shadow-[0_35px_80px_-30px_rgba(0,0,0,0.18)]
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      overflow-hidden
                  
                      mx-4
                      mt-4
                  
                      rounded-[20px]
                  
                      h-[240px]
                      sm:h-[270px]
                  
                      group-hover:h-[240px]
                      group-active:h-[240px]

                      sm:group-hover:h-[330px]
                      sm:group-active:h-[330px]
                  
                      transition-all
                      duration-[1200ms]
                      ease-[cubic-bezier(.22,1,.36,1)]
                  
                      isolate
                    "
                  >
                    <img
                      src={c.img}
                      alt={c.title}
                      className="
                          w-full
                          h-full
                          object-cover

                          transition-all
                          duration-[1400ms]
                          ease-[cubic-bezier(.22,1,.36,1)]
                         "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0

                        bg-black/0

                        transition-all
                        duration-1000

                        group-hover:bg-black/28
                        group-active:bg-black/28

                      "
                    />

                    {/* VIEW BUTTON */}
                    <div
                      className="
                          absolute
                          inset-0
                    
                          flex
                          items-center
                          justify-center
                    
                          opacity-0
                          scale-75
                    
                          transition-all
                          duration-700
                     
                           group-hover:opacity-100
                           group-hover:scale-100
                           group-active:opacity-100
                           group-active:scale-100
                         "
                    >
                       <div
                         className="
                                w-[92px]
                                h-[92px]
                        
                                rounded-full
                        
                                bg-[#2E2A25]/90
                                text-white
                        
                                flex
                                items-center
                               justify-center
                       
                                shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                        
                                backdrop-blur-md
                              "
                      >
                        <div className="flex items-center gap-1">
                          <span
                            className="
                                text-[11px]
                                tracking-[0.22em]
                              "
                          >
                            VIEW
                          </span>

                          <Eye className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BIG SPACING */}
                  <div className="h-[120px] sm:h-[145px]" />

                  {/* CONTENT */}
                  <div
                    className="
                      px-8
                      pb-12

                      text-center
                    "
                  >
                    <h3
                      className="
                        font-serif

                        text-[#44372A]

                        leading-[1.02]

                        tracking-[0.01em]

                        text-[2.2rem]
                        sm:text-[2.7rem]

                        whitespace-pre-line
                      "
                    >
                      {c.title}
                    </h3>

                    <p
                      className="
                        mt-6

                        text-[#75685D]

                        text-[15px]

                        leading-[1.8]

                        max-w-[290px]
                        mx-auto
                      "
                    >
                      {c.desc}
                    </p>
                  </div>

                  {/* BOTTOM RIGHT ARROW */}
                  <div
                    className="
                      absolute
                      bottom-5
                      right-5

                      opacity-0
                      translate-y-3

                      transition-all
                      duration-700

                      group-hover:opacity-100
                      group-hover:translate-y-0
                      group-active:opacity-100
                      group-active:translate-y-0
                    "
                  >
                    <div
                      className="
                        w-[54px]
                        h-[54px]

                        rounded-full

                        bg-white

                        border
                        border-[#DDD4C7]

                        flex
                        items-center
                        justify-center

                        shadow-[0_8px_20px_rgba(0,0,0,0.08)]

                        text-[#2E251D]
                      "
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
     </section>
  );
}
