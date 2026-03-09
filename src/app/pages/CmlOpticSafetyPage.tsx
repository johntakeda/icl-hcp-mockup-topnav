import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import opticAdverseReactions from "@/imports/pages/safety/adverse-reactions-optic-cp-cml-blue-table-dkt_101025.svg";
import opticSummaryTreatment from "@/imports/pages/safety/summary-treatment_102025.svg";

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
          Safety profile of ICLUSIG (ponatinib) in the OPTIC trial
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

export function CmlOpticSafetyPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />

      {/* Main content */}
      <section className="px-4 md:px-16 xl:px-20 py-8 md:py-12">
        <div className="max-w-4xl">
          {/* Section heading */}
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-2">
            5-Year Follow-up Analysis: Safety Profile with an optimized dosing
            strategy<sup className="text-[60%]">1</sup>
          </h2>

          <h3 className="text-[#1B2430] text-[16px] md:text-[18px] lg:text-[20px] font-[700] leading-snug mb-6">
            Adverse reactions (&ge;10%) among patients who received ICLUSIG 45&nbsp;mg
            &rarr; 15&nbsp;mg (n=94)<sup className="text-[60%]">1</sup>
          </h3>

          {/* Adverse reactions chart image */}
          <div className="mb-4">
            <img
              src={opticAdverseReactions}
              alt="Adverse reactions seen in the CML OPTIC Trial. ARs include rash, dry skin, hypertension, arterial occlusive events, hemorrhage, hepatotoxicity, and more."
              className="w-full max-w-[800px]"
            />
          </div>

          <p className="text-[#374151] text-[13px] md:text-[14px] mb-6">
            Graded using CTCAE v5.0
          </p>

          {/* Footnotes */}
          <div className="mb-8 space-y-2">
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              <sup>a</sup> Arthralgia includes arthralgia, back pain, osteoarthritis,
              pain, neck pain, pain in extremity, spinal pain, tendonitis, bone pain,
              musculoskeletal pain, chondrocalcinosis, enthesopathy, pain in jaw.
              <sup>1</sup>
            </p>
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              <sup>b</sup> Hyperlipidemia includes blood cholesterol increased, blood
              triglycerides increased, dyslipidemia, hypercholesterolemia, hyperlipidemia,
              hypertriglyceridemia, low density lipoprotein increased.<sup>1</sup>
            </p>
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              <sup>c</sup> Abdominal pain includes abdominal distension, abdominal pain,
              abdominal pain upper, chronic gastritis, duodenal ulcer, duodenitis,
              duodenogastric reflux, dyspepsia, gastric ulcer, gastritis,
              gastroenteritis, gastrointestinal pain, helicobacter gastritis, peptic
              ulcer.<sup>1</sup>
            </p>
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              AOE=arterial occlusive event. CTCAE=Common Terminology Criteria for Adverse
              Events.
            </p>
          </div>

          {/* Serious Adverse Reactions */}
          <div className="mb-8">
            <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-3">
              Serious Adverse Reactions<sup className="text-[60%]">1</sup>
            </h4>
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
              Serious adverse reactions occurred in 40% of patients who received ICLUSIG
              at a starting dose of 45&nbsp;mg. Serious adverse reactions in &gt;2% of
              patients included AOEs (13%, of which 2.1% were sudden death), cardiac
              arrhythmias (9%, of which 2.1% were atrial fibrillation), thrombocytopenia
              (5%), pyrexia (4.3%), anemia (3.2%), abdominal pain (3.2%),
              pancreatitis/lipase elevation (2.1%), neutropenia (2.1%), hypertension
              (2.1%) and hepatotoxicity (2.1%). Fatal adverse reactions occurred in 4
              patients (4.3%), including sudden death (2.1%), myocardial infarction
              (1.1%), and myocardial ischemia (1.1%).
            </p>
          </div>

          {/* Arterial Occlusive Events */}
          <div className="mb-8">
            <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-3">
              Arterial Occlusive Events<sup className="text-[60%]">1</sup>
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
              <li>
                18% of patients experienced AOEs, of which 11%, 4.3%, and 3.2%
                experienced cardiovascular, cerebrovascular or peripheral vascular AOEs,
                respectively
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Grade 3 or 4 AOEs occurred in 7% of patients; the most frequent Grade
                    3 or 4 AOEs were myocardial infarction, acute coronary syndrome,
                    arterial thrombosis, ischemic stroke, ischemic cerebral infarction,
                    subclavian artery stenosis, and unstable angina (1.1% each)
                  </li>
                  <li>
                    Fatal AOEs occurred in 4 patients (4.3%); including sudden death
                    (2.1%), myocardial ischemia (1.1%), and myocardial infarction (1.1%).
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Discontinuation Rates */}
          <div className="mb-8">
            <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-3">
              Discontinuation Rates<sup className="text-[60%]">1</sup>
            </h4>
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
              Permanent discontinuation of ICLUSIG due to an adverse reaction occurred in
              24% of patients who received ICLUSIG at a starting dose of 45&nbsp;mg.
              Adverse reactions which resulted in discontinuation in &gt;2% of patients
              included AOEs, thrombocytopenia, hypertension, and sudden death.
            </p>
          </div>

          {/* 5-Year Follow-Up Analysis: Optimized Dosing */}
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-4">
            5-Year Follow-Up Analysis: Optimized Dosing, Proven Safety Profile
          </h2>

          <div className="mb-4 space-y-3">
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
              ICLUSIG uses{" "}
              <button
                onClick={() => navigate("/dosing/cml-response-based-dosing")}
                className="text-[#237EBF] underline hover:text-[#003865] transition-colors"
              >
                optimized dosing
              </button>{" "}
              to help with dose modification upon clinical benefit
              <sup className="text-[60%]">1,2</sup>
            </p>
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
              By Year 5, safety results were consistent with those of the primary
              analysis of OPTIC
            </p>
          </div>

          {/* Treatment-emergent AEs image */}
          <div className="mb-4">
            <img
              src={opticSummaryTreatment}
              alt="Treatment-emergent AEs and related dose modifications and discontinuations over 5 years."
              className="w-full max-w-[800px]"
            />
          </div>

          {/* Figure footnotes */}
          <div className="mb-6 space-y-1">
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              <sup>a</sup> Includes deaths that occurred up to 30 days after the last
              ICLUSIG dose
            </p>
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              <sup>b</sup> All treatment-emergent AEs with &quot;drug withdrawn&quot; as
              the action taken
            </p>
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              AE=adverse event; TE-AOE=treatment-emergent arterial occlusive event;
              TEAE=treatment-emergent adverse event
            </p>
          </div>

          {/* TE-AOE bullet points */}
          <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-8">
            <li>
              7.4% (n=7) and 4.3% (n=4) of patients experienced Grade 3/4 TE-AOEs and
              Grade 5 TE-AOEs, respectively, after a median follow-up of 72.9 months
            </li>
            <li>
              6.4% (n=8) and 21% (n=2) of patients experienced Grade 3/4 TE-AOEs and
              Grade 5 TE-AOEs, respectively, after a median follow-up of 27.0 months
              (primary analysis).
            </li>
            <li>
              An additional patient (1.1%) experienced Grade 3/4 TE-AOE and 2 additional
              patients (2.1%) experienced Grade 5 TE-AOEs as of the 5-year follow-up
              analysis
            </li>
          </ul>
        </div>
      </section>

      {/* CTA cards */}
      <section className="px-4 md:px-16 xl:px-20 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="ICLUSIG demonstrated efficacy in CP-CML in OPTIC"
            linkText="Discover OPTIC data"
            href="/efficacy/cml-optic-trial"
            navigate={navigate}
          />
          <CtaCard
            title="ICLUSIG uses optimized dosing to balance benefit-risk profile"
            linkText="Learn about CP-CML optimized dosing"
            href="/dosing/cml-response-based-dosing"
            navigate={navigate}
          />
        </div>
      </section>

      {/* Abbreviations */}
      <section className="px-4 md:px-16 xl:px-20 pb-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          AE=adverse event; AOE=arterial occlusive event; CP-CML=chronic-phase chronic
          myeloid leukemia; CTCAE=Common Terminology Criteria for Adverse Events;
          TE-AOE=treatment-emergent arterial occlusive event; TEAE=treatment-emergent
          adverse event.
        </p>
      </section>
    </div>
  );
}
