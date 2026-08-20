"use client";

import { useEffect, useRef, useState } from "react";
import { GiScales, GiHouse } from "react-icons/gi";
import { FaLandmark, FaFileContract, FaBuilding, FaGavel } from "react-icons/fa";

const practiceAreas = [
  {
    icon: <GiScales size={32} aria-hidden="true" />,
    title: "দেওয়ানি আইন",
    desc: "বিভিন্ন দেওয়ানি বিরোধ ও আদালত-সংক্রান্ত বিষয়ে আইনগত পরামর্শ ও প্রতিনিধিত্ব।",
    label: "দেওয়ানি আইন",
  },
  {
    icon: <FaLandmark size={30} aria-hidden="true" />,
    title: "সম্পত্তি আইন",
    desc: "সম্পত্তির মালিকানা, অধিকার, দখল ও সম্পত্তি-সংক্রান্ত বিরোধের আইনগত সমাধান।",
    label: "সম্পত্তি আইন",
  },
  {
    icon: <GiHouse size={32} aria-hidden="true" />,
    title: "ভূমি আইন",
    desc: "জমি ও ভূমি-সংক্রান্ত মালিকানা, দখল, দলিল ও বিরোধ বিষয়ে আইনগত সহায়তা।",
    label: "ভূমি আইন",
  },
  {
    icon: <FaFileContract size={28} aria-hidden="true" />,
    title: "উত্তরাধিকার আইন",
    desc: "উত্তরাধিকার, সম্পত্তি বণ্টন ও উত্তরাধিকার-সংক্রান্ত আইনগত বিষয়ে সহায়তা।",
    label: "উত্তরাধিকার আইন",
  },
  {
    icon: <FaBuilding size={28} aria-hidden="true" />,
    title: "রিয়েল এস্টেট আইন",
    desc: "রিয়েল এস্টেট লেনদেন ও সম্পত্তি-সংক্রান্ত আইনগত বিষয়।",
    label: "রিয়েল এস্টেট আইন",
  },
  {
    icon: <FaGavel size={28} aria-hidden="true" />,
    title: "দেওয়ানি লিটিগেশন",
    desc: "আদালতে দেওয়ানি মামলা পরিচালনা ও পেশাগত প্রতিনিধিত্ব।",
    label: "দেওয়ানি লিটিগেশন",
  },
];

export default function PracticeAreasSection() {
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
      id="practice-areas"
      className="section-pad"
      aria-label="আইনগত কার্যক্ষেত্র"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      <div className="container-legal">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="section-eyebrow">মূল আইনগত বিশেষজ্ঞতা</span>
          <div className="gold-divider-center" aria-hidden="true" />
          <h2
            className="font-noto-serif-bengali font-bold"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              color: "var(--color-forest-green)",
              marginBottom: "1rem",
            }}
          >
            আইনগত কার্যক্ষেত্র
          </h2>
          <p
            className="font-noto-sans-bengali text-charcoal-light"
            style={{ fontSize: "1rem" }}
          >
            যেসব আইনগত বিষয়ে বিশেষ মনোযোগ ও দক্ষতার সঙ্গে কাজ করা হয়।
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <article
              key={index}
              className="relative overflow-hidden group"
              style={{
                backgroundColor: "var(--color-ivory)",
                border: "1px solid rgba(212, 175, 55, 0.15)",
                padding: "2.25rem 2rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(35px)",
                transition: `opacity 0.6s ease ${index * 0.09}s, transform 0.6s ease ${index * 0.09}s`,
                cursor: "default",
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
              {/* Background hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(1,50,44,0.02) 0%, rgba(212,175,55,0.04) 100%)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* English label */}
                <div
                  className="text-xs font-medium mb-4"
                  style={{
                    color: "var(--color-gold)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {area.label}
                </div>

                {/* Icon */}
                <div
                  className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: "var(--color-forest-green)" }}
                >
                  {area.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-noto-serif-bengali font-semibold mb-3"
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--color-forest-green)",
                    lineHeight: "1.3",
                  }}
                >
                  {area.title}
                </h3>

                {/* Description */}
                <p
                  className="font-noto-sans-bengali text-charcoal-light leading-relaxed"
                  style={{ fontSize: "0.9rem" }}
                >
                  {area.desc}
                </p>

                {/* Gold bottom border on hover */}
                <div
                  className="mt-5 transition-all duration-400 group-hover:w-16"
                  style={{
                    height: "1.5px",
                    width: "30px",
                    backgroundColor: "var(--color-gold)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
