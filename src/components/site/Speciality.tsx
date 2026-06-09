import { ArrowRight, Utensils, Flame } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import foodIcon from "@/assets/site/icon-food.png";
import flavorIcon from "@/assets/site/icon-flavor.png";
import { useRef } from "react";

import Reveal from "./Reveal";

import dining from "@/assets/site/corporate.jpeg";
import bowl from "@/assets/site/icon-0.png";

export default function Speciality() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // SOFT ROTATION
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [-6, 10]), {
    stiffness: 22,
    damping: 30,
    mass: 1.1,
  });

  // SUBTLE LEFT → RIGHT FLOAT
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [-8, 82]), {
    stiffness: 24,
    damping: 32,
    mass: 1.05,
  });

  // SMALL FLOATING MOTION
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [10, -14]), {
    stiffness: 22,
    damping: 30,
    mass: 1.05,
  });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="
        relative
        bg-cream
        py-28
        lg:py-36
        overflow-hidden
      "
    >
      <div
        className="
    max-w-[1450px]
    mx-auto
    px-6
    grid
    grid-cols-1
    lg:grid-cols-12
    gap-6
    lg:gap-8
    items-center
  "
      >
        {/* LEFT CONTENT */}
        <Reveal y={20} className="lg:col-span-6">
          <p className="eyebrow text-brown/70 mb-5 flex items-center gap-2 uppercase tracking-[0.2em] text-[11px]">
            <span className="text-brown-deep text-[10px]">✧</span>
            SPECIALITY
          </p>

          <h2
            className="
      font-serif
      text-[42px]
      sm:text-[54px]
      md:text-[64px]
      text-[#5b4636]
      leading-[0.98]
      tracking-[-0.03em]
      uppercase
    "
          >
            UNFORGETTABLE
        
            CATERING FOR ANY
            
            OCCASION WITH OUR
            
            SPECIALITY!
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* ITEM 1 */}
            <div>
              <div className="flex items-start gap-3">
                <img src={foodIcon} alt="" className="w-10 h-10 object-contain opacity-80" />

                <div>
                  <p
                    className="
        font-serif
        text-[27px]
        leading-[0.95]
        text-[#7a624f]
        uppercase
      "
                  >
                    Premium
                    <br />
                    Dining
                  </p>
                </div>
              </div>

              <p
                className="
          mt-4
          text-[13px]
          leading-[1.7]
          text-[#8b7c6d]
          max-w-[240px]
        "
              >
                Allow customers to book reservations with automated confirmations.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <div className="flex items-start gap-3">
                <img src={flavorIcon} alt="" className="w-10 h-10 object-contain opacity-80" />

                <div>
                  <p
                    className="
        font-serif
        text-[27px]
        leading-[0.95]
        text-[#7a624f]
        uppercase
      "
                  >
                    Abundant
                    <br />
                    Flavors
                  </p>
                </div>
              </div>

              <p
                className="
          mt-4
          text-[13px]
          leading-[1.7]
          text-[#8b7c6d]
          max-w-[240px]
        "
              >
                Our experienced real estate experts guide you through every.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-9 border-t border-[#ddd2bf]" />

          {/* DESCRIPTION */}
          <p
            className="
      mt-7
      text-[14px]
      text-[#7f7266]
      leading-[1.9]
      max-w-[620px]
    "
          >
            At our restaurant, dining is more than just eating, it's an experience. We blend
            creativity, flavor, and passion to bring you dishes that delight the senses. From our
            carefully curated menu to our warm and inviting atmosphere.
          </p>

          {/* BUTTON */}
                    <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.9 }}
                className="mt-12"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" />
                </a>
              </motion.div>
        </Reveal>

        {/* RIGHT IMAGE */}
        <Reveal delay={0.2} y={20} className="lg:col-span-6 relative">
          {/* MAIN IMAGE */}
          <div className="overflow-hidden rounded-md luxe-shadow">
            <img
              src={dining}
              alt="Luxury dining"
              className="
                w-full
                h-[580px]
                object-cover
              "
            />
          </div>

          {/* FLOATING ICON */}
          <motion.img
            src={bowl}
            alt=""
            style={{
              rotate,
              x,
              y,
            }}
            className="
              absolute

              bottom-[-65px]
              left-[-20px]

              sm:bottom-[-70px]
              sm:left-[-25px]

              lg:bottom-[-85px]
              lg:left-[-95px]

              w-44
              sm:w-52
              lg:w-85

              rounded-full

              plate-breathe
              will-change-transform
              pointer-events-none
              select-none

              drop-shadow-[0_30px_45px_rgba(0,0,0,0.35)]

              z-20
            "
          />
        </Reveal>
      </div>
    </section>
  );
}
