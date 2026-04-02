import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import paceTrialDesign from "@/imports/pages/efficacy/PACE-trial-design-blue-chevron-graphic-DKT.svg";
import pacePatientChars from "@/imports/pages/efficacy/PACE-patient-characteristics-three-cohorts-blue-table-DKT.svg";
import paceBestTki from "@/imports/pages/efficacy/PACE-best-TKI-response-twenty-six-three-percent-pie-charts-DKT.svg";
import paceLongTerm from "@/imports/pages/efficacy/PACE-long-term-TKI-benefit-fifty-five-and-fourty-pie-charts-DKT.svg";
import paceMcyr from "@/imports/pages/efficacy/PACE-achieved-MCyR-by-twelve-months-bar-chart-three-cohorts-DKT.svg";
import paceAdvDisease from "@/imports/pages/efficacy/PACE-efficacy-adv-disease-MaHR-CHR-four-bar-charts-DKT.svg";
import paceTimeToMahr from "@/imports/pages/efficacy/PACE-median-time-to-MaHR-horizontal-bar-charts-DKT.svg";
import paceDurationMahr from "@/imports/pages/efficacy/PACE-median-duration-of-MaHR-bar-charts-DKT.svg";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function HeroBanner() {
  return (
    <section
      className="w-full py-10 lg:pt-40"
      style={{ background: "linear-gradient(135deg, #003865 0%, #00507a 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <p className="text-white/80 text-[13px] md:text-[14px] font-[600] uppercase tracking-wide mb-2">
          Ponatinib PACE trial: 5-year CML data
        </p>
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight">
          ICLUSIG (ponatinib) delivered deep and durable efficacy
          <sup className="text-[60%]">1,2</sup>
        </h1>
      </div>
    </section>
  );
}

function AnchorNav() {
  return (
    <nav className="w-full bg-[#F5F7FA] border-b border-[#E3E8EF]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 py-3 text-[13px] md:text-[14px] font-[600] text-[#237EBF]">
          <li>
            <a href="#trialdesign" className="hover:underline">
              Trial design
            </a>
          </li>
          <li>
            <a href="#responserates" className="hover:underline">
              Response Rates
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

export function CmlPaceEfficacyPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />
      <AnchorNav />

      {/* ---- Trial Design ---- */}
      <section id="trialdesign" className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[20px] md:text-[24px] lg:text-[28px] font-[800] uppercase tracking-wide mb-6">
            PACE Trial Design
          </h2>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
            PACE was a single-arm, open-label, international, multicenter, phase
            2 trial studying ICLUSIG in adult patients with CML or Ph+ ALL that
            was resistant or intolerant to a prior kinase inhibitor, or who had
            T315I mutation (n=449).
            <sup className="text-[60%]">1,3</sup>
          </p>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
            In PACE, patients received a starting dose of ICLUSIG 45 mg orally
            once daily (N=449; n=270 CP-CML, n=85 AP-CML, n=62 BP-CML, n=32
            Ph+ ALL).<sup className="text-[60%]">1,3</sup>
          </p>

          {/* Trial design diagram */}
          <div className="mb-6">
            <img
              src={paceTrialDesign}
              alt="Chart showing the study design for PACE. CP-CML patients were given a starting dose of 45 mg. The median follow-up time was 5 years."
              className="w-full max-w-[700px]"
            />
          </div>

          <div className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-6 space-y-2">
            <p>
              <sup>a</sup>Three patients who had not received prior dasatinib or
              nilotinib did not have T315I confirmed at baseline and were not
              evaluable for efficacy.<sup>1</sup>
            </p>
            <p>
              <sup>b</sup>Dose reductions to 15 mg once daily or 30 mg once
              daily were applied to patients with and without MCyR, respectively,
              and were applied to manage AEs, or implemented proactively following
              an accumulation of AOEs.<sup>1,2</sup>
            </p>
            <p>
              <sup>c</sup>Resistance in CP-CML while on prior TKI therapy was
              defined as failure to achieve either a CHR (by 3 months), a minor
              cytogenetic response (by 6 months), or a MCyR (by 12 months).
              Patients with CP-CML who experienced a loss of response or
              development of a kinase domain mutation in the absence of a CCyR or
              progression to AP-CML or BP-CML at any time on prior TKI therapy
              were also considered resistant. Intolerance was defined as the
              discontinuation of prior TKI therapy due to toxicities despite
              optimal management in the absence of a CCyR in patients with CP-CML
              or MaHR for patients with AP-CML, BP-CML, or Ph+ ALL.
              <sup>1</sup>
            </p>
          </div>

          {/* Key trial points */}
          <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-5 mb-6">
            <ul className="space-y-3 text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#237EBF] mt-1 flex-shrink-0">&#8226;</span>
                <span>
                  At study completion, the median duration of follow-up for the
                  trial (all cohorts) was 40.5 months (range: 0.1 months to 79.5
                  months)<sup className="text-[60%]">1</sup>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#237EBF] mt-1 flex-shrink-0">&#8226;</span>
                <span>
                  The major efficacy outcome measure (primary endpoint) for
                  patients with chronic-phase chronic myeloid leukemia was MCyR
                  by 12 months, which included CCyR and PCyR
                  <sup className="text-[60%]">1,a</sup>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#237EBF] mt-1 flex-shrink-0">&#8226;</span>
                <span>
                  Dose reductions to 30 mg or 15 mg once daily were applied to
                  manage adverse reactions, per protocol, or implemented
                  proactively in 2013<sup className="text-[60%]">2,b</sup>
                </span>
              </li>
            </ul>
          </div>

          <div className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-4 space-y-1">
            <p>
              <sup>a</sup>Primary endpoint was MCyR by 12 months for CP-CML and
              MaHR by 6 months for AP-CML, BP-CML, or Ph+ ALL. Secondary
              endpoints included major molecular response (MMR), time to and
              duration of response, progression-free survival (PFS), overall
              survival (OS), and safety.<sup>2</sup>
            </p>
            <p>
              <sup>b</sup>15 mg once daily for CP-CML patients with MCyR, and
              30 mg once daily for CP-CML patients without MCyR, AP-CML, and
              BP-CML patients.<sup>2</sup>
            </p>
          </div>
        </div>
      </section>

      {/* ---- Patient Characteristics ---- */}
      <section className="py-8 md:py-12 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[20px] md:text-[24px] lg:text-[28px] font-[800] uppercase tracking-wide mb-4">
            Patient Characteristics
          </h2>

          <p className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] leading-snug mb-6">
            CP-CML patients in the PACE trial had highly-resistant disease
            &mdash; 80% of patients were resistant* to prior TKI therapy and 24%
            had at least one BCR::ABL1 mutation
            <sup className="text-[60%]">1,2</sup>
          </p>

          {/* Patient characteristics table image */}
          <div className="overflow-x-auto mb-8">
            <img
              src={pacePatientChars}
              alt="Table summarizing patient demographics and disease characteristics in the PACE study."
              className="w-full max-w-[700px]"
            />
          </div>

          {/* Prior response section */}
          <h3 className="text-[#003865] text-[16px] md:text-[20px] font-[800] uppercase mb-2">
            Response Rate: At enrollment, few study patients had previously
            responded to a prior tyrosine kinase inhibitor
            <sup className="text-[60%]">3</sup>
          </h3>

          <h4 className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] mb-4">
            Best response to any treatment prior to ICLUSIG
            <sup className="text-[60%]">2,a</sup>
          </h4>

          <div className="mb-4">
            <img
              src={paceBestTki}
              alt="26% of patients achieved MCyR or better. 3% of patients achieved MMR."
              className="w-full max-w-[500px]"
            />
          </div>

          <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-4">
            <sup>a</sup>Most recent regimen containing dasatinib or nilotinib.
            <sup>1,3</sup>
          </p>
        </div>
        </div>
      </section>

      {/* ---- Response Rates CP-CML ---- */}
      <section id="responserates" className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[18px] md:text-[22px] lg:text-[26px] font-[800] uppercase leading-tight mb-2">
            In PACE, TKI-resistant patients achieved deep, clinically significant
            responses and high rates of MMR
            <sup className="text-[60%]">1</sup>
          </h2>
          <h3 className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] leading-snug mb-6">
            Proven long-term benefit in patients with TKI-resistant CP-CML
            (n=267)<sup className="text-[60%]">1</sup>
          </h3>

          {/* Long-term benefit pie charts */}
          <div className="mb-6">
            <img
              src={paceLongTerm}
              alt="55% of patients achieved MCyR by 12 months (n=148/267). 40% of patients achieved MMR at any time (n=105/267)."
              className="w-full max-w-[600px]"
            />
          </div>

          {/* MCyR by 12 months section */}
          <h2 className="text-[#003865] text-[18px] md:text-[22px] font-[800] uppercase leading-tight mb-2">
            ICLUSIG achieved a deep and durable response over 5 years in CP-CML,
            TKI-resistant, and T315I patients
            <sup className="text-[60%]">1</sup>
          </h2>

          <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-4">
            Achieved MCyR by 12 months %
            <sup className="text-[60%]">1</sup>
          </h4>

          <div className="mb-4">
            <img
              src={paceMcyr}
              alt="55% of the total CP-CML patient population achieved MCyR by 12 months. 51% of resistant/intolerant patients achieved MCyR by 12 months. 70% of T315I patients achieved MCyR by 12 months."
              className="w-full max-w-[600px]"
            />
          </div>

          <ul className="list-disc pl-6 space-y-1 text-[#374151] text-[13px] md:text-[14px] leading-relaxed mb-6">
            <li>
              Median duration of treatment for CP-CML patients was 35 months
              <sup className="text-[60%]">1</sup>
            </li>
          </ul>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
            In PACE, ICLUSIG provided durable, clinically meaningful responses in
            TKI-resistant CP-CML patients, including those with the T315I
            mutation.<sup className="text-[60%]">1</sup>
          </p>

          <button
            onClick={() => navigate("/efficacy/cml-pace-trial/t315i")}
            className="inline-flex items-center gap-2 text-[#237EBF] text-[14px] md:text-[15px] font-[600] hover:underline mb-4"
          >
            Explore additional long-term T315I data
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* ---- Safety CTA ---- */}
      <section className="py-8 md:py-12 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <h3 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-3">
            Review the safety profile of ICLUSIG in PACE
          </h3>
          <button
            onClick={() => navigate("/safety/cml-pace-trial")}
            className="inline-flex items-center gap-2 text-[#237EBF] text-[14px] md:text-[15px] font-[600] hover:underline mb-4"
          >
            Explore PACE safety data
            <ChevronRight size={16} />
          </button>
        </div>
        </div>
      </section>

      {/* ---- Advanced Disease ---- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[18px] md:text-[22px] lg:text-[26px] font-[800] uppercase leading-tight mb-6">
            ICLUSIG demonstrated efficacy in AP- and BP-CML patients with
            resistant or intolerant advanced disease
            <sup className="text-[60%]">1</sup>
          </h2>

          <h4 className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] leading-snug mb-4">
            Efficacy of ICLUSIG in patients with resistant or intolerant advanced
            disease (includes R/I and T315I cohorts) in PACE
            <sup className="text-[60%]">1</sup>
          </h4>

          {/* Advanced disease efficacy chart */}
          <div className="mb-4">
            <img
              src={paceAdvDisease}
              alt="Chart showing the efficacy of ICLUSIG in patients with resistant or intolerant advanced disease in PACE."
              className="w-full max-w-[600px]"
            />
          </div>

          <div className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-8 space-y-1">
            <p>
              <sup>a</sup>Primary endpoint for patients with AP-CML, BP-CML, and
              Ph+ ALL was MaHR by 6 months, which combines complete hematologic
              responses and no evidence of leukemia.
              <sup>1</sup>
            </p>
            <p>
              <sup>b</sup>CHR: WBC &le; institutional ULN, ANC
              &ge;1000/mm<sup>3</sup>, platelets &ge;100,000/mm<sup>3</sup>, no
              blasts or promyelocytes in peripheral blood, bone marrow blasts
              &le;5%, &lt;5% myelocytes plus metamyelocytes in peripheral blood,
              basophils &lt;5% in peripheral blood, no extramedullary involvement
              (including no hepatomegaly or splenomegaly).
              <sup>1</sup>
            </p>
          </div>

          {/* Time to and duration of MaHR */}
          <h2 className="text-[#003865] text-[18px] md:text-[22px] font-[800] uppercase mb-4">
            Patients in PACE achieved and sustained responses
            <sup className="text-[60%]">1</sup>
          </h2>

          <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-4">
            Median time to MaHR<sup className="text-[60%]">1</sup>
          </h4>

          <div className="mb-6">
            <img
              src={paceTimeToMahr}
              alt="Median time to MaHR for AP-CML patients was 0.8 months. For BP-CML patients, it was 1 month."
              className="w-full max-w-[500px]"
            />
          </div>

          <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-4">
            Median duration of MaHR<sup className="text-[60%]">1</sup>
          </h4>

          <div className="mb-8">
            <img
              src={paceDurationMahr}
              alt="Median duration of MaHR for patients with AP-CML was 14 months. For patients with BP-CML, it was 6.5 months."
              className="w-full max-w-[500px]"
            />
          </div>
        </div>
      </section>

      {/* ---- CTA Cards ---- */}
      <section className="py-8 md:py-12 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="An established safety profile CP-CML"
            linkText="Explore PACE safety data"
            href="/safety/cml-pace-trial"
            navigate={navigate}
          />
          <CtaCard
            title="ICLUSIG (ponatinib) has a distinct inhibitory mechanism in CP-CML"
            linkText="Delve into ICLUSIG MOA"
            href="/mechanism-of-action"
            navigate={navigate}
          />
        </div>
        </div>
      </section>

      {/* ---- Abbreviations ---- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8 pt-4">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          AOE=arterial occlusive events; AP-CML=accelerated-phase chronic myeloid
          leukemia; BP-CML=blast-phase chronic myeloid leukemia;
          CCyR=complete cytogenetic response; CHR=complete hematologic response;
          CI=confidence interval; CML=chronic myeloid leukemia;
          CP-CML=chronic-phase chronic myeloid leukemia; ECOG PS=Eastern
          Cooperative Oncology Group performance status; MaHR=major hematologic
          response; MCyR=major cytogenetic response; MMR=major molecular
          response; OS=overall survival; PCyR=partial cytogenetic response;
          PFS=progression-free survival; Ph+ ALL=Philadelphia
          chromosome-positive acute lymphoblastic leukemia; QD=once daily;
          TKI=tyrosine kinase inhibitor.
        </p>
      </section>
    </div>
  );
}
