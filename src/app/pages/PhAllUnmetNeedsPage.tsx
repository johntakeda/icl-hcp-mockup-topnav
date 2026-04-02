import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import sixtyEightPie from "@/imports/pages/ph-all/1l-ph-all-sixty-eight-percent-green-pie-chart-dkt.png";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function HeroBanner() {
  return (
    <section
      className="w-full py-10 md:py-14 lg:pt-40"
      style={{ background: "linear-gradient(135deg, #003865 0%, #00507a 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
      <div className="max-w-4xl">
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight mb-3">
          Challenges exist when treating Ph+{" "}
          acute lymphoblastic leukemia in adults
          <sup className="text-[60%]">1-5</sup>
        </h1>
        <p className="text-white text-[15px] md:text-[17px] font-[600] leading-snug">
          Explore considerations for adults newly diagnosed with Ph+ ALL
        </p>
      </div>
      </div>
    </section>
  );
}

function AnchorNav() {
  return (
    <nav className="border-b border-[#E3E8EF] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <ul className="flex gap-6 max-w-4xl">
          <li>
            <a
              href="#frontline"
              className="inline-block py-3 text-[#003865] text-[14px] md:text-[15px] font-[600] border-b-2 border-[#003865] hover:opacity-80 transition-opacity"
            >
              Mutational burden
            </a>
          </li>
          <li>
            <a
              href="#mrd-negative"
              className="inline-block py-3 text-[#374151] text-[14px] md:text-[15px] font-[600] border-b-2 border-transparent hover:border-[#003865] hover:text-[#003865] transition-colors"
            >
              MRD-negative CR
            </a>
          </li>
        </ul>
      </div>
    </nav>
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

export function PhAllUnmetNeedsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />
      <AnchorNav />

      {/* Section 1: Mutational burden */}
      <section id="frontline" className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            Ph+ ALL is an aggressive disease with a high mutational burden
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
            <li>
              Patients with Ph+ ALL have a high probability of developing
              mutations in BCR::ABL1<sup className="text-[60%]">2,3</sup>
            </li>
            <li>
              Mutations lead to resistance and are a primary cause of relapse
              after 1st- and 2nd-generation TKIs<sup className="text-[60%]">4</sup>
            </li>
          </ul>

          {/* T315I callout */}
          <div className="bg-[#F5F7FA] border-l-4 border-[#0A8F8A] rounded-r-lg p-5 mb-8">
            <p className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] leading-snug mb-3">
              Half of patients who progressed on a 2nd-generation TKI had a
              T315I mutation<sup className="text-[60%]">5*</sup>
            </p>
            <button
              onClick={() => navigate("/cml/t315i-mutation")}
              className="inline-flex items-center gap-2 text-[#003865] text-[14px] font-[600] hover:underline"
            >
              Learn More
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Failure to achieve CMR heading */}
          <h3 className="text-[#1B2430] text-[16px] md:text-[20px] font-[700] leading-snug mb-6">
            Failure to achieve a complete molecular response
          </h3>
        </div>
      </section>

      {/* 68% statistic section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8 md:pb-12">
        <div className="max-w-4xl">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start mb-8">
            {/* Pie chart image */}
            <div className="flex-shrink-0">
              <img
                src={sixtyEightPie}
                alt="68% of patients failed to achieve a complete molecular response."
                className="w-full max-w-[160px]"
              />
            </div>

            {/* Bullet points */}
            <ul className="list-disc pl-6 space-y-3 text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
              <li>
                In a meta-analysis, over{" "}
                <strong className="text-[#1B2430]">2/3 of patients</strong>{" "}
                failed to achieve a complete molecular response with 1st- or
                2nd-generation TKIs + chemotherapy
                <sup className="text-[60%]">6&dagger;</sup>
              </li>
              <li>
                Outcomes with 1st- and 2nd-generation TKIs vary by choice of
                agent and chemotherapy regimen
                <sup className="text-[60%]">3</sup>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key message callout */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8 md:pb-12">
        <div className="max-w-4xl">
          <div
            className="rounded-lg p-6 md:p-8"
            style={{ background: "linear-gradient(135deg, #003865 0%, #00507a 100%)" }}
          >
            <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-[700] leading-snug">
              Prescribing an effective 1st-line treatment is critical to
              achieving a complete molecular response
              <sup className="text-[60%]">4</sup>
            </p>
          </div>
        </div>
      </section>

      {/* Footnotes for section 1 */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8">
        <div className="max-w-4xl space-y-3">
          <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed">
            <sup>*</sup>Based on findings from a phase II, single-arm,
            multicenter trial of 53 evaluable adults with newly diagnosed Ph+
            ALL who received 84 days of dasatinib induction with steroids
            (first 32 days) and intrathecal chemotherapy. Among 23 patients who
            relapsed (17 analyzed), 12 (52%) harbored the T315I mutation at
            relapse.
          </p>
          <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed font-[600]">
            <sup>&dagger;</sup>This meta-analysis (25 studies; N=1644) had
            several limitations: it relied on study-level data with
            heterogeneous treatment regimens; it included studies based on
            targeted rather than systemic literature search; results may be
            limited due to changes in treatment patterns and clinical practice
            since data were reported; and data for analysis were limited to
            studies available at the time of analysis. Data should be
            interpreted with caution.
          </p>
          <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed">
            Complete molecular response was defined as the absence of detectable
            BCR::ABL1 transcripts with a sensitivity of 0.01%.
            <sup>6</sup>
          </p>
        </div>
      </section>

      {/* Section 2: MRD-negative CR */}
      <section id="mrd-negative" className="py-8 md:py-12 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-8">
            MRD-negative CR is a stringent composite endpoint combining both
            hematologic and molecular response
            <sup className="text-[60%]">1,7</sup>
          </h2>

          {/* Two-column layout for MRD negativity + CR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* MRD Negativity column */}
            <div className="bg-white rounded-lg border border-[#E3E8EF] p-5 md:p-6">
              <h3 className="text-[#003865] text-[16px] md:text-[18px] font-[700] mb-4">
                MRD negativity<sup className="text-[60%]">1,7</sup>
              </h3>
              <div className="mb-4">
                <p className="text-[#1B2430] text-[14px] font-[700] mb-1">
                  Molecular assessment
                </p>
                <p className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed font-[600]">
                  {"\u2264"}0.01% BCR::ABL1/ABL1 or undetectable BCR::ABL1
                  transcripts in cDNA with {"\u2265"}10,000 ABL1 transcripts
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
                <li>
                  In ALL, MRD negativity is recognized as an important
                  prognostic indicator of clinical outcomes across genetic
                  subtypes<sup className="text-[60%]">7</sup>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Although MRD negativity is a measure of cancer on the
                      molecular level, National Comprehensive Cancer
                      Network<sup className="text-[60%]">&reg;</sup>{" "}
                      (NCCN<sup className="text-[60%]">&reg;</sup>) recommends
                      adequate count recovery per protocol before transitioning
                      to post-remission therapy for patients who achieve it
                      <sup className="text-[60%]">1</sup>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Complete remission column */}
            <div className="bg-white rounded-lg border border-[#E3E8EF] p-5 md:p-6">
              <h3 className="text-[#003865] text-[16px] md:text-[18px] font-[700] mb-4">
                Complete remission<sup className="text-[60%]">1*</sup>
              </h3>
              <div className="mb-3">
                <p className="text-[#1B2430] text-[14px] font-[700] mb-1">
                  Hematologic assessment
                </p>
                <p className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed font-[600] mb-3">
                  Patient meets all of the following for at least 4 weeks:
                </p>
              </div>
              <ul className="space-y-2 text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
                <li className="flex gap-2">
                  <span className="flex-shrink-0">&bull;</span>
                  <span>No circulating blasts and &lt;5% blasts in the bone marrow</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">&bull;</span>
                  <span>Normal maturation of all cellular components in the bone marrow</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">&bull;</span>
                  <span>No extramedullary disease</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">&bull;</span>
                  <span>ANC {"\u2265"}1000/mcL</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">&bull;</span>
                  <span>Platelets {"\u2265"}100,000/mcL</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed">
            *Complete remission is also known as complete response.
          </p>
        </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="Redefining treatment in 1st-line Ph+ ALL"
            linkText="Explore PhALLCON efficacy"
            href="/ph-positive-all/first-line#efficacy"
            navigate={navigate}
          />
          <CtaCard
            title="Comparable safety profile to imatinib in a clinical trial"
            linkText="PhALLCON safety data"
            href="/ph-positive-all/first-line#safety"
            navigate={navigate}
          />
        </div>
      </section>

      {/* Abbreviations */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          ANC=absolute neutrophil count; cDNA=complementary DNA; CR=complete
          remission; mcL=microliter; MRD=minimal residual disease;
          NCCN=National Comprehensive Cancer Network; Ph+ ALL=Philadelphia
          chromosome-positive acute lymphoblastic leukemia; TKI=tyrosine kinase
          inhibitor.
        </p>
      </section>
    </div>
  );
}
