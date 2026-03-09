import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, ChevronDown, ChevronUp, Download } from "lucide-react";
import packagingImg from "@/imports/pages/dosing/icl_carton_packaging_web_dsk_0.svg";
import doseModificationsImg from "@/imports/pages/dosing/dose-modifications-for-ars-four-grades-blue-table-dkt-1.svg";
import doseReductionsImg from "@/imports/pages/dosing/dose-modifications-for-ars-cp-ap-bp-cml-blue-table-dkt-2.svg";
import cyp3aImg from "@/imports/pages/dosing/dosing-with-strong-CYP-ThreeA-inhibitors-blue-table-DKT.svg";

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
          ICLUSIG (ponatinib) offers convenient dosing in a single oral tablet
          <sup className="text-[60%]">1</sup>
        </h1>
        <p className="text-white text-[16px] md:text-[18px] font-[700] mt-3 leading-snug">
          Available in 45 mg, 30 mg, 15 mg, and 10 mg dosage strengths
          <sup className="text-[60%]">1</sup>
        </p>
      </div>
    </section>
  );
}

function AnchorNav() {
  const tabs = [
    { label: "Convenient oral dosing", id: "convenient" },
    { label: "Dosing strategy", id: "dosingstrategy" },
    { label: "Dose modification", id: "dosemodification" },
    { label: "Dose reduction", id: "dosereduction" },
    { label: "Dosage with strong CYP3A inhibitors", id: "cyp3a" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="w-full bg-[#F5F7FA] border-b border-[#E3E8EF] overflow-x-auto">
      <div className="flex gap-0 min-w-max px-4 md:px-16 xl:px-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.id)}
            className="px-4 py-3 text-[13px] md:text-[14px] font-[600] text-[#003865] whitespace-nowrap
                       border-b-2 border-transparent hover:border-[#003865] transition-colors"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function AccordionSection({
  title,
  subtitle,
  children,
  defaultOpen = false,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#E3E8EF] rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 md:px-6 py-4 bg-[#F5F7FA] hover:bg-[#EDF0F5] transition-colors text-left"
      >
        <span className="flex-shrink-0 text-[#003865]">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
        <div className="min-w-0">
          <span className="block text-[#003865] text-[11px] md:text-[12px] font-[700] uppercase tracking-wide">
            {title}
          </span>
          <span className="block text-[#1B2430] text-[14px] md:text-[16px] font-[600] leading-snug">
            {subtitle}
            <sup className="text-[60%]">1</sup>
          </span>
        </div>
      </button>
      {open && (
        <div className="px-4 md:px-6 py-4 md:py-6">{children}</div>
      )}
    </div>
  );
}

function CalloutBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F5F7FA] border-l-4 border-[#003865] rounded-r-lg p-4 md:p-5 mb-6">
      <p className="text-[#003865] text-[15px] md:text-[16px] font-[700] mb-2">
        {title}
      </p>
      {children}
    </div>
  );
}

