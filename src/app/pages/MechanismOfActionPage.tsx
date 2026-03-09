import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import moaImage from "@/imports/pages/cml/moa-image.svg";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function HeroBanner() {
  return (
    <section
      className="w-full py-10 lg:pt-40 px-8 md:px-20 xl:px-32"
      style={{ background: "linear-gradient(135deg, #003865 0%, #00507a 100%)" }}
    >
      <div className="max-w-4xl">
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight">
          Ponatinib mechanism of action inhibits BCR::ABL1 regardless of mutation
          status<sup className="text-[60%]">1-4</sup>
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
}: {
  title: string;
  linkText: string;
  href: string;
  navigate: (path: string) => void;
}) {
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

export function MechanismOfActionPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />

      {/* Main content */}
      <section className="px-8 md:px-20 xl:px-32 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            The mechanism of action shows inhibition of cells expressing native or
            mutant BCR::ABL1, including T315I mutations
            <sup className="text-[60%]">1,4-7</sup>
          </h2>

          {/* MOA diagram — imported as image */}
          <div className="mb-8">
            <img
              src={moaImage}
              alt="Ponatinib inhibits BCR::ABL1 with or without mutations, including T315I."
              className="w-full max-w-[700px]"
            />
          </div>

          {/* How ponatinib binds */}
          <div className="mb-8">
            <h2 className="text-[#1B2430] text-[18px] md:text-[22px] font-[700] mb-3">
              How ponatinib binds and inhibits BCR::ABL1
            </h2>
            <h3 className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] mb-4 leading-snug">
              Ponatinib is the only pan-mutational TKI that was purposefully
              engineered to inhibit BCR::ABL1 with or without mutations
              <sup className="text-[60%]">1,4-8</sup>
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
              <li>Binds to the ATP binding site of BCR::ABL1</li>
              <li>
                Inhibits the activity of BCR::ABL1, leading to cell death
              </li>
              <li>
                Shows activity against all known single-point mutations, including
                T315I
              </li>
            </ul>

            <p className="text-[#374151] text-[13px] md:text-[14px] italic mb-1">
              According to the NCCN Clinical Practice Guidelines in Oncology (NCCN
              Guidelines<sup>®</sup>) for CML:
            </p>
            <p className="text-[#1B2430] text-[14px] md:text-[15px] font-[700]">
              Ponatinib (ICLUSIG) has no contraindicated BCR::ABL1 mutations.
              <sup className="text-[60%]">3</sup>
            </p>
          </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className="px-8 md:px-20 xl:px-32 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="Results from the OPTIC trial in TKI-resistant CP-CML"
            linkText="Discover CP-CML OPTIC data"
            href="/efficacy/cml-optic-trial"
            navigate={navigate}
          />
          <CtaCard
            title="Findings in patients with Ph+ ALL"
            linkText="Explore Ph+ ALL PACE data"
            href="/ph-all/first-line"
            navigate={navigate}
          />
        </div>
      </section>

      {/* Abbreviations */}
      <section className="px-8 md:px-20 xl:px-32 pb-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          ATP= Adenosine triphosphate; CP=chronic phase; CP-CML=chronic-phase
          chronic myeloid leukemia; Ph+ ALL= Philadelphia chromosome-positive acute
          lymphoblastic leukemia; TKI=tyrosine kinase inhibitor.
        </p>
      </section>
    </div>
  );
}
