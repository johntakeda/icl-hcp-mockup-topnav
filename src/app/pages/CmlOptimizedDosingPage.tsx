import { useNavigate } from "react-router";
import { ChevronRight, Download } from "lucide-react";
import cml3rMob from "@/imports/pages/dosing/cml-3r-mob_121225-1.svg";
import cml3rDkt from "@/imports/pages/dosing/cml-3r_121225-1.svg";

const PDF_BASE = "https://test-iclusig-hcp-v2.pantheonsite.io";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function HeroBanner() {
  return (
    <section
      className="w-full py-10 lg:pt-40 px-4 md:px-16 xl:px-20"
      style={{ background: "linear-gradient(135deg, #003865 0%, #00507a 100%)" }}
    >
      <div className="max-w-4xl">
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight">
          ICLUSIG Optimized Dosing: The Path to Maximize Efficacy and Manage Tolerability
          <sup className="text-[60%]">1,2</sup>
        </h1>
      </div>
    </section>
  );
}

function CtaCard({
  title,
  linkText,
  href,
  navigate,
  isDownload = false,
}: {
  title: string;
  linkText: string;
  href: string;
  navigate: (path: string) => void;
  isDownload?: boolean;
}) {
  if (isDownload) {
    return (
      <div className="bg-[#003865] rounded-lg p-6 flex flex-col justify-between min-h-[160px]">
        <h3 className="text-white text-[16px] md:text-[18px] font-[700] leading-snug mb-4">
          {title}
        </h3>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white text-[14px] font-[600] border border-white rounded-md px-4 py-2 hover:bg-white/10 transition-colors self-start"
        >
          <Download size={16} />
          {linkText}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#003865] rounded-lg p-6 flex flex-col justify-between min-h-[160px]">
      <h3 className="text-white text-[16px] md:text-[18px] font-[700] leading-snug mb-4">
        {title}
      </h3>
      <button
        onClick={() => navigate(href)}
        className="inline-flex items-center gap-2 text-white text-[14px] font-[600] border border-white rounded-md px-4 py-2 hover:bg-white/10 transition-colors self-start"
      >
        {linkText}
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export function CmlOptimizedDosingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />

      {/* Main content */}
      <section className="px-4 md:px-16 xl:px-20 py-8 md:py-12">
        <div className="max-w-4xl">
          {/* Key dosing headline */}
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-4">
            45 mg &rarr; 15 mg for patients who achieve &le;1% BCR::ABL1
            <sup className="text-[60%]">IS</sup>
          </h2>

          <h3 className="text-[#1B2430] text-[15px] md:text-[17px] lg:text-[19px] font-[600] leading-snug mb-6">
            ICLUSIG OPTIC trial established an optimized dosing strategy in
            chronic-phase chronic myeloid leukemia<sup className="text-[60%]">1,2</sup>
          </h3>

          {/* 3 Rs section */}
          <h3 className="text-[#003865] text-[16px] md:text-[18px] font-[700] mb-4">
            For maximized disease control, follow the 3 Rs:
          </h3>

          {/* 3 Rs diagram */}
          <div className="mb-4">
            <picture>
              <source
                srcSet={cml3rMob}
                media="(max-width: 767px)"
              />
              <source
                srcSet={cml3rDkt}
                media="(min-width: 768px)"
              />
              <img
                src={cml3rDkt}
                alt="Three step dosing for ICLUSIG: Step 1 is to start with a 45 mg dose to establish efficacy. Step 2 is to reduce the dose to 15 mg to manage tolerability. Step 3 is to remain on 15 mg for as long as the patient's response is maintained."
                className="w-full max-w-[750px]"
              />
            </picture>
          </div>

          {/* Abbreviation note */}
          <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-8">
            BCR::ABL1<sup>IS</sup>=BCR::ABL1 international scale;
            CP-CML=chronic-phase chronic myeloid leukemia
          </p>
        </div>
      </section>

      {/* CTA cards */}
      <section className="px-4 md:px-16 xl:px-20 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
          <CtaCard
            title="Learn about the depth of optimized dosing with ICLUSIG"
            linkText="Download the dosing guide"
            href={`${PDF_BASE}/sites/default/files/resources/iclusig_dosing_guide.pdf`}
            navigate={navigate}
            isDownload
          />
          <CtaCard
            title="ICLUSIG achieved 5-year long-term efficacy in OPTIC"
            linkText="Explore OPTIC study efficacy"
            href="/efficacy/cml-optic-trial"
            navigate={navigate}
          />
          <CtaCard
            title="ICLUSIG optimized dosing and proven safety"
            linkText="Explore OPTIC safety data"
            href="/safety/cml-optic-trial"
            navigate={navigate}
          />
        </div>
      </section>
    </div>
  );
}
