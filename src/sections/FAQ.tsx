"use client";

import { useEffect, useRef, useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqs = [
  {
    q: "কোন ধরনের বিষয়ে আইনগত পরামর্শ নেওয়া যায়?",
    a: "দেওয়ানি মামলা, সম্পত্তির মালিকানা ও দখল বিরোধ, ভূমি ও জমি সংক্রান্ত বিষয়, উত্তরাধিকার ও সম্পত্তি বণ্টন এবং রিয়েল এস্টেট-সংক্রান্ত আইনগত বিষয়ে পরামর্শ নেওয়া যায়।",
  },
  {
    q: "সম্পত্তি বা জমির বিরোধ হলে কী করা উচিত?",
    a: "সম্পত্তি বা জমির বিরোধ দেখা দিলে প্রথমে প্রাসঙ্গিক দলিল ও নথিপত্র সংগ্রহ করুন এবং একজন অভিজ্ঞ আইনজীবীর সঙ্গে পরামর্শ করুন। বিরোধের ধরন ও পরিস্থিতি অনুযায়ী পরবর্তী আইনগত পদক্ষেপ নির্ধারণ করা হবে।",
  },
  {
    q: "উত্তরাধিকার সংক্রান্ত বিষয়ে কি পরামর্শ পাওয়া যায়?",
    a: "হ্যাঁ। উত্তরাধিকার সূত্রে প্রাপ্ত সম্পত্তি, অংশ-বণ্টন, উইল-সংক্রান্ত বিষয় এবং উত্তরাধিকার-সংক্রান্ত বিরোধে আইনগত পরামর্শ ও প্রয়োজনে আদালতে প্রতিনিধিত্ব করা হয়।",
  },
  {
    q: "আদালতে প্রতিনিধিত্ব করা হয় কি?",
    a: "হ্যাঁ। দেওয়ানি মামলায় আদালতে মক্কেলের পক্ষে পেশাগত প্রতিনিধিত্ব করা হয়। সুপ্রিম কোর্ট অব বাংলাদেশের অ্যাডভোকেট হিসেবে প্রয়োজনীয় আদালতে মামলা পরিচালনা করা হয়।",
  },
  {
    q: "সাক্ষাতের সময়সূচি কী এবং আগে কি সময় নির্ধারণ করতে হবে?",
    a: "হ্যাঁ, সরাসরি সাক্ষাতের জন্য আগে থেকে ফোনে সময় নির্ধারণ করা সুবিধাজনক। কোর্ট চেম্বারে সকাল ৯:০০টা – দুপুর ৩:০০টা (শুক্রবার ও শনিবার ব্যতীত) এবং বাসা চেম্বারে সন্ধ্যা ৭:৩০টা – রাত ১০:৩০টা পর্যন্ত সাক্ষাৎ করা যায়।",
  },
  {
    q: "আইনগত পরামর্শের জন্য কী কী কাগজপত্র প্রয়োজন হতে পারে?",
    a: "বিষয়ের ধরন অনুযায়ী প্রয়োজনীয় কাগজপত্র ভিন্ন হতে পারে। সাধারণত সম্পত্তি বা জমি-সংক্রান্ত বিষয়ে মূল দলিল, নামজারির কাগজ, পর্চা, উত্তরাধিকার সনদ এবং বিরোধ-সংক্রান্ত অন্যান্য প্রাসঙ্গিক নথিপত্র সহায়ক হয়।",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="section-pad w-full max-w-full overflow-hidden"
      aria-label="সাধারণ জিজ্ঞাসা"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      <div className="container-legal">
        {/* Header */}
        <div
          className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="section-eyebrow">সাধারণ প্রশ্ন</span>
          <div className="gold-divider-center" aria-hidden="true" />
          <h2
            className="font-noto-serif-bengali font-bold"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              color: "var(--color-forest-green)",
            }}
          >
            সাধারণ জিজ্ঞাসা
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden"
                style={{
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  borderLeft: isOpen
                    ? "3px solid var(--color-gold)"
                    : "1px solid rgba(212, 175, 55, 0.2)",
                  backgroundColor: isOpen ? "var(--color-ivory)" : "var(--color-white)",
                  transition: "all 0.3s ease",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 0.06}s`,
                }}
              >
                {/* Question Button */}
                <button
                  className="w-full flex items-center justify-between gap-3 text-left px-4 py-4 sm:px-6 sm:py-5"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span
                    className="font-noto-serif-bengali font-semibold pr-1 text-sm sm:text-base"
                    style={{
                      color: isOpen ? "var(--color-forest-green)" : "var(--color-charcoal)",
                      lineHeight: "1.4",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8"
                    style={{
                      backgroundColor: isOpen
                        ? "var(--color-gold)"
                        : "rgba(212, 175, 55, 0.1)",
                      color: isOpen ? "var(--color-forest-green)" : "var(--color-gold)",
                      transition: "all 0.3s ease",
                    }}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <HiMinus size={15} />
                    ) : (
                      <HiPlus size={15} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <p
                      className="font-noto-sans-bengali text-charcoal-light leading-relaxed text-xs sm:text-sm"
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
