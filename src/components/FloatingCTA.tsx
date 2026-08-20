"use client";

import { useEffect, useState } from "react";
import { HiPhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShow(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      className="floating-btn"
      style={{
        opacity: show ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
      aria-label="ফ্লোটিং যোগাযোগ বোতাম"
    >
      {/* Expanded options */}
      {expanded && (
        <>
          {/* WhatsApp */}
          <a
            href="https://wa.me/8801552329553"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-sm font-noto-sans-bengali font-medium"
            style={{
              backgroundColor: "#25D366",
              color: "#FFFFFF",
              boxShadow: "0 4px 15px rgba(37, 211, 102, 0.35)",
              animation: "fadeInUp 0.25s ease",
            }}
            aria-label="হোয়াটসঅ্যাপে যোগাযোগ করুন"
          >
            <FaWhatsapp size={18} aria-hidden="true" />
            হোয়াটসঅ্যাপে যোগাযোগ
          </a>

          {/* Phone */}
          <a
            href="tel:+8801552329553"
            className="flex items-center gap-3 px-4 py-3 text-sm font-noto-sans-bengali font-medium"
            style={{
              backgroundColor: "var(--color-forest-green)",
              color: "var(--color-ivory)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              boxShadow: "0 4px 15px rgba(1, 50, 44, 0.35)",
              animation: "fadeInUp 0.35s ease",
            }}
            aria-label="কল করুন"
          >
            <HiPhone size={18} aria-hidden="true" style={{ color: "var(--color-gold)" }} />
            ০১৫৫২-৩২৯৫৫৩
          </a>
        </>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center w-14 h-14"
        style={{
          backgroundColor: "var(--color-gold)",
          color: "var(--color-forest-green)",
          boxShadow: "0 4px 20px rgba(212, 175, 55, 0.45)",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
        }}
        aria-label={expanded ? "বন্ধ করুন" : "যোগাযোগ করুন"}
        aria-expanded={expanded}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = expanded
            ? "rotate(45deg) scale(1.1)"
            : "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = expanded
            ? "rotate(45deg)"
            : "rotate(0)";
        }}
      >
        <HiPhone size={22} aria-hidden="true" />
      </button>
    </div>
  );
}
