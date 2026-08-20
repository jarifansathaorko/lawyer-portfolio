"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { GiScales } from "react-icons/gi";

const handleScrollTo = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="প্রধান হিরো সেকশন"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero_courthouse.jpg"
          alt="বাংলাদেশ সুপ্রিম কোর্ট — আদালত ভবনের স্থাপত্য"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
          quality={85}
        />
      </div>

      {/* Dark Green Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(1,50,44,0.92) 0%, rgba(1,50,44,0.78) 45%, rgba(1,50,44,0.50) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle bottom gradient for depth */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, rgba(1,50,44,0.6), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-legal relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <GiScales className="text-gold flex-shrink-0" size={18} aria-hidden="true" />
            <span
              className="font-noto-sans-bengali"
              style={{ color: "var(--color-gold)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              অ্যাডভোকেট · সুপ্রিম কোর্ট অব বাংলাদেশ
            </span>
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: "50px",
              height: "1.5px",
              backgroundColor: "var(--color-gold)",
              marginBottom: "1.75rem",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "opacity 0.5s ease 0.25s, transform 0.6s ease 0.25s",
            }}
            aria-hidden="true"
          />

          {/* Main Heading */}
          <h1
            className="font-noto-serif-bengali font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: "1.15",
              color: "var(--color-ivory)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            ২৫ বছরের অভিজ্ঞতায়
            <br />
            <span style={{ color: "var(--color-gold)" }}>বিশ্বস্ত দেওয়ানি</span>{" "}
            আইন সেবা
          </h1>

          {/* Subheading */}
          <p
            className="font-noto-sans-bengali leading-relaxed mb-10"
            style={{
              color: "rgba(245, 245, 220, 0.95)",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              maxWidth: "580px",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(25px)",
              transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
            }}
          >
            সম্পত্তি, ভূমি, উত্তরাধিকার, রিয়েল এস্টেট ও দেওয়ানি বিষয়ে
            পেশাদার আইনগত পরামর্শ ও আদালতে প্রতিনিধিত্ব।
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
            }}
          >
            <button
              className="btn-primary"
              onClick={() => handleScrollTo("#contact")}
              id="hero-primary-cta"
              aria-label="যোগাযোগ পাতায় যান"
            >
              আইনগত পরামর্শের জন্য যোগাযোগ করুন
              <HiArrowRight size={16} aria-hidden="true" />
            </button>
            <button
              className="btn-outline"
              onClick={() => handleScrollTo("#services")}
              id="hero-secondary-cta"
              aria-label="সেবাসমূহ পাতায় যান"
            >
              আইনগত সেবাসমূহ দেখুন
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{
          opacity: mounted ? 0.7 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: "1px",
            height: "50px",
            background: "linear-gradient(to bottom, transparent, var(--color-gold))",
            margin: "0 auto",
          }}
        />
      </div>
    </section>
  );
}
