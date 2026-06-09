import { Play } from "lucide-react";
import bg from "@/assets/site/video.jpeg";

export default function VideoBanner() {
  return (
    <section id="Video">
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <div className="absolute inset-0 zoom-slow">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[#1a0e07]/65" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="font-serif text-7xl sm:text-9xl lg:text-[12rem] text-cream/15 tracking-[0.18em] absolute top-10 lg:top-16 select-none pointer-events-none">VIDEO</h2>
        <button className="relative w-24 h-24 rounded-full bg-gold flex items-center justify-center text-brown-deep pulse-ring hover:bg-gold-bright transition-colors" aria-label="Play video">
          <Play className="w-8 h-8 ml-1" fill="currentColor" />
        </button>
      </div>
    </section>
    </section>
  );
}
