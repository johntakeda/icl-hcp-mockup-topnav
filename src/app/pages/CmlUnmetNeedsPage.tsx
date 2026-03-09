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
          TKI resistance is a critical event in the treatment of Chronic
          Phase-Chronic Myeloid Leukemia<sup className="text-[60%]">1</sup>
        </h1>
        <p className="text-white/90 text-[15px] md:text-[17px] font-[600] leading-snug">
          CCyR rates with back-to-back 2G TKIs are low, particularly for
          patients with resistance to their last prior therapy
          <sup className="text-[60%]">1,2</sup>
        </p>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  description,
  iconColor,
}: {
  stat: string;
  description: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white border border-[#E3E8EF] rounded-lg p-5 md:p-6 flex items-start gap-4 shadow-sm">
      {/* Icon */}
      <div className="flex-shrink-0">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="28" fill={iconColor} fillOpacity="0.1" />
          <path
            d="M28 14c-2.2 0-4 1.8-4 4v2h-2c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V22c0-1.1-.9-2-2-2h-2v-2c0-2.2-1.8-4-4-4zm-1 4c0-0.6.4-1 1-1s1 .4 1 1v2h-2v-2z"
            fill={iconColor}
          />
          <circle cx="21" cy="34" r="3" fill={iconColor} />
          <circle cx="28" cy="34" r="3" fill={iconColor} />
          <circle cx="35" cy="34" r="3" fill={iconColor} />
        </svg>
      </div>
      <div>
        <p className="text-[#003865] text-[28px] md:text-[34px] font-[800] leading-tight mb-1">
          {stat}
        </p>
        <p className="text-[#374151] text-[13px] md:text-[14px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function TealCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0A8F8A] rounded-lg px-5 py-4 md:px-6 md:py-5">
      <p className="text-white text-[15px] md:text-[17px] font-[600] leading-snug">
        {children}
      </p>
    </div>
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
/*  Mutations table                                                    */
/* ------------------------------------------------------------------ */

function MutationsTable() {
  return (
    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
      <table className="w-full min-w-[480px] text-left text-[13px] md:text-[14px] border-collapse">
        <thead>
          <tr>
            <th className="bg-[#003865] text-white font-[600] px-4 py-3 rounded-tl-md" />
            <th className="bg-[#003865] text-white font-[600] px-4 py-3 text-center">
              Frequency of BCR::ABL1 mutations
            </th>
            <th className="bg-[#003865] text-white font-[600] px-4 py-3 text-center rounded-tr-md">
              Rates of treatment resistance with a 2G TKI in 2L or 3L
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#E3E8EF]">
            <td className="px-4 py-3 font-[600] text-[#1B2430]">1L</td>
            <td className="px-4 py-3 text-center text-[#374151]">
              6%-18%<sup>11-13</sup>
            </td>
            <td className="px-4 py-3 text-center text-[#374151]">
              15%-40%<sup>5-8,11</sup>
            </td>
          </tr>
          <tr className="border-b border-[#E3E8EF] bg-[#F5F7FA]">
            <td className="px-4 py-3 font-[600] text-[#1B2430]">2L</td>
            <td className="px-4 py-3 text-center text-[#374151]">
              21%-33%<sup>9,14,15</sup>
            </td>
            <td className="px-4 py-3 text-center text-[#374151]">
              32%-50%<sup>5-8,15</sup>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-[600] text-[#1B2430]">
              3L<sup>a</sup>
            </td>
            <td className="px-4 py-3 text-center text-[#374151]">
              23%-43%<sup>9,16-18</sup>
            </td>
            <td className="px-4 py-3 text-center text-[#374151]">
              60%<sup>7</sup>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export function CmlUnmetNeedsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />

      {/* Stat cards */}
      <section className="px-8 md:px-20 xl:px-32 py-8 md:py-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <StatCard
            stat={"\u226418%"}
            description={
              "rate of CCyR with a 3L 2G TKI after failure of a prior 2G TKI due to resistance.*\u2020"
            }
            iconColor="#003865"
          />
          <StatCard
            stat={"\u226440%"}
            description={
              "of patients with CP-CML receiving a 2G TKI in 2L experience resistance or intolerance over the course of treatment.\u2021"
            }
            iconColor="#003865"
          />
        </div>
      </section>

      {/* Teal callout */}
      <section className="px-8 md:px-20 xl:px-32 pb-8">
        <div className="max-w-4xl">
          <TealCallout>
            Cycling through 2G TKIs after patients develop resistance to prior
            therapies is associated with low rates of response
            <sup className="text-[60%]">1,2</sup>
          </TealCallout>
        </div>
      </section>

      {/* Footnotes */}
      <section className="px-8 md:px-20 xl:px-32 pb-8">
        <div className="max-w-4xl space-y-3">
          <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
            *Data are from the Ibrahim et al [N=26], Garg et al [N=48], and
            Garcia-Gutierrez et al [N=105] publications. Ibrahim et al analyzed
            a cohort of patients with CP-CML who failed dasatinib (n=20) or
            nilotinib (n=6) after imatinib in various phase 2 studies; none of
            the 7 patients with prior hematologic resistance to TKI therapy
            achieved CCyR. Garg et al analyzed CML patients (AP, BP, and CP)
            sequentially treated with 3 different TKIs at MD Anderson Cancer
            Center; 34 received dasatinib after imatinib and nilotinib failure,
            and 14 received nilotinib after imatinib and dasatinib failure. Among
            25 patients with CP-CML receiving 3L therapy, only 2 of 17 who had
            failed 2L due to resistance achieved CCyR in 3L. Garcia-Gutierrez et
            al identified 105 patients treated with a 2G TKI in 2L after
            imatinib failure in a Spanish national registry; 17 of 31 patients
            who started 3L therapy with another TKI did so due to resistance, and
            the cumulative incidence of CCyR among these patients was 18%.
            <sup>2-4</sup>
          </p>
          <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed font-[600]">
            <sup>&dagger;</sup>Based on nonrandomized, observational,
            retrospective studies that may have unobserved confounding and
            treatment selection biases as well as other limitations that should
            be considered when comparing results with clinical trials. Outcomes
            should be interpreted with caution due to small sample size.
          </p>
          <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
            <sup>&Dagger;</sup>Data are from clinical trials of 2L bosutinib
            [N=46; N=288], nilotinib [N=321], and dasatinib [N=150] in patients
            with CP-CML who were resistant or intolerant to prior TKI therapy.
          </p>
        </div>
      </section>

      {/* Mutations section */}
      <section className="px-8 md:px-20 xl:px-32 py-8 md:py-12 bg-[#F5F7FA]">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-3">
            Resistance may be due to mutations within the BCR::ABL1 domain
            <sup className="text-[60%]">9,10</sup>
          </h2>
          <h3 className="text-[#1B2430] text-[15px] md:text-[17px] font-[600] leading-snug mb-6">
            Rates of BCR::ABL1 mutations and treatment resistance both increase
            with each subsequent line of TKI treatment*
          </h3>

          <MutationsTable />
        </div>
      </section>

      {/* Early identification */}
      <section className="px-8 md:px-20 xl:px-32 py-8 md:py-12">
        <div className="max-w-4xl">
          <h2 className="text-[#1B2430] text-[18px] md:text-[22px] lg:text-[26px] font-[700] leading-snug mb-6">
            Early identification of resistant mutations is crucial to informing
            your patient's next line of treatment
            <sup className="text-[60%]">22</sup>
          </h2>

          {/* T315I blockquote */}
          <blockquote className="border-l-4 border-[#237EBF] bg-[#F5F7FA] rounded-r-lg px-5 py-4 md:px-6 md:py-5 mb-6">
            <p className="text-[#1B2430] text-[15px] md:text-[17px] font-[700] leading-snug">
              T315I is one of the mutations most commonly associated with
              relapse, the most frequently identified mutation in TKI-resistant
              patients, and confers complete resistance to first-generation and
              second-generation TKIs<sup className="text-[60%]">23</sup>
            </p>
          </blockquote>

          {/* Second teal callout */}
          <TealCallout>
            Treatment-resistant patients need a therapy with a high rate of
            response and durability as their disease progresses
            <sup className="text-[60%]">22</sup>
          </TealCallout>

          {/* Footnotes for mutations section */}
          <div className="mt-6 space-y-2">
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
              <sup>a</sup>Results are primarily from a 3L study with 2G TKI
              therapy, but also included 3 patients taking 4L 2G TKI therapy.{" "}
              <strong>
                <sup>b</sup>Approximately two-thirds of patients have not yet
                mutated.
              </strong>
            </p>
            <p className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed font-[600]">
              *Based on nonrandomized, observational, retrospective studies that
              may have unobserved confounding and treatment selection biases as
              well as other limitations that should be considered when comparing
              results with clinical trials. Outcomes should be interpreted with
              caution due to small sample size.
            </p>
          </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className="px-8 md:px-20 xl:px-32 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CtaCard
            title="For patients heavily pretreated with TKIs, consider ICLUSIG"
            linkText="Explore CP-CML: OPTIC efficacy"
            href="/efficacy/cml-optic-trial"
            navigate={navigate}
          />
          <CtaCard
            title="For patients with CML, regardless of mutations, consider ICLUSIG"
            linkText="Explore CP-CML: OPTIC safety"
            href="/safety/cml-optic-trial"
            navigate={navigate}
          />
          <CtaCard
            title="ICLUSIG is a third-generation pan-mutational TKI"
            linkText="Explore MOA"
            href="/cml/mechanism-of-action"
            navigate={navigate}
          />
        </div>
      </section>

      {/* Abbreviations */}
      <section className="px-8 md:px-20 xl:px-32 pb-8">
        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-relaxed max-w-4xl">
          2G=second generation; 2L=second line; 3L=third line; AP=accelerated
          phase; BP=blast phase; CCyR=complete cytogenetic response;
          CHR=complete hematologic response; CML=chronic myeloid leukemia;
          CP=chronic phase; CP-CML=chronic-phase chronic myeloid leukemia;
          TKI=tyrosine kinase inhibitor.
        </p>
      </section>
    </div>
  );
}
