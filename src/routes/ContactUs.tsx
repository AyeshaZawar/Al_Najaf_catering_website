import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

import { Phone, ArrowRight, ChevronRight, Mail, MapPin } from "lucide-react";

import heroFood from "@/assets/site/about-small.jpeg";
import restaurant from "@/assets/site/social_event.jpeg";
import weddingHall from "@/assets/site/reserve.jpeg";
import CTA_BG from "@/assets/site/weddings.jpeg";
import CARD_TOP from "@/assets/site/weddings.jpeg";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export const Route = createFileRoute("/ContactUs")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Contact — Al Najaf Luxury Catering" },
      {
        name: "description",
        content: "Premium catering for weddings, corporate events, and unforgettable celebrations.",
      },
    ],
  }),
});

function Hero() {
  return (
    <section className="relative h-[650px] w-full overflow-hidden">
      <motion.img
        src={heroFood}
        alt="Luxury catering"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white pt-16"
      >
        <h1 className="font-serif text-6xl md:text-8xl tracking-[0.08em] font-medium">CONTACT</h1>

        <div className="mt-4 flex items-center gap-3 text-[12px] tracking-[0.25em]">
          <span>HOME</span>

          <ChevronRight size={14} className="text-[#D39A4A]" />

          <span className="text-[#D39A4A]">CONTACT</span>
        </div>
      </motion.div>
    </section>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

function ContactInfo() {
  return (
    <section className="bg-[#ECE4D8] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[500px] md:h-[500px] opacity-[0.06] pointer-events-none">
        <div className="w-full h-full rounded-full border-[25px] md:border-[40px] border-[#4B2E14]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative">
        <motion.div {...fadeUp}>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] text-[#4B2E14] tracking-tight">
            GET AN ANSWER
            <br />
            TO YOUR
            <br />
            CATERING
            <br />
            QUESTION
          </h2>

          <p className="mt-6 text-[#4B2E14]/70 text-[14px] leading-relaxed max-w-md">
            We'd love to hear from you. Please tell us about the event you would like us to create
            and we'll connect with you to get started.
          </p>

          <div className="mt-10 space-y-4">
            <h3 className="font-serif text-xl tracking-[0.15em] text-[#4B2E14]">ADDRESS</h3>

            <p className="text-[#4B2E14]/80 text-[14px] leading-relaxed flex gap-3">
              <MapPin size={16} className="text-[#C68A3B] mt-1 shrink-0" />
              2972 Westheimer Rd. Santa Ana,
              <br />
              Illinois 85486
            </p>

            <p className="text-[#C68A3B] text-[14px] font-medium flex gap-3 items-center">
              <Phone size={16} className="shrink-0" />
              +92 334 3632414
            </p>

            <p className="text-[#4B2E14]/80 text-[14px] flex gap-3 items-center">
              <Mail size={16} className="text-[#C68A3B] shrink-0" />
              support@example.com
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="overflow-hidden rounded-[20px] shadow-2xl">
          <img
            src={restaurant}
            alt="Restaurant"
            className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-[1.2s]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // PAGE REFRESH STOP

    let newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let valid = true;

    // NAME
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // EMAIL
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
      valid = false;
    }

    // MESSAGE
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    // Insert into Supabase
    try {
      const { error } = await supabase.from("submissions").insert({
        type: "contact",
        name: form.name,
        email: form.email,
        message: form.message,
      });

      if (error) {
        console.error("Supabase insert error", error);
        setErrors((s) => ({ ...s, message: "Failed to submit. Please try again later." }));
        return;
      }

      // Success
      setForm({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      // show a friendly in-page success message instead of alert
      alert("Form submitted successfully ✅");
    } catch (err) {
      console.error(err);
      setErrors((s) => ({ ...s, message: "Failed to submit. Please try again later." }));
    }
  };

  return (
    <section className="bg-[#ECE4D8] pb-72 md:pb-72 relative z-10 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div {...fadeUp} className="overflow-hidden rounded-[20px] shadow-xl">
          <img src={weddingHall} alt="Wedding hall" className="w-full h-[440px] object-cover" />
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-[#4B2E14]">
            LEAVE YOUR
            <br />
            MESSAGE
          </h2>

          <p className="text-[#4B2E14]/80 text-[14px] leading-relaxed mt-4">
            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours
            on business days. We will be happy to answer your questions.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {/* NAME */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-[#dfd4c1] rounded-[10px] px-5 py-4"
              />

              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-[#dfd4c1] rounded-[10px] px-5 py-4"
              />

              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-[#dfd4c1] rounded-[10px] px-5 py-4 resize-none"
              />

              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            {/* CHECKBOX */}
            <div className="mt-4 w-full">
              <label htmlFor="updates" className="flex items-start gap-3 w-full">
                <input
                  type="checkbox"
                  id="updates"
                  className="mt-1 h-4 w-4 shrink-0 accent-[#483226]"
                />

                <span className="flex-1 text-sm leading-relaxed text-[#4B2E14]/75 break-words">
                  Yes! Please send me info on events and specials
                </span>
              </label>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500 mx-auto"
              >
                Request A Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative mt-0 md:-mt-16 overflow-visible">
      {/* BACKGROUND IMAGE SECTION */}
      <div
        className="relative pt-56 pb-32 bg-cover bg-center"
        style={{
          backgroundImage: `url(${CTA_BG})`,
        }}
      >
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
md:-translate-y-[20%]
translate-y-0
z-30
w-[84%] sm:w-[82%]
max-w-4xl
          "
        >
          <div className="relative bg-[#ECE2D2] px-8 md:px-16 pt-24 pb-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            {/* Top Image */}
            <div className="absolute left-1/2 -top-20 -translate-x-1/2">
              <img
                src={CARD_TOP}
                alt="Wedding"
                className="w-32 h-32 md:w-40 md:h-40 object-cover shadow-2xl"
              />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] text-[#4B2E14]">
              UNFORGETTABLE CATERING FOR ANY OCCASION!
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
      </div>
    </section>
  );
}
function Index() {
  return (
    <div
      className="font-sans bg-[#ECE4D8] text-[#4B2E14] overflow-x-hidden w-full"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>
        {`
          .font-serif{
            font-family:'Playfair Display',serif
          }

          .font-sans{
            font-family:'Inter',sans-serif
          }
        `}
      </style>

      <Navbar />

      <Hero />

      <ContactInfo />

      <ContactForm />

      <CTASection />
      <Footer />
    </div>
  );
}
