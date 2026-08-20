"use client";

import { useState, useEffect } from "react";
import { GiScales } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "প্রধান পাতা", href: "#hero" },
  { label: "আইনজীবী সম্পর্কে", href: "#about" },
  { label: "আইনগত সেবাসমূহ", href: "#services" },
  { label: "আইনগত কার্যক্ষেত্র", href: "#practice-areas" },
  { label: "যোগাযোগ", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let ticking = false;
    const sections = ["hero", "about", "services", "practice-areas", "contact"];

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);

      // Active section detection
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollY >= el.offsetTop - 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    updateScrollState();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-forest-green-900/97 backdrop-blur-md shadow-green"
            : "bg-transparent"
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(1, 50, 44, 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.2)" : "none",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
        role="navigation"
        aria-label="প্রধান নেভিগেশন"
      >
        <div className="container-legal">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="flex items-center gap-3 group"
              aria-label="হোম পাতায় যান"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                style={{
                  border: "1.5px solid var(--color-gold)",
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                }}
              >
                <GiScales
                  style={{ color: "var(--color-gold)" }}
                  size={21}
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="font-noto-serif-bengali font-semibold leading-tight"
                  style={{ fontSize: "1.05rem", color: "var(--color-ivory)" }}
                >
                  মোল্লা মোঃ আলী আশ্রাফ
                </span>
                <span
                  className="font-noto-sans-bengali leading-none"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.03em",
                    color: "var(--color-gold)",
                    fontWeight: 500,
                    marginTop: "3px",
                  }}
                >
                  অ্যাডভোকেট · সুপ্রিম কোর্ট অব বাংলাদেশ
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="relative font-noto-sans-bengali px-4 py-2 text-sm transition-all duration-300"
                    style={{
                      color: isActive ? "var(--color-gold)" : "var(--color-ivory)",
                      fontWeight: isActive ? 600 : 400,
                      opacity: isActive ? 1 : 0.9,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.opacity = "0.9";
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-3 right-3 rounded-full"
                        style={{
                          height: "2.5px",
                          backgroundColor: "var(--color-gold)",
                          boxShadow: "0 0 10px rgba(212, 175, 55, 0.7)",
                        }}
                      />
                    )}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="ml-4 px-5 py-2.5 text-sm font-noto-sans-bengali font-medium transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-forest-green)",
                  fontWeight: "600",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "var(--color-gold-dark)";
                  (e.target as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "var(--color-gold)";
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                পরামর্শ নিন
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gold/50"
              style={{ color: "var(--color-ivory)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <HiX size={26} aria-hidden="true" />
              ) : (
                <HiMenu size={26} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            backgroundColor: "rgba(1, 50, 44, 0.98)",
            backdropFilter: "blur(12px)",
          }}
          aria-hidden={!menuOpen}
        >
          <div className="container-legal py-4 flex flex-col gap-1 border-t border-white/10">
            {navLinks.map((link, index) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-noto-sans-bengali py-3 px-2 text-base border-b border-white/5 transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--color-gold)" : "var(--color-ivory)",
                    fontWeight: isActive ? 600 : 400,
                    opacity: isActive ? 1 : 0.9,
                    animationDelay: `${index * 50}ms`,
                  }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="mt-3 px-5 py-3 text-center font-noto-sans-bengali font-semibold transition-all duration-300"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-forest-green)",
              }}
              tabIndex={menuOpen ? 0 : -1}
            >
              পরামর্শ নিন
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
