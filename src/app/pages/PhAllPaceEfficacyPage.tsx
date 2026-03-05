import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import patientCharacteristicsImg from "@/imports/pages/efficacy/Ph-ALL-green-patient-characteristics-chart-DKT.svg";
import sixtyNinePercentImg from "@/imports/pages/efficacy/69-percent_0.svg";
import mahrPieImg from "@/imports/pages/efficacy/ph-all-fourty-one-percent-primary-ep-mahr-green-pie-chart-dkt.svg";
import cytogeneticBarImg from "@/imports/pages/efficacy/ph-all-cytogenetic-thirty-eight-fourty-seven-green-bar-charts-dkt_0.svg";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function HeroBanner() {
  return (
    <section
      className="w-full py-10 md:py-14 px-4 md:px-8 lg:px-12"
      style={{ background: "linear-gradient(135deg, #003865 0%, #00507a 100%)" }}
    >
      <div className="max-w-4xl">
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight mb-3">
          ICLUSIG (ponatinib) delivered clinically meaningful responses in
          Ph+ ALL<sup className="text-[60%]">1,2</sup>
        </h1>
        <p className="text-white text-[15px] md:text-[17px] font-[600] leading-snug">
          PACE trial studied TKI-resistant or intolerant patients with
          mutations, including T315I<sup className="text-[60%]">1,2</sup>
        </p>
      </div>
    </section>
  );
}

