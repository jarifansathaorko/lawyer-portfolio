"use client";

import { useEffect, useRef, useState } from "react";
import { GiScales, GiHouse } from "react-icons/gi";
import { FaBalanceScale, FaUserTie } from "react-icons/fa";
import { MdGavel } from "react-icons/md";

const credentials = [
  {
    icon: <FaUserTie size={28} aria-hidden="true" />,
    title: "২৫ বছরের অভিজ্ঞতা",
    desc: "দীর্ঘ ২৫ বছর ধরে আইন পেশায় যুক্ত থেকে দেওয়ানি, সম্পত্তি ও ভূমি-সংক্রান্ত বিষয়ে পেশাগত সেবা।",
  },
  {
    icon: <GiScales size={30} aria-hidden="true" />,
    title: "সুপ্রিম কোর্টের অ্যাডভোকেট",
    desc: "বাংলাদেশের সুপ্রিম কোর্টে অ্যাডভোকেট হিসেবে পেশাগত দায়িত্ব ও আদালতে প্রতিনিধিত্ব।",
  },
  {
    icon: <GiHouse size={28} aria-hidden="true" />,
    title: "দেওয়ানি ও সম্পত্তি আইন",
    desc: "দেওয়ানি মামলা, সম্পত্তি, ভূমি, উত্তরাধিকার ও রিয়েল এস্টেট বিষয়ে বিশেষ মনোযোগ।",
  },
  {
    icon: <MdGavel size={28} aria-hidden="true" />,
    title: "দায়িত্বশীল আইনগত সেবা",
    desc: "প্রতিটি বিষয়কে গুরুত্ব, গোপনীয়তা ও পেশাদারিত্বের সঙ্গে মূল্যায়ন করে আইনগত পরামর্শ প্রদান।",
  },
];

export default function CredibilitySection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="credibility"
      aria-label="বিশ্বাসযোগ্যতা ও অভিজ্ঞতা"
      className="w-full max-w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      {/* Gold top border */}
      <div
        style={{ height: "3px", backgroundColor: "var(--color-gold)" }}
        aria-hidden="true"
      />
      <div className="container-legal section-pad">
        {/* Section heading */}
        <div
          className="text-center mb-10 sm:mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="section-eyebrow">কেন আমাদের বেছে নেবেন</span>
          <h2
            className="font-noto-serif-bengali font-bold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              color: "var(--color-forest-green)",
            }}
          >
            অভিজ্ঞতা, বিশ্বাস ও পেশাদারিত্ব
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {credentials.map((item, index) => (
            <article
              key={index}
              className="bg-white p-6 sm:p-8 border border-gold/10 group"
              style={{
                borderTop: "2px solid var(--color-gold)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
                boxShadow: "0 2px 12px rgba(1,50,44,0.04)",
              }}
            >
              <div
                className="mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-105"
                style={{ color: "var(--color-gold)" }}
              >
                {item.icon}
              </div>
              <h3
                className="font-noto-serif-bengali font-semibold mb-3"
                style={{
                  fontSize: "1.05rem",
                  color: "var(--color-forest-green)",
                  lineHeight: "1.3",
                }}
              >
                {item.title}
              </h3>
              <p
                className="font-noto-sans-bengali text-charcoal-light leading-relaxed"
                style={{ fontSize: "0.9rem" }}
              >
                {item.desc}
              </p>

              {/* Hover bottom accent */}
              <div
                className="mt-5 transition-all duration-300 group-hover:w-full"
                style={{
                  height: "1px",
                  width: "30px",
                  backgroundColor: "var(--color-gold)",
                  opacity: 0.5,
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
