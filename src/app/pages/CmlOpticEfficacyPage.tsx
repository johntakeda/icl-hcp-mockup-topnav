import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import opticTrialDesign from "@/imports/pages/efficacy/optic-trial-design-blue-chevron-graphic-dkt-outline.svg";
import opticPatientChars from "@/imports/pages/efficacy/OPTIC-patient-characteristics-blue-table-DKT.svg";
import stat98 from "@/imports/pages/efficacy/98-percent.svg";
import stat99 from "@/imports/pages/efficacy/99-percent.svg";
import stat44 from "@/imports/pages/efficacy/44-percent.svg";
import opticResponseBars from "@/imports/pages/efficacy/OPTIC-response-with-w-o-T-Three-fourty-four-percent-bar-charts-DKT.svg";
import optic56Pie from "@/imports/pages/efficacy/optic-fifty-six-percent-pie-chart-dkt_small-1.svg";
import opticPercentPatients from "@/imports/pages/efficacy/percent-patients_012826-1_1.svg";
import opticDeathResponse from "@/imports/pages/efficacy/death-respnose_092625_0.svg";

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
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight mb-4">
          OPTIC: A trial built with an optimized dosing strategy to manage
          tolerability without compromising efficacy<sup className="text-[60%]">1</sup>
        </h1>
        <p className="text-white/90 text-[14px] md:text-[16px] leading-relaxed">
          ICLUSIG achieved and maintained a clinically meaningful depth of
          response with a 45 mg &rarr; 15 mg dose reduction upon achievement of
          &le;1% BCR::ABL1<sup className="text-[60%]">IS</sup> in patients with
          CP-CML<sup className="text-[60%]">1</sup>
        </p>
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
            <a href="#optimizeddosingstrategy" className="hover:underline">
              Optimized dosing strategy
            </a>
          </li>
          <li>
            <a href="#primaryanalysis" className="hover:underline">
              Primary Analysis: Response rates
            </a>
          </li>
          <li>
            <a href="#fiveyearfollowup" className="hover:underline">
              5-Year follow-up response rates
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

