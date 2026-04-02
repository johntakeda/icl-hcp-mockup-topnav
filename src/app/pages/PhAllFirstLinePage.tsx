import { useNavigate, useLocation } from "react-router";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import trialDesignImg from "@/imports/pages/ph-all/1l-phall-design-blue-chevron-graphic-dkt-1.svg";
import baselineCharsImg from "@/imports/pages/ph-all/1l-phall-baseline-characteristics-chart-dkt-1_0.svg";
import primaryEndpointImg from "@/imports/pages/ph-all/1l-ph-all-sixty-eight-percent-green-pie-chart-dkt.png";
import mrdNegImg from "@/imports/pages/ph-all/1l-ph-all-forty-four-thirty-one-green-bar-charts-dkt-1-1.svg";
import durationCrImg from "@/imports/pages/ph-all/1l-ph-all-duration-cr-chart-dkt-1.svg";
import durationMrdImg from "@/imports/pages/ph-all/1l-ph-all-duration-mrd-neg-chart-dkt_0.svg";
import adverseReactionsImg from "@/imports/pages/ph-all/1l-adverse-reaction-chart-dst_0.svg";
import dosing3RsImg from "@/imports/pages/ph-all/ph-3rs_013026.svg";

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
          <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight mb-3">
            Redefine Ph+ ALL treatment for newly diagnosed patients
          </h1>
          <p className="text-white/90 text-[14px] md:text-[16px] font-[700] leading-snug">
            The FIRST and ONLY FDA-APPROVED TKI for adults with NEWLY DIAGNOSED
            Ph+ ALL, in combination with chemotherapy<sup className="text-[60%]">1</sup>
          </p>
        </div>
      </div>
    </section>
  );
}

