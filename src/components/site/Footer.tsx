
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-[#3B1F08] text-[#F5EBDD] pt-24 pb-10 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr_0.8fr] gap-16 items-start">

          {/* LEFT */}
          <div>
            <h1 className="font-serif text-[78px] md:text-[102px] leading-none text-[#D89B4D] tracking-[-2px] font-bold">
              AL NAJAF
            </h1>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-6 mt-12">
              <a href="https://www.facebook.com/share/14Tjr6ZvdpS/" className="hover:text-[#D89B4D] transition">
                <Facebook size={18} />
              </a>

              <a href="#" className="hover:text-[#D89B4D] transition">
                <Linkedin size={18} />
              </a>

              <a href="https://www.instagram.com/al_najaf_caterers_and_pakwan?igsh=MWJndDBxaXpuNWp2MQ==" className="hover:text-[#D89B4D] transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* DISCOVER */}
          <div>
            <h3 className="font-serif text-[28px] text-[#F5EBDD] mb-8">
              DISCOVER
            </h3>

            <div className="flex gap-16">

              {/* FIRST COLUMN */}
              <div className="flex flex-col gap-5 text-[13px] font-semibold uppercase">

                <Link to="/" hash="home">
                  Home
                </Link>

                <Link to="/AboutUs">
                  About Us
                </Link>

                <Link to="/" hash="Parties">
                  Services
                </Link>

                <Link to="/" hash="Dishes">
                  Menu
                </Link>

                <Link to="/" hash="Video">
                  Video
                </Link>

                <Link to="/ContactUs">
                  Contact
                </Link>
              </div>

              {/* SECOND COLUMN */}
              <div className="flex flex-col gap-5 text-[13px] font-semibold uppercase">

                <Link to="/" hash="Parties">
                  Corporate
                </Link>

                <Link to="/wedding-menu">
                  Wedding
                </Link>

                <Link to="/religious-menu">
                  Religious
                </Link>

                <Link to="/parties-menu">
                  Parties
                </Link>
              </div>

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-serif text-[28px] text-[#F5EBDD] mb-8">
              CONTACT
            </h3>

            <div className="space-y-6 text-[17px] leading-relaxed text-[#F5EBDD]/90">
              <p>
                2972 Westheimer Rd. Santa
                <br />
                Ana, Illinois 85486
              </p>

              <p>support@example.com</p>

              <p className="text-[#D89B4D] text-[18px] font-medium tracking-normal">
                ++92 334 3632414
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="mt-24 border-t border-[#5A3417]" />

        {/* BOTTOM SECTION */}
        <div className="flex justify-center items-center mt-6">
          <p className="text-[12px] text-[#F5EBDD]/80">
            &copy; 2024 Al Najaf Catering. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

