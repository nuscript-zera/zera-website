import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function PageCTA({
  heading,
  subcopy,
  primaryLabel = "Book an Ophthalmology Demo",
  primaryHref = "/request-demo?interest=ophthalmology-demo",
  secondaryLabel = "Explore the Platform",
  secondaryHref = "/platform",
}: {
  heading: string;
  subcopy: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="max-lg:pt-[5.3125rem] lg:pt-[7.5rem] max-lg:pb-[3.5rem] lg:pb-[5rem]" style={{ backgroundColor: "#0f172a" }}>
      <div className="max-w-[60rem] mx-auto px-4 md:px-[1.5938rem] lg:px-[2.125rem] text-center">
        <AnimatedSection>
          <h2 className="font-bold leading-[0.95] tracking-[-0.02em] text-balance text-white text-[2.4rem] lg:text-[3.2rem]">
            {heading}
          </h2>
          <p className="mt-5 mx-auto max-w-[40rem] text-lg lg:text-xl leading-relaxed text-white/70">
            {subcopy}
          </p>
          <div className="mt-8 flex justify-center gap-3.5 max-md:flex-col md:flex-row">
            <a href={primaryHref}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 gap-2 px-8 rounded-xl font-semibold text-base h-12 w-full md:w-auto"
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href={secondaryHref}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 rounded-xl font-semibold text-base h-12 w-full md:w-auto"
              >
                {secondaryLabel}
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-7 gap-y-3 text-sm text-white/80">
            <a href="mailto:info@zera.health" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              info@zera.health
            </a>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-3 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-white/55">
            <span>HIPAA-compliant</span>
            <span aria-hidden="true">·</span>
            <span>BAA available</span>
            <span aria-hidden="true">·</span>
            <span>SOC 2 aligned</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
