"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";

const highlights = [
  "সম্পত্তির মালিকানা",
  "জমি ও দখল বিরোধ",
  "সম্পত্তি বণ্টন",
  "উত্তরাধিকারসূত্রে প্রাপ্ত সম্পত্তি",
  "দলিল ও নথিপত্র",
  "রিয়েল এস্টেট বিষয়ক আইনগত পরামর্শ",
];

const handleScrollTo = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function PropertySection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="property"
      className="relative w-full max-w-full overflow-hidden"
      aria-label="সম্পত্তি ও ভূমি বিষয়ক বিশেষায়িত সেবা"
      style={{ backgroundColor: "var(--color-forest-green)" }}
    >
      {/* Gold top accent */}
      <div
        style={{ height: "2px", backgroundColor: "var(--color-gold)" }}
        aria-hidden="true"
      />

      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-15" aria-hidden="true">
        <Image
          src="/property_land.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          quality={70}
          loading="lazy"
        />
      </div>

      {/* Decorative pattern */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, var(--color-gold) 0, var(--color-gold) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div className="container-legal section-pad relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <span
              className="font-noto-sans-bengali block mb-3 text-xs sm:text-sm"
              style={{ color: "var(--color-gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              বিশেষায়িত আইনগত সেবা
            </span>
            <div
              style={{ width: "50px", height: "1.5px", backgroundColor: "var(--color-gold)", marginBottom: "1.5rem" }}
              aria-hidden="true"
            />
            <h2
              className="font-noto-serif-bengali font-bold mb-6"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", lineHeight: "1.2", color: "var(--color-ivory)" }}
            >
              সম্পত্তি ও ভূমি সংক্রান্ত আইনগত সহায়তা
            </h2>
            <p
              className="font-noto-sans-bengali leading-relaxed mb-8 text-sm sm:text-base"
              style={{ color: "rgba(245, 245, 220, 0.95)" }}
            >
              সম্পত্তি ও ভূমি-সংক্রান্ত বিরোধ অনেক সময় জটিল এবং দীর্ঘমেয়াদি হতে
              পারে। সংশ্লিষ্ট দলিল, মালিকানার ইতিহাস এবং বিরোধের প্রকৃতি বিবেচনা করে
              প্রয়োজনীয় আইনগত পরামর্শ ও প্রতিনিধিত্ব প্রদান করা হয়।
            </p>

            <button
              className="btn-primary w-full sm:w-auto"
              onClick={() => handleScrollTo("#contact")}
              id="property-cta"
            >
              আপনার বিষয়টি নিয়ে পরামর্শ করুন
              <HiArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Right: Highlights */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
            }}
          >
            <div
              className="p-6 sm:p-8"
              style={{
                backgroundColor: "rgba(1, 50, 44, 0.55)",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                backdropFilter: "blur(6px)",
              }}
            >
              <h3
                className="font-noto-serif-bengali font-semibold mb-6"
                style={{ fontSize: "1.1rem", color: "var(--color-ivory)" }}
              >
                যেসব বিষয়ে সহায়তা পাওয়া যায়
              </h3>

              <ul className="flex flex-col gap-3 sm:gap-4" role="list">
                {highlights.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(15px)",
                      transition: `opacity 0.5s ease ${0.4 + index * 0.07}s, transform 0.5s ease ${0.4 + index * 0.07}s`,
                    }}
                  >
                    <MdCheckCircle
                      className="flex-shrink-0"
                      size={20}
                      style={{ color: "var(--color-gold)" }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-noto-sans-bengali text-sm sm:text-base"
                      style={{ color: "rgba(245, 245, 220, 0.97)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom quote */}
              <div
                className="mt-6 sm:mt-8 pt-5 sm:pt-6"
                style={{ borderTop: "1px solid rgba(212,175,55,0.2)" }}
              >
                <p
                  className="font-noto-serif-bengali italic"
                  style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "rgba(245, 245, 220, 0.85)" }}
                >
                  "সঠিক আইনগত সহায়তায় জটিল বিষয়ও সমাধানযোগ্য।"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
