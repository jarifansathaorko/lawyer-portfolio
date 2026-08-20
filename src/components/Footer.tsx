"use client";

import { GiScales } from "react-icons/gi";

const footerLinks = [
  { label: "প্রধান পাতা", href: "#hero" },
  { label: "আইনজীবী সম্পর্কে", href: "#about" },
  { label: "আইনগত সেবাসমূহ", href: "#services" },
  { label: "আইনগত কার্যক্ষেত্র", href: "#practice-areas" },
  { label: "যোগাযোগ", href: "#contact" },
];

const handleClick = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full max-w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-forest-green)" }}
      role="contentinfo"
    >
      {/* Gold top border */}
      <div style={{ height: "2px", backgroundColor: "var(--color-gold)" }} />

      <div className="container-legal py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full"
                style={{
                  border: "1.5px solid var(--color-gold)",
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                }}
              >
                <GiScales style={{ color: "var(--color-gold)" }} size={21} aria-hidden="true" />
              </div>
              <div>
                <div
                  className="font-noto-serif-bengali font-bold leading-tight"
                  style={{ fontSize: "1.05rem", color: "var(--color-ivory)" }}
                >
                  মোল্লা মোঃ আলী আশ্রাফ
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "var(--color-gold)", marginTop: "2px" }}
                >
                  এম.এস.এস, এলএল.বি (ঢা: বি:)
                </div>
                <div
                  className="text-xs tracking-wide"
                  style={{ color: "rgba(245, 245, 220, 0.7)", marginTop: "1px" }}
                >
                  অ্যাডভোকেট · সুপ্রিম কোর্ট অব বাংলাদেশ
                </div>
              </div>
            </div>
            <p
              className="font-noto-sans-bengali text-sm leading-relaxed mt-4"
              style={{ color: "rgba(245, 245, 220, 0.75)" }}
            >
              ২৫ বছরের অভিজ্ঞতায় দেওয়ানি, সম্পত্তি, ভূমি, উত্তরাধিকার ও
              রিয়েল এস্টেট সংক্রান্ত আইনগত সেবা।
            </p>

            {/* Divider */}
            <div
              className="mt-6"
              style={{ width: "40px", height: "2px", backgroundColor: "var(--color-gold)" }}
            />
          </div>

          {/* Navigation Column */}
          <div>
            <h3
              className="font-noto-serif-bengali font-semibold mb-5"
              style={{ fontSize: "1rem", color: "var(--color-ivory)" }}
            >
              দ্রুত লিংক
            </h3>
            <nav aria-label="ফুটার নেভিগেশন">
              <ul className="flex flex-col gap-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                      className="font-noto-sans-bengali text-sm transition-colors duration-200 flex items-center gap-2"
                      style={{ color: "rgba(245, 245, 220, 0.75)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245, 245, 220, 0.75)"; }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-gold)",
                          display: "inline-block",
                          opacity: 0.6,
                        }}
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Practice Areas Column */}
          <div>
            <h3
              className="font-noto-serif-bengali font-semibold mb-5"
              style={{ fontSize: "1rem", color: "var(--color-ivory)" }}
            >
              আইনগত কার্যক্ষেত্র
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "দেওয়ানি আইন",
                "সম্পত্তি আইন",
                "ভূমি আইন",
                "উত্তরাধিকার আইন",
                "রিয়েল এস্টেট আইন",
                "দেওয়ানি লিটিগেশন",
              ].map((area) => (
                <li
                  key={area}
                  className="font-noto-sans-bengali text-sm flex items-center gap-2"
                  style={{ color: "rgba(245, 245, 220, 0.75)" }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-gold)",
                      display: "inline-block",
                      opacity: 0.6,
                    }}
                  />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Chambers & Contact Column */}
          <div>
            <h3
              className="font-noto-serif-bengali font-semibold mb-5"
              style={{ fontSize: "1rem", color: "var(--color-ivory)" }}
            >
              যোগাযোগ ও চেম্বার
            </h3>
            <div className="flex flex-col gap-3 font-noto-sans-bengali text-xs" style={{ color: "rgba(245, 245, 220, 0.8)" }}>
              <div>
                <span className="font-semibold block" style={{ color: "var(--color-gold)" }}>ফোন নম্বর:</span>
                <a href="tel:+8801552329553" className="hover:underline text-sm font-medium" style={{ color: "var(--color-ivory)" }}>
                  +৮৮০ ১৫৫২-৩২৯৫৫৩
                </a>
              </div>
              <div>
                <span className="font-semibold block" style={{ color: "var(--color-gold)" }}>ই-মেইল:</span>
                <a href="mailto:advocate.aliasraf@gmail.com" className="hover:underline" style={{ color: "var(--color-ivory)" }}>
                  advocate.aliasraf@gmail.com
                </a>
              </div>
              <div className="pt-2" style={{ borderTop: "1px solid rgba(212, 175, 55, 0.15)" }}>
                <span className="font-semibold block" style={{ color: "var(--color-gold)" }}>কোর্ট চেম্বার:</span>
                <span className="leading-relaxed block mt-0.5">
                  ঢাকা আইনজীবী সমিতি ভবন (৫ম তলা), রুম নং-২৩, কোর্ট হাউজ স্ট্রীট, কোতয়ালী, ঢাকা।
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(212, 175, 55, 0.15)" }}
        >
          <p
            className="font-noto-sans-bengali text-sm text-center md:text-left"
            style={{ color: "rgba(245, 245, 220, 0.65)" }}
          >
            © {currentYear} মোল্লা মোঃ আলী আশ্রাফ। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p
            className="font-noto-sans-bengali text-xs text-center md:text-right max-w-md leading-relaxed"
            style={{ color: "rgba(245, 245, 220, 0.50)" }}
          >
            এই ওয়েবসাইটে প্রকাশিত তথ্য সাধারণ তথ্যের উদ্দেশ্যে প্রদান করা
            হয়েছে। এটি কোনো নির্দিষ্ট বিষয়ে চূড়ান্ত আইনগত মতামতের বিকল্প নয়।
          </p>
        </div>
      </div>
    </footer>
  );
}