function AnchorNav({ activeId }: { activeId: string }) {
  const tabs = [
    { id: "study", label: "Study Design" },
    { id: "efficacy", label: "Efficacy" },
    { id: "safety", label: "Safety Profile" },
    { id: "dosing", label: "Optimized Dosing" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-[88px] z-20 bg-white border-b border-[#E3E8EF] overflow-x-auto">
      <div className="flex gap-0 min-w-max max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.id)}
            className={`px-4 md:px-6 py-3 text-[13px] md:text-[14px] font-[600] whitespace-nowrap border-b-2 transition-colors ${
              activeId === tab.id
                ? "border-[#2E8762] text-[#2E8762]"
                : "border-transparent text-[#6B7280] hover:text-[#1B2430]"
            }`}
          >
            {tab.label}
          </button>
        ))}
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
    <div className="bg-[#003865] rounded-lg p-6 flex flex-col justify-between min-h-[140px]">
      <h3 className="text-white text-[15px] md:text-[17px] font-[700] leading-snug mb-4">
        {title}
      </h3>
      <button
        onClick={() => navigate(href)}
        className="inline-flex items-center gap-2 text-white text-[13px] font-[600] border border-white rounded-md px-4 py-2 hover:bg-white/10 transition-colors self-start"
      >
        {linkText}
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

function Footnote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export function PhAllFirstLinePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("study");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll to hash on mount
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    ["study", "efficacy", "safety", "dosing"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />
      <AnchorNav activeId={activeSection} />

      {/* ============================================================ */}
      {/* STUDY DESIGN                                                  */}
      {/* ============================================================ */}
      <section id="study" className="scroll-mt-[140px] max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-4">
            Study design: PhALLCON was the first head-to-head phase 3 clinical
            trial vs another TKI in adults with newly diagnosed Ph+ ALL
            <sup className="text-[60%]">1,2</sup>
          </h2>
          <h3 className="text-[#374151] text-[14px] md:text-[16px] font-[600] leading-snug mb-6">
            245 global participants were randomized 2:1 to receive ICLUSIG +
            chemotherapy or imatinib + chemotherapy in a study with a composite
            primary endpoint of MRD-negative CR at the end of induction
            <sup className="text-[60%]">1,2</sup>
          </h3>

          {/* Trial design image */}
          <div className="mb-6">
            <img
              src={trialDesignImg}
              alt="Graphic of the trial design for the PhALLCON trial, including inclusion and exclusion criteria, trial groups, and endpoints."
              className="w-full max-w-[800px]"
            />
          </div>

          <p className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed mb-4">
            Only patients who achieved the primary endpoint of MRD-negative CR or
            CRi at the end of induction could continue study treatment at the
            investigator's discretion<sup className="text-[60%]">1</sup>
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              Single-agent therapy after chemotherapy for newly diagnosed Ph+ ALL
              is not an approved regimen<sup className="text-[60%]">1</sup>
            </li>
          </ul>

          <div className="bg-[#F5F7FA] rounded-lg p-4 mb-6 space-y-2">
            <Footnote>
              *Following combination therapy, patients continued to receive
              ICLUSIG or imatinib as single-agent therapy until relapse from CR,
              progressive disease (PD), hematopoietic stem cell transplantation
              (HSCT), start of alternative therapy, or unacceptable toxicity.
              <sup>1</sup>
            </Footnote>
            <Footnote>
              <sup>†</sup>MRD negativity was defined as ≤0.01% BCR::ABL1/ABL1 or
              undetectable BCR::ABL1 transcripts in cDNA with ≥10,000 ABL1
              transcripts.
            </Footnote>
            <Footnote>
              <sup>‡</sup>EFS defined as dates of randomization until death due
              to any cause, failure to achieve CR by the end of induction, or
              relapse from CR.<sup>3</sup>
            </Footnote>
            <Footnote>
              ALL=acute lymphoblastic leukemia; ANC=absolute neutrophil count;
              CR=complete remission/response; CRi=incomplete hematologic response;
              ECOG PS=Eastern Cooperative Oncology Group performance status;
              EFS=event-free survival; MRD=minimum residual disease; Ph+
              ALL=Philadelphia chromosome-positive acute lymphoblastic leukemia;
              TKI=tyrosine kinase inhibitor.
            </Footnote>
          </div>

          {/* Patient characteristics */}
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] font-[700] leading-snug mb-3">
            ICLUSIG: For the range of appropriate patients you see in your
            practice<sup className="text-[60%]">1</sup>
          </h2>
          <h3 className="text-[#374151] text-[14px] md:text-[16px] font-[600] leading-snug mb-6">
            ICLUSIG was studied in a diverse range of adults with newly diagnosed
            Ph+ ALL in PhALLCON<sup className="text-[60%]">1</sup>
          </h3>
          <div className="mb-6">
            <img
              src={baselineCharsImg}
              alt="Baseline patient and disease characteristics for the PhALLCON trial."
              className="w-full max-w-[800px]"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EFFICACY                                                      */}
      {/* ============================================================ */}
      <section
        id="efficacy"
        className="scroll-mt-[140px] py-8 md:py-12 bg-[#F5F7FA]"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-4">
            ICLUSIG Efficacy: Significantly superior rate of MRD-negative CR with
            ICLUSIG vs imatinib at the end of induction (primary endpoint)
            <sup className="text-[60%]">1</sup>
          </h2>
          <h3 className="text-[#374151] text-[14px] md:text-[16px] font-[600] leading-snug mb-6">
            In PhALLCON, ICLUSIG delivered more than double the rate of
            MRD-negative CR at the end of the 3-month induction phase
            <sup className="text-[60%]">1</sup>
          </h3>

          {/* Primary endpoint image */}
          <div className="mb-4">
            <img
              src={primaryEndpointImg}
              alt=">2 times rate of MRD-negative CR was achieved with ICLUSIG vs imatinib at the end of induction."
              className="w-full max-w-[700px]"
            />
          </div>

          <ul className="list-disc pl-6 mb-4">
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              MRD-negative CR is defined as ≤0.01% BCR::ABL1/ABL1 or
              undetectable BCR::ABL1 transcripts in cDNA with ≥10,000 ABL1
              transcripts, and meeting criteria for CR.*
            </li>
          </ul>

          <div className="bg-white rounded-lg p-4 mb-8 space-y-2">
            <Footnote>
              <sup>a</sup>Of the 245 randomized patients, 244 patients were
              treated. Efficacy population included patients with baseline
              BCR::ABL1 dominant variant p190 and p210; 13/245 patients had
              atypical, missing, or unevaluable BCR::ABL1 assessment and were
              not included in the efficacy analysis.<sup>1,2</sup>
              <sup>b</sup>Treatments were used in combinations with
              chemotherapy.<sup>1</sup>
            </Footnote>
            <Footnote>
              ANC=absolute neutrophil count; cDNA=complementary DNA;
              CI=confidence interval; CR=complete remission/response;
              EFS=event-free survival; MRD=minimal residual disease.
            </Footnote>
          </div>

          {/* MRD negativity additional endpoint */}
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] font-[700] leading-snug mb-4">
            ICLUSIG delivered a higher rate of MRD negativity* vs imatinib at
            the end of induction (additional endpoint)
            <sup className="text-[60%]">2</sup>
          </h2>

          <div className="mb-4">
            <img
              src={mrdNegImg}
              alt="About 18% more ICLUSIG patients achieved MRD negativity vs imatinib patients at the end of induction."
              className="w-full max-w-[700px]"
            />
          </div>

          <ul className="list-disc pl-6 mb-4">
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              <strong>Limitations</strong>: PhALLCON was designed to show a
              statistically significant difference between arms for MRD-negative
              CR*; the trial was not designed to show a statistically significant
              difference between arms for MRD-negativity alone
              <sup className="text-[60%]">1,2</sup>
            </li>
          </ul>

          <div className="bg-white rounded-lg p-4 mb-8 space-y-2">
            <Footnote>
              *MRD negativity was defined as ≤0.01% BCR::ABL1/ABL1 or
              undetectable BCR::ABL1 transcripts in cDNA with ≥10,000 ABL1
              transcripts.<sup>4</sup>
              <sup>†</sup>Treatments were used in combination with
              chemotherapy.<sup>1</sup>
            </Footnote>
            <Footnote>
              CI=confidence interval; CR=complete remission/response;
              MR=molecular response; MRD=minimal residual disease.
            </Footnote>
          </div>

          {/* Duration of CR */}
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] font-[700] leading-snug mb-2">
            ICLUSIG extended the duration of complete remission vs imatinib
            <sup className="text-[60%]">2</sup> (additional endpoint)
          </h2>
          <h3 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-6">
            Median duration of CR was not reached with ICLUSIG vs 19.4 months
            with imatinib
          </h3>

          <div className="mb-4">
            <img
              src={durationCrImg}
              alt="Graph showing duration of complete remission (additional endpoints) in PhALLCON."
              className="w-full max-w-[700px]"
            />
          </div>

          <div className="mb-4">
            <p className="text-[#374151] text-[13px] md:text-[14px] font-[700] mb-2">
              Study features<sup className="text-[60%]">3,4</sup>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
                The median duration of follow-up was 20.4 months (95% CI: 18.4,
                23.9) with ICLUSIG and 18.1 months (95% CI: 13.9, 24.3) with
                imatinib
              </li>
              <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
                <strong>Relapse from CR:</strong> 8.2% (n=10) of ICLUSIG
                patients vs 10.2% (n=5) of imatinib patients at the time of
                data cutoff (August 12, 2022)
              </li>
              <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
                <strong>Limitations:</strong> PhALLCON was designed to show a
                statistically significant difference between arms for
                MRD-negative CR<sup>‡</sup>; the trial was not designed to show
                a statistically significant difference between arms for duration
                of CR
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 mb-8 space-y-2">
            <Footnote>
              *CR was defined as meeting all of the following for ≥4 weeks:
              {"<"}5% lymphoblasts in bone marrow, no lymphoblasts in blood,
              blood cell counts have normalized, and all signs and symptoms of
              ALL are gone. <sup>†</sup>Complete remission is also known as
              complete response.
            </Footnote>
            <Footnote>
              ALL=acute lymphoblastic leukemia; CI=confidence interval;
              CR=complete remission/response; MRD=minimal residual disease;
              NE=not evaluable
            </Footnote>
          </div>

          {/* Duration of MRD negativity */}
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] font-[700] leading-snug mb-2">
            Durable MRD negativity with ICLUSIG (additional endpoint)
            <sup className="text-[60%]">2-4</sup>
          </h2>
          <h3 className="text-[#374151] text-[14px] md:text-[16px] font-[600] mb-6">
            Median duration of MRD negativity was not reached in either arm
            (ICLUSIG vs imatinib)<sup className="text-[60%]">†‡</sup>
          </h3>

          <div className="mb-4">
            <img
              src={durationMrdImg}
              alt="Graph showing probability of duration of MRD negativity in PhALLCON."
              className="w-full max-w-[700px]"
            />
          </div>

          <div className="mb-4">
            <p className="text-[#374151] text-[13px] md:text-[14px] font-[700] mb-2">
              Study features<sup className="text-[60%]">3,4</sup>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
                <strong>Relapse from MRD negativity:</strong> 14% (n=8) of
                ICLUSIG patients vs 13.3% (n=2) of imatinib patients at the
                time of data cutoff (August 12, 2022)
              </li>
              <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
                <strong>Limitations:</strong> PhALLCON was designed to show a
                statistically significant difference between arms for
                MRD-negative CR<sup>‡</sup>; the trial was not designed to show
                a statistically significant difference between arms for duration
                of MRD negativity
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 space-y-2">
            <Footnote>
              <sup>†</sup>Complete remission is also known as complete response
              <sup>1</sup> <sup>‡</sup>MRD negativity was defined as ≤0.01%
              BCR::ABL1/ABL1 or undetectable BCR::ABL1 transcripts in cDNA with
              ≥10,000 ABL1 transcripts.<sup>3</sup>
            </Footnote>
            <Footnote>
              cDNA=complementary DNA; CI=confidence interval; CR=complete
              remission/response; MRD=minimal residual disease; NE=not evaluable
            </Footnote>
          </div>
        </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SAFETY PROFILE                                                */}
      {/* ============================================================ */}
      <section id="safety" className="scroll-mt-[140px] max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            Safety profile: In adults with newly diagnosed Ph+ ALL, ICLUSIG +
            chemotherapy had a comparable safety profile to imatinib +
            chemotherapy<sup className="text-[60%]">1</sup>
          </h2>

          {/* Adverse reactions chart */}
          <h3 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-4">
            Most common adverse reactions ≥20% in the PhALLCON study
            <sup className="text-[60%]">1</sup>
          </h3>

          <div className="mb-6">
            <img
              src={adverseReactionsImg}
              alt="Chart of the most common adverse reactions in the PhALLCON study."
              className="w-full max-w-[800px]"
            />
          </div>

          <div className="bg-[#F5F7FA] rounded-lg p-4 mb-8 space-y-2">
            <Footnote>
              <sup>a</sup>Graded using CTCAE v5.0.<sup>1</sup>{" "}
              <sup>b</sup>Includes arthralgia, arthritis, back pain, flank
              pain, intervertebral disc degeneration, joint swelling,
              osteoarthritis, pain, neck pain, pain in extremity, pain of skin,
              sciatica, spinal pain, tendonitis, and tenosynovitis.<sup>1</sup>
            </Footnote>
            <Footnote>
              AR=adverse reaction; CTCAE=Common Terminology Criteria for Adverse
              Events; Ph+ ALL=Philadelphia chromosome-positive acute
              lymphoblastic leukemia.
            </Footnote>
          </div>

          {/* Safety details */}
          <h3 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-4">
            ICLUSIG + chemotherapy safety profile in the PhALLCON study
          </h3>

          <h4 className="text-[#1B2430] text-[14px] md:text-[15px] font-[700] mb-3">
            Serious and fatal adverse reactions
          </h4>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              Serious adverse reactions occurred in 63% of ICLUSIG patients and
              57% of imatinib patients<sup className="text-[60%]">1,2</sup>
            </li>
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              Serious adverse reactions ({">"}2%) in ICLUSIG patients included
              febrile neutropenia (18%), pyrexia (6%), thrombocytopenia (4.3%),
              sepsis (3.7%), septic shock (3.7%), anemia (2.5%), hemorrhage
              (2.5%), neutropenia (2.5%), pancreatitis (2.5%), peripheral
              neuropathy (2.5%), pneumonia (2.5%), and acute kidney injury
              (2.5%)<sup className="text-[60%]">1</sup>
            </li>
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              Fatal adverse reactions occurred in 6% of patients in both arms
              (ICLUSIG: 9 patients; imatinib: 5 patients)
              <sup className="text-[60%]">1,2</sup>
            </li>
          </ul>

          <h4 className="text-[#1B2430] text-[14px] md:text-[15px] font-[700] mb-3">
            Discontinuations
          </h4>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              Permanent discontinuation due to adverse reactions occurred in 13%
              of ICLUSIG patients. Adverse reactions resulting in permanent
              discontinuation in {">"}2% of ICLUSIG patients included arterial
              occlusive events and sepsis
              <sup className="text-[60%]">1</sup>
            </li>
          </ul>

          <h4 className="text-[#1B2430] text-[14px] md:text-[15px] font-[700] mb-3">
            Laboratory abnormalities
          </h4>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              The most common Grade 3 or 4 laboratory abnormalities ({">"}20%)
              are decreased white blood cell count, decreased neutrophil cell
              count, decreased platelet count, decreased lymphocyte cell count,
              decreased hemoglobin, increased lipase, and increased ALT
              <sup className="text-[60%]">1</sup>
            </li>
          </ul>

          <h4 className="text-[#1B2430] text-[14px] md:text-[15px] font-[700] mb-3">
            Clinically relevant
          </h4>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              Clinically relevant adverse reactions in ≤10% of ICLUSIG patients
              included urinary tract infection (10%), arterial occlusive events
              (6%), cardiac failure (6%), and acute kidney injury (4.3%)
              <sup className="text-[60%]">1</sup>
            </li>
          </ul>

          <h4 className="text-[#374151] text-[14px] md:text-[15px] font-[600] mb-4 leading-snug">
            In PhALLCON, ICLUSIG demonstrated comparable safety outcomes with
            imatinib, including rates and severity of AOEs and VTEs
            <sup className="text-[60%]">1,2</sup>
          </h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              The rate of TE-VTEs was 11.7% in ICLUSIG patients vs 12.3% in
              imatinib patients<sup className="text-[60%]">2</sup>
            </li>
            <li className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
              The rate of TE-AOEs was 2.5% in ICLUSIG patients vs 1.2% in
              imatinib patients<sup className="text-[60%]">2</sup>
            </li>
          </ul>
          <Footnote>
            AOEs=arterial occlusive events; ALT=alanine aminotransferase;
            TE-AOEs=treatment-emergent arterial occlusive events;
            TE-VTEs=treatment-emergent venous thromboembolic events;
            TEAE=treatment-emergent adverse event; VTEs=venous thromboembolic
            events.
          </Footnote>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OPTIMIZED DOSING                                              */}
      {/* ============================================================ */}
      <section
        id="dosing"
        className="scroll-mt-[140px] py-8 md:py-12 bg-[#F5F7FA]"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            Optimized dosing with ICLUSIG + chemotherapy for adults with newly
            diagnosed Ph+ ALL<sup className="text-[60%]">1</sup>
          </h2>

          <p className="text-[#1B2430] text-[14px] md:text-[16px] font-[700] mb-2">
            A starting dose of ICLUSIG 30 mg can be reduced to 15 mg once a
            patient achieves a meaningful response
          </p>
          <p className="text-[#1B2430] text-[14px] md:text-[16px] font-[700] mb-6">
            For maximized disease control, follow the 3 Rs:
          </p>

          {/* Dosing diagram */}
          <div className="mb-8">
            <img
              src={dosing3RsImg}
              alt="The 3 Rs of ICLUSIG optimized dosing for newly diagnosed Ph+ ALL."
              className="w-full max-w-[700px]"
            />
          </div>
        </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="Review the comprehensive ICLUSIG dosing guide for patients with newly diagnosed Ph+ ALL"
            linkText="Download the 1L Ph+ ALL Dosing Guide"
            href="/dosing"
            navigate={navigate}
          />
          <CtaCard
            title="Discover resources that can help you and your patients"
            linkText="Helpful ICLUSIG Resources"
            href="/support/resources"
            navigate={navigate}
          />
        </div>
      </section>
    </div>
  );
}
