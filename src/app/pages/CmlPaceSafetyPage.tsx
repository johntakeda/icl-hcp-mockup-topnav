import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import paceCpCmlTable from "@/imports/pages/safety/adverse-reactions-pace-cp-cml-blue-table-dkt.svg";
import paceApCmlTable from "@/imports/pages/safety/adverse-reactions-pace-ap-cml-blue-table-dkt.svg";
import paceBpCmlTable from "@/imports/pages/safety/adverse-reactions-pace-bp-cml-blue-table-dkt.svg";

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
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight">
          ICLUSIG (ponatinib) safety in CML: PACE trial data
        </h1>
        <p className="text-white text-[15px] md:text-[17px] font-[700] mt-3 leading-snug">
          PACE established the safety profile for ICLUSIG in patients with chronic
          myeloid leukemia<sup className="text-[60%]">1</sup>
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

/* Accordion panel for each CML phase */
function AccordionPanel({
  titleContent,
  isOpen,
  onToggle,
  imageSrc,
  imageAlt,
  footnotes,
}: {
  titleContent: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  imageSrc: string;
  imageAlt: string;
  footnotes: { label: string; text: string }[];
}) {
  return (
    <div className="border border-[#E3E8EF] rounded-lg mb-4 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 bg-[#F5F7FA] hover:bg-[#EDF0F4] transition-colors"
      >
        <span className="text-[#003865] text-[15px] md:text-[17px] font-[700]">
          {titleContent}
        </span>
        <ChevronRight
          size={20}
          className={`text-[#003865] transition-transform shrink-0 ml-2 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-6">
          <div className="overflow-x-auto mb-4">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full max-w-[750px]"
            />
          </div>
          <div className="space-y-2">
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              Graded using CTCAE v4.03.<sup>2</sup>
            </p>
            {footnotes.map((fn, i) => (
              <p
                key={i}
                className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed"
              >
                <sup>{fn.label}</sup> {fn.text}
                <sup>2</sup>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* Shared footnotes for all three CML accordion panels */
const sharedFootnotes = [
  {
    label: "a",
    text: "Oral mucositis includes aphthous ulcer, gingival pain, lip blister, lip pain, lip swelling, mouth ulceration, oropharyngeal pain, oral mucosal blistering, oral mucosal eruption, oral pain, pharyngeal ulceration, stomatitis, and tongue ulceration.",
  },
  {
    label: "b",
    text: "Derived from blood pressure (BP) measurement.",
  },
  {
    label: "c",
    text: "Cough includes cough, productive cough, and upper airway cough syndrome.",
  },
  {
    label: "d",
    text: "Dyspnea includes dyspnea and dyspnea exertional.",
  },
  {
    label: "e",
    text: "Upper respiratory tract infection includes upper respiratory tract infection and viral upper respiratory tract infection.",
  },
  {
    label: "f",
    text: "Urinary tract infection includes escherichia urinary tract infection, urinary tract infection, and urinary tract infection bacterial.",
  },
  {
    label: "g",
    text: "Sepsis includes abdominal sepsis, bacteremia, device-related sepsis, escherichia bacteremia, fungemia, klebsiella bacteremia, klebsiella sepsis, neutropenic sepsis, sepsis, septic shock, staphylococcal bacteremia, staphylococcal sepsis, streptococcal bacteremia, and urosepsis.",
  },
];

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export function CmlPaceSafetyPage() {
  const navigate = useNavigate();
  const [openPanel, setOpenPanel] = useState<number | null>(0);

  const togglePanel = (index: number) => {
    setOpenPanel(openPanel === index ? null : index);
  };

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />

      {/* Main content */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          {/* Section heading */}
          <h2 className="text-[#1B2430] text-[16px] md:text-[20px] lg:text-[22px] font-[700] leading-snug mb-6">
            PACE trial adverse reactions (&gt;10%) in patients with CML who received
            ICLUSIG<sup className="text-[60%]">2</sup>
          </h2>

          {/* Accordion panels for CP-CML, AP-CML, BP-CML */}
          <AccordionPanel
            titleContent={
              <>
                CP-CML (N=270)<sup className="text-[60%]">2</sup>
              </>
            }
            isOpen={openPanel === 0}
            onToggle={() => togglePanel(0)}
            imageSrc={paceCpCmlTable}
            imageAlt="Adverse reactions in CP-CML patients in the PACE Trial."
            footnotes={sharedFootnotes}
          />

          <AccordionPanel
            titleContent={
              <>
                AP-CML (N=85)<sup className="text-[60%]">2</sup>
              </>
            }
            isOpen={openPanel === 1}
            onToggle={() => togglePanel(1)}
            imageSrc={paceApCmlTable}
            imageAlt="Adverse reactions in AP-CML patients in the PACE Trial."
            footnotes={sharedFootnotes}
          />

          <AccordionPanel
            titleContent={
              <>
                BP-CML (N=62)<sup className="text-[60%]">2</sup>
              </>
            }
            isOpen={openPanel === 2}
            onToggle={() => togglePanel(2)}
            imageSrc={paceBpCmlTable}
            imageAlt="Adverse reactions in BP-CML patients in the PACE Trial."
            footnotes={sharedFootnotes}
          />

          {/* Serious Adverse Reactions */}
          <div className="mt-8 mb-8">
            <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-3">
              Ponatinib Serious Adverse Reactions<sup className="text-[60%]">2</sup>
            </h4>
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
              Serious adverse reactions occurred in 69% of patients who received ICLUSIG
              (N=449 [417 CML patients and 32 Ph+ ALL patients]). Serious adverse
              reactions in &gt;2% of patients included:
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
                26% of patients experienced AOEs, of which 15%, 7%, and 11% experienced
                cardiovascular, cerebrovascular, and peripheral vascular AOEs,
                respectively.
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Grade 3 or 4 AOEs occurred in 14% of patients; the most frequent
                    Grade 3 or 4 AOEs were peripheral arterial occlusive disease (3.1%),
                    myocardial infarction (2%), coronary artery disease (1.6%), and
                    cerebral infarction (1.6%). Fatal AOEs occurred in 9 patients (2%):
                    the most frequent fatal AOE was cardiac arrest (0.9%).
                  </li>
                </ul>
              </li>
              <li>
                In PACE, fatal and life-threatening AOEs occurred within 2 weeks of
                starting treatment at 45&nbsp;mg, and at dose levels as low as
                15&nbsp;mg per day. Patients with and without cardiovascular risk factors,
                including patients age 50 years or younger, experienced AOEs.
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    AOEs were more frequent with increasing age and in patients with
                    history of ischemia, hypertension, diabetes, or
                    hypercholesterolemia. The most common risk factors in patients with
                    AOEs were history of hypertension (67%; 77/115),
                    hypercholesterolemia (59%; 68/115), and nonischemic cardiac disease
                    (43%; 49/115).
                  </li>
                </ul>
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
              for a full list of adverse reactions and arterial occlusive events.
            </p>
          </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
          <CtaCard
            title="Explore the efficacy of ICLUSIG in Ph+ ALL"
            linkText="Explore PACE data in Ph+ ALL"
            href="/efficacy/ph-positive-all-pace-trial"
            navigate={navigate}
          />
          <CtaCard
            title="Review the safety profile of ICLUSIG in OPTIC"
            linkText="Explore OPTIC safety data"
            href="/safety/cml-optic-trial"
            navigate={navigate}
          />
          <CtaCard
            title="Optimized dosing strategy in CP-CML"
            linkText="Explore optimized CP-CML dosing"
            href="/dosing/cml-response-based-dosing"
            navigate={navigate}
          />
        </div>
      </section>

      {/* Abbreviations */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          AOE=arterial occlusive event; AP&#8209;CML=accelerated-phase chronic myeloid
          leukemia; BP&#8209;CML=blast-phase chronic myeloid leukemia; CML=chronic
          myeloid leukemia; CP&#8209;CML=chronic-phase chronic myeloid leukemia; Ph+
          ALL=Philadelphia chromosome-positive acute lymphoblastic leukemia;
          VTE=venous thromboembolic event.
        </p>
      </section>
    </div>
  );
}
