"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "০১",
    title: "যোগাযোগ",
    desc: "আপনার আইনগত বিষয় সম্পর্কে সংক্ষিপ্তভাবে যোগাযোগ করুন।",
  },
  {
    number: "০২",
    title: "বিষয় আলোচনা",
    desc: "মামলার ধরন, প্রয়োজনীয় তথ্য ও প্রাসঙ্গিক কাগজপত্র নিয়ে আলোচনা করা হবে।",
  },
  {
    number: "০৩",
    title: "আইনগত মূল্যায়ন",
    desc: "প্রাসঙ্গিক দলিল, পরিস্থিতি ও আইন বিবেচনা করে বিষয়টি মূল্যায়ন করা হবে।",
  },
  {
    number: "০৪",
    title: "পরবর্তী পদক্ষেপ",
    desc: "প্রয়োজন অনুযায়ী আইনগত পরামর্শ, প্রতিনিধিত্ব বা পরবর্তী করণীয় সম্পর্কে নির্দেশনা।",
  },
];

export default function ConsultationProcess() {
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
      id="process"
      className="section-pad w-full max-w-full overflow-hidden"
      aria-label="আইনগত পরামর্শের প্রক্রিয়া"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="container-legal">
        {/* Header */}
        <div
          className="text-center max-w-xl mx-auto mb-10 sm:mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="section-eyebrow">কীভাবে শুরু করবেন</span>
          <div className="gold-divider-center" aria-hidden="true" />
          <h2
            className="font-noto-serif-bengali font-bold"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              color: "var(--color-forest-green)",
            }}
          >
            আইনগত পরামর্শের প্রক্রিয়া
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%]"
            style={{ height: "1px", backgroundColor: "rgba(212,175,55,0.3)" }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center px-4 sm:px-6 pb-6 sm:pb-8 pt-2"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
              }}
            >
              {/* Step number circle */}
              <div
                className="relative z-10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 sm:mb-6"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "2px solid var(--color-gold)",
                  boxShadow: "0 4px 20px rgba(212,175,55,0.15)",
                }}
              >
                <span
                  className="font-noto-serif-bengali font-bold text-xl sm:text-2xl"
                  style={{ color: "var(--color-forest-green)" }}
                >
                  {step.number}
                </span>
              </div>

              {/* Gold dot below circle for connector */}
              <div
                className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: "var(--color-gold)", zIndex: 5 }}
                aria-hidden="true"
              />

              <h3
                className="font-noto-serif-bengali font-semibold mb-3"
                style={{ fontSize: "1.05rem", color: "var(--color-forest-green)" }}
              >
                {step.title}
              </h3>
              <p
                className="font-noto-sans-bengali text-charcoal-light leading-relaxed"
                style={{ fontSize: "0.875rem" }}
              >
                {step.desc}
              </p>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div
                  className="lg:hidden mt-4"
                  style={{ width: "1px", height: "30px", backgroundColor: "rgba(212,175,55,0.3)" }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
