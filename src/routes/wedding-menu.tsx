 import { useState } from "react"; 
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

import heroImg from "@/assets/site/menu-4.jpeg";
import steak from "@/assets/site/icon-5.png";
import salad from "@/assets/site/icon-4.png";
import leaf from "@/assets/site/icon-3.png";
import tomato from "@/assets/site/icon-2.png";
type Item = {
  title: string;
  desc: string;
};

type TabKey =
  | "STARTERS"
  | "MAINS COURSE"
  | "DESSERTS"
  | "BEVERAGES";

const DATA: Record<TabKey, Item[]> = {
STARTERS: [
    { title: "Grilled Chicken Slider", desc: "Edamame Hummus on a Wonton Crisp and finished with Wasabi Peas" },
    { title: "No Bake S'mores Cheesecake", desc: "Green roman salad, chicken breast, beetroot, olive oil." },
    { title: "Cannoli Stuffed French Toast", desc: "Plum sauce with plum brandy, curd chips, caramelized plums" },
    { title: "Blueberry Zucchini Bread", desc: "Banana cream, raspberries, banana sorbet," },
    { title: "No Bake S'mores Cheesecake", desc: "Homemade hash, white cabbage purée, potatoes" },
    { title: "Chicken Parmigiana", desc: "Plum sauce with plum brandy, curd chips, caramelized plums" },
    { title: "Shrimp and Corn Hush Puppies", desc: "Banana cream, raspberries, banana sorbet," },
    { title: "Pasta with Pesto Cream Sauce", desc: "Green roman salad, chicken breast, beetroot, olive oil." },
  ],
  "MAINS COURSE": [
    { title: "Braised Short Rib", desc: "Slow cooked with red wine reduction, root vegetables, herbed polenta." },
    { title: "Pan-Seared Sea Bass", desc: "Lemon butter sauce, asparagus tips, saffron risotto." },
    { title: "Herb Crusted Lamb Rack", desc: "Rosemary jus, garlic confit, seasonal greens." },
    { title: "Truffle Mushroom Ravioli", desc: "Hand-folded pasta, shaved parmesan, brown butter." },
    { title: "Grilled Filet Mignon", desc: "Bordelaise sauce, gratin dauphinois, glazed carrots." },
  ],
  DESSERTS: [
    { title: "Vanilla Bean Crème Brûlée", desc: "Caramelized sugar crust, fresh berries, mint." },
    { title: "Dark Chocolate Fondant", desc: "Molten center, vanilla ice cream, raspberry coulis." },
    { title: "Tiramisu Classico", desc: "Espresso soaked ladyfingers, mascarpone, cocoa dust." },
    { title: "Lemon Tart", desc: "Buttery shortcrust, torched meringue, candied zest." },
  ],
  BEVERAGES: [
    { title: "Signature Rose Lemonade", desc: "House made, fresh mint, sparkling water." },
    { title: "Cold Brew Coffee", desc: "24-hour steeped, served over a clear sphere of ice." },
    { title: "Hibiscus Iced Tea", desc: "Lightly sweetened, citrus peel, dried hibiscus." },
    { title: "Cucumber Mint Cooler", desc: "Cucumber pressed, lime, soda, garden mint." },
  ],
};


const TABS: TabKey[] = [
  "STARTERS",
  "MAINS COURSE",
  "DESSERTS",
  "BEVERAGES",
];

export const Route = createFileRoute("/wedding-menu")({
  head: () => ({
    meta: [
      { title: "Wedding Menu — Al Najaf Catering" },
      {
        name: "description",
        content:
          "Discover Al Najaf's luxury wedding menu — starters, mains, desserts and beverages crafted for unforgettable celebrations.",
      },
    ],
  }),
  component: WeddingMenuPage,
});
function WeddingMenuPage() {
  const [active, setActive] = useState<TabKey>("STARTERS");

  return (
   <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[460px] md:h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Elegant wedding table setup"
            className="h-full w-full object-cover animate-slow-zoom"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.05em]"
          >
            WEDDING MENU
          </motion.h1>

          <motion.nav
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            }}
            className="mt-6 flex items-center gap-3 text-[11px] sm:text-xs tracking-[0.3em]"
          >
            {["HOME", "MENUS", "WEDDING MENU"].map((c, i, arr) => (
              <motion.span
                key={c}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-center gap-3"
              >
                <span className={i === arr.length - 1 ? "text-gold" : ""}>
                  {c}
                </span>

                {i < arr.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-gold" />
                )}
              </motion.span>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* MENU SECTION */}
    <section className="relative py-20 md:py-28 overflow-x-hidden overflow-y-visible">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className="
        relative
        overflow-visible
        mx-auto
        w-full
        lg:w-[78%]
        rounded-[32px]
        bg-cream/55
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        px-5
        sm:px-10
        md:px-16
        py-12
        md:py-16
        z-20
      "
          >
            {/* RIGHT STEAK IMAGE */}
            <motion.img
              src={steak}
              alt=""
              aria-hidden
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 0.55, x: 0 }}
              transition={{ duration: 0.8 }}
              className="
          hidden lg:block
          absolute
          right-[-130px]
          top-[140px]
          w-[300px]
          z-10
          pointer-events-none
        "
            />

            {/* LEFT SALAD IMAGE */}
            <motion.img
              src={salad}
              alt=""
              aria-hidden
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 0.55, x: 0 }}
              transition={{ duration: 0.8 }}
              className="
          hidden lg:block
          absolute
          left-[-140px]
          bottom-[-40px]
          w-[250px]
          z-10
          pointer-events-none
        "
            />

            {/* LEAF */}
            <img
              src={leaf}
              alt=""
              aria-hidden
              className="
          hidden md:block
          absolute
          left-[-60px]
          top-[45%]
          w-24
          opacity-70
          z-10
          pointer-events-none
        "
            />

            {/* TOMATO */}
            <img
              src={tomato}
              alt=""
              aria-hidden
              className="
          hidden md:block
          absolute
          left-[-95px]
          top-[56%]
          w-14
          opacity-80
          z-10
          pointer-events-none
        "
            />

            {/* Tabs */}
            <div className="relative z-20 flex justify-center">
              <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
                {TABS.map((tab) => {
                  const isActive = tab === active;

                  return (
                    <button
                      key={tab}
                      onClick={() => setActive(tab)}
                      className="relative shrink-0 px-5 sm:px-7 py-2.5 text-[11px] sm:text-xs tracking-[0.2em] font-semibold"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 28,
                          }}
                          className="absolute inset-0 rounded-full bg-gold"
                        />
                      )}

                      <span
                        className={`relative ${
                          isActive ? "text-primary-foreground" : "text-foreground/70"
                        }`}
                      >
                        {tab}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Menu Items */}
            <div className="relative z-20 mt-10 sm:mt-12">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={active}
                  initial="hidden"
                  animate="show"
                  exit={{
                    opacity: 0,
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.06,
                      },
                    },
                  }}
                  className="divide-y divide-foreground/10"
                >
                  {DATA[active].map((item) => (
                    <motion.li
                      key={item.title}
                      variants={{
                        hidden: { opacity: 0, y: 14 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.45,
                            ease: "easeOut",
                          },
                        },
                      }}
                      className="group py-5 sm:py-6 transition-all duration-300 hover:pl-3"
                    >
                      <h3 className="font-serif-display text-xl sm:text-2xl text-foreground transition-colors group-hover:text-gold">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


