import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
} from "framer-motion";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

import bg from "@/assets/site/hero-bg.jpeg";
import plate from "@/assets/site/icon-1.png";
import leaf from "@/assets/site/icon-3.png";
import tomato from "@/assets/site/icon-2.png";

export default function Hero() {
  const sectionRef = useRef(null);

  // REAL page scroll
  const { scrollY } = useScroll();

  // Rotation motion value
  const rotateValue = useMotionValue(0);

  // Smooth rotation
  const smoothRotate = useSpring(rotateValue, {
    stiffness: 45,
    damping: 20,
    mass: 1,
  });

  // Smooth Y movement
  const plateY = useSpring(0, {
    stiffness: 30,
    damping: 20,
  });

  useEffect(() => {
    let lastScroll = 0;

    return scrollY.on("change", (latest) => {
      const diff = latest - lastScroll;

      // DOWN → clockwise
      if (diff > 0) {
        rotateValue.set(rotateValue.get() + diff * 0.12);
      }

      // UP → anti-clockwise
      if (diff < 0) {
        rotateValue.set(rotateValue.get() + diff * 0.12);
      }

      // slight floating movement
      plateY.set(-latest * 0.04);

      lastScroll = latest;
    });
  }, [scrollY, rotateValue, plateY]);

  return (
    <section id="home" >
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[105vh] flex items-center justify-center overflow-visible text-cream"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 zoom-slow">
          <img src={bg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-[#1a0e07]/72" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e07]/55 via-[#1a0e07]/65 to-[#1a0e07]/90" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="eyebrow text-white mb-7 flex items-center justify-center gap-2"
        >
          <span className="text-white text-[10px]">✦</span>
          THE BEST EVENTS START HERE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.98]"
        >
          CREATION OF
          
          MEMORABLE
         
          EVENTS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-gold hover:bg-gold-bright px-8 py-4 text-[11px] tracking-[0.28em] text-brown-deep font-semibold transition-all duration-500"
          >
            BOOK A NOW

            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>

      {/* ROTATING PLATE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1,
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          rotate: smoothRotate,
          y: plateY,
        }}
        className="absolute bottom-4 right-4 
        w-32 md:-bottom-20 md:right-8 
        md:w-48 lg:-bottom-24 lg:right-24 
        lg:w-64 z-30 will-change-transform"
      >
        <img
          src={plate}
          alt=""
          className="w-full h-auto rounded-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
        />
      </motion.div>


    </section>
    </section>

  );
}