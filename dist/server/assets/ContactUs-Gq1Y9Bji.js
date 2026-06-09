import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { N as Navbar, F as Footer, s as section2 } from "./social_event-UVYSfmWr.js";
import { ChevronRight, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { d as dining, s as section3 } from "./weddings-BxtxYCSt.js";
import { g as g4 } from "./menu-4-BsHtazAQ.js";
import { useState } from "react";
import "@tanstack/react-router";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[650px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx(motion.img, { src: section2, alt: "Luxury catering", initial: {
      scale: 1.15
    }, animate: {
      scale: 1
    }, transition: {
      duration: 2.5,
      ease: "easeOut"
    }, className: "absolute inset-0 w-full h-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" }),
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 1,
      delay: 0.4
    }, className: "relative z-10 h-full flex flex-col items-center justify-center text-white pt-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-6xl md:text-8xl tracking-[0.08em] font-medium", children: "CONTACT" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-3 text-[12px] tracking-[0.25em]", children: [
        /* @__PURE__ */ jsx("span", { children: "HOME" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-[#D39A4A]" }),
        /* @__PURE__ */ jsx("span", { className: "text-[#D39A4A]", children: "CONTACT" })
      ] })
    ] })
  ] });
}
const fadeUp = {
  initial: {
    opacity: 0,
    y: 40
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: "-80px"
  },
  transition: {
    duration: 0.8,
    ease: "easeOut"
  }
};
function ContactInfo() {
  return /* @__PURE__ */ jsxs("section", { className: "bg-[#ECE4D8] py-24 md:py-32 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.06] pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-full border-[40px] border-[#4B2E14]" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative", children: [
      /* @__PURE__ */ jsxs(motion.div, { ...fadeUp, children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-6xl leading-[1.1] text-[#4B2E14] tracking-tight", children: [
          "GET AN ANSWER",
          /* @__PURE__ */ jsx("br", {}),
          "TO YOUR",
          /* @__PURE__ */ jsx("br", {}),
          "CATERING",
          /* @__PURE__ */ jsx("br", {}),
          "QUESTION"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-[#4B2E14]/70 text-[14px] leading-relaxed max-w-md", children: "We'd love to hear from you. Please tell us about the event you would like us to create and we'll connect with you to get started." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl tracking-[0.15em] text-[#4B2E14]", children: "ADDRESS" }),
          /* @__PURE__ */ jsxs("p", { className: "text-[#4B2E14]/80 text-[14px] leading-relaxed flex gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16, className: "text-[#C68A3B] mt-1 shrink-0" }),
            "2972 Westheimer Rd. Santa Ana,",
            /* @__PURE__ */ jsx("br", {}),
            "Illinois 85486"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-[#C68A3B] text-[14px] font-medium flex gap-3 items-center", children: [
            /* @__PURE__ */ jsx(Phone, { size: 16, className: "shrink-0" }),
            "+92 334 3632414"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-[#4B2E14]/80 text-[14px] flex gap-3 items-center", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-[#C68A3B] shrink-0" }),
            "support@example.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { ...fadeUp, className: "overflow-hidden rounded-[20px] shadow-2xl", children: /* @__PURE__ */ jsx("img", { src: dining, alt: "Restaurant", className: "w-full h-[520px] object-cover hover:scale-105 transition-transform duration-[1.2s]" }) })
    ] })
  ] });
}
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      name: "",
      email: "",
      message: ""
    };
    let valid = true;
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    setErrors(newErrors);
    if (valid) {
      alert("Form submitted successfully ✅");
      console.log(form);
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "bg-[#ECE4D8] pb-56 md:pb-72 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center", children: [
    /* @__PURE__ */ jsx(motion.div, { ...fadeUp, className: "overflow-hidden rounded-[20px] shadow-xl", children: /* @__PURE__ */ jsx("img", { src: g4, alt: "Wedding hall", className: "w-full h-[440px] object-cover" }) }),
    /* @__PURE__ */ jsxs(motion.div, { ...fadeUp, children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-5xl leading-[1.1] text-[#4B2E14]", children: [
        "LEAVE YOUR",
        /* @__PURE__ */ jsx("br", {}),
        "MESSAGE"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[#4B2E14]/80 text-[14px] leading-relaxed mt-4", children: "Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions." }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "mt-8 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("input", { type: "text", name: "name", placeholder: "Name", value: form.name, onChange: handleChange, className: "w-full bg-[#dfd4c1] rounded-[10px] px-5 py-4" }),
          errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("input", { type: "email", name: "email", placeholder: "Email", value: form.email, onChange: handleChange, className: "w-full bg-[#dfd4c1] rounded-[10px] px-5 py-4" }),
          errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("textarea", { name: "message", placeholder: "Message", rows: 4, value: form.message, onChange: handleChange, className: "w-full bg-[#dfd4c1] rounded-[10px] px-5 py-4 resize-none" }),
          errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-2", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", id: "updates", className: "w-5 h-5 border border-[#b8aa95] accent-[#483226]" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "updates", className: "text-[14px] text-[#4B2E14]/75 cursor-pointer", children: "Yes! Please send me info on events and specials" })
        ] }),
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          y: 18
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.1,
          duration: 0.9
        }, className: "mt-12", children: /* @__PURE__ */ jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500", children: [
          "Request A Quote",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" })
        ] }) })
      ] })
    ] })
  ] }) });
}
function CTASection() {
  return /* @__PURE__ */ jsx("section", { className: "relative -mt-16 overflow-visible", children: /* @__PURE__ */ jsxs("div", { className: "relative pt-56 pb-32 bg-cover bg-center", style: {
    backgroundImage: `url(${section3})`
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/35" }),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 60
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.9
    }, className: "\n            absolute\n            left-1/2\n            top-0\n            -translate-x-1/2\n            -translate-y-[20%]\n            z-30\n            w-[92%]\n            max-w-4xl\n          ", children: /* @__PURE__ */ jsxs("div", { className: "relative bg-[#ECE2D2] px-8 md:px-16 pt-24 pb-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)]", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 -top-20 -translate-x-1/2", children: /* @__PURE__ */ jsx("img", { src: section3, alt: "Wedding", className: "w-32 h-32 md:w-40 md:h-40 object-cover shadow-2xl" }) }),
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-6xl leading-[1.1] text-[#4B2E14]", children: [
        "UNFORGETTABLE",
        /* @__PURE__ */ jsx("br", {}),
        "CATERING FOR ANY",
        /* @__PURE__ */ jsx("br", {}),
        "OCCASION!"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-[#4B2E14]/70 text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto", children: "Whether it's an intimate gathering, a corporate event, or a grand celebration, our expert culinary team crafts exquisite menus using the finest ingredients and exceptional presentation." }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 18
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 1.1,
        duration: 0.9
      }, className: "mt-12", children: /* @__PURE__ */ jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-3 rounded-full bg-[#483226] hover:bg-gold px-8 py-4 text-[11px] tracking-[0.28em] text-[#ECE4D8] font-semibold transition-all duration-500", children: [
        "Book Now",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-45" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("img", { src: section3, alt: "Left Decor", className: "hidden lg:block w-[220px] h-[420px] object-cover opacity-90" }),
      /* @__PURE__ */ jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsx("img", { src: section3, alt: "Right Decor", className: "hidden lg:block w-[220px] h-[420px] object-cover opacity-90" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "font-sans bg-[#ECE4D8] text-[#4B2E14]", style: {
    fontFamily: "'Inter', sans-serif"
  }, children: [
    /* @__PURE__ */ jsx("style", { children: `
          .font-serif{
            font-family:'Playfair Display',serif
          }

          .font-sans{
            font-family:'Inter',sans-serif
          }
        ` }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(ContactInfo, {}),
    /* @__PURE__ */ jsx(ContactForm, {}),
    /* @__PURE__ */ jsx(CTASection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
