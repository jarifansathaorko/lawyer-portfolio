"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Image from "next/image";
import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const legalMatters = [
  { value: "", label: "বিষয়ের ধরন নির্বাচন করুন" },
  { value: "property", label: "সম্পত্তি সংক্রান্ত মামলা" },
  { value: "land", label: "ভূমি ও জমি বিরোধ" },
  { value: "inheritance", label: "উত্তরাধিকার ও উত্তরসূরি" },
  { value: "realestate", label: "রিয়েল এস্টেট আইনগত সেবা" },
  { value: "civil", label: "দেওয়ানি মামলা ও লিটিগেশন" },
  { value: "other", label: "অন্যান্য আইনগত পরামর্শ" },
];

const contactInfo = [
  {
    icon: <HiPhone size={20} aria-hidden="true" />,
    label: "ফোন নম্বর",
    value: "+৮৮০ ১৫৫২-৩২৯৫৫৩",
    href: "tel:+8801552329553",
  },
  {
    icon: <HiMail size={20} aria-hidden="true" />,
    label: "ই-মেইল",
    value: "advocate.aliasraf@gmail.com",
    href: "mailto:advocate.aliasraf@gmail.com",
  },
];

const chambers = [
  {
    title: "কোর্ট চেম্বার",
    address: "ঢাকা আইনজীবী সমিতি (পূবালী ব্যাংক) ভবন (৫ম তলা), রুম নং-২৩, ৬-৭, কোর্ট হাউজ স্ট্রীট, কোতয়ালী, ঢাকা-১১০০।",
    hours: "সকাল ৯:০০টা – দুপুর ৩:০০টা",
    note: "শুক্রবার ও শনিবার ব্যতীত",
  },
  {
    title: "বাসা ও চেম্বার",
    address: "৫/৩/৫, দক্ষিণ গাঁও, কাচারীপাড়া (রাজাবরবাগ কালীবাড়ীর পূর্ব দিকে), সবুজবাগ, ঢাকা।",
    hours: "সন্ধ্যা ৭:৩০টা – রাত ১০:৩০টা",
    note: "প্রতিদিন",
  },
];

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const matterValue = formData.get("matter") as string;
    const matterObj = legalMatters.find((m) => m.value === matterValue);
    const matterLabel = matterObj && matterObj.value ? matterObj.label : "সাধারণ দেওয়ানি পরামর্শ";
    const message = (formData.get("message") as string)?.trim() || "";

    if (!name || !phone || !message) {
      alert("অনুগ্রহ করে আপনার নাম, ফোন নম্বর এবং বার্তা লিখুন।");
      return;
    }

    const textLines = [
      "আসসালামু আলাইকুম।",
      "আমি অ্যাডভোকেট মোল্লা মোঃ আলী আশ্রাফ মহোদয়ের সঙ্গে আইনগত পরামর্শের জন্য যোগাযোগ করছি।",
      "",
      `*নাম:* ${name}`,
      `*ফোন নম্বর:* ${phone}`,
      email ? `*ই-মেইল:* ${email}` : null,
      `*আইনগত বিষয়:* ${matterLabel}`,
      "",
      "*বার্তা / মামলার বিবরণ:*",
      message,
    ].filter(Boolean);

    const whatsappText = textLines.join("\n");
    const whatsappUrl = `https://wa.me/8801552329553?text=${encodeURIComponent(whatsappText)}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => setSubmitted(false), 7000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-pad"
      aria-label="যোগাযোগ"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="container-legal">
        {/* Header */}
        <div
          className="max-w-xl mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="section-eyebrow">সরাসরি যোগাযোগ করুন</span>
          <div className="gold-divider" aria-hidden="true" />
          <h2
            className="font-noto-serif-bengali font-bold mb-4"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              color: "var(--color-forest-green)",
              lineHeight: "1.3",
            }}
          >
            আইনগত পরামর্শের জন্য যোগাযোগ করুন
          </h2>
          <p
            className="font-noto-sans-bengali text-charcoal-light leading-relaxed"
            style={{ fontSize: "1rem" }}
          >
            আপনার আইনগত বিষয় নিয়ে আলোচনা করতে সরাসরি যোগাযোগ করুন অথবা
            চেম্বারে সাক্ষাতের জন্য সময় নির্ধারণ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            {/* Lawyer card */}
            <div
              className="p-8 mb-6"
              style={{
                backgroundColor: "var(--color-forest-green)",
                borderLeft: "4px solid var(--color-gold)",
                boxShadow: "0 10px 30px rgba(1, 50, 44, 0.15)",
              }}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h3
                    className="font-noto-serif-bengali font-bold mb-1"
                    style={{ fontSize: "1.3rem", color: "var(--color-ivory)" }}
                  >
                    মোল্লা মোঃ আলী আশ্রাফ
                  </h3>
                  <div
                    className="font-noto-sans-bengali font-medium mb-1"
                    style={{ fontSize: "0.9rem", color: "var(--color-gold-light)" }}
                  >
                    এম.এস.এস, এলএল.বি (ঢা: বি:)
                  </div>
                  <p
                    className="font-noto-sans-bengali"
                    style={{ fontSize: "0.85rem", color: "var(--color-gold)" }}
                  >
                    অ্যাডভোকেট, সুপ্রিম কোর্ট অব বাংলাদেশ
                  </p>
                </div>

                {/* Lawyer Photo Thumbnail */}
                <div
                  className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-md"
                  style={{
                    border: "2px solid var(--color-gold)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <Image
                    src="/advocate_mollah_md_ali_ashraf.jpg"
                    alt="অ্যাডভোকেট মোল্লা মোঃ আলী আশ্রাফ"
                    fill
                    sizes="96px"
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                    quality={85}
                  />
                </div>
              </div>

              {/* Direct Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" style={{ borderTop: "1px solid rgba(212, 175, 55, 0.25)" }}>
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 mt-1"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        className="font-noto-sans-bengali mb-0.5"
                        style={{
                          fontSize: "0.72rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "rgba(245, 245, 220, 0.65)",
                        }}
                      >
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        className="font-noto-sans-bengali transition-colors block font-medium"
                        style={{ fontSize: "0.95rem", color: "var(--color-ivory)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-ivory)"; }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chamber Cards */}
            <div className="space-y-4 mb-6">
              {chambers.map((chamber, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white"
                  style={{
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderLeft: "3px solid var(--color-gold)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <HiLocationMarker size={20} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                    <h4
                      className="font-noto-serif-bengali font-bold"
                      style={{ fontSize: "1.05rem", color: "var(--color-forest-green)" }}
                    >
                      {chamber.title}
                    </h4>
                  </div>
                  <p
                    className="font-noto-sans-bengali text-charcoal leading-relaxed mb-3"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {chamber.address}
                  </p>
                  <div
                    className="pt-3 flex items-center gap-2 text-xs font-noto-sans-bengali"
                    style={{ borderTop: "1px solid rgba(212, 175, 55, 0.15)" }}
                  >
                    <HiClock size={16} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                    <span className="font-semibold text-forest-green">সাক্ষাতের সময়:</span>
                    <span className="text-charcoal">{chamber.hours}</span>
                    <span className="text-charcoal-light italic">({chamber.note})</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action note */}
            <div
              className="p-4"
              style={{
                backgroundColor: "rgba(212, 175, 55, 0.1)",
                borderLeft: "3px solid var(--color-gold)",
              }}
            >
              <p
                className="font-noto-sans-bengali text-charcoal-light leading-relaxed"
                style={{ fontSize: "0.85rem" }}
              >
                <strong className="text-charcoal">দ্রষ্টব্য:</strong> চেম্বারে সরাসরি সাক্ষাতের
                জন্য আগে থেকে ফোনে সময় নির্ধারণ করে নেওয়া সুবিধাজনক।
              </p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white"
              style={{ border: "1px solid rgba(212, 175, 55, 0.15)" }}
              noValidate
            >
              <div className="mb-6">
                <h3
                  className="font-noto-serif-bengali font-bold mb-1"
                  style={{ fontSize: "1.2rem", color: "var(--color-forest-green)" }}
                >
                  বার্তা পাঠান
                </h3>
                <p className="font-noto-sans-bengali text-xs text-charcoal-light">
                  ফরমটি পূরণ করে সাবমিট করলে তথ্যসহ সরাসরি আইনজীবীর হোয়াটসঅ্যাপে চ্যাট চালু হবে।
                </p>
              </div>

              {/* Success message */}
              {submitted && (
                <div
                  className="mb-6 p-4 font-noto-sans-bengali text-sm flex items-center gap-2"
                  style={{
                    backgroundColor: "rgba(37, 211, 102, 0.12)",
                    borderLeft: "3px solid #25D366",
                    color: "#0a5c27",
                  }}
                  role="alert"
                >
                  <FaWhatsapp size={20} className="text-[#25D366] flex-shrink-0" />
                  <span>তথ্য প্রস্তুত করা হয়েছে এবং হোয়াটসঅ্যাপ ওপেন হচ্ছে...</span>
                </div>
              )}

              <div className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    আপনার নাম <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    placeholder="আপনার পুরো নাম"
                    required
                    aria-required="true"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="form-label">
                    ফোন নম্বর <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    className="form-input"
                    placeholder="০১XXXXXXXXX"
                    required
                    aria-required="true"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="form-label">
                    ই-মেইল (ঐচ্ছিক)
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-input"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Legal Matter Type */}
                <div>
                  <label htmlFor="contact-matter" className="form-label">
                    আইনগত বিষয়ের ধরন
                  </label>
                  <select
                    id="contact-matter"
                    name="matter"
                    className="form-input"
                    style={{ cursor: "pointer" }}
                  >
                    {legalMatters.map((m) => (
                      <option key={m.value} value={m.value}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="form-label">
                    আপনার বার্তা / মামলার বিবরণ <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-input"
                    rows={4}
                    placeholder="আপনার আইনগত বিষয় বা বিরোধের সংক্ষিপ্ত বিবরণ লিখুন..."
                    required
                    aria-required="true"
                    style={{ resize: "vertical" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-primary w-full justify-center gap-2"
                  style={{ fontSize: "1rem", padding: "0.95rem 2rem" }}
                >
                  <FaWhatsapp size={20} aria-hidden="true" />
                  হোয়াটসঅ্যাপে বার্তা পাঠান
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
