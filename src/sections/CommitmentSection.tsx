"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

const commitments = [
  {
    title: "পেশাদারিত্ব ও নৈতিকতা",
    desc: "প্রতিটি বিষয়ে পেশাগত দায়িত্ব, সততা ও নৈতিক মান বজায় রাখা।",
  },
  {
    title: "গোপনীয়তা",
    desc: "মক্কেলের ব্যক্তিগত তথ্য ও আইনগত বিষয় যথাযথ গোপনীয়তার সঙ্গে পরিচালনা করা।",
  },
  {
    title: "ব্যক্তিগত মনোযোগ",
    desc: "প্রতিটি মামলার বাস্তব পরিস্থিতি ও প্রয়োজন অনুযায়ী বিষয়টি মূল্যায়ন করা।",
  },
  {
    title: "দায়িত্বশীল পরামর্শ",
    desc: "প্রাসঙ্গিক আইন, দলিল ও বাস্তব পরিস্থিতি বিবেচনা করে আইনগত দিকনির্দেশনা প্রদান।",
  },
  {
    title: "আদালতে প্রতিনিধিত্ব",
    desc: "প্রয়োজন অনুযায়ী মক্কেলের পক্ষে পেশাগত ও দায়িত্বশীল প্রতিনিধিত্ব।",
  },
];

export default function CommitmentSection() {
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
      id="commitment"
      className="section-pad"
      aria-label="আমাদের পেশাগত অঙ্গীকার"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="container-legal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            {/* Decorative corner accent */}
            <div
              className="absolute"
              style={{
                top: "-10px",
                right: "-10px",
                width: "60px",
                height: "60px",
                borderTop: "2px solid var(--color-gold)",
                borderRight: "2px solid var(--color-gold)",
                zIndex: 2,
              }}
              aria-hidden="true"
            />

            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "4/5",
                maxHeight: "540px",
                border: "1px solid rgba(212, 175, 55, 0.15)",
                boxShadow: "0 20px 50px rgba(1, 50, 44, 0.1)",
              }}
            >
              <Image
                src="/legal_still_life.jpg"
                alt="আইনি বই, দাঁড়িপাল্লা ও হাতুড়ি — পেশাদার আইনি প্রতীক"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={85}
                loading="lazy"
                className="transition-transform duration-700 hover:scale-103"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <span className="section-eyebrow">পেশাগত মূল্যবোধ</span>
            <div className="gold-divider" aria-hidden="true" />
            <h2
              className="font-noto-serif-bengali font-bold mb-8"
              style={{
                fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)",
                color: "var(--color-forest-green)",
                lineHeight: "1.3",
              }}
            >
              আমাদের পেশাগত অঙ্গীকার
            </h2>

            {/* Commitment list */}
            <ul className="flex flex-col gap-5" role="list">
              {commitments.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-4 items-start"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.5s ease ${0.35 + index * 0.1}s, transform 0.5s ease ${0.35 + index * 0.1}s`,
                  }}
                >
                  <MdCheckCircle
                    className="flex-shrink-0 mt-0.5"
                    size={22}
                    style={{ color: "var(--color-gold)" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className="font-noto-serif-bengali font-semibold mb-1"
                      style={{ fontSize: "1rem", color: "var(--color-forest-green)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-noto-sans-bengali text-charcoal-light leading-relaxed"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div
              className="my-8"
              style={{ height: "1px", backgroundColor: "rgba(212,175,55,0.2)" }}
              aria-hidden="true"
            />

            {/* Quote */}
            <blockquote
              className="relative pl-6"
              style={{ borderLeft: "3px solid var(--color-gold)" }}
            >
              <p
                className="font-noto-serif-bengali italic"
                style={{
                  fontSize: "1rem",
                  color: "var(--color-forest-green)",
                  lineHeight: "1.7",
                }}
              >
                "ন্যায়বিচারের পথে অভিজ্ঞতা, সততা ও দায়িত্বশীলতার সঙ্গে আপনার পাশে।"
              </p>
              <cite
                className="font-noto-sans-bengali not-italic block mt-2"
                style={{ fontSize: "0.8rem", color: "var(--color-gold)" }}
              >
                — অ্যাডভোকেট মোল্লা মোঃ আলী আশ্রাফ
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
