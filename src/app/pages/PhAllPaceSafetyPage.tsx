import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import phAllAdverseTable from "@/imports/pages/safety/adverse-reactions-ph-all-green-table-dkt.svg";

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
      <div className="max-w-4xl">
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight">
          Safety profile of ICLUSIG (ponatinib) in the PACE trial for Ph+ ALL
        </h1>
        <p className="text-white text-[15px] md:text-[17px] font-[700] mt-3 leading-snug">
          PACE established the safety profile for ICLUSIG in patients with Philadelphia
          chromosome-positive acute lymphoblastic leukemia
          <sup className="text-[60%]">1</sup>
        </p>
      </div>
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

export function PhAllPaceSafetyPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />

      {/* Main content */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          {/* Adverse Reactions heading */}
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            Adverse Reactions (&ge;20%) in Patients with Ph+ ALL
          </h2>

          {/* Adverse reactions chart image */}
          <div className="overflow-x-auto mb-4">
            <img
              src={phAllAdverseTable}
              alt="Adverse reactions in patients with Ph+ ALL who received ICLUSIG include: Rash and related conditions, dry skin, arthralgia, abdominal pain, nausea, vomiting, fatigue, fluid retention, headache, hypertension, and more."
              className="w-full max-w-[750px]"
            />
          </div>

          {/* Footnotes */}
          <div className="mb-8 space-y-2">
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              <sup>a</sup> Derived from blood pressure (BP) measurement.
            </p>
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              <sup>b</sup> Sepsis includes abdominal sepsis, bacteremia, device-related
              sepsis, escherichia bacteremia, fungemia, klebsiella bacteremia, klebsiella
              sepsis, neutropenic sepsis, sepsis, septic shock, staphylococcal
              bacteremia, staphylococcal sepsis, streptococcal bacteremia, and urosepsis.
              Graded using Common Terminology Criteria for Adverse Events (CTCAE) v4.03.
            </p>
          </div>

          {/* Serious Adverse Reactions */}
          <div className="mb-8">
            <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-3">
              Ponatinib Serious Adverse Reactions<sup className="text-[60%]">2</sup>
            </h4>
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
              Serious adverse reactions occurred in 69% of patients who received ICLUSIG.
              Serious adverse reactions in &gt;2% of patients included:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 mb-4">
              <ul className="list-disc pl-6 space-y-1 text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
                <li>AOEs (20%)</li>
                <li>Pneumonia (10%)</li>
                <li>Cardiac arrhythmias (8%)</li>
                <li>Pancreatitis/lipase elevation (7%)</li>
                <li>Abdominal pain (6%)</li>
                <li>Cardiac failure (6%)</li>
                <li>Hemorrhage (6%)</li>
                <li>Secondary malignancies (5%)</li>
                <li>Sepsis (5%)</li>
              </ul>
              <ul className="list-disc pl-6 space-y-1 text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
                <li>VTEs (5%)</li>
                <li>Fluid retention and edema (4.5%)</li>
                <li>Pyrexia (4.5%)</li>
                <li>Anemia (3.3%)</li>
                <li>Hypertension (3.1%)</li>
                <li>Thrombocytopenia (3.1%)</li>
                <li>Febrile neutropenia (2.9%)</li>
                <li>Cellulitis (2.7%)</li>
                <li>Arthralgia (2.2%)</li>
              </ul>
            </div>

            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
              Fatal adverse reactions occurred in 9% of patients who received ICLUSIG;
              the most frequent fatal adverse reactions were AOEs (2%), sepsis (1.6%),
              and hemorrhage (1.3%).
            </p>
          </div>

          {/* Arterial Occlusive Events */}
          <div className="mb-8">
            <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-3">
              Arterial Occlusive Events<sup className="text-[60%]">2</sup>
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
              <li>
                26% of 449 patients experienced AOEs, of which 15%, 7%, and 11%
                experienced cardiovascular, cerebrovascular, and peripheral vascular
                AOEs, respectively. Some patients experienced recurrent or multisite
                vascular occlusion.
              </li>
              <li>
                Grade 3 or 4 AOEs occurred in 14% of patients; the most frequent Grade 3
                or 4 AOEs were peripheral arterial occlusive disease (3.1%), myocardial
                infarction (2%), coronary artery disease (1.6%), and cerebral infarction
                (1.6%). Fatal AOEs occurred in 9 patients (2%); the most frequent fatal
                AOE was cardiac arrest (0.9%).
              </li>
            </ul>
          </div>

          {/* Discontinuation Rates */}
          <div className="mb-8">
            <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-3">
              Discontinuation Rates<sup className="text-[60%]">2</sup>
            </h4>
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
              Permanent discontinuation of ICLUSIG due to an adverse reaction occurred in
              21% of CP&#8209;CML, 12% of AP-CML, 15% of BP-CML, and 9% of Ph+ ALL
              patients. The most frequent adverse reactions that led to treatment
              discontinuation were thrombocytopenia (4.5%) and AOEs (4%).
            </p>
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed font-[700]">
              Please see the full{" "}
              <a
                href="https://www.iclusig.com/hcp/pdf/ICLUSIG-Prescribing-Information.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#237EBF] underline hover:text-[#003865] transition-colors"
              >
                Prescribing Information
              </a>{" "}
              for a full list of adverse reactions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="Review efficacy in resistant/intolerant Ph+ ALL"
            linkText="Explore PACE data in Ph+ ALL"
            href="/efficacy/ph-positive-all-pace-trial"
            navigate={navigate}
          />
          <CtaCard
            title="Discover the convenient dosing schedule for ICLUSIG"
            linkText="Explore dosing overview"
            href="/dosing"
            navigate={navigate}
          />
        </div>
      </section>

      {/* Abbreviations */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          AOE=arterial occlusive effect; AP-CML=accelerated-phase chronic myeloid
          leukemia; BP=blood pressure; BP-CML=blast-phase chronic myeloid leukemia;
          CP-CML=chronic-phase chronic myeloid leukemia; Ph+ ALL=Philadelphia
          chromosome-positive acute lymphoblastic leukemia; VTE=venous thromboembolic
          event; WBC=white blood cell.
        </p>
      </section>
    </div>
  );
}
