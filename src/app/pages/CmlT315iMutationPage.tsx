import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";

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
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight mb-4">
          T315I is the most common mutation in TKI-resistant CML
          <sup className="text-[60%]">1-3</sup>
        </h1>
        <p className="text-white/90 text-[15px] md:text-[17px] font-[600] leading-snug">
          Among patients with a BCR::ABL1 mutation, the frequency of the T315I
          mutation was 10-27%.<sup className="text-[60%]">2,4-6,a</sup>
        </p>
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
/*  NCCN Badge                                                         */
/* ------------------------------------------------------------------ */

function NccnBadge() {
  return (
    <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-5 md:p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-[#237EBF] text-white text-[11px] md:text-[12px] font-[700] rounded px-3 py-1.5 leading-tight text-center">
          Category<br />2A
        </div>
        <div>
          <p className="text-[#1B2430] text-[14px] md:text-[15px] font-[600] leading-snug mb-1">
            NCCN treatment option
          </p>
          <p className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
            ICLUSIG<sup>&reg;</sup> (ponatinib) is recommended as a Category 2A
            NCCN treatment option for patients with T315I-positive CML (chronic
            phase, accelerated phase, or blast phase).
            <sup className="text-[60%]">9</sup>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PACE T315I results highlight                                       */
/* ------------------------------------------------------------------ */

function PaceT315iResults() {
  return (
    <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-5 md:p-6 mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Stat circle */}
        <div className="flex-shrink-0">
          <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-[6px] border-[#237EBF] flex items-center justify-center">
            <span className="text-[#003865] text-[32px] md:text-[38px] font-[800] leading-none">
              70%
            </span>
          </div>
        </div>
        {/* Description */}
        <div>
          <p className="text-[#1B2430] text-[15px] md:text-[17px] font-[700] leading-snug mb-2">
            of CP-CML patients with a T315I mutation in the PACE trial (n=64)
            achieved MCyR, and responses were deep and durable.
            <sup className="text-[60%]">10,11</sup>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export function CmlT315iMutationPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />

      {/* Literature review findings */}
      <section className="px-8 md:px-20 xl:px-32 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-4">
            Reviews of the clinical literature showed that:
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-8">
            <li>
              Development of the T315I mutation leads to resistance with first-
              or second-generation TKIs
              <sup className="text-[60%]">1,7</sup>
            </li>
            <li>
              BCR::ABL1 mutation testing helps inform TKI treatment choice
              <sup className="text-[60%]">7,8</sup>
            </li>
          </ul>

          {/* Divider */}
          <hr className="border-[#E3E8EF] mb-8" />

          {/* ICLUSIG pan-mutational heading */}
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            ICLUSIG is the only third-generation pan-mutational TKI that
            delivers proven long-term efficacy for patients with a T315I
            mutation<sup className="text-[60%]">9-11</sup>
          </h2>

          {/* NCCN badge */}
          <NccnBadge />

          {/* PACE T315I results */}
          <PaceT315iResults />

          {/* PACE trial design description */}
          <div className="mb-8">
            <h3 className="text-[#1B2430] text-[15px] md:text-[17px] font-[700] mb-3">
              PACE trial design
            </h3>
            <p className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              PACE was a single-arm, open-label, international, multicenter,
              phase 2 trial in adult CML or Ph+ ALL patients whose disease was
              considered to be resistant or intolerant to a prior kinase
              inhibitor or who had T315I mutation (N=449; n=64 T315I-positive
              CML). At study completion, the median duration of follow-up for
              the trial (all cohorts) was 40.5 months (range 0.1 months to 79.5
              months). The major efficacy outcome measure (primary endpoint) for
              patients with CP-CML was MCyR by 12 months, which included CCyR
              and PCyR.<sup className="text-[60%]">10,11</sup>
            </p>
          </div>

          {/* Footnotes */}
          <div className="space-y-2 mb-6">
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              <sup>a</sup>Data are from retrospective analyses of clinical trial
              populations, which may not be representative of the broader patient
              population.
            </p>
          </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className="px-8 md:px-20 xl:px-32 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="ICLUSIG 5-year safety data in CP-CML"
            linkText="Discover CP-CML PACE data"
            href="/efficacy/cml-pace-trial"
            navigate={navigate}
          />
          <CtaCard
            title="ICLUSIG simple once-daily oral dosing"
            linkText="Learn about ICLUSIG dosing"
            href="/dosing"
            navigate={navigate}
          />
        </div>
      </section>

      {/* Abbreviations */}
      <section className="px-8 md:px-20 xl:px-32 pb-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          CCyR=complete cytogenetic response; CML=chronic myeloid leukemia;
          CP-CML=chronic phase chronic myeloid leukemia; MCyR=major cytogenetic
          response; NCCN=National Comprehensive Cancer Network
          <sup>&reg;</sup> (NCCN<sup>&reg;</sup>); OS=overall survival;
          PCyR=partial cytogenetic response; Ph+ ALL=Philadelphia
          chromosome-positive acute lymphoblastic leukemia; TKI=tyrosine kinase
          inhibitor.
        </p>
      </section>
    </div>
  );
}