function StatCallout({
  value,
  imgSrc,
  imgAlt,
  description,
  superscript,
}: {
  value: string;
  imgSrc?: string;
  imgAlt?: string;
  description: string;
  superscript?: string;
}) {
  return (
    <div className="flex items-start gap-4 py-4">
      {imgSrc ? (
        <img src={imgSrc} alt={imgAlt || value} className="w-[80px] md:w-[100px] flex-shrink-0" />
      ) : (
        <span className="text-[#237EBF] text-[48px] md:text-[64px] font-[800] leading-none flex-shrink-0">
          {value}
        </span>
      )}
      <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed pt-2">
        {description}
        {superscript && <sup className="text-[60%]">{superscript}</sup>}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Patient Characteristics Table                                      */
/* ------------------------------------------------------------------ */

function PatientCharacteristicsTable() {
  const rows = [
    { category: "PATIENT DEMOGRAPHICS", isHeader: true },
    { label: "Median age, years", col1: "48 (19-78)", isSubRow: false },
    { label: "Sex (male)", col1: "57%", isSubRow: false },
    { label: "Race (White)", col1: "82%", isSubRow: false },
    { label: "ECOG PS 0/1", col1: "93%", isSubRow: false },
    { category: "DISEASE HISTORY", isHeader: true },
    { label: "Median duration of CML, months", col1: "88", isSubRow: false },
    { label: "Resistant to most recent prior TKI", col1: "98%", isSubRow: false },
    { label: "Number of prior TKIs", col1: "", isSubRow: false },
    { label: "2", col1: "57%", isSubRow: true },
    { label: "3", col1: "34%", isSubRow: true },
    { label: "\u22654", col1: "8%", isSubRow: true },
    { category: "MUTATION STATUS", isHeader: true },
    { label: "Any mutation", col1: "44%", isSubRow: false },
    { label: "T315I", col1: "28%", isSubRow: false },
    { label: "Compound mutation", col1: "5%", isSubRow: false },
  ];

  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-left text-[13px] md:text-[14px] border-collapse">
        <thead>
          <tr className="bg-[#003865] text-white">
            <th className="px-4 py-3 font-[600] text-left">Characteristic</th>
            <th className="px-4 py-3 font-[600] text-left">
              45 mg &rarr; 15 mg (n=94)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            if (row.isHeader) {
              return (
                <tr key={i} className="bg-[#E3E8EF]">
                  <td
                    colSpan={2}
                    className="px-4 py-2 font-[700] text-[#003865] text-[12px] md:text-[13px] uppercase tracking-wide"
                  >
                    {row.category}
                  </td>
                </tr>
              );
            }
            return (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F7FA]"}>
                <td className={`px-4 py-2 text-[#1B2430] ${row.isSubRow ? "pl-8" : ""}`}>
                  {row.label}
                </td>
                <td className="px-4 py-2 text-[#1B2430]">{row.col1}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export function CmlOpticEfficacyPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />
      <AnchorNav />

      {/* ---- Trial Design ---- */}
      <section id="trialdesign" className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[20px] md:text-[24px] lg:text-[28px] font-[800] uppercase tracking-wide mb-6">
            OPTIC Trial Design
          </h2>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
            OPTIC is an open-label, multicenter, randomized study that employs a
            dose-reduction strategy aiming to maximize the benefit of ICLUSIG
            while helping to mitigate risk in patients with CP-CML who are
            resistant to at least 2 prior TKIs or have the T315I mutation. The
            primary endpoint for OPTIC is &le;1% BCR::ABL1
            <sup className="text-[60%]">IS</sup> at 12 months.
            <sup className="text-[60%]">1</sup>
          </p>

          {/* Trial design diagram */}
          <div className="mb-6">
            <img
              src={opticTrialDesign}
              alt="OPTIC Trial design. Patients with CP-CML started at 45 mg, 30 mg, or 15 mg, and doses were monitored over a 24-month period."
              className="w-full max-w-[700px]"
            />
          </div>

          <ul className="list-disc pl-6 space-y-1 text-[#374151] text-[13px] md:text-[14px] leading-relaxed mb-4">
            <li>
              Dose reductions were utilized in response to adverse reactions.
              <sup className="text-[60%]">1</sup>
            </li>
            <li>
              Patients receiving 15 mg had their dose reduced to 10 mg QD.
              <sup className="text-[60%]">1</sup>
            </li>
          </ul>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
            The 5-year data provide an update on the long-term efficacy and
            safety profile of ICLUSIG in this setting and aim to provide more
            robust data on the best approaches for managing these patients over
            an extended period of time.
          </p>

          <p className="text-[#6B7280] text-[12px] md:text-[13px] leading-relaxed mb-8">
            <sup>a</sup>Resistance in CP-CML while on a prior TKI therapy was
            defined as failure to achieve either a CHR (by 3 months), a minor
            cytogenetic response (by 6 months), or a major cytogenetic response
            (by 12 months), or development of a new BCR::ABL1 kinase domain
            mutation or new clonal evolution.
          </p>
        </div>
      </section>

      {/* ---- Patient Characteristics ---- */}
      <section id="optimizeddosingstrategy" className="py-8 md:py-12 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[20px] md:text-[24px] lg:text-[28px] font-[800] uppercase tracking-wide mb-2">
            Patient Characteristics Reveal High TKI Resistance and Mutations
          </h2>

          <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[600] mb-6">
            Demographic and disease characteristics in OPTIC
            <sup className="text-[60%]">1,2</sup>
          </h4>

          {/* Patient characteristics table image */}
          <div className="mb-6">
            <img
              src={opticPatientChars}
              alt="Patient characteristics at entry of OPTIC."
              className="w-full max-w-[700px]"
            />
          </div>

          {/* Key statistics callouts */}
          <div className="space-y-2 mb-6">
            <StatCallout
              value="98%"
              imgSrc={stat98}
              imgAlt="98%"
              description="of participants were resistant to their prior therapy"
              superscript="2"
            />
            <StatCallout
              value="99%"
              imgSrc={stat99}
              imgAlt="99%"
              description="were heavily pretreated with TKIs"
              superscript="2"
            />
            <StatCallout
              value="44%"
              imgSrc={stat44}
              imgAlt="44%"
              description="of participants had mutations in BCR::ABL"
              superscript="2"
            />
          </div>
        </div>
        </div>
      </section>

      {/* ---- Primary Analysis: Response Rates ---- */}
      <section id="primaryanalysis" className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[20px] md:text-[24px] lg:text-[28px] font-[800] leading-tight mb-4">
            Primary Analysis: ICLUSIG achieved and maintained a clinically
            meaningful depth of response<sup className="text-[60%]">1</sup>
          </h2>

          <h3 className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] leading-snug mb-4">
            ICLUSIG demonstrated response rates (&le;1% BCR::ABL1
            <sup className="text-[60%]">IS</sup>) at 12 months, regardless of
            mutation status. The median duration of follow-up for the total
            population was 32 months (range, 1-57)
            <sup className="text-[60%]">1,2</sup>
          </h3>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
            Results from OPTIC demonstrate a benefit in a highly-resistant
            CP-CML population across dosing cohorts. However, optimal
            benefit:risk outcomes occurred in the cohort with a 45 mg starting
            dose that reduced to 15 mg upon achievement of &le;1%
            BCR::ABL1<sup className="text-[60%]">IS</sup>.
            <sup className="text-[60%]">1</sup> The recommended starting dose is
            45 mg orally once daily with a reduction to 15 mg orally once daily
            upon achievement of &le;1% BCR::ABL1
            <sup className="text-[60%]">IS</sup>. Patients with loss of response
            can re-escalate the dose of ICLUSIG to a previously tolerated dose
            of 30 mg or 45 mg orally once daily.
            <sup className="text-[60%]">2</sup>
          </p>

          {/* Primary endpoint heading */}
          <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-4">
            Patients with &le;1% BCR::ABL1<sup className="text-[60%]">IS</sup>{" "}
            at 12 months<sup className="text-[60%]">2</sup> (primary endpoint)
          </h4>

          {/* Response rates chart */}
          <div className="mb-4">
            <img
              src={opticResponseBars}
              alt="44% of patients without T315I achieved less than or equal to 1% BCR::ABL1IS at 12 months. 44% of patients with T315I achieved less than or equal to 1% BCR::ABL1IS at 12 months."
              className="w-full max-w-[600px]"
            />
          </div>

          <ul className="list-disc pl-6 space-y-1 text-[#374151] text-[13px] md:text-[14px] leading-relaxed mb-2">
            <li>
              Median duration of follow-up in the 45 mg&rarr;15 mg cohort was
              27.0 months<sup className="text-[60%]">2</sup>
            </li>
          </ul>

          <div className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-8 space-y-1">
            <p>
              <sup>a</sup>ITT population (N=93) defined as patients who had
              b2a2/b3a2 BCR::ABL1 transcripts.<sup>2</sup>
            </p>
            <p>
              <sup>b</sup>The primary endpoint was &le;1% BCR::ABL1
              <sup>IS</sup> rate at 12 months. Defined as a &le;1% ratio of
              BCR::ABL1 to ABL transcripts on the International Scale (ie, &le;1%
              BCR::ABL1<sup>IS</sup>); patients must have the b2a2/b3a2 (p210)
              transcript, in peripheral blood measured by qRT PCR.
              <sup>2</sup>
            </p>
            <p>
              <sup>c</sup>Of the 93 patients, 2 did not have a baseline mutation
              assessment and were excluded from the response by mutation
              analysis.<sup>2</sup>
            </p>
          </div>

          {/* Maintained Response */}
          <h3 className="text-[#003865] text-[18px] md:text-[22px] font-[800] mb-4">
            Maintained Response
          </h3>

          <div className="mb-4">
            <img
              src={optic56Pie}
              alt="56% of patients (n=25/45) maintained response at a reduced dose of 15 mg for at least 1 year. 64% of these patients (n=16/25) maintained response for greater than 60 months."
              className="w-full max-w-[500px]"
            />
          </div>

          <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-6">
            <sup>a</sup>Patients who achieved &le;1% BCR::ABL1
            <sup>IS</sup> at any time.
          </p>

          <button
            onClick={() => navigate("/safety/cml-optic-trial")}
            className="inline-flex items-center gap-2 text-[#237EBF] text-[14px] md:text-[15px] font-[600] hover:underline mb-8"
          >
            Discover OPTIC safety profile
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* ---- 5-Year Follow-up ---- */}
      <section id="fiveyearfollowup" className="py-8 md:py-12 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-[#003865] text-[20px] md:text-[24px] lg:text-[28px] font-[800] leading-tight mb-4">
            Long-Term Efficacy Data: More than half of patients had a response by
            5 years in the 45 mg &rarr; 15 mg cohort
            <sup className="text-[60%]">2</sup>
          </h2>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
            Response of patients by 12 months and 60 months in the 45 mg&rarr;15
            mg cohort receiving ICLUSIG following &ge;2 prior TKIs
            <sup className="text-[60%]">2</sup>
          </p>

          {/* 5-year bar chart */}
          <div className="mb-4">
            <img
              src={opticPercentPatients}
              alt="Bar chart showing percentage of patients who achieved 1% BCR::ABL1IS levels. Two bars display: 52% achieving it by 12 months. 60% achieving it by 60 months."
              className="w-full max-w-[600px]"
            />
          </div>

          <ul className="list-disc pl-6 space-y-1 text-[#374151] text-[13px] md:text-[14px] leading-relaxed mb-2">
            <li>
              Median duration of follow-up for the 45 mg&rarr;15 mg cohort was
              72.9 months (range: 0.5-106.3 months)
            </li>
          </ul>

          <p className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed mb-4">
            <strong>Study Limitations:</strong> The OPTIC 5-year follow-up
            analysis was a planned, exploratory, post hoc analysis. It was not
            powered to detect differences across subgroups. Results are presented
            descriptively.<sup className="text-[60%]">2</sup>
          </p>

          <div className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-8 space-y-1">
            <p>
              <sup>a</sup>Response by each time point means the best outcome up
              to each time point after randomization.
            </p>
            <p>
              <sup>b</sup>Analysis conducted in the intent-to-treat population.
            </p>
            <p>
              <sup>c</sup>Data cutoff date: May 15, 2024.
            </p>
            <p>
              <sup>d</sup>29% of patients in the 45 mg&rarr;15 mg cohort
              remained on therapy, with a median follow-up of 78 months.
            </p>
            <p>
              <sup>e</sup>The number of patients with &le;1% BCR::ABL1
              <sup>IS</sup> was counted on a cumulative basis by each time point,
              and a patient with response was counted only once. Percentages are
              based on the number of patients in each cohort as the denominator.
            </p>
          </div>

          {/* Deep durable efficacy */}
          <h2 className="text-[#003865] text-[20px] md:text-[24px] font-[800] mb-2">
            Deep, durable efficacy achieved with ICLUSIG
          </h2>
          <h3 className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] leading-snug mb-4">
            As of the 5-year follow-up data cutoff, the median duration of &le;1%
            BCR::ABL1<sup className="text-[60%]">IS</sup> had not been reached
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-4">
            <li>
              In the 45 mg&rarr;15 mg cohort (n=93), 56 patients achieved &le;1%
              BCR::ABL1
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  45 of the 56 patients had a dose reduction to 15 mg after
                  achieving response
                </li>
                <li>
                  68.9% (n=31) of these patients maintained their response at the
                  time of the 5-year data follow-up cutoff
                </li>
              </ul>
            </li>
          </ul>

          {/* Depth of response chart */}
          <div className="mb-4">
            <img
              src={opticDeathResponse}
              alt="Bar chart showing depth of response by 60 months for BCR::ABL1IS levels. Three bars display: 46% achieving MMR, 24% achieving MR4, and 13% achieving MR4.5."
              className="w-full max-w-[600px]"
            />
          </div>

          <div className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed mb-8 space-y-1">
            <p>
              <sup>a</sup>Response by each time point means the best outcome up
              to each time point after randomization.
            </p>
            <p>
              <sup>b</sup>Analysis conducted in the intent-to-treat population.
            </p>
          </div>

          {/* T315I mutation */}
          <h4 className="text-[#1B2430] text-[16px] md:text-[18px] font-[700] mb-3">
            Long-term efficacy with ICLUSIG in patients carrying T315I mutation
          </h4>
          <ul className="list-disc pl-6 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
            <li>
              64% of patients with T315I mutation achieved BCR::ABL1 levels of 1%
              or less by 60 months<sup className="text-[60%]">2</sup>
            </li>
          </ul>

          {/* PACE cross-link */}
          <div className="bg-white border border-[#E3E8EF] rounded-lg p-6 mb-8">
            <p className="text-[#1B2430] text-[15px] md:text-[16px] font-[600] mb-3">
              In PACE, ICLUSIG demonstrated durable efficacy in CML
            </p>
            <button
              onClick={() => navigate("/efficacy/cml-pace-trial")}
              className="inline-flex items-center gap-2 text-[#237EBF] text-[14px] font-[600] hover:underline"
            >
              Explore the data
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* ---- CTA Cards ---- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="ICLUSIG safety profile in the OPTIC Trial"
            linkText="ICLUSIG safety profile: OPTIC Trial"
            href="/safety/cml-optic-trial"
            navigate={navigate}
          />
          <CtaCard
            title="Learn to identify patients with CP-CML who are appropriate for ICLUSIG"
            linkText="Explore patient profiles"
            href="/cml/patient-profiles"
            navigate={navigate}
          />
        </div>
      </section>

      {/* ---- Abbreviations ---- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          BCR::ABL1<sup>IS</sup>=BCR::ABL1 international scale;
          CP-CML=chronic-phase chronic myeloid leukemia; ECOG PS=Eastern
          Cooperative Oncology Group performance status; ITT=intent-to-treat;
          OS=overall survival; PFS=progression-free survival; TKI=tyrosine kinase
          inhibitor; QD=once a day; qRT PCR=quantitative reverse transcriptase
          polymerase chain reaction.
        </p>
      </section>
    </div>
  );
}
