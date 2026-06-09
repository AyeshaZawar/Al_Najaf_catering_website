import { motion } from "framer-motion";
import Reveal from "./Reveal";

import aboutSmall from "@/assets/site/about-small.jpeg";
import aboutTall from "@/assets/site/about-tall.jpeg";

import leaf from "@/assets/site/icon-3.png";
import tomato from "@/assets/site/icon-2.png";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        bg-cream
        pt-40
        pb-28
        lg:pt-48
        lg:pb-32
        overflow-hidden
      "
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* TOP LABEL */}
        <Reveal>
          <p className="eyebrow text-center text-brown/70 mb-6 flex items-center justify-center gap-2">
            <span className="text-brown-deep text-[10px]">✧</span>
            WHO ARE WE
          </p>
        </Reveal>

        {/* HEADING */}
        <Reveal delay={0.1}>
          <div className="relative max-w-5xl mx-auto">
            {/* LEAF */}
            <motion.img
              src={leaf}
              alt=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="
                hidden
                md:block
                absolute
                left-10
                lg:-left-26
                -top-30
                lg:-top-38
                w-20
                lg:w-32
                z-20
                float-leaf
                rotate-[-18deg]
              "
            />

            {/* TOMATO */}
            <motion.img
              src={tomato}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="
                hidden
                md:block
                absolute
                left-4
                lg:-left-46
                -top-6
                lg:-top-10
                w-16
                lg:w-24
                z-20
                rotate-[8deg]
              "
            />

            <h2 className="relative font-serif text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown-deep max-w-5xl mx-auto leading-[1.02] tracking-[-0.01em] text-balance">
              WE HAVE PROFESSIONAL CATERING TEAMS IN AL NAJAF
            </h2>
          </div>
        </Reveal>

        {/* CONTENT GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* LEFT */}
          <Reveal className="md:col-span-4 space-y-8">
            <div className="overflow-hidden rounded-md group">
              <img
                src={aboutSmall}
                alt="Catering team"
                className="
                  w-full
                  h-52
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-110
                "
              />
            </div>

            <div>
              <p className="font-serif text-7xl text-brown-deep leading-none">2011</p>

              <p className="text-[11px] tracking-[0.28em] text-brown/60 mt-3">SINCE</p>
            </div>
          </Reveal>

          {/* CENTER */}
          <Reveal delay={0.2} className="md:col-span-4">
            <h3 className="font-serif text-2xl lg:text-[1.65rem] text-brown-deep leading-snug">
              EVERY EVENT IS A UNIQUE OPPORTUNITY TO CRAFT A CULINARY EXPERIENCE AS EXTRAORDINARY AS
              DELICIOUS.
            </h3>

            <p className="mt-7 text-sm leading-[1.85] text-brown/75">
              A meeting or celebration is a unique and unforgettable event! In Al Najaf we have a
              team of event planners, we take care of the design, creative and innovative work,
              planning, coordination and organization of all kinds of social and corporate events.
            </p>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.3} className="md:col-span-4">
            <div className="overflow-hidden rounded-md group">
              <img
                src={aboutTall}
                alt="Elegant table setup"
                className="
                  w-full
                  h-[460px]
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-110
                "
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
