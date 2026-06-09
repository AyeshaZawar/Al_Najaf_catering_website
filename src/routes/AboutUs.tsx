import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import HERO_IMG from "@/assets/site/about-small.jpeg";
import DINING_IMG from "@/assets/site/dining.jpeg";
import FOOD_IMG from "@/assets/site/social.jpeg";
import PLATE_IMG from "@/assets/site/icon-4.png";
import VIDEO_BG from "@/assets/site/video.jpeg";
import CTA_BG from "@/assets/site/weddings.jpeg";
import CARD_TOP from "@/assets/site/weddings.jpeg";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
export const Route = createFileRoute("/AboutUs")({
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

function Index() {
  return (
    <section id="AboutUs">
      <div className="font-sans-lux bg-cream text-brown-deep overflow-x-hidden">
        <Navbar />

        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden">
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6"
          >
            <h1 className="font-serif-lux text-6xl md:text-8xl tracking-[0.15em] font-medium">
              ABOUT US
            </h1>
            <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.3em] text-gold">
              <span>HOME</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">ABOUT US</span>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section className="bg-cream py-24 px-6 lg:px-10 relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="relative"
            >
              <div className="flex items-center gap-2 text-brown/70 text-xs tracking-[0.3em] font-semibold mb-6">
                <span className="text-brown-deep text-[10px]">✧</span> ABOUT US
              </div>
              <h2 className="font-serif-lux text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-brown-deep">
                WE PROVIDE CATERING SERVICE FOR ALL EVENTS SINCE 2011
              </h2>
              <div className="relative mt-12 max-w-md">
                <img
                  src={FOOD_IMG}
                  alt="Catering platter"
                  className="rounded-2xl shadow-2xl w-full hover:scale-[1.03] transition-transform duration-700"
                />
                <img
                  src={PLATE_IMG}
                  alt="Plate"
                  className="hidden md:block absolute -right-12 -bottom-12 w-48 h-48 rounded-full object-cover border-8 border-cream shadow-2xl hover:rotate-6 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="space-y-8"
            >
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={DINING_IMG}
                  alt="Luxury dining"
                  className="w-full h-[480px] object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <p className="text-brown-deep/70 text-base leading-relaxed max-w-lg">
                We pour passion into every dish, transforming meals into memories. With a flair for
                detail, a deep love for hospitality, and a relentless pursuit of excellence in
                catering and event styling — every gathering becomes a story worth remembering.
              </p>
            </motion.div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section className="relative h-[80vh] w-full overflow-visible flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-fixed"
            style={{ backgroundImage: `url(${VIDEO_BG})` }}
          />

          <div className="absolute inset-0 bg-black/55" />

          <h3 className="absolute font-serif-lux text-[14vw] lg:text-[12vw] text-white/10 tracking-widest whitespace-nowrap select-none">
            VIDEO AND
          </h3>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-20 w-24 h-24 rounded-full backdrop-blur-md bg-white/20 border border-white/40 flex items-center justify-center shadow-2xl hover:bg-gold/40 transition-colors duration-500"
          >
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </motion.button>
        </section>

        {/* BACKGROUND IMAGE SECTION */}
        <section className="relative pt-56 pb-32 overflow-visible">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${CTA_BG})`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="
   absolute
left-1/2
top-0
-translate-x-1/2
-translate-y-1/2
      z-30
      w-[82%]
      max-w-4xl
    "
          >
            <div className="relative bg-[#ECE2D2] px-8 md:px-16 pt-24 pb-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              {/* Top Image */}
              <div className="absolute left-1/2 -top-16 -translate-x-1/2">
                <img
                  src={CARD_TOP}
                  alt="Wedding"
                  className="w-32 h-32 md:w-40 md:h-40 object-cover shadow-2xl"
                />
              </div>

              {/* Heading */}
              <h2 className="font-serif-lux text-4xl md:text-6xl leading-[1.1] text-[#4B2E14]">
                UNFORGETTABLE
                
                CATERING FOR ANY
               
                OCCASION!
              </h2>

              {/* Text */}
              <p className="mt-6 text-[#4B2E14]/70 text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto">
                Whether it's an intimate gathering, a corporate event, or a grand celebration, our
                expert culinary team crafts exquisite menus using the finest ingredients and
                exceptional presentation.
              </p>

              {/* Button */}
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
            </div>
          </motion.div>

          {/* SIDE IMAGES */}
          <div className="relative z-10 flex justify-between items-center">
            <img
              src={CTA_BG}
              alt="Left Decor"
              className="hidden lg:block w-[220px] h-[420px] object-cover opacity-90"
            />

            <div className="flex-1" />

            <img
              src={CTA_BG}
              alt="Right Decor"
              className="hidden lg:block w-[220px] h-[420px] object-cover opacity-90"
            />
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
}