function CtaCard({
  title,
  subtitle,
  linkText,
  href,
  navigate,
}: {
  title: string;
  subtitle: string;
  linkText: string;
  href: string;
  navigate: (path: string) => void;
}) {
  return (
    <div className="bg-[#003865] rounded-lg p-6 flex flex-col justify-between min-h-[180px]">
      <div>
        <h3 className="text-white text-[14px] md:text-[15px] font-[700] uppercase tracking-wide mb-1">
          {title}
        </h3>
        <p className="text-white/80 text-[13px] md:text-[14px] font-[600] mb-4 leading-snug">
          {subtitle}
        </p>
      </div>
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

export function DosingOverviewPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />
      <AnchorNav />

      {/* Convenient oral dosing section */}
      <section id="convenient" className="px-4 md:px-16 xl:px-20 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            ICLUSIG is a single tablet taken orally once daily
            <sup className="text-[60%]">1</sup>
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
            <li>Can be taken with or without food</li>
            <li>Tablets should be swallowed whole. Do not crush, break, cut, or chew tablets</li>
            <li>If a dose is missed, take the next dose at the regularly scheduled time the next day</li>
          </ul>

          {/* Tablet image */}
          <div className="mb-4">
            <img
              src={packagingImg}
              alt="ICLUSIG (ponatinib) is available in 45 mg, 30 mg, 15 mg, and 10 mg tablets."
              className="w-full max-w-[600px]"
            />
          </div>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-1">
            ICLUSIG is available in multiple dosage strengths.
          </p>
          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
            Each dosage strength is available as a single oral tablet.<sup className="text-[60%]">1</sup>
          </p>

          {/* Download button */}
          <a
            href={`${PDF_BASE}/sites/default/files/resources/iclusig_dosing_guide.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#237EBF] text-[14px] md:text-[15px] font-[600]
                       border border-[#237EBF] rounded-md px-5 py-2.5 hover:bg-[#237EBF]/5 transition-colors mb-8"
          >
            <Download size={16} />
            Download CP-CML Dosing Guide
          </a>
        </div>
      </section>

      {/* Optimized dosing strategy callout boxes */}
      <section id="dosingstrategy" className="px-4 md:px-16 xl:px-20 pb-8 md:pb-12">
        <div className="max-w-4xl">
          <CalloutBox title="Optimized dosing strategy in CP-CML\u00B9">
            <ul className="list-none space-y-2">
              <li>
                <button
                  onClick={() => navigate("/dosing/cml-optimized")}
                  className="inline-flex items-center gap-2 text-[#237EBF] text-[14px] font-[600] hover:underline"
                >
                  An optimized dosing approach may be used in patients with CP-CML
                  <ChevronRight size={16} />
                </button>
              </li>
            </ul>
          </CalloutBox>

          <CalloutBox title="Optimized dosing strategy in newly diagnosed Ph+ ALL, in combination with chemotherapy\u00B9">
            <ul className="list-none space-y-2">
              <li>
                <button
                  onClick={() => navigate("/ph-positive-all/first-line#dosing")}
                  className="inline-flex items-center gap-2 text-[#237EBF] text-[14px] font-[600] hover:underline"
                >
                  Learn more about optimized dosing
                  <ChevronRight size={16} />
                </button>
              </li>
              <li>
                <a
                  href={`${PDF_BASE}/sites/default/files/resources/phall_iclusig_dosing_guide.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#237EBF] text-[14px] font-[600] hover:underline"
                >
                  <Download size={14} />
                  Download Ph+ ALL Dosing Guide
                </a>
              </li>
            </ul>
          </CalloutBox>

          {/* Dosing strategy as monotherapy */}
          <h2 className="text-[#1B2430] text-[16px] md:text-[20px] lg:text-[22px] font-[700] leading-snug mb-4">
            Dosing strategy as monotherapy in accelerated-phase chronic myeloid leukemia,
            blast-phase chronic myeloid leukemia, and Philadelphia chromosome-positive
            acute lymphoblastic leukemia<sup className="text-[60%]">1</sup>
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-8">
            <li>Optimal dose of ICLUSIG has not been identified</li>
            <li>Recommended starting dosage is 45 mg orally once daily</li>
            <li>Consider reducing dosage for patients with AP-CML who have achieved a major cytogenetic response</li>
            <li>Continue treatment with ICLUSIG until loss of response or unacceptable toxicity</li>
            <li>Consider discontinuing ICLUSIG if response has not occurred by 3 months</li>
          </ul>
        </div>
      </section>

      {/* Guidance for dose modifications */}
      <section id="dosemodification" className="px-4 md:px-16 xl:px-20 pb-8 md:pb-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            Guidance for dose modifications
          </h2>

          {/* Accordion: Dose Modifications */}
          <AccordionSection
            title="ICLUSIG (ponatinib) dose modifications"
            subtitle="Recommended Dose Modifications for ICLUSIG for Adverse Reactions"
            defaultOpen={false}
          >
            <div className="overflow-x-auto">
              <img
                src={doseModificationsImg}
                alt="Recommended ICLUSIG dosing modifications for specific adverse reactions."
                className="w-full max-w-[800px]"
              />
            </div>
            <p className="text-[#6B7280] text-[12px] md:text-[13px] mt-3 leading-relaxed">
              Based on CTCAE v5.0: Grade 1 mild, Grade 2 moderate, Grade 3 severe, Grade 4 life-threatening
            </p>
          </AccordionSection>

          {/* Accordion: Dose Reductions */}
          <div id="dosereduction">
            <AccordionSection
              title="ICLUSIG (ponatinib) dose reductions"
              subtitle="Recommended Dose Reductions for ICLUSIG for Adverse Reactions"
              defaultOpen={false}
            >
              <div className="overflow-x-auto">
                <img
                  src={doseReductionsImg}
                  alt="Recommended ICLUSIG dose reductions for patients with CP-CML, AP-CML, BP-CML, resistant or intolerant Ph+ ALL, or newly diagnosed Ph+ ALL."
                  className="w-full max-w-[800px]"
                />
              </div>
            </AccordionSection>
          </div>

          {/* Accordion: CYP3A Inhibitors */}
          <div id="cyp3a">
            <AccordionSection
              title="ICLUSIG (ponatinib) dosage with strong CYP3A inhibitors"
              subtitle="Recommended ICLUSIG Dosage for Coadministration of Strong CYP3A Inhibitors"
              defaultOpen={false}
            >
              <div className="overflow-x-auto">
                <img
                  src={cyp3aImg}
                  alt="Dose reduction for ICLUSIG patients with a strong CYP3A inhibitor."
                  className="w-full max-w-[800px]"
                />
              </div>
            </AccordionSection>
          </div>
        </div>
      </section>

      {/* Hepatic impairment */}
      <section className="px-4 md:px-16 xl:px-20 pb-8 md:pb-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-4">
            Dosing for patients with hepatic impairment
          </h2>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
            For patients with CP-CML, AP-CML, BP-CML, and Ph+ ALL receiving monotherapy,
            reduce the starting dose of ICLUSIG from 45 mg orally once daily to 30 mg orally
            once daily in patients with pre-existing hepatic impairment (Child-Pugh A, B, or C).
          </p>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-8">
            For patients with newly diagnosed Ph+ ALL, no dosage adjustment is recommended
            when administering ICLUSIG to patients with mild hepatic impairment (Child-Pugh A).
            Closely monitor patients with moderate or severe hepatic impairment (Child-Pugh B or C)
            and modify the ICLUSIG dosage in the event of adverse reactions.
          </p>
        </div>
      </section>

      {/* CTA cards */}
      <section className="px-4 md:px-16 xl:px-20 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
          <CtaCard
            title="CP-CML"
            subtitle="OPTIMIZE BENEFIT:RISK THROUGH INNOVATIVE DOSING APPROACH"
            linkText="Optimized dosing strategy in CP-CML"
            href="/dosing/cml-optimized"
            navigate={navigate}
          />
          <CtaCard
            title="Newly Diagnosed Ph+ ALL"
            subtitle="EXPLORE DOSE REDUCTIONS OF ICLUSIG WITH CHEMOTHERAPY"
            linkText="Optimized dosing strategy in 1L Ph+ ALL"
            href="/ph-positive-all/first-line#dosing"
            navigate={navigate}
          />
          <CtaCard
            title="Access to ICLUSIG"
            subtitle="HELP YOUR PATIENTS ACCESS ICLUSIG"
            linkText="Explore patient support resources"
            href="/support/here2assist"
            navigate={navigate}
          />
        </div>
      </section>

      {/* Abbreviations */}
      <section className="px-4 md:px-16 xl:px-20 pb-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          ALT=alanine transaminase; ANC=absolute neutrophil count; AOE=arterial occlusive events;
          AP-CML=accelerated-phase chronic myeloid leukemia; AST=aspartate aminotransferase;
          BP-CML=blast-phase chronic myeloid leukemia; CP-CML=chronic-phase chronic myeloid leukemia;
          CTCAE=Common Terminology Criteria for Adverse Events; Ph+ ALL=Philadelphia
          chromosome-positive acute lymphoblastic leukemia; ULN=upper limit of normal;
          VTE=venous thromboembolic events.
        </p>
      </section>
    </div>
  );
}
