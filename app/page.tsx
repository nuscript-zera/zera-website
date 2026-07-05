import ZeraHeroSection from "@/components/home/ZeraHeroSection";
import ZeraProductSection from "@/components/home/ZeraProductSection";
import ZeraSpecialtySection from "@/components/home/ZeraSpecialtySection";
import ZeraWhySection from "@/components/home/ZeraWhySection";
import SecuritySection from "@/components/home/SecuritySection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <ZeraHeroSection />
      <ZeraProductSection />
      <ZeraSpecialtySection />
      <ZeraWhySection />
      <SecuritySection />
      <FAQSection />
      <CTASection />
    </>
  );
}