function AnchorNav() {
  return (
    <nav className="border-b border-[#E3E8EF] bg-white">
      <div className="px-4 md:px-8 lg:px-12">
        <ul className="flex gap-6 max-w-4xl">
          <li>
            <a
              href="#trialdesign"
              className="inline-block py-3 text-[#003865] text-[14px] md:text-[15px] font-[600] border-b-2 border-[#003865] hover:opacity-80 transition-opacity"
            >
              Trial design
            </a>
          </li>
          <li>
            <a
              href="#responserates"
              className="inline-block py-3 text-[#374151] text-[14px] md:text-[15px] font-[600] border-b-2 border-transparent hover:border-[#003865] hover:text-[#003865] transition-colors"
            >
              Response rates for Ph+ ALL
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

export function PhAllPaceEfficacyPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />
      <AnchorNav />

      {/* Trial Design Section */}
      <section id="trialdesign" className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            ICLUSIG monotherapy helped difficult-to-treat patients with Ph+ ALL
            achieve a response<sup className="text-[60%]">1,2</sup>
          </h2>

          <h3 className="text-[#003865] text-[15px] md:text-[17px] font-[700] uppercase tracking-wide mb-4">
            PACE TRIAL DESIGN
          </h3>

          <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-5 md:p-6 mb-6">
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
              The PACE trial for ICLUSIG was a single-arm, open-label,
              international, multicenter, phase 2 trial in adult patients with
              CML or Ph+ ALL, resistant or intolerant
              <sup className="text-[60%]">a</sup> to 2 TKIs, or who had the
              T315I mutation regardless of prior TKI use. Primary endpoint for
              Ph+ ALL was MaHR by 6 months.
              <sup className="text-[60%]">1,2</sup>
            </p>
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
              In PACE, the starting dose of ICLUSIG (ponatinib) was 45 mg
              administered orally once daily, given as a single agent. Median
              duration of follow-up for the Ph+ ALL cohort was 6 months.
              <sup className="text-[60%]">2</sup> Patients with uncontrolled
              hypertriglyceridemia and patients with clinically significant or
              active cardiovascular disease, including any history of clinically
              significant atrial/ventricular arrhythmias or history of
              myocardial infarction, unstable angina, or congestive heart
              failure within the 3 months prior to the first dose of ICLUSIG
              (ponatinib), were excluded.
              <sup className="text-[60%]">1,2</sup>
            </p>
          </div>

          {/* Footnote for resistance definition */}
          <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-8">
            <sup>a</sup>Resistance in Ph+ ALL was defined as failure to achieve
            either a MaHR (by 1 month in Ph+ ALL), loss of MaHR (at any time),
            or development of a kinase domain mutation in the absence of a
            complete MaHR while on prior TKI therapy. Intolerance was defined as
            the discontinuation of prior TKI therapy due to toxicities despite
            optimal management in the absence of MaHR for patients with Ph+
            ALL.<sup>1</sup>
          </p>

          {/* Patient Characteristics */}
          <h3 className="text-[#003865] text-[15px] md:text-[17px] font-[700] uppercase tracking-wide mb-4">
            PATIENT CHARACTERISTICS
          </h3>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
            In the PACE clinical trial, the vast majority of study patients
            (84%) were TKI-resistant and 69% of patients had the T315I
            mutation.<sup className="text-[60%]">3</sup>
          </p>

          {/* Patient characteristics table image */}
          <div className="mb-8 overflow-x-auto">
            <img
              src={patientCharacteristicsImg}
              alt="Patient characteristics of participants in the PACE Trial for Ph+ ALL."
              className="w-full max-w-[700px]"
            />
          </div>

          {/* 69% callout */}
          <div className="bg-[#F5F7FA] border-l-4 border-[#2E8762] rounded-r-lg p-5 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={sixtyNinePercentImg}
                alt="69%."
                className="w-full max-w-[80px]"
              />
              <p className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] leading-snug">
                of Ph+ ALL patients were T315I+ in the PACE trial.
                <sup className="text-[60%]">3</sup>
              </p>
            </div>
          </div>

          <hr className="border-[#E3E8EF] mb-8" />
        </div>
      </section>

      {/* Response Markers Section */}
      <section id="responserates" className="px-4 md:px-8 lg:px-12 pb-8 md:pb-12">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[16px] md:text-[20px] lg:text-[24px] font-[700] leading-snug uppercase tracking-wide mb-6">
            PATIENTS TAKING ICLUSIG REACHED IMPORTANT MARKERS OF RESPONSE
            <sup className="text-[60%]">1</sup>
          </h2>

          {/* MaHR chart */}
          <div className="mb-6 overflow-x-auto">
            <img
              src={mahrPieImg}
              alt="41% (95% CI: 24, 59) achieved MaHR by 6 months (n=32). The primary efficacy endpoint for Ph+ ALL was MaHR by 6 months."
              className="w-full max-w-[700px]"
            />
          </div>

          {/* Supporting data bullets */}
          <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
            <li>
              Median time to MaHR 0.7 months (range: 0.4-6.0 months)
              <sup className="text-[60%]">1</sup>
            </li>
            <li>
              Median duration of MaHR 3.5 months (range: 1.9-13.7 months)
              <sup className="text-[60%]">1</sup>
            </li>
            <li>
              Median duration of follow-up for the Ph+ ALL cohort was 6 months.
              <sup className="text-[60%]">4</sup>
            </li>
          </ul>

          {/* Footnotes for MaHR */}
          <div className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-10 space-y-1">
            <p>
              <sup>a</sup>The primary endpoint for Ph+ ALL of MaHR by 6 months
              combined complete hematologic responses (CHR) and no evidence of
              leukemia.<sup>1</sup>
            </p>
            <p>
              <sup>b</sup>CHR: WBC {"\u2264"} institutional ULN; ANC{" "}
              {"\u2265"}1000/mm<sup>3</sup>; platelets{" "}
              {"\u2265"}100,000/mm<sup>3</sup>; no blasts or promyelocytes in
              peripheral blood; bone marrow blasts {"\u2264"}5; &lt;5%
              myelocytes plus metamyelocytes in peripheral blood; basophils
              &lt;5% in peripheral blood; and no extramedullary involvement
              (including no hepatomegaly or splenomegaly).
              <sup>1</sup>
            </p>
          </div>

          {/* Cytogenetic Responses Section */}
          <h4 className="text-[#1B2430] text-[15px] md:text-[17px] font-[700] mb-2">
            Cytogenetic responses at any time
            <sup className="text-[60%]">4</sup>
          </h4>

          <h2 className="text-[#003865] text-[16px] md:text-[20px] lg:text-[24px] font-[700] leading-snug uppercase tracking-wide mb-6">
            RESPONSE RATES FOR Ph+ ALL: ICLUSIG DELIVERED CLINICALLY MEANINGFUL
            RESPONSES<sup className="text-[60%]">4</sup>
          </h2>

          {/* Cytogenetic response chart */}
          <div className="mb-8 overflow-x-auto">
            <img
              src={cytogeneticBarImg}
              alt="38% of CCyR patients and 47% of MCyR patients had a cytogenetic response at any time."
              className="w-full max-w-[700px]"
            />
          </div>

          {/* Key message callout */}
          <div
            className="rounded-lg p-6 md:p-8 mb-8"
            style={{ background: "linear-gradient(135deg, #003865 0%, #00507a 100%)" }}
          >
            <p className="text-white text-[15px] md:text-[17px] font-[600] leading-snug">
              When TKI resistance occurs, prescribing ICLUSIG as part of your
              treatment regimen may help appropriate patients achieve a
              response.<sup className="text-[60%]">1,2</sup>
            </p>
          </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-[#F5F7FA]">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="Review the safety profile in resistant/intolerant Ph+ ALL"
            linkText="Explore PACE safety data in Ph+ ALL"
            href="/safety/ph-positive-all-pace-trial"
            navigate={navigate}
          />
          <CtaCard
            title="See the convenient dosing schedule for ICLUSIG"
            linkText="Explore dosing overview"
            href="/dosing"
            navigate={navigate}
          />
        </div>
      </section>

      {/* Abbreviations */}
      <section className="px-4 md:px-8 lg:px-12 py-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          ANC=absolute neutrophil count; AP-CML=accelerated-phase chronic
          myeloid leukemia; CCyR=complete cytogenetic response; CHR=complete
          hematologic response; MaHR=major hematological response; MCyR=major
          cytogenetic response; Ph+ ALL=Philadelphia chromosome-positive acute
          lymphoblastic leukemia; TKI=tyrosine kinase inhibitor; ULN=upper
          limit of normal for the lab; WBC=white blood cell.
        </p>
      </section>
    </div>
  );
}
