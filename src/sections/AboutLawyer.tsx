"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: "২৫+", label: "বছরের অভিজ্ঞতা" },
  { value: "দেওয়ানি আইন", label: "প্রধান কার্যক্ষেত্র" },
  { value: "সুপ্রিম কোর্ট", label: "অ্যাডভোকেট" },
];

export default function AboutLawyer() {
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
      id="about"
      className="section-pad"
      aria-label="আইনজীবী সম্পর্কে"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      <div className="container-legal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Portrait Column */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            {/* Portrait Image */}
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "1/1",
                maxHeight: "520px",
                border: "2px solid rgba(212, 175, 55, 0.25)",
                boxShadow: "0 20px 60px rgba(1, 50, 44, 0.12)",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Image
                src="/advocate_mollah_md_ali_ashraf.jpg"
                alt="অ্যাডভোকেট মোল্লা মোঃ আলী আশ্রাফ — পেশাদার আইনজীবীর প্রতিকৃতি"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
                quality={90}
                priority
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Column */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
            }}
          >
            <span className="section-eyebrow">আইনজীবী সম্পর্কে</span>
            <div className="gold-divider" aria-hidden="true" />

            <h2
              className="font-noto-serif-bengali font-bold mb-6"
              style={{
                fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)",
                color: "var(--color-forest-green)",
                lineHeight: "1.3",
              }}
            >
              অভিজ্ঞতা, পেশাদারিত্ব ও ন্যায়বোধের সঙ্গে আইনগত সেবা
            </h2>

            <div className="space-y-4">
              <p
                className="font-noto-sans-bengali leading-relaxed text-charcoal-light"
                style={{ fontSize: "1rem" }}
              >
                <strong className="text-charcoal">মোল্লা মোঃ আলী আশ্রাফ</strong> (এম.এস.এস, এলএল.বি, ঢাকা বিশ্ববিদ্যালয়) একজন
                অভিজ্ঞ দেওয়ানি আইনজীবী এবং সুপ্রিম কোর্ট অব বাংলাদেশের অ্যাডভোকেট।
                দীর্ঘ ২৫ বছর ধরে তিনি আইন পেশায় যুক্ত থেকে দেওয়ানি মামলা,
                সম্পত্তি ও ভূমি-সংক্রান্ত বিরোধ, উত্তরাধিকার এবং রিয়েল
                এস্টেট-সংক্রান্ত বিভিন্ন বিষয়ে আইনগত পরামর্শ ও আদালতে প্রতিনিধিত্ব
                করে আসছেন।
              </p>
              <p
                className="font-noto-sans-bengali leading-relaxed text-charcoal-light"
                style={{ fontSize: "1rem" }}
              >
                প্রতিটি বিষয়ে মামলার বাস্তব পরিস্থিতি, প্রাসঙ্গিক দলিল এবং প্রযোজ্য
                আইন বিবেচনা করে দায়িত্বশীল ও বাস্তবসম্মত আইনগত দিকনির্দেশনা প্রদান
                করা হয়। প্রতিটি মক্কেলের বিষয় সম্পূর্ণ গোপনীয়তা ও পেশাদারিত্বের
                সঙ্গে পরিচালনা করা হয়।
              </p>
            </div>

            {/* Horizontal gold divider */}
            <div
              className="my-8"
              style={{
                height: "1px",
                backgroundColor: "var(--color-gold)",
                opacity: 0.25,
              }}
              aria-hidden="true"
            />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center py-4"
                  style={{
                    borderRight: index < stats.length - 1
                      ? "1px solid rgba(212, 175, 55, 0.2)"
                      : "none",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(15px)",
                    transition: `opacity 0.5s ease ${0.6 + index * 0.1}s, transform 0.5s ease ${0.6 + index * 0.1}s`,
                  }}
                >
                  <div
                    className="font-noto-serif-bengali font-bold"
                    style={{
                      fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                      color: "var(--color-forest-green)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-noto-sans-bengali text-charcoal-light mt-1"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Designation badge */}
            <div
              className="mt-8 flex items-center gap-4 p-5"
              style={{
                backgroundColor: "var(--color-ivory)",
                borderLeft: "3px solid var(--color-gold)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                borderLeftWidth: "3px",
              }}
            >
              <div>
                <div className="font-noto-serif-bengali font-bold text-forest-green" style={{ fontSize: "1.05rem" }}>
                  অ্যাডভোকেট মোল্লা মোঃ আলী আশ্রাফ
                </div>
                <div className="font-noto-sans-bengali font-semibold text-gold-dark mt-0.5" style={{ fontSize: "0.85rem", color: "var(--color-gold-dark)" }}>
                  এম.এস.এস, এলএল.বি (ঢা: বি:)
                </div>
                <div className="font-noto-sans-bengali text-charcoal-light mt-0.5" style={{ fontSize: "0.8rem" }}>
                  অ্যাডভোকেট, সুপ্রিম কোর্ট অব বাংলাদেশ · দেওয়ানি আইন বিশেষজ্ঞ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
