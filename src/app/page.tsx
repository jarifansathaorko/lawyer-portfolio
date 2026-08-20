import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Hero from "@/sections/Hero";
import CredibilitySection from "@/sections/CredibilitySection";
import AboutLawyer from "@/sections/AboutLawyer";
import ServicesSection from "@/sections/ServicesSection";
import PracticeAreasSection from "@/sections/PracticeAreasSection";
import PropertySection from "@/sections/PropertySection";
import CommitmentSection from "@/sections/CommitmentSection";
import ConsultationProcess from "@/sections/ConsultationProcess";
import FAQ from "@/sections/FAQ";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <CredibilitySection />
        <AboutLawyer />
        <ServicesSection />
        <PracticeAreasSection />
        <PropertySection />
        <CommitmentSection />
        <ConsultationProcess />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
