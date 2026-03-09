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
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight mb-3">
          Takeda Patient Support offers a range of resources to help support your patients
        </h1>
        <p className="text-white/80 text-[15px] md:text-[17px] font-[600] leading-snug">
          Patient assistance can help with coverage, financial assistance, and more
        </p>
      </div>
    </section>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6 md:p-8 mb-8">
      <h3 className="text-[#003865] text-[18px] md:text-[20px] font-[700] mb-4">{title}</h3>
      {children}
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
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export function Here2AssistPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />

      {/* Main content */}
      <section className="px-8 md:px-20 xl:px-32 py-8 md:py-12">
        <div className="max-w-4xl">

          {/* ── Takeda Oncology Here2Assist section ── */}
          <h2 className="text-[#003865] text-[20px] md:text-[24px] lg:text-[28px] font-[700] leading-snug mb-2">
            Takeda Oncology Here2Assist<sup className="text-[60%]">&reg;</sup>
          </h2>
          <h3 className="text-[#1B2430] text-[16px] md:text-[18px] font-[600] mb-6">
            Committed to supporting your patients
          </h3>

          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
            Takeda Oncology Here2Assist<sup className="text-[60%]">&reg;</sup> is a
            comprehensive support program committed to helping your patients navigate
            coverage requirements, identify available financial assistance, and connect
            with helpful resources throughout their Takeda Oncology treatment.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-8">
            <li>
              Works with your patients' insurance company to help get your patient started
              on their medication
            </li>
            <li>
              Identifies available financial assistance for your patients and provides
              information on ponatinib costs
            </li>
            <li>
              Identifies a specialty pharmacy to help fill and ship your patients'
              prescriptions appropriately
            </li>
            <li>Conducts regular follow-up calls to patients</li>
          </ul>

          {/* Enrollment steps */}
          <SectionCard title="Enrolling your patients in Takeda Oncology Here2Assist® is simple:">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#003865] text-white text-[13px] font-[700] flex items-center justify-center mt-0.5">
                  1
                </span>
                <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
                  Download and print the Takeda Oncology Here2Assist<sup className="text-[60%]">&reg;</sup>{" "}
                  Enrollment Form from{" "}
                  <a
                    href="https://www.here2assist.com/patient"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#237EBF] font-[600] underline hover:text-[#003865] transition-colors"
                  >
                    www.Here2Assist.com
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#003865] text-white text-[13px] font-[700] flex items-center justify-center mt-0.5">
                  2
                </span>
                <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
                  <strong className="text-[#1B2430]">Complete</strong> and sign the
                  Enrollment Form together with your patient
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#003865] text-white text-[13px] font-[700] flex items-center justify-center mt-0.5">
                  3
                </span>
                <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
                  <strong className="text-[#1B2430]">Fax</strong> the completed Enrollment
                  Form along with a copy of your patient's insurance card and prescription
                  to <span className="font-[600] text-[#1B2430]">1-844-269-3038</span>
                </p>
              </div>
            </div>
          </SectionCard>

          {/* ── Ordering section ── */}
          <h3 className="text-[#003865] text-[18px] md:text-[20px] font-[700] mb-4 mt-10">
            Ordering
          </h3>

          <p className="text-[#1B2430] text-[14px] md:text-[15px] font-[700] leading-relaxed mb-4">
            ICLUSIG is available through an exclusive, integrated specialty pharmacy:
          </p>

          {/* AcariaHealth */}
          <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6 md:p-8 mb-6">
            <p className="text-[#1B2430] text-[15px] md:text-[16px] font-[700] mb-1">
              AcariaHealth
            </p>
            <p className="text-[#374151] text-[14px] md:text-[15px] mb-1">
              833-442-8911
            </p>
            <a
              href="https://www.acariahealth.com/referral_forms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#237EBF] text-[14px] md:text-[15px] font-[600] underline hover:text-[#003865] transition-colors"
            >
              www.acariahealth.com
            </a>

            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mt-5 mb-3">
              There are 2 ways to order ICLUSIG via the AcariaHealth Specialty Pharmacy:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-5">
              <li>
                Submit the ICLUSIG prescription to any AcariaHealth in your e-prescribing
                system
              </li>
              <li>
                Complete the ICLUSIG Referral Form provided by AcariaHealth at{" "}
                <a
                  href="https://www.acariahealth.com/referral_forms.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#237EBF] font-[600] underline hover:text-[#003865] transition-colors break-all"
                >
                  https://www.acariahealth.com/referral_forms.html
                </a>{" "}
                and fax to AcariaHealth as directed on the form
              </li>
            </ul>

            <div className="bg-[#FFF8E1] border-l-4 border-[#F2C94C] rounded-r-lg p-4 mb-5">
              <p className="text-[#1B2430] text-[13px] md:text-[14px] leading-relaxed font-[700]">
                ICLUSIG must be filled through AcariaHealth. Sending an ICLUSIG
                prescription to an alternate pharmacy may result in delay or nonfulfillment
                of the prescription.
              </p>
            </div>
          </div>

          {/* Foundation Care / ICLUSIGDirect */}
          <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6 md:p-8 mb-8">
            <p className="text-[#1B2430] text-[14px] md:text-[15px] font-[700] leading-relaxed mb-4">
              ICLUSIG may be purchased directly from our distribution partner:
            </p>
            <p className="text-[#1B2430] text-[15px] md:text-[16px] font-[700] mb-0">
              Foundation Care
            </p>
            <p className="text-[#374151] text-[14px] md:text-[15px] mb-0">
              An AcariaHealth Solution
            </p>
            <p className="text-[#374151] text-[14px] md:text-[15px] mb-1">
              ICLUSIG Direct Purchase Program
            </p>
            <p className="text-[#374151] text-[14px] md:text-[15px] mb-1">
              833-291-2773
            </p>
            <a
              href="https://www.iclusigdirect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#237EBF] text-[14px] md:text-[15px] font-[600] underline hover:text-[#003865] transition-colors"
            >
              www.ICLUSIGDirect.com
            </a>
          </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className="px-8 md:px-20 xl:px-32 pb-8 md:pb-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <CtaCard
            title="Download resources for your office, staff, and patients"
            linkText="View Resources"
            href="/support/resources"
            navigate={navigate}
          />
          <CtaCard
            title="Explore ICLUSIG patient support and access programs"
            linkText="Patient Support"
            href="/patient-support"
            navigate={navigate}
          />
        </div>
      </section>
    </div>
  );
}
