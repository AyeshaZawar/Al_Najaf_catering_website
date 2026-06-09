import Reveal from "./Reveal";

import g1 from "@/assets/site/weddings.jpeg";
import g2 from "@/assets/site/menu-3.jpeg";
import g3 from "@/assets/site/parties.jpeg";
import g4 from "@/assets/site/event.jpeg";

const imgs = [g1, g2, g3, g4];

export default function Gallery() {
  return (
    <section id="gallery">
      <section className="relative bg-cream py-28 lg:py-36 overflow-hidden">
        {/* HEADING */}
        <div className="max-w-[1280px] mx-auto px-6 text-center relative">
          <h2
            className="
              font-serif
              text-[clamp(2.5rem,10vw,11rem)]
              text-brown/10
              tracking-[0.12em]
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              select-none
              pointer-events-none
              whitespace-nowrap
            "
            aria-hidden
          >
            GALLERY
          </h2>

          <Reveal>
            <p
              className="
              eyebrow
              text-brown/70
              mb-5

              flex
              items-center
              justify-center
              gap-2

              relative
            "
            >
              <span className="text-brown-deep text-[10px]">✧</span>
              OUR GALLERY
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3
              className="
              font-serif
              text-5xl
              sm:text-6xl
              md:text-7xl

              text-brown-deep

              leading-[1.02]
              tracking-[-0.01em]

              relative
            "
            >
              CATERING
              <br />
              THAT CREATES
              <br />
              MOMENTS!
            </h3>
          </Reveal>
        </div>

        {/* FULL WIDTH GALLERY */}
        <div className="mt-20">
          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-4

            gap-0
          "
          >
            {imgs.map((src, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="
                  group
                  relative
                  overflow-hidden

                  h-[170px]
                  sm:h-[270px]
                  md:h-[370px]
                  lg:h-[480px]
                "
                >
                  {/* IMAGE */}
                  <img
                    src={src}
                    alt=""
                    draggable={false}
                    className="
                    absolute
                    inset-0

                    w-full
                    h-full

                    object-cover

                    transition-transform
                    duration-[1800ms]
                    ease-[cubic-bezier(.22,1,.36,1)]

                    group-hover:scale-[1.06]
                    group-active:scale-[1.06]
                  "
                  />

                  {/* DARK OVERLAY */}
                  <div
                    className="
                    absolute
                    inset-0

                    bg-[#1a0e07]/0

                    transition-all
                    duration-700

                    group-hover:bg-[#1a0e07]/35
                    group-active:bg-[#1a0e07]/35
                  "
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
