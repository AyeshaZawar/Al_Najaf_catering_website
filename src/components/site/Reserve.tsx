import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import reserve from "@/assets/site/reserve.jpeg";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
const inputCls =
  "w-full bg-cream/70 border border-brown/15 rounded-md px-4 py-3.5 text-sm text-brown-deep placeholder:text-brown/50 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition-all duration-500";

export default function Reserve() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    event_type: "",
    event_date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("submissions").insert({
      type: "reserve",
      name: form.name,
      phone: form.phone,
      email: form.email,
      company: form.company,
      event_type: form.event_type,
      event_date: form.event_date,
      guests: Number(form.guests),
      message: form.message,
    });

    if (error) {
      console.log(error);
      alert("Failed to submit");
      return;
    }

    alert("Request submitted successfully ✅");

    // reset form
    setForm({
      name: "",
      phone: "",
      email: "",
      company: "",
      event_type: "",
      event_date: "",
      guests: "",
      message: "",
    });
  };
  return (
    <section id="contact" className="relative bg-cream-dark py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
        <Reveal y={20}>
          <div className="h-full overflow-hidden rounded-md luxe-shadow">
            <img
              src={reserve}
              alt="Elegant table"
              className="w-full h-full min-h-[560px] object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.2} y={20}>
          <p className="eyebrow text-brown/70 mb-4 flex items-center gap-2">
            <span className="text-brown-deep text-[10px]">✧</span> CONTACT AND RESERVATIONS
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brown-deep leading-[1.04] tracking-[-0.01em]">
            RESERVE YOUR CATERING SERVICE TODAY!
          </h2>
          <form className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <input
              className={inputCls}
              placeholder="Your Name*"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={inputCls}
              placeholder="Phone Number*"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              className={inputCls}
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={inputCls}
              placeholder="Company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <select
              className={inputCls}
              value={form.event_type}
              onChange={(e) => setForm({ ...form, event_type: e.target.value })}
            >
              <option value="">Event Type</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate</option>
              <option value="Religious">Religious</option>
              <option value="Party">Party</option>
            </select>
            <div>
              <label className="block text-sm text-brown/70 mb-2"> Event Date (MM/DD/YYYY)</label>

              <input
                type="date"
                className={inputCls}
                value={form.event_date}
                onChange={(e) => setForm({ ...form, event_date: e.target.value })}
              />
            </div>
            <input
              className={inputCls}
              placeholder="Number of Guests*"
              type="number"
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
            />
            <textarea
              className={`${inputCls} sm:col-span-2 min-h-[120px] resize-none`}
              placeholder="Wishes / questions / requests"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="mt-12"
            >
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500"
              >
                SUBMIT REQUEST
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" />
              </button>
            </motion.div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
