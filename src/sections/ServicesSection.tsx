"use client";

import { useEffect, useRef, useState } from "react";
import { GiHouse, GiScales } from "react-icons/gi";
import { FaLandmark, FaFileContract, FaHandshake, FaShieldAlt, FaBalanceScale, FaComments } from "react-icons/fa";
import { MdGavel } from "react-icons/md";

const services = [
  {
    icon: <FaLandmark size={26} aria-hidden="true" />,
    title: "সম্পত্তি সংক্রান্ত মামলা",
    desc: "সম্পত্তির মালিকানা, দখল, অধিকার ও অন্যান্য সম্পত্তি-সংক্রান্ত দেওয়ানি বিরোধে আইনগত পরামর্শ ও মামলা পরিচালনা।",
  },
  {
    icon: <GiHouse size={28} aria-hidden="true" />,
    title: "ভূমি ও জমি বিরোধ",
    desc: "জমির মালিকানা, দখল, সীমানা, দলিল এবং অন্যান্য ভূমি-সংক্রান্ত বিরোধে আইনগত সহায়তা।",
  },
  {
    icon: <FaFileContract size={26} aria-hidden="true" />,
    title: "উত্তরাধিকার ও উত্তরসূরি",
    desc: "উত্তরাধিকার সূত্রে পাওয়া সম্পত্তি, অংশ-বণ্টন এবং উত্তরাধিকার-সংক্রান্ত বিরোধে আইনগত পরামর্শ।",
  },
  {
    icon: <FaHandshake size={26} aria-hidden="true" />,
    title: "রিয়েল এস্টেট আইনগত সেবা",
    desc: "রিয়েল এস্টেট লেনদেন, সম্পত্তির নথিপত্র ও সংশ্লিষ্ট আইনগত ঝুঁকি বিষয়ে পরামর্শ।",
  },
  {
    icon: <GiScales size={28} aria-hidden="true" />,
    title: "দেওয়ানি মামলা",
    desc: "বিভিন্ন ধরনের দেওয়ানি মামলায় মামলা প্রস্তুতি, আইনগত কার্যক্রম এবং আদালতে প্রতিনিধিত্ব।",
  },
  {
    icon: <FaShieldAlt size={26} aria-hidden="true" />,
    title: "আইনগত প্রতিরক্ষা",
    desc: "প্রযোজ্য দেওয়ানি বিষয়ে আইনগত কৌশল, প্রতিনিধিত্ব এবং সংশ্লিষ্ট আদালত কার্যক্রমে সহায়তা।",
  },
  {
    icon: <MdGavel size={28} aria-hidden="true" />,
    title: "আদালতে প্রতিনিধিত্ব",
    desc: "আদালতে মক্কেলের পক্ষে পেশাগত প্রতিনিধিত্ব এবং মামলার প্রয়োজন অনুযায়ী যথাযথ আইনগত পদক্ষেপ।",
  },
  {
    icon: <FaComments size={26} aria-hidden="true" />,
    title: "আইনগত পরামর্শ",
    desc: "সম্পত্তি, ভূমি, উত্তরাধিকার ও দেওয়ানি বিষয়ে প্রাথমিক ও বিস্তারিত আইনগত পরামর্শ।",
  },
];

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-pad w-full max-w-full overflow-hidden"
      aria-label="আইনগত সেবাসমূহ"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      <div className="container-legal">
        {/* Header */}
        <div
          className="max-w-xl mb-10 sm:mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="section-eyebrow">পেশাগত আইনগত সহায়তা</span>
          <div className="gold-divider" aria-hidden="true" />
          <h2
            className="font-noto-serif-bengali font-bold"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              color: "var(--color-forest-green)",
              marginBottom: "1rem",
            }}
          >
            আইনগত সেবাসমূহ
          </h2>
          <p
            className="font-noto-sans-bengali text-charcoal-light leading-relaxed text-sm sm:text-base"
          >
            দেওয়ানি, সম্পত্তি, ভূমি, উত্তরাধিকার ও রিয়েল এস্টেট-সংক্রান্ত
            বিষয়ে পেশাদার আইনগত সহায়তা।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <article
              key={index}
              className="p-5 sm:p-7 group cursor-default relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-ivory)",
                border: "1px solid rgba(212, 175, 55, 0.15)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(35px)",
                transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(212, 175, 55, 0.5)";
                el.style.boxShadow = "0 10px 35px rgba(1,50,44,0.1)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(212, 175, 55, 0.15)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                className="mb-5 w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  color: "var(--color-forest-green)",
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className="font-noto-serif-bengali font-semibold mb-3"
                style={{
                  fontSize: "1.05rem",
                  color: "var(--color-forest-green)",
                  lineHeight: "1.35",
                }}
              >
                {service.title}
              </h3>
              <p
                className="font-noto-sans-bengali text-charcoal-light leading-relaxed"
                style={{ fontSize: "0.875rem" }}
              >
                {service.desc}
              </p>

              {/* Bottom gold accent line */}
              <div
                className="mt-5 transition-all duration-300 group-hover:w-16"
                style={{
                  height: "1.5px",
                  width: "30px",
                  backgroundColor: "var(--color-gold)",
                }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
